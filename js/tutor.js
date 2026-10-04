// ==========================================
// AI 튜터: 구글 Gemini와 실시간 말하기 연습
// - 사용자가 자기 Gemini API 키(구글 AI Studio에서 무료로 만듦)를 한 번 붙여 넣으면 이 기기에서 구글로 바로 요청한다.
//   키는 이 기기에만 저장되고 우리 서버를 거치지 않는다. 사용량도 각자의 무료 한도에서 쓴다
// - 듣기: 브라우저 음성 인식(없으면 녹음해서 Gemini로 받아쓰기) / 말하기: 앱 음성 + 소리에 맞춘 입모양
// ==========================================

const GEMINI_API = "https://generativelanguage.googleapis.com/v1beta/models/";
// 튜터의 말(대화·피드백)은 가장 똑똑한 Flash, 교정·힌트·번역·받아쓰기 같은 보조 일은 빠른 Flash-Lite.
// 앞 모델의 무료 사용량을 다 쓰거나 잠시 막히면 다음 모델로 넘어간다
// (무료 사용량이 모델마다 따로라, 일을 나눠 맡기고 번갈아 쓰면 하루에 더 오래 대화할 수 있다)
const TUTOR_GEMINI_CHAINS = {
  chat: ["gemini-3.8-flash", "gemini-3.5-flash", "gemini-3.5-flash-lite", "gemini-3.1-flash-lite"],
  aux: ["gemini-3.5-flash-lite", "gemini-3.1-flash-lite", "gemini-3.5-flash"]
};
const GEMINI_KEY_STORE = "geminiApiKey";
const GEMINI_KEY_PAGE = "https://aistudio.google.com/apikey";
// 튜터 그림: 입 모양별 이미지 3장(다문 입·반쯤 벌린 입·크게 벌린 입)을 넣으면 소리에 맞춰 바뀐다.
// 비워 두면 기본 캐릭터(SVG). 예: { closed: "images/tutor/closed.png", half: "images/tutor/half.png", open: "images/tutor/open.png" }
const TUTOR_AVATAR_FRAMES = null;

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
const tutorModelIdx = { chat: 0, aux: 0 };   // 일마다 지금 쓰는 모델 (목록 안의 위치)
const tutorThinking = {};              // 모델별 생각 수준 (MINIMAL을 못 쓰는 모델이면 LOW로)
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
const geminiTryNext = e => e && !geminiKeyProblem(e) && (e.status === 429 || e.status === 404 || e.status === 403 || e.status >= 500);
/** 모델을 차례로 시도: 생각 수준 설정을 못 쓰는 모델이면 낮춰서 다시, 사용량 초과·혼잡이면 다음 모델로.
 *  run(model, thinking, started)는 started()를 불러 '이미 글자를 보여 주기 시작했음'을 알린다 (그 뒤에는 다른 모델로 넘기지 않음) */
