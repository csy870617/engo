// ==========================================
// AI 튜터: 구글 Gemini와 실시간 말하기 연습
// - 사용자가 자기 Gemini API 키(구글 AI Studio에서 무료로 만듦)를 한 번 붙여 넣으면 이 기기에서 구글로 바로 요청한다.
//   키는 이 기기에만 저장되고 우리 서버를 거치지 않는다. 사용량도 각자의 무료 한도에서 쓴다
// - 듣기: 브라우저 음성 인식(없으면 녹음해서 Gemini로 받아쓰기) / 말하기: 앱 음성 + 소리에 맞춘 입모양
// ==========================================

const GEMINI_API = "https://generativelanguage.googleapis.com/v1beta/models/";
// 대화는 속도가 생명: 튜터의 말은 가장 빠른 Flash-Lite(생각 최소)로 바로 답한다.
// (3.8·3.7 Flash는 생각을 끌 수 없어(최소 low) 답이 늦으므로 맨 마지막 예비로만 쓴다)
// 교정·힌트·번역·받아쓰기 같은 보조 일은 다른 모델부터 써서 무료 사용량을 나눈다.
// 앞 모델의 무료 사용량을 다 쓰거나 잠시 막히면 다음 모델로 넘어간다
const TUTOR_GEMINI_CHAINS = {
  chat: ["gemini-3.5-flash-lite", "gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3.8-flash"],
  aux: ["gemini-3.1-flash-lite", "gemini-3.5-flash-lite", "gemini-3.6-flash"],
  hint: ["gemini-3.5-flash-lite", "gemini-3.6-flash", "gemini-3.1-flash-lite"]   // 힌트는 기다리는 일이라 생각 최소가 확실한 빠른 모델부터
};
const GEMINI_KEY_STORE = "geminiApiKey";
const GEMINI_KEY_PAGE = "https://aistudio.google.com/apikey";
// 튜터 그림: 입 모양별 이미지 3장(다문 입·반쯤 벌린 입·크게 벌린 입)을 넣으면 소리에 맞춰 바뀐다.
// 비워 두면 기본 캐릭터(SVG). 예: { closed: "images/tutor/closed.png", half: "images/tutor/half.png", open: "images/tutor/open.png" }
const TUTOR_AVATAR_FRAMES = null;
// 튜터: 이름 · 기본 목소리 · 영상 폴더 (같은 사진에서 만든 반복 영상: idle 듣기 / talk 말하기 / poster 첫 화면)
const TUTORS = {
  emma: { name: "Emma", label: "Emma", gender: "f", voice: "Leda", media: "images/tutor/emma/web/",
    style: "a bright, warm, youthful young woman with a natural American accent, chatting happily with a friend" },
  jay: { name: "Jay", label: "Jay", gender: "m", voice: "Puck", media: "images/tutor/jay/web/",
    style: "a warm, upbeat, youthful young man with a natural American accent, chatting happily with a friend" }
};
function tutorCharId() { let v = null; try { v = localStorage.getItem("tutorChar"); } catch (e) {} return TUTORS[v] ? v : "emma"; }
const tutorChar = () => TUTORS[tutorCharId()];
const tutorName = () => tutorChar().name;

let tutorMessages = [];       // 모델에 보내는 대화 (system 포함)
let tutorLearnerLines = [];   // 학습자가 말한 문장 (힌트·피드백용)
let tutorCorrections = [];    // 교정한 문장 [{ said, better, why }] (피드백 정리용)
let tutorLearnerItems = [];   // 학습자 말풍선 [{ text, bubble, fix, why, check }] (check: 교정 확인 중인 요청)
let tutorSaidLines = [];      // 튜터가 보여 주고 읽은 답 (되풀이 거르기용)
let tutorGreeting = "";       // 이번 대화의 첫 인사
let tutorBusy = false;
let tutorSessionToken = 0;
let tutorSpeaking = false;
let tutorHintShown = false;
let tutorSpeechToken = 0;
let tutorAbort = null;        // 진행 중인 답 요청 (화면을 떠나거나 새로 시작하면 멈춘다)

// ---------- Gemini 키 ----------
function tutorGetKey() { try { return (localStorage.getItem(GEMINI_KEY_STORE) || "").trim(); } catch (e) { return ""; } }
function tutorSetKey(k) { try { if (k) localStorage.setItem(GEMINI_KEY_STORE, k); else localStorage.removeItem(GEMINI_KEY_STORE); } catch (e) {} }
const tutorReady = () => !!tutorGetKey();

// ---------- Gemini 요청 ----------
class GeminiError extends Error {
  constructor(message, status, reason) { super(message); this.status = status || 0; this.reason = reason || ""; }
}
const tutorModelIdx = { chat: 0, aux: 0, hint: 0 };   // 일마다 지금 쓰는 모델 (목록 안의 위치)
const tutorModelSince = { chat: 0, aux: 0, hint: 0 }; // 다음 모델로 넘어간 시각 (5분 지나면 가장 빠른 첫 모델부터 다시 시도)
// 모델별 생각 수준: 기본은 MINIMAL(가장 빠름). 못 쓰는 모델은 LOW로 (알아낸 것은 기기에 기억해서 헛요청을 줄인다)
const tutorThinking = (() => { let t = {}; try { t = JSON.parse(localStorage.getItem("tutorThinking") || "{}") || {}; } catch (e) {} return { "gemini-3.8-flash": "LOW", "gemini-3.7-flash": "LOW", ...t }; })();
const tutorModelName = (chain = "chat") => TUTOR_GEMINI_CHAINS[chain][tutorModelIdx[chain]];

/** 대화 → Gemini 요청 형식 (system은 systemInstruction으로, 같은 역할이 이어지면 합친다) */
function geminiBody(messages, opts) {
  const sys = messages.filter(m => m.role === "system").map(m => m.content).join("\n\n");
  const contents = [];
  for (const m of messages) {
    if (m.role === "system") continue;
    const role = m.role === "assistant" ? "model" : "user";
    const parts = m.parts || [{ text: m.content }];
    const last = contents[contents.length - 1];
    if (last && last.role === role) last.parts.push(...parts); else contents.push({ role, parts: [...parts] });
  }
  const gc = { temperature: opts.temperature == null ? 0.7 : opts.temperature, maxOutputTokens: opts.maxTokens || 200,
    thinkingConfig: { thinkingLevel: opts.thinking || "MINIMAL" } };
  if (opts.topP) gc.topP = opts.topP;
  if (opts.schema) { gc.responseMimeType = "application/json"; gc.responseSchema = opts.schema; }
  const body = { contents, generationConfig: gc };
  if (sys) body.systemInstruction = { parts: [{ text: sys }] };
  return body;
}
async function geminiFetch(model, method, body, signal) {
  const key = tutorGetKey();
  if (!key) throw new GeminiError("Gemini 키가 연결되어 있지 않아요", 0, "NO_KEY");
  const res = await fetch(`${GEMINI_API}${model}:${method}`, {
    method: "POST", headers: { "content-type": "application/json", "x-goog-api-key": key }, body: JSON.stringify(body), signal
  });
  if (!res.ok) {
    let j = null; try { j = await res.json(); } catch (e) {}
    const er = (j && j.error) || {};
    const reason = ((er.details || []).find(d => d && d.reason) || {}).reason || er.status || "";
    throw new GeminiError(er.message || `HTTP ${res.status}`, res.status, reason);
  }
  return res;
}
/** 키 문제(잘못된 키·권한 없음)인지 */
const geminiKeyProblem = e => e && (e.reason === "API_KEY_INVALID" || e.reason === "NO_KEY" || e.status === 401 ||
  /ACCESS_TOKEN|API_KEY/.test(e.reason || "") || /api key|credential/i.test(e.message || "") && (e.status === 400 || e.status === 403));
/** 모델을 바꿔 다시 해 볼 만한 오류인지 (사용량 초과·모델 없음/권한 없음·서버 혼잡) */
const geminiTryNext = e => e && !geminiKeyProblem(e) && (e.status === 429 || e.status === 404 || e.status === 403 || e.status >= 500 || e instanceof TypeError);
// 구글 서버가 잠깐 바쁘거나(5xx) 연결이 순간 끊긴 건 같은 모델로 한 번 더 해 보면 되는 경우가 많다
const geminiBlip = e => e && (e.status >= 500 || e instanceof TypeError);
/** 모델을 차례로 시도: 생각 수준 설정을 못 쓰는 모델이면 낮춰서 다시, 사용량 초과·혼잡이면 다음 모델로.
 *  run(model, thinking, started)는 started()를 불러 '이미 글자를 보여 주기 시작했음'을 알린다 (그 뒤에는 다른 모델로 넘기지 않음) */
async function geminiCall(run, chain = "chat") {
  const list = TUTOR_GEMINI_CHAINS[chain];
  if (tutorModelIdx[chain] && Date.now() - tutorModelSince[chain] > 5 * 60 * 1000) tutorModelIdx[chain] = 0;
  let last = null;
  for (let k = 0; k < list.length; k++) {
    const idx = (tutorModelIdx[chain] + k) % list.length, model = list[idx];
    let begun = false;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const out = await run(model, tutorThinking[model] || "MINIMAL", () => { begun = true; });
        if (tutorModelIdx[chain] !== idx) { tutorModelIdx[chain] = idx; tutorModelSince[chain] = Date.now(); renderTutorCredit(); }
        return out;
      } catch (e) {
        if (e && e.name === "AbortError") throw e;
        last = e;
        if (begun) throw e;
        console.warn(`Gemini ${model} 실패`, e.status || "", e.message || e);
        if (e.status === 400 && /think/i.test(e.message || "") && tutorThinking[model] !== "LOW") {
          tutorThinking[model] = "LOW";
          try { localStorage.setItem("tutorThinking", JSON.stringify(tutorThinking)); } catch (e2) {}
          continue;
        }
        if (attempt === 0 && geminiBlip(e)) { await new Promise(r => setTimeout(r, 600)); continue; }
        break;
      }
    }
    if (!geminiTryNext(last)) throw last;
  }
  throw last;
}
/** 글자가 오는 대로 onText(지금까지 글)를 부른다. 중간에 signal로 멈추면 그때까지의 글을 돌려준다 */
function geminiStream(messages, opts, onText, signal) {
  return geminiCall(async (model, thinking, started) => {
    const res = await geminiFetch(model, "streamGenerateContent?alt=sse", geminiBody(messages, { ...opts, thinking }), signal);
    const reader = res.body.getReader(), dec = new TextDecoder();
    let buf = "", text = "";
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true }).replace(/\r/g, "");
        let i;
        while ((i = buf.indexOf("\n\n")) >= 0) {
          const evt = buf.slice(0, i); buf = buf.slice(i + 2);
          for (const line of evt.split("\n")) {
            if (!line.startsWith("data:")) continue;
            let j; try { j = JSON.parse(line.slice(5)); } catch (e) { continue; }
            if (j.error) throw new GeminiError(j.error.message, j.error.code, j.error.status);
            const parts = (((j.candidates || [])[0] || {}).content || {}).parts || [];
            const t = parts.filter(p => p && p.text && !p.thought).map(p => p.text).join("");
            if (t) { text += t; started(); onText(text); }
          }
        }
      }
    } catch (e) { if (e && e.name === "AbortError") return text; throw e; }
    return text;
  }, opts.chain || "chat");
}
/** 한 번에 받기 (교정·힌트·번역·받아쓰기·피드백) */
function geminiGenerate(messages, opts, signal) {
  return geminiCall(async (model, thinking) => {
    const res = await geminiFetch(model, "generateContent", geminiBody(messages, { ...opts, thinking }), signal);
    const j = await res.json();
    const parts = (((j.candidates || [])[0] || {}).content || {}).parts || [];
    return parts.filter(p => p && p.text && !p.thought).map(p => p.text).join("");
  }, opts.chain || "aux");
}
/** JSON으로 받기 (형식이 깨졌으면 null) */
async function geminiJSON(messages, opts, signal) {
  const out = await geminiGenerate(messages, opts, signal);
  try { return JSON.parse(out); } catch (e) {
    const m = (out || "").match(/\{[\s\S]*\}/); try { return m ? JSON.parse(m[0]) : null; } catch (e2) { return null; }
  }
}
/** 사용자에게 보여 줄 오류 설명 */
function geminiErrorText(e) {
  if (!e) return "알 수 없는 오류";
  if (geminiKeyProblem(e)) return "Gemini 키가 맞지 않거나 사용할 수 없어요. 키를 다시 확인해 주세요.";
  if (e.status === 429) return "오늘 무료 사용량을 다 썼거나 너무 빨리 보냈어요. 잠시 뒤(또는 내일) 다시 해 주세요.";
  if (e.status >= 500) return `구글 서버가 잠시 바빠요. 조금 뒤에 다시 해 주세요. (오류 ${e.status})`;
  if (e instanceof TypeError) return "인터넷 연결을 확인해 주세요.";
  return e.message || String(e);
}

// ---------- 예전 기기 안 튜터 정리 ----------
// 예전에는 AI 모델(0.3~1.1GB)과 음성 인식 모델을 기기에 받아 썼다. 이제 쓰지 않으니 남은 파일과 설정을 지운다 (한 번만)
async function tutorCleanupOldEngine() {
  try {
    if (localStorage.getItem("tutorOldEngineCleaned") === "1") return;
    if (typeof caches !== "undefined") {
      for (const k of await caches.keys()) if (/^(webllm|tvmjs|transformers-cache)/.test(k)) await caches.delete(k);
    }
    Object.keys(localStorage).filter(k => /^(tutorModelReady|tutorSttReady|tutorProfile|tutorLoadingModel|tutorFailed:|tutorCrashCount:)/.test(k)).forEach(k => localStorage.removeItem(k));
    localStorage.setItem("tutorOldEngineCleaned", "1");
  } catch (e) { console.warn("예전 튜터 파일 정리 실패", e); }
}
setTimeout(tutorCleanupOldEngine, 4000);

// ---------- 화면 ----------
const tutorEl = id => document.getElementById(id);
const tutorIdleMsg = () => `${tutorName()}를 누르면 듣기 시작해요`;   // 말하기 버튼 없이: 튜터 말이 끝나면 저절로 듣고, 튜터를 누르면 듣기 시작·끝내기
function setTutorStatus(text, mode) {
  const st = tutorEl("tutor-status"); if (st) st.textContent = text;
  const av = tutorEl("tutor-avatar"); if (av) av.dataset.mode = mode || "";
  const room = tutorEl("tutor-chat-area"); if (room) room.dataset.mode = mode || "";
}
function showTutorSection(which) {
  tutorEl("tutor-setup").classList.toggle("hidden", which !== "setup");
  tutorEl("tutor-chat-area").classList.toggle("hidden", which !== "chat");
}
function renderTutorCredit() {
  const el = tutorEl("tutor-model-name");
  if (el) el.textContent = tutorReady() ? `AI: Google Gemini (${tutorModelName("chat")}) · 내 키로 연결됨` : "AI: Google Gemini";
}

/** 튜터 페이지에 들어올 때 (core.js goTo) */
function renderTutorPage() {
  tutorCheckMicPermission();
  TutorAvatar.mount();
  renderTutorLevels();
  renderTutorChars();
  renderTutorEndWait();
  fillTutorVoices();
  renderTutorCredit();
  if (!tutorReady()) {
    showTutorSection("setup");
    setTutorStatus("구글 Gemini 키를 연결하면 바로 대화할 수 있어요", "");
    return;
  }
  showTutorSection("chat");
  tutorCallActive = true;
  toggleTutorSheet();
  if (tutorMessages.length === 0) startTutorSession(); else { setTutorStatus(tutorIdleMsg(), ""); tutorAfterSpeak(tutorSessionToken); }
}

