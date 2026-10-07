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
  hint: ["gemini-3.1-flash-lite", "gemini-3.6-flash", "gemini-3.5-flash-lite"]   // 힌트는 대화와 다른, 빠른 모델부터 (무료 사용량도 나눈다)
};
const GEMINI_KEY_STORE = "geminiApiKey";
const GEMINI_KEY_PAGE = "https://aistudio.google.com/apikey";
// 튜터 그림: 입 모양별 이미지 3장(다문 입·반쯤 벌린 입·크게 벌린 입)을 넣으면 소리에 맞춰 바뀐다.
// 비워 두면 기본 캐릭터(SVG). 예: { closed: "images/tutor/closed.png", half: "images/tutor/half.png", open: "images/tutor/open.png" }
const TUTOR_AVATAR_FRAMES = null;
// 튜터: 이름 · 기본 목소리 · 영상 폴더 (같은 사진에서 만든 반복 영상: idle 듣기 / talk 말하기 / poster 첫 화면)
const TUTORS = {
  emma: { name: "Emma", label: "Emma", gender: "f", voice: "af_bella", media: "images/tutor/emma/web/",
    style: "a sweet, bright K-pop idol girl in her early 20s chatting with her fans on a live stream: cheerful, warm and cute, with a light, youthful voice" },
  jay: { name: "Jay", label: "Jay", gender: "m", voice: "am_michael", media: "images/tutor/jay/web/",
    style: "a gentle, charming K-pop idol boy in his early 20s chatting with his fans on a live stream: soft, warm and sweet, calm and friendly, with a youthful voice" }
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
let tutorNextGreeting = null; // 시작 화면에서 미리 골라 음성까지 받아 둔 첫 인사 { text, char, level }
let tutorBusy = false;
let tutorSessionToken = 0;
let tutorConvId = 0;          // 대화마다 하나 (피드백 판을 열어도 바뀌지 않는다 — 늦게 온 교정도 대화에 붙인다)
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
const tutorThinking = (() => {
  let t = {};
  try {
    if (Date.now() - (+localStorage.getItem("tutorThinkingAt") || 0) > 7 * 86400000) localStorage.removeItem("tutorThinking");   // 일주일 지나면 다시 알아본다 (모델이 바뀌었을 수 있다)
    t = JSON.parse(localStorage.getItem("tutorThinking") || "{}") || {};
  } catch (e) {}
  return { "gemini-3.8-flash": "LOW", "gemini-3.7-flash": "LOW", ...t };
})();
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
  const level = opts.thinking || "MINIMAL";
  // 생각을 낮게라도 하는 모델은 생각에 쓰는 몫까지 넉넉히 (안 그러면 답이 비거나 잘린다)
  const gc = { temperature: opts.temperature == null ? 0.7 : opts.temperature, maxOutputTokens: (opts.maxTokens || 200) + (level === "LOW" ? 512 : 0) };
  if (level !== "NONE") gc.thinkingConfig = { thinkingLevel: level };
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
const geminiTryNext = e => e && !geminiKeyProblem(e) && (e.status === 429 || e.status === 404 || e.status === 403 || e.status === 400 || e.status >= 500 || e instanceof TypeError);
/** 여러 모델이 다 실패했을 때 보여 줄 오류: 키 문제 > 사용량 초과 > 늦음·혼잡 > 기타 > 모델 없음 */
const geminiErrRank = e => !e ? 0 : geminiKeyProblem(e) ? 6 : e.reason === "OFFLINE" ? 5 : e.status === 429 ? 4 : (e.status >= 500 || e instanceof TypeError) ? 3 : (e.status === 404 || e.status === 403) ? 1 : 2;
// 구글 서버가 잠깐 바쁘거나(5xx) 연결이 순간 끊긴 건 같은 모델로 한 번 더 해 보면 되는 경우가 많다
const geminiBlip = e => e && e.reason !== "TIMEOUT" && (e.status >= 500 || e instanceof TypeError);   // 시간 초과는 같은 모델로 다시 기다리지 않고 바로 다음 모델로
/** 응답이 멈췄을 때 끝없이 기다리지 않게: 바깥 signal(사용자가 멈춤)과 시간 제한을 함께 쓰는 AbortController.
 *  시간이 다 되면 timedOut()이 true → '서버가 늦음(504)'으로 보고 다음 시도로 넘어간다 */
function geminiTimer(outer, firstMs) {
  const ctl = new AbortController();
  let timer = null, fired = false;
  const arm = ms => { clearTimeout(timer); timer = setTimeout(() => { fired = true; ctl.abort(); }, ms); };
  if (outer) { if (outer.aborted) ctl.abort(); else outer.addEventListener("abort", () => ctl.abort(), { once: true }); }
  arm(firstMs);
  return { signal: ctl.signal, arm, clear: () => clearTimeout(timer), timedOut: () => fired };
}
const geminiTimeoutError = () => new GeminiError("응답이 너무 늦어요", 504, "TIMEOUT");
/** 모델을 차례로 시도: 생각 수준 설정을 못 쓰는 모델이면 낮춰서 다시, 사용량 초과·혼잡이면 다음 모델로.
 *  run(model, thinking, started)는 started()를 불러 '이미 글자를 보여 주기 시작했음'을 알린다 (그 뒤에는 다른 모델로 넘기지 않음) */
async function geminiCall(run, chain = "chat", budgetMs = 30000) {
  if (navigator.onLine === false) throw new GeminiError("인터넷에 연결되어 있지 않아요", 0, "OFFLINE");
  const list = TUTOR_GEMINI_CHAINS[chain], t0 = Date.now();
  if (tutorModelIdx[chain] && Date.now() - tutorModelSince[chain] > 5 * 60 * 1000) tutorModelIdx[chain] = 0;
  let best = null, firstErr = null;
  for (let k = 0; k < list.length; k++) {
    if (k && Date.now() - t0 > budgetMs) break;                // 전체로 너무 오래 기다리게 하지 않는다 (다시 보내기로)
    const idx = (tutorModelIdx[chain] + k) % list.length, model = list[idx];
    let begun = false, last = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const out = await run(model, tutorThinking[model] || "MINIMAL", () => { begun = true; });
        // 앞 모델이 사용량 초과·모델 없음이었을 때만 이 모델을 한동안 먼저 쓴다 (잠깐 늦은 건 다음에 다시 첫 모델부터)
        if (tutorModelIdx[chain] !== idx && firstErr && (firstErr.status === 429 || firstErr.status === 404 || firstErr.status === 403)) {
          tutorModelIdx[chain] = idx; tutorModelSince[chain] = Date.now(); renderTutorCredit();
        }
        return out;
      } catch (e) {
        if (e && e.name === "AbortError") throw e;
        last = e;
        if (begun) throw e;
        console.warn(`Gemini ${model} 실패`, e.status || "", e.message || e);
        if (e.status === 400 && /think/i.test(e.message || "")) {   // 생각 수준을 못 쓰는 모델: MINIMAL → LOW → 끄기
          const cur = tutorThinking[model] || "MINIMAL";
          if (cur !== "NONE") {
            tutorThinking[model] = cur === "MINIMAL" ? "LOW" : "NONE";
            try { localStorage.setItem("tutorThinking", JSON.stringify(tutorThinking)); localStorage.setItem("tutorThinkingAt", String(Date.now())); } catch (e2) {}
            continue;
          }
        }
        if (attempt === 0 && geminiBlip(e)) { await new Promise(r => setTimeout(r, 600)); continue; }
        break;
      }
    }
    if (!firstErr) firstErr = last;
    if (geminiErrRank(last) >= geminiErrRank(best)) best = last;
    if (!geminiTryNext(last)) throw last;
  }
  throw best;
}
/** 글자가 오는 대로 onText(지금까지 글)를 부른다. 중간에 signal로 멈추면 그때까지의 글을 돌려준다 */
function geminiStream(messages, opts, onText, signal) {
  return geminiCall(async (model, thinking, started) => {
    const tm = geminiTimer(signal, 10000);           // 첫 글자가 10초 안에 안 오거나, 중간에 8초 멈추면 다음 모델로
    let res;
    try { res = await geminiFetch(model, "streamGenerateContent?alt=sse", geminiBody(messages, { ...opts, thinking }), tm.signal); }
    catch (e) { tm.clear(); if (tm.timedOut()) throw geminiTimeoutError(); throw e; }
    const reader = res.body.getReader(), dec = new TextDecoder();
    let buf = "", text = "";
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        tm.arm(8000);
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
    } catch (e) {
      if (e && e.name === "AbortError" && tm.timedOut()) { if (text) return text; throw geminiTimeoutError(); }   // 멈췄어도 받은 글이 있으면 그만큼
      if (e && e.name === "AbortError") return text;
      throw e;
    } finally { tm.clear(); }
    if (!text && !(signal && signal.aborted)) throw new GeminiError("빈 답이 왔어요", 503, "EMPTY");   // 빈 답은 실패로 보고 다음 모델로
    return text;
  }, opts.chain || "chat", opts.budget || 25000);
}
/** 한 번에 받기 (교정·힌트·번역·받아쓰기·피드백) */
function geminiGenerate(messages, opts, signal) {
  return geminiCall(async (model, thinking) => {
    const tm = geminiTimer(signal, opts.timeout || 20000);   // 20초 넘게 답이 없으면 다른 시도로 ("만드는 중…"에서 멈추지 않게)
    try {
      const res = await geminiFetch(model, "generateContent", geminiBody(messages, { ...opts, thinking }), tm.signal);
      const j = await res.json();
      const parts = (((j.candidates || [])[0] || {}).content || {}).parts || [];
      const out = parts.filter(p => p && p.text && !p.thought).map(p => p.text).join("");
      if (!out.trim()) throw new GeminiError("빈 답이 왔어요", 503, "EMPTY");   // 길이 제한·안전 필터 등으로 비면 다음 모델로
      return out;
    } catch (e) { if (e && e.name === "AbortError" && tm.timedOut()) throw geminiTimeoutError(); throw e; }
    finally { tm.clear(); }
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
  if (e.reason === "OFFLINE") return "인터넷에 연결되어 있지 않아요. 연결을 확인해 주세요.";
  if (e.reason === "TIMEOUT") return "구글 서버 응답이 너무 늦어요. 인터넷 연결을 확인하고 다시 해 주세요.";
  if (e.reason === "EMPTY") return "구글 AI가 답을 비워서 보냈어요. 다시 해 주세요.";
  if (e.status === 404) return "이 키로 쓸 수 있는 Gemini 모델을 찾지 못했어요. 잠시 뒤 다시 해 주세요.";
  if (e.status === 403) return "이 키로는 Gemini를 쓸 수 없어요. AI Studio에서 키 설정을 확인해 주세요.";
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
  toggleTutorSheet();
  tutorAudioSession(true);
  tutorLockScroll(true);
  showTutorLobby();             // 바로 시작하지 않고 시작 화면부터 (튜터·수준·목소리를 고르고 '시작하기')
  tutorWarmVoice();
}

// 아이폰: 무음 스위치를 켜 둬도 튜터 목소리가 들리게 (iOS 17+ 오디오 세션), 나가면 원래대로
function tutorAudioSession(on) {
  try { if (navigator.audioSession) navigator.audioSession.type = on ? "play-and-record" : "auto"; } catch (e) {}
}
/** 아이폰은 사용자가 누른 순간에 한 번 말해 둬야 나중에 기기 음성이 나온다 → 소리 없는 한 마디 */
let tutorSpeechPrimed = false;
function tutorPrimeSpeech() {
  if (tutorSpeechPrimed || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
  try { const u = new SpeechSynthesisUtterance(" "); u.volume = 0; window.speechSynthesis.speak(u); tutorSpeechPrimed = true; } catch (e) {}
}
// ---------- 시작 화면 ----------
function tutorLobbyOpen() { const l = tutorEl("tutor-lobby"); return !!l && !l.classList.contains("hidden"); }
function showTutorLobby() {
  tutorCallActive = false;      // 시작하기 전에는 듣지 않는다
  tutorCancelListening();
  const room = tutorEl("tutor-chat-area"); if (room) room.classList.add("lobby");
  tutorEl("tutor-lobby").classList.remove("hidden");
  const going = tutorLearnerLines.length > 0;   // 하던 대화가 있으면 '이어서 대화하기'가 먼저
  tutorEl("tutor-start-btn").textContent = going ? "▶ 이어서 대화하기" : "▶ 시작하기";
  tutorEl("tutor-new-btn").classList.toggle("hidden", !going);
  setTutorStatus(`${tutorName()}와 대화할 준비가 됐어요`, "");
  // 새로 시작할 첫 인사를 미리 골라 음성까지 받아 둔다 (시작하기를 누르면 바로 말하게)
  tutorPrepGreeting(700);
}
/** 시작 화면에서 첫 인사를 골라 음성을 미리 받아 둔다 (튜터·수준·목소리를 바꾸면 다시) */
function tutorPrepGreeting(delay) {
  clearTimeout(tutorGreetPrep);
  tutorGreetPrep = setTimeout(() => {
    if (!tutorLobbyOpen() || !tutorReady()) return;
    const ng = tutorNextGreeting;
    if (!ng || ng.char !== tutorCharId() || ng.level !== tutorLevelId()) tutorNextGreeting = { ...tutorPickGreeting(), char: tutorCharId(), level: tutorLevelId() };
    if (tutorUseNatural()) tutorTtsFetch(tutorNextGreeting.text, false);
  }, delay);
}
let tutorGreetPrep = null;
/** 시작하기 (누른 순간에 소리 장치를 깨워 둔다: 아이폰은 사용자가 누른 순간에만 소리를 켤 수 있다) */
function tutorStartFromLobby(fresh) {
  if (!tutorReady()) return;
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  tutorPrimeSpeech();
  tutorStopPreview();
  toggleTutorSheet();
  tutorEl("tutor-lobby").classList.add("hidden");
  const room = tutorEl("tutor-chat-area"); if (room) room.classList.remove("lobby");
  tutorCallActive = true;
  if (!fresh && tutorLearnerLines.length) { setTutorStatus(tutorIdleMsg(), ""); tutorAfterSpeak(tutorSessionToken); }
  else startTutorSession();
}
// 자연스러운 목소리 받기 (시작 화면·설정): 처음 한 번만
let tutorDl = null;   // 받는 중이면 { got, total }
const tutorMB = b => Math.max(1, Math.round(b / 1048576));
function tutorVoiceDlRender() {
  const K = typeof KokoroVoice !== "undefined" ? KokoroVoice : null;
  const need = !!K && K.supported() && !K.downloaded();
  document.querySelectorAll(".tutor-voice-dl").forEach(box => {
    const show = need || !!tutorDl;
    box.classList.toggle("hidden", !show);
    if (!show) return;
    const txt = box.querySelector(".tutor-voice-dl-text"), btn = box.querySelector("button");
    if (tutorDl) {
      const pct = tutorDl.total ? Math.min(99, Math.round(tutorDl.got / tutorDl.total * 100)) : 0;
      txt.textContent = tutorDl.total ? `자연스러운 목소리 받는 중… ${pct}% (${tutorMB(tutorDl.got)}/${tutorMB(tutorDl.total)}MB)` : "자연스러운 목소리 준비 중…";
      btn.textContent = "받는 중"; btn.disabled = true;
    } else {
      const pl = K.plan();
      txt.textContent = `🎧 사람처럼 자연스러운 영어 목소리 · 한 번만 받으면 계속 써요 (약 ${pl.mb}MB, 와이파이 권장)` +
        (pl.device === "wasm" ? " · 그래픽 가속이 없는 기기라 느리면 기기 음성으로 읽어요" : "");
      btn.textContent = "받기"; btn.disabled = false;
    }
  });
}
async function tutorDownloadVoice() {
  if (tutorDl || typeof KokoroVoice === "undefined") return;
  tutorDl = { got: 0, total: 0 }; tutorVoiceNote(""); tutorVoiceDlRender();
  try {
    await KokoroVoice.load((got, total) => { tutorDl = { got, total }; tutorVoiceDlRender(); }, tutorChar().voice);
    tutorDl = null; tutorNaturalBroken = false; tutorTtsCache.clear();
    // 앱의 다른 화면(예문·회화)도 같은 목소리를 쓰게 설정에 반영
    if (typeof neuralReady !== "undefined") {
      neuralReady = true; neuralBroken = false;
      if (!neuralVoice) { neuralVoice = "af_bella"; persistNeuralVoiceChoice(); }
      populateVoiceSelect(); refreshNeuralUI();
    }
    if (KokoroVoice.tooSlow()) tutorVoiceNote("받았어요. 다만 이 기기에서는 목소리를 만드는 게 느려서 기기 음성으로 읽어요");
    else {
      if (tutorVoiceId() === "app") { try { localStorage.removeItem("tutorVoice"); } catch (e) {} fillTutorVoices(); }
      tutorVoiceNote("");
      tutorVoiceDlRender();
      tutorPreviewVoice();                    // 바로 한 마디 들려준다
      if (tutorLobbyOpen()) tutorPrepGreeting(800);
    }
  } catch (e) {
    tutorDl = null;
    tutorVoiceNote("목소리를 받지 못했어요. 인터넷 연결을 확인하고 다시 눌러 주세요 (" + ((e && e.message) || e) + ")");
  }
  tutorVoiceDlRender();
}
/** 튜터 화면을 열 때: 받아 둔 목소리가 아직 있는지 보고, 있으면 미리 불러 둔다 (첫 마디가 늦지 않게) */
function tutorWarmVoice() {
  if (typeof KokoroVoice === "undefined") return;
  tutorVoiceDlRender();
  if (!KokoroVoice.downloaded() || tutorDl) return;
  KokoroVoice.verify().then(ok => {
    tutorVoiceDlRender();
    if (ok && tutorVoiceId() !== "app") KokoroVoice.load(null, tutorVoiceId()).catch(() => { tutorNaturalBroken = true; });
  });
}
/** 목소리 들어 보기 (시작 화면) */
/** 시작 화면·설정의 목소리 칸 아래 안내 (상태 표시는 시작 화면에 가려 안 보여서) */
function tutorVoiceNote(text) {
  document.querySelectorAll(".tutor-voice-note").forEach(n => { n.textContent = text || ""; n.classList.toggle("hidden", !text); });
}
// 목소리 들어 보기: 버튼 하나로 [▶ 들어 보기] → [불러오는 중…] → [■ 그만] (목소리를 만드는 동안 반응이 없어 보이지 않게)
let tutorPreviewing = 0, tutorPreviewSeq = 0, tutorPreviewTimer = null, tutorPreviewDebounce = null;
function tutorPreviewButtons(state) {
  const label = { idle: "▶ 들어 보기", loading: "불러오는 중…", playing: "■ 그만" }[state];
  document.querySelectorAll(".tutor-voice-try").forEach(b => { b.textContent = label; b.dataset.state = state; });
}
function tutorStopPreview() {
  clearTimeout(tutorPreviewDebounce);
  if (!tutorPreviewing) return;
  tutorPreviewing = 0; clearInterval(tutorPreviewTimer);
  stopTutorSpeech();
  tutorPreviewButtons("idle");
}
function tutorPreviewVoice(fromSelect) {
  clearTimeout(tutorPreviewDebounce);
  if (tutorPreviewing && !fromSelect) { tutorStopPreview(); return; }   // 듣는 중에 누르면 멈춘다
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  tutorCancelListening();
  stopTutorSpeech();
  if (tutorVoiceId() !== "app" && !tutorUseNatural()) {          // 아직 안 받았으면 기기 음성으로 몰래 들려주지 않고 알려 준다
    tutorPreviewing = 0; tutorPreviewButtons("idle");
    tutorVoiceNote(KokoroVoice.downloaded() && KokoroVoice.tooSlow() ? "이 기기에서는 자연스러운 음성이 느려서 기기 음성으로 읽어요" : "먼저 아래 '자연스러운 목소리 받기'를 눌러 주세요");
    tutorVoiceDlRender();
    return;
  }
  const my = tutorPreviewing = ++tutorPreviewSeq;
  tutorPreviewButtons("loading");
  tutorVoiceNote("");
  clearInterval(tutorPreviewTimer);
  tutorPreviewTimer = setInterval(() => { if (tutorPreviewing === my && tutorAudioPlaying()) tutorPreviewButtons("playing"); }, 80);
  speakTutor(tutorPreviewText(), tutorSessionToken, false, { then: () => {} }).finally(() => {
    if (tutorPreviewing !== my) return;
    tutorPreviewing = 0; clearInterval(tutorPreviewTimer);
    tutorPreviewButtons("idle");
  });
}
/** 지금 대화를 지운다 (다른 튜터를 고르면) */
function tutorResetConversation() {
  stopTutorActivity();
  tutorMessages = []; tutorLearnerLines = []; tutorLearnerItems = []; tutorCorrections = []; tutorSaidLines = [];
  tutorConvId++;
  tutorEl("tutor-log").innerHTML = "";
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
    await geminiGenerate([{ role: "user", content: "Reply with just: OK" }], { temperature: 0, maxTokens: 20, chain: "aux" }).catch(e => { if (e.reason !== "EMPTY") throw e; });   // 빈 답이어도 키는 맞다
    inp.value = "";
    showTutorKeyMsg("", false);
    renderTutorPage();
  } catch (e) {
    console.warn("키 확인 실패", e);
    // 사용량 초과·서버 혼잡은 키 자체는 맞으니 저장해 둔다
    if (geminiKeyProblem(e) || !(e.status === 429 || e.status >= 500)) { tutorSetKey(prev); showTutorKeyMsg(geminiErrorText(e), true); }
    else {   // 키는 맞는데 구글이 바쁘거나 사용량이 찼다 → 키는 저장하고 시작 화면으로 (설명은 창으로, 숨겨진 칸에 쓰지 않게)
      inp.value = ""; showTutorKeyMsg("", false);
      renderTutorPage();
      setTimeout(() => alert("키는 연결됐어요. 다만 지금은 " + geminiErrorText(e)), 0);
    }
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
  tutorHelping = false;
  // 녹음·받아쓰기도 버린다 (화면을 떠난 뒤에 말이 보내지거나 튜터가 대답하지 않게)
  if (tutorRecRec) { const r = tutorRecRec; tutorRecRec = null; r.cancelled = true; try { r.stop(); } catch (e) {} }
  if (tutorTranscribing) { tutorTranscribing.cancelled = true; tutorTranscribing = null; }
  tutorSpeechToken++;
  // 재생 중인 튜터 목소리도 멈춘다 (화면을 떠난 뒤에도 말이 이어지지 않게)
  if (tutorSpeaking || tutorDeviceTalking) tutorSilenceAll();
  tutorDeviceTalking = false;
  tutorSpeaking = false;
  if (tutorMic) { const m = tutorMic; tutorMic = null; m.cancel(); }
  if (tutorAbort) { try { tutorAbort.abort(); } catch (e) {} tutorAbort = null; }
  tutorBusy = false;
}
function leaveTutorPage() {
  stopTutorActivity();
  if (typeof KokoroVoice !== "undefined") KokoroVoice.scheduleUnload(90000);   // 잠시 뒤 메모리에서 내린다 (금방 돌아오면 그대로)
  tutorStopPreview();
  tutorCallActive = false;
  toggleTutorSheet(undefined, false, "leave");
  tutorAudioSession(false);
  tutorLockScroll(false);
  const call = tutorEl("tutor-call"); if (call) call.style.top = call.style.height = call.style.bottom = "";   // 키보드용으로 줄였던 크기를 풀어 둔다
  tutorKbOpen = false;
}

// ---------- 대화 화면 ----------
let tutorCallActive = false;   // 대화 화면이 열려 있는 동안 (자동 듣기에 쓴다)
/** 새 대화: 지금 대화를 지우고 Emma가 새 인사로 시작 */
function newTutorConversation() {
  if (tutorLearnerLines.length && !confirm("지금 대화를 지우고 새 대화를 시작할까요?")) return;
  if (tutorLobbyOpen()) { tutorStartFromLobby(true); return; }   // 시작 화면에서 열었으면 시작 화면을 닫고 시작한다
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
let tutorSheetHistory = false, tutorPopSwallow = false;
/** 판(설정·피드백)을 열면 기록을 하나 넣어 둔다 → 안드로이드 뒤로 가기로 판만 닫힌다 (튜터를 떠나지 않게) */
function tutorHandleBack() {
  if (tutorPopSwallow) { tutorPopSwallow = false; return true; }
  if (tutorSheetHistory) { tutorSheetHistory = false; toggleTutorSheet(undefined, true); return true; }
  return false;
}
/** 사용자가 판을 닫을 때 (✕·계속 대화하기·바깥 누르기) */
function tutorCloseSheets() { toggleTutorSheet(); }
function toggleTutorSheet(name, viaHistory, mode) {
  let opened = false, closed = false;
  ["settings", "feedback"].forEach(n => {
    const el = tutorEl("tutor-sheet-" + n); if (!el) return;
    const was = !el.classList.contains("hidden");
    const show = n === name && !was;
    el.classList.toggle("hidden", !show);
    if (show) opened = true; else if (was) closed = true;
  });
  if (opened && !tutorSheetHistory) { tutorSheetHistory = true; try { history.pushState({ page: "tutor", modal: "tutor-sheet" }, "", "#tutor"); } catch (e) {} }
  if (!opened && closed && tutorSheetHistory && !viaHistory) {
    tutorSheetHistory = false;
    if (history.state && history.state.modal === "tutor-sheet") {
      // 다른 화면으로 가는 중이면 그 기록을 보통 기록으로 바꾸고, 아니면 한 칸 되돌려 둔다 (뒤로 가기를 두 번 누르지 않게)
      if (mode === "leave") history.replaceState({ page: "tutor" }, "", "#tutor");
      else { tutorPopSwallow = true; history.back(); }
    }
  }
  // 판을 여는 동안은 듣지 않고, 닫으면 다시 듣는다
  if (opened) { tutorCancelListening(); if (tutorHintShown) { tutorHintShown = false; renderTutorHint(); } }
  else if (closed) tutorAfterSpeak(tutorSessionToken);
}
// 듣기: 말하기 버튼 없이 튜터 말이 끝나면 저절로 마이크를 켠다 (실제 대화처럼).
// 조용하면 두 번까지 다시 듣고, 그래도 말이 없으면 쉰다 (Emma를 누르면 다시 듣기)
let tutorQuietTries = 0;
// 힌트로 넣은 문장은 '글 쓰는 중'으로 보지 않는다 (들려준 뒤 그대로 따라 말하면 받게). 고쳐 쓰면 그때부터 글쓰기
let tutorHintTarget = "";
function tutorTypingNow() {
  const inp = tutorEl("tutor-input"); if (!inp) return false;
  const v = inp.value.trim();
  return document.activeElement === inp || (!!v && v !== tutorHintTarget);
}
let tutorRecFailAt = 0;   // 녹음 마이크를 못 연 때 (잠시 저절로 듣지 않는다: 매번 안내 창이 뜨지 않게)
/** 지금 저절로 마이크를 켜도 되는지 (튜터 말·답 만들기·다른 판·화면 밖이면 안 된다) */
function tutorCanAutoListen(token) {
  if (token !== tutorSessionToken || !tutorCallActive || tutorMicDenied) return false;
  if (tutorBusy || tutorSpeaking || tutorMic || tutorRecRec || tutorHelping || tutorTranscribing) return false;
  if (Date.now() - tutorRecFailAt < 30000) return false;
  const page = tutorEl("page-tutor");
  if (!page || page.classList.contains("hidden") || document.hidden) return false;
  return !["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); });
}
function tutorAfterSpeak(token) {
  if (!tutorCanAutoListen(token)) return;
  if (tutorTypingNow()) {                          // 글로 쓰는 중이면 듣지 않는다
    const inp = tutorEl("tutor-input");
    if (inp.value.trim() && document.activeElement !== inp) setTutorStatus("입력칸의 문장을 ➤로 보내 보세요", "");
    return;
  }
  setTimeout(() => { if (tutorCanAutoListen(token) && !tutorTypingNow()) toggleTutorMic(); }, 250);
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
  if (tutorTranscribing) { tutorTranscribing.cancelled = true; tutorTranscribing = null; was = true; }
  if (was) setTutorStatus(tutorIdleMsg(), "");   // 입력칸은 건드리지 않는다 (듣기 전 내용은 듣기 쪽에서 되살린다)
  if (tutorPractice) tutorPracticeEnd("");
}
/** Emma(위쪽 그림)를 누르면: 말하는 중이면 끊고 바로 듣기, 듣는 중이면 끝내고 보내기, 쉬는 중이면 듣기 시작 */
function tutorTapTutor(e) {
  if (e && e.target.closest && e.target.closest("button")) return;
  if (["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); })) { tutorCloseSheets(); return; }   // 판이 열려 있으면 닫기만
  if (!tutorReady() || tutorBusy || !tutorCallActive || tutorHelping || tutorTranscribing) return;   // 시작 화면·답 만드는 중·받아쓰는 중에는 반응하지 않는다
  tutorPrimeSpeech();
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
  tutorRefit();
  setTimeout(() => { const log = tutorEl("tutor-log"); log.scrollTop = log.scrollHeight; }, 300);   // 그림 크기가 바뀐 뒤 최근 대화가 보이게
  if (on) {
    if (tutorMic && tutorMic.edit) { tutorMic.edit(); return; }   // 받아쓴 말을 지우지 않고 고칠 수 있게
    if (tutorMic || tutorRecRec) tutorCancelListening();
    return;
  }
  setTimeout(() => { if (!tutorTypingNow()) tutorAfterSpeak(tutorSessionToken); }, 300);
}
// 휴대폰 키보드가 올라오면 대화 화면을 키보드 위 영역에 맞춘다 (입력칸이 키보드에 가리지 않게)
let tutorKbOpen = false, tutorBaseH = 0;
const tutorPageVisible = () => { const pg = tutorEl("page-tutor"); return !!pg && !pg.classList.contains("hidden"); };
/** 키보드가 열리고 닫히는 동안 몇 번 더 맞춘다 (화면 크기 알림이 늦거나 빠지는 기기가 있다) */
function tutorRefit() { [60, 250, 600, 1000].forEach(ms => setTimeout(tutorFitViewport, ms)); }
/** 튜터 대화 중에는 뒤쪽 페이지가 스크롤되지 않게 고정한다 (키보드가 페이지를 밀어 올려 화면이 어긋나지 않게) */
function tutorLockScroll(on) {
  document.documentElement.classList.toggle("tutor-lock", !!on);
  if (on) window.scrollTo(0, 0);
}
function tutorFitViewport() {
  const call = tutorEl("tutor-call"), vv = window.visualViewport;
  if (!call || !vv) return;
  const inp0 = tutorEl("tutor-input");
  if (!inp0 || document.activeElement !== inp0 || !tutorBaseH) tutorBaseH = window.innerHeight;   // 키보드가 없을 때의 높이 (화면 전체를 줄이는 인앱 브라우저도 알아채게)
  const open = Math.max(window.innerHeight, tutorBaseH) - vv.height > 80;
  const log = tutorEl("tutor-log");
  const pinned = log && log.scrollHeight - log.scrollTop - log.clientHeight < 40;   // 맨 아래를 보고 있었으면 크기가 바뀐 뒤에도 맨 아래로
  if (pinned) requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; });
  if (open) { call.style.top = vv.offsetTop + "px"; call.style.height = vv.height + "px"; call.style.bottom = "auto"; }
  else {
    call.style.top = call.style.height = call.style.bottom = "";
    // 아이폰은 키보드가 뜰 때 페이지를 위로 밀어 올리고, 닫혀도 그대로 두는 일이 있다 → 제자리로
    if (tutorPageVisible() && (window.scrollY || document.documentElement.scrollTop)) window.scrollTo(0, 0);
  }
  // 안드로이드 뒤로 가기로 키보드만 닫으면 입력칸에 초점이 남아 '글 쓰는 중'으로 멈춰 있게 된다 → 초점을 풀어 다시 듣게
  if (tutorKbOpen && !open) { const inp = tutorEl("tutor-input"); if (inp && document.activeElement === inp) inp.blur(); }
  tutorKbOpen = open;
}
if (window.visualViewport) { visualViewport.addEventListener("resize", tutorFitViewport); visualViewport.addEventListener("scroll", tutorFitViewport); window.addEventListener("resize", tutorFitViewport); }
window.addEventListener("orientationchange", () => { tutorBaseH = 0; });
// 다른 앱으로 가면 듣기를 멈추고(마이크를 붙잡고 있지 않게), 돌아오면 다시 듣는다
document.addEventListener("visibilitychange", () => {
  if (!tutorCallActive) return;
  if (document.hidden) { tutorCancelListening(); return; }
  setTimeout(() => tutorAfterSpeak(tutorSessionToken), 400);
});
// ---------- 수준 ----------
function renderTutorLevels() {
  const cur = tutorLevelId();
  ["tutor-levels-lobby", "tutor-levels-set"].forEach(id => {
    const box = tutorEl(id);
    if (box) box.innerHTML = Object.entries(TUTOR_LEVELS).map(([k, v]) =>
      `<button class="tutor-level-btn${k === cur ? " active" : ""}" onclick="changeTutorLevel('${k}')">${v.label}</button>`).join("");
  });
}
/** 수준 바꾸기: 지금 대화는 그대로 두고, 튜터가 다음 말부터 새 수준으로 말한다 */
/** 튜터 고르기 (Emma / Jay): 얼굴·이름·목소리가 바뀌고 새 대화로 시작 */
function renderTutorChars() {
  const cur = tutorCharId();
  const box = tutorEl("tutor-chars-set");
  if (box) box.innerHTML = Object.entries(TUTORS).map(([k, v]) =>
    `<button class="tutor-level-btn${k === cur ? " active" : ""}" onclick="changeTutorChar('${k}')">${v.label}</button>`).join("");
  const lb = tutorEl("tutor-chars-lobby");   // 시작 화면: 얼굴 사진으로 고르기
  if (lb) lb.innerHTML = Object.entries(TUTORS).map(([k, v]) =>
    `<button class="lobby-char${k === cur ? " active" : ""}" onclick="changeTutorChar('${k}')" aria-label="${v.name}">` +
    `<img src="${v.media}poster.jpg" alt=""><span>${v.name}</span></button>`).join("");
  const nm = tutorEl("tutor-name"); if (nm) nm.textContent = tutorName();
}
function changeTutorChar(id) {
  if (!TUTORS[id] || id === tutorCharId()) return;
  const inLobby = tutorLobbyOpen();
  if (tutorLearnerLines.length && !confirm(`${TUTORS[id].name}와 새 대화를 시작할까요? 지금 대화는 지워져요.`)) return;
  try {
    localStorage.setItem("tutorChar", id);
    if (localStorage.getItem("tutorVoice") !== "app") localStorage.removeItem("tutorVoice");   // 목소리도 그 튜터의 기본 목소리로
  } catch (e) {}
  stopTutorSpeech();
  renderTutorChars(); fillTutorVoices();
  TutorAvatar.remount();
  if (inLobby) { tutorResetConversation(); showTutorLobby(); return; }   // 시작 화면에서는 고르기만 (시작하기를 눌러야 시작)
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
  if (tutorLobbyOpen()) tutorPrepGreeting(400);
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
  const vk = "tutorVisits:" + tutorCharId();   // 튜터마다 처음 만나면 자기소개부터
  try {
    recent = JSON.parse(localStorage.getItem("tutorRecentQs") || "[]");
    const v = localStorage.getItem(vk);
    visits = v != null ? +v || 0 : (tutorCharId() === "emma" ? +localStorage.getItem("tutorVisits") || 0 : 0);   // 예전 기록은 Emma 것
  } catch (e) {}
  const fresh = list => list.filter(q => !recent.includes(q));
  // 반쯤은 지금 때에 맞는 질문, 반쯤은 일상 주제 (최근 질문은 빼고, 다 썼으면 아무거나)
  const pool = Math.random() < 0.5 ? fresh(context) : fresh(general);
  const q = tutorPick(pool.length ? pool : fresh([...context, ...general]).length ? fresh([...context, ...general]) : general);
  const timeOpen = time === "night" ? [] : TUTOR_OPENERS[time];
  const opener = visits === 0 ? tutorPick(TUTOR_OPENERS.first) : tutorPick([...TUTOR_OPENERS.back, ...timeOpen]);
  return { text: opener.replace("{name}", tutorName()) + " " + q, q };
}
/** 고른 첫 인사를 실제로 썼을 때만 기록한다 (시작 화면에서 미리 골랐다가 안 쓰면 '처음 만남'이 그대로 남게) */
function tutorCommitGreeting(q) {
  const vk = "tutorVisits:" + tutorCharId();
  try {
    const recent = JSON.parse(localStorage.getItem("tutorRecentQs") || "[]");
    localStorage.setItem("tutorRecentQs", JSON.stringify([q, ...recent.filter(x => x !== q)].slice(0, 25)));
    const v = localStorage.getItem(vk);
    const visits = v != null ? +v || 0 : (tutorCharId() === "emma" ? +localStorage.getItem("tutorVisits") || 0 : 0);
    localStorage.setItem(vk, String(visits + 1));
  } catch (e) {}
}
function tutorStartMessages() {
  // 인사는 시스템 안내에 적어 둔다 (가짜 대화를 넣으면 모델이 인사를 되풀이하기도 함)
  return [{ role: "system", content: tutorSystemPrompt() }];
}
// 답: 짧은 답이라 생각(thinking)은 최소로 해서 빠르게. 두 문장 넘게 쓰면 중간에 끊는다(tutorReplyDone)
const TUTOR_REPLY_OPTS = { temperature: 0.8, topP: 0.95, maxTokens: 160, chain: "chat" };

// 문장 끝이 아닌 점: 숫자 사이(6.25), Mr./Dr. 같은 약어, a.m.·p.m.·U.S.·e.g. 같은 한 글자씩 끊긴 약어
const TUTOR_DOT = "\u2024";
function tutorProtectDots(t) {
  return (t || "").replace(/(\d)\.(\d)/g, `$1${TUTOR_DOT}$2`).replace(/\b(Mr|Mrs|Ms|Dr|St|etc|vs)\./gi, `$1${TUTOR_DOT}`)
    .replace(/\b(?:[A-Za-z]\.){2,}/g, m => m.split(".").join(TUTOR_DOT));
}
const tutorRestoreDots = t => t.split(TUTOR_DOT).join(".");
const tutorIsQuestion = x => /\?["”']?$/.test((x || "").trim());
/** 모델 답 정리: 역할 이름·학습자 대사 이어 쓰기·이모지·한국어·괄호 메모를 걷어 내고 수준별 길이로 (마지막 질문은 늘 남긴다) */
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
    .replace(/\s+/g, " ").trim();
  const wrapped = s.match(/^["“]([^"“”]*)["”]$/);           // 답 전체를 감싼 따옴표만 벗긴다 (안쪽 인용·아포스트로피는 그대로)
  if (wrapped) s = wrapped[1].trim();
  s = s.replace(/^[\s,.;:!?-]+/, "").trim();
  const sentences = (tutorProtectDots(s).match(/[^.!?]+[.!?]+["”']?|[^.!?]+$/g) || []).map(x => tutorRestoreDots(x).trim()).filter(Boolean);
  const lv = tutorLevel();
  const wc = x => x.split(" ").length;
  let lastQ = -1; sentences.forEach((x, i) => { if (tutorIsQuestion(x)) lastQ = i; });
  const out = []; let full = 0, words = 0;
  for (let i = 0; i < sentences.length; i++) {
    const sen = sentences[i];
    if (i === lastQ) { out.push(sen); break; }          // 대화를 이어 가는 마지막 질문은 늘 남긴다 (학습자가 대답할 거리)
    const reserve = lastQ > i ? wc(sentences[lastQ]) : 0;
    if (out.length && (words + wc(sen) + reserve > lv.maxWords || full >= lv.maxFull)) {
      if (lastQ > i) continue;                           // 질문 앞의 긴 말은 건너뛰고 질문은 살린다
      break;
    }
    out.push(sen); words += wc(sen);
    if (wc(sen) > 2) full++;                             // "Hello!", "Sure." 같은 짧은 말은 문장 수에 넣지 않는다
  }
  return out.join(" ");
}

/** 작은 모델이 자주 하는 실수 걸러 내기 (문장 단위로, 앞에서부터 확정되므로 끝난 문장부터 읽기와 함께 써도 된다)
 *  - 학습자 말을 그대로 따라 하는 문장 ("Here is my passport." → 튜터가 "Here is my passport.")
 *  - 바로 앞 답들에서 이미 한 문장 그대로 되풀이 ("How about you?" 반복 등)
 *  - 대화 중간에 다시 자기소개 ("I'm Emma, ...")
 *  다 걸러져 버리면 원래 문장을 그대로 둔다 (strict면 빈 글자 — 답을 만드는 도중에는 뒤에 더 나올 수 있어서) */
/** 문장 나누기 (6.25나 Mr. 같은 점에서는 나누지 않는다) */
function tutorSplitSentences(text) {
  return (tutorProtectDots(text).match(/[^.!?]+[.!?]+["”']?|[^.!?]+$/g) || []).map(x => tutorRestoreDots(x).trim()).filter(Boolean);
}
function tutorPolish(clean, learner, prevSays, strict) {
  if (!clean) return clean;
  const sents = tutorSplitSentences(clean);
  const words = x => tutorNorm(x).split(" ").filter(Boolean);
  const lw = new Set(words(learner || ""));
  const prev = new Set((prevSays || []).flatMap(p => tutorSplitSentences(p).map(tutorNorm)));
  // 학습자가 다시 말해 달라고 했으면 같은 말을 되풀이하는 게 맞다 (되풀이 거르기를 하지 않는다)
  const askedRepeat = /\b(again|repeat|pardon|one more time|say (that|it)|what did you (say|mean)|come again|excuse me|(didn'?t|don'?t|can'?t|couldn'?t) (catch|understand|get|hear)|slow(ly|er)|speak (more )?slow)\b|^(sorry|what|huh|excuse me)\??$/i.test((learner || "").trim());
  const qs = sents.filter(tutorIsQuestion);
  const kept = sents.filter(x => {
    const w = words(x);
    if (!w.length) return false;
    if (w.length >= 3 && w.filter(t => lw.has(t)).length / w.length >= 0.8) return false;
    // 앞에서 한 말과 같으면 뺀다. 다만 하나뿐인 (짧지 않은) 질문은 남긴다 (질문 없이 "Sure!"만 남지 않게)
    if (!askedRepeat && prev.has(tutorNorm(x)) && !(qs.length === 1 && qs[0] === x && w.length >= 4)) return false;
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
  let j = null; try { j = JSON.parse(out || "{}"); } catch (e) { return { better: "", why: "", unknown: true }; }
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
  if (!c || /^ok[.!]?$/i.test(c) || /[가-힣]/.test(c)) return "";
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
  tutorConvId++;
  // 시간대·요일·계절·주제에 맞춰 매번 다른 첫 질문 (시작 화면에서 미리 골라 음성까지 받아 둔 게 있으면 그것)
  const ng = tutorNextGreeting && tutorNextGreeting.char === tutorCharId() && tutorNextGreeting.level === tutorLevelId() ? tutorNextGreeting : tutorPickGreeting();
  tutorGreeting = ng.text;
  tutorCommitGreeting(ng.q);
  tutorNextGreeting = null;
  tutorMessages = tutorStartMessages();
  tutorLearnerLines = [];
  tutorLearnerItems = [];
  tutorCorrections = [];
  tutorSaidLines = [tutorGreeting];
  tutorEl("tutor-log").innerHTML = "";
  tutorEl("tutor-feedback").classList.add("hidden");
  tutorHintShown = false; renderTutorHint();
  tutorHintTarget = ""; tutorEl("tutor-input").value = "";
  const greet = tutorGreeting;
  const b = addTutorBubble("tutor", greet);
  b.onclick = () => tutorSpeakTap(greet);
  addSlowButton(b, greet);
  addTranslateButton(b, greet);
  if (tutorHintsUsed()) tutorPrepareHints();
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
  if (tutorHintTarget) { const inp = tutorEl("tutor-input"); if (inp && inp.value.trim() === tutorHintTarget) inp.value = ""; tutorHintTarget = ""; }   // 말로 보냈어도 지난 힌트는 치운다
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
  // 듣는 중에 ➤: 지금까지 들은 말을 바로 보낸다 (녹음 방식은 녹음을 끝내고 받아써서 보낸다)
  if (tutorMic && tutorMic.heardText && tutorMic.heardText()) { tutorMic.user = true; tutorMic.stop(); return; }
  if (tutorRecRec && !tutorEl("tutor-input").value.trim()) { tutorRecRec.user = true; tutorRecRec.stop(); return; }
  const inp = tutorEl("tutor-input");
  const t = inp.value;
  if (!t.trim() || tutorBusy || !tutorReady()) return;   // 튜터가 답을 만드는 중이면 입력은 그대로 둔다
  tutorCancelListening();
  inp.value = "";
  if (/[가-힣]/.test(t)) { tutorHelping = true; inp.blur(); tutorKoreanHelp(t.trim()); return; }   // 한국어로 쓰면 영어 표현을 알려 준다
  sendTutorText(t);
}
/** 문장 하나 교정 확인 → 고칠 게 있으면 내 말풍선 아래에 팁 (실패해도 대화는 그대로, 피드백 때 다시 시도) */
let tutorLastCheckErr = null;
function tutorCheckItem(item, before, token) {
  if (!tutorNeedsCheck(item.text)) { item.fix = ""; return Promise.resolve(); }
  const conv = tutorConvId;
  item.check = geminiGenerate(tutorFixMessages(item.text, before), TUTOR_FIX_OPTS)
    .then(out => {
      const r = parseTutorFix(item.text, out);
      if (r.unknown) { item.fix = undefined; return; }        // 답이 깨졌으면 '실수 없음'으로 치지 않는다 (피드백 때 다시 확인)
      item.fix = r.better; item.why = r.why;
      if (r.better && conv === tutorConvId && item.bubble && item.bubble.isConnected && !item.tipped) { item.tipped = true; addTutorTip(item.bubble, r.better, r.why, item.text); }
    })
    .catch(e => { console.warn("교정 확인 실패", e); item.fix = undefined; tutorLastCheckErr = e; })
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
  const msgs = tutorMessages;                        // 이 대화의 기록 (새 대화가 시작되면 바뀐다)
  // 5초가 지나도 첫 글자가 없으면 기다리고 있다는 걸 알려 준다 (먹통처럼 보이지 않게)
  const slowNote = setTimeout(() => { if (!shown && token === tutorSessionToken && tutorBusy) setTutorStatus("응답이 늦어요… 조금만 기다려 주세요", "thinking"); }, 5000);
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
    clearTimeout(slowNote);
    if (tutorAbort === abort) tutorAbort = null;
    console.warn("튜터 답 생성 실패", e);
    voice.cancel();
    if (token !== tutorSessionToken || (e && e.name === "AbortError")) {
      // 답을 받기 전에 피드백을 열거나 화면을 떠났다: 빈 말풍선과 답 못 받은 말을 정리한다
      if (msgs === tutorMessages && bubble.isConnected) { bubble.remove(); const last = msgs[msgs.length - 1]; if (last && last.role === "user") msgs.pop(); }
      tutorBusy = false;
      return;
    }
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
  clearTimeout(slowNote);
  if (tutorAbort === abort) tutorAbort = null;
  if (token !== tutorSessionToken) {
    // 답하는 도중에 피드백을 열거나 화면을 떠났다: 받은 데까지 보여 주고 기록에 남긴다 (다음 말이 자연스럽게 이어지게)
    if (msgs === tutorMessages && bubble.isConnected) {
      const part = tutorPolish(cleanTutorSay(shown), learner && learner.text, prev());
      if (part) { bubbleText.textContent = part; tutorSaidLines.push(part); msgs.push({ role: "assistant", content: part }); }
      else { bubble.remove(); const last = msgs[msgs.length - 1]; if (last && last.role === "user") msgs.pop(); }
    }
    tutorBusy = false; return;
  }
  const text = tutorPolish(cleanTutorSay(shown), learner && learner.text, prev()) || "Sorry, could you say that again?";
  tutorSaidLines.push(text);
  voice.upTo(text, true);     // 남은 문장까지 마저 읽는다
  bubbleText.textContent = text;
  bubble.onclick = () => tutorSpeakTap(text);
  addSlowButton(bubble, text);
  addTranslateButton(bubble, text);
  tutorMessages.push({ role: "assistant", content: text });
  tutorBusy = false;
  if (tutorHintsUsed()) tutorPrepareHints();   // 듣는 동안 다음에 할 말 힌트를 미리 만들어 둔다
  await voice.finish();
  tutorAfterSpeak(token);
}

/** 지금까지 끝난 문장들 (마지막 문장은 문장부호 뒤에 다음 글자가 와야 끝난 것으로 본다. 6.25나 Mr. 같은 점은 문장 끝이 아님) */
function tutorFinishedSentences(clean, raw) {
  const t = tutorProtectDots(clean);
  // 마지막 문장부호 뒤에 띄어쓰기가 이미 왔으면 마지막 문장도 끝난 것 (다음 문장이 화면에서 잘려도)
  if (raw && /[.!?]["”']?$/.test(t) && /[.!?]["”']?\s+\S*$/.test(raw)) return clean;
  let end = -1;
  for (const m of t.matchAll(/[.!?]+["”']?(?=\s)/g)) end = m.index + m[0].length;
  return end < 0 ? "" : tutorRestoreDots(t.slice(0, end));
}

/** 튜터 목소리 줄: 문장이 끝나는 대로 받아 차례로 읽는다 (중간에 끊거나 새 대화가 시작되면 남은 문장은 읽지 않음) */
function tutorSpeechQueue(token) {
  const my = ++tutorSpeechToken;
  let chain = Promise.resolve(), dead = false;
  const spoken = [];                                 // 이미 줄에 넣은 문장
  const alive = () => !dead && token === tutorSessionToken && my === tutorSpeechToken;
  let early = null;
  const q = {
    /** 읽을 문장이 text까지 늘었다: 아직 줄에 안 넣은 문장만 차례로 넣는다 (걸러 내기로 앞 문장이 바뀌어도 겹쳐 읽지 않음).
     *  문장이 끝나는 대로 바로 목소리를 만들기 시작한다 → 앞 문장을 읽는 동안 다음 문장이 만들어진다 */
    upTo(text, final) {
      if (!alive() || !text) return;
      const nat = tutorUseNatural();
      const parts = tutorSplitSentences(text).filter(x => !spoken.includes(x));
      q.say(parts, nat);
    },
    say(parts, nat) {
      if (!alive()) return;
      for (const part of parts) {
        tutorSplitSentences(part).forEach(x => spoken.push(x));
        tutorSpeaking = true; tutorSayDevice = !nat;
        if (!tutorAudioPlaying()) tutorMarkPreparing();
        if (nat) {
          const clip = tutorTtsFetch(part, false);           // 지금 만들기 시작해 두고, 차례가 오면 (다 되는 대로) 튼다
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
    cancel() {
      dead = true; clearTimeout(early);
      // 이 줄이 말하던 중이었으면 소리를 멈추고 '말하는 중'을 풀어 준다 (안 그러면 다시 듣기가 영영 안 켜진다)
      if (my === tutorSpeechToken && tutorSpeaking) { tutorSpeaking = false; tutorSpeechToken++; tutorSilenceAll(); }
    }
  };
  return q;
}

/** 답을 그만 써도 되는지: 줄을 바꿨거나(학습자 대사·메모를 지어내기 시작), 질문으로 끝났거나,
 *  수준별 문장 수보다 하나 더 마쳤을 때 (cleanTutorSay는 그 수 + 뒤따르는 질문까지 보여 준다. "Nice." 같은 짧은 말은 세지 않음) */
function tutorReplyDone(raw) {
  const t = raw.replace(/^\s+/, "");
  if (!t) return false;
  if (/\n\s*\**\s*(A|Learner|User|Student|You|Tip|Note|Correction)\s*\**\s*:/i.test(t)) return true;   // 학습자 대사·메모를 지어내기 시작
  const fin = tutorSplitSentences(tutorFinishedSentences(t.replace(/\s+/g, " ").trim(), raw));
  if (!fin.length) return false;
  // 질문으로 끝났고 그 앞에 한 문장이라도 있으면 끝 (첫 문장이 되묻는 말 "Oh, you went to Jeju?"면 진짜 질문까지 기다린다)
  if (tutorIsQuestion(fin[fin.length - 1]) && fin.length >= 2) return true;
  return fin.filter(x => !tutorIsQuestion(x) && x.split(/\s+/).length > 2).length >= tutorLevel().maxFull + 2;   // 너무 길어지면 그만
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
  btn.onclick = e => { e.stopPropagation(); tutorSpeakTap(text, true); };
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
/** 말풍선·🐢를 눌러 다시 듣기: 튜터가 답을 만드는 중이면 기다리게 한다 (그사이 소리를 내면 오는 답이 묻힌다) */
function tutorSpeakTap(text, slow) {
  if (tutorBusy) { setTutorStatus("선생님 말이 끝나면 다시 눌러 주세요", "thinking"); return; }
  if (slow) speakTutorSlow(text); else speakTutor(text, tutorSessionToken);
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
const TUTOR_CONTRACT = { "she's": "she is", "he's": "he is", "we're": "we are", "they're": "they are", "there's": "there is", "here's": "here is",
  "who's": "who is", "where's": "where is", "how's": "how is", "aren't": "are not", "weren't": "were not", "haven't": "have not", "hasn't": "has not",
  "hadn't": "had not", "wouldn't": "would not", "couldn't": "could not", "shouldn't": "should not", "you'll": "you will", "we'll": "we will",
  "they'll": "they will", "he'll": "he will", "she'll": "she will", "it'll": "it will", "you've": "you have", "we've": "we have", "they've": "they have",
  "you'd": "you would", "gonna": "going to", "wanna": "want to", "gotta": "got to", "ok": "okay", "its": "it is", "im": "i am", "dont": "do not", "cant": "can not",
  "i'm": "i am", "you're": "you are", "it's": "it is", "that's": "that is", "don't": "do not", "doesn't": "does not", "didn't": "did not",
  "can't": "can not", "cannot": "can not", "won't": "will not", "i've": "i have", "i'll": "i will", "i'd": "i would", "isn't": "is not", "wasn't": "was not", "let's": "let us", "what's": "what is" };
// 숫자는 낱말로 (음성 인식은 "2"로, 문장은 "two"로 쓰는 일이 많다)
const TUTOR_ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TUTOR_TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function tutorNumWords(n) {
  if (n < 20) return TUTOR_ONES[n];
  if (n < 100) return TUTOR_TENS[Math.floor(n / 10)] + (n % 10 ? " " + TUTOR_ONES[n % 10] : "");
  if (n < 1000) return TUTOR_ONES[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + tutorNumWords(n % 100) : "");
  return String(n);
}
// 목록에 없는 줄임말도 규칙으로 푼다 (haven't → have not, you'll → you will). 's는 he/she/it 같은 말 뒤에서만 is (John's는 그대로)
const TUTOR_S_IS = new Set(["he", "she", "it", "that", "there", "here", "what", "who", "where", "how", "when", "why"]);
function tutorExpand(w) {
  if (TUTOR_CONTRACT[w]) return TUTOR_CONTRACT[w];
  let m;
  if ((m = w.match(/^(\w+)n't$/))) return m[1] + " not";
  if ((m = w.match(/^(\w+)'(re|ve|ll|m|d)$/))) return m[1] + " " + { re: "are", ve: "have", ll: "will", m: "am", d: "would" }[m[2]];
  if ((m = w.match(/^(\w+)'s$/)) && TUTOR_S_IS.has(m[1])) return m[1] + " is";
  return w;
}
const tutorWords = x => tutorNorm(x).replace(/\b([ap]) m\b/g, "$1m").split(" ").filter(Boolean)
  .flatMap(w => /^\d{1,3}$/.test(w) ? tutorNumWords(+w).split(" ") : tutorExpand(w).split(" "));
const TUTOR_FILLERS = new Set(["um", "uh", "umm", "uhh", "hmm", "er", "erm", "ah", "eh", "mm"]);
/** 같은 순서로 겹치는 낱말 수 */
function tutorLcs(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return dp[a.length][b.length];
}
/** 표현(target)이 말(said) 안에 얼마나 들어 있는지 0~1 (긴 문장 속에 섞어 써도 알아본다) */
function tutorCovers(said, target) { const b = tutorWords(target); return b.length ? tutorLcs(tutorWords(said), b) / b.length : 0; }
/** 두 문장이 얼마나 같은지 0~1 (같은 순서로 맞힌 낱말 수 / 더 긴 쪽 낱말 수) */
function tutorSimilarity(said, target) {
  const a = tutorWords(said).filter(w => !TUTOR_FILLERS.has(w)), b = tutorWords(target);   // 음·어 같은 소리는 빼고
  if (!a.length || !b.length) return 0;
  return tutorLcs(a, b) / Math.max(b.length, a.length - 1);   // 앞뒤에 한 낱말 더 붙인 건 봐준다 (목표 낱말은 빠짐없이 순서대로)
}

// 🎤 다시 말해 보기: 다음 한 마디는 튜터에게 보내지 않고 목표 문장과 비교한다
let tutorPractice = null;   // { target, box }
let tutorHelping = false;   // 한국어 → 영어 표현을 찾는 중 (그동안은 듣지 않는다)
let tutorTranscribing = null;   // 녹음한 말을 받아쓰는 중 (인앱 브라우저)
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
function tutorStartPractice(target, box, quietIfSilent) {
  if (!tutorReady() || tutorTranscribing) return;
  if (tutorPractice && tutorPractice.box === box && (tutorMic || tutorRecRec)) { toggleTutorMic(); return; }   // 한 번 더 누르면 들은 데까지
  tutorCancelListening();
  stopTutorSpeech();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  tutorPractice = { target, box, quietIfSilent };
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
function addPracticeButtons(box, target, plainListen) {
  const acts = document.createElement("div"); acts.className = "tutor-practice";
  acts.innerHTML = `<button class="tutor-slow-btn">🔊 듣기</button><button class="tutor-slow-btn tutor-practice-btn">🎤 다시 말해 보기</button><div class="tutor-practice-result hidden"></div>`;
  const [listen, say] = acts.querySelectorAll("button");
  // 들려준 뒤에는 따라 말하는 걸 '다시 말해 보기'로 받는다 (튜터에게 새 대답으로 보내지지 않게)
  listen.onclick = e => {
    e.stopPropagation(); if (tutorWaitBusy(acts)) return;
    if (plainListen) speakTutor(target, tutorSessionToken);            // 한국어 도움 카드: 듣고 나서 튜터에게 말한다
    else speakTutor(target, tutorSessionToken, false, { then: () => tutorCanAutoListen(tutorSessionToken) && !tutorTypingNow() ? tutorStartPractice(target, acts, true) : tutorAfterSpeak(tutorSessionToken) });
  };
  say.onclick = e => { e.stopPropagation(); if (tutorWaitBusy(acts)) return; tutorStartPractice(target, acts); };
  box.appendChild(acts);
}
/** 튜터가 아직 답을 만드는 중이면 기다리게 한다 (그사이 소리를 내거나 마이크를 켜면 답이 끊기거나 겹친다) */
function tutorWaitBusy(box) {
  if (!tutorBusy) return false;
  tutorPracticeShow(box, "선생님 말이 끝나면 눌러 주세요", "", "");
  return true;
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
    const stale = token !== tutorSessionToken;            // 그사이 피드백을 열었거나 화면을 떠났다: 보여 주고 노트에는 넣되 말하지는 않는다
    const a = card.querySelector(".tutor-ko-a");
    a.innerHTML = `<div class="tutor-ko-label">✨ 영어로는 이렇게 말해요</div><b></b><div class="tutor-ko-next"></div>`;
    a.querySelector("b").textContent = en;
    a.querySelector(".tutor-ko-next").textContent = `🎤 이제 ${tutorName()}에게 영어로 말해 보세요`;
    addPracticeButtons(a, en, true);
    a.querySelector(".tutor-practice-btn").remove();      // 여기서는 바로 튜터에게 말하는 게 연습이다
    log.scrollTop = log.scrollHeight;
    tutorNoteAdd({ en, ko, src: "ko" });
    if (stale) return;                                     // (다른 찾기가 진행 중일 수 있어 tutorHelping은 건드리지 않는다)
    tutorHelping = false;
    speakTutor(en, token);                                 // 들려준 뒤 저절로 듣기 시작 → 말하면 튜터에게 간다
  } catch (e) {
    if (token !== tutorSessionToken) { card.querySelector(".tutor-ko-a").textContent = "취소됐어요 · 다시 적어 주세요"; return; }
    tutorHelping = false;
    card.querySelector(".tutor-ko-a").textContent = "영어로 바꾸지 못했어요. " + geminiErrorText(e);
    setTutorStatus(tutorIdleMsg(), "");
    tutorAfterSpeak(token);
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
  const n = tutorNotes().find(x => x.added < tutorSessionStartedAt && tutorWords(x.en).length >= 3 && tutorCovers(text, x.en) >= 0.85);
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


// ---------- 튜터 목소리 (기기 안에서 만드는 자연스러운 음성 Kokoro) ----------
// 처음 한 번 음성 모델을 받아 두면 기기 안에서 사람처럼 자연스러운 영어 목소리를 만든다 (사용량 제한·요금 없음).
// 받기 전이거나 기기가 너무 느리면 기기 기본 음성으로 읽는다
// 튜터 목소리: 튜터 성별에 맞는 목소리만 고를 수 있다 (g: f 여성 / m 남성, app은 기기 음성을 성별에 맞춰 고름)
const TUTOR_VOICES = {
  af_bella: { label: "밝고 생기 있는 ★", g: "f" }, af_heart: { label: "따뜻하고 자연스러운", g: "f" },
  af_nicole: { label: "속삭이듯 부드러운", g: "f" }, af_kore: { label: "차분하고 또렷한", g: "f" }, af_sarah: { label: "상냥한", g: "f" },
  am_michael: { label: "다정하고 자연스러운 ★", g: "m" }, am_puck: { label: "밝고 경쾌한", g: "m" },
  am_fenrir: { label: "깊고 힘 있는", g: "m" }, bm_george: { label: "영국식 차분한", g: "m" },
  app: { label: "기기 기본 음성", g: "" }
};
// 예전 구글 목소리를 골라 두었으면 새 기본 목소리로 (기기 음성 선택은 그대로)
try {
  if (!localStorage.getItem("tutorVoiceV4")) {
    if (localStorage.getItem("tutorVoice") !== "app") localStorage.removeItem("tutorVoice");
    localStorage.removeItem("tutorTtsDown");
    localStorage.setItem("tutorVoiceV4", "1");
  }
  // 기본 여성 목소리를 '밝고 생기 있는'으로 바꿨다: 예전 기본(따뜻하고 자연스러운)에 있던 사람도 새 기본으로 (한 번만)
  if (!localStorage.getItem("tutorVoiceV5")) {
    if (localStorage.getItem("tutorVoice") === "af_heart") localStorage.removeItem("tutorVoice");
    localStorage.setItem("tutorVoiceV5", "1");
  }
} catch (e) {}
function tutorVoiceId() {
  let v = null; try { v = localStorage.getItem("tutorVoice"); } catch (e) {}
  const ok = TUTOR_VOICES[v] && (v === "app" || TUTOR_VOICES[v].g === tutorChar().gender);
  return ok ? v : tutorChar().voice;   // 따로 고르지 않았거나 다른 성별 목소리면 튜터의 기본 목소리
}
// 기기 음성(자연스러운 음성을 아직 안 받았거나 '기기 기본 음성'을 골랐을 때)도 튜터 성별에 맞춘다
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
let tutorDeviceWordAt = 0, tutorDeviceStartAt = 0;   // 기기 음성이 낱말을 읽기 시작한 때 (말하는 영상을 낱말에 맞춘다)
/** 소리가 실제로 나기 전까지는 '목소리 준비 중…', 나기 시작하면 '말하는 중…' (목소리를 만드는 동안 말한다고 표시하지 않게) */
let tutorPrepTimer = null, tutorSayDevice = false;
const TUTOR_PREP_MSG = "목소리 준비 중…";
function tutorMarkPreparing() {
  setTutorStatus(TUTOR_PREP_MSG, "thinking");
  clearInterval(tutorPrepTimer);
  const my = tutorSpeechToken;
  const timer = tutorPrepTimer = setInterval(() => {
    if (!tutorSpeaking || my !== tutorSpeechToken) { clearInterval(timer); return; }   // 끊겼거나 다음 말로 넘어갔으면 손대지 않는다
    if (!tutorAudioPlaying()) return;
    clearInterval(timer);
    const st = tutorEl("tutor-status"), same = !st || st.textContent === TUTOR_PREP_MSG;
    // 그사이 '기본 음성으로 읽어요' 같은 안내가 떴으면 글은 그대로 두고 표시만 바꾼다
    setTutorStatus(same ? (tutorSayDevice && tutorVoiceId() !== "app" ? "말하는 중… (기기 음성)" : "말하는 중…") : st.textContent, "speaking");
  }, 60);
}
/** 튜터 소리가 지금 실제로 나고 있는지 (말하는 영상은 이때만) */
function tutorAudioPlaying() {
  if (!tutorSpeaking) return false;
  return tutorDeviceTalking || (typeof NeuralTTS !== "undefined" && !!NeuralTTS.isPlaying && NeuralTTS.isPlaying());
}
function tutorDeviceSpeak(text, slow) {
  const g = tutorChar().gender, rate = (typeof userRate === "number" ? userRate : 1) * (slow ? 0.7 : 1);
  return new Promise(resolve => {
    if (!("speechSynthesis" in window)) { resolve(); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = Math.max(0.5, rate);
    const v = tutorDeviceVoice(g);
    if (v) u.voice = v;
    else if (g === "m") u.pitch = 0.9;                // 남성 목소리가 없는 기기면 기본 목소리를 살짝만 낮게 (너무 낮추면 어색하다)
    let done = false;
    const finish = () => { if (!done) { done = true; tutorDeviceTalking = false; clearTimeout(t); resolve(); } };
    const t = setTimeout(finish, Math.max(5000, text.length * 150 / u.rate));
    u.onstart = () => { if (!done) tutorDeviceTalking = true; };
    u.onboundary = e => { if (!done && (!e.name || e.name === "word")) tutorDeviceWordAt = performance.now(); };
    u.onend = u.onerror = finish;
    tutorDeviceStartAt = performance.now();
    window.speechSynthesis.speak(u);
    setTimeout(() => { if (!done && window.speechSynthesis.speaking) tutorDeviceTalking = true; }, 800);   // 말 시작 알림(onstart)이 안 오는 기기도 있다
  });
}
const tutorTtsCache = new Map();        // 같은 문장 다시 듣기는 다시 만들지 않는다
/** 자연스러운 음성으로 읽을 수 있나 (받아 두었고, 이 기기에서 충분히 빠르고, 기기 음성을 고르지 않았을 때) */
const tutorUseNatural = () => tutorVoiceId() !== "app" && typeof KokoroVoice !== "undefined" && typeof NeuralTTS !== "undefined" && KokoroVoice.downloaded() && !KokoroVoice.tooSlow() && !tutorNaturalBroken;
let tutorNaturalBroken = false;         // 이번 실행에서 음성 엔진을 못 열었으면 기기 음성으로
const tutorTtsKey = (text, slow) => tutorVoiceId() + "|" + (slow ? "s|" : "") + text;

// 첫 인사·목소리 들어 보기 음성은 기기에 저장해 두고, 같은 문장이 다시 나오면 만들지 않고 바로 튼다. 최근 40개까지만
const TUTOR_GREET_CACHE = "faith-voice-tutor-greet";   // faith-voice로 시작해서 앱 업데이트 때 지워지지 않는다
const tutorGreetUrl = (text) => location.origin + "/__tutor-greet/k-" + tutorVoiceId() + "/" + encodeURIComponent(text);
const tutorPreviewText = () => `Hi, I'm ${tutorName()}! I'm so happy to talk with you today.`;
// 기기에 저장해 두는 음성: 첫 인사(지금 것·시작 화면에서 미리 고른 것)와 목소리 들어 보기 문장
const tutorPersistable = text => !!text && (text === tutorGreeting || (tutorNextGreeting && text === tutorNextGreeting.text) || text === tutorPreviewText());
async function tutorGreetLoad(text) {
  try {
    if (!tutorPersistable(text) || !("caches" in window)) return null;
    const r = await (await caches.open(TUTOR_GREET_CACHE)).match(tutorGreetUrl(text));
    if (!r) return null;
    return { wav: new Float32Array(await r.arrayBuffer()), sampleRate: +r.headers.get("x-rate") || 24000 };
  } catch (e) { return null; }
}
async function tutorGreetSave(text, clip) {
  try {
    if (!tutorPersistable(text) || !("caches" in window)) return;
    const all = new Float32Array(clip.chunks.reduce((n, c) => n + c.length, 0));
    let o = 0; clip.chunks.forEach(c => { all.set(c, o); o += c.length; });
    const cache = await caches.open(TUTOR_GREET_CACHE);
    await cache.put(tutorGreetUrl(text), new Response(all.buffer, { headers: { "x-rate": String(clip.sampleRate) } }));
    const keys = await cache.keys();                              // 오래된 것부터 지워 40개까지만
    for (const k of keys.slice(0, Math.max(0, keys.length - 40))) await cache.delete(k);
  } catch (e) {}
}

/** 문장 → 음성 (기기 안에서 만든다. 같은 문장은 한 번만).
 *  돌려주는 clip은 만드는 중에도 쓸 수 있다: 다 되면 chunks에 소리가 들어가고 listeners를 부른다 */
function tutorTtsFetch(text, slow) {
  const key = tutorTtsKey(text, slow);
  if (tutorTtsCache.has(key)) return tutorTtsCache.get(key);
  const clip = { chunks: [], sampleRate: 24000, done: false, error: null, listeners: new Set() };
  const emit = () => clip.listeners.forEach(f => f());
  const push = (wav, rate) => { clip.sampleRate = rate; clip.chunks.push(wav); clip.done = true; emit(); };   // 문장 하나가 통째로 온다 → 받자마자 '다 됨' (입 움직임을 미리 짜려면 재생 전에 알아야 한다)
  const voice = tutorVoiceId();
  clip.ready = (async () => {
    const saved = slow ? null : await tutorGreetLoad(text);
    if (saved) { push(saved.wav, saved.sampleRate); return; }
    try {
      const a = await KokoroVoice.generate(text, voice, slow ? 0.8 : 1);
      push(a.wav, a.sampleRate);
      if (!slow) tutorGreetSave(text, clip);
    } catch (e) {
      clip.error = e;
      tutorTtsCache.delete(key);
      if (!KokoroVoice.isLoaded()) tutorNaturalBroken = true;   // 엔진 자체를 못 열었으면 이번에는 기기 음성으로
    }
  })().finally(() => { clip.done = true; emit(); });
  tutorTtsCache.set(key, clip);
  while (tutorTtsCache.size > 40) tutorTtsCache.delete(tutorTtsCache.keys().next().value);
  return clip;
}
/** 만든(또는 만드는 중인) 음성을 튼다. 못 만들었으면 기기 음성으로 읽는다 */
async function tutorPlayClip(clip, text, alive) {
  if (!clip.chunks.length && !clip.done) {
    await new Promise(r => { const f = () => { if (clip.chunks.length || clip.done) { clip.listeners.delete(f); r(); } }; clip.listeners.add(f); });
  }
  if (!clip.chunks.length) {
    console.warn("자연스러운 음성 실패 → 기기 음성", clip.error);
    if (!alive()) return;
    tutorVoiceNote("자연스러운 음성을 만들지 못해 기기 음성으로 들려줘요");
    tutorSayDevice = true;
    if (typeof NeuralTTS !== "undefined") NeuralTTS.stopAudio();   // 아직 나던 소리 위에 겹치지 않게
    try { await tutorDeviceSpeak(text); } catch (e2) {}
    return;
  }
  if (!alive()) return;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  const player = NeuralTTS.playStream();
  let i = 0;
  const feed = () => {
    if (!alive()) { player.end(); return; }
    const first = i === 0 && clip.done && clip.chunks.length;
    while (i < clip.chunks.length) {
      const at = player.push(clip.chunks[i++], clip.sampleRate);
      // 문장 소리를 다 알고 시작하면, 입 움직임(영상 장면 순서)을 소리에 맞춰 미리 짜 둔다
      if (first && i === 1 && at != null) TutorAvatar.speak(clip.chunks.length === 1 ? clip.chunks[0] : tutorJoinChunks(clip.chunks), clip.sampleRate, at);
    }
    if (clip.done) player.end();
  };
  feed();
  if (!clip.done) clip.listeners.add(feed);
  await player.done;
  clip.listeners.delete(feed);
}
function tutorJoinChunks(chunks) {
  const out = new Float32Array(chunks.reduce((n, c) => n + c.length, 0));
  let o = 0; chunks.forEach(c => { out.set(c, o); o += c.length; });
  return out;
}
/** 튜터 목소리로 한 번 읽기 (자연스러운 음성 또는 기기 기본 음성) */
function tutorSay(text, slow, alive) {
  alive = alive || (() => true);
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();     // 누른 순간에 소리 장치를 깨워 둔다 (아이폰)
  const nat = tutorUseNatural();
  tutorSayDevice = !nat;
  if (nat) return tutorPlayClip(tutorTtsFetch(text, slow), text, alive);
  return tutorDeviceSpeak(text, slow);
}
function fillTutorVoices() {
  const g = tutorChar().gender;   // 튜터 성별에 맞는 목소리만
  ["tutor-voice", "tutor-voice-lobby"].forEach(id => {
    const sel = tutorEl(id); if (!sel) return;
    sel.innerHTML = "";
    const noMale = g === "m" && "speechSynthesis" in window && window.speechSynthesis.getVoices().length > 0 && !tutorDeviceVoice("m");
    Object.entries(TUTOR_VOICES).filter(([k, v]) => k === "app" || v.g === g).forEach(([k, v]) => { const o = document.createElement("option"); o.value = k; o.textContent = k === "app" && noMale ? "기기 기본 음성 (여성일 수 있어요)" : v.label; sel.appendChild(o); });
    sel.value = tutorVoiceId();
  });
}
/** 목소리 바꾸기 (설정·시작 화면 어느 쪽에서든): 바로 한 마디 들려준다 */
function changeTutorVoice(sel) {
  try { localStorage.setItem("tutorVoice", (sel || tutorEl("tutor-voice")).value); } catch (e) {}
  fillTutorVoices();
  tutorStopPreview();
  tutorPreviewButtons("loading");
  tutorPreviewDebounce = setTimeout(() => { tutorPreviewVoice(true); if (tutorLobbyOpen()) tutorPrepGreeting(1500); }, 500);   // 연달아 바꾸면 마지막 것만 들려준다 (첫 인사도 새 목소리로 미리)
}

// ---------- 말하기 (튜터 목소리 + 입모양) ----------
async function speakTutor(text, token, slow, opts) {
  if (token !== tutorSessionToken) return;
  tutorCancelListening();                // 듣는 중이면 멈춘다 (튜터 목소리를 내 말로 알아듣지 않게)
  if (tutorSpeaking || tutorDeviceTalking) tutorSilenceAll();   // 앞 말이 아직 나거나 만들어지는 중이면 끊는다 (겹치지 않게)
  const my = ++tutorSpeechToken;
  tutorSpeaking = true;
  tutorMarkPreparing();
  try { await tutorSay(text, slow, () => token === tutorSessionToken && my === tutorSpeechToken); } catch (e) {}
  // 중간에 끊고 새로 말하거나 대화가 바뀌었으면 상태를 건드리지 않는다
  if (token !== tutorSessionToken || my !== tutorSpeechToken) return;
  tutorSpeaking = false;
  setTutorStatus(tutorIdleMsg(), "");
  if (opts && opts.then) opts.then();    // 예: 고친 문장을 들려준 뒤에는 '다시 말해 보기'로 듣는다
  else tutorAfterSpeak(token);           // 다 말했으면 다시 듣는다
}
function stopTutorSpeech() {
  tutorDeviceTalking = false;
  if (!tutorSpeaking) return;
  tutorSpeaking = false;
  tutorSpeechToken++;
  tutorSilenceAll();
  setTutorStatus(tutorIdleMsg(), "");
}
/** 튜터 소리를 모두 멈춘다 (자연스러운 음성·기기 음성 — 아직 만드는 중인 문장도 나중에 나오지 않게) */
function tutorSilenceAll() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (typeof skipCurrentSpeech === "function") skipCurrentSpeech();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.stopAudio();
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
let tutorSrNetErrors = 0;   // 음성 인식 'network' 오류가 연달아 난 횟수
// 말 끝 기다리기: 말이 멈춘 뒤 이만큼 조용하면 다 말한 것으로 보고 보낸다 (생각하느라 멈춘 건 기다려 준다)
const TUTOR_END_WAIT = { short: { label: "짧게", ms: 1200 }, normal: { label: "보통", ms: 2000 }, long: { label: "길게", ms: 3200 } };
// 이런 낱말로 끝나면 말이 이어질 가능성이 커서 더 기다린다 ("I went to the …", "because …", "um …")
const TUTOR_DANGLING = /^(and|but|or|so|because|cause|if|when|while|that|which|who|the|a|an|to|of|in|on|at|for|with|from|about|into|my|your|his|her|their|our|i|i'm|um|uh|uhm|umm|er|erm|hmm|like)$/;
function tutorEndWaitId() { let v = null; try { v = localStorage.getItem("tutorEndWait"); } catch (e) {} return TUTOR_END_WAIT[v] ? v : "normal"; }
function tutorEndWait(text) {
  const last = (text || "").trim().toLowerCase().replace(/[^a-z' ]/g, "").split(/\s+/).pop() || "";
  // 말이 이어질 낱말(and, because, the, I…)로 멈췄으면 더 기다린다. "I think so"처럼 so로 끝나는 완전한 대답은 빼고
  const done = /\b(think|hope|guess) so$/.test((text || "").trim().toLowerCase().replace(/[^a-z' ]/g, "").trim());
  return TUTOR_END_WAIT[tutorEndWaitId()].ms + (TUTOR_DANGLING.test(last) && !done ? 1500 : 0);
}
// 말 보내기: auto(말이 멈추면 자동) · manual(다 말한 뒤 ➤나 튜터를 눌러 보내기)
const TUTOR_SEND = { auto: "말 멈추면 자동", manual: "➤ 눌러서" };
function tutorSendManual() { try { return localStorage.getItem("tutorSendMode") === "manual"; } catch (e) { return false; } }
function changeTutorSendMode(id) {
  if (!TUTOR_SEND[id]) return;
  try { localStorage.setItem("tutorSendMode", id); } catch (e) {}
  renderTutorEndWait();
}
function renderTutorEndWait() {
  const manual = tutorSendManual();
  ["tutor-send-set", "tutor-send-lobby"].forEach(id => {
    const box = tutorEl(id);
    if (box) box.innerHTML = Object.entries(TUTOR_SEND).map(([k, v]) =>
      `<button class="tutor-level-btn${(k === "manual") === manual ? " active" : ""}" onclick="changeTutorSendMode('${k}')">${v}</button>`).join("");
  });
  document.querySelectorAll(".tutor-send-tip").forEach(el => el.classList.toggle("hidden", !manual));
  document.querySelectorAll(".tutor-endwait-row").forEach(el => el.classList.toggle("hidden", manual));   // 직접 보내면 기다리는 시간은 필요 없다
  const cur = tutorEndWaitId();
  ["tutor-endwait-set", "tutor-endwait-lobby"].forEach(id => {
    const box = tutorEl(id);
    if (box) box.innerHTML = Object.entries(TUTOR_END_WAIT).map(([k, v]) =>
      `<button class="tutor-level-btn${k === cur ? " active" : ""}" onclick="changeTutorEndWait('${k}')">${v.label}</button>`).join("");
  });
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
  if (tutorRecorderUntil && Date.now() > tutorRecorderUntil) { tutorUseRecorder = false; tutorRecorderUntil = 0; tutorSrNetErrors = 0; }
  if (tutorRecRec || !SR || tutorEnv().inApp || tutorUseRecorder) { toggleTutorRecordMic(); return; }
  if (tutorMic) { tutorMic.user = true; tutorMic.stop(); return; }   // 듣는 중에 누르면 들은 데까지 바로 보낸다
  if (tutorMicDenied) { showMicPermissionHelp(); tutorCheckMicPermission(); return; }
  stopTutorSpeech();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (tutorEnv().android && typeof NeuralTTS !== "undefined" && NeuralTTS.suspendAudio) NeuralTTS.suspendAudio();   // 안드로이드만 (아이폰은 다시 깨울 때 소리가 안 나기도 함)
  const inp = tutorEl("tutor-input");
  // 브라우저가 말이 잠깐 멈출 때 듣기를 끝내 버려도(특히 안드로이드) 이어서 다시 듣고, 들은 말을 이어 붙인다.
  // 보내는 때는 브라우저가 아니라 우리가 정한다: 마지막 말소리 뒤 tutorEndWait()만큼 조용하면 보낸다
  let committed = "", heard = "", done = false, fatal = false, restarts = 0, silence = null, hinted = false;
  const manual = tutorSendManual();          // 직접 보내기: 조용해져도 보내지 않고 ➤를 기다린다
  const sendBtn = document.querySelector(".talk-input .send");
  const prefill = inp.value;   // 힌트로 넣어 둔 문장 (아무 말도 안 들리면 되살린다)
  const reading = !!prefill.trim();   // 입력칸에 문장(힌트·적던 글)이 있으면 그걸 보며 말하는 중: 칸은 그대로 두고 들은 말은 상태 줄에
  const timers = [];
  const state = { rec: null, user: false, heardText: () => heard.trim() };
  const finish = (send = true) => {
    if (done) return;
    done = true;
    clearTimeout(silence); timers.forEach(clearTimeout);
    if (tutorMic === state) tutorMic = null;
    if (sendBtn) sendBtn.classList.remove("waiting");
    const r = state.rec;
    if (r) { r.onend = r.onerror = r.onresult = null; try { r.abort(); } catch (e) {} }
    const said = send ? heard.trim() : "";
    inp.value = said ? "" : prefill;                 // 보냈으면 비우고, 그만뒀으면 듣기 전 내용으로
    setTutorStatus(tutorIdleMsg(), "");
    if (said) tutorHandleSaid(said);
    else if (tutorPractice) { const q = tutorPractice.quietIfSilent; tutorPracticeEnd(send && !q ? "소리가 들리지 않았어요. 다시 눌러 말해 보세요" : ""); if (q && send) tutorAfterSpeak(tutorSessionToken); }
    else if (send && !state.user && !fatal) tutorQuietRestart();   // 조용해서 끝났으면 다시 듣는다
  };
  state.stop = () => finish(true);
  state.cancel = () => finish(false);
  // 입력칸을 눌렀다: 듣기만 멈추고 받아쓴 말은 칸에 남겨 둔다 (잘못 들은 낱말을 고쳐서 ➤로 보내게)
  state.edit = () => {
    const h = heard.trim();
    finish(false);
    if (tutorMic === state) tutorMic = null;
    if (h && !reading) { inp.value = h; setTutorStatus("고친 뒤 ➤를 눌러 보내세요", ""); }
  };
  const armSilence = () => {
    clearTimeout(silence);
    if (!heard.trim()) return;
    if (manual) {
      if (sendBtn) sendBtn.classList.add("waiting");
      if (!hinted) { hinted = true; setTutorStatus("다 말했으면 ➤를 누르세요", "listening"); }
      return;
    }
    silence = setTimeout(() => finish(true), tutorEndWait(heard));
    if (!hinted) { hinted = true; setTutorStatus(`다 말했으면 ${tutorName()}를 누르세요`, "listening"); }
  };
  const startRec = () => {
    const rec = new SR();
    rec.lang = "en-US"; rec.interimResults = true; rec.maxAlternatives = 1; rec.continuous = true;
    state.rec = rec;
    rec.onresult = e => {
      tutorSrNetErrors = 0;
      const text = (committed + " " + tutorJoinResults(e.results)).replace(/\s+/g, " ").trim();
      if (text !== heard) {                                      // 새 말이 들릴 때마다 기다리는 시간을 다시 잰다
        heard = text; armSilence();
        if (reading) setTutorStatus("🎤 " + heard, "listening"); else inp.value = heard;
      }
    };
    rec.onerror = e => {
      if (e.error === "no-speech" || e.error === "aborted") return;   // 끝 처리는 onend에서
      // 브라우저 음성 인식 서비스를 못 쓰는 환경이면 다음부터 녹음 + Gemini 받아쓰기로 (마이크 권한 자체가 막힌 건 아님)
      if (e.error === "network" && navigator.onLine !== false && ++tutorSrNetErrors < 2) {   // 한 번은 일시적인 끊김으로 보고 그대로 다시 듣는다
        setTimeout(() => setTutorStatus("음성 인식 연결이 잠깐 끊겼어요 · 다시 들어요", ""), 0);
        return;
      }
      if (e.error === "service-not-allowed" || e.error === "network" || e.error === "language-not-supported") {
        tutorUseRecorder = true; fatal = true;
        if (e.error === "network") tutorRecorderUntil = Date.now() + 3 * 60 * 1000;   // 연결 문제는 3분 뒤(또는 다시 연결되면) 음성 인식으로
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
      if ((heard.trim() || manual) && restarts < (manual ? 60 : 10)) {   // 직접 보내기면 조용해도 계속 듣는다
        committed = heard; restarts++;
        try { startRec(); return; } catch (e) {}
      }
      finish(true);
    };
    rec.start();
  };
  tutorMic = state;
  timers.push(setTimeout(() => finish(true), manual ? 120000 : 30000));   // 아무리 길어도 30초(직접 보내기는 2분)면 보낸다
  try {
    startRec();
    setTutorStatus(reading && !tutorPractice ? "입력칸 문장을 따라 말하거나 ➤를 누르세요" : manual ? "듣고 있어요… 다 말하면 ➤를 누르세요" : "듣고 있어요… 영어로 말해 보세요", "listening");
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
let tutorRecorderUntil = 0;     // 'network' 오류로 바꾼 녹음 방식은 이 시각까지만 (그 뒤 다시 음성 인식)
window.addEventListener("online", () => { if (tutorRecorderUntil) { tutorUseRecorder = false; tutorRecorderUntil = 0; tutorSrNetErrors = 0; } });
/** 마이크로 한 마디 녹음: 말을 멈추면(약 1.2초 조용) 자동으로 끝나고, 16kHz 소리 데이터를 돌려준다 */
function tutorRecordUtterance(manual) {
  let stopNow = null, stopEarly = false;
  const done = (async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
    // 권한 창이 떠 있는 동안 멈췄으면(누르거나 화면을 떠남) 마이크를 바로 놓는다
    if (stopEarly) { stream.getTracks().forEach(t => t.stop()); return { audio: new Float32Array(0), heardVoice: false }; }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    let ctx = null, src, proc;
    try {
      ctx = new Ctx();
      if (ctx.state === "suspended") await ctx.resume().catch(() => {});
      if (stopEarly) { stream.getTracks().forEach(t => t.stop()); ctx.close().catch(() => {}); return { audio: new Float32Array(0), heardVoice: false }; }
      src = ctx.createMediaStreamSource(stream);
      proc = ctx.createScriptProcessor(4096, 1, 1);
    } catch (e) { stream.getTracks().forEach(t => t.stop()); if (ctx) ctx.close().catch(() => {}); throw e; }   // 실패해도 마이크는 놓는다
    const chunks = [];
    const t0 = performance.now();
    let noise = 0, nNoise = 0, heardVoice = false, lastVoice = 0;
    return await new Promise(resolve => {
      let ended = false;
      const cap = setTimeout(() => finish(), manual ? 122000 : 32000);        // 소리 처리 신호가 멈춰도 32초면 끝낸다
      const finish = () => {
        if (ended) return;
        ended = true; clearTimeout(cap);
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
        if (manual ? now - t0 > 120000 || (!heardVoice && now - t0 > 30000)   // 직접 보내기: ➤를 누를 때까지 (최대 2분)
          : (heardVoice && now - lastVoice > tutorEndWait("")) || (!heardVoice && now - t0 > 8000) || now - t0 > 30000) finish();   // 말이 멈추고 '말 끝 기다리기'만큼 조용하면
      };
      src.connect(proc); proc.connect(ctx.destination);
    });
  })();
  return { done, stop: () => { if (stopNow) stopNow(); else stopEarly = true; } };
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
  if (tutorEnv().android && typeof NeuralTTS !== "undefined" && NeuralTTS.suspendAudio) NeuralTTS.suspendAudio();   // 안드로이드만 (아이폰은 다시 깨울 때 소리가 안 나기도 함)
  const rec = tutorRecordUtterance(tutorSendManual());
  const token = tutorSessionToken;
  tutorRecRec = rec;
  setTutorStatus(tutorSendManual() ? "듣고 있어요… 다 말하면 ➤를 누르세요" : "듣고 있어요… 말을 마치면 자동으로 보내요", "listening");
  let result;
  try { result = await rec.done; }
  catch (e) {
    if (tutorRecRec === rec) tutorRecRec = null;
    if (rec.cancelled || token !== tutorSessionToken) return;    // 그사이 멈췄거나 화면을 떠났으면 알리지 않는다
    setTutorStatus(tutorIdleMsg(), "");
    tutorPracticeEnd("");
    if (e && (e.name === "NotAllowedError" || e.name === "SecurityError")) { tutorMicDenied = true; showMicPermissionHelp(); }
    else if (e && e.name === "NotFoundError") { tutorRecFailAt = Date.now(); alert("마이크를 찾지 못했어요. 입력창에 적어서 대화할 수 있어요."); }
    else { tutorRecFailAt = Date.now(); alert("마이크를 열지 못했어요. 다른 앱이 마이크를 쓰고 있는지 확인해 주세요. (" + ((e && e.message) || e) + ")"); }
    return;
  }
  tutorRecRec = null;
  if (rec.cancelled) return;                                     // 글로 입력해 보냈으면 녹음은 버린다
  if (!result.heardVoice || result.audio.length < 16000 * 0.4) {
    setTutorStatus(tutorIdleMsg(), "");
    if (tutorPractice) { const q = tutorPractice.quietIfSilent; tutorPracticeEnd(q ? "" : "소리가 들리지 않았어요. 다시 눌러 말해 보세요"); if (q && !rec.user) tutorAfterSpeak(tutorSessionToken); }
    else if (!rec.user) tutorQuietRestart();
    return;
  }
  setTutorStatus("알아듣는 중…", "thinking");
  tutorTranscribing = rec;
  const slow = setTimeout(() => { if (tutorTranscribing === rec) setTutorStatus("알아듣는 데 오래 걸려요… 조금만 기다려 주세요", "thinking"); }, 5000);
  try {
    const text = await geminiTranscribe(result.audio);
    clearTimeout(slow);
    if (tutorTranscribing === rec) tutorTranscribing = null;
    if (rec.cancelled || token !== tutorSessionToken || !tutorCallActive) return;   // 그사이 글로 보냈거나 화면을 떠났으면 버린다
    setTutorStatus(tutorIdleMsg(), "");
    if (!text) { tutorPracticeEnd("잘 못 알아들었어요. 다시 눌러 또박또박 말해 보세요"); setTutorStatus(`잘 못 알아들었어요 · ${tutorName()}를 누르고 또박또박 말해 보세요`, ""); return; }
    tutorHandleSaid(text);
  } catch (e) {
    clearTimeout(slow);
    if (tutorTranscribing === rec) tutorTranscribing = null;
    if (rec.cancelled || token !== tutorSessionToken) return;
    setTutorStatus(tutorIdleMsg(), "");
    tutorPracticeEnd("");
    alert("말을 알아듣지 못했어요. 입력창에 적어서 대화할 수 있어요.\n(" + geminiErrorText(e) + ")");
  }
}

// ---------- 힌트 · 피드백 ----------
function toggleTutorHint() {
  tutorHintShown = !tutorHintShown;
  if (tutorHintShown) { try { localStorage.setItem("tutorHintsUsed", "1"); } catch (e) {} }
  renderTutorHint();
}
/** 힌트를 써 본 사람에게만 미리 만들어 둔다 (안 쓰는 사람의 무료 사용량을 아낀다) */
function tutorHintsUsed() { try { return localStorage.getItem("tutorHintsUsed") === "1"; } catch (e) { return false; } }
// AI 힌트: 지금 대화의 마지막 말에 이어서 내가 할 수 있는 말 3가지 (영어 + 한국어 뜻)
let tutorHintCache = { key: "", list: null, loading: null };
const TUTOR_HINT_SCHEMA = { type: "OBJECT", properties: { suggestions: { type: "ARRAY", items: { type: "OBJECT",
  properties: { en: { type: "STRING" }, kr: { type: "STRING" } }, required: ["en", "kr"] } } }, required: ["suggestions"] };
function tutorTranscript(maxMsgs) {
  return tutorMessages.slice(1).slice(-(maxMsgs || 12)).map(m => (m.role === "user" ? "Student: " : "Teacher: ") + m.content).join("\n");
}
/** 힌트 한 줄씩 받기: "영어 ||| 한국어" 줄이 다 오는 대로 바로 보여 준다 (셋을 다 기다리지 않게) */
function tutorParseHints(text, final) {
  const lines = text.split("\n");
  if (!final) lines.pop();                                 // 아직 쓰는 중인 마지막 줄은 다음에
  return lines.map(l => l.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, "").trim()).filter(l => l.includes("|||"))
    .map(l => { const [en, kr] = l.split("|||").map(x => x.trim().replace(/^["“]|["”]$/g, "")); return { en, kr: kr || "" }; })
    .filter(h => h.en && /[a-z]/i.test(h.en)).slice(0, 3);
}
async function loadTutorAiHints(key) {
  const said = tutorSaidLines[tutorSaidLines.length - 1] || "";
  const entry = tutorHintCache;
  const show = list => { if (tutorHintCache === entry && tutorHintCache.key === key && list.length > (entry.list || []).length) { entry.list = list; if (tutorHintShown) renderTutorHint(true); } };
  const text = await geminiStream([
    { role: "system", content: `You help a Korean adult practice English conversation at the ${tutorLevel().desc} level. ` +
      "Suggest 3 different, natural things the student could say next in reply to the teacher's last message, in real spoken English at the student's level " +
      "(beginner: short and simple): for example a short answer, an answer with a detail, and a question back.\n" +
      "Write exactly 3 lines and nothing else. Each line: the English sentence, then ' ||| ', then its natural Korean meaning." },
    { role: "user", content: `Conversation so far:\n${tutorTranscript(6) || "(none)"}\n` +
      (tutorMessages.length <= 1 && said ? `Teacher: ${said}\n` : "") + "Suggest what the student can say next." }
  ], { temperature: 0.7, maxTokens: 220, chain: "hint", budget: 15000 }, partial => show(tutorParseHints(partial, false)));
  const list = tutorParseHints(text || "", true);
  show(list);
  return list;
}
/** 힌트를 미리 만들어 둔다: 튜터 말이 정해지면 바로 (💡를 누를 때는 이미 준비돼 있게). 실패했던 건 다시 시도 */
function tutorPrepareHints() {
  if (!tutorReady() || !tutorCallActive) return;
  const key = tutorSessionToken + ":" + tutorSaidLines.length + ":" + tutorLevelId();
  if (tutorHintCache.key === key && !tutorHintCache.error) return;
  const entry = { key, list: null, error: null, loading: null };
  tutorHintCache = entry;                                  // 먼저 바꿔 둬야 한 줄씩 온 힌트가 이 칸에 들어간다
  entry.loading = loadTutorAiHints(key)
    .then(list => { if (!list.length) entry.error = new Error("힌트를 받지 못했어요"); })
    .catch(e => { entry.error = e; })
    .finally(() => { entry.loading = null; if (tutorHintCache === entry && tutorHintShown) renderTutorHint(true); });   // 실패해도 여기서 다시 요청하지 않는다 (끝없이 되풀이 방지)
  tutorHintCache = entry;
}
/** 힌트 고르기: 입력칸에 넣는다 (➤로 바로 보내거나, 그대로 따라 말하거나, 고쳐 쓸 수 있게). 힌트 창은 닫는다 */
function tutorUseHint(en) {
  tutorCancelListening();
  stopTutorSpeech();                                   // 튜터가 아직 말하는 중이면 끊는다 (소리가 겹치지 않게)
  const inp = tutorEl("tutor-input");
  inp.value = en; tutorHintTarget = en.trim();
  tutorHintShown = false; renderTutorHint();
  const send = document.querySelector(".talk-input .send");
  if (send) { send.classList.remove("ready"); void send.offsetWidth; send.classList.add("ready"); }   // 보내기 버튼을 반짝여 알려 준다
  // 튜터가 읽어 주지 않는다 (내가 할 말이라서). 바로 듣기 시작 → 그대로 따라 말하면 보내지고, ➤를 눌러 글로 보내도 된다
  setTutorStatus("➤로 보내거나 그대로 따라 말해 보세요", "");
  const token = tutorSessionToken;
  setTimeout(() => tutorAfterSpeak(token), 300);
}
function renderTutorHint(noRetry) {
  const box = tutorEl("tutor-hint");
  if (!box) return;
  box.classList.toggle("hidden", !tutorHintShown);
  const hb = tutorEl("tutor-hint-btn"); if (hb) hb.classList.toggle("on", tutorHintShown);
  const room = tutorEl("tutor-chat-area"); if (room) room.classList.toggle("hinting", tutorHintShown);
  requestAnimationFrame(() => { const log = tutorEl("tutor-log"); if (log) log.scrollTop = log.scrollHeight; });   // 힌트가 답하는 튜터 말이 보이게
  if (!tutorHintShown) return;
  if (!tutorReady()) return;
  if (tutorBusy) { box.innerHTML = `<div class="tutor-hint-label">힌트 만드는 중…</div>`; return; }   // Emma 답이 정해지면 그 답에 맞춰 만든다
  if (!noRetry) tutorPrepareHints();
  const hc = tutorHintCache;
  if (!hc.list || !hc.list.length) {
    if (tutorHintCache.error) {
      box.innerHTML = `<div class="tutor-hint-label"></div><button class="tutor-slow-btn tutor-hint-retry">↻ 다시 시도</button>`;
      box.firstChild.textContent = "힌트를 만들지 못했어요. " + geminiErrorText(tutorHintCache.error);
      box.querySelector("button").onclick = e => { e.stopPropagation(); renderTutorHint(); };
    } else box.innerHTML = `<div class="tutor-hint-label">힌트 만드는 중…</div>`;
    return;
  }
  box.innerHTML = `<div class="tutor-hint-label tutor-hint-head">이렇게 말해 볼까요? 누르면 입력칸에 넣어요</div>`;
  tutorHintCache.list.forEach(h => {
    const row = document.createElement("div"); row.className = "tutor-hint-item";
    row.innerHTML = `<div class="tutor-hint-en"></div><div class="tutor-hint-kr"></div>`;
    row.querySelector(".tutor-hint-en").textContent = h.en;
    row.querySelector(".tutor-hint-kr").textContent = h.kr;
    row.onclick = () => tutorUseHint(h.en);
    box.appendChild(row);
  });
  if (hc.loading && hc.list.length < 3) { const more = document.createElement("div"); more.className = "tutor-hint-label"; more.textContent = "더 만드는 중…"; box.appendChild(more); }
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
  // 확인 중인 것은 기다리고, 확인 못 한 문장은 하나씩 다시 (한꺼번에 보내면 사용량 초과가 더 심해진다) — 사용량 초과면 거기서 멈춘다
  await Promise.all(tutorLearnerItems.map(it => it.check).filter(Boolean));
  const asst = tutorMessages.filter(m => m.role === "assistant");
  for (let i = 0; i < tutorLearnerItems.length; i++) {
    const it = tutorLearnerItems[i];
    if (it.fix !== undefined || token !== tutorSessionToken) continue;
    let hit429 = false;
    await (tutorCheckItem(it, (asst[i - 1] || {}).content, token) || Promise.resolve());
    if (it.fix === undefined && tutorLastCheckErr && tutorLastCheckErr.status === 429) hit429 = true;
    if (hit429) break;
  }
  if (token !== tutorSessionToken) return;
  const seen = new Set();   // 같은 문장을 여러 번 말했으면 교정은 한 번만
  tutorCorrections = tutorLearnerItems.filter(it => it.fix && !seen.has(tutorNorm(it.text)) && seen.add(tutorNorm(it.text))).map(it => ({ said: it.text, better: it.fix, why: it.why }));
  const fixes = tutorCorrections.slice(-5), failed = tutorLearnerItems.filter(it => it.fix === undefined).length;
  q(".tutor-fb-summary").textContent = `영어로 ${n}번 말했어요 · ` + (fixes.length ? `고쳐 볼 문장 ${tutorCorrections.length}개`
    : failed ? "문장 확인을 다 하지 못했어요" : "눈에 띄는 실수 없이 잘했어요! 👏");   // 확인을 못 했는데 '실수 없음'이라고 칭찬하지 않게
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
  let clips = null, clip = "idle", quietSince = 0, paused = false, lastLoud = 0;   // 영상 튜터: idle(듣기) 위에 talk(말하기)를 겹쳐 두고 talk만 나타났다 사라진다
  // 말하는 영상을 목소리에 맞춰 '연주'한다: 장면마다 입이 얼마나 벌어졌는지(talk.json)를 알고,
  // 소리가 나면 입이 열리는 장면 쪽으로 (필요하면 빨리) 틀고, 조용하면 입이 닫힌 장면에서 멈춘다. 그림은 모두 실제 영상 그대로
  let talk = null;
  const ctl = { on: false, spk: false, quiet: 0, rate: 1, rateAt: 0, env: 0, peak: 0.05, hist: [], last: 0, prepAt: 0, prepFrame: -1, seeking: false, leaving: false, offAt: 0, plan: null, fixAt: 0 };
  const TALK = { on: 0.16, off: 0.08, gap: 0.06, base: 1.0, gain: 0.6, min: 0.85, max: 1.5, hurryOpen: 2.0, close: 1.6, holdAt: 3, slew: 0.2, longGap: 0.8, rest: 0.35, openGap: 0.4 };   // 시뮬레이션으로 맞춘 값
  // 미리 짜기: 문장 소리 전체를 알고 시작할 때, 소리 크기 곡선과 입 벌림 곡선이 가장 잘 겹치도록 장면 순서를 고른다 (영상은 멈춤·0.5~2.5배속으로만 따라간다)
  const PLAN = { lead: 1, pow: 0.7, sil: 0.1, hold: 0.012, holdLoud: 0.15, k2: 0.015, chg: 0.03, quietOpen: 0.3, loudClosed: 0.3, look: 2, gain: 0.5, min: 0.5, max: 2.5, fix: 12, maxSec: 30 };
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
      clip = "idle"; clips.idle.classList.add("on");          // 듣는 영상은 늘 아래에 깔려 있고, 말하는 영상만 위에서 나타났다 사라진다
      playClip(clips.idle);
      loadTalkData(media);
      loadMouth(media);
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
  /** 말하는 영상의 장면별 입 벌림 자료 (없으면 소리가 날 때만 말하는 영상을 보여 주는 예전 방식) */
  function loadTalkData(media) {
    talk = null;
    fetch(media + "talk.json").then(r => (r.ok ? r.json() : null)).then(d => {
      if (!d || !Array.isArray(d.open) || !d.open.length || !mounted || tutorChar().media !== media) return;
      const n = d.n = d.open.length;
      d.fps = d.fps || 24;
      // 이 장면에서 입이 열리기까지 몇 장면 남았는지 (닫힌 채 멈출 자리를 고를 때)
      d.nextOpen = d.open.map((_, f) => { let k = 0; while (k < n && d.open[(f + k) % n] < d.openAt) k++; return k; });
      talk = d;
    }).catch(() => {});
  }
  const frameOf = (v, d) => { const f = Math.floor((v.currentTime || 0) * d.fps + 0.01) % d.n; return f < 0 ? f + d.n : f; };
  /** 영상을 어느 장면으로 옮기고 다 옮겨지면 done (안 오더라도 0.7초 뒤에는) */
  function seekFrame(v, f, d, done) {
    const at = (f + 0.5) / d.fps;
    if (Math.abs((v.currentTime || 0) - at) < 0.5 / d.fps) { if (done) done(); return; }
    let fin = false;
    const end = () => { if (fin) return; fin = true; v.removeEventListener("seeked", end); clearTimeout(tm); if (done) done(); };
    const tm = setTimeout(end, 700);
    v.addEventListener("seeked", end);
    try { v.currentTime = at; } catch (e) { end(); }
  }
  // ---- 입 조각 방식 (mouth.json이 있으면) ----
  // 말하는 영상은 1배속으로 그대로 흐르게 두고(멈추거나 빨리 돌리거나 건너뛰지 않는다 → 얼굴이 끊기지 않음),
  // 입 부분만 장면마다 소리에 맞는 다른 장면의 입 조각으로 덮어 그린다 (캔버스: 영상 장면 + 입 조각, 경계는 가림막으로 부드럽게).
  // 조각 고르기는 js/mouth-plan.js. 자료: mouth.json(장면별 위치 변환·입 벌림·비슷한 입 이웃), mouth.webp(입 조각 모음), mouth-mask.png
  let mouth = null;
  const mst = { on: false, leaving: false, plan: null, cur: -1, target: 0, quiet: 0, prepFrame: -1, prepAt: 0, seeking: false, rvfc: 0, lastTime: -1, t: -1, last: 0, drawAt: 0 };
  const MOUTH = { fps: 24, endGap: 2.0, endForce: 0.7, closeAt: 0.15, maxSec: 30, ver: 1 };   // ver: 입 조각 자료를 다시 만들면 올린다 (자료끼리 짝이 어긋나지 않게)
  let mouthLoad = 0;
  function loadMouth(media) {
    mouth = null;
    const tok = ++mouthLoad;                                              // 튜터를 빨리 바꿨다 되돌려도 한 번만 붙게
    if (typeof MouthPlan === "undefined") return;
    // 큰 입 조각 모음은 미리 (가능하면 화면 흐름 밖에서) 풀어 둔다 — 처음 그릴 때 풀면 말 시작 순간 화면이 멈춘다
    const img = src => {
      const url = media + src + (src.includes("?") ? "&" : "?") + "v=" + MOUTH.ver;
      const viaTag = () => new Promise((ok, no) => { const im = new Image(); im.onload = () => ok(im); im.onerror = no; im.src = url; });
      if (typeof createImageBitmap !== "function") return viaTag();
      return fetch(url).then(r => { if (!r.ok) throw new Error(r.status); return r.blob(); }).then(b => createImageBitmap(b)).catch(viaTag);
    };
    fetch(media + "mouth.json?v=" + MOUTH.ver).then(r => (r.ok ? r.json() : null)).then(m => {
      if (!m || !Array.isArray(m.M) || !m.n || tok !== mouthLoad || !mounted || !clips || tutorChar().media !== media) return null;
      return Promise.all([img(m.atlas), img(m.mask)]).then(([atlas, mask]) => {
        if (tok !== mouthLoad || !mounted || !clips || tutorChar().media !== media) return;
        const [, , W, H] = m.box;
        const pc = document.createElement("canvas"); pc.width = W; pc.height = H;
        const cv = document.createElement("canvas"); cv.width = 720; cv.height = 960;   // 그릴 때 화면 상자 크기에 맞춘다 (fitMouth)
        cv.className = "tutor-clip tutor-mouth"; cv.setAttribute("aria-hidden", "true");
        const px = pc.getContext("2d"), cx = cv.getContext("2d");
        if (!px || !cx) return;
        try { cx.imageSmoothingQuality = "high"; } catch (e) {}
        clips.talk.insertAdjacentElement("afterend", cv);
        if (!(typeof ImageBitmap !== "undefined" && atlas instanceof ImageBitmap)) { px.drawImage(atlas, 0, 0, W, H, 0, 0, W, H); px.getImageData(0, 0, 1, 1); }   // <img>로 받았으면 지금(조용할 때) 한 번 풀어 둔다
        mouth = { m: MouthPlan.prepare(m), atlas, mask, pc, px, cv, cx, idle: { fps: MOUTH.fps, n: m.idleToTalk.length }, tk: { fps: MOUTH.fps, n: m.n } };
        try { MouthPlan.warm(mouth.m); } catch (e) {}
      });
    }).catch(() => { mouth = null; });
  }
  /** 입 조각 방식을 못 쓰게 되면 (그리기 실패 등) 예전 방식으로 */
  function dropMouth() {
    if (!mouth) return;
    try { mouth.cv.remove(); } catch (e) {}
    mouth = null; mst.on = mst.leaving = false; mst.plan = null; mst.cur = -1;
    if (clips) { clips.talk.classList.remove("on"); clips.talk.pause(); clips.idle.classList.add("on"); playClip(clips.idle); }
    clip = "idle";
  }
  /** 이번 장면(바탕 b)에 쓸 입 조각: 미리 짠 순서가 있으면 그 순서, 없으면 지금 소리 크기에 맞춰 하나씩 */
  function pickMouth(b, meta) {
    const m = mouth.m, pl = mst.plan, tts = typeof NeuralTTS !== "undefined" ? NeuralTTS : null;
    let j = -1;
    if (pl && tts) {
      // 이 장면이 화면에 나올 때 귀에 들릴 소리의 장면 번호 (소수)
      const ahead = meta && meta.expectedDisplayTime ? Math.max(0, Math.min(0.1, (meta.expectedDisplayTime - performance.now()) / 1000)) : 0;
      const ta = (tts.heardTime() + ahead - pl.at) * MOUTH.fps;
      // 장면 번호는 영상 장면이 넘어간 수로 센다 (소리 시계로 매번 새로 재면 화면 주사율과 엇갈려 2칸·0칸씩 뛰어 입이 반 속도로 끊긴다).
      // 소리 시계와 1.5장면 넘게 벌어질 때만 다시 맞춘다. 영상이 멈춰 있으면 소리 시계 그대로
      let t;
      if (clips.talk.paused || pl.kb == null) { t = Math.round(ta); pl.kb = clips.talk.paused ? null : b; pl.k = 0; pl.t0 = t; }
      else {
        pl.k += ((b - pl.kb) % m.n + m.n) % m.n; pl.kb = b;
        t = pl.t0 + pl.k;
        if (Math.abs(t - ta) > 1.5) { pl.t0 = Math.round(ta) - pl.k; t = pl.t0 + pl.k; }
      }
      mst.t = t;
      if (t >= 0 && t < pl.T && pl.seq) j = pl.seq[t];
      else if (t >= 0 && t < pl.T) j = MouthPlan.step(m, mst.cur >= 0 ? mst.cur : b, pl.tgt[t], b);   // 순서가 아직 안 왔으면
    }
    if (j < 0) j = MouthPlan.step(m, mst.cur >= 0 ? mst.cur : b, pl ? 0 : mst.target, b);
    mst.cur = j;
    return j;
  }
  /** 캔버스를 화면 상자 크기(×화면 배율)에 맞추고, 영상이 상자에 맞춰지는 방식(object-fit: cover + object-position)을 그대로 계산해 둔다.
   *  (캔버스의 object-fit 지원에 기대지 않는다 — 캔버스와 상자의 가로세로 비율이 같아서 브라우저가 따로 맞추지 않는다) */
  function fitMouth() {
    const T = clips.talk, cv = mouth.cv, r = cv.getBoundingClientRect();
    const dpr = Math.min(3, window.devicePixelRatio || 1);   // 화면 화소 그대로 (한 번만 늘려 그려야 흐려지지 않는다)
    const W = Math.max(1, Math.round(r.width * dpr)), H = Math.max(1, Math.round(r.height * dpr));
    if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; try { mouth.cx.imageSmoothingQuality = "high"; } catch (e) {} }
    const vw = T.videoWidth || 720, vh = T.videoHeight || 960;
    const pos = String(getComputedStyle(T).objectPosition || "50% 50%").split(/\s+/);
    const pct = v => (v && v.endsWith("%") ? parseFloat(v) / 100 : 0.5);
    const sc = Math.max(W / vw, H / vh);
    mouth.fit = { vw, vh, sc, ox: (W - vw * sc) * pct(pos[0]), oy: (H - vh * sc) * pct(pos[1]), fx: sc * vw / 720, fy: sc * vh / 960 };
  }
  /** 캔버스에 말하는 영상의 지금 장면을 그리고, 그 위에 고른 입 조각을 덮는다.
   *  얼굴과 입을 한 캔버스에 같은 장면으로 그려야 서로 어긋나지 않는다 (영상과 캔버스를 따로 겹치면 화면에 올라가는 때가 달라 입이 흔들린다) */
  function drawMouth(meta) {
    const T = clips.talk, { m, cx, px, pc, atlas, mask } = mouth;
    if (T.readyState < 2) return;                                         // 아직 장면이 없으면 지난 그림 그대로
    fitMouth();
    const f = mouth.fit;
    const mt = meta ? meta.mediaTime : (T.currentTime || 0);
    const b = (((meta ? Math.round(mt * MOUTH.fps) : Math.floor(mt * MOUTH.fps + 0.001)) % m.n) + m.n) % m.n;
    const j = pickMouth(b, meta);
    cx.setTransform(1, 0, 0, 1, 0, 0);
    cx.drawImage(T, 0, 0, f.vw, f.vh, f.ox, f.oy, f.vw * f.sc, f.vh * f.sc);
    const [x0, y0, W, H] = m.box, col = j % m.cols, row = (j / m.cols) | 0;
    px.globalCompositeOperation = "copy"; px.drawImage(atlas, col * W, row * H, W, H, 0, 0, W, H);
    px.globalCompositeOperation = "destination-in"; px.drawImage(mask, 0, 0);
    const a = m.M[b];                                                     // 기준 좌표 → 이 장면 좌표(720×960) → 캔버스
    cx.setTransform(f.fx * a[0], f.fy * a[3], f.fx * a[1], f.fy * a[4], f.fx * a[2] + f.ox, f.fy * a[5] + f.oy);
    cx.drawImage(pc, x0, y0);
    cx.setTransform(1, 0, 0, 1, 0, 0);
  }
  function safeDraw(meta) { try { drawMouth(meta); } catch (e) { console.warn("입 조각 그리기 실패 → 예전 방식", e); dropMouth(); } }
  /** 영상 장면이 화면에 나올 때마다 그린다 (지원하지 않는 브라우저는 step에서 장면이 바뀔 때) */
  function armFrames() {
    const T = clips && clips.talk;
    if (!T || !T.requestVideoFrameCallback || mst.rvfc) return;
    mst.rvfc = T.requestVideoFrameCallback((now, meta) => {
      mst.rvfc = 0;
      if (!mouth || !clips || clips.talk !== T || !mst.on) return;
      safeDraw(meta); armFrames();
    });
  }
  function startMouth() {
    const T = clips.talk;
    mst.on = true; mst.leaving = false; mst.quiet = 0; mst.cur = -1; mst.lastTime = -1;
    try { T.playbackRate = 1; } catch (e) {}
    safeDraw(null);                                                       // 첫 장면을 먼저 그려 두고 나타난다
    if (!mouth) return;
    playClip(T); armFrames();
    T.classList.add("on"); mouth.cv.classList.add("on"); clip = "talk";
    setTimeout(() => { if (mst.on && clips) clips.idle.pause(); }, 300);
  }
  /** 듣는 얼굴로: 듣는 영상을 지금 자세와 가장 비슷한 장면에 맞춘 뒤 말하는 얼굴을 걷어 낸다 */
  function leaveMouth() {
    const T = clips.talk, I = clips.idle, m = mouth.m;
    mst.leaving = true;
    I.pause();
    seekFrame(I, m.talkToIdle[frameOf(T, mouth.tk)] || 0, mouth.idle, () => {
      if (!mst.leaving || !mouth || !clips || clips.talk !== T) return;
      mst.leaving = false; mst.on = false; mst.plan = null; clip = "idle";
      mst.prepAt = performance.now(); mst.prepFrame = -1;
      playClip(I);
      T.pause();                                                          // 사라지는 동안 캔버스(마지막 장면)와 아래 영상이 같은 그림이게
      T.classList.remove("on"); mouth.cv.classList.remove("on");
    });
  }
  /** 한 장면 (화면 주사율로): 언제 말하는 얼굴을 보이고 거둘지 */
  function stepMouth(now) {
    const T = clips.talk, I = clips.idle, m = mouth.m;
    const dt = Math.min(0.1, Math.max(0.001, (now - (mst.last || now)) / 1000)); mst.last = now;
    const tts = typeof NeuralTTS !== "undefined" ? NeuralTTS : null;
    const playing = !!(tts && tts.isPlaying && tts.isPlaying());
    const a = voiceLevel(now, dt, playing);
    let x = null;
    if (mst.plan) {
      const pl = mst.plan;
      // 재생이 끝나도 재생 장치 지연(블루투스 등)만큼은 소리가 아직 들린다 → 그만큼은 계속 따라간다
      if (playing) pl.endAt = 0; else if (!pl.endAt) pl.endAt = now;
      const lat = tts && tts.outputLatencyMs ? Math.min(350, tts.outputLatencyMs()) : 0;
      if (!tutorSpeaking || (pl.endAt && now - pl.endAt > lat + 60)) mst.plan = null;   // 멈췄거나 끊겼다
      else { x = (tts.heardTime() - pl.at) * MOUTH.fps; if (x > pl.T + 6) mst.plan = null; }
    }
    const planned = !!mst.plan, dev = tutorSpeaking && tutorDeviceTalking && !playing;
    // 미리 짠 순서가 없을 때(기기 음성 등)는 지금 소리 크기에 맞춰 고른다
    mst.target = !planned && tutorSpeaking && (dev || playing) ? Math.min(1, a) * MouthPlan.P.scale : 0;
    const speaking = tutorSpeaking && (planned ? x >= -2 : (dev || (playing && a > TALK.on)));
    if (!mst.on) {
      level = 0;
      // 말할 차례가 되면 말하는 영상을 지금(듣는 얼굴) 자세와 가장 비슷한 장면에 미리 맞춰 둔다
      if (tutorSpeaking && !mst.seeking && now - mst.prepAt > 400 && !(planned && x > -12)) {
        const want = m.idleToTalk[frameOf(I, mouth.idle)];
        if (want != null && want !== mst.prepFrame) {
          mst.prepAt = now; mst.prepFrame = want; mst.seeking = true;
          T.pause(); seekFrame(T, want, mouth.tk, () => { mst.seeking = false; });
        }
      }
      if (!tutorSpeaking) mst.prepFrame = -1;
      if (speaking && (!mst.seeking || now - mst.prepAt > 700)) startMouth();
      return;
    }
    if (speaking) mst.quiet = 0; else mst.quiet += dt;
    if (mst.leaving && speaking) mst.leaving = false;                      // 걷어 내던 중에 다시 말하면 그대로
    const closed = mst.cur < 0 || m.openN[mst.cur] <= MOUTH.closeAt;
    // 튜터 말이 끝났으면 입이 다물린 뒤에, 말 사이가 너무 길면 그냥 듣는 얼굴로
    if (!mst.leaving && ((!tutorSpeaking && (closed || mst.quiet > MOUTH.endForce)) || mst.quiet > MOUTH.endGap)) leaveMouth();
    if (!mst.leaving && T.paused) { try { T.playbackRate = 1; } catch (e) {} playClip(T); armFrames(); }
    // 장면마다 그리기: requestVideoFrameCallback이 없으면 장면이 바뀔 때, 영상이 못 움직이면(저전력 모드 등) 멈춘 얼굴 위에서 입만이라도 1/24초마다
    const fi = Math.floor((T.currentTime || 0) * MOUTH.fps + 0.001);
    if (!T.requestVideoFrameCallback && fi !== mst.lastTime) { mst.lastTime = fi; mst.drawAt = now; safeDraw(null); }
    else if (T.paused && !mst.leaving && now - (mst.drawAt || 0) > 1000 / MOUTH.fps) { mst.drawAt = now; safeDraw(null); }
    level = mouth && mst.cur >= 0 ? Math.min(1, m.openN[mst.cur]) : 0;
  }
  /** 지금 귀에 들리는 목소리 크기 0~1 (재생 장치 지연만큼 늦춰서, 목소리 크기에 맞춰 저절로 기준을 잡는다) */
  function voiceLevel(now, dt, playing) {
    const tts = typeof NeuralTTS !== "undefined" ? NeuralTTS : null;
    if (tutorDeviceTalking && !playing) {
      // 기기 음성은 소리 크기를 잴 수 없다 → 낱말 시작 알림이 오면 그때마다 말소리로, 안 오는 기기는 말하는 동안 계속
      const w = now - tutorDeviceWordAt;
      return tutorDeviceWordAt > tutorDeviceStartAt && w < 1500 ? Math.max(0, 1 - w / 260) : 0.6;
    }
    let raw = playing && tts && tts.outputLevel ? tts.outputLevel() : 0;
    ctl.hist.push([now, raw]); while (ctl.hist.length && ctl.hist[0][0] < now - 700) ctl.hist.shift();
    const lat = tts && tts.outputLatencyMs ? Math.min(350, tts.outputLatencyMs()) : 0;
    if (lat > 8) { const at = now - lat; for (let i = ctl.hist.length - 1; i >= 0; i--) if (ctl.hist[i][0] <= at) { raw = ctl.hist[i][1]; break; } }
    const k = dt * 60;                                                    // 화면 주사율(60·120Hz)과 상관없이 같게
    ctl.env += (raw - ctl.env) * (1 - Math.pow(raw > ctl.env ? 0.15 : 0.55, k));
    ctl.peak = Math.max(0.035, ctl.peak * Math.pow(0.996, k), ctl.env);
    return ctl.env < 0.004 ? 0 : Math.min(1, ctl.env / ctl.peak);
  }
  /** 소리 → 장면마다(1/24초) 입을 얼마나 벌려야 하는지 0~1.2 (문장 안에서 큰 소리 기준으로 맞춘다) */
  function voiceShape(wav, sr, fps) {
    const hop = sr / fps, M = Math.ceil(wav.length / hop), r = new Float32Array(M);
    for (let i = 0; i < M; i++) {
      const c = (i + 0.5) * hop, s0 = Math.max(0, Math.round(c - hop)), e = Math.min(wav.length, Math.round(c + hop));
      let q = 0; for (let j = s0; j < e; j++) q += wav[j] * wav[j];
      r[i] = e > s0 ? Math.sqrt(q / (e - s0)) : 0;
    }
    const ref = Math.max(1e-4, Float32Array.from(r).sort()[Math.floor(M * 0.9)]);
    return r.map(v => (v < PLAN.sil * ref ? 0 : Math.pow(Math.min(1.2, v / ref), PLAN.pow)));
  }
  /** start 장면에서 시작해 소리 한 장면마다 영상을 0·1·2장면씩 나아가며 (입이 다물린 장면에서만 멈춤),
   *  입 벌림이 소리와 가장 비슷해지는 길을 찾는다 (동적 계획법). 돌려주는 값: 소리 장면마다 영상이 start에서 몇 장면 나아가 있어야 하나 */
  function planPath(d, start, tgt) {
    const n = d.n, M = tgt.length, W = 2 * M + 2, K = 3, INF = 1e18;
    const op = q => d.open[(start + q) % n];
    const loc = (i, q) => {
      const raw = op(q), v = Math.min(1.2, raw / 100), t = tgt[i];
      let c = (v - t) * (v - t);
      if (t === 0 && raw > d.openAt) c += PLAN.quietOpen;            // 조용한데 입을 벌리고 있음
      if (t > 0.4 && raw <= d.closedAt) c += PLAN.loudClosed;        // 소리가 큰데 입을 다물고 있음
      return c;
    };
    let cur = new Float64Array(W * K).fill(INF); cur[1] = loc(0, 0);
    const back = new Int8Array(M * W * K);
    for (let i = 1; i < M; i++) {
      const nxt = new Float64Array(W * K).fill(INF);
      for (let q = 0; q < W; q++) for (let kl = 0; kl < K; kl++) {
        const c0 = cur[q * K + kl]; if (c0 >= INF) continue;
        for (let k = 0; k < K; k++) {
          const q2 = q + k; if (q2 >= W) continue;
          if (k === 0 && op(q) > TALK.rest * 100) continue;          // 입을 벌린 채로는 멈추지 않는다
          const c = c0 + loc(i, q2) + (k === 0 ? (tgt[i] > 0.3 ? PLAN.holdLoud : PLAN.hold) : k === 2 ? PLAN.k2 : 0) + (k !== kl ? PLAN.chg : 0);   // 말하는 동안 입이 굳어 있지 않게
          if (c < nxt[q2 * K + k]) { nxt[q2 * K + k] = c; back[(i * W + q2) * K + k] = kl; }
        }
      }
      cur = nxt;
    }
    let best = INF, bq = 0, bk = 1;
    for (let q = 0; q < W; q++) for (let k = 0; k < K; k++) if (cur[q * K + k] < best) { best = cur[q * K + k]; bq = q; bk = k; }
    const pos = new Float32Array(M);
    for (let i = M - 1; i >= 0; i--) { pos[i] = bq; if (!i) break; const kl = back[(i * W + bq) * K + bk]; bq -= bk; bk = kl; }
    return pos;
  }
  /** 자연스러운 음성이 문장 하나를 at(재생 장치 시계)부터 들려준다: 영상 장면 순서를 미리 짠다 */
  function speak(wav, sr, at) {
    if (mouth && clips && !ctl.on) {
      if (!wav || !wav.length || wav.length / sr > MOUTH.maxSec) { mst.plan = null; return; }   // 아주 긴 소리는 소리 크기에 맞춰 그때그때
      try {
        const m = mouth.m, T = clips.talk, tts = NeuralTTS;
        // 소리가 시작될 때 보일 바탕 장면 (입 조각이 얼굴 표정과 어울리게 고를 때 쓴다)
        let base0 = -1;
        if (mst.on && !T.paused) base0 = Math.round(frameOf(T, mouth.tk) + Math.max(0, at - tts.heardTime()) * MOUTH.fps) % m.n;
        else if (mst.prepFrame >= 0) base0 = mst.prepFrame;
        const tgt = MouthPlan.targets(wav, sr, MOUTH.fps);
        // 순서 계산은 워커에서 (그동안은 목표 입 벌림에 맞춰 한 장면씩 고른다)
        const pl = mst.plan = { at, T: tgt.length, tgt, seq: null };
        MouthPlan.planAsync(m, tgt, -1, base0).then(seq => { if (mst.plan === pl && mouth && mouth.m === m) pl.seq = seq; }).catch(() => {});
        if (mst.leaving) mst.leaving = false;
      } catch (e) { mst.plan = null; }
      return;
    }
    const d = talk;
    if (!d || !clips || !wav || !wav.length || wav.length / sr > PLAN.maxSec) return;
    try {
      const T = clips.talk, I = clips.idle, now = performance.now();
      let start;
      if (ctl.on) {
        // 이미 말하는 얼굴이면 지금 장면에서 이어서 (재생 중이면 소리가 시작될 때쯤의 장면)
        const ahead = T.paused ? 0 : Math.max(0, at - NeuralTTS.heardTime()) * d.fps * (T.playbackRate || 1);
        start = Math.round(frameOf(T, d) + ahead) % d.n;
        ctl.leaving = false;
      } else {
        start = ctl.prepFrame >= 0 ? ctl.prepFrame : d.idleToTalk[frameOf(I, d) % d.idleToTalk.length] || 0;
        if (start !== ctl.prepFrame) { ctl.prepAt = now; ctl.prepFrame = start; ctl.seeking = true; T.pause(); seekFrame(T, start, d, () => { ctl.seeking = false; }); }
      }
      const raw = voiceShape(wav, sr, d.fps), M = raw.length;
      // 입은 소리보다 살짝 먼저 움직인다 → lead 장면만큼 앞당긴 소리를 목표로
      const tgt = Float32Array.from({ length: M }, (_, i) => raw[Math.min(M - 1, i + PLAN.lead)] * (i + PLAN.lead < M ? 1 : 0));
      ctl.plan = { at, start, raw, pos: planPath(d, start, tgt), M, shown: false };
    } catch (e) { ctl.plan = null; }
  }
  /** 짜 둔 장면 순서를 따라간다 (멈춤·재생 속도로). 문장이 끝났거나 소리가 멈췄으면 false */
  function followPlan(now, dt) {
    const pl = ctl.plan, d = talk, T = clips.talk;
    const tts = typeof NeuralTTS !== "undefined" ? NeuralTTS : null;
    if (!tts || !tts.isPlaying() || !tutorSpeaking) { ctl.plan = null; return false; }
    const x = (tts.heardTime() - pl.at) * d.fps;                         // 지금 들리는 소리 장면 (소수)
    if (x >= pl.M + 1) { ctl.plan = null; return false; }
    if (x < -1) { if (ctl.on) { if (!T.paused) T.pause(); level = d.open[frameOf(T, d)] / 100; } return true; }   // 아직 소리 전
    const P = t => { if (t <= 0) return pl.pos[0]; const i = Math.min(pl.M - 1, Math.floor(t)), f = t - i; return i >= pl.M - 1 ? pl.pos[pl.M - 1] : pl.pos[i] + (pl.pos[i + 1] - pl.pos[i]) * f; };
    if (ctl.seeking && now - ctl.prepAt < 700) return true;           // 첫 장면으로 옮기는 중이면 기다린다 (그동안은 듣는 얼굴)
    if (!ctl.on) { startTalk(); T.pause(); }
    const want = P(x), ahead = P(x + PLAN.look) - want;
    const cont = (T.currentTime || 0) * d.fps - 0.5;
    let err = (pl.start + want - cont) % d.n; if (err > d.n / 2) err -= d.n; if (err < -d.n / 2) err += d.n;
    // 너무 벌어졌으면 (영상 옮기기가 늦었거나 기기가 버벅였을 때) 한 번 옮긴다
    if (Math.abs(err) > PLAN.fix && now - ctl.fixAt > 600) { ctl.fixAt = now; T.pause(); seekFrame(T, Math.round(pl.start + P(x + 4)) % d.n, d); return true; }
    const r0 = ahead / PLAN.look + err * PLAN.gain;
    if (ahead < 0.3) {
      // 멈춰 기다릴 자리: 바로 그 장면에서 멈춘다 (지나쳤거나 멀면 그 장면으로 옮긴다 → 입 벌린 장면에서 굳지 않게)
      const hold = Math.round(pl.start + want) % d.n;
      if (frameOf(T, d) === hold) { if (!T.paused) T.pause(); }
      else if (err > 0 && err < 3) { try { if (T.playbackRate !== 0.5) T.playbackRate = 0.5; } catch (e) {} if (T.paused) playClip(T); }
      else { if (!T.paused) T.pause(); if (now - ctl.fixAt > 300) { ctl.fixAt = now; seekFrame(T, hold, d); } }
    } else if (r0 < 0.25) { if (!T.paused) T.pause(); }
    else {
      const r = Math.round(Math.min(PLAN.max, Math.max(PLAN.min, r0)) * 10) / 10;
      if (Math.abs(T.playbackRate - r) >= 0.1 && now - ctl.rateAt > 100) { try { T.playbackRate = r; } catch (e) {} ctl.rateAt = now; }
      if (T.paused) playClip(T);
    }
    const f = frameOf(T, d), a = pl.raw[Math.max(0, Math.min(pl.M - 1, Math.floor(x)))];
    level = Math.min(1, d.open[f] / 100); ctl.a = a; ctl.f = f;
    // 문장이 끝나면 다시 지금 방식(반응형)이 닫고 물러나는 일을 맡는다
    if (a > TALK.off) { ctl.spk = true; ctl.quiet = 0; } else { ctl.quiet += dt; if (ctl.quiet > TALK.gap) ctl.spk = false; }
    ctl.rate = T.paused ? 1 : T.playbackRate; ctl.offAt = 0;
    return true;
  }
  /** 말하는 영상을 위에 띄운다 (듣는 영상은 아래 그대로 → 겹쳐 바뀌는 동안 배경이 비치지 않는다) */
  function startTalk() {
    const T = clips.talk;
    ctl.on = true; ctl.leaving = false; ctl.spk = true; ctl.quiet = 0; ctl.rate = TALK.base; ctl.offAt = 0;
    try { T.playbackRate = 1; } catch (e) {}
    playClip(T);
    T.classList.add("on"); clip = "talk";
    setTimeout(() => { if (ctl.on && clips) clips.idle.pause(); }, 300);   // 가려진 동안은 쉬게
  }
  /** 듣는 얼굴로: 듣는 영상을 지금 자세와 가장 비슷한 장면에 맞춘 뒤, 말하는 영상을 걷어 낸다 */
  function leaveTalk() {
    const d = talk, T = clips.talk, I = clips.idle;
    ctl.leaving = true;
    I.pause();
    seekFrame(I, d.talkToIdle[frameOf(T, d)] || 0, d, () => {   // (듣는 영상도 장면 수가 같다)
      if (!ctl.leaving || !clips || clips.talk !== T) return;           // 그사이 다시 말하기 시작했으면 그대로
      ctl.leaving = false; ctl.on = false; clip = "idle";
      ctl.prepAt = performance.now(); ctl.prepFrame = -1;               // 사라지는 동안에는 말하는 영상을 옮기지 않는다
      playClip(I);
      T.classList.remove("on");
      setTimeout(() => { if (!ctl.on && clips && clips.talk === T) T.pause(); }, 250);
    });
  }
  /** 화면을 떠날 때 등: 바로 듣는 얼굴로 */
  function resetTalk() {
    ctl.on = false; ctl.leaving = false; ctl.seeking = false; ctl.prepFrame = -1; ctl.plan = null; clip = "idle";
    mst.on = mst.leaving = mst.seeking = false; mst.prepFrame = -1; mst.plan = null; mst.cur = -1;
    if (mouth) mouth.cv.classList.remove("on");
    if (clips) { clips.talk.classList.remove("on"); clips.talk.pause(); }
  }
  /** 한 장면: 목소리 ↔ 말하는 영상 */
  function stepTalk(now) {
    const d = talk, T = clips.talk, I = clips.idle;
    const dt = Math.min(0.1, Math.max(0.001, (now - (ctl.last || now)) / 1000)); ctl.last = now;
    const tts = typeof NeuralTTS !== "undefined" ? NeuralTTS : null;
    const playing = !!(tts && tts.isPlaying && tts.isPlaying());
    const audible = tutorSpeaking && (tutorDeviceTalking || playing);
    const a = voiceLevel(now, dt, playing);
    if (ctl.plan && followPlan(now, dt)) return;
    if (!ctl.on) {
      level = 0;
      // 말할 차례(목소리를 받는 중)가 되면 말하는 영상을 지금 자세와 가장 비슷한 '말 시작 장면'에 미리 맞춰 둔다
      if (tutorSpeaking && !ctl.seeking && !ctl.plan && now - ctl.prepAt > 400) {
        const want = d.idleToTalk[frameOf(I, d) % d.idleToTalk.length];
        if (want != null && want !== ctl.prepFrame) {
          ctl.prepAt = now; ctl.prepFrame = want; ctl.seeking = true;
          T.pause(); seekFrame(T, want, d, () => { ctl.seeking = false; });
        }
      }
      if (!tutorSpeaking) ctl.prepFrame = -1;
      if (audible && a > TALK.on && (!ctl.seeking || now - ctl.prepAt > 300)) startTalk();
      return;
    }
    const f = frameOf(T, d), o = d.open[f] / 100, closed = d.open[f] <= d.closedAt;
    level = Math.min(1, o); ctl.a = a; ctl.f = f;
    // 말소리가 나는 중인지 (낱말 사이 아주 짧은 틈은 말하는 중으로 본다)
    if (audible && a > TALK.on) { ctl.spk = true; ctl.quiet = 0; }
    else if (!audible || a < TALK.off) { ctl.quiet += dt; if (ctl.quiet > TALK.gap) ctl.spk = false; }
    let run = true, want = TALK.base;
    if (ctl.spk) want = closed ? (d.nextOpen[f] > 2 ? TALK.hurryOpen : TALK.base + 0.2) : Math.min(TALK.max, Math.max(TALK.min, TALK.base + TALK.gain * (a - Math.min(o, 1))));
    else if ((closed && d.nextOpen[f] <= TALK.holdAt) || (o <= TALK.rest && ctl.quiet > 0.12)) run = false;   // 입 닫힌(또는 살짝 다문) 장면에서 기다린다 → 다음 소리에 바로 열린다
    else want = TALK.close;                                              // 아직 입이 열려 있으면 닫힐 때까지 조금 빨리
    if (run) {
      ctl.rate += (want - ctl.rate) * (1 - Math.pow(1 - TALK.slew, dt * 60));
      const r = Math.round(ctl.rate * 10) / 10;                          // 재생 속도는 0.1 단위로, 너무 자주 바꾸지 않게
      if (Math.abs(T.playbackRate - r) >= 0.1 && now - ctl.rateAt > 100) { try { T.playbackRate = r; } catch (e) {} ctl.rateAt = now; }
      if (T.paused) playClip(T);
      if (ctl.leaving && ctl.spk) ctl.leaving = false;                   // 듣는 얼굴로 가던 중에 다시 말하면 그대로 말하기
    } else if (!T.paused) T.pause();
    // 튜터 말이 끝났거나 문장 사이가 길면 듣는 얼굴로 (입이 닫힌 채 멈췄을 때. 말이 끝났는데 안 닫히면 0.6초 뒤엔 그냥)
    if (!tutorSpeaking) { if (!ctl.offAt) ctl.offAt = now; } else ctl.offAt = 0;
    // 조용한데 입이 벌어진 채 닫힐 장면이 멀면 같은 자세의 듣는 얼굴로 바로 바꾼다 (입을 벌린 채 움직이지 않게)
    if (!ctl.leaving && !ctl.spk && ((T.paused && (!tutorSpeaking || ctl.quiet > TALK.longGap)) || (!T.paused && ctl.quiet > TALK.openGap) || (ctl.offAt && now - ctl.offAt > 600))) leaveTalk();
  }
  /** talk.json이 없을 때: 소리가 나는 동안만 말하는 영상 */
  function stepGate(now) {
    const lv = typeof NeuralTTS !== "undefined" && NeuralTTS.outputLevel ? NeuralTTS.outputLevel() : 0;
    if (lv > 0.012) lastLoud = now;
    const talking = tutorSpeaking && (tutorDeviceTalking || (typeof NeuralTTS !== "undefined" && NeuralTTS.isPlaying && NeuralTTS.isPlaying() && now - lastLoud < 170));
    if (talking) { quietSince = 0; if (clip !== "talk") { clip = "talk"; playClip(clips.talk); clips.talk.classList.add("on"); } }
    else { if (!quietSince) quietSince = now; if (now - quietSince > 50 && clip !== "idle") { clip = "idle"; clips.talk.classList.remove("on"); setTimeout(() => { if (clips && clip === "idle") clips.talk.pause(); }, 250); } }
    level = clip === "talk" ? 1 : 0;
  }
  /** 다른 튜터로 바꿀 때 */
  function remount() {
    const box = document.getElementById("tutor-avatar");
    if (clips) Object.values(clips).forEach(v => { try { v.pause(); v.querySelectorAll("source").forEach(s => s.remove()); v.removeAttribute("src"); v.load(); } catch (e) {} });   // 영상 받기를 확실히 멈춘다
    clips = null; frames = null; mouthEls = null; mounted = false; talk = null; mouth = null; mouthLoad++;
    mst.on = mst.leaving = mst.seeking = false; mst.prepFrame = -1; mst.plan = null; mst.cur = -1; mst.rvfc = 0;
    ctl.on = ctl.leaving = ctl.seeking = false; ctl.prepFrame = -1; ctl.plan = null; ctl.hist = []; ctl.env = 0; clip = "idle";
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
      if (hidden) {
        if (!paused) { paused = true; resetTalk(); clips.idle.pause(); }   // 돌아오면 듣는 얼굴부터
        ctl.last = 0;
        return;
      }
      if (paused) { paused = false; playClip(clips.idle); }
      const now = performance.now();
      if (mouth && ctl.on && !mst.on) {                                   // 예전 방식으로 말하던 중에 입 조각 자료가 왔으면 바로 넘겨받는다 (말하는 영상은 이미 보이는 중)
        ctl.on = ctl.leaving = ctl.seeking = false; ctl.plan = null; ctl.prepFrame = -1;
        if (clips.talk.classList.contains("on")) startMouth();
      }
      if (mouth) stepMouth(now);                                          // 입 조각 방식
      else if (talk) stepTalk(now); else stepGate(now);
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
  return { mount, remount, apply, speak, get level() { return level; }, get clip() { return clips ? clip : null; },
    get mouth() { return mouth && mst.on ? (mst.cur >= 0 ? mouth.m.open[mst.cur] : -1) : talk && ctl.on && clips ? talk.open[frameOf(clips.talk, talk)] : -1; },     // 지금 보이는 입 벌림 (0~100, 시험용)
    get rate() { return clips && (ctl.on || mst.on) ? (clips.talk.paused ? 0 : clips.talk.playbackRate) : 0; },
    get mode() { return mouth ? "mouth" : talk ? "warp" : clips ? "gate" : "draw"; },
    get debug() { return mouth ? { mode: "mouth", on: mst.on, plan: !!mst.plan, t: mst.t, cur: mst.cur, target: mst.target, quiet: mst.quiet, vt: clips ? clips.talk.currentTime : 0 } : { a: ctl.a, spk: ctl.spk, f: ctl.f, on: ctl.on, plan: !!ctl.plan, t: clips ? clips.talk.currentTime : 0 }; } };
})();