async function geminiCall(run, chain = "chat") {
  const list = TUTOR_GEMINI_CHAINS[chain];
  let last = null;
  for (let k = 0; k < list.length; k++) {
    const idx = (tutorModelIdx[chain] + k) % list.length, model = list[idx];
    let begun = false;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const out = await run(model, tutorThinking[model] || "MINIMAL", () => { begun = true; });
        if (tutorModelIdx[chain] !== idx) { tutorModelIdx[chain] = idx; renderTutorCredit(); }
        return out;
      } catch (e) {
        if (e && e.name === "AbortError") throw e;
        last = e;
        if (begun) throw e;
        if (e.status === 400 && /think/i.test(e.message || "") && tutorThinking[model] !== "LOW") { tutorThinking[model] = "LOW"; continue; }
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
  if (e.status >= 500) return "구글 서버가 잠시 바빠요. 조금 뒤에 다시 해 주세요.";
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
function setTutorStatus(text, mode) {
  const st = tutorEl("tutor-status"); if (st) st.textContent = text;
  const av = tutorEl("tutor-avatar"); if (av) av.dataset.mode = mode || "";
  const room = tutorEl("tutor-chat-area"); if (room) room.dataset.mode = mode || "";
  const mic = tutorEl("tutor-mic-btn");
  if (mic) {
    mic.classList.toggle("listening", mode === "listening");
    mic.disabled = mode === "thinking" || mode === "loading";
    const label = mic.querySelector("span");
    if (label) label.textContent = mode === "listening" ? "보내기" : "말하기";
  }
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
  fillTutorVoices();
  renderTutorCredit();
  if (!tutorReady()) {
    showTutorSection("setup");
    setTutorStatus("구글 Gemini 키를 연결하면 바로 대화할 수 있어요", "");
    return;
  }
  showTutorSection("chat");
  renderTutorCallState();
  if (!tutorCallActive) setTutorStatus("통화 시작을 누르면 Emma와 대화가 시작돼요", "");
  else setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
}

/** 붙여넣기 버튼: 클립보드의 키를 칸에 넣는다 (권한이 없으면 길게 눌러 붙여 넣게 안내) */
async function pasteTutorKey() {
  const inp = tutorEl("tutor-key-input");
  try { const t = await navigator.clipboard.readText(); if (t) { inp.value = t.trim(); return; } } catch (e) {}
  inp.focus();
  showTutorKeyMsg("칸을 길게 눌러 '붙여넣기'를 해 주세요.", false);
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
  tutorCallActive = false; clearInterval(tutorCallTimer); tutorStopCamera(); toggleTutorSheet();
  tutorSetKey("");
  tutorMessages = []; tutorLearnerLines = []; tutorLearnerItems = [];
  tutorEl("tutor-log").innerHTML = "";
  renderTutorPage();
}

/** 다른 화면으로 갈 때: 말하기·듣기·답 만들기를 멈춘다 */
function stopTutorActivity() {
  tutorSessionToken++;
  tutorSpeechToken++;
  tutorSpeaking = false;
  if (tutorMic) { const m = tutorMic; tutorMic = null; try { m.rec.onend = m.rec.onerror = m.rec.onresult = null; m.rec.abort(); } catch (e) {} }
  if (tutorAbort) { try { tutorAbort.abort(); } catch (e) {} tutorAbort = null; }
  tutorBusy = false;
}
function leaveTutorPage() {
  stopTutorActivity();
  tutorCallActive = false;
  clearInterval(tutorCallTimer);
  tutorStopCamera();
  toggleTutorSheet();
}

// ---------- 화상 통화 ----------
let tutorCallActive = false;
let tutorCallStart = 0;
let tutorCallTimer = null;
let tutorCamStream = null;
function renderTutorCallState() {
  const dial = tutorEl("tutor-dial");
  if (dial) { dial.classList.toggle("hidden", tutorCallActive); dial.classList.remove("ringing"); }
  const room = tutorEl("tutor-chat-area"); if (room) room.classList.toggle("idle", !tutorCallActive);
  const sub = tutorEl("tutor-dial-sub"); if (sub) sub.textContent = "영어 회화 선생님 · 자유 대화";
  const face = document.querySelector(".call-dial-face");
  if (face && TUTOR_AVATAR_FRAMES && !face.querySelector("img")) face.innerHTML = `<img src="${TUTOR_AVATAR_FRAMES.closed}" alt="Emma">`;
  const auto = tutorEl("tutor-auto-listen"); if (auto) auto.checked = tutorAutoListenOn();
  const cam = tutorEl("tutor-cam-on"); if (cam) cam.checked = tutorCamWanted();
}
/** 통화 시작: 잠깐 연결음 → Emma가 인사하며 대화 시작 */
function startTutorCall() {
  if (!tutorReady()) return;
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();   // 누른 순간에 소리 장치를 깨워 둔다 (아이폰)
  toggleTutorSheet();
  const dial = tutorEl("tutor-dial");
  dial.classList.remove("hidden"); dial.classList.add("ringing");
  tutorEl("tutor-dial-sub").textContent = "연결 중…";
  const token = ++tutorSessionToken;
  setTimeout(() => {
    if (token !== tutorSessionToken) return;
    tutorCallActive = true;
    tutorCallStart = Date.now();
    clearInterval(tutorCallTimer);
    const tick = () => { const s2 = Math.floor((Date.now() - tutorCallStart) / 1000); const el = tutorEl("tutor-timer"); if (el) el.textContent = `${String(Math.floor(s2 / 60)).padStart(2, "0")}:${String(s2 % 60).padStart(2, "0")}`; };
    tick(); tutorCallTimer = setInterval(tick, 1000);
    renderTutorCallState();
    if (tutorCamWanted()) tutorStartCamera();
    startTutorSession();
  }, 1100);
}
/** 통화 종료: 멈추고 통화 요약(피드백)을 보여 준다 */
function endTutorCall() {
  if (!tutorCallActive) { goTo("home"); return; }
  stopTutorActivity();
  tutorCallActive = false;
  clearInterval(tutorCallTimer);
  tutorStopCamera();
  const el = tutorEl("tutor-timer"); if (el) el.textContent = "영어 선생님";
  tutorShowCaption(null);
  renderTutorCallState();
  setTutorStatus("통화가 끝났어요", "");
  toggleTutorSheet("feedback");
  tutorFeedback();
}
/** 아래에서 올라오는 판 (기록·설정·통화 요약). 이름 없이 부르면 모두 닫는다 */
function toggleTutorSheet(name) {
  ["log", "settings", "feedback"].forEach(n => {
    const el = tutorEl("tutor-sheet-" + n); if (!el) return;
    const show = n === name && el.classList.contains("hidden");
    el.classList.toggle("hidden", !show);
    if (show && n === "log") { const log = tutorEl("tutor-log"); log.scrollTop = log.scrollHeight; }
  });
}
function toggleTutorType() {
  const row = tutorEl("tutor-type-row");
  row.classList.toggle("hidden");
  if (!row.classList.contains("hidden")) tutorEl("tutor-input").focus();
}
// 자막: 지금 선생님이 하는 말 (🐢 천천히·🇰🇷 해석 버튼과 함께) / 내가 한 말 / 교정 팁
function tutorShowCaption(text, done) {
  const cap = tutorEl("tutor-caption");
  if (!cap) return;
  if (!text) { cap.classList.add("hidden"); cap.innerHTML = ""; return; }
  cap.classList.remove("hidden");
  if (!done) { cap.textContent = text; return; }
  cap.innerHTML = `<div class="cap-text"></div><div class="cap-actions"></div>`;
  cap.querySelector(".cap-text").textContent = text;
  const acts = cap.querySelector(".cap-actions");
  const slow = document.createElement("button"); slow.className = "tutor-slow-btn"; slow.textContent = "🐢 천천히";
  slow.onclick = () => speakTutorSlow(text);
  const tr = document.createElement("button"); tr.className = "tutor-slow-btn"; tr.textContent = "🇰🇷 해석";
  tr.onclick = async () => {
    let box = cap.querySelector(".cap-trans");
    if (box) { box.classList.toggle("hidden"); return; }
    box = document.createElement("div"); box.className = "cap-trans"; box.textContent = "해석하는 중…"; cap.appendChild(box);
    try { box.textContent = await tutorTranslate(text); } catch (e) { box.textContent = "해석하지 못했어요. " + geminiErrorText(e); }
  };
  acts.append(slow, tr);
}
let tutorMyCapTimer = null, tutorToastTimer = null;
function tutorShowMyCaption(text) {
  const cap = tutorEl("tutor-caption-me"); if (!cap) return;
  cap.textContent = text; cap.classList.remove("hidden");
  clearTimeout(tutorMyCapTimer); tutorMyCapTimer = setTimeout(() => cap.classList.add("hidden"), 7000);
}
function tutorShowToast(better, why) {
  const el = tutorEl("tutor-toast"); if (!el) return;
  el.innerHTML = `💡 <b></b><span></span>`;
  el.querySelector("b").textContent = better;
  el.querySelector("span").textContent = why ? " · " + why : "";
  el.onclick = () => speakTutor(better, tutorSessionToken);
  el.classList.remove("hidden");
  clearTimeout(tutorToastTimer); tutorToastTimer = setTimeout(() => el.classList.add("hidden"), 9000);
}
// 자동 듣기: 선생님 말이 끝나면 바로 마이크를 켠다 (실제 통화처럼). 끄면 직접 🎤를 누른다
function tutorAutoListenOn() { try { return localStorage.getItem("tutorAutoListen") !== "0"; } catch (e) { return true; } }
function changeTutorAutoListen() { try { localStorage.setItem("tutorAutoListen", tutorEl("tutor-auto-listen").checked ? "1" : "0"); } catch (e) {} }
function tutorAfterSpeak(token) {
  if (token !== tutorSessionToken || !tutorCallActive || !tutorAutoListenOn()) return;
  if (tutorBusy || tutorSpeaking || tutorMic || tutorRecRec) return;
  const page = tutorEl("page-tutor");
  if (!page || page.classList.contains("hidden") || document.hidden) return;
  if (["log", "settings", "feedback"].some(n => !tutorEl("tutor-sheet-" + n).classList.contains("hidden"))) return;
  if (!tutorEl("tutor-type-row").classList.contains("hidden") && tutorEl("tutor-input").value.trim()) return;
  setTimeout(() => { if (token === tutorSessionToken && !tutorBusy && !tutorSpeaking && !tutorMic && !tutorRecRec) toggleTutorMic(); }, 250);
}
// 내 얼굴(앞 카메라): 이 기기 화면에만 보여 준다. 어디에도 보내지 않는다
function tutorCamWanted() { try { return localStorage.getItem("tutorCam") === "1"; } catch (e) { return false; } }
async function tutorStartCamera() {
  const box = tutorEl("tutor-self"), video = tutorEl("tutor-cam");
  if (!box || tutorCamStream || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
  try {
    tutorCamStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: { ideal: 480 } }, audio: false });
    if (!tutorCallActive) { tutorStopCamera(); return; }
    video.srcObject = tutorCamStream; box.classList.add("cam");
    try { await video.play(); } catch (e) {}
  } catch (e) {
    console.warn("카메라를 켜지 못함", e);
    try { localStorage.setItem("tutorCam", "0"); } catch (e2) {}
    renderTutorCallState();
    alert("카메라를 켜지 못했어요. 카메라 권한을 확인해 주세요.");
  }
}
function tutorStopCamera() {
  if (tutorCamStream) { tutorCamStream.getTracks().forEach(t => t.stop()); tutorCamStream = null; }
  const box = tutorEl("tutor-self"); if (box) box.classList.remove("cam");
  const video = tutorEl("tutor-cam"); if (video) video.srcObject = null;
}
function changeTutorCamera() {
  const on = tutorEl("tutor-cam-on").checked;
  try { localStorage.setItem("tutorCam", on ? "1" : "0"); } catch (e) {}
  if (on && tutorCallActive) tutorStartCamera(); else if (!on) tutorStopCamera();
}

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
function changeTutorLevel(id) {
  if (!TUTOR_LEVELS[id] || id === tutorLevelId()) return;
  try { localStorage.setItem("tutorLevel", id); } catch (e) {}
  renderTutorLevels();
  if (tutorMessages.length) tutorMessages[0] = { role: "system", content: tutorSystemPrompt() };
  if (tutorCallActive) setTutorStatus(`이제 ${tutorLevel().label} 수준으로 말할게요`, "");
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
function tutorSystemPrompt() {
  return `You are Emma, a warm, encouraging and skilled English conversation teacher. Your student is a Korean adult at the ${tutorLevel().desc} level who wants to get comfortable speaking English. ` +
    "Have a friendly, natural conversation about everyday life: the student's day, food, work, hobbies, family, weekend plans, travel and feelings. Follow the student's interests, go deeper into what they share, and naturally bring up a new topic when one runs out.\n" +
    `You already started the chat by saying: "${tutorGreeting}" Do not greet or introduce yourself again.\n${tutorStyle()}`;
}
// 첫 인사: 대화마다 하나를 골라 (튜터가 먼저 말을 건다)
const TUTOR_GREETINGS = [
  "Hi, I'm Emma! How's your day going?",
  "Hi there, I'm Emma! What have you been up to today?",
  "Hello, I'm Emma! How are you feeling today?",
  "Hi, I'm Emma! Did you do anything fun this week?",
  "Hey, I'm Emma! What did you have for lunch today?"
];
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
    kept.push(line.replace(/^\s*\**\s*(B|Emma|Tutor|Teacher)\s*\**\s*:\s*/i, ""));
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
    if ((prevSays || []).length && /\b(i'm|i am) emma\b/i.test(x)) return false;
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
  // 지난번과 다른 인사로 시작
  const others = TUTOR_GREETINGS.filter(g => g !== tutorGreeting);
  tutorGreeting = others[Math.floor(Math.random() * others.length)];
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
  tutorShowCaption(greet, true);
  tutorEl("tutor-caption-me").classList.add("hidden");
  tutorEl("tutor-toast").classList.add("hidden");
  speakTutor(greet, token).then(() => tutorAfterSpeak(token));
}

/** 학습자 문장 보내기 (음성 인식 결과 / 입력창) */
async function sendTutorText(text) {
  text = (text || "").trim();
  if (!text || !tutorReady() || tutorBusy) return false;
  stopTutorSpeech();
  const token = tutorSessionToken;
  tutorLearnerLines.push(text);
  const myBubble = addTutorBubble("me", text);
  tutorShowMyCaption(text);
  const item = { text, bubble: myBubble, fix: undefined, why: "", check: null };
  tutorLearnerItems.push(item);
  tutorCheckItem(item, tutorSaidLines[tutorSaidLines.length - 1], token);   // 답과 동시에 교정 확인
  tutorMessages.push({ role: "user", content: text });
  tutorHintShown = false; renderTutorHint();
  await tutorReply(token, { text, bubble: myBubble });
  return true;
}
function sendTutorTyped() {
  const inp = tutorEl("tutor-input");
  const t = inp.value;
  if (!t.trim() || tutorBusy || !tutorReady()) return;   // 튜터가 답을 만드는 중이면 입력은 그대로 둔다
  if (tutorMic) { const m = tutorMic; tutorMic = null; try { m.rec.onend = m.rec.onerror = m.rec.onresult = null; m.rec.abort(); } catch (e) {} }
  if (tutorRecRec) { const r = tutorRecRec; tutorRecRec = null; r.cancelled = true; try { r.stop(); } catch (e) {} }
  inp.value = "";
  sendTutorText(t);
}
/** 문장 하나 교정 확인 → 고칠 게 있으면 내 말풍선 아래에 팁 (실패해도 대화는 그대로, 피드백 때 다시 시도) */
function tutorCheckItem(item, before, token) {
  if (!tutorNeedsCheck(item.text)) { item.fix = ""; return Promise.resolve(); }
  item.check = geminiGenerate(tutorFixMessages(item.text, before), TUTOR_FIX_OPTS)
    .then(out => {
      const r = parseTutorFix(item.text, out);
      item.fix = r.better; item.why = r.why;
      if (r.better && token === tutorSessionToken && item.bubble && item.bubble.isConnected) { addTutorTip(item.bubble, r.better, r.why); tutorShowToast(r.better, r.why); }
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
  tutorShowCaption("…");
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
      if (live) tutorShowCaption(live);
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
      tutorShowCaption("(답을 받지 못했어요) " + geminiErrorText(e));
      const why = document.createElement("div");
      why.className = "tutor-err";
      why.textContent = geminiErrorText(e);
      bubble.appendChild(why);
      setTutorStatus("다시 시도해 주세요", "");
      if (geminiKeyProblem(e)) { tutorSetKey(""); setTimeout(() => { alert(geminiErrorText(e)); renderTutorPage(); }, 0); }
    }
    tutorBusy = false;
    return;
  }
  if (tutorAbort === abort) tutorAbort = null;
  if (token !== tutorSessionToken) { tutorBusy = false; return; }
  const text = tutorPolish(cleanTutorSay(shown), learner && learner.text, prev()) || "Sorry, could you say that again?";
  tutorSaidLines.push(text);
  voice.upTo(text, true);     // 남은 문장까지 마저 읽는다
  bubbleText.textContent = text;
  tutorShowCaption(text, true);
  bubble.onclick = () => speakTutor(text, tutorSessionToken);
  addSlowButton(bubble, text);
  addTranslateButton(bubble, text);
  tutorMessages.push({ role: "assistant", content: text });
  tutorBusy = false;
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
          const clipP = tutorTtsFetch(part, false);          // 앞 문장을 읽는 동안 미리 받아 둔다
          clipP.catch(() => {});
          chain = chain.then(() => alive() && tutorPlayClip(clipP, part, alive));
        } else {
          if (typeof prefetchSpeech === "function") prefetchSpeech(part, "B");   // 자연스러운 음성은 미리 만들어 둔다
          chain = chain.then(async () => { if (alive()) { try { await speakWithPromise(part, "B"); } catch (e) {} } });
        }
      }
    },
    async finish() {
      await chain;
      if (!alive()) return;
      tutorSpeaking = false;
      setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
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
function addTutorTip(bubble, tip, why) {
  const t = document.createElement("div");
  t.className = "tutor-tip";
  t.innerHTML = `💡 이렇게 말하면 더 자연스러워요<br><b></b><span class="tutor-tip-why"></span>`;
  t.querySelector("b").textContent = tip;
  if (why) t.querySelector(".tutor-tip-why").textContent = " · " + why;
  t.onclick = () => speakTutor(tip, tutorSessionToken);
  bubble.after(t);
  const log = tutorEl("tutor-log"); log.scrollTop = log.scrollHeight;
}

// ---------- 구글 AI 음성 (Gemini TTS) ----------
// 튜터 목소리를 사람처럼 자연스러운 구글 AI 음성으로. 문장을 보내면 음성 파일(WAV, 24kHz)을 받아 앱 재생기(입모양 연동)로 튼다.
// 무료 사용량이 차거나 실패하면 잠시 앱 기본 음성으로 읽는다
const TUTOR_TTS_API = "https://generativelanguage.googleapis.com/v1beta/interactions";
const TUTOR_TTS_MODELS = ["gemini-3.8-flash-lite-tts", "gemini-3.8-flash-tts"];   // 빠른 것부터 (무료 한도도 따로)
const TUTOR_VOICES = {
  Sulafat: "구글 AI · 따뜻한 여성", Aoede: "구글 AI · 산뜻한 여성", Achird: "구글 AI · 친근한 남성", Puck: "구글 AI · 활기찬 남성", app: "앱 기본 음성"
};
const TUTOR_TTS_STYLE = "warm, friendly and clear, like a patient English teacher talking to a student";
const TUTOR_TTS_STYLE_SLOW = "slowly and very clearly, with short pauses between phrases, like a patient English teacher helping a beginner";
function tutorVoiceId() { let v = null; try { v = localStorage.getItem("tutorVoice"); } catch (e) {} return TUTOR_VOICES[v] ? v : "Sulafat"; }
let tutorTtsModelIdx = 0;
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
async function tutorTtsRequest(model, text, slow) {
  const res = await fetch(TUTOR_TTS_API, {
    method: "POST", headers: { "content-type": "application/json", "x-goog-api-key": tutorGetKey() },
    body: JSON.stringify({
      model, store: false,   // 구글 쪽에 대화 기록을 남기지 않는다
      input: [{ type: "user_input", content: [{ type: "text", text, annotations: [{ type: "speech_metadata", style: slow ? TUTOR_TTS_STYLE_SLOW : TUTOR_TTS_STYLE }] }] }],
      response_format: { type: "audio" },
      generation_config: { speech_config: [{ voice: tutorVoiceId() }] }
    })
  });
  if (!res.ok) {
    let j = null; try { j = await res.json(); } catch (e) {}
    const er = (j && j.error) || {};
    throw new GeminiError(er.message || `HTTP ${res.status}`, res.status, ((er.details || []).find(d => d && d.reason) || {}).reason || er.status || "");
  }
  const a = tutorFindAudio(await res.json());
  if (!a) throw new GeminiError("음성이 오지 않았어요", 0, "NO_AUDIO");
  return tutorDecodeAudio(a.data);
}
/** 문장 → 음성 (모델을 차례로 시도, 같은 문장은 한 번만 받는다) */
function tutorTtsFetch(text, slow) {
  const key = tutorVoiceId() + "|" + (slow ? "s|" : "") + text;
  if (tutorTtsCache.has(key)) return tutorTtsCache.get(key);
  const p = (async () => {
    let last = null;
    for (let k = 0; k < TUTOR_TTS_MODELS.length; k++) {
      const idx = (tutorTtsModelIdx + k) % TUTOR_TTS_MODELS.length;
      try { const clip = await tutorTtsRequest(TUTOR_TTS_MODELS[idx], text, slow); tutorTtsModelIdx = idx; return clip; }
      catch (e) { last = e; if (geminiKeyProblem(e) || !geminiTryNext(e)) break; }
    }
    throw last;
  })();
  tutorTtsCache.set(key, p);
  p.catch(() => tutorTtsCache.delete(key));
  while (tutorTtsCache.size > 40) tutorTtsCache.delete(tutorTtsCache.keys().next().value);
  return p;
}
/** 받아 둔(또는 받는 중인) 음성을 튼다. 실패하면 앱 기본 음성으로 읽고, 한동안 기본 음성을 쓴다 */
async function tutorPlayClip(clipP, text, alive) {
  let clip = null;
  try { clip = await clipP; }
  catch (e) {
    console.warn("구글 AI 음성 실패 → 기본 음성", e);
    if (Date.now() > tutorTtsDownUntil) setTimeout(() => setTutorStatus(e.status === 429 ? "구글 AI 음성 한도가 차서 잠시 기본 음성으로 읽어요" : "구글 AI 음성을 받지 못해 기본 음성으로 읽어요", tutorSpeaking ? "speaking" : ""), 0);
    tutorTtsDownUntil = Date.now() + (e.status === 429 ? 10 * 60 * 1000 : 60 * 1000);
    if (alive()) { try { await speakWithPromise(text, "B"); } catch (e2) {} }
    return;
  }
  if (!alive()) return;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  const maxMs = (clip.wav.length / clip.sampleRate) * 1000 + 3000;   // 끝 신호가 안 와도 멈추지 않게
  let guard = null;
  await Promise.race([NeuralTTS.play(clip.wav, clip.sampleRate), new Promise(r => { guard = setTimeout(r, maxMs); })]);
  clearTimeout(guard);
}
/** 튜터 목소리로 한 번 읽기 (구글 AI 음성 또는 앱 기본 음성) */
function tutorSay(text, slow, alive) {
  alive = alive || (() => true);
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();     // 누른 순간에 소리 장치를 깨워 둔다 (아이폰)
  if (tutorUseGoogleVoice() && typeof NeuralTTS !== "undefined") return tutorPlayClip(tutorTtsFetch(text, slow), text, alive);
  if (!slow) return speakWithPromise(text, "B");
  const keep = userRate;                 // 앱 기본 음성: 이 한 문장만 속도를 낮춘다
  userRate = Math.max(0.5, Math.min(keep, 1) * 0.7);
  const p = speakWithPromise(text, "B");
  userRate = keep;
  return p;
}
function fillTutorVoices() {
  const sel = tutorEl("tutor-voice");
  if (!sel) return;
  if (!sel.options.length) Object.entries(TUTOR_VOICES).forEach(([k, v]) => { const o = document.createElement("option"); o.value = k; o.textContent = v; sel.appendChild(o); });
  sel.value = tutorVoiceId();
}
/** 목소리 바꾸기: 바로 한 마디 들려준다 */
function changeTutorVoice() {
  try { localStorage.setItem("tutorVoice", tutorEl("tutor-voice").value); } catch (e) {}
  tutorTtsDownUntil = 0;
  stopTutorSpeech();
  speakTutor("Hi, I'm Emma. Let's practice English together!", tutorSessionToken);
}

// ---------- 말하기 (튜터 목소리 + 입모양) ----------
async function speakTutor(text, token, slow) {
  if (token !== tutorSessionToken) return;
  const my = ++tutorSpeechToken;
  tutorSpeaking = true;
  setTutorStatus("말하는 중…", "speaking");
  try { await tutorSay(text, slow, () => token === tutorSessionToken && my === tutorSpeechToken); } catch (e) {}
  // 중간에 끊고 새로 말하거나 대화가 바뀌었으면 상태를 건드리지 않는다
  if (token !== tutorSessionToken || my !== tutorSpeechToken) return;
  tutorSpeaking = false;
  setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
}
function stopTutorSpeech() {
  if (!tutorSpeaking) return;
  tutorSpeaking = false;
  tutorSpeechToken++;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.stopAudio();
  setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
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
function toggleTutorMic() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!tutorReady()) return;
  // 브라우저 음성 인식이 없거나(인앱 등) 실패했던 곳은 녹음해서 Gemini로 받아쓰기
  if (tutorRecRec || !SR || tutorEnv().inApp || tutorUseRecorder) { toggleTutorRecordMic(); return; }
  if (tutorMic) { tutorMic.stop(); return; }          // 듣는 중에 누르면 바로 끝내고 보낸다
  if (tutorMicDenied) { showMicPermissionHelp(); tutorCheckMicPermission(); return; }
  stopTutorSpeech();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (typeof NeuralTTS !== "undefined" && NeuralTTS.suspendAudio) NeuralTTS.suspendAudio();
  const rec = new SR();
  rec.lang = "en-US"; rec.interimResults = true; rec.maxAlternatives = 1; rec.continuous = false;
  const inp = tutorEl("tutor-input");
  let heard = "", done = false, stopping = false;
  const timers = [];
  const finish = () => {
    if (done) return;
    done = true;
    timers.forEach(clearTimeout);
    if (tutorMic && tutorMic.rec === rec) tutorMic = null;
    try { rec.abort(); } catch (e) {}
    const said = (heard || inp.value).trim();
    inp.value = "";
    setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
    if (said) sendTutorWhenFree(said);
  };
  const stop = () => {                                // 결과를 마저 받을 시간을 잠깐 주고, 안 오면 그대로 끝낸다
    if (done || stopping) return;
    stopping = true;
    setTutorStatus("보내는 중…", "listening");
    try { rec.stop(); } catch (e) {}
    timers.push(setTimeout(finish, 1200));
  };
  rec.onresult = e => { heard = tutorJoinResults(e.results); inp.value = heard; };
  rec.onspeechend = () => { try { rec.stop(); } catch (e) {} };
  rec.onerror = e => {
    // 브라우저 음성 인식 서비스를 못 쓰는 환경이면 다음부터 녹음 + Gemini 받아쓰기로 (마이크 권한 자체가 막힌 건 아님)
    if (e.error === "service-not-allowed" || e.error === "network" || e.error === "language-not-supported") {
      tutorUseRecorder = true;
      setTimeout(() => setTutorStatus("다시 눌러 주세요. 이제 녹음해서 알아들을게요", ""), 0);
    }
    else if (e.error === "not-allowed" && !tutorUseRecorder && tutorEnv().inFrame) {
      tutorUseRecorder = true;                     // 마이크를 직접 받는 방식은 허락되는 경우가 있다 (기타 튜너 방식)
      setTimeout(() => toggleTutorRecordMic(), 0);
    }
    else if (e.error === "not-allowed") showMicPermissionHelp();
    else if (TUTOR_MIC_MSG[e.error]) alert(TUTOR_MIC_MSG[e.error]);
    else if (e.error === "no-speech") { done || setTimeout(() => setTutorStatus("소리가 들리지 않았어요. 다시 눌러 말해 보세요", ""), 0); }
    finish();
  };
  rec.onend = finish;
  tutorMic = { rec, stop };
  timers.push(setTimeout(stop, 15000));               // 아무리 길어도 15초면 끝낸다
  try {
    rec.start();
    setTutorStatus("듣고 있어요… 다 말하면 버튼을 눌러도 돼요", "listening");
  } catch (e) { finish(); alert("음성 인식을 시작하지 못했어요. 잠시 후 다시 눌러 주세요."); }
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
        if ((heardVoice && now - lastVoice > 1200) || (!heardVoice && now - t0 > 8000) || now - t0 > 15000) finish();
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
  if (tutorRecRec) { tutorRecRec.stop(); return; }            // 듣는 중에 누르면 바로 끝내고 보낸다
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
    setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
    if (e && (e.name === "NotAllowedError" || e.name === "SecurityError")) showMicPermissionHelp();
    else if (e && e.name === "NotFoundError") alert("마이크를 찾지 못했어요. 입력창에 적어서 대화할 수 있어요.");
    else alert("마이크를 열지 못했어요. (" + ((e && e.message) || e) + ")");
    return;
  }
  tutorRecRec = null;
  if (rec.cancelled) return;                                     // 글로 입력해 보냈으면 녹음은 버린다
  if (!result.heardVoice || result.audio.length < 16000 * 0.4) { setTutorStatus("소리가 들리지 않았어요. 다시 눌러 말해 보세요", ""); return; }
  setTutorStatus("알아듣는 중…", "thinking");
  try {
    const text = await geminiTranscribe(result.audio);
    setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
    if (!text) { setTutorStatus("잘 못 알아들었어요. 다시 눌러 또박또박 말해 보세요", ""); return; }
    sendTutorWhenFree(text);
  } catch (e) {
    setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
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
  ], { temperature: 0.7, maxTokens: 400, schema: TUTOR_HINT_SCHEMA, chain: "aux" });
  const list = ((j && j.suggestions) || []).filter(x => x && x.en).slice(0, 3);
  if (tutorHintCache.key === key) tutorHintCache.list = list;
  return list;
}
function renderTutorHint() {
  const box = tutorEl("tutor-hint");
  if (!box) return;
  box.classList.toggle("hidden", !tutorHintShown);
  if (!tutorHintShown) return;
  if (!tutorReady()) return;
  const key = tutorSessionToken + ":" + tutorSaidLines.length + ":" + tutorLevelId();
  if (tutorHintCache.key !== key) {
    tutorHintCache = { key, list: null, loading: loadTutorAiHints(key).catch(e => { if (tutorHintCache.key === key) tutorHintCache.error = e; }).finally(() => { if (tutorHintCache.key === key) { tutorHintCache.loading = null; renderTutorHint(); } }) };
  }
  if (!tutorHintCache.list) {
    box.innerHTML = tutorHintCache.error ? `<div class="tutor-hint-label">힌트를 만들지 못했어요. ${geminiErrorText(tutorHintCache.error)}</div>` : `<div class="tutor-hint-label">힌트 만드는 중…</div>`;
    return;
  }
  box.innerHTML = `<div class="tutor-hint-label">이렇게 말해 볼까요? (누르면 듣고, 입력창에 들어가요)</div>`;
  tutorHintCache.list.forEach(h => {
    const row = document.createElement("div"); row.className = "tutor-hint-item";
    row.innerHTML = `<div class="tutor-hint-en"></div><div class="tutor-hint-kr"></div>`;
    row.querySelector(".tutor-hint-en").textContent = h.en;
    row.querySelector(".tutor-hint-kr").textContent = h.kr;
    row.onclick = () => { tutorEl("tutor-input").value = h.en; speakTutor(h.en, tutorSessionToken); };
    box.appendChild(row);
  });
}