function showTutorKeyMsg(text, isError) {
  const m = tutorEl("tutor-key-msg");
  m.textContent = text; m.classList.toggle("hidden", !text); m.classList.toggle("ok", !isError);
}
/** 연결하기: 짧은 요청으로 키가 되는지 확인한 뒤 저장한다 */
async function connectTutorKey() {
  const inp = tutorEl("tutor-key-input"), btn = tutorEl("tutor-key-btn");
  const key = (inp.value || "").replace(/\s+/g, "");
  if (!key) { showTutorKeyMsg("키를 붙여 넣어 주세요.", true); return; }
  // 키 모양: 예전 키 AIza…, 2026년 5월부터 새로 만드는 키(auth key) AQ.… (점·밑줄·하이픈 포함)
  if (/…|\.\.\.$/.test(key)) { showTutorKeyMsg("키가 중간에 잘렸어요. AI Studio에서 키 옆의 복사 버튼(□)을 눌러 전체를 복사해 주세요.", true); return; }
  if (!/^[A-Za-z0-9._\-]{20,}$/.test(key)) { showTutorKeyMsg("키 모양이 이상해요. AI Studio에서 복사 버튼으로 키 전체를 복사해 그대로 붙여 넣어 주세요.", true); return; }
  btn.disabled = true; btn.textContent = "확인 중…"; showTutorKeyMsg("", false);
  const prev = tutorGetKey();
  tutorSetKey(key);
  try {
    await geminiGenerate([{ role: "user", content: "Reply with just: OK" }], { temperature: 0, maxTokens: 10, chain: "aux" });
    inp.value = "";
    showTutorKeyMsg("", false);
    renderTutorPage();
  } catch (e) {
    console.warn("키 확인 실패", e);
    // 사용량 초과·서버 혼잡은 키 자체는 맞으니 저장해 둔다
    if (geminiKeyProblem(e) || !(e.status === 429 || e.status >= 500)) tutorSetKey(prev);
    else renderTutorPage();
    showTutorKeyMsg(geminiErrorText(e), true);
  }
  btn.disabled = false; btn.textContent = "연결하기";
}
/** 키 관리: 연결 끊기 (이 기기에서 키를 지운다) */
function manageTutorKey() {
  if (!confirm("이 기기에서 Gemini 키 연결을 끊을까요?\n다시 쓰려면 키를 다시 붙여 넣으면 돼요.\n(구글 AI Studio에서 키 자체를 지우거나 새로 만들 수도 있어요)")) return;
  stopTutorActivity();
  tutorCallActive = false; toggleTutorSheet();
  tutorSetKey("");
  tutorMessages = []; tutorLearnerLines = []; tutorLearnerItems = [];
  tutorEl("tutor-log").innerHTML = "";
  renderTutorPage();
}

/** 다른 화면으로 갈 때: 말하기·듣기·답 만들기를 멈춘다 */
function stopTutorActivity() {
  tutorSessionToken++;
  tutorPractice = null;
  tutorSpeechToken++;
  tutorSpeaking = false;
  if (tutorMic) { const m = tutorMic; tutorMic = null; m.cancel(); }
  if (tutorAbort) { try { tutorAbort.abort(); } catch (e) {} tutorAbort = null; }
  tutorBusy = false;
}
function leaveTutorPage() {
  stopTutorActivity();
  tutorCallActive = false;
  toggleTutorSheet();
}

// ---------- 대화 화면 ----------
let tutorCallActive = false;   // 대화 화면이 열려 있는 동안 (자동 듣기에 쓴다)
/** 새 대화: 지금 대화를 지우고 Emma가 새 인사로 시작 */
function newTutorConversation() {
  if (tutorLearnerLines.length && !confirm("지금 대화를 지우고 새 대화를 시작할까요?")) return;
  toggleTutorSheet();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  startTutorSession();
}
/** 오늘 대화 피드백 열기 */
function openTutorFeedback() {
  stopTutorActivity();
  setTutorStatus(tutorIdleMsg(), "");
  toggleTutorSheet("feedback");
  tutorFeedback().finally(renderTutorNotes);
  renderTutorNotes();
}
/** 아래에서 올라오는 판 (설정·피드백). 이름 없이 부르면 모두 닫는다 */
function toggleTutorSheet(name) {
  let opened = false, closed = false;
  ["settings", "feedback"].forEach(n => {
    const el = tutorEl("tutor-sheet-" + n); if (!el) return;
    const was = !el.classList.contains("hidden");
    const show = n === name && !was;
    el.classList.toggle("hidden", !show);
    if (show) opened = true; else if (was) closed = true;
  });
  // 판을 여는 동안은 듣지 않고, 닫으면 다시 듣는다
  if (opened) tutorCancelListening();
  else if (closed) tutorAfterSpeak(tutorSessionToken);
}
// 듣기: 말하기 버튼 없이 튜터 말이 끝나면 저절로 마이크를 켠다 (실제 대화처럼).
// 조용하면 두 번까지 다시 듣고, 그래도 말이 없으면 쉰다 (Emma를 누르면 다시 듣기)
let tutorQuietTries = 0;
function tutorTypingNow() { const inp = tutorEl("tutor-input"); return !!inp && (document.activeElement === inp || !!inp.value.trim()); }
function tutorAfterSpeak(token) {
  if (token !== tutorSessionToken || !tutorCallActive || tutorMicDenied) return;
  if (tutorBusy || tutorSpeaking || tutorMic || tutorRecRec) return;
  const page = tutorEl("page-tutor");
  if (!page || page.classList.contains("hidden") || document.hidden) return;
  if (["settings", "feedback"].some(n => !tutorEl("tutor-sheet-" + n).classList.contains("hidden"))) return;
  if (tutorTypingNow()) return;                    // 글로 쓰는 중이면 듣지 않는다
  setTimeout(() => { if (token === tutorSessionToken && tutorCallActive && !tutorBusy && !tutorSpeaking && !tutorMic && !tutorRecRec && !tutorTypingNow()) toggleTutorMic(); }, 250);
}
/** 조용해서 듣기가 끝났을 때: 몇 번은 다시 듣고, 그다음엔 Emma를 누를 때까지 쉰다 */
function tutorQuietRestart() {
  if (tutorQuietTries >= 2 || !tutorCallActive) { tutorQuietTries = 0; setTutorStatus(`소리가 들리지 않았어요 · ${tutorName()}를 누르면 다시 들어요`, ""); return; }
  tutorQuietTries++;
  tutorAfterSpeak(tutorSessionToken);
}
/** 듣기를 그만둔다 (들은 말은 보내지 않음) */
function tutorCancelListening() {
  let was = false;
  if (tutorMic) { const m = tutorMic; tutorMic = null; was = true; m.cancel(); }
  if (tutorRecRec) { const r = tutorRecRec; tutorRecRec = null; was = true; r.cancelled = true; try { r.stop(); } catch (e) {} }
  if (was) { tutorEl("tutor-input").value = ""; setTutorStatus(tutorIdleMsg(), ""); }
  if (tutorPractice) tutorPracticeEnd("");
}
/** Emma(위쪽 그림)를 누르면: 말하는 중이면 끊고 바로 듣기, 듣는 중이면 끝내고 보내기, 쉬는 중이면 듣기 시작 */
function tutorTapTutor(e) {
  if (e && e.target.closest && e.target.closest("button")) return;
  if (!tutorReady() || tutorBusy) return;
  tutorQuietTries = 0;
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  if (tutorMic || tutorRecRec) { toggleTutorMic(); return; }
  const inp = tutorEl("tutor-input");
  if (document.activeElement === inp) inp.blur();
  toggleTutorMic();
}
/** 입력칸을 누르면 듣기를 멈추고(그림을 줄여 대화가 잘 보이게), 입력을 마치고 나가면 다시 듣는다 */
function tutorInputFocus(on) {
  const room = tutorEl("tutor-chat-area");
  if (room) room.classList.toggle("typing", on);
  setTimeout(() => { const log = tutorEl("tutor-log"); log.scrollTop = log.scrollHeight; }, 300);   // 그림 크기가 바뀐 뒤 최근 대화가 보이게
  if (on) { if (tutorMic || tutorRecRec) tutorCancelListening(); return; }
  setTimeout(() => { if (!tutorTypingNow()) tutorAfterSpeak(tutorSessionToken); }, 300);
}
// 휴대폰 키보드가 올라오면 대화 화면을 키보드 위 영역에 맞춘다 (입력칸이 키보드에 가리지 않게)
function tutorFitViewport() {
  const call = tutorEl("tutor-call"), vv = window.visualViewport;
  if (!call || !vv) return;
  if (window.innerHeight - vv.height > 80) { call.style.top = vv.offsetTop + "px"; call.style.height = vv.height + "px"; call.style.bottom = "auto"; }
  else call.style.top = call.style.height = call.style.bottom = "";
}
if (window.visualViewport) { visualViewport.addEventListener("resize", tutorFitViewport); visualViewport.addEventListener("scroll", tutorFitViewport); }
// ---------- 수준 ----------
function renderTutorLevels() {
  const cur = tutorLevelId();
  ["tutor-levels", "tutor-levels-set"].forEach(id => {
    const box = tutorEl(id);
    if (box) box.innerHTML = Object.entries(TUTOR_LEVELS).map(([k, v]) =>
      `<button class="tutor-level-btn${k === cur ? " active" : ""}" onclick="changeTutorLevel('${k}')">${v.label}</button>`).join("");
  });
}
/** 수준 바꾸기: 지금 대화는 그대로 두고, 튜터가 다음 말부터 새 수준으로 말한다 */
/** 튜터 고르기 (Emma / Jay): 얼굴·이름·목소리가 바뀌고 새 대화로 시작 */
function renderTutorChars() {
  const box = tutorEl("tutor-chars-set"), cur = tutorCharId();
  if (box) box.innerHTML = Object.entries(TUTORS).map(([k, v]) =>
    `<button class="tutor-level-btn${k === cur ? " active" : ""}" onclick="changeTutorChar('${k}')">${v.label}</button>`).join("");
  const nm = tutorEl("tutor-name"); if (nm) nm.textContent = tutorName();
}
function changeTutorChar(id) {
  if (!TUTORS[id] || id === tutorCharId()) return;
  if (tutorLearnerLines.length && !confirm(`${TUTORS[id].name}와 새 대화를 시작할까요? 지금 대화는 지워져요.`)) return;
  try {
    localStorage.setItem("tutorChar", id);
    if (localStorage.getItem("tutorVoice") !== "app") localStorage.removeItem("tutorVoice");   // 목소리도 그 튜터의 기본 목소리로
  } catch (e) {}
  renderTutorChars(); fillTutorVoices();
  TutorAvatar.remount();
  toggleTutorSheet();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  startTutorSession();
}
function changeTutorLevel(id) {
  if (!TUTOR_LEVELS[id] || id === tutorLevelId()) return;
  try { localStorage.setItem("tutorLevel", id); } catch (e) {}
  renderTutorLevels();
  if (tutorMessages.length) tutorMessages[0] = { role: "system", content: tutorSystemPrompt() };
  setTutorStatus(`이제 ${tutorLevel().label} 수준으로 말할게요`, "");
  if (tutorHintShown) renderTutorHint();
}

// ---------- 프롬프트·후처리 (평가 스크립트도 같은 함수를 쓴다) ----------
// 학습자 수준: 튜터 말의 길이·어휘가 달라진다 (maxWords·maxFull: 화면에 보여 주고 읽는 답의 최대 길이)
const TUTOR_LEVELS = {
  beginner: { label: "초급", maxWords: 24, maxFull: 2, desc: "beginner (A1-A2)",
    style: ["Say 1 or 2 short sentences, about 15 words in total.", "Use only very common everyday words and simple present/past grammar. No idioms or slang."] },
  intermediate: { label: "중급", maxWords: 34, maxFull: 3, desc: "intermediate (B1)",
    style: ["Say 2 or 3 sentences, about 25 words in total.", "Use natural everyday expressions and common phrasal verbs, but avoid rare words."] },
  advanced: { label: "고급", maxWords: 45, maxFull: 3, desc: "upper-intermediate to advanced (B2-C1)",
    style: ["Say 2 or 3 sentences, about 35 words in total.", "Talk like a friendly native speaker, with natural idioms and varied vocabulary."] }
};
function tutorLevelId() { let v = null; try { v = localStorage.getItem("tutorLevel"); } catch (e) {} return TUTOR_LEVELS[v] ? v : "beginner"; }
const tutorLevel = () => TUTOR_LEVELS[tutorLevelId()];
/** 좋은 회화 선생님처럼 말하는 규칙 (모든 수준 공통 + 수준별 길이·어휘) */
function tutorStyle() {
  return [
    "How to teach:",
    "- Your main goal is to get the student speaking as much as possible. Keep your turns short and end with one question that invites a real answer (open questions are better than yes/no).",
    "- React to what the student actually said with genuine interest, then build on it. Never repeat something you already said.",
    "- If the student makes a mistake, do not point it out. Naturally use the correct form in your reply instead (for example, if they say \"I go to park yesterday\", you might say \"Oh, you went to the park yesterday? What did you do there?\"). Corrections are shown to the student separately.",
    "- If the student writes in Korean or says they don't know how to say something, give a simple English way to say it, starting with \"You can say:\", and encourage them to try it.",
    "- If the student asks what a word means, explain it simply in English with a short example.",
    ...tutorLevel().style.map(x => "- " + x),
    "- Speak naturally like a real person talking out loud. No lists, no emojis, no markdown, no notes in brackets, no Korean. Never say you are an AI."
  ].join("\n");
}
/** 노트 표현을 대화 속에서 다시 써 보게 (간격을 두고 다시 쓰는 연습) */
function tutorNotesPrompt() {
  const list = tutorNotesForPrompt();
  if (!list.length) return "";
  return "\nThe student has been learning these expressions. When it fits naturally, ask questions that give the student a chance to use them. Never quiz the student or mention this list:\n" +
    list.map(x => "- " + x).join("\n");
}
function tutorSystemPrompt() {
  return `You are ${tutorName()}, a warm, encouraging and skilled English conversation teacher. Your student is a Korean adult at the ${tutorLevel().desc} level who wants to get comfortable speaking English. ` +
    "Have a friendly, natural conversation about everyday life: the student's day, food, work, hobbies, family, weekend plans, travel and feelings. Follow the student's interests, go deeper into what they share, and naturally bring up a new topic when one runs out.\n" +
    `You already started the chat by saying: "${tutorGreeting}" Do not greet or introduce yourself again.\n${tutorStyle()}` + tutorNotesPrompt();
}
// 첫 인사: 매번 다르게. 처음 만나면 자기소개, 다시 오면 반가운 인사 + 시간대·요일·계절·일상 주제 질문 하나.
// 최근에 했던 질문은 피하고, 중급·고급이면 생각을 끌어내는 질문도 섞는다
const TUTOR_OPENERS = {
  first: ["Hi, I'm {name}! Nice to meet you.", "Hello! I'm {name}, your English buddy.", "Hey there, I'm {name}! So nice to meet you."],
  back: ["Hi again!", "Welcome back!", "Hey, good to see you again!", "Oh, hi! Nice to see you.", "Hello again!", "Hey there!", "Hi! I'm so glad you're here."],
  morning: ["Good morning!", "Morning!"], afternoon: ["Good afternoon!"], evening: ["Good evening!"]
};
const TUTOR_QUESTIONS = {
  morning: ["Did you sleep well last night?", "What's your plan for today?", "Have you had breakfast yet?", "Are you a morning person?",
    "How are you feeling this morning?", "What did you have for breakfast?", "Is it a busy day for you today?"],
  afternoon: ["How's your day going so far?", "What did you have for lunch today?", "Are you busy today?", "What have you been up to today?",
    "Are you taking a break right now?", "What's the best thing that happened today so far?"],
  evening: ["How was your day?", "What did you do today?", "Did anything fun happen today?", "What did you have for dinner?",
    "Are you tired after your day?", "What are you going to do tonight?", "What was the best part of your day?"],
  night: ["You're up late! What are you doing tonight?", "Can't sleep? How was your day?", "Are you a night owl?", "What was the best part of your day?"],
  monday: ["How was your weekend?", "Did you do anything fun over the weekend?", "Are you ready for a new week?"],
  friday: ["Any plans for the weekend?", "It's almost the weekend! What are you going to do?", "How was your week?"],
  weekend: ["What are you doing this weekend?", "Are you relaxing today?", "Did you sleep in today?", "How's your weekend going?"],
  spring: ["Have you seen any cherry blossoms this year?", "Do you like spring?", "Have you been outside to enjoy the spring weather?"],
  summer: ["It's so hot these days! How do you stay cool?", "Do you have any summer vacation plans?", "What's your favorite summer food?"],
  autumn: ["Do you like the fall weather?", "Have you seen the autumn leaves yet?", "What's your favorite thing about fall?"],
  winter: ["It's cold these days! Do you like winter?", "What do you like to do on cold days?", "What's your favorite winter food?"],
  yearEnd: ["Do you have any plans for the holidays?", "How was your year?", "What was the best moment of your year?"],
  newYear: ["Happy New Year! Do you have any New Year's resolutions?", "What do you want to do this year?"],
  any: ["What's your favorite food?", "Do you have any hobbies?", "What kind of music do you like?", "Have you watched any good movies lately?",
    "Do you have any pets?", "What do you like to do in your free time?", "Where would you like to travel next?", "What's the weather like where you are?",
    "Do you like coffee or tea?", "What's something that made you happy this week?", "Have you tried any new restaurants recently?",
    "What's your favorite K-pop song right now?", "Do you like cooking?", "Do you like to exercise?", "What are you watching these days?",
    "Do you have a favorite place in your city?", "What's your dream vacation?", "Why are you learning English?", "Do you like reading books?",
    "What's your favorite season?", "Do you like shopping?", "What did you do last weekend?", "Are you a cat person or a dog person?",
    "What's your favorite snack?", "Do you play any games?", "Have you learned anything new recently?", "What do you usually do after work or school?",
    "What's your favorite drink?", "Do you like spicy food?", "What's one thing you want to do this year?", "Have you been anywhere fun lately?",
    "What's your favorite way to relax?", "Do you like going to cafes?", "What's a food you could eat every day?"],
  deep: ["If you could live in any country, where would you choose?", "What's a skill you'd love to learn someday?", "What's the best trip you've ever taken?",
    "What does a perfect day look like for you?", "What's something you're looking forward to these days?", "If you could have dinner with anyone, who would it be?",
    "What's a small habit that makes your life better?", "What's the most interesting thing you've learned this year?"]
};
const tutorPick = list => list[Math.floor(Math.random() * list.length)];
function tutorPickGreeting() {
  const now = new Date(), h = now.getHours(), day = now.getDay(), m = now.getMonth() + 1, d = now.getDate();
  const time = h >= 5 && h < 11 ? "morning" : h >= 11 && h < 17 ? "afternoon" : h >= 17 && h < 23 ? "evening" : "night";
  const Q = TUTOR_QUESTIONS;
  let context = [...Q[time], ...(day === 1 ? Q.monday : day === 5 ? Q.friday : day === 0 || day === 6 ? Q.weekend : []),
    ...(m >= 3 && m <= 5 ? Q.spring : m >= 6 && m <= 8 ? Q.summer : m >= 9 && m <= 11 ? Q.autumn : Q.winter),
    ...(m === 12 && d >= 15 ? Q.yearEnd : m === 1 && d <= 10 ? Q.newYear : [])];
  const general = [...Q.any, ...(tutorLevelId() === "beginner" ? [] : Q.deep)];
  let recent = [], visits = 0;
  try { recent = JSON.parse(localStorage.getItem("tutorRecentQs") || "[]"); visits = +localStorage.getItem("tutorVisits") || 0; } catch (e) {}
  const fresh = list => list.filter(q => !recent.includes(q));
  // 반쯤은 지금 때에 맞는 질문, 반쯤은 일상 주제 (최근 질문은 빼고, 다 썼으면 아무거나)
  const pool = Math.random() < 0.5 ? fresh(context) : fresh(general);
  const q = tutorPick(pool.length ? pool : fresh([...context, ...general]).length ? fresh([...context, ...general]) : general);
  const timeOpen = time === "night" ? [] : TUTOR_OPENERS[time];
  const opener = visits === 0 ? tutorPick(TUTOR_OPENERS.first) : tutorPick([...TUTOR_OPENERS.back, ...timeOpen]);
  try {
    localStorage.setItem("tutorRecentQs", JSON.stringify([q, ...recent.filter(x => x !== q)].slice(0, 25)));
    localStorage.setItem("tutorVisits", String(visits + 1));
  } catch (e) {}
  return opener.replace("{name}", tutorName()) + " " + q;
}
function tutorStartMessages() {
  // 인사는 시스템 안내에 적어 둔다 (가짜 대화를 넣으면 모델이 인사를 되풀이하기도 함)
  return [{ role: "system", content: tutorSystemPrompt() }];
}
// 답: 짧은 답이라 생각(thinking)은 최소로 해서 빠르게. 두 문장 넘게 쓰면 중간에 끊는다(tutorReplyDone)
const TUTOR_REPLY_OPTS = { temperature: 0.8, topP: 0.95, maxTokens: 160, chain: "chat" };