/** 오늘 대화 피드백: 대화 중 확인한 교정을 모아 보여 준다 (확인이 끝나지 않았거나 실패한 문장은 지금 확인) */
async function tutorFeedback() {
  const box = tutorEl("tutor-feedback");
  if (tutorLearnerLines.length === 0) {
    box.classList.remove("hidden");
    box.innerHTML = `<div class="tutor-fb-summary">이번 통화에서는 아직 영어로 말한 문장이 없어요. 다음엔 한 마디라도 말해 봐요! 😊</div>`;
    return;
  }
  if (!tutorReady()) return;
  const token = tutorSessionToken;
  box.classList.remove("hidden");
  box.innerHTML = `<div class="tutor-feedback-body"><div class="tutor-fb-summary">내가 한 문장을 확인하고 있어요…</div></div>`;
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  const pending = tutorLearnerItems.map((it, i) => it.check || (it.fix === undefined
    ? tutorCheckItem(it, (tutorMessages.filter(m => m.role === "assistant")[i - 1] || {}).content, token) : null)).filter(Boolean);
  await Promise.all(pending);
  if (token !== tutorSessionToken) return;
  const body = box.querySelector(".tutor-feedback-body");
  body.innerHTML = "";
  const seen = new Set();   // 같은 문장을 여러 번 말했으면 교정은 한 번만
  tutorCorrections = tutorLearnerItems.filter(it => it.fix && !seen.has(tutorNorm(it.text)) && seen.add(tutorNorm(it.text))).map(it => ({ said: it.text, better: it.fix, why: it.why }));
  const n = tutorLearnerLines.length, fixes = tutorCorrections.slice(-6);
  const failed = tutorLearnerItems.filter(it => it.fix === undefined).length;
  const summary = document.createElement("div");
  summary.className = "tutor-fb-summary";
  summary.textContent = fixes.length === 0
    ? `영어로 ${n}번 말했어요. 눈에 띄는 실수 없이 잘했어요! 👏`
    : `영어로 ${n}번 말했어요. 이렇게 고쳐 말하면 더 자연스러워요.`;
  body.appendChild(summary);
  const report = document.createElement("div");
  report.className = "tutor-report";
  report.textContent = "선생님이 오늘 대화를 살펴보고 있어요…";
  body.appendChild(report);
  fixes.forEach(({ said, better, why }) => {
    const row = document.createElement("div"); row.className = "tutor-fb-row";
    row.innerHTML = `<span class="from"></span><span class="arrow">→</span><span class="to"></span><span class="why"></span>`;
    row.querySelector(".from").textContent = said;
    row.querySelector(".to").textContent = better;
    row.querySelector(".why").textContent = why || "";
    row.onclick = () => speakTutor(better, tutorSessionToken);
    body.appendChild(row);
  });
  const note = document.createElement("div"); note.className = "tutor-fb-note";
  note.textContent = (fixes.length ? "고친 문장·표현을 누르면 들을 수 있어요. " : "표현을 누르면 들을 수 있어요. ") + (failed ? `${failed}문장은 확인하지 못했어요(잠시 뒤 다시 눌러 주세요). ` : "") + "AI 평가는 참고용이에요.";
  box.appendChild(note);
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  // 선생님 평가: 총평 · 잘한 점 · 다음에 써 볼 표현 · 다음 목표 (한국어)
  try {
    const r = await geminiJSON([
      { role: "system", content: `You are an encouraging, skilled English conversation teacher. Write a short feedback report in Korean (존댓말) for a Korean adult student at the ${tutorLevel().desc} level, based on today's conversation. ` +
        "overall: 2 warm, specific sentences about how the student did. good: 2 specific things the student did well. " +
        "expressions: 3 useful English expressions the student could use next time in this kind of conversation, at their level, each with a Korean meaning. " +
        "next: one concrete, small goal for the next practice. Write everything in Korean except the English expressions." },
      { role: "user", content: `Conversation:\n${tutorTranscript(40)}\n\nCorrections already shown to the student:\n` +
        (tutorCorrections.map(c => `- ${c.said} -> ${c.better}`).join("\n") || "(none)") }
    ], { temperature: 0.4, maxTokens: 900, chain: "chat", schema: { type: "OBJECT", properties: {
      overall: { type: "STRING" }, good: { type: "ARRAY", items: { type: "STRING" } },
      expressions: { type: "ARRAY", items: { type: "OBJECT", properties: { en: { type: "STRING" }, kr: { type: "STRING" } }, required: ["en", "kr"] } },
      next: { type: "STRING" } }, required: ["overall"] } });
    if (token !== tutorSessionToken) return;
    if (!r || !r.overall) throw new Error("평가 형식 오류");
    report.innerHTML = "";
    const sec = (title, cls) => { const d = document.createElement("div"); d.className = "tutor-report-sec " + (cls || ""); d.innerHTML = `<div class="tutor-report-title"></div>`; d.firstChild.textContent = title; report.appendChild(d); return d; };
    const p = sec("👩‍🏫 선생님 한마디"); const t = document.createElement("div"); t.textContent = r.overall; p.appendChild(t);
    if ((r.good || []).length) { const g = sec("👍 잘한 점"); r.good.slice(0, 3).forEach(x => { const d = document.createElement("div"); d.textContent = "· " + x; g.appendChild(d); }); }
    if ((r.expressions || []).length) {
      const ex = sec("✨ 다음에 써 볼 표현");
      r.expressions.slice(0, 4).forEach(x => {
        const d = document.createElement("div"); d.className = "tutor-report-expr";
        d.innerHTML = `<b></b> <span></span>`; d.querySelector("b").textContent = x.en; d.querySelector("span").textContent = x.kr;
        d.onclick = () => speakTutor(x.en, tutorSessionToken); ex.appendChild(d);
      });
    }
    if (r.next) { const n2 = sec("🎯 다음 목표"); const d = document.createElement("div"); d.textContent = r.next; n2.appendChild(d); }
  } catch (e) {
    console.warn("평가 실패", e);
    report.textContent = "선생님 평가를 받지 못했어요. " + geminiErrorText(e);
    report.classList.add("tutor-report-err");
  }
}

// ---------- 튜터 얼굴 (입모양) ----------
const TutorAvatar = (() => {
  let mounted = false, raf = 0, level = 0, mouthEls = null, frames = null, lastBlink = 0;
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
    raf = requestAnimationFrame(loop);
    const page = document.getElementById("page-tutor");
    if (!page || page.classList.contains("hidden")) return;
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
  return { mount, apply, get level() { return level; } };
})();