/** 모델 답 정리: 역할 이름·학습자 대사 이어 쓰기·이모지·한국어·괄호 메모를 걷어 내고 2문장까지만 */
function cleanTutorSay(raw) {
  const lines = (raw || "").replace(/\r/g, "").split("\n");
  const kept = [];
  for (const line of lines) {
    if (/^\s*\**\s*(A|Learner|User|Student|You)\s*\**\s*:/i.test(line)) break;   // 학습자 대사까지 지어내면 거기서 끊는다
    if (/^\s*\**\s*(Tip|Note|Correction)\s*\**\s*:/i.test(line)) break;
    kept.push(line.replace(/^\s*\**\s*(B|Emma|Jay|Tutor|Teacher)\s*\**\s*:\s*/i, ""));
  }
  let s = kept.join(" ")
    .replace(/[*_#`~]/g, "")
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(/\([^)]*\)|\[[^\]]*\]/g, "")
    .replace(/[가-힣ㄱ-ㅎ]+/g, "")
    .replace(/\s+/g, " ").trim()
    .replace(/^["“']+|["”']+$/g, "")
    .replace(/^[\s,.;:!?-]+/, "").trim();
  const DOT = "\u2024";   // 숫자 사이 점(6.25)과 Mr./Dr. 같은 약어는 문장 끝이 아니다
  s = s.replace(/(\d)\.(\d)/g, `$1${DOT}$2`).replace(/\b(Mr|Mrs|Ms|Dr|St)\./g, `$1${DOT}`);
  const sentences = (s.match(/[^.!?]+[.!?]+["”']?|[^.!?]+$/g) || []).map(x => x.split(DOT).join("."));
  let out = "", full = 0;
  const lv = tutorLevel();
  for (const sen of sentences) {
    const next = (out + " " + sen.trim()).trim();
    // 긴 문장은 수준별 개수까지. 단, 대화를 이어 가는 질문이 뒤에 오면 붙여 준다 (수준별 단어 수 안에서)
    if (out && (next.split(" ").length > lv.maxWords || (full >= lv.maxFull && !/\?["”']?$/.test(sen.trim())))) break;
    out = next;
    if (sen.trim().split(" ").length > 2) full++;   // "Hello!", "Sure." 같은 짧은 말은 문장 수에 넣지 않는다
  }
  return out;
}

/** 작은 모델이 자주 하는 실수 걸러 내기 (문장 단위로, 앞에서부터 확정되므로 끝난 문장부터 읽기와 함께 써도 된다)
 *  - 학습자 말을 그대로 따라 하는 문장 ("Here is my passport." → 튜터가 "Here is my passport.")
 *  - 바로 앞 답들에서 이미 한 문장 그대로 되풀이 ("How about you?" 반복 등)
 *  - 대화 중간에 다시 자기소개 ("I'm Emma, ...")
 *  다 걸러져 버리면 원래 문장을 그대로 둔다 (strict면 빈 글자 — 답을 만드는 도중에는 뒤에 더 나올 수 있어서) */
/** 문장 나누기 (6.25나 Mr. 같은 점에서는 나누지 않는다) */
function tutorSplitSentences(text) {
  const DOT = "\u2024";
  const t = (text || "").replace(/(\d)\.(\d)/g, `$1${DOT}$2`).replace(/\b(Mr|Mrs|Ms|Dr|St)\./g, `$1${DOT}`);
  return (t.match(/[^.!?]+[.!?]+["”']?|[^.!?]+$/g) || []).map(x => x.split(DOT).join(".").trim()).filter(Boolean);
}
function tutorPolish(clean, learner, prevSays, strict) {
  if (!clean) return clean;
  const sents = tutorSplitSentences(clean);
  const words = x => tutorNorm(x).split(" ").filter(Boolean);
  const lw = new Set(words(learner || ""));
  const prev = new Set((prevSays || []).flatMap(p => tutorSplitSentences(p).map(tutorNorm)));
  const kept = sents.filter(x => {
    const w = words(x);
    if (!w.length) return false;
    if (w.length >= 3 && w.filter(t => lw.has(t)).length / w.length >= 0.8) return false;
    if (prev.has(tutorNorm(x))) return false;
    if ((prevSays || []).length && /\b(i'm|i am) (emma|jay)\b/i.test(x)) return false;
    return true;
  });
  return kept.length ? kept.map(x => x.trim()).join(" ") : (strict ? "" : clean);
}

// ---------- 교정 ----------
// 학습자가 한 문장마다 Gemini에게 고칠 데가 있는지 묻는다 (답과 동시에 따로 요청해서 대화가 느려지지 않게).
// 고칠 문장과 한국어 한 줄 이유를 JSON으로 받는다
const TUTOR_FIX_SCHEMA = {
  type: "OBJECT",
  properties: { ok: { type: "BOOLEAN" }, better: { type: "STRING" }, why: { type: "STRING" } },
  required: ["ok"]
};
function tutorFixMessages(text, before) {
  return [
    { role: "system", content: "You check sentences spoken by Korean adult beginners practicing everyday English conversation. " +
      "If the sentence has a grammar mistake (missing a/an/the, wrong tense, missing plural -s, wrong word form like bored/boring, wrong word order) " +
      "or a clearly wrong word, set ok=false, give the corrected sentence in 'better' (keep the meaning and as many of the learner's words as possible), " +
      "and in 'why' explain the main fix in very short Korean (under 20 characters, e.g. \"과거형 went\", \"관사 a 필요\"). " +
      "The text comes from speech recognition, so ignore capital letters, punctuation and missing periods. " +
      "If the sentence is already correct, set ok=true even if other wordings are possible. Short answers like \"Yes.\" or \"Medium, please.\" are correct." },
    { role: "user", content: (before ? `The tutor said: "${before}"\n` : "") + `Learner's sentence: "${text}"` }
  ];
}
const TUTOR_FIX_OPTS = { temperature: 0, maxTokens: 200, schema: TUTOR_FIX_SCHEMA, chain: "aux" };
/** 교정 결과 정리: 원래 문장과 너무 다른 '고친 문장'은 버린다 (엉뚱한 답 방지) */
function parseTutorFix(text, out) {
  let j = null; try { j = JSON.parse(out || "{}"); } catch (e) { return { better: "", why: "" }; }
  if (!j || j.ok !== false || !j.better) return { better: "", why: "" };
  const better = parseTutorCorrection(text, j.better);
  return { better, why: better ? String(j.why || "").replace(/[\r\n]+/g, " ").slice(0, 40) : "" };
}

const tutorNorm = x => (x || "").toLowerCase().replace(/[’]/g, "'").replace(/[^a-z0-9' ]/g, " ").replace(/\s+/g, " ").trim();
function parseTutorCorrection(original, out) {
  let c = ((out || "").trim().split("\n")[0] || "").trim();
  const quoted = c.match(/["“]([^"”]+)["”]/);                            // 'The learner said: "..."' 같은 군말이면 따옴표 안만
  if (quoted && /said|correct|sentence|answer/i.test(c)) c = quoted[1];
  c = c.replace(/^(corrected( sentence)?|correction|answer|better|the correct sentence is)\s*:\s*/i, "")
    .replace(/^["“']+|["”']+$/g, "").trim();
  if (!c || /^ok\b/i.test(c) || /[가-힣]/.test(c)) return "";
  const a = tutorNorm(original), b = tutorNorm(c);
  if (a === b) return "";                                                // 대소문자·문장부호만 다르면 고칠 것 없음
  const aw = a.split(" "), bw = b.split(" ");
  if (bw.length > aw.length * 2 + 4 || bw.length < aw.length / 2) return "";   // 아예 다른 문장은 버린다
  const common = aw.filter(w => bw.includes(w)).length;
  if (common < Math.ceil(aw.length * 0.5)) return "";                     // 원래 문장과 겹치는 말이 절반도 안 되면 버린다
  return c;
}
/** 짧은 대답(Yes, Thank you 등)은 고칠 게 거의 없으니 건너뛴다 */
function tutorNeedsCheck(text) { return tutorNorm(text).split(" ").filter(Boolean).length >= 3; }

// ---------- 대화 ----------
function startTutorSession() {
  if (!tutorReady()) return;
  stopTutorActivity();
  const token = ++tutorSessionToken;
  tutorSessionStartedAt = Date.now();
  tutorGreeting = tutorPickGreeting();   // 시간대·요일·계절·주제에 맞춰 매번 다른 첫 질문
  tutorMessages = tutorStartMessages();
  tutorLearnerLines = [];
  tutorLearnerItems = [];
  tutorCorrections = [];
  tutorSaidLines = [tutorGreeting];
  tutorEl("tutor-log").innerHTML = "";
  tutorEl("tutor-feedback").classList.add("hidden");
  tutorHintShown = false; renderTutorHint();
  const greet = tutorGreeting;
  const b = addTutorBubble("tutor", greet);
  b.onclick = () => speakTutor(greet, tutorSessionToken);
  addSlowButton(b, greet);
  addTranslateButton(b, greet);
  tutorPrepareHints();
  speakTutor(greet, token).then(() => tutorAfterSpeak(token));
}

/** 학습자 문장 보내기 (음성 인식 결과 / 입력창) */
async function sendTutorText(text) {
  text = (text || "").trim();
  if (!text || !tutorReady() || tutorBusy) return false;
  stopTutorSpeech();
  tutorQuietTries = 0;
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();   // 듣는 동안 쉬던 재생 장치를 미리 깨워 둔다 (답 소리가 바로 나게)
  const token = tutorSessionToken;
  tutorLearnerLines.push(text);
  const myBubble = addTutorBubble("me", text);
  const item = { text, bubble: myBubble, fix: undefined, why: "", check: null };
  tutorLearnerItems.push(item);
  tutorCheckItem(item, tutorSaidLines[tutorSaidLines.length - 1], token);   // 답과 동시에 교정 확인
  tutorCheckNoteUse(text, myBubble);
  tutorMessages.push({ role: "user", content: text });
  tutorHintShown = false; renderTutorHint();
  await tutorReply(token, { text, bubble: myBubble });
  return true;
}
function sendTutorTyped() {
  const inp = tutorEl("tutor-input");
  const t = inp.value;
  if (!t.trim() || tutorBusy || !tutorReady()) return;   // 튜터가 답을 만드는 중이면 입력은 그대로 둔다
  tutorCancelListening();
  inp.value = "";
  if (/[가-힣]/.test(t)) { inp.blur(); tutorKoreanHelp(t.trim()); return; }   // 한국어로 쓰면 영어 표현을 알려 준다
  sendTutorText(t);
}
/** 문장 하나 교정 확인 → 고칠 게 있으면 내 말풍선 아래에 팁 (실패해도 대화는 그대로, 피드백 때 다시 시도) */
function tutorCheckItem(item, before, token) {
  if (!tutorNeedsCheck(item.text)) { item.fix = ""; return Promise.resolve(); }
  item.check = geminiGenerate(tutorFixMessages(item.text, before), TUTOR_FIX_OPTS)
    .then(out => {
      const r = parseTutorFix(item.text, out);
      item.fix = r.better; item.why = r.why;
      if (r.better && token === tutorSessionToken && item.bubble && item.bubble.isConnected) { addTutorTip(item.bubble, r.better, r.why, item.text); }
    })
    .catch(e => { console.warn("교정 확인 실패", e); item.fix = undefined; })
    .finally(() => { item.check = null; });
  return item.check;
}

/** 답 만들기 → 말풍선 → 소리 내어 읽기
 *  - 글자가 오는 대로 보여 주고, 끝난 문장부터 바로 읽기 시작한다
 *  - 두 문장을 마치거나 질문을 하면 더 받지 않고 멈춘다 */
async function tutorReply(token, learner) {
  tutorBusy = true;
  setTutorStatus("생각 중…", "thinking");
  const bubble = addTutorBubble("tutor", "…");
  const bubbleText = bubble.querySelector(".tutor-text");
  const abort = new AbortController();
  tutorAbort = abort;
  let shown = "", stopped = false;
  const voice = tutorSpeechQueue(token);
  const prev = () => tutorSaidLines.slice(-2);
  try {
    await geminiStream(tutorContext(), TUTOR_REPLY_OPTS, raw => {
      if (stopped || token !== tutorSessionToken) return;
      shown = raw;
      const clean = cleanTutorSay(shown);
      const live = tutorPolish(clean, learner && learner.text, prev(), true);
      bubbleText.textContent = live || "…";
      const log = tutorEl("tutor-log"); log.scrollTop = log.scrollHeight;
      voice.upTo(tutorPolish(tutorFinishedSentences(clean, shown), learner && learner.text, prev(), true));
      if (tutorReplyDone(raw)) { stopped = true; abort.abort(); }
    }, abort.signal);
  } catch (e) {
    if (tutorAbort === abort) tutorAbort = null;
    console.warn("튜터 답 생성 실패", e);
    voice.cancel();
    if (token === tutorSessionToken) {
      // 답을 못 한 문장은 대화 기록에서 빼서 다음 말이 자연스럽게 이어지게 한다
      const last = tutorMessages[tutorMessages.length - 1];
      if (last && last.role === "user") tutorMessages.pop();
      bubbleText.textContent = "(답을 받지 못했어요. 다시 말해 주세요.)";
      const why = document.createElement("div");
      why.className = "tutor-err";
      why.textContent = geminiErrorText(e);
      bubble.appendChild(why);
      setTutorStatus("답을 받지 못했어요 · 다시 말하거나 ↻를 눌러 주세요", "");
      if (geminiKeyProblem(e)) { tutorSetKey(""); setTimeout(() => { alert(geminiErrorText(e)); renderTutorPage(); }, 0); }
      else if (last && last.role === "user") {
        // 같은 말을 다시 보내기 (말하거나 다시 입력하지 않아도 되게)
        const again = document.createElement("button");
        again.className = "tutor-slow-btn";
        again.textContent = "↻ 다시 보내기";
        again.onclick = ev => {
          ev.stopPropagation();
          if (tutorBusy || token !== tutorSessionToken || tutorEl("tutor-log").lastElementChild !== bubble) { again.remove(); return; }
          tutorCancelListening();
          bubble.remove();
          tutorMessages.push(last);
          tutorReply(token, learner);
        };
        bubble.appendChild(again);
      }
    }
    tutorBusy = false;
    if (tutorHintShown) renderTutorHint();
    if (token === tutorSessionToken && !geminiKeyProblem(e)) tutorAfterSpeak(token);   // 바로 다시 말할 수 있게 듣는다
    return;
  }
  if (tutorAbort === abort) tutorAbort = null;
  if (token !== tutorSessionToken) { tutorBusy = false; return; }
  const text = tutorPolish(cleanTutorSay(shown), learner && learner.text, prev()) || "Sorry, could you say that again?";
  tutorSaidLines.push(text);
  voice.upTo(text, true);     // 남은 문장까지 마저 읽는다
  bubbleText.textContent = text;
  bubble.onclick = () => speakTutor(text, tutorSessionToken);
  addSlowButton(bubble, text);
  addTranslateButton(bubble, text);
  tutorMessages.push({ role: "assistant", content: text });
  tutorBusy = false;
  tutorPrepareHints();        // 듣는 동안 다음에 할 말 힌트를 미리 만들어 둔다
  await voice.finish();
  tutorAfterSpeak(token);
}

/** 지금까지 끝난 문장들 (마지막 문장은 문장부호 뒤에 다음 글자가 와야 끝난 것으로 본다. 6.25나 Mr. 같은 점은 문장 끝이 아님) */
function tutorFinishedSentences(clean, raw) {
  // 마지막 문장부호 뒤에 띄어쓰기가 이미 왔으면 마지막 문장도 끝난 것 (다음 문장이 화면에서 잘려도)
  if (raw && /[.!?]["”']?$/.test(clean) && !/\b(Mr|Mrs|Ms|Dr|St)\.$/.test(clean) && /[.!?]["”']?\s+\S*$/.test(raw)) return clean;
  const DOT = "\u2024";
  const t = clean.replace(/(\d)\.(\d)/g, `$1${DOT}$2`).replace(/\b(Mr|Mrs|Ms|Dr|St)\./g, `$1${DOT}`);
  let end = -1;
  for (const m of t.matchAll(/[.!?]+["”']?(?=\s)/g)) end = m.index + m[0].length;
  return end < 0 ? "" : t.slice(0, end).split(DOT).join(".");
}

/** 튜터 목소리 줄: 문장이 끝나는 대로 받아 차례로 읽는다 (중간에 끊거나 새 대화가 시작되면 남은 문장은 읽지 않음) */
function tutorSpeechQueue(token) {
  const my = ++tutorSpeechToken;
  let chain = Promise.resolve(), dead = false;
  const spoken = [];                                 // 이미 줄에 넣은 문장
  const alive = () => !dead && token === tutorSessionToken && my === tutorSpeechToken;
  return {
    /** 읽을 문장이 text까지 늘었다: 아직 줄에 안 넣은 문장만 차례로 넣는다 (걸러 내기로 앞 문장이 바뀌어도 겹쳐 읽지 않음).
     *  구글 AI 음성이면 첫 문장은 바로, 나머지는 답이 다 오면(final) 한 번에 받는다 (요청 수를 줄여 무료 한도를 아낀다) */
    upTo(text, final) {
      if (!alive() || !text) return;
      const google = tutorUseGoogleVoice() && typeof NeuralTTS !== "undefined";
      let parts = tutorSplitSentences(text).filter(x => !spoken.includes(x));
      if (google && spoken.length) { if (!final) return; parts = parts.length ? [parts.join(" ")] : []; }
      else if (google && !final) parts = parts.slice(0, 1);
      else if (google && final && parts.length > 1) parts = [parts[0], parts.slice(1).join(" ")];
      for (const part of parts) {
        tutorSplitSentences(part).forEach(x => spoken.push(x));
        tutorSpeaking = true;
        setTutorStatus("말하는 중…", "speaking");
        if (google) {
          const clip = tutorTtsFetch(part, false);           // 앞 문장을 읽는 동안 미리 받아 둔다 (받는 중이어도 차례가 오면 바로 튼다)
          chain = chain.then(() => alive() && tutorPlayClip(clip, part, alive));
        } else {
          chain = chain.then(async () => { if (alive()) { try { await tutorDeviceSpeak(part); } catch (e) {} } });
        }
      }
    },
    async finish() {
      await chain;
      if (!alive()) return;
      tutorSpeaking = false;
      setTutorStatus(tutorIdleMsg(), "");
    },
    cancel() { dead = true; }
  };
}

/** 답을 그만 써도 되는지: 줄을 바꿨거나(학습자 대사·메모를 지어내기 시작), 질문으로 끝났거나,
 *  수준별 문장 수보다 하나 더 마쳤을 때 (cleanTutorSay는 그 수 + 뒤따르는 질문까지 보여 준다. "Nice." 같은 짧은 말은 세지 않음) */
function tutorReplyDone(raw) {
  const t = raw.replace(/^\s+/, "");
  if (!t) return false;
  if (/\S\s*\n/.test(t) || /\?["”']?\s*$/.test(t)) return true;
  if (!/[.!]["”']?\s*$/.test(t)) return false;
  const done = t.replace(/(\d)\.(\d)/g, "$1$2").replace(/\b(Mr|Mrs|Ms|Dr|St)\./g, "$1").match(/[^.!?]+[.!?]+/g) || [];
  return done.filter(x => x.trim().split(/\s+/).length > 2).length >= tutorLevel().maxFull + 1;
}

/** 모델에 보내는 대화: 너무 길어지면 최근 대화만 (시스템 안내는 늘 맨 앞) */
function tutorContext() {
  const sys = tutorMessages[0], rest = tutorMessages.slice(1);
  if (rest.length <= 30) return tutorMessages;
  let tail = rest.slice(-20);
  while (tail.length && tail[0].role !== "user") tail = tail.slice(1);
  return [sys, ...tail];
}

// 천천히 듣기: 초보자가 못 알아들었을 때 같은 문장을 느리게 한 번 더
function addSlowButton(bubble, text) {
  const btn = document.createElement("button");
  btn.className = "tutor-slow-btn";
  btn.textContent = "🐢 천천히";
  btn.onclick = e => { e.stopPropagation(); speakTutorSlow(text); };
  bubble.appendChild(btn);
}
// 해석: 못 알아들은 문장을 자연스러운 한국어로 (한 번 받은 해석은 다시 누르면 접고 펴기만)
const tutorTransCache = new Map();
async function tutorTranslate(text) {
  if (!tutorTransCache.has(text)) {
    const ko = await geminiGenerate([
      { role: "system", content: "Translate the English sentence into natural, friendly Korean (존댓말) as spoken in everyday conversation. Output only the Korean translation." },
      { role: "user", content: text }], { temperature: 0, maxTokens: 200, chain: "aux" });
    tutorTransCache.set(text, (ko || "").replace(/^["“]+|["”]+$/g, "").trim());
  }
  return tutorTransCache.get(text) || "해석하지 못했어요.";
}
function addTranslateButton(bubble, text) {
  const btn = document.createElement("button");
  btn.className = "tutor-slow-btn tutor-trans-btn";
  btn.textContent = "🇰🇷 해석";
  btn.onclick = async e => {
    e.stopPropagation();
    let box = bubble.querySelector(".tutor-trans");
    if (box) { box.classList.toggle("hidden"); return; }
    box = document.createElement("div");
    box.className = "tutor-trans";
    box.textContent = "해석하는 중…";
    bubble.appendChild(box);
    try {
      box.textContent = await tutorTranslate(text);
    } catch (err) { box.remove(); alert("해석하지 못했어요. " + geminiErrorText(err)); }
    const log = tutorEl("tutor-log"); if (bubble === log.lastElementChild) log.scrollTop = log.scrollHeight;
  };
  bubble.appendChild(btn);
}
function speakTutorSlow(text) {
  stopTutorSpeech();
  return speakTutor(text, tutorSessionToken, true);
}

function addTutorBubble(who, text) {
  const log = tutorEl("tutor-log");
  const div = document.createElement("div");
  div.className = "tutor-msg " + (who === "me" ? "me" : "tutor");
  div.innerHTML = `<div class="tutor-text"></div>`;
  div.querySelector(".tutor-text").textContent = text;
  if (who !== "me") div.title = "누르면 다시 들어요";
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
  return div;
}
function addTutorTip(bubble, tip, why, said) {
  const t = document.createElement("div");
  t.className = "tutor-tip";
  t.innerHTML = `💡 이렇게 말하면 더 자연스러워요<br><b></b><span class="tutor-tip-why"></span>`;
  t.querySelector("b").textContent = tip;
  if (why) t.querySelector(".tutor-tip-why").textContent = " · " + why;
  addPracticeButtons(t, tip);                       // 고친 문장을 직접 다시 말해 보게
  bubble.after(t);
  tutorNoteAdd({ en: tip, said, why, src: "fix" });
  const log = tutorEl("tutor-log"); log.scrollTop = log.scrollHeight;
}
// ---------- 다시 말해 보기 · 한국어 도움 · 내 표현 노트 ----------
// 회화가 느는 순서: 말하기 → 고쳐 받기 → 고친 문장을 직접 다시 말하기 → 다음 대화에서 써먹기
// 말소리 비교용: 소문자·문장부호 정리 + 줄임말 풀기 (I'm = I am)
const TUTOR_CONTRACT = { "i'm": "i am", "you're": "you are", "it's": "it is", "that's": "that is", "don't": "do not", "doesn't": "does not", "didn't": "did not",
  "can't": "can not", "cannot": "can not", "won't": "will not", "i've": "i have", "i'll": "i will", "i'd": "i would", "isn't": "is not", "wasn't": "was not", "let's": "let us", "what's": "what is" };
const tutorWords = x => tutorNorm(x).split(" ").filter(Boolean).flatMap(w => (TUTOR_CONTRACT[w] || w).split(" "));
/** 두 문장이 얼마나 같은지 0~1 (같은 순서로 맞힌 낱말 수 / 더 긴 쪽 낱말 수) */
function tutorSimilarity(said, target) {
  const a = tutorWords(said), b = tutorWords(target);
  if (!a.length || !b.length) return 0;
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return dp[a.length][b.length] / Math.max(a.length, b.length);
}

// 🎤 다시 말해 보기: 다음 한 마디는 튜터에게 보내지 않고 목표 문장과 비교한다
let tutorPractice = null;   // { target, box }
function tutorPracticeShow(box, msg, heard, cls) {
  const r = box.querySelector(".tutor-practice-result");
  if (!r) return;
  r.className = "tutor-practice-result" + (cls ? " " + cls : "") + (msg ? "" : " hidden");
  r.innerHTML = "<span></span><small></small>";
  r.firstChild.textContent = msg; r.lastChild.textContent = heard ? " " + heard : "";
}
function tutorPracticeEnd(msg) {
  const pr = tutorPractice; tutorPractice = null;
  if (pr) tutorPracticeShow(pr.box, msg, "", "");
}
function tutorStartPractice(target, box) {
  if (!tutorReady()) return;
  if (tutorPractice && tutorPractice.box === box && (tutorMic || tutorRecRec)) { toggleTutorMic(); return; }   // 한 번 더 누르면 들은 데까지
  tutorCancelListening();
  stopTutorSpeech();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  tutorPractice = { target, box };
  tutorPracticeShow(box, "🎤 듣고 있어요… 따라 말해 보세요", "", "listening");
  toggleTutorMic();
  if (!tutorMic && !tutorRecRec) tutorPracticeEnd("");     // 마이크를 못 켰으면 (안내 창은 이미 떴다)
}
/** 들은 말 처리: 다시 말해 보기 중이면 비교, 아니면 튜터에게 보낸다 */
function tutorHandleSaid(text) {
  const pr = tutorPractice;
  if (!pr) { sendTutorWhenFree(text); return; }
  tutorPractice = null;
  const score = tutorSimilarity(text, pr.target);
  const good = score >= 0.85;
  tutorPracticeShow(pr.box, good ? "✅ 완벽해요!" : score >= 0.6 ? "👍 거의 맞았어요! 한 번 더 해 볼까요?" : "🔁 다시 해 볼까요?", good ? "" : `들린 말: ${text}`, good ? "good" : "");
  if (good) tutorNoteMark(pr.target, "practiced");
  setTutorStatus(good ? "잘했어요! 이제 대화를 이어 가요" : tutorIdleMsg(), "");
  setTimeout(() => tutorAfterSpeak(tutorSessionToken), 1500);   // 다시 대화를 듣는다
}
/** 고친 문장·배운 표현 아래에 [🔊 듣기] [🎤 다시 말해 보기] */
function addPracticeButtons(box, target) {
  const acts = document.createElement("div"); acts.className = "tutor-practice";
  acts.innerHTML = `<button class="tutor-slow-btn">🔊 듣기</button><button class="tutor-slow-btn tutor-practice-btn">🎤 다시 말해 보기</button><div class="tutor-practice-result hidden"></div>`;
  const [listen, say] = acts.querySelectorAll("button");
  listen.onclick = e => { e.stopPropagation(); speakTutor(target, tutorSessionToken); };
  say.onclick = e => { e.stopPropagation(); tutorStartPractice(target, acts); };
  box.appendChild(acts);
}

// 한국어로 쓰면: 하고 싶은 말을 자연스러운 영어로 알려 주고, 튜터 목소리로 들려준 뒤 바로 영어로 말하게 한다 (대화에는 넣지 않음)
const TUTOR_KO_SCHEMA = { type: "OBJECT", properties: { en: { type: "STRING" } }, required: ["en"] };
async function tutorKoreanHelp(ko) {
  const token = tutorSessionToken, log = tutorEl("tutor-log");
  const card = document.createElement("div"); card.className = "tutor-ko-card";
  card.innerHTML = `<div class="tutor-ko-q"></div><div class="tutor-ko-a">영어로 바꾸는 중…</div>`;
  card.querySelector(".tutor-ko-q").textContent = "🇰🇷 " + ko;
  log.appendChild(card); log.scrollTop = log.scrollHeight;
  setTutorStatus("영어 표현을 찾는 중…", "thinking");
  try {
    const said = tutorSaidLines[tutorSaidLines.length - 1] || "";
    const j = await geminiJSON([
      { role: "system", content: `You help a Korean adult at the ${tutorLevel().desc} level say things in English during a casual conversation. ` +
        "Turn what the student wants to say into the most natural spoken English a friendly native speaker would use, at the student's level (beginner: short and simple). Keep the meaning. Put only the English in 'en'." },
      { role: "user", content: (said ? `The tutor just said: "${said}"\n` : "") + `What the student wants to say (Korean): ${ko}` }
    ], { temperature: 0.3, maxTokens: 150, schema: TUTOR_KO_SCHEMA, chain: "hint" });
    const en = ((j && j.en) || "").trim();
    if (!en) throw new Error("영어 표현을 받지 못했어요");
    if (token !== tutorSessionToken) return;
    const a = card.querySelector(".tutor-ko-a");
    a.innerHTML = `<div class="tutor-ko-label">✨ 영어로는 이렇게 말해요</div><b></b><div class="tutor-ko-next"></div>`;
    a.querySelector("b").textContent = en;
    a.querySelector(".tutor-ko-next").textContent = `🎤 이제 ${tutorName()}에게 영어로 말해 보세요`;
    addPracticeButtons(a, en);
    a.querySelector(".tutor-practice-btn").remove();      // 여기서는 바로 튜터에게 말하는 게 연습이다
    log.scrollTop = log.scrollHeight;
    tutorNoteAdd({ en, ko, src: "ko" });
    speakTutor(en, token);                                 // 들려준 뒤 저절로 듣기 시작 → 말하면 튜터에게 간다
  } catch (e) {
    if (token !== tutorSessionToken) return;
    card.querySelector(".tutor-ko-a").textContent = "영어로 바꾸지 못했어요. " + geminiErrorText(e);
    setTutorStatus(tutorIdleMsg(), "");
  }
}

// 📒 내 표현 노트: 고친 문장·한국어로 물어본 표현·피드백 표현을 기기에 모은다 (최근 60개).
// 다음 대화에서 튜터가 그 표현을 쓸 기회를 자연스럽게 만들고, 실제로 쓰면 알려 준다
const TUTOR_NOTES_KEY = "tutorNotes";
let tutorSessionStartedAt = 0;
function tutorNotes() { try { const l = JSON.parse(localStorage.getItem(TUTOR_NOTES_KEY) || "[]"); return Array.isArray(l) ? l : []; } catch (e) { return []; } }
function tutorNotesSave(list) { try { localStorage.setItem(TUTOR_NOTES_KEY, JSON.stringify(list.slice(0, 60))); } catch (e) {} }
function tutorNoteAdd(n) {
  if (!n || !n.en) return;
  const list = tutorNotes(), k = tutorNorm(n.en), i = list.findIndex(x => tutorNorm(x.en) === k);
  const old = i >= 0 ? list.splice(i, 1)[0] : { used: 0, practiced: 0, added: Date.now() };
  list.unshift({ ...old, ...n, used: old.used || 0, practiced: old.practiced || 0, added: old.added });
  tutorNotesSave(list);
}
function tutorNoteMark(en, field) {
  const list = tutorNotes(), n = list.find(x => tutorNorm(x.en) === tutorNorm(en));
  if (!n) return;
  n[field] = (n[field] || 0) + 1;
  tutorNotesSave(list);
}
function tutorNoteRemove(en) { tutorNotesSave(tutorNotes().filter(x => tutorNorm(x.en) !== tutorNorm(en))); }
/** 이번 대화에서 튜터가 쓸 기회를 만들어 줄 표현 (아직 몇 번 못 써 본 것 위주로 4개) */
function tutorNotesForPrompt() {
  const list = tutorNotes().filter(n => (n.used || 0) < 2).slice(0, 12);
  for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
  return list.slice(0, 4).map(n => n.en);
}
/** 학습자가 노트에 있던 표현을 썼는지 (이번 대화 전에 모은 것만) */
function tutorCheckNoteUse(text, bubble) {
  const n = tutorNotes().find(x => x.added < tutorSessionStartedAt && tutorWords(x.en).length >= 3 && tutorSimilarity(text, x.en) >= 0.85);
  if (!n) return;
  tutorNoteMark(n.en, "used");
  const b = document.createElement("div"); b.className = "tutor-used"; b.textContent = "🎉 노트에 모아 둔 표현을 써 봤어요!";
  bubble.after(b);
}
function renderTutorNotes() {
  const box = tutorEl("tutor-notes");
  if (!box) return;
  const list = tutorNotes();
  box.innerHTML = `<div class="tutor-report-title">📒 내 표현 노트 <small>${list.length}개</small></div>`;
  if (!list.length) {
    const d = document.createElement("div"); d.className = "tutor-fb-note";
    d.textContent = `고친 문장과 배운 표현이 여기에 모여요. 다음 대화에서 ${tutorName()}가 써 볼 기회를 만들어 줘요.`;
    box.appendChild(d); return;
  }
  list.slice(0, 30).forEach(n => {
    const row = document.createElement("div"); row.className = "tutor-note-row";
    row.innerHTML = `<div class="tutor-note-main"><b></b><small></small></div><span class="tutor-note-used"></span><button class="tutor-note-del" aria-label="노트에서 지우기">✕</button>`;
    row.querySelector("b").textContent = n.en;
    row.querySelector("small").textContent = n.ko || (n.said ? "← " + n.said : "");
    row.querySelector(".tutor-note-used").textContent = n.used ? `✓${n.used}` : "";
    row.onclick = () => speakTutor(n.en, tutorSessionToken);
    row.querySelector("button").onclick = e => { e.stopPropagation(); tutorNoteRemove(n.en); renderTutorNotes(); };
    box.appendChild(row);
  });
}


// ---------- 구글 AI 음성 (Gemini TTS) ----------
// 튜터 목소리를 사람처럼 자연스러운 구글 AI 음성으로. 문장을 보내면 음성 파일(WAV, 24kHz)을 받아 앱 재생기(입모양 연동)로 튼다.
// 무료 사용량이 차거나 실패하면 잠시 앱 기본 음성으로 읽는다
const TUTOR_TTS_API = "https://generativelanguage.googleapis.com/v1beta/interactions";
const TUTOR_TTS_MODELS = ["gemini-3.8-flash-lite-tts", "gemini-3.8-flash-tts"];   // 빠른 것부터 (무료 한도도 따로)
// 튜터 목소리: 튜터 성별에 맞는 목소리만 고를 수 있다 (g: f 여성 / m 남성, app은 기기 음성을 성별에 맞춰 고름)
// 대중적으로 듣기 좋은 밝고 자연스러운 목소리 위주 (설정에서 바꾸면 바로 한 마디 들려준다)
const TUTOR_VOICES = {
  Leda: { label: "구글 AI · 밝고 상큼한 목소리", g: "f" }, Zephyr: { label: "구글 AI · 맑고 경쾌한 목소리", g: "f" },
  Kore: { label: "구글 AI · 또렷하고 차분한 목소리", g: "f" }, Despina: { label: "구글 AI · 부드러운 목소리", g: "f" },
  Sulafat: { label: "구글 AI · 따뜻한 목소리", g: "f" },
  Puck: { label: "구글 AI · 밝고 경쾌한 목소리", g: "m" }, Umbriel: { label: "구글 AI · 편안한 목소리", g: "m" },
  Algieba: { label: "구글 AI · 부드러운 목소리", g: "m" }, Iapetus: { label: "구글 AI · 또렷한 목소리", g: "m" },
  Achird: { label: "구글 AI · 친근한 목소리", g: "m" },
  app: { label: "기기 기본 음성", g: "" }
};
// 말투: 선생님이 또박또박 읽는 느낌보다, 친구와 수다 떠는 듯한 자연스럽고 밝은 말투로
const tutorTtsStyle = slow => `Speak like ${tutorChar().style}: natural, relaxed and expressive, at a comfortable conversational pace, with clear pronunciation.` +
  (slow ? " This time speak slowly and very clearly, with short pauses between phrases, for an English learner." : "");
// 목소리 기본값을 바꾼 뒤 처음 열 때, 예전 기본(따뜻한·친근한 목소리)으로 저장된 선택은 새 기본으로 (기기 음성 선택은 그대로)
try {
  if (!localStorage.getItem("tutorVoiceV2")) {
    if (["Sulafat", "Aoede", "Achird", "Puck"].includes(localStorage.getItem("tutorVoice"))) localStorage.removeItem("tutorVoice");
    localStorage.setItem("tutorVoiceV2", "1");
  }
} catch (e) {}
function tutorVoiceId() {
  let v = null; try { v = localStorage.getItem("tutorVoice"); } catch (e) {}
  const ok = TUTOR_VOICES[v] && (v === "app" || TUTOR_VOICES[v].g === tutorChar().gender);
  return ok ? v : tutorChar().voice;   // 따로 고르지 않았거나 다른 성별 목소리면 튜터의 기본 목소리
}
// 기기 음성(구글 AI 음성을 못 쓰거나 '기기 기본 음성'을 골랐을 때)도 튜터 성별에 맞춘다
const TUTOR_MALE_VOICE = /\b(male|man|david|mark|daniel|alex|fred|tom|aaron|arthur|guy|rishi|george|james|ryan|eric|andrew|brian|roger|thomas|oliver|christopher|matthew|justin|joey|reed|evan|nathan)\b|#male/i;
const TUTOR_FEMALE_VOICE = /\b(female|woman|samantha|karen|victoria|zira|susan|moira|tessa|fiona|allison|ava|serena|joanna|aria|jenny|kate|libby|sonia|michelle|nicky|salli|kimberly|ivy|kendra|google us english)\b|#female/i;
function tutorDeviceVoice(g) {
  const all = ("speechSynthesis" in window ? window.speechSynthesis.getVoices() : []).filter(v => /^en/i.test(v.lang));
  const us = v => /en[-_]us/i.test(v.lang);
  const re = g === "m" ? TUTOR_MALE_VOICE : TUTOR_FEMALE_VOICE;
  const match = all.filter(v => re.test(v.name) && !(g === "m" ? TUTOR_FEMALE_VOICE : TUTOR_MALE_VOICE).test(v.name));
  return match.find(us) || match[0] || null;
}
let tutorDeviceTalking = false;   // 기기 음성이 실제로 소리를 내는 중
/** 튜터 소리가 지금 실제로 나고 있는지 (말하는 영상은 이때만) */
function tutorAudioPlaying() {
  if (!tutorSpeaking) return false;
  return tutorDeviceTalking || (typeof NeuralTTS !== "undefined" && !!NeuralTTS.isPlaying && NeuralTTS.isPlaying());
}
function tutorDeviceSpeak(text, slow) {
  const g = tutorChar().gender, rate = (typeof userRate === "number" ? userRate : 1) * (slow ? 0.7 : 1);
  if (typeof usingNeural === "function" && usingNeural()) {                 // 기기에 받아 둔 자연스러운 음성
    const keep = userRate; userRate = Math.max(0.5, rate);
    const p = speakNeural(text, "A", g === "m" ? "M1" : "F1");
    userRate = keep; return p;
  }
  return new Promise(resolve => {
    if (!("speechSynthesis" in window)) { resolve(); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = Math.max(0.5, rate);
    const v = tutorDeviceVoice(g);
    if (v) u.voice = v;
    else if (g === "m") u.pitch = 0.7;                // 남성 목소리가 없는 기기면 기본 목소리를 낮게
    let done = false;
    const finish = () => { if (!done) { done = true; tutorDeviceTalking = false; clearTimeout(t); resolve(); } };
    const t = setTimeout(finish, Math.max(5000, text.length * 150 / u.rate));
    u.onstart = () => { if (!done) tutorDeviceTalking = true; };
    u.onend = u.onerror = finish;
    window.speechSynthesis.speak(u);
  });
}
let tutorTtsModelIdx = 0;
let tutorTtsStream = true;              // 음성을 조각조각 받아 바로 틀기 (안 되는 경우 한 번에 받기)
let tutorTtsDownUntil = 0;              // 실패하면 잠시(이 시각까지) 앱 기본 음성으로
const tutorTtsCache = new Map();        // 같은 문장 다시 듣기는 다시 받지 않는다
const tutorUseGoogleVoice = () => tutorVoiceId() !== "app" && tutorReady() && Date.now() > tutorTtsDownUntil;

/** 응답 JSON 안에서 마지막 음성 데이터(base64)를 찾는다 (steps[].content[] 의 type "audio") */
function tutorFindAudio(j) {
  let found = null;
  const walk = o => {
    if (!o || typeof o !== "object") return;
    if (Array.isArray(o)) { o.forEach(walk); return; }
    if (o.type === "audio" && typeof o.data === "string") found = o;
    Object.values(o).forEach(walk);
  };
  walk(j);
  return found;
}
/** base64 음성 → 소리 데이터 (WAV면 브라우저가 풀고, 머리말 없는 PCM16이면 직접 푼다) */
async function tutorDecodeAudio(b64) {
  const bin = atob(b64), bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  if (bin.slice(0, 4) === "RIFF") {
    const ctx = NeuralTTS.unlockAudio();
    const buf = await ctx.decodeAudioData(bytes.buffer.slice(0));
    return { wav: buf.getChannelData(0), sampleRate: buf.sampleRate };
  }
  const n = bytes.length >> 1, out = new Float32Array(n), v = new DataView(bytes.buffer);
  for (let i = 0; i < n; i++) out[i] = v.getInt16(i * 2, true) / 32768;
  return { wav: out, sampleRate: 24000 };
}
/** 음성 조각(base64) → 소리 데이터. 기본은 머리말 없는 PCM16(24kHz)이고, 조각에 WAV 머리말이 붙어 오면 떼어 낸다.
 *  16비트 한 샘플이 두 조각에 나뉘어 와도 이어 붙인다 */
function tutorPcmDecoder() {
  let carry = null;
  return (b64, mime) => {
    const bin = atob(b64);
    let bytes = new Uint8Array(bin.length + (carry ? 1 : 0)), off = 0;
    if (carry) { bytes[0] = carry[0]; off = 1; carry = null; }
    for (let i = 0; i < bin.length; i++) bytes[off + i] = bin.charCodeAt(i);
    let rate = +(((mime || "").match(/rate=(\d+)/) || [])[1]) || 0;
    if (bin.slice(0, 4) === "RIFF") {
      const v = new DataView(bytes.buffer);
      rate = v.getUint32(off + 24, true) || rate;
      let p = off + 12;
      while (p + 8 <= bytes.length && String.fromCharCode(...bytes.subarray(p, p + 4)) !== "data") p += 8 + v.getUint32(p + 4, true);
      bytes = bytes.subarray(Math.min(p + 8, bytes.length));
    }
    if (bytes.length & 1) { carry = bytes.slice(-1); bytes = bytes.subarray(0, bytes.length - 1); }
    const n = bytes.length >> 1, out = new Float32Array(n), v = new DataView(bytes.buffer, bytes.byteOffset, bytes.length);
    for (let i = 0; i < n; i++) out[i] = v.getInt16(i * 2, true) / 32768;
    return { wav: out, sampleRate: rate || 24000 };
  };
}
/** 구글 AI 음성 받기 (스트리밍): 음성이 만들어지는 대로 조각을 onPcm으로 넘긴다 → 다 받기 전에 첫 조각부터 재생할 수 있다 */
async function tutorTtsRequest(model, text, slow, onPcm, stream = true) {
  const ctl = new AbortController();
  let stall = null;
  const wait = ms => { clearTimeout(stall); stall = setTimeout(() => ctl.abort(), ms); };
  wait(15000);                                       // 첫 조각이 15초 안에 안 오거나, 중간에 10초 멈추면 포기
  try {
    const res = await fetch(TUTOR_TTS_API, {
      method: "POST", headers: { "content-type": "application/json", "x-goog-api-key": tutorGetKey() }, signal: ctl.signal,
      body: JSON.stringify({
        model, store: false, ...(stream ? { stream: true } : {}),   // store: 구글 쪽에 대화 기록을 남기지 않는다
        input: [{ type: "user_input", content: [{ type: "text", text, annotations: [{ type: "speech_metadata", style: tutorTtsStyle(slow) }] }] }],
        response_format: { type: "audio" },
        generation_config: { speech_config: [{ voice: tutorVoiceId() }] }
      })
    });
    if (!res.ok) {
      let j = null; try { j = await res.json(); } catch (e) {}
      const er = (j && j.error) || {};
      throw new GeminiError(er.message || `HTTP ${res.status}`, res.status, ((er.details || []).find(d => d && d.reason) || {}).reason || er.status || "");
    }
    const decode = tutorPcmDecoder();
    let got = 0, whole = null;
    const take = (a) => { const d = decode(a.data, a.mime_type || a.mimeType); if (d.wav.length) { got++; onPcm(d.wav, d.sampleRate); } };
    const handle = (ev, data) => {
      if (!data || data === "[DONE]") return;
      let j; try { j = JSON.parse(data); } catch (e) { return; }
      if (j.error) { const er = j.error; throw new GeminiError(er.message || "음성 오류", er.code || 0, er.status || ""); }
      const type = ev || j.event_type || j.type || "";
      if (type === "step.delta" || (!type && j.delta)) { const a = tutorFindAudio(j.delta || j); if (a) take(a); }
      else if (/complete/.test(type)) whole = tutorFindAudio(j);   // 조각이 하나도 안 왔을 때만 쓴다
    };
    // 조각(SSE)으로 오면 오는 대로, 한 번에(JSON) 오면 다 받은 뒤 처리한다 (어느 쪽인지는 첫 글자로 안다)
    const reader = res.body ? res.body.getReader() : null, td = new TextDecoder();
    let buf = "", ev = "", data = [], json = null;
    if (!reader) json = await res.text();
    while (reader) {
      const { value, done } = await reader.read();
      if (done) break;
      wait(10000);
      buf += td.decode(value, { stream: true });
      if (json === null && /^\s*[{[]/.test(buf)) json = "";
      if (json !== null) { json += buf; buf = ""; continue; }
      let nl;
      while ((nl = buf.indexOf("\n")) >= 0) {
        const line = buf.slice(0, nl).replace(/\r$/, ""); buf = buf.slice(nl + 1);
        if (!line) { handle(ev, data.join("\n")); ev = ""; data = []; }
        else if (line.startsWith("event:")) ev = line.slice(6).trim();
        else if (line.startsWith("data:")) data.push(line.slice(5).trim());
      }
    }
    if (json !== null) {
      let j = null; try { j = JSON.parse(json); } catch (e) {}
      const a = j && tutorFindAudio(j);
      if (!a) throw new GeminiError("음성이 오지 않았어요", 0, "NO_AUDIO");
      const d = await tutorDecodeAudio(a.data);
      onPcm(d.wav, d.sampleRate);
      return;
    }
    if (buf.startsWith("data:")) data.push(buf.slice(5).trim());
    handle(ev, data.join("\n"));
    if (!got && whole) take(whole);
    if (!got) throw new GeminiError("음성이 오지 않았어요", 0, "NO_AUDIO");
  } finally { clearTimeout(stall); }
}

// 첫 인사 음성은 기기에 저장해 두고, 같은 인사가 다시 나오면 바로 튼다 (기다림 없음 + 무료 한도 절약). 최근 40개까지만
const TUTOR_GREET_CACHE = "faith-voice-tutor-greet";   // faith-voice로 시작해서 앱 업데이트 때 지워지지 않는다
const tutorGreetUrl = (text) => location.origin + "/__tutor-greet/" + tutorVoiceId() + "/" + encodeURIComponent(text);
async function tutorGreetLoad(text) {
  try {
    if (text !== tutorGreeting || !("caches" in window)) return null;
    const r = await (await caches.open(TUTOR_GREET_CACHE)).match(tutorGreetUrl(text));
    if (!r) return null;
    return { wav: new Float32Array(await r.arrayBuffer()), sampleRate: +r.headers.get("x-rate") || 24000 };
  } catch (e) { return null; }
}
async function tutorGreetSave(text, clip) {
  try {
    if (text !== tutorGreeting || !("caches" in window)) return;
    const all = new Float32Array(clip.chunks.reduce((n, c) => n + c.length, 0));
    let o = 0; clip.chunks.forEach(c => { all.set(c, o); o += c.length; });
    const cache = await caches.open(TUTOR_GREET_CACHE);
    await cache.put(tutorGreetUrl(text), new Response(all.buffer, { headers: { "x-rate": String(clip.sampleRate) } }));
    const keys = await cache.keys();                              // 오래된 것부터 지워 40개까지만
    for (const k of keys.slice(0, Math.max(0, keys.length - 40))) await cache.delete(k);
  } catch (e) {}
}

/** 문장 → 음성 (모델을 차례로 시도, 같은 문장은 한 번만 받는다).
 *  돌려주는 clip은 받는 중에도 쓸 수 있다: chunks에 조각이 쌓이고, 새 조각이 오거나 끝나면 listeners를 부른다 */
function tutorTtsFetch(text, slow) {
  const key = tutorVoiceId() + "|" + (slow ? "s|" : "") + text;
  if (tutorTtsCache.has(key)) return tutorTtsCache.get(key);
  const clip = { chunks: [], sampleRate: 24000, done: false, error: null, listeners: new Set() };
  const emit = () => clip.listeners.forEach(f => f());
  const push = (wav, rate) => { clip.sampleRate = rate; clip.chunks.push(wav); emit(); };
  clip.ready = (async () => {
    const saved = slow ? null : await tutorGreetLoad(text);
    if (saved) { push(saved.wav, saved.sampleRate); return; }
    let last = null;
    for (let k = 0; k < TUTOR_TTS_MODELS.length; k++) {
      const idx = (tutorTtsModelIdx + k) % TUTOR_TTS_MODELS.length;
      try {
        try { await tutorTtsRequest(TUTOR_TTS_MODELS[idx], text, slow, push, tutorTtsStream); }
        catch (e) {   // 스트리밍 요청을 안 받아 주면 이번부터 한 번에 받기로
          if (!tutorTtsStream || e.status !== 400 || clip.chunks.length || geminiKeyProblem(e)) throw e;
          tutorTtsStream = false;
          await tutorTtsRequest(TUTOR_TTS_MODELS[idx], text, slow, push, false);
        }
        tutorTtsModelIdx = idx; if (!slow) tutorGreetSave(text, clip); return;
      }
      catch (e) { last = e; if (clip.chunks.length || geminiKeyProblem(e) || !geminiTryNext(e)) break; }   // 받다가 끊겼으면 받은 만큼만 튼다
    }
    clip.error = last || new GeminiError("음성이 오지 않았어요", 0, "NO_AUDIO");
    tutorTtsCache.delete(key);
  })().finally(() => { clip.done = true; emit(); });
  tutorTtsCache.set(key, clip);
  while (tutorTtsCache.size > 40) tutorTtsCache.delete(tutorTtsCache.keys().next().value);
  return clip;
}
/** 받아 둔(또는 받는 중인) 음성을 튼다: 첫 조각이 오는 즉시 소리를 내고, 나머지는 오는 대로 이어 붙인다.
 *  하나도 못 받았으면 앱 기본 음성으로 읽고, 한동안 기본 음성을 쓴다 */
async function tutorPlayClip(clip, text, alive) {
  if (!clip.chunks.length && !clip.done) {
    await new Promise(r => { const f = () => { if (clip.chunks.length || clip.done) { clip.listeners.delete(f); r(); } }; clip.listeners.add(f); });
  }
  if (!clip.chunks.length) {
    const e = clip.error || {};
    console.warn("구글 AI 음성 실패 → 기본 음성", e);
    if (Date.now() > tutorTtsDownUntil) setTimeout(() => setTutorStatus(e.status === 429 ? "구글 AI 음성 한도가 차서 잠시 기본 음성으로 읽어요" : "구글 AI 음성을 받지 못해 기본 음성으로 읽어요", tutorSpeaking ? "speaking" : ""), 0);
    tutorTtsDownUntil = Date.now() + (e.status === 429 ? 10 * 60 * 1000 : 60 * 1000);
    if (alive()) { try { await tutorDeviceSpeak(text); } catch (e2) {} }
    return;
  }
  if (!alive()) return;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  const player = NeuralTTS.playStream();
  let i = 0;
  const feed = () => {
    if (!alive()) { player.end(); return; }
    while (i < clip.chunks.length) player.push(clip.chunks[i++], clip.sampleRate);
    if (clip.done) player.end();
  };
  feed();
  if (!clip.done) clip.listeners.add(feed);
  await player.done;
  clip.listeners.delete(feed);
}
/** 튜터 목소리로 한 번 읽기 (구글 AI 음성 또는 앱 기본 음성) */
function tutorSay(text, slow, alive) {
  alive = alive || (() => true);
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();     // 누른 순간에 소리 장치를 깨워 둔다 (아이폰)
  if (tutorUseGoogleVoice() && typeof NeuralTTS !== "undefined") return tutorPlayClip(tutorTtsFetch(text, slow), text, alive);
  return tutorDeviceSpeak(text, slow);
}
function fillTutorVoices() {
  const sel = tutorEl("tutor-voice");
  if (!sel) return;
  const g = tutorChar().gender;   // 튜터 성별에 맞는 목소리만
  sel.innerHTML = "";
  Object.entries(TUTOR_VOICES).filter(([k, v]) => k === "app" || v.g === g).forEach(([k, v]) => { const o = document.createElement("option"); o.value = k; o.textContent = v.label; sel.appendChild(o); });
  sel.value = tutorVoiceId();
}
/** 목소리 바꾸기: 바로 한 마디 들려준다 */
function changeTutorVoice() {
  try { localStorage.setItem("tutorVoice", tutorEl("tutor-voice").value); } catch (e) {}
  tutorTtsDownUntil = 0;
  stopTutorSpeech();
  speakTutor(`Hi, I'm ${tutorName()}. Let's practice English together!`, tutorSessionToken);
}

// ---------- 말하기 (튜터 목소리 + 입모양) ----------
async function speakTutor(text, token, slow) {
  if (token !== tutorSessionToken) return;
  tutorCancelListening();                // 듣는 중이면 멈춘다 (튜터 목소리를 내 말로 알아듣지 않게)
  const my = ++tutorSpeechToken;
  tutorSpeaking = true;
  setTutorStatus("말하는 중…", "speaking");
  try { await tutorSay(text, slow, () => token === tutorSessionToken && my === tutorSpeechToken); } catch (e) {}
  // 중간에 끊고 새로 말하거나 대화가 바뀌었으면 상태를 건드리지 않는다
  if (token !== tutorSessionToken || my !== tutorSpeechToken) return;
  tutorSpeaking = false;
  setTutorStatus(tutorIdleMsg(), "");
  tutorAfterSpeak(token);                // 다 말했으면 다시 듣는다
}
function stopTutorSpeech() {
  tutorDeviceTalking = false;
  if (!tutorSpeaking) return;
  tutorSpeaking = false;
  tutorSpeechToken++;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.stopAudio();
  setTutorStatus(tutorIdleMsg(), "");
}

// ---------- 실행 환경 (앱 안 브라우저 / 홈 화면 앱) ----------
// 카카오톡·인스타그램 등 앱 안의 브라우저는 음성 인식·마이크 권한이 막혀 있는 경우가 많다
function tutorEnv() {
  const ua = navigator.userAgent || "";
  const inApp = /KAKAOTALK/i.test(ua) ? "카카오톡" : /NAVER\(inapp|NAVER\//i.test(ua) ? "네이버" : /Instagram/i.test(ua) ? "인스타그램"
    : /FBAN|FBAV|FB_IAB/i.test(ua) ? "페이스북" : /\bLine\//i.test(ua) ? "라인" : /BAND\//i.test(ua) ? "밴드" : /DaumApps/i.test(ua) ? "다음"
    : /; wv\)/.test(ua) ? "앱" : null;
  const standalone = (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
  // 다른 페이지(앱) 안에 끼워 넣어진 화면: 바깥 페이지가 마이크를 허락해야(allow="microphone") 쓸 수 있다
  let inFrame = false;
  try { inFrame = window.self !== window.top; } catch (e) { inFrame = true; }
  return { inApp, standalone, inFrame, android: /Android/i.test(ua), ios: /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) };
}
/** 마이크 권한이 막혔을 때: 환경마다 푸는 방법이 달라서 맞는 안내를 보여 준다 */
function showMicPermissionHelp() {
  const env = tutorEnv();
  const typeIt = "\n\n마이크 없이도 아래 입력창에 적어서 대화할 수 있어요.";
  if (env.inFrame && !env.inApp) { alert("마이크 사용이 막혀 있어요.\n이 화면을 담고 있는 바깥 페이지(앱)에서 마이크를 허락해야 해요." + typeIt); return; }
  if (env.inApp) {
    const app = env.inApp === "앱" ? "이 앱" : env.inApp;
    alert(`마이크 사용이 막혀 있어요.\n${env.android ? `휴대폰 설정 → 애플리케이션 → ${app} → 권한 → 마이크 '허용'` : `설정 앱 → ${app} → 마이크 켜기`} 후 다시 시도해 주세요.` + typeIt);
    return;
  }
  let how;
  if (env.android && env.standalone) how = "홈 화면 앱은 크롬의 권한을 따라요.\n① 크롬 앱 → 오른쪽 위 ⋮ → 설정 → 사이트 설정 → 마이크 → engo.life를 '허용'\n② 그래도 안 되면 휴대폰 설정 → 애플리케이션 → Chrome → 권한 → 마이크 '허용'\n바꾼 뒤 앱을 완전히 닫았다 다시 열어 주세요.";
  else if (env.android) how = "① 주소창 왼쪽 아이콘(⚙ 또는 자물쇠) → 권한 → 마이크 '허용'\n② 그래도 안 되면 휴대폰 설정 → 애플리케이션 → Chrome → 권한 → 마이크 '허용'";
  else if (env.ios) how = "① 설정 앱 → Safari → 마이크 → '허용' 또는 '확인'\n② 사파리 주소창 왼쪽 '가가' → 웹 사이트 설정 → 마이크 '허용'\n③ 설정 → 개인정보 보호 및 보안 → 음성 인식/마이크에서 Safari가 켜져 있는지 확인";
  else how = "주소창 왼쪽 자물쇠 아이콘 → 사이트 설정 → 마이크 '허용'";
  alert("마이크 사용이 막혀 있어요.\n\n" + how + typeIt);
}

// ---------- 듣기 (음성 인식) ----------
// 안드로이드 크롬은 인식기가 끝 신호(onend)를 안 보내고 멈추거나, 같은 말을 겹쳐 보내는 경우가 있어
// 버튼을 다시 누르면 무조건 끝내고(들은 만큼 보냄), 시간 제한·오류 안내를 둔다
let tutorMic = null;   // { rec, stop }
const TUTOR_MIC_MSG = {
  "audio-capture": "마이크를 쓸 수 없어요. 다른 앱이 마이크를 쓰고 있지 않은지 확인해 주세요.",
  "network": "음성 인식에 인터넷 연결이 필요해요. 입력창에 적어서 보내도 돼요.",
  "language-not-supported": "이 기기는 영어 음성 인식을 지원하지 않아요. 입력창에 적어 주세요."
};
// 마이크 권한 상태를 미리 알아 둔다 (이미 '차단'이면 눌러도 권한 창이 안 뜨므로 바로 푸는 방법을 안내)
let tutorMicDenied = false;
function tutorCheckMicPermission() {
  if (tutorEnv().inFrame) { tutorMicDenied = false; return; }   // 끼워 넣은 화면에서는 '차단'으로 잘못 나오기도 해서 실제로 켜 본다
  try {
    if (!navigator.permissions || !navigator.permissions.query) return;
    navigator.permissions.query({ name: "microphone" }).then(st => {
      tutorMicDenied = st.state === "denied";
      st.onchange = () => { tutorMicDenied = st.state === "denied"; };
    }).catch(() => {});
  } catch (e) {}
}
/** 인식 결과 합치기: 안드로이드처럼 누적 문장을 여러 번 보내도 한 번만 */
function tutorJoinResults(results) {
  let acc = "";
  for (let i = 0; i < results.length; i++) {
    const t = (results[i][0] && results[i][0].transcript || "").trim();
    if (!t) continue;
    const a = acc.toLowerCase(), b = t.toLowerCase();
    if (b.startsWith(a)) acc = t;
    else if (!a.startsWith(b) && !a.endsWith(b)) acc = (acc + " " + t).trim();
  }
  return acc.replace(/\s+/g, " ").trim();
}
// 말 끝 기다리기: 말이 멈춘 뒤 이만큼 조용하면 다 말한 것으로 보고 보낸다 (생각하느라 멈춘 건 기다려 준다)
const TUTOR_END_WAIT = { short: { label: "짧게", ms: 1200 }, normal: { label: "보통", ms: 2000 }, long: { label: "길게", ms: 3200 } };
// 이런 낱말로 끝나면 말이 이어질 가능성이 커서 더 기다린다 ("I went to the …", "because …", "um …")
const TUTOR_DANGLING = /^(and|but|or|so|because|cause|if|when|while|that|which|who|the|a|an|to|of|in|on|at|for|with|from|about|my|your|his|her|their|our|i|i'm|im|it's|is|was|are|were|am|be|um|uh|uhm|umm|er|hmm|like|very|really|go|went|want|wanted|think|maybe|then|also|just|some|this|these|can|could|will|would|have|had|do|did)$/;
function tutorEndWaitId() { let v = null; try { v = localStorage.getItem("tutorEndWait"); } catch (e) {} return TUTOR_END_WAIT[v] ? v : "normal"; }
function tutorEndWait(text) {
  const last = (text || "").trim().toLowerCase().replace(/[^a-z' ]/g, "").split(/\s+/).pop() || "";
  return TUTOR_END_WAIT[tutorEndWaitId()].ms + (TUTOR_DANGLING.test(last) ? 1500 : 0);
}
function renderTutorEndWait() {
  const box = tutorEl("tutor-endwait-set"), cur = tutorEndWaitId();
  if (box) box.innerHTML = Object.entries(TUTOR_END_WAIT).map(([k, v]) =>
    `<button class="tutor-level-btn${k === cur ? " active" : ""}" onclick="changeTutorEndWait('${k}')">${v.label}</button>`).join("");
}
function changeTutorEndWait(id) {
  if (!TUTOR_END_WAIT[id]) return;
  try { localStorage.setItem("tutorEndWait", id); } catch (e) {}
  renderTutorEndWait();
}
function toggleTutorMic() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!tutorReady()) return;
  // 브라우저 음성 인식이 없거나(인앱 등) 실패했던 곳은 녹음해서 Gemini로 받아쓰기
  if (tutorRecRec || !SR || tutorEnv().inApp || tutorUseRecorder) { toggleTutorRecordMic(); return; }
  if (tutorMic) { tutorMic.user = true; tutorMic.stop(); return; }   // 듣는 중에 누르면 들은 데까지 바로 보낸다
  if (tutorMicDenied) { showMicPermissionHelp(); tutorCheckMicPermission(); return; }
  stopTutorSpeech();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (typeof NeuralTTS !== "undefined" && NeuralTTS.suspendAudio) NeuralTTS.suspendAudio();
  const inp = tutorEl("tutor-input");
  // 브라우저가 말이 잠깐 멈출 때 듣기를 끝내 버려도(특히 안드로이드) 이어서 다시 듣고, 들은 말을 이어 붙인다.
  // 보내는 때는 브라우저가 아니라 우리가 정한다: 마지막 말소리 뒤 tutorEndWait()만큼 조용하면 보낸다
  let committed = "", heard = "", done = false, fatal = false, restarts = 0, silence = null, hinted = false;
  const timers = [];
  const state = { rec: null, user: false };
  const finish = (send = true) => {
    if (done) return;
    done = true;
    clearTimeout(silence); timers.forEach(clearTimeout);
    if (tutorMic === state) tutorMic = null;
    const r = state.rec;
    if (r) { r.onend = r.onerror = r.onresult = null; try { r.abort(); } catch (e) {} }
    const said = send ? heard.trim() : "";
    inp.value = "";
    setTutorStatus(tutorIdleMsg(), "");
    if (said) tutorHandleSaid(said);
    else if (tutorPractice) tutorPracticeEnd(send ? "소리가 들리지 않았어요. 다시 눌러 말해 보세요" : "");
    else if (send && !state.user && !fatal) tutorQuietRestart();   // 조용해서 끝났으면 다시 듣는다
  };
  state.stop = () => finish(true);
  state.cancel = () => finish(false);
  const armSilence = () => {
    clearTimeout(silence);
    if (!heard.trim()) return;
    silence = setTimeout(() => finish(true), tutorEndWait(heard));
    if (!hinted) { hinted = true; setTutorStatus(`다 말했으면 ${tutorName()}를 누르세요`, "listening"); }
  };
  const startRec = () => {
    const rec = new SR();
    rec.lang = "en-US"; rec.interimResults = true; rec.maxAlternatives = 1; rec.continuous = true;
    state.rec = rec;
    rec.onresult = e => {
      const text = (committed + " " + tutorJoinResults(e.results)).replace(/\s+/g, " ").trim();
      if (text !== heard) { heard = text; inp.value = heard; armSilence(); }   // 새 말이 들릴 때마다 기다리는 시간을 다시 잰다
    };
    rec.onerror = e => {
      if (e.error === "no-speech" || e.error === "aborted") return;   // 끝 처리는 onend에서
      // 브라우저 음성 인식 서비스를 못 쓰는 환경이면 다음부터 녹음 + Gemini 받아쓰기로 (마이크 권한 자체가 막힌 건 아님)
      if (e.error === "service-not-allowed" || e.error === "network" || e.error === "language-not-supported") {
        tutorUseRecorder = true; fatal = true;
        setTimeout(() => toggleTutorRecordMic(), 0);   // 이제부터 녹음해서 알아듣는다
      }
      else if (e.error === "not-allowed" && !tutorUseRecorder && tutorEnv().inFrame) {
        tutorUseRecorder = true; fatal = true;       // 마이크를 직접 받는 방식은 허락되는 경우가 있다 (기타 튜너 방식)
        setTimeout(() => toggleTutorRecordMic(), 0);
      }
      else if (e.error === "not-allowed") { fatal = true; tutorMicDenied = true; showMicPermissionHelp(); }
      else if (TUTOR_MIC_MSG[e.error]) { fatal = true; alert(TUTOR_MIC_MSG[e.error]); }
      finish(!fatal);
    };
    rec.onend = () => {
      if (done) return;
      // 말하던 중에 브라우저가 듣기를 끝냈으면 이어서 다시 듣는다 (기다리는 시간은 계속 흐른다)
      if (heard.trim() && restarts < 10) {
        committed = heard; restarts++;
        try { startRec(); return; } catch (e) {}
      }
      finish(true);
    };
    rec.start();
  };
  tutorMic = state;
  timers.push(setTimeout(() => finish(true), 30000));   // 아무리 길어도 30초면 보낸다
  try {
    startRec();
    setTutorStatus("듣고 있어요… 영어로 말해 보세요", "listening");
  } catch (e) { fatal = true; finish(false); setTutorStatus(`음성 인식을 시작하지 못했어요 · 잠시 후 ${tutorName()}를 눌러 주세요`, ""); }
}
/** 튜터가 교정 등을 마무리하는 중이면 끝나기를 기다렸다가 보낸다 (말한 내용을 버리지 않게) */
function sendTutorWhenFree(text, tries = 0) {
  if (!tutorReady()) return;
  if (!tutorBusy) { sendTutorText(text); return; }
  if (tries > 100) { tutorEl("tutor-input").value = text; return; }
  setTimeout(() => sendTutorWhenFree(text, tries + 1), 150);
}

// ---------- 녹음 + Gemini 받아쓰기 ----------
// 인앱 브라우저 등 브라우저 음성 인식이 없는 곳: 기타 튜너처럼 마이크 소리를 직접 받아(getUserMedia)
// 짧은 음성 파일로 만들어 Gemini에게 받아쓰기를 맡긴다 (따로 받을 모델 없음)
let tutorUseRecorder = false;   // 브라우저 음성 인식이 실패하면 이번 실행 동안 녹음 방식으로
/** 마이크로 한 마디 녹음: 말을 멈추면(약 1.2초 조용) 자동으로 끝나고, 16kHz 소리 데이터를 돌려준다 */
function tutorRecordUtterance() {
  let stopNow = null;
  const done = (async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    if (ctx.state === "suspended") await ctx.resume().catch(() => {});
    const src = ctx.createMediaStreamSource(stream);
    const proc = ctx.createScriptProcessor(4096, 1, 1);
    const chunks = [];
    const t0 = performance.now();
    let noise = 0, nNoise = 0, heardVoice = false, lastVoice = 0;
    return await new Promise(resolve => {
      const finish = () => {
        proc.onaudioprocess = null;
        try { src.disconnect(); proc.disconnect(); } catch (e) {}
        stream.getTracks().forEach(t => t.stop());
        const rate = ctx.sampleRate;
        ctx.close().catch(() => {});
        resolve({ audio: tutorResample(chunks, rate, 16000), heardVoice });
      };
      stopNow = finish;
      proc.onaudioprocess = e => {
        const d = e.inputBuffer.getChannelData(0);
        chunks.push(new Float32Array(d));
        let sum = 0; for (let i = 0; i < d.length; i++) sum += d[i] * d[i];
        const rms = Math.sqrt(sum / d.length), now = performance.now();
        if (now - t0 < 350) { noise += rms; nNoise++; return; }               // 처음 잠깐은 주변 소음 크기를 잰다
        const thr = Math.max(0.012, (nNoise ? noise / nNoise : 0) * 3);
        if (rms > thr) { heardVoice = true; lastVoice = now; }
        if ((heardVoice && now - lastVoice > tutorEndWait("")) || (!heardVoice && now - t0 > 8000) || now - t0 > 30000) finish();   // 말이 멈추고 '말 끝 기다리기'만큼 조용하면
      };
      src.connect(proc); proc.connect(ctx.destination);
    });
  })();
  return { done, stop: () => stopNow && stopNow() };
}
/** 여러 조각을 이어 붙이고 16kHz로 바꾼다 (받아쓰기용 음성 파일 크기를 줄이려고) */
function tutorResample(chunks, from, to) {
  const len = chunks.reduce((a, c) => a + c.length, 0);
  const all = new Float32Array(len);
  let o = 0; for (const c of chunks) { all.set(c, o); o += c.length; }
  if (from === to) return all;
  const ratio = from / to, out = new Float32Array(Math.floor(len / ratio));
  for (let i = 0; i < out.length; i++) {                                  // 구간 평균으로 줄인다 (간단한 저역 통과 겸)
    const a = Math.floor(i * ratio), b = Math.min(len, Math.floor((i + 1) * ratio));
    let sum = 0; for (let j = a; j < b; j++) sum += all[j];
    out[i] = sum / Math.max(1, b - a);
  }
  return out;
}
/** 16kHz 소리 → WAV(16비트) → base64 */
function tutorWavBase64(samples, rate) {
  const n = samples.length, buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
  const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  w(0, "RIFF"); v.setUint32(4, 36 + n * 2, true); w(8, "WAVE"); w(12, "fmt "); v.setUint32(16, 16, true);
  v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true);
  v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, "data"); v.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) { const s = Math.max(-1, Math.min(1, samples[i])); v.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true); }
  const bytes = new Uint8Array(buf);
  let bin = ""; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
/** 받아쓰기 결과 정리: 말이 없을 때 지어내는 표시([silence], (noise) 등) 걷어 내기 */
function cleanHeardText(t) {
  const s = (t || "").replace(/\[[^\]]*\]|\([^)]*\)|\*[^*]*\*/g, " ").replace(/^["“]+|["”]+$/g, "").replace(/\s+/g, " ").trim();
  if (!s || /^(no speech|silence|inaudible|none|empty)\.?$/i.test(s)) return "";
  return s;
}
async function geminiTranscribe(audio16k) {
  const data = tutorWavBase64(audio16k, 16000);
  const out = await geminiGenerate([{ role: "user", parts: [
    { inlineData: { mimeType: "audio/wav", data } },
    { text: "Transcribe what this English learner says. Write exactly the English words spoken, keeping any grammar mistakes. If there is no clear speech, reply with nothing. Output only the transcript." }
  ] }], { temperature: 0, maxTokens: 200, chain: "aux" });
  return cleanHeardText(out);
}

let tutorRecRec = null;
async function toggleTutorRecordMic() {
  if (tutorRecRec) { tutorRecRec.user = true; tutorRecRec.stop(); return; }   // 듣는 중에 누르면 바로 끝내고 보낸다
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("이 화면에서는 마이크를 쓸 수 없어요. 아래 입력창에 영어로 적어 주세요."); tutorEl("tutor-input").focus(); return;
  }
  stopTutorSpeech();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (typeof NeuralTTS !== "undefined" && NeuralTTS.suspendAudio) NeuralTTS.suspendAudio();
  const rec = tutorRecordUtterance();
  tutorRecRec = rec;
  setTutorStatus("듣고 있어요… 말을 마치면 자동으로 보내요", "listening");
  let result;
  try { result = await rec.done; }
  catch (e) {
    tutorRecRec = null;
    setTutorStatus(tutorIdleMsg(), "");
    if (e && (e.name === "NotAllowedError" || e.name === "SecurityError")) { tutorMicDenied = true; showMicPermissionHelp(); }
    else if (e && e.name === "NotFoundError") alert("마이크를 찾지 못했어요. 입력창에 적어서 대화할 수 있어요.");
    else alert("마이크를 열지 못했어요. (" + ((e && e.message) || e) + ")");
    return;
  }
  tutorRecRec = null;
  if (rec.cancelled) return;                                     // 글로 입력해 보냈으면 녹음은 버린다
  if (!result.heardVoice || result.audio.length < 16000 * 0.4) {
    setTutorStatus(tutorIdleMsg(), "");
    if (tutorPractice) tutorPracticeEnd("소리가 들리지 않았어요. 다시 눌러 말해 보세요");
    else if (!rec.user) tutorQuietRestart();
    return;
  }
  setTutorStatus("알아듣는 중…", "thinking");
  try {
    const text = await geminiTranscribe(result.audio);
    setTutorStatus(tutorIdleMsg(), "");
    if (!text) { tutorPracticeEnd("잘 못 알아들었어요. 다시 눌러 또박또박 말해 보세요"); setTutorStatus(`잘 못 알아들었어요 · ${tutorName()}를 누르고 또박또박 말해 보세요`, ""); return; }
    tutorHandleSaid(text);
  } catch (e) {
    setTutorStatus(tutorIdleMsg(), "");
    alert("말을 알아듣지 못했어요. 입력창에 적어서 대화할 수 있어요.\n(" + geminiErrorText(e) + ")");
  }
}

// ---------- 힌트 · 피드백 ----------
function toggleTutorHint() { tutorHintShown = !tutorHintShown; renderTutorHint(); }
// AI 힌트: 지금 대화의 마지막 말에 이어서 내가 할 수 있는 말 3가지 (영어 + 한국어 뜻)
let tutorHintCache = { key: "", list: null, loading: null };
const TUTOR_HINT_SCHEMA = { type: "OBJECT", properties: { suggestions: { type: "ARRAY", items: { type: "OBJECT",
  properties: { en: { type: "STRING" }, kr: { type: "STRING" } }, required: ["en", "kr"] } } }, required: ["suggestions"] };
function tutorTranscript(maxMsgs) {
  return tutorMessages.slice(1).slice(-(maxMsgs || 12)).map(m => (m.role === "user" ? "Student: " : "Teacher: ") + m.content).join("\n");
}
async function loadTutorAiHints(key) {
  const said = tutorSaidLines[tutorSaidLines.length - 1] || "";
  const j = await geminiJSON([
    { role: "system", content: `You help a Korean adult practice English conversation at the ${tutorLevel().desc} level. ` +
      "Suggest 3 different, natural things the student could say next in reply to the teacher's last message. Make them sound like real spoken English at the student's level " +
      "(beginner: short and simple), and make each one different (for example a short answer, an answer with a detail, and a question back). Give a natural Korean meaning for each." },
    { role: "user", content: `Conversation so far:\n${tutorTranscript(10) || "(none)"}\n` +
      (tutorMessages.length <= 1 && said ? `Teacher: ${said}\n` : "") + "Suggest what the student can say next." }
  ], { temperature: 0.7, maxTokens: 300, schema: TUTOR_HINT_SCHEMA, chain: "hint" });
  const list = ((j && j.suggestions) || []).filter(x => x && x.en).slice(0, 3);
  if (tutorHintCache.key === key) tutorHintCache.list = list;
  return list;
}
/** 힌트를 미리 만들어 둔다: 튜터 말이 정해지면 바로 (💡를 누를 때는 이미 준비돼 있게). 실패했던 건 다시 시도 */
function tutorPrepareHints() {
  if (!tutorReady() || !tutorCallActive) return;
  const key = tutorSessionToken + ":" + tutorSaidLines.length + ":" + tutorLevelId();
  if (tutorHintCache.key === key && !tutorHintCache.error) return;
  const entry = { key, list: null, error: null, loading: null };
  entry.loading = loadTutorAiHints(key)
    .then(list => { if (!list.length) entry.error = new Error("힌트를 받지 못했어요"); })
    .catch(e => { entry.error = e; })
    .finally(() => { entry.loading = null; if (tutorHintCache === entry && tutorHintShown) renderTutorHint(); });
  tutorHintCache = entry;
}
function renderTutorHint() {
  const box = tutorEl("tutor-hint");
  if (!box) return;
  box.classList.toggle("hidden", !tutorHintShown);
  const hb = tutorEl("tutor-hint-btn"); if (hb) hb.classList.toggle("on", tutorHintShown);
  if (!tutorHintShown) return;
  if (!tutorReady()) return;
  if (tutorBusy) { box.innerHTML = `<div class="tutor-hint-label">힌트 만드는 중…</div>`; return; }   // Emma 답이 정해지면 그 답에 맞춰 만든다
  tutorPrepareHints();
  if (!tutorHintCache.list || !tutorHintCache.list.length) {
    box.innerHTML = tutorHintCache.error ? `<div class="tutor-hint-label">힌트를 만들지 못했어요. ${geminiErrorText(tutorHintCache.error)}</div>` : `<div class="tutor-hint-label">힌트 만드는 중…</div>`;
    return;
  }
  box.innerHTML = `<div class="tutor-hint-label">이렇게 말해 볼까요? (누르면 듣고, 입력창에 들어가요)</div>`;
  tutorHintCache.list.forEach(h => {
    const row = document.createElement("div"); row.className = "tutor-hint-item";
    row.innerHTML = `<div class="tutor-hint-en"></div><div class="tutor-hint-kr"></div>`;
    row.querySelector(".tutor-hint-en").textContent = h.en;
    row.querySelector(".tutor-hint-kr").textContent = h.kr;
    row.onclick = () => { tutorCancelListening(); tutorEl("tutor-input").value = h.en; speakTutor(h.en, tutorSessionToken); };
    box.appendChild(row);
  });
}

/** 오늘 대화 피드백: 한 줄 총평 · 오늘의 핵심 하나 · 고쳐 말하기 · 써 볼 표현 2개 (짧고 깔끔하게).
 *  선생님 정리(AI)와 문장 확인을 동시에 시작해서, 먼저 끝나는 것부터 보여 준다. 대화가 그대로면 다시 열 때 바로 */
let tutorFeedbackCache = { key: "", r: null };
const TUTOR_FB_SCHEMA = { type: "OBJECT", properties: {
  overall: { type: "STRING" }, focus: { type: "STRING" },
  expressions: { type: "ARRAY", items: { type: "OBJECT", properties: { en: { type: "STRING" }, kr: { type: "STRING" } }, required: ["en", "kr"] } }
}, required: ["overall", "focus"] };
function tutorFeedbackReport() {
  return geminiJSON([
    { role: "system", content: `You are a warm, sharp English conversation teacher. Give a Korean adult student at the ${tutorLevel().desc} level a very short feedback card on today's conversation, in simple Korean (존댓말).\n` +
      "overall: ONE short sentence (under 45 Korean characters) - an honest, encouraging summary of how they did.\n" +
      "focus: the ONE most important thing to practice next, as one short, concrete Korean sentence with a tiny English example (e.g. \"지난 일은 과거형으로: go → went\"). Pick the pattern that matters most, not a list.\n" +
      "expressions: exactly 2 short, natural English expressions they could use in this kind of conversation, at their level, each with a short Korean meaning.\n" +
      "No greetings, no filler, no extra advice." },
    { role: "user", content: `Conversation:\n${tutorTranscript(30)}\n\nMistakes found so far:\n` +
      (tutorLearnerItems.filter(it => it.fix).map(it => `- ${it.text} -> ${it.fix}`).join("\n") || "(none)") }
  ], { temperature: 0.3, maxTokens: 350, chain: "chat", schema: TUTOR_FB_SCHEMA });
}
async function tutorFeedback() {
  const box = tutorEl("tutor-feedback");
  box.classList.remove("hidden");
  if (tutorLearnerLines.length === 0) {
    box.innerHTML = `<div class="tutor-fb-summary">아직 영어로 말한 문장이 없어요. 한 마디라도 말해 봐요! 😊</div>`;
    return;
  }
  if (!tutorReady()) return;
  const token = tutorSessionToken;
  const n = tutorLearnerLines.length;
  box.innerHTML = `<div class="tutor-feedback-body">
    <div class="tutor-fb-summary">영어로 ${n}번 말했어요</div>
    <div class="tutor-fb-card"><div class="tutor-fb-overall tutor-fb-wait">선생님이 정리하고 있어요…</div><div class="tutor-fb-focus hidden"></div></div>
    <div class="tutor-report-sec tutor-fb-fixes"><div class="tutor-report-title">✏️ 이렇게 고쳐 말해요</div><div class="tutor-fb-list tutor-fb-wait">내가 한 문장을 확인하고 있어요…</div></div>
    <div class="tutor-report-sec tutor-fb-expr hidden"><div class="tutor-report-title">✨ 써 볼 표현</div></div>
    <div class="tutor-fb-note">문장을 누르면 들을 수 있어요 · AI 평가는 참고용이에요</div>
  </div>`;
  const q = sel => box.querySelector(sel);
  // ① 선생님 정리: 바로 시작 (대화가 그대로면 지난 결과를 그대로)
  const key = [tutorGreeting, n, tutorLearnerLines[n - 1], tutorLevelId()].join("|");   // 같은 대화·같은 문장 수면 다시 요청하지 않는다
  const reportP = (tutorFeedbackCache.key === key && tutorFeedbackCache.r ? Promise.resolve(tutorFeedbackCache.r) : tutorFeedbackReport())
    .then(r => {
      if (token !== tutorSessionToken) return;
      if (!r || !r.overall) throw new Error("평가 형식 오류");
      tutorFeedbackCache = { key, r };
      const ov = q(".tutor-fb-overall"); ov.classList.remove("tutor-fb-wait"); ov.textContent = r.overall;
      if (r.focus) { const f = q(".tutor-fb-focus"); f.innerHTML = `<b>🎯 오늘의 핵심</b><span></span>`; f.querySelector("span").textContent = r.focus; f.classList.remove("hidden"); }
      const ex = (r.expressions || []).filter(x => x && x.en).slice(0, 2);
      if (ex.length) {
        const sec = q(".tutor-fb-expr");
        ex.forEach(x => {
          const d = document.createElement("div"); d.className = "tutor-report-expr";
          d.innerHTML = `<b></b> <span></span>`; d.querySelector("b").textContent = x.en; d.querySelector("span").textContent = x.kr;
          d.onclick = () => speakTutor(x.en, tutorSessionToken); sec.appendChild(d);
          tutorNoteAdd({ en: x.en, ko: x.kr, src: "expr" });
        });
        sec.classList.remove("hidden");
      }
    })
    .catch(e => {
      console.warn("평가 실패", e);
      if (token !== tutorSessionToken) return;
      const ov = q(".tutor-fb-overall"); ov.classList.remove("tutor-fb-wait"); ov.classList.add("tutor-report-err");
      ov.textContent = "선생님 정리를 받지 못했어요. " + geminiErrorText(e);
    });
  // ② 고쳐 말하기: 대화 중에 확인 못 한 문장만 지금 확인
  const pending = tutorLearnerItems.map((it, i) => it.check || (it.fix === undefined
    ? tutorCheckItem(it, (tutorMessages.filter(m => m.role === "assistant")[i - 1] || {}).content, token) : null)).filter(Boolean);
  await Promise.all(pending);
  if (token !== tutorSessionToken) return;
  const seen = new Set();   // 같은 문장을 여러 번 말했으면 교정은 한 번만
  tutorCorrections = tutorLearnerItems.filter(it => it.fix && !seen.has(tutorNorm(it.text)) && seen.add(tutorNorm(it.text))).map(it => ({ said: it.text, better: it.fix, why: it.why }));
  const fixes = tutorCorrections.slice(-5), failed = tutorLearnerItems.filter(it => it.fix === undefined).length;
  q(".tutor-fb-summary").textContent = `영어로 ${n}번 말했어요 · ` + (fixes.length ? `고쳐 볼 문장 ${tutorCorrections.length}개` : "눈에 띄는 실수 없이 잘했어요! 👏");
  const list = q(".tutor-fb-list"); list.classList.remove("tutor-fb-wait"); list.innerHTML = "";
  if (!fixes.length) q(".tutor-fb-fixes").classList.add("hidden");
  fixes.forEach(({ said, better, why }) => {
    const row = document.createElement("div"); row.className = "tutor-fb-row";
    row.innerHTML = `<span class="from"></span><span class="arrow">→</span><span class="to"></span><span class="why"></span>`;
    row.querySelector(".from").textContent = said;
    row.querySelector(".to").textContent = better;
    row.querySelector(".why").textContent = why || "";
    row.onclick = () => speakTutor(better, tutorSessionToken);
    list.appendChild(row);
  });
  if (failed) { const d = document.createElement("div"); d.className = "tutor-fb-note"; d.textContent = `${failed}문장은 확인하지 못했어요. 잠시 뒤 다시 열어 주세요.`; list.appendChild(d); q(".tutor-fb-fixes").classList.remove("hidden"); }
  await reportP;
}

// ---------- 튜터 얼굴 (입모양) ----------
const TutorAvatar = (() => {
  let mounted = false, raf = 0, level = 0, mouthEls = null, frames = null, lastBlink = 0;
  let clips = null, clip = "idle", quietSince = 0, paused = false;   // 영상 튜터: idle(듣기)·talk(말하기)를 겹쳐 두고 번갈아 보인다
  const SVG = `
<svg viewBox="0 0 200 200" class="tutor-svg" aria-hidden="true">
  <defs>
    <linearGradient id="tbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#38bdf8"/></linearGradient>
  </defs>
  <circle cx="100" cy="100" r="96" fill="url(#tbg)" opacity="0.25"/>
  <path d="M45 190 C50 150 150 150 155 190 Z" fill="#6366f1"/>
  <rect x="88" y="132" width="24" height="22" rx="8" fill="#f2c4a0"/>
  <ellipse cx="100" cy="98" rx="46" ry="52" fill="#f8d2b0"/>
  <path d="M52 92 C50 50 78 36 102 38 C130 38 152 56 148 94 C140 70 120 62 100 62 C80 62 62 70 52 92 Z" fill="#3b2a24"/>
  <ellipse cx="55" cy="102" rx="7" ry="11" fill="#f2c4a0"/><ellipse cx="145" cy="102" rx="7" ry="11" fill="#f2c4a0"/>
  <g class="tutor-eyes">
    <ellipse cx="82" cy="98" rx="5.5" ry="6.5" fill="#1e1b2e"/><ellipse cx="118" cy="98" rx="5.5" ry="6.5" fill="#1e1b2e"/>
    <circle cx="84" cy="96" r="1.8" fill="#fff"/><circle cx="120" cy="96" r="1.8" fill="#fff"/>
  </g>
  <path d="M73 86 Q82 81 91 85" stroke="#3b2a24" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M109 85 Q118 81 127 86" stroke="#3b2a24" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="72" cy="114" rx="7" ry="4" fill="#f59e9e" opacity="0.45"/><ellipse cx="128" cy="114" rx="7" ry="4" fill="#f59e9e" opacity="0.45"/>
  <path d="M100 104 Q97 112 101 114" stroke="#d9a07c" stroke-width="2" fill="none" stroke-linecap="round"/>
  <g class="tutor-mouth">
    <path class="mouth-closed" d="M88 126 Q100 134 112 126" stroke="#b4535a" stroke-width="3.2" fill="none" stroke-linecap="round"/>
    <ellipse class="mouth-open" cx="100" cy="128" rx="11" ry="1" fill="#7a2335"/>
    <ellipse class="mouth-tongue" cx="100" cy="132" rx="6" ry="0" fill="#e57b8a"/>
  </g>
</svg>`;
  function mount() {
    const box = document.getElementById("tutor-avatar");
    if (!box || mounted) return;
    mounted = true;
    const media = tutorChar().media;
    if (media) {
      box.style.backgroundImage = `url("${media}poster.jpg")`;   // 영상이 뜨기 전·못 틀 때 보이는 첫 화면
      box.classList.add("has-clips");
      box.innerHTML = ["idle", "talk"].map(k =>
        `<video class="tutor-clip" data-clip="${k}" poster="${media}poster.jpg" muted loop playsinline preload="auto" disablepictureinpicture aria-hidden="true">` +
        `<source src="${media}${k}.webm" type='video/webm; codecs="vp9"'><source src="${media}${k}.mp4" type="video/mp4"></video>`).join("");   // 작은 WebM 먼저, 못 틀면 MP4
      clips = {};
      box.querySelectorAll("video").forEach(v => { v.muted = true; v.defaultMuted = true; clips[v.dataset.clip] = v; });
      clip = "idle"; clips.idle.classList.add("on");
      playClip(clips.idle);
      loop();
      return;
    }
    box.style.backgroundImage = ""; box.classList.remove("has-clips");
    if (TUTOR_AVATAR_FRAMES) {
      box.innerHTML = ["closed", "half", "open"].map(k => `<img class="tutor-frame" data-frame="${k}" src="${TUTOR_AVATAR_FRAMES[k]}" alt="">`).join("");
      frames = [...box.querySelectorAll(".tutor-frame")];
    } else {
      box.innerHTML = SVG;
      mouthEls = { closed: box.querySelector(".mouth-closed"), open: box.querySelector(".mouth-open"), tongue: box.querySelector(".mouth-tongue"), eyes: box.querySelector(".tutor-eyes") };
    }
    apply(0);
    loop();
  }
  function playClip(v) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
  /** 말하기 ↔ 듣기 영상 바꾸기: 새 영상을 (말하기는 매번 다른 지점부터) 틀고 겹쳐서 서서히 바꾼 뒤 이전 영상은 멈춘다 */
  function showClip(k) {
    if (!clips || k === clip) return;
    const nv = clips[k], ov = clips[clip];
    clip = k;
    if (k === "talk" && nv.duration) { try { nv.currentTime = Math.random() * nv.duration; } catch (e) {} }
    playClip(nv);
    nv.classList.add("on"); ov.classList.remove("on");
    setTimeout(() => { if (clips && clips[clip] !== ov) ov.pause(); }, 450);
  }
  /** 다른 튜터로 바꿀 때 */
  function remount() {
    const box = document.getElementById("tutor-avatar");
    if (clips) Object.values(clips).forEach(v => { try { v.pause(); v.removeAttribute("src"); v.load(); } catch (e) {} });
    clips = null; frames = null; mouthEls = null; mounted = false;
    if (box) box.innerHTML = "";
    mount();
  }
  /** 0(다문 입) ~ 1(크게 벌린 입) */
  function apply(v) {
    if (frames) {
      const k = v < 0.12 ? "closed" : v < 0.45 ? "half" : "open";
      frames.forEach(f => f.classList.toggle("on", f.dataset.frame === k));
      return;
    }
    if (!mouthEls) return;
    mouthEls.closed.style.opacity = v < 0.08 ? 1 : 0;
    mouthEls.open.setAttribute("ry", (1 + v * 10).toFixed(2));
    mouthEls.open.setAttribute("rx", (10 + v * 3).toFixed(2));
    mouthEls.open.style.opacity = v < 0.08 ? 0 : 1;
    mouthEls.tongue.setAttribute("ry", Math.max(0, v * 4 - 0.8).toFixed(2));
    mouthEls.tongue.setAttribute("cy", (128 + v * 5).toFixed(2));
  }
  function target(now) {
    if (!tutorSpeaking) return 0;
    // 자연스러운 음성: 실제 소리 크기 / 기본 음성: 말하는 동안 음절처럼 여닫기
    const lv = (typeof NeuralTTS !== "undefined" && NeuralTTS.outputLevel) ? NeuralTTS.outputLevel() : 0;
    if (lv > 0) return Math.min(1, Math.max(0, (lv - 0.01) * 6));
    if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
      const t = now / 1000;
      return Math.max(0, 0.55 * Math.abs(Math.sin(t * 11)) + 0.25 * Math.abs(Math.sin(t * 17 + 1)) - 0.1);
    }
    return 0;
  }
  function loop() {
    if (raf) return;
    const tick = () => { raf = requestAnimationFrame(tick); step(); };
    raf = requestAnimationFrame(tick);
  }
  function step() {
    const page = document.getElementById("page-tutor");
    const hidden = !page || page.classList.contains("hidden") || document.hidden;
    if (clips) {
      // 화면을 떠나 있으면 영상을 멈춰 배터리를 아낀다
      if (hidden) { if (!paused) { paused = true; Object.values(clips).forEach(v => v.pause()); } return; }
      if (paused) { paused = false; playClip(clips[clip]); }
      const now = performance.now();
      // 말하는 동안은 talk, 말이 끝나고 0.35초 넘게 조용하면 idle (문장 사이 짧은 쉼에 깜빡이지 않게)
      if (tutorAudioPlaying()) { quietSince = 0; showClip("talk"); }   // 실제로 소리가 나는 동안만 말하는 영상 (음성을 받는 중엔 듣는 영상)
      else { if (!quietSince) quietSince = now; if (now - quietSince > 350) showClip("idle"); }
      level = tutorSpeaking ? 1 : 0;
      return;
    }
    if (hidden) return;
    const now = performance.now();
    const t = target(now);
    level += (t - level) * (t > level ? 0.55 : 0.3);
    apply(level < 0.02 ? 0 : level);
    // 눈 깜빡임
    if (mouthEls && now - lastBlink > 3200 + Math.random() * 2500) {
      lastBlink = now;
      mouthEls.eyes.classList.add("blink");
      setTimeout(() => mouthEls && mouthEls.eyes.classList.remove("blink"), 140);
    }
  }
  return { mount, remount, apply, get level() { return level; }, get clip() { return clips ? clip : null; } };
})();
