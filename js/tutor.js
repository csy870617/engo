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
  fix: ["gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3.5-flash-lite"],   // 첨삭: 정확해야 해서 Flash부터 (막히면 Lite로)
  hint: ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3.6-flash", "gemini-3.5-flash-lite"]   // 힌트: 자연스러운 표현이 중요해서 Flash부터 (대화·첨삭과 다른 모델로 무료 사용량도 나눈다. 튜터가 말하는 동안 미리 만든다)
};
const GEMINI_KEY_STORE = "geminiApiKey";
const GEMINI_KEY_PAGE = "https://aistudio.google.com/apikey";
// 튜터 그림: 입 모양별 이미지 3장(다문 입·반쯤 벌린 입·크게 벌린 입)을 넣으면 소리에 맞춰 바뀐다.
// 비워 두면 기본 캐릭터(SVG). 예: { closed: "images/tutor/closed.png", half: "images/tutor/half.png", open: "images/tutor/open.png" }
const TUTOR_AVATAR_FRAMES = null;
// 튜터: 이름 · 기본 목소리 · 영상 폴더 (같은 사진에서 만든 반복 영상: idle 듣기 / talk 말하기 / poster 첫 화면)
// about: 튜터마다 정해 둔 자기 얘기 ("너는?"에 매번 다른 말을 지어내지 않고, 자기 얘기를 조금씩 나누게.
//        떡볶이·라면은 영어 읽기로 적는다: 목소리 엔진이 한국어 낱말을 이상하게 읽어서)
const TUTORS = {
  emma: { name: "Emma", label: "Emma", gender: "f", voice: "af_bella", media: "images/tutor/emma/web/",
    style: "a sweet, bright K-pop idol girl in her early 20s chatting with her fans on a live stream: cheerful, warm and cute, with a light, youthful voice",
    about: "You're in your early 20s. You grew up in Los Angeles, moved to Seoul two years ago, and teach English online. You love iced lattes, spicy rice cakes, K-dramas and dance practice, and you have a lazy cat named Mochi. You're cheerful, a little clumsy, and you laugh easily." },
  jay: { name: "Jay", label: "Jay", gender: "m", voice: "am_puck", media: "images/tutor/jay/web/",
    style: "a gentle, charming K-pop idol boy in his early 20s chatting with his fans on a live stream: soft, warm and sweet, calm and friendly, with a youthful voice",
    about: "You're in your early 20s. You grew up in Seattle, moved to Seoul last year, and teach English online. You love basketball, playing guitar, hiking and late-night ramen, and you have a small dog named Bori. You're calm, kind and a bit shy, with a quiet sense of humor." }
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
const tutorModelIdx = { chat: 0, aux: 0, hint: 0, fix: 0 };   // 일마다 지금 쓰는 모델 (목록 안의 위치)
const tutorModelSince = { chat: 0, aux: 0, hint: 0, fix: 0 }; // 다음 모델로 넘어간 시각 (5분 지나면 가장 빠른 첫 모델부터 다시 시도)
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
/** 잠깐의 문제인지 (늦음·서버 혼잡·연결 끊김): 다시 말하거나 조금 뒤면 된다 */
const geminiTransient = e => !!e && !geminiKeyProblem(e) && e.status !== 429 && e.reason !== "EMPTY" && (e.reason === "TIMEOUT" || e.reason === "OFFLINE" || e.status >= 500 || e instanceof TypeError);
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
        if (chain === "chat" && e && e.status === 429) tutorChat429At = Date.now();
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
      if (e && e.name === "AbortError" && tm.timedOut()) {   // 멈췄어도 받은 글이 있으면 그만큼 (대화는 끝난 문장까지만)
        const fin = (opts.chain || "chat") === "chat" ? text.replace(/[^.!?]*$/, "") : text;
        if (fin.trim()) return fin;
        throw geminiTimeoutError();
      }
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
    if (opts.thinking && thinking === "MINIMAL") thinking = opts.thinking;   // 더 생각해야 하는 일 (첨삭)
    const tm = geminiTimer(signal, opts.timeout || 20000);   // 20초 넘게 답이 없으면 다른 시도로 ("만드는 중…"에서 멈추지 않게)
    try {
      const res = await geminiFetch(model, "generateContent", geminiBody(messages, { ...opts, thinking }), tm.signal);
      const j = await res.json();
      const parts = (((j.candidates || [])[0] || {}).content || {}).parts || [];
      const out = parts.filter(p => p && p.text && !p.thought).map(p => p.text).join("");
      if (!out.trim()) { if (opts.allowEmpty) return ""; throw new GeminiError("빈 답이 왔어요", 503, "EMPTY"); }   // 길이 제한·안전 필터 등으로 비면 다음 모델로
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
  if (!e) return "문제가 생겼어요. 잠시 뒤 다시 해 주세요.";
  if (geminiKeyProblem(e)) return "Gemini 키가 맞지 않거나 사용할 수 없어요. 키를 다시 확인해 주세요.";
  if (e.status === 429) return "지금은 사용량이 다 찼어요. 잠시 뒤나 내일 다시 해 주세요.";
  if (e.reason === "OFFLINE") return "인터넷에 연결되어 있지 않아요. 연결을 확인해 주세요.";
  if (e.reason === "TIMEOUT") return "구글 서버 응답이 너무 늦어요. 인터넷 연결을 확인하고 다시 해 주세요.";
  if (e.reason === "EMPTY") return "AI가 답을 만들지 못했어요. 한 번 더 해 주세요.";
  if (e.status === 404) return "지금은 이 키로 대화할 수 없어요. 잠시 뒤 다시 해 주세요.";
  if (e.status === 403) return "이 키로는 Gemini를 쓸 수 없어요. AI Studio에서 새 키를 만들어 다시 연결해 주세요.";
  if (e.status >= 500) return "구글 서버가 잠시 바빠요. 조금 뒤에 다시 해 주세요.";
  if (e instanceof TypeError) return "인터넷 연결을 확인해 주세요.";
  return e.message && /[가-힣]/.test(e.message) ? e.message : "문제가 생겼어요. 잠시 뒤 다시 해 주세요.";   // 영어 원문 오류는 보여 주지 않는다
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
  tutorSetMode(mode);
}
/** 표시만 바꾼다 (말하는 중·듣는 중·생각 중 색과 막대) */
function tutorSetMode(mode) {
  const av = tutorEl("tutor-avatar"); if (av) av.dataset.mode = mode || "";
  const room = tutorEl("tutor-chat-area"); if (room) { room.dataset.mode = mode || ""; if (mode !== "listening") delete room.dataset.hearing; }
}
// ---------- 앱 안 알림 창 (브라우저 기본 alert·confirm 대신) ----------
// 튜터 화면 위에 작은 카드로 띄운다: 확인만 있는 안내 / 확인·취소를 고르는 질문. 고른 값(true/false)을 Promise로 돌려준다
let tutorDialogOpen = null;   // 떠 있는 창을 닫는 함수 (뒤로 가기·화면 떠나기에서 닫는다)
function tutorDialog(msg, opts = {}) {
  if (tutorDialogOpen) tutorDialogOpen(false);   // 두 개가 겹치지 않게
  return new Promise(resolve => {
    const host = tutorEl("tutor-call") || document.body;
    const back = document.activeElement;
    const wrap = document.createElement("div");
    wrap.className = "tutor-dialog-wrap";
    wrap.innerHTML = `<div class="tutor-dialog" role="${opts.cancel ? "alertdialog" : "dialog"}" aria-modal="true" aria-describedby="tutor-dialog-msg"><p id="tutor-dialog-msg" class="tutor-dialog-msg"></p><div class="tutor-dialog-btns"></div></div>`;
    wrap.querySelector(".tutor-dialog-msg").textContent = msg;
    const btns = wrap.querySelector(".tutor-dialog-btns");
    const onKey = e => { if (e.key === "Escape") { e.stopPropagation(); done(false); } };
    const done = v => {
      if (tutorDialogOpen !== done) return;
      tutorDialogOpen = null; wrap.remove(); document.removeEventListener("keydown", onKey, true);
      if (back && back.isConnected && back !== document.body) try { back.focus({ preventScroll: true }); } catch (e) {}
      resolve(v);
    };
    if (opts.cancel) {
      const c = document.createElement("button"); c.className = "btn-sub"; c.textContent = opts.cancel;
      c.onclick = () => done(false); btns.appendChild(c);
    }
    const ok = document.createElement("button"); ok.className = "btn-main"; ok.textContent = opts.ok || "확인";
    // 누른 순간에 소리 장치를 깨워 둔다 (확인 뒤 튜터가 바로 말할 수 있게, 아이폰은 누른 순간에만 된다)
    ok.onclick = () => { if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio(); tutorPrimeSpeech(); done(true); };
    btns.appendChild(ok);
    wrap.onclick = e => { if (e.target === wrap) done(false); };
    document.addEventListener("keydown", onKey, true);
    tutorDialogOpen = done;
    host.appendChild(wrap);
    try { ok.focus({ preventScroll: true }); } catch (e) {}
  });
}
const tutorAlert = msg => tutorDialog(msg);
const tutorConfirm = (msg, ok, cancel = "취소") => tutorDialog(msg, { ok, cancel });
function showTutorSection(which) {
  tutorEl("tutor-setup").classList.toggle("hidden", which !== "setup");
  tutorEl("tutor-chat-area").classList.toggle("hidden", which !== "chat");
}
function renderTutorCredit() {
  const el = tutorEl("tutor-model-name");
  if (!el) return;
  el.textContent = tutorReady() ? "AI: Google Gemini · 내 키로 연결돼 있어요" : "AI: Google Gemini";
  el.title = tutorReady() ? tutorModelName("chat") : "";
}

// 대화 기록: 맨 아래를 보고 있으면 말풍선에 버튼·해석·팁·연습 결과가 붙어도 계속 맨 아래가 보이게 (위로 올려 읽는 중이면 그대로 둔다)
let tutorLogPinned = true;
function tutorLogFollow() {
  const log = tutorEl("tutor-log"); if (!log || log.dataset.follow) return;
  log.dataset.follow = "1";
  log.addEventListener("scroll", () => { tutorLogPinned = log.scrollHeight - log.scrollTop - log.clientHeight < 60; }, { passive: true });
  new MutationObserver(() => { if (tutorLogPinned) log.scrollTop = log.scrollHeight; })
    .observe(log, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["class"] });
}
/** 튜터 페이지에 들어올 때 (core.js goTo) */
function renderTutorPage() {
  tutorLogFollow();
  const hd = document.querySelector("header"); if (hd) hd.inert = true;   // 튜터 화면에 가려진 위쪽 메뉴는 키보드로도 닿지 않게
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
  const row = tutorEl("tutor-type-row"); if (row) { row.style.pointerEvents = "none"; setTimeout(() => { row.style.pointerEvents = ""; }, 450); }   // 시작하기를 두 번 눌러도 그 자리에 나타난 입력칸이 눌리지 않게
  tutorCallActive = true;
  if (!fresh && tutorLearnerLines.length) { setTutorStatus(tutorIdleMsg(), ""); tutorResume("lobby"); }
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
      txt.textContent = `🎧 사람처럼 자연스러운 영어 목소리 · 한 번만 받아 두면 계속 써요 (약 ${pl.mb}MB · 와이파이 권장)`;
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
    if (!tutorPageVisible()) KokoroVoice.scheduleUnload(90000);   // 다른 화면에 있는 동안 다 받았다: 소리 내지 않고 잠시 뒤 내린다 (돌아오면 다시 불러온다)
    if (KokoroVoice.tooSlow()) tutorVoiceNote("받았어요. 다만 이 기기에서는 목소리를 만드는 게 느려서 기기 음성으로 읽어요");
    else if (!tutorPageVisible()) { tutorVoiceNote(""); if (tutorVoiceId() === "app") { try { localStorage.removeItem("tutorVoice"); } catch (e) {} fillTutorVoices(); } }
    else {
      if (tutorVoiceId() === "app") { try { localStorage.removeItem("tutorVoice"); } catch (e) {} fillTutorVoices(); }
      tutorVoiceNote("");
      tutorVoiceDlRender();
      tutorPreviewVoice();                    // 바로 한 마디 들려준다
      if (tutorLobbyOpen()) tutorPrepGreeting(800);
    }
  } catch (e) {
    tutorDl = null;
    tutorVoiceNote("목소리를 받지 못했어요. 인터넷 연결을 확인하고 '받기'를 다시 눌러 주세요.");
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
    if (ok && tutorVoiceId() !== "app") KokoroVoice.load(null, tutorVoiceId()).then(() => { if (!tutorPageVisible()) KokoroVoice.scheduleUnload(90000); }, () => { tutorNaturalBroken = true; });
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
  const label = { idle: "▶ 듣기", loading: "준비 중…", playing: "■ 그만" }[state];
  const name = { idle: "목소리 들어 보기", loading: "목소리 준비 중", playing: "목소리 그만 듣기" }[state];
  document.querySelectorAll(".tutor-voice-try").forEach(b => { b.textContent = label; b.dataset.state = state; b.setAttribute("aria-label", name); });
}
function tutorStopPreview() {
  clearTimeout(tutorPreviewDebounce);
  if (tutorPreviewing) { tutorPreviewing = 0; clearInterval(tutorPreviewTimer); stopTutorSpeech(); }
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
    tutorVoiceNote(KokoroVoice.downloaded() && KokoroVoice.tooSlow() ? "이 기기에서는 자연스러운 목소리가 느려서 기기 음성으로 읽어요" : "먼저 아래 '받기'를 눌러 자연스러운 목소리를 받아 주세요");
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
  tutorPausedAt = 0; tutorUnanswered = null; tutorHeardAll = true;
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
  if (btn.disabled) return;
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
      tutorAlert("키는 연결됐어요.\n" + geminiErrorText(e));
    }
  }
  btn.disabled = false; btn.textContent = "연결하기";
}
/** 키 관리: 연결 끊기 (이 기기에서 키를 지운다) */
async function manageTutorKey() {
  if (!(await tutorConfirm("이 기기에서 Gemini 키 연결을 끊을까요?\n나중에 키를 다시 붙여 넣으면 또 쓸 수 있어요.", "연결 끊기"))) return;
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
  tutorSpecDrop();
  tutorKoTarget = null; tutorRecMissCount = 0;
  tutorBusy = false;
}
function leaveTutorPage() {
  if (tutorDialogOpen) tutorDialogOpen(false);
  if (tutorHintShown) { tutorHintShown = false; renderTutorHint(); }
  const hd = document.querySelector("header"); if (hd) hd.inert = false;
  tutorMarkPause(false);
  stopTutorActivity();
  if (typeof KokoroVoice !== "undefined" && !tutorDl && !KokoroVoice.isLoading()) KokoroVoice.scheduleUnload(90000);   // 잠시 뒤 메모리에서 내린다 (금방 돌아오면 그대로 · 받는 중이면 끝까지 받게)
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
async function newTutorConversation() {
  if (tutorLearnerLines.length && !(await tutorConfirm("지금 대화를 지우고 새 대화를 시작할까요?", "새 대화 시작"))) return;
  if (tutorLobbyOpen()) { tutorStartFromLobby(true); return; }   // 시작 화면에서 열었으면 시작 화면을 닫고 시작한다
  toggleTutorSheet();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  startTutorSession();
}
/** 오늘 대화 피드백 열기 */
function openTutorFeedback() {
  const fb = tutorEl("tutor-sheet-feedback");
  if (fb && !fb.classList.contains("hidden")) { tutorCloseSheets(); return; }   // 열려 있으면 닫기만 (다시 요청하지 않게)
  tutorMarkPause(true);
  stopTutorActivity();
  setTutorStatus(tutorIdleMsg(), "");
  toggleTutorSheet("feedback");
  tutorFeedback().finally(renderTutorNotes);
  renderTutorNotes();
}
/** 아래에서 올라오는 판 (설정·피드백). 이름 없이 부르면 모두 닫는다 */
let tutorSheetHistory = false, tutorPopSwallow = false, tutorSheetReturn = null;
/** 판(설정·피드백)을 열면 기록을 하나 넣어 둔다 → 안드로이드 뒤로 가기로 판만 닫힌다 (튜터를 떠나지 않게) */
function tutorHandleBack() {
  if (tutorPopSwallow) { tutorPopSwallow = false; return true; }
  const keep = () => { try { history.pushState({ page: "tutor" }, "", "#tutor"); } catch (e) {} return true; };   // 뒤로 가기로 빠진 기록을 되돌려 둔다
  if (tutorDialogOpen) { tutorDialogOpen(false); if (!tutorSheetHistory) return keep(); }
  if (tutorSheetHistory) { tutorSheetHistory = false; toggleTutorSheet(undefined, true); return true; }
  if (tutorHintShown && tutorPageVisible()) { tutorHintShown = false; renderTutorHint(); return keep(); }
  return false;
}
/** 사용자가 판을 닫을 때 (✕·계속 대화하기·바깥 누르기): 누른 순간에 소리 장치를 깨워 둔다 (돌아와서 바로 말할 수 있게, 아이폰) */
function tutorCloseSheets() { if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio(); toggleTutorSheet(); }
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
  // 키보드로 쓰는 사람: 판을 열면 판 안으로, 닫으면 누르던 버튼으로 초점을 옮긴다 (입력칸으로는 되돌리지 않는다: 키보드가 뜬다)
  if (opened) {
    const a = document.activeElement;
    if (!tutorSheetReturn && a && a !== document.body && a.id !== "tutor-input") tutorSheetReturn = a;
    const el = tutorEl("tutor-sheet-" + name); if (el) try { el.focus({ preventScroll: true }); } catch (e) {}
  } else if (closed) {
    const r = tutorSheetReturn; tutorSheetReturn = null;
    if (r && r.isConnected && mode !== "leave") try { r.focus({ preventScroll: true }); } catch (e) {}
  }
  // 판을 여는 동안은 듣지 않고, 닫으면 하던 대화로 돌아간다
  if (opened) { tutorMarkPause(true); tutorCancelListening(); if (tutorHintShown) { tutorHintShown = false; renderTutorHint(); } }
  else if (closed && mode !== "leave") { tutorStopPreview(); tutorResume("sheet"); }   // 미리 듣던 목소리는 멈춘다 (안 그러면 다시 듣기가 켜지지 않는다)
}
// 듣기: 말하기 버튼 없이 튜터 말이 끝나면 저절로 마이크를 켠다 (실제 대화처럼).
// 조용하면 튜터가 먼저 말을 건네고(천천히 하라고·더 쉽게 다시 묻기), 그래도 말이 없으면 쉰다 (Emma를 누르면 다시 듣기)
let tutorQuietTries = 0;
// 힌트로 넣은 문장은 '글 쓰는 중'으로 보지 않는다 (들려준 뒤 그대로 따라 말하면 받게). 고쳐 쓰면 그때부터 글쓰기
let tutorHintTarget = "";
function tutorTypingNow() {
  const inp = tutorEl("tutor-input"); if (!inp) return false;
  const v = inp.value.trim();
  return document.activeElement === inp || (!!v && v !== tutorHintTarget);
}
let tutorRecFailAt = 0;   // 녹음 마이크를 못 연 때 (잠시 저절로 듣지 않는다: 매번 안내 창이 뜨지 않게)
let tutorNoMic = false;   // 마이크를 찾지 못했다: 저절로 켜지 않는다 (튜터를 누르면 다시 해 본다)
/** 지금 저절로 마이크를 켜도 되는지 (튜터 말·답 만들기·다른 판·화면 밖이면 안 된다) */
function tutorCanAutoListen(token) {
  if (token !== tutorSessionToken || !tutorCallActive || tutorMicDenied) return false;
  if (tutorBusy || tutorSpeaking || tutorMic || tutorRecRec || tutorHelping || tutorTranscribing) return false;
  if (tutorNoMic || Date.now() - tutorRecFailAt < 30000) return false;
  const page = tutorEl("page-tutor");
  if (!page || page.classList.contains("hidden") || document.hidden) return false;
  return !["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); });
}
function tutorAfterSpeak(token) {
  if (!tutorCanAutoListen(token)) return;
  if (tutorOnlineMissed && tutorRetryLast && navigator.onLine !== false && tutorLastIsError() && tutorAutoRetry()) return;   // 말하는 동안 인터넷이 돌아왔다
  if (tutorTypingNow()) {                          // 글로 쓰는 중이면 듣지 않는다
    const inp = tutorEl("tutor-input");
    if (inp.value.trim() && document.activeElement !== inp) setTutorStatus("입력칸의 문장을 ➤로 보내 보세요", "");
    return;
  }
  setTimeout(() => { if (tutorCanAutoListen(token) && !tutorTypingNow()) toggleTutorMic(); }, tutorHandoffMs());
}
/** 튜터 말이 끝난 뒤 마이크를 켜기까지: 자연스러운 음성은 끝에 0.2초 빈 소리가 붙어 있어 거의 바로 켜도 된다
 *  (블루투스처럼 늦게 들리면 그만큼 기다린다). 안드로이드·기기 음성은 예전처럼 */
function tutorHandoffMs() {
  if (tutorSayDevice || tutorEnv().android || typeof NeuralTTS === "undefined") return 250;
  return Math.max(60, Math.min(250, Math.round(NeuralTTS.outputLatencyMs() - 150)));
}

// ---------- 대화 이어 가기 ----------
// 실제 대화처럼 흐름이 끊기지 않게: 조용하면 튜터가 먼저 말을 건네고, 쉬었다 돌아오면 하던 얘기로 돌아가고,
// 답을 못 받으면 영어로 "다시 말해 줄래요?" 한다. 이런 짧은 말은 대화 기록(모델에 보내는 말)에는 넣지 않는다.
const TUTOR_NUDGES = ["Take your time.", "No rush, take your time.", "It's okay, take your time."];
const TUTOR_BRIDGES = { back: ["So, where were we?", "Okay, let's keep going!", "Alright, back to our chat!"], lobby: ["Welcome back!", "Oh, you're back!"] };
const TUTOR_LOST = ["Sorry, I missed that. Could you say it again?", "Oops, I didn't catch that. Can you say it one more time?", "Sorry, I didn't get that. Can you say it again?"];
const TUTOR_OFFLINE = "Oops, I think the internet cut out. Hold on a second!";
const TUTOR_SAY_AGAIN = "Sorry, could you say that again?";
const TUTOR_PRAISE = { good: ["Perfect!", "Great job!", "Yes, that's it!"], try: ["Good try!", "Nice try!"] };
// 정해 둔 말은 목소리를 기기에 저장해 두고 바로 튼다 (만드는 시간 없이)
// 답 첫머리의 짧은 반응: 이 중에서 고르게 하고 목소리를 미리 만들어 기기에 저장해 둔다 → 답의 첫 소리가 바로 나온다
const TUTOR_REACTIONS = [
  // 좋은 일·재미있는 얘기 (자주 쓰는 것부터: 목소리를 이 차례로 미리 만든다)
  "Oh, nice!", "Wow!", "That's great!", "Sounds fun!", "Oh, cool!", "Nice!", "Awesome!", "Oh, how fun!", "That's amazing!", "Oh, I love that!",
  "Haha, nice!", "Good for you!", "Lucky you!", "Oh, that's exciting!", "Sounds great!", "Ooh, nice!", "Oh, sweet!", "Love that!", "Oh, wow!", "No way!", "Wow, really?", "Yay!",
  // 알아들었다·궁금하다
  "I see.", "Oh, I see.", "Oh, really?", "Ah, okay.", "Got it.", "Makes sense.", "Hmm, interesting!", "Interesting!", "Ah, I get it.", "Fair enough.",
  // 안된 일
  "Oh no!", "That's too bad.", "Oh, I'm sorry.", "Aw, that's tough.", "Oh, that's a shame.", "Aw, poor you!",
  // 귀엽거나 웃긴 얘기·맞장구
  "Aw, that's sweet!", "Aw, how cute!", "Haha, I love it!", "Haha, that's funny!", "Me too!", "Same here!", "Totally!", "Oh, for sure!", "Right?"
];
const tutorFixedLine = text => TUTOR_NUDGES.includes(text) || TUTOR_REACTIONS.includes(text) || TUTOR_BRIDGES.back.includes(text) || TUTOR_BRIDGES.lobby.includes(text) ||
  TUTOR_LOST.includes(text) || text === TUTOR_OFFLINE || text === TUTOR_SAY_AGAIN || TUTOR_PRAISE.good.includes(text) || TUTOR_PRAISE.try.includes(text);
/** 차례로 돌려 가며 고른다 (같은 말이 연달아 나오지 않게) */
const tutorTurnPick = (() => { const at = new Map(); return (list, peek) => { const i = ((at.has(list) ? at.get(list) : -1) + 1) % list.length; if (!peek) at.set(list, i); return list[i]; }; })();
let tutorQuietAsked = 0, tutorQuietTurn = -1;   // 더 쉽게 다시 묻기 (한 대화에 3번까지, 같은 질문에는 한 번)
let tutorChat429At = 0;                         // 대화 모델이 사용량 초과였던 때 (그 뒤 1분은 다시 묻기 요청을 하지 않는다)
let tutorPausedAt = 0, tutorHeardAll = true, tutorUnanswered = null, tutorBridgeLine = "";   // 쉬었다 돌아올 때
let tutorRetryLast = null;                      // 답을 못 받은 말 다시 보내기 (인터넷이 다시 연결되면 저절로)
/** 학습자가 대답할 차례인 튜터의 마지막 질문 (없으면 "") */
function tutorPendingQuestion() {
  const lm = tutorMessages[tutorMessages.length - 1];
  if (lm && lm.role === "user") return "";
  return tutorSplitSentences(tutorSaidLines[tutorSaidLines.length - 1] || "").filter(tutorIsQuestion).pop() || "";
}
/** 대화 기록에 넣지 않는 짧은 튜터 말풍선 (조용할 때·돌아왔을 때). 누르면 다시 듣는다 */
function tutorAddNudge(text) {
  const b = addTutorBubble("tutor", text);
  b.classList.add("tutor-nudge");
  b.onclick = () => tutorSpeakTap(text);
  return b;
}
/** 짧은 말 몇 개를 튜터 목소리로 (문장마다 따로 만들어 두어서, 저장해 둔 말은 바로 나온다). 다 말하면 then (없으면 다시 듣기) */
async function tutorSayLines(token, parts, then) {
  if (token !== tutorSessionToken || !parts.length) return false;
  tutorCancelListening();
  if (tutorSpeaking || tutorDeviceTalking) tutorSilenceAll();
  const v = tutorSpeechQueue(token, TUTOR_PREP_MSG);
  v.say(parts, tutorUseNatural());
  const ok = await v.finish();
  if (ok) (then || (() => tutorAfterSpeak(token)))();
  return ok;
}
/** 대화 기록의 마지막 말풍선 (조용할 때 건넨 짧은 튜터 말은 건너뛴다) */
function tutorLastReal() { let el = tutorEl("tutor-log").lastElementChild; while (el && el.classList.contains("tutor-nudge")) el = el.previousElementSibling; return el; }
/** 마지막 말풍선이 '답을 받지 못했어요'인지 */
function tutorLastIsError() { const last = tutorLastReal(); return !!(last && last.querySelector(".tutor-err")); }
// 조용하면 튜터가 먼저: ① 천천히 하라고 + 질문 다시 ② 더 쉽게 고르기로 다시 묻기 (요청 1번) ③ 쉰다
function tutorQuietRestart() {
  const token = tutorSessionToken;
  if (!tutorCallActive) { tutorQuietTries = 0; return; }
  if (tutorQuietTries >= 2) { tutorQuietTries = 0; setTutorStatus(`준비되면 ${tutorName()}를 눌러 주세요`, ""); return; }
  const stage = tutorQuietTries++;
  const helpOk = !tutorSendManual() && !tutorPractice && !tutorHintShown && tutorCanAutoListen(token) && !tutorTypingNow();
  const q = tutorPendingQuestion(), err = tutorLastIsError();
  // 대답할 거리가 있을 때만 말을 건넨다 (작별 인사 뒤처럼 물은 게 없으면 조용히 다시 듣기만)
  if (helpOk && stage === 0 && (q || err || tutorKoTarget)) { tutorQuietNudge(token, !err && !tutorHintTarget && !tutorKoTarget ? q : ""); return; }
  if (helpOk && stage === 1 && tutorCanRephrase(q, err)) { tutorQuietRephrase(token); return; }
  tutorAfterSpeak(token);
}
function tutorQuietNudge(token, q) {
  const line = tutorTurnPick(TUTOR_NUDGES);
  const parts = q && tutorWords(q).length <= 12 ? [line, q] : [line];
  tutorAddNudge(parts.join(" "));
  tutorSayLines(token, parts, q ? () => { tutorHeardAll = true; tutorAfterSpeak(token); } : null);
}
const tutorCanRephrase = (q, err) => !!q && !err && !tutorHintTarget && !tutorKoTarget && tutorQuietAsked < 3 && tutorQuietTurn !== tutorSaidLines.length && Date.now() - tutorChat429At > 60000;
const TUTOR_QUIET_NOTE = "(The student has been quiet for a while after your last question. They may not understand it or may not know what to say. " +
  "Ask about the same thing again in a much easier way: one short sentence with very easy words, and give two easy choices (like \"Coffee or tea?\"). " +
  "Don't start with a reaction like \"Oh, nice!\" this time (they didn't say anything), don't say \"take your time\", don't apologize, and don't mention that they were quiet.)";
function tutorQuietRephrase(token) {
  tutorQuietAsked++; tutorQuietTurn = tutorSaidLines.length;
  tutorReply(token, null, { note: TUTOR_QUIET_NOTE, quiet: true });
}
/** 대화를 잠시 멈출 때 (피드백·설정 판을 열거나 화면을 떠날 때): 돌아왔을 때 할 말을 미리 */
function tutorMarkPause(prefetch) {
  if (!tutorPausedAt) { tutorPausedAt = Date.now(); tutorBridgeLine = tutorTurnPick(TUTOR_BRIDGES.back); }
  if (prefetch && tutorUseNatural()) { tutorTtsFetch(tutorBridgeLine, false); const q = tutorPendingQuestion(); if (q) tutorTtsFetch(q, false); }   // 판을 보는 동안 목소리 엔진은 쉬고 있다
}
/** 쉬었다 돌아오면 친구처럼 이어 간다: 못 받은 답은 새로 받고, 하던 질문은 한 번 더 (kind: sheet 판을 닫음 · lobby 시작 화면에서 이어서) */
function tutorResume(kind) {
  const token = tutorSessionToken, away = tutorPausedAt ? Date.now() - tutorPausedAt : 0;
  tutorPausedAt = 0;
  setTimeout(() => {
    if (token !== tutorSessionToken) return;
    const page = tutorEl("page-tutor");
    const free = tutorCallActive && !tutorBusy && !tutorSpeaking && !tutorHelping && !tutorTranscribing && !tutorRecRec && !tutorMic &&
      !document.hidden && page && !page.classList.contains("hidden") && !["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); });
    const u = tutorUnanswered;
    const li = tutorLearnerItems[tutorLearnerItems.length - 1], lm = tutorMessages[tutorMessages.length - 1];
    if (free && u && li && li.bubble === u.bubble && u.bubble.isConnected && !(lm && lm.role === "user")) {   // 답을 받기 전에 멈췄던 말: 지금 답한다 (마이크를 못 써도)
      tutorUnanswered = null;
      tutorMessages.push({ role: "user", content: u.text });
      tutorReply(token, u);
      return;
    }
    tutorUnanswered = null;
    if (free && tutorRetryLast && navigator.onLine !== false && tutorLastIsError() && tutorAutoRetry()) return;   // 연결이 끊겼던 말: 다시 보낸다
    if (!tutorCanAutoListen(token) || tutorTypingNow()) { tutorAfterSpeak(token); return; }
    const q = tutorPendingQuestion();
    if (q && !tutorLastIsError() && (kind === "lobby" || !tutorHeardAll || away >= 12000)) {
      const line = kind === "lobby" ? tutorTurnPick(TUTOR_BRIDGES.lobby) : (tutorBridgeLine || TUTOR_BRIDGES.back[0]);
      tutorAddNudge(line + " " + q);
      tutorSayLines(token, [line, q], () => { tutorHeardAll = true; tutorAfterSpeak(token); });
      return;
    }
    tutorAfterSpeak(token);
  }, 250);
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
// Esc: 열린 판 → 힌트 순서로 닫는다 (알림 창은 창이 직접 닫는다)
document.addEventListener("keydown", e => {
  if (e.key !== "Escape" || tutorDialogOpen || !tutorPageVisible()) return;
  if (["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); })) tutorCloseSheets();
  else if (tutorHintShown && !tutorLobbyOpen()) toggleTutorHint();
  else return;
  e.preventDefault();
});
// 다른 앱으로 가면 듣기를 멈추고(마이크를 붙잡고 있지 않게), 돌아오면 다시 듣는다
document.addEventListener("visibilitychange", () => {
  if (!tutorCallActive || !tutorPageVisible()) return;
  if (document.hidden) {
    if (tutorBusy || tutorSpeaking || tutorDeviceTalking || tutorHelping) { tutorMarkPause(false); stopTutorActivity(); setTutorStatus(tutorIdleMsg(), ""); }   // 말하던 중이면 멈춘다 (안 보이는 동안 혼자 말하지 않게)
    else if (tutorMic && tutorMic.edit && tutorMic.heardText && tutorMic.heardText()) tutorMic.edit();   // 들은 말은 입력칸에 남겨 둔다 (돌아와서 ➤로 보내게)
    else tutorCancelListening();
    return;
  }
  if (tutorPausedAt && !["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); })) { tutorResume("sheet"); return; }
  setTimeout(() => tutorAfterSpeak(tutorSessionToken), 400);
});
// ---------- 수준 ----------
function renderTutorLevels() {
  const cur = tutorLevelId();
  ["tutor-levels-lobby", "tutor-levels-set"].forEach(id => {
    const box = tutorEl(id);
    if (box) box.innerHTML = Object.entries(TUTOR_LEVELS).map(([k, v]) =>
      `<button class="tutor-level-btn${k === cur ? " active" : ""}" aria-pressed="${k === cur}" onclick="changeTutorLevel('${k}')">${v.label}</button>`).join("");
  });
}
/** 수준 바꾸기: 지금 대화는 그대로 두고, 튜터가 다음 말부터 새 수준으로 말한다 */
/** 튜터 고르기 (Emma / Jay): 얼굴·이름·목소리가 바뀌고 새 대화로 시작 */
function renderTutorChars() {
  const cur = tutorCharId();
  const box = tutorEl("tutor-chars-set");
  if (box) box.innerHTML = Object.entries(TUTORS).map(([k, v]) =>
    `<button class="tutor-level-btn${k === cur ? " active" : ""}" aria-pressed="${k === cur}" onclick="changeTutorChar('${k}')">${v.label}</button>`).join("");
  const lb = tutorEl("tutor-chars-lobby");   // 시작 화면: 얼굴 사진으로 고르기
  if (lb) lb.innerHTML = Object.entries(TUTORS).map(([k, v]) =>
    `<button class="lobby-char${k === cur ? " active" : ""}" aria-pressed="${k === cur}" onclick="changeTutorChar('${k}')" aria-label="${v.name}">` +
    `<img src="${v.media}poster.jpg" alt=""><span>${v.name}</span></button>`).join("");
  const nm = tutorEl("tutor-name"); if (nm) nm.textContent = tutorName();
  const av = tutorEl("tutor-avatar"); if (av) av.setAttribute("aria-label", `${tutorName()} (누르면 말하기 시작·끝내기)`);
}
async function changeTutorChar(id) {
  if (!TUTORS[id] || id === tutorCharId()) return;
  const inLobby = tutorLobbyOpen();
  if (tutorLearnerLines.length && !(await tutorConfirm(`${TUTORS[id].name}와 새 대화를 시작할까요?\n지금 대화는 지워져요.`, "새 대화 시작"))) return;
  if (id === tutorCharId()) return;   // 묻는 동안 이미 바뀌었으면
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
  beginner: { label: "초급", maxWords: 28, maxFull: 2, desc: "beginner (A1-A2)",
    style: ["Say 2 or 3 very short sentences, about 20 words in all.", "Use only very common everyday words and simple present/past grammar. No idioms or slang."] },
  intermediate: { label: "중급", maxWords: 38, maxFull: 3, desc: "intermediate (B1)",
    style: ["Say 2 or 3 sentences, about 30 words in all.", "Use natural everyday expressions and common phrasal verbs, but avoid rare words."] },
  advanced: { label: "고급", maxWords: 45, maxFull: 3, desc: "upper-intermediate to advanced (B2-C1)",
    style: ["Say 2 or 3 sentences, about 35 words in total.", "Talk like a friendly native speaker, with natural idioms and varied vocabulary."] }
};
function tutorLevelId() { let v = null; try { v = localStorage.getItem("tutorLevel"); } catch (e) {} return TUTOR_LEVELS[v] ? v : "beginner"; }
const tutorLevel = () => TUTOR_LEVELS[tutorLevelId()];
/** 좋은 회화 상대처럼 말하는 규칙 (모든 수준 공통 + 수준별 길이·어휘).
 *  묻기만 하는 인터뷰가 아니라 친구처럼: 들은 말에 반응 → 가끔 내 얘기 조금 → 쉬운 질문 하나 */
function tutorStyle() {
  return [
    "How to talk:",
    "- Start every reply with ONE of these short reactions as its own sentence, picking one that really fits what the student said (happy news, something interesting, bad news, something cute or funny, or something you agree with). Mix them up a lot: don't reuse a reaction you used in your last several replies. Reactions: " + TUTOR_REACTIONS.map(x => `\"${x}\"`).join(", ") + ". Then go on.",
    "- Chat like a friend, not an interviewer. React to the exact thing the student just said (not a general \"That's great!\"), sometimes add one short thing about yourself (an opinion or a small experience), then ask ONE easy question that follows from it. Keep your turns short so the student talks more than you.",
    "- If the student asks you something, first give a real, personal answer, then ask back.",
    "- Stay on a topic for a few turns by asking about details. When it runs out, move on through something already said (\"Speaking of food, ...\"). Remember what the student tells you (names, plans, likes, problems) and bring it up again later when it fits.",
    "- If the answer is very short (\"Yes.\", \"Fine.\"), react and ask an easier, more concrete follow-up. If the student says \"I don't know\" or seems stuck, make it easier: give two choices (\"Coffee or tea?\") or a short example answer they can copy.",
    "- The student is usually speaking through speech recognition, so a word can come out wrong. Go with the most likely meaning. Only if a sentence makes no sense at all (not for grammar mistakes), ask one short check question (\"Sorry, did you say Busan?\") instead of saying you don't understand.",
    "- If the student makes a mistake, do not point it out (a corrected sentence is shown to them separately). Reply naturally to what they meant, and where it fits, use the correct form of their words in your own sentence.",
    "- If the student writes in Korean or says they don't know how to say something, give a simple English way to say it, starting with \"You can say:\", and encourage them to try it.",
    "- If the student asks what a word means, explain it simply in English with a short example.",
    ...tutorLevel().style.map(x => "- " + x),
    "- Don't repeat yourself, and don't start two replies the same way. Speak naturally like a real person talking out loud. No lists, no emojis, no markdown, no notes in brackets, no Korean."
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
  return `You are ${tutorName()}, a warm, encouraging English conversation partner and teacher. ${tutorChar().about} Keep these facts about yourself consistent (small everyday details that fit them are fine). ` +
    "Stay in character and don't bring up being an AI, but if the student sincerely asks whether you are an AI, say yes in a few friendly words and keep chatting.\n" +
    `Your student is a Korean adult at the ${tutorLevel().desc} level who wants to get comfortable speaking English. ` +
    "Chat about everyday life: the student's day, food, work, hobbies, family, weekend plans, travel and feelings, and follow what they're interested in.\n" +
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
    "How are you feeling this morning?", "What did you have for breakfast?", "Is today a busy day for you?"],
  afternoon: ["How's your day going so far?", "What did you have for lunch today?", "Are you busy today?", "What have you been up to today?",
    "Are you taking a break right now?", "What's the best thing that's happened so far today?"],
  evening: ["How was your day?", "What did you do today?", "Did anything fun happen today?", "What did you have for dinner?",
    "Are you tired after a long day?", "What are you going to do tonight?", "What was the best part of your day?"],
  night: ["You're up late! What are you up to?", "Can't sleep? How was your day?", "Are you a night owl?", "What was the best part of your day?"],
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
  deep: ["If you could live in any country, which one would you choose?", "What's a skill you'd love to learn someday?", "What's the best trip you've ever taken?",
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
// 진짜 질문: 의문사·조동사로 시작 ("Oh, you went to Jeju?" 같은 되묻기는 아님) · 고르기 질문: "Or tea?", "... K-pop or pop songs?"
// 앞에 붙는 짧은 반응 ("Oh nice, …", "That sounds fun, …")은 건너뛰고 본다
const TUTOR_Q_OPENER = String.raw`(?:(?:oh|ah|aw|wow|hmm+|mm+|so|well|okay|ok|and|but|by the way|nice|cool|great|awesome|yeah|yes|yep|hey|haha|wait|really|alright|sure|that sounds \w+|sounds \w+|oh \w+)[,!.]?\s+)*`;
// 되묻기·감탄 질문 ("Oh, is that so?", "Did you?", "Isn't that amazing?", "How cool is that?")은 진짜 질문으로 치지 않는다 (뒤에 오는 진짜 질문까지 말하게)
const TUTOR_ECHO_Q = /^(?:(?:oh|ah|wow|really|so|well)[,!.]?\s+)*(?:(?:do|does|did|are|is|was|were|have|has|can|could|will|would)\s+(?:you|it|that|they|he|she|we)(?:\s+(?:so|right|true|really))?|is that (?:so|right|true)|(?:is|was)n'?t (?:it|that)\b.*|how \w+ (?:is|was) that|can you believe (?:it|that))[?!.]*["”']?$/i;
const TUTOR_REAL_Q = new RegExp("^" + TUTOR_Q_OPENER + String.raw`(?:what|what's|where|where's|when|who|who's|why|how|how's|which|whose|do|does|did|are|is|was|were|have|has|had|can|could|would|will|should|shall|may|any|\w+n't)\b`, "i");
const tutorIsRealQuestion = x => { const t = (x || "").replace(/’/g, "'").trim(); return tutorIsQuestion(t) && TUTOR_REAL_Q.test(t) && !TUTOR_ECHO_Q.test(t); };
const tutorIsChoiceQ = x => !!x && tutorIsQuestion(x) && /^or\b/i.test(x.trim());
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
    .replace(/\*\s*(laugh|giggle|smile|grin|nod|chuckle|sigh|wink|wave|clap|gasp)[a-z]*\b[^*]{0,20}\*/gi, "")   // *giggles* 같은 지문 (강조한 *really*는 글자만 남긴다)
    .replace(/\^\^|\^_\^|[:;]-?[)(DPp](?![a-z])/g, "")
    .replace(/[*_#`~]/g, "")
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(/\([^)]*\)|\[[^\]]*\]/g, "")
    .replace(/[가-힣ㄱ-ㅎ]+/g, "")
    .replace(/\s+/g, " ").replace(/([.!?])\s+[.!?,]+(?=\s|$)/g, "$1").replace(/\s+([,.!?])/g, "$1").trim();   // 지운 말 뒤에 홀로 남은 문장부호도 정리
  const wrapped = s.match(/^["“]([^"“”]*)["”]$/);           // 답 전체를 감싼 따옴표만 벗긴다 (안쪽 인용·아포스트로피는 그대로)
  if (wrapped) s = wrapped[1].trim();
  s = s.replace(/^[\s,.;:!?-]+/, "").trim();
  const sentences = (tutorProtectDots(s).match(/[^.!?]+[.!?]+["”']?|[^.!?]+$/g) || []).map(x => tutorRestoreDots(x).trim()).filter(Boolean);
  const lv = tutorLevel();
  const wc = x => x.split(" ").length;
  // 질문은 하나만: 첫 진짜 질문까지 ("Or tea?" 같은 고르기는 함께). 진짜 질문이 없으면 마지막 질문
  let qs = sentences.findIndex(tutorIsRealQuestion);
  if (qs < 0) sentences.forEach((x, i) => { if (tutorIsQuestion(x) && !TUTOR_REACTIONS.includes(x)) qs = i; });   // ("Oh, really?" 같은 첫 반응은 질문으로 치지 않는다)
  const qe = qs >= 0 && tutorIsChoiceQ(sentences[qs + 1]) ? qs + 1 : qs;
  const qWords = qs >= 0 ? sentences.slice(qs, qe + 1).reduce((n, x) => n + wc(x), 0) : 0;
  const out = []; let full = 0, words = 0;
  for (let i = 0; i < sentences.length; i++) {
    const sen = sentences[i];
    if (i === qs) { out.push(...sentences.slice(qs, qe + 1)); break; }   // 대화를 이어 가는 질문은 늘 남긴다 (학습자가 대답할 거리)
    const reserve = qs > i ? qWords : 0;
    if (out.length && (words + wc(sen) + reserve > lv.maxWords || full >= lv.maxFull)) {
      if (qs > i) continue;                              // 질문 앞의 긴 말은 건너뛰고 질문은 살린다
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
  const askedName = /\b(your name|who are you|call you|introduce yourself)\b/i.test(learner || "");
  const kept = sents.filter(x => {
    const w = words(x);
    if (!w.length) return false;
    if (w.length >= 3 && w.filter(t => lw.has(t)).length / w.length >= 0.8 && !(qs.length === 1 && qs[0] === x)) return false;   // 내 말을 따라 한 문장은 뺀다 (하나뿐인 질문은 남긴다)
    // 앞에서 한 말과 같으면 뺀다. 다만 하나뿐인 (짧지 않은) 질문은 남긴다 (질문 없이 "Sure!"만 남지 않게)
    if (!askedRepeat && prev.has(tutorNorm(x)) && !(qs.length === 1 && qs[0] === x && w.length >= 4)) return false;
    if ((prevSays || []).length && !askedName && /\b(i'm|i am) (emma|jay)\b/i.test(x)) return false;
    return true;
  });
  return kept.length ? kept.map(x => x.trim()).join(" ") : (strict ? "" : clean);
}

// ---------- 교정 ----------
// 학습자가 한 문장마다 Gemini에게 고칠 데가 있는지 묻는다 (답과 동시에 따로 요청해서 대화가 느려지지 않게).
// 고칠 문장과 한국어 한 줄 이유를 JSON으로 받는다
// problems를 먼저 적게 해서(무엇이 틀리고 어색한지 짚은 뒤) 판단·고친 문장을 쓰게 한다 → 더 정확하다
const TUTOR_FIX_SCHEMA = {
  type: "OBJECT",
  properties: { problems: { type: "ARRAY", items: { type: "STRING" } }, ok: { type: "BOOLEAN" }, better: { type: "STRING" }, why: { type: "STRING" } },
  required: ["problems", "ok"],
  propertyOrdering: ["problems", "ok", "better", "why"]
};
function tutorFixMessages(text, before) {
  return [
    { role: "system", content: [
      "You are a careful English teacher. A Korean adult learner just said one sentence in a casual everyday conversation. Check it the way a native speaker hears it.",
      "1) In 'problems', list every issue in a few English words each (empty list if none). Check: articles (a/an/the), tense, plural -s, subject-verb agreement, missing be-verb or subject, prepositions, word order, word form (bored/boring, interesting/interested), countable/uncountable, wrong or Konglish words, missing words, and phrasing that is understandable but not what a native speaker would say in daily conversation.",
      "2) ok=true only if the problems list is empty: the sentence is grammatical AND sounds natural in casual spoken English. Casual but correct speech (contractions, short answers like \"Yes.\", \"Me too.\", \"Not really.\") is fine. Do not change a natural sentence just to make it fancier.",
      "3) If ok=false, write 'better': ONE sentence a friendly native speaker would actually say in everyday conversation with the same meaning. Fix every problem, keep the learner's words and meaning as much as possible, and keep it simple (no rare words). It must be fully grammatical.",
      "4) 'why': the main fix in short Korean (under 25 characters) that names the point, e.g. \"과거형 went\", \"관사 the 필요\", \"home 앞엔 to 없이\", \"be동사 빠짐\", \"very는 동사 앞에 못 써요\".",
      "The text comes from speech recognition: ignore capital letters, punctuation and missing periods, and don't change a word only because it might be misheard.",
      "Examples:",
      "\"I go to park yesterday\" -> ok=false, better \"I went to the park yesterday.\", why \"과거형 went · 관사 the\"",
      "\"I fine\" -> ok=false, better \"I'm fine.\", why \"be동사 빠짐\"",
      "\"I very like it\" -> ok=false, better \"I really like it.\", why \"very 대신 really\"",
      "\"I'm going to my home\" -> ok=false, better \"I'm going home.\", why \"home 앞엔 to my 없이\"",
      "\"I ate a lunch with my friend\" -> ok=false, better \"I had lunch with my friend.\", why \"lunch엔 a 없이 · had\"",
      "\"Yes, I did. It was fun.\" -> ok=true"
    ].join("\n") },
    { role: "user", content: (before ? `The tutor said: "${before}"\n` : "") + `Learner's sentence: "${text}"` }
  ];
}
const TUTOR_FIX_OPTS = { temperature: 0, maxTokens: 300, schema: TUTOR_FIX_SCHEMA, chain: "fix", thinking: "LOW" };   // 첨삭은 대화와 따로 오니 더 좋은 모델로, 조금 더 생각해서   // 첨삭은 대화와 따로 오니 조금 더 생각해서 정확하게
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
  if (a === b || tutorLooseWords(original).join(" ") === tutorLooseWords(c).join(" ")) return "";   // 대소문자·문장부호·숫자 표기·줄임말만 다르면 고칠 것 없음
  const aw = a.split(" "), bw = b.split(" ");
  if (bw.length > aw.length * 2 + 5 || bw.length < aw.length / 2) return "";   // 아예 다른 문장은 버린다
  const common = aw.filter(w => bw.includes(w)).length;
  if (common < Math.ceil(aw.length * 0.4)) return "";                     // 원래 문장과 겹치는 말이 너무 적으면 버린다 (자연스럽게 고친 표현은 조금 더 바뀔 수 있다)
  return c;
}
/** 짧은 대답(Yes, Thank you 등)은 고칠 게 거의 없으니 건너뛴다 */
function tutorNeedsCheck(text) { return tutorNorm(text).split(" ").filter(Boolean).length >= 2; }

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
  tutorQuietAsked = 0; tutorQuietTurn = -1; tutorPausedAt = 0; tutorUnanswered = null; tutorRetryLast = null; tutorKoTarget = null;
  if (tutorHintsUsed()) tutorPrepareHints();
  tutorHeardAll = false;
  tutorClassicGreet(token, greet);
}
/** 예전 방식 첫 인사 (기기 목소리) */
function tutorClassicGreet(token, greet) {
  speakTutor(greet, token).then(ok => { if (ok) tutorHeardAll = true; tutorAfterSpeak(token); });
  // 인사를 들려주는 동안 조용할 때 할 말과 인사의 질문만 따로 목소리를 미리 만들어 둔다 (말이 막히면 바로 건네게)
  if (tutorUseNatural()) tutorTtsFetch(greet, false).ready.then(() => {
    if (token !== tutorSessionToken) return;
    tutorTtsFetch(tutorTurnPick(TUTOR_NUDGES, true), false);
    const gq = tutorSplitSentences(greet).filter(tutorIsQuestion).pop();
    if (gq) tutorTtsFetch(gq, false);
  });
}

/** 학습자 문장 보내기 (음성 인식 결과 / 입력창) */
async function sendTutorText(text) {
  text = (text || "").trim();
  if (!text || !tutorReady() || tutorBusy) return false;
  stopTutorSpeech();
  tutorQuietTries = 0; tutorRecMissCount = 0; tutorPausedAt = 0; tutorUnanswered = null; tutorRetryLast = null;
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();   // 듣는 동안 쉬던 재생 장치를 미리 깨워 둔다 (답 소리가 바로 나게)
  const token = tutorSessionToken;
  const myBubble = addTutorBubble("me", text);
  const note = tutorRecordLearner(text, myBubble);
  await tutorReply(token, { text, bubble: myBubble }, { note });
  return true;
}
/** 학습자가 한 말을 기록한다: 말풍선·교정 확인·노트 표현·대화 기록 (돌려주는 값: 이번 답에만 붙일 안내) */
function tutorRecordLearner(text, myBubble) {
  const token = tutorSessionToken;
  const fromHint = !!tutorHintTarget && tutorSimilarity(text, tutorHintTarget) >= 0.85;   // 힌트 문장을 그대로 말했다
  if (tutorHintTarget) { const inp = tutorEl("tutor-input"); if (inp && inp.value.trim() === tutorHintTarget) inp.value = ""; tutorHintTarget = ""; }   // 말로 보냈어도 지난 힌트는 치운다
  tutorLearnerLines.push(text);
  const before = tutorSaidLines[tutorSaidLines.length - 1];
  const item = { text, bubble: myBubble, fix: undefined, why: "", check: null, before };
  tutorLearnerItems.push(item);
  if (fromHint) item.fix = ""; else tutorCheckItem(item, before, token);   // 답과 동시에 교정 확인 (고칠 게 있으면 내 말풍선 아래에 팁 · 힌트 문장은 앱이 준 것이라 고치지 않는다)
  tutorCheckNoteUse(text, myBubble);
  // 한국어로 물어본 표현을 바로 써 봤으면: 카드에 표시하고, 튜터가 짧게 반가워한 뒤 이어 간다
  const note = tutorTurnNote(text);
  if (note && tutorKoTarget) { const nx = tutorKoTarget.card.querySelector(".tutor-ko-next"); if (nx) nx.textContent = "✅ 잘 말했어요!"; tutorNoteMark(tutorKoTarget.en, "used"); }
  tutorKoTarget = null;
  tutorMessages.push({ role: "user", content: text });
  tutorHintShown = false; renderTutorHint();
  return note;
}
// 한국어 도움으로 알려 준 표현 { en, card } (학습자가 바로 그 말을 하면 튜터가 알아보고 반가워한다)
let tutorKoTarget = null;
const TUTOR_KO_USED_NOTE = "(The student just used an English expression you taught them a moment ago. Start with a very short, warm reaction to that (2-4 words, like \"Yes, perfect!\"), then reply naturally to what they said.)";
/** 이번 말에만 붙일 안내 (없으면 "") */
function tutorTurnNote(text) { return tutorKoTarget && tutorCovers(text, tutorKoTarget.en) >= 0.8 ? TUTOR_KO_USED_NOTE : ""; }
function sendTutorTyped() {
  // 듣는 중에 ➤: 지금까지 들은 말을 바로 보낸다 (녹음 방식은 녹음을 끝내고 받아써서 보낸다)
  if (tutorMic && tutorMic.heardText && tutorMic.heardText()) { tutorMic.user = true; tutorMic.stop(); return; }
  if (tutorRecRec && !tutorEl("tutor-input").value.trim()) { tutorRecRec.user = true; tutorRecRec.stop(); return; }
  const inp = tutorEl("tutor-input");
  const t = inp.value;
  if (!t.trim() || !tutorReady()) return;
  tutorCancelListening();
  inp.value = "";
  if (/[가-힣]/.test(t)) inp.blur();
  if (tutorBusy) { setTutorStatus(`${tutorName()} 말이 끝나면 보낼게요`, "thinking"); tutorSendTypedWhenFree(t, tutorSessionToken); return; }   // 답을 만드는 중이면 끝나자마자 보낸다
  tutorSendTyped(t);
}
function tutorSendTyped(t) {
  if (/[가-힣]/.test(t)) { tutorHelping = true; tutorKoreanHelp(t.trim()); return; }   // 한국어로 쓰면 영어 표현을 알려 준다
  sendTutorText(t);
}
function tutorSendTypedWhenFree(t, token, tries = 0) {
  if (token !== tutorSessionToken || !tutorReady() || tries > 200) { const inp = tutorEl("tutor-input"); if (inp && !inp.value.trim()) inp.value = t; return; }   // 그사이 대화가 바뀌었으면 입력칸에 되돌려 둔다
  if (tutorBusy || tutorHelping) { setTimeout(() => tutorSendTypedWhenFree(t, token, tries + 1), 150); return; }
  tutorCancelListening();
  tutorSendTyped(t);
}
/** 문장 하나 교정 확인 → 고칠 게 있으면 내 말풍선 아래에 팁 (실패해도 대화는 그대로, 피드백 때 다시 시도) */
let tutorLastCheckErr = null;
// 같은 말의 교정 요청은 한 번만 (피드백 때 다시 확인해도 받아 둔 결과를 쓴다)
const tutorFixCache = new Map();
function tutorFixFetch(text, before) {
  const k = tutorNorm(text) + "|" + (before || "");
  if (!tutorFixCache.has(k)) {
    const p = geminiGenerate(tutorFixMessages(text, before), TUTOR_FIX_OPTS);
    tutorFixCache.set(k, p);
    p.catch(() => { if (tutorFixCache.get(k) === p) tutorFixCache.delete(k); });   // 실패한 건 다음에 다시
    while (tutorFixCache.size > 30) tutorFixCache.delete(tutorFixCache.keys().next().value);
  }
  return tutorFixCache.get(k);
}
function tutorCheckItem(item, before, token) {
  if (!tutorNeedsCheck(item.text)) { item.fix = ""; return Promise.resolve(); }
  const conv = tutorConvId;
  item.check = tutorFixFetch(item.text, before)
    .then(out => {
      const r = parseTutorFix(item.text, out);
      if (r.unknown) { item.fix = undefined; tutorFixCache.delete(tutorNorm(item.text) + "|" + (before || "")); return; }   // 답이 깨졌으면 '실수 없음'으로 치지 않고 다음에 다시 묻는다 (피드백 때)
      item.fix = r.better; item.why = r.why;
      if (r.better && conv === tutorConvId && item.bubble && item.bubble.isConnected && !item.tipped) { item.tipped = true; addTutorTip(item.bubble, r.better, r.why, item.text); }
    })
    .catch(e => { console.warn("교정 확인 실패", e); item.fix = undefined; tutorLastCheckErr = e; })
    .finally(() => { item.check = null; });
  return item.check;
}

// ---------- 미리 답 받기 ----------
// 말이 잠깐 멈추면 ('말 끝 기다리기'가 끝나기 전에) 지금까지 들은 말로 답과 첫 문장 목소리를 미리 만들기 시작한다.
// 그 말이 그대로 보내지면 받아 둔 답을 이어 써서 기다림이 거의 없고, 말을 더 하면 버린다.
const TUTOR_SPEC = { ms: 400, dangling: 1600, max: 2 };   // 이만큼 조용하면 시작 (말이 이어질 낱말로 멈췄으면 더 기다린다) · 한 번 말하는 동안 최대 횟수
let tutorSpec = null;   // { key, note, token, base, len, raw, result, err, dead, adopted, subs, abort, clips }
function tutorSpecDrop() {
  const s = tutorSpec; tutorSpec = null;
  if (!s || s.adopted) return;
  s.dead = true;
  try { s.abort.abort(); } catch (e) {}
  s.clips.forEach(tutorTtsDrop);                     // 미리 만들던 목소리도 그만 (진짜 답의 목소리가 그 뒤에 줄 서지 않게)
}
function tutorSpeculate(text) {
  text = (text || "").trim();
  const key = tutorNorm(text);
  if (!key || tutorBusy || tutorPractice || tutorHelping || !tutorReady() || !tutorMessages.length) return;
  const note = tutorTurnNote(text);
  const s0 = tutorSpec;
  if (s0 && !s0.dead && s0.key === key && s0.note === note && s0.token === tutorSessionToken && s0.base === tutorMessages && s0.len === tutorMessages.length) return;   // 이미 받는 중
  tutorSpecDrop();
  const s = tutorSpec = { key, note, token: tutorSessionToken, base: tutorMessages, len: tutorMessages.length, raw: "", err: null, dead: false, adopted: false,
    subs: new Set(), abort: new AbortController(), clips: [] };
  const prevSays = tutorSaidLines.slice(-2);
  let voiced = false, voiced2 = false, rested = false;
  const pre = x => { if (!tutorTtsCache.has(tutorTtsKey(x, false))) s.clips.push(tutorTtsFetch(x, false)); };
  // 답이 다 왔으면 남은 문장 목소리도 미리 (보내기 전에 만들어 두면 첫 소리·문장 사이가 짧다).
  // 둘째 문장은 빠른 기기에서만 (말이 이어지면 만들던 목소리가 다음 답을 늦출 수 있어서)
  const voiceRest = raw => {
    if (rested || s.dead || s.token !== tutorSessionToken || !tutorUseNatural()) return;
    rested = true;
    tutorSplitSentences(tutorPolish(cleanTutorSay(raw), text, prevSays)).slice(0, 2).forEach((x, i, arr) => {
      if (i === 1 && !(((KokoroVoice.rtf() || 1) <= 0.5 || TUTOR_REACTIONS.includes(arr[0])) && tutorWords(x).length <= 12)) return;
      (i === 0 ? tutorVoicePieces(x) : [x]).forEach(pre);
    });
  };
  const msgs = tutorMessages.concat([{ role: "user", content: text }], note ? [{ role: "user", content: note }] : []);
  s.result = geminiStream(tutorContext(msgs), TUTOR_REPLY_OPTS, raw => {
    if (s.dead) return;
    s.raw = raw;
    s.subs.forEach(f => f(raw));
    if (s.adopted) return;
    // 첫 문장 목소리도 미리 (진짜 답과 같은 문장이면 만들어 둔 걸 그대로 튼다)
    if (tutorUseNatural()) {
      const fin = tutorSplitSentences(tutorPolish(tutorFinishedSentences(cleanTutorSay(raw), raw), text, prevSays, true));
      if (!voiced && fin[0]) { voiced = true; tutorVoicePieces(fin[0]).forEach(pre); }
      // 첫 문장이 저장해 둔 반응이면 엔진이 비어 있으니 둘째 문장도 끝나는 대로 바로 (반응 뒤 쉼이 짧게)
      if (!voiced2 && fin[1] && TUTOR_REACTIONS.includes(fin[0])) { voiced2 = true; tutorVoicePieces(fin[1]).forEach(pre); }
    }
    if (tutorReplyDone(raw)) { voiceRest(raw); s.abort.abort(); }   // 답이 다 왔다 (더 받지 않는다)
  }, s.abort.signal);
  s.result.then(() => { if (!s.adopted) voiceRest(s.raw); }, e => { s.err = e; });
}
/** 답 받기: 미리 받아 둔 답이 이 말에 맞으면 그걸 이어 쓰고, 아니면 새로 요청한다 (note: 이번 답에만 붙이는 안내, 기록에는 남기지 않는다) */
function tutorReplyStream(text, onText, signal, note) {
  const s = tutorSpec; tutorSpec = null;
  const fits = s && text && !s.dead && !s.err && s.key === tutorNorm(text) && (s.note || "") === (note || "") &&
    s.token === tutorSessionToken && s.base === tutorMessages && s.len === tutorMessages.length - 1;
  if (!fits) {
    if (s) { tutorSpec = s; tutorSpecDrop(); }
    return geminiStream(tutorContext().concat(note ? [{ role: "user", content: note }] : []), TUTOR_REPLY_OPTS, onText, signal);
  }
  s.adopted = true;
  signal.addEventListener("abort", () => s.abort.abort(), { once: true });
  if (s.raw) onText(s.raw);
  s.subs.add(onText);
  return s.result;
}

/** 답 만들기 → 말풍선 → 소리 내어 읽기
 *  - 글자가 오는 대로 보여 주고, 끝난 문장부터 바로 읽기 시작한다
 *  - 진짜 질문을 마치면 더 받지 않고 멈춘다
 *  opts.note: 이번 답에만 붙이는 안내 (기록에는 남기지 않는다) · opts.quiet: 못 받아도 알리지 않는다 (조용할 때 다시 묻기) */
async function tutorReply(token, learner, opts = {}) {
  tutorBusy = true;
  tutorHeardAll = false;
  setTutorStatus("생각 중…", "thinking");
  const bubble = addTutorBubble("tutor", "…");
  const bubbleText = bubble.querySelector(".tutor-text");
  const abort = new AbortController();
  tutorAbort = abort;
  let shown = "", stopped = false;
  const voice = tutorSpeechQueue(token);
  const prev = () => tutorSaidLines.slice(-2);
  const said0 = learner && learner.text;
  const msgs = tutorMessages;                        // 이 대화의 기록 (새 대화가 시작되면 바뀐다)
  // 5초가 지나도 첫 글자가 없으면 기다리고 있다는 걸 알려 준다 (먹통처럼 보이지 않게)
  const slowNote = setTimeout(() => { if (!shown && token === tutorSessionToken && tutorBusy) setTutorStatus("응답이 늦어요… 조금만 기다려 주세요", "thinking"); }, 5000);
  try {
    await tutorReplyStream(said0, raw => {
      if (stopped || token !== tutorSessionToken) return;
      shown = raw;
      const clean = cleanTutorSay(shown);
      const live = tutorPolish(clean, said0, prev(), true);
      bubbleText.textContent = live || "…";   // (맨 아래를 보고 있으면 tutorLogFollow가 따라간다)
      voice.upTo(tutorPolish(tutorFinishedSentences(clean, shown), said0, prev(), true));
      if (tutorReplyDone(raw)) { stopped = true; abort.abort(); }
    }, abort.signal, opts.note);
  } catch (e) {
    clearTimeout(slowNote);
    if (tutorAbort === abort) tutorAbort = null;
    console.warn("튜터 답 생성 실패", e);
    voice.cancel();
    if (token !== tutorSessionToken || (e && e.name === "AbortError")) {
      // 답을 받기 전에 피드백을 열거나 화면을 떠났다: 빈 말풍선을 치우고, 돌아오면 그 말에 새로 답한다
      if (msgs === tutorMessages && bubble.isConnected) {
        bubble.remove();
        const last = msgs[msgs.length - 1];
        if (last && last.role === "user") { msgs.pop(); if (learner) tutorUnanswered = learner; }
      }
      tutorBusy = false;
      return;
    }
    if (opts.quiet) { bubble.remove(); tutorBusy = false; if (tutorHintShown) renderTutorHint(); tutorAfterSpeak(token); return; }   // 다시 묻기를 못 받았으면 조용히 다시 듣는다
    // 답을 못 한 문장은 대화 기록에서 빼서 다음 말이 자연스럽게 이어지게 한다
    const last = tutorMessages[tutorMessages.length - 1];
    if (last && last.role === "user") tutorMessages.pop();
    // 잠깐의 문제(늦음·서버 혼잡·연결 끊김)면 튜터가 영어로 "다시 말해 줄래요?" 한다 (목소리는 기기 안에서 만들어서 인터넷이 없어도 된다)
    const transient = geminiTransient(e), offline = transient && (e.reason === "OFFLINE" || navigator.onLine === false);
    const line = transient ? (offline ? TUTOR_OFFLINE : tutorTurnPick(TUTOR_LOST)) : "(답을 받지 못했어요)";
    bubbleText.textContent = line;
    if (transient) bubble.onclick = () => tutorSpeakTap(line);
    const why = document.createElement("div");
    why.className = "tutor-err";
    why.textContent = geminiErrorText(e);
    bubble.appendChild(why);
    if (!transient) setTutorStatus(e && e.status === 429 ? "사용량이 다 찼어요 · 잠시 뒤 다시 보내기를 눌러 주세요" : "답을 못 받았어요 · 다시 보내기를 눌러 주세요", "");
    if (geminiKeyProblem(e)) { tutorSetKey(""); setTimeout(() => { renderTutorPage(); tutorAlert(geminiErrorText(e)); }, 0); }
    else if (last && last.role === "user") {
      // 같은 말을 다시 보내기 (말하거나 다시 입력하지 않아도 되게). 인터넷이 다시 연결되면 저절로
      const again = document.createElement("button"), conv = tutorConvId;
      again.className = "tutor-slow-btn";
      again.innerHTML = `<span aria-hidden="true">🔄</span> 다시 보내기`;
      const resend = () => {
        if (tutorRetryLast === resend) tutorRetryLast = null;
        if (tutorBusy || conv !== tutorConvId || !bubble.isConnected || tutorLastReal() !== bubble) { again.remove(); return; }
        tutorCancelListening();
        stopTutorSpeech();
        while (bubble.nextElementSibling) bubble.nextElementSibling.remove();   // 그 뒤에 건넨 짧은 말("Take your time.")도 치운다
        bubble.remove();
        tutorMessages.push(last);
        tutorReply(tutorSessionToken, learner);
      };
      again.onclick = ev => { ev.stopPropagation(); resend(); };
      bubble.appendChild(again);
      if (transient) tutorRetryLast = resend;      // 사용량 초과 등은 저절로 다시 보내지 않는다
    }
    tutorBusy = false;
    if (tutorHintShown) renderTutorHint();
    if (token !== tutorSessionToken || geminiKeyProblem(e)) return;
    if (transient) {
      if (offline) tutorSayLines(token, [line], () => setTutorStatus("인터넷이 끊겼어요 · 연결되면 이어서 답할게요", ""));
      else tutorSayLines(token, [line]);           // 말한 뒤 다시 듣는다
      return;
    }
    if (e && [429, 403, 404].includes(e.status)) return;   // 사용량 초과 등은 바로 다시 말해도 또 안 된다: 마이크를 켜지 않고 안내를 남겨 둔다
    tutorAfterSpeak(token);                        // 바로 다시 말할 수 있게 듣는다
    return;
  }
  clearTimeout(slowNote);
  if (tutorAbort === abort) tutorAbort = null;
  if (token !== tutorSessionToken) {
    // 답하는 도중에 피드백을 열거나 화면을 떠났다: 끝난 문장만 남긴다 ("What did" 같은 조각은 버린다).
    // 질문까지 못 받았으면 말풍선을 지우고, 돌아왔을 때 학습자 말에 새로 답한다
    if (msgs === tutorMessages && bubble.isConnected) {
      const clean = cleanTutorSay(shown);
      const fin = /[.!?]["”']?$/.test(clean) ? clean : tutorFinishedSentences(clean, shown);
      const part = tutorPolish(fin, said0, prev(), true);
      if (part && tutorSplitSentences(part).some(tutorIsQuestion)) {
        bubbleText.textContent = part; tutorSaidLines.push(part); msgs.push({ role: "assistant", content: part });
        bubble.onclick = () => tutorSpeakTap(part);
        addSlowButton(bubble, part);
        addTranslateButton(bubble, part);
      } else {
        bubble.remove();
        const last = msgs[msgs.length - 1];
        if (last && last.role === "user") { msgs.pop(); if (learner) tutorUnanswered = learner; }
      }
    }
    tutorBusy = false; return;
  }
  // 이미 소리 내어 읽은 문장은 길이 제한으로 빠졌어도 말풍선·기록에 남긴다 (들은 말 = 보이는 말 = 튜터가 기억하는 말)
  const kept = tutorPolish(cleanTutorSay(shown), said0, prev());
  const said = voice.said();
  let text = said.length ? [...said, ...tutorSplitSentences(kept || "").filter(x => !said.some(y => tutorNorm(y) === tutorNorm(x)))].join(" ") : kept;
  if (!text) {
    if (opts.quiet) { bubble.remove(); tutorBusy = false; if (tutorHintShown) renderTutorHint(); tutorAfterSpeak(token); return; }
    text = TUTOR_SAY_AGAIN;
  }
  tutorSaidLines.push(text);
  voice.upTo(text, true);     // 남은 문장까지 마저 읽는다
  bubbleText.textContent = text;
  bubble.onclick = () => tutorSpeakTap(text);
  addSlowButton(bubble, text);
  addTranslateButton(bubble, text);
  tutorMessages.push({ role: "assistant", content: text });
  tutorBusy = false;
  if (tutorHintsUsed()) tutorPrepareHints();   // 듣는 동안 다음에 할 말 힌트를 미리 만들어 둔다
  if (opts.quiet && tutorHintsUsed() && !tutorHintShown) { tutorHintShown = true; renderTutorHint(); }   // 말이 막힌 것 같으면 힌트도 펼쳐 준다
  if (await voice.finish()) tutorHeardAll = true;
  if (tutorUseNatural()) tutorTtsFetch(tutorTurnPick(TUTOR_NUDGES, true), false);   // 다음에 말이 막히면 건넬 말을 미리 (저장돼 있으면 바로 불러온다)
  tutorAfterSpeak(token);
}

/** 지금까지 끝난 문장들 (마지막 문장은 문장부호 뒤에 다음 글자가 와야 끝난 것으로 본다. 6.25나 Mr. 같은 점은 문장 끝이 아님) */
function tutorFinishedSentences(clean, raw) {
  const t = tutorProtectDots(clean);
  // 마지막 문장부호 뒤에 띄어쓰기가 이미 왔으면 마지막 문장도 끝난 것 (다음 문장이 화면에서 잘려도)
  if (raw && /[.!?]["”']?$/.test(t) && /[.!?]["”']?\s+\S*$/.test(raw)) return clean;
  // 느낌표·물음표로 끝났으면 다음 조각을 기다리지 않고 끝난 것으로 본다 ("Oh, nice!" 목소리를 바로 만들기 시작하게)
  if (raw && /[!?]["”']?$/.test(t) && /[!?]["”']?$/.test(raw.trim())) return clean;
  let end = -1;
  for (const m of t.matchAll(/[.!?]+["”']?(?=\s)/g)) end = m.index + m[0].length;
  return end < 0 ? "" : tutorRestoreDots(t.slice(0, end));
}

/** 튜터 목소리 줄: 문장이 끝나는 대로 받아 차례로 읽는다 (중간에 끊거나 새 대화가 시작되면 남은 문장은 읽지 않음) */
function tutorSpeechQueue(token, prepMsg = "생각 중…") {
  const my = ++tutorSpeechToken;
  let chain = Promise.resolve(), dead = false;
  const spoken = [], spokenN = new Set();           // 이미 줄에 넣은 문장 (비교는 대소문자·문장부호를 빼고: 따옴표 하나 차이로 두 번 읽지 않게)
  const alive = () => !dead && token === tutorSessionToken && my === tutorSpeechToken;
  let early = null;
  const q = {
    /** 읽을 문장이 text까지 늘었다: 아직 줄에 안 넣은 문장만 차례로 넣는다 (걸러 내기로 앞 문장이 바뀌어도 겹쳐 읽지 않음).
     *  문장이 끝나는 대로 바로 목소리를 만들기 시작한다 → 앞 문장을 읽는 동안 다음 문장이 만들어진다 */
    upTo(text, final) {
      if (!alive() || !text) return;
      const nat = tutorUseNatural();
      const parts = tutorSplitSentences(text).filter(x => !spokenN.has(tutorNorm(x)));
      q.say(parts, nat);
    },
    /** 줄에 넣은(들려준) 문장들 */
    said() { return spoken.map(x => x.replace(/^["“”]+|["“”]+$/g, "").trim()).filter(Boolean); },
    say(parts, nat) {
      if (!alive()) return;
      for (const part of parts) {
        const first = !spoken.length;
        tutorSplitSentences(part).forEach(x => { spoken.push(x); spokenN.add(tutorNorm(x)); });
        tutorSpeaking = true; tutorSayDevice = !nat;
        if (!tutorAudioPlaying()) tutorMarkPreparing(prepMsg);
        if (nat) {
          // 지금 만들기 시작해 두고, 차례가 오면 (다 되는 대로) 튼다. 첫 문장은 쉼표에서 나눠 앞부분부터 (첫 소리가 빨리 나게)
          for (const piece of first ? tutorVoicePieces(part) : [part]) {
            const clip = tutorTtsFetch(piece, false);
            chain = chain.then(() => alive() && tutorPlayClip(clip, piece, alive));
          }
        } else {
          chain = chain.then(async () => { if (alive()) { try { await tutorDeviceSpeak(part); } catch (e) {} } });
        }
      }
    },
    /** 다 읽을 때까지 기다린다 (끝까지 읽었으면 true, 중간에 끊겼으면 false) */
    async finish() {
      await chain;
      if (!alive()) return false;
      tutorSpeaking = false;
      setTutorStatus(tutorIdleMsg(), "");
      return true;
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
  // 진짜 질문을 마쳤으면 끝 ("Oh, you went to Jeju?" 같은 되묻기는 세지 않는다). 바로 뒤에 "Or tea?" 같은 고르기가 붙는지만 한 조각 더 본다
  const qi = fin.findIndex(tutorIsRealQuestion);
  if (qi >= 0) {
    if (qi < fin.length - 1) return true;
    const flat = t.replace(/\s+/g, " ").trim();
    const tail = flat.slice(tutorFinishedSentences(flat, raw).length).trim();
    return !(!tail || /^or?$/i.test(tail) || /^or\b/i.test(tail));
  }
  return fin.filter(x => !tutorIsQuestion(x) && x.split(/\s+/).length > 2).length >= tutorLevel().maxFull + 2;   // 너무 길어지면 그만
}

/** 모델에 보내는 대화: 40번 주고받기까지는 다 보낸다 (앞에서 들은 이름·일·계획을 잊지 않게).
 *  그보다 길면 처음 두 번 주고받은 말 + 최근 60개 (시스템 안내는 늘 맨 앞) */
function tutorContext(list = tutorMessages) {
  const sys = list[0], rest = list.slice(1);
  if (rest.length <= 80) return list;
  const head = rest.slice(0, 4);
  let tail = rest.slice(-60);
  while (tail.length && tail[0].role !== "user") tail = tail.slice(1);
  return [sys, ...head, ...tail];
}

// 천천히 듣기: 초보자가 못 알아들었을 때 같은 문장을 느리게 한 번 더
function addSlowButton(bubble, text) {
  const btn = document.createElement("button");
  btn.className = "tutor-slow-btn";
  btn.innerHTML = `<span aria-hidden="true">🐢</span> 천천히`;
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
  btn.innerHTML = `<span aria-hidden="true">🇰🇷</span> 해석`;
  btn.onclick = async e => {
    e.stopPropagation();
    tutorQuietTries = 0; if (tutorMic && tutorMic.poke) tutorMic.poke();   // 해석을 읽는 동안 튜터가 끼어들지 않게
    let box = bubble.querySelector(".tutor-trans");
    if (box && !box.dataset.err) { box.classList.toggle("hidden"); return; }
    if (box) box.remove();   // 못 했던 해석은 다시 해 본다
    box = document.createElement("div");
    box.className = "tutor-trans";
    box.textContent = "해석하는 중…";
    bubble.appendChild(box);
    try {
      box.textContent = await tutorTranslate(text);
    } catch (err) { box.dataset.err = "1"; box.textContent = "해석하지 못했어요. " + geminiErrorText(err); }
  };
  bubble.appendChild(btn);
}
/** 말풍선·🐢를 눌러 다시 듣기: 튜터가 답을 만드는 중이면 기다리게 한다 (그사이 소리를 내면 오는 답이 묻힌다) */
function tutorSpeakTap(text, slow) {
  if (tutorBusy) { setTutorStatus(`${tutorName()} 말이 끝나면 다시 눌러 주세요`, "thinking"); return; }
  tutorQuietTries = 0;
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
  if (!/[가-힣]/.test(text)) div.lang = "en";
  if (who !== "me") div.title = "누르면 다시 들어요";
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
  return div;
}
function addTutorTip(bubble, tip, why, said) {
  const t = document.createElement("div");
  t.className = "tutor-tip";
  t.innerHTML = `✏️ 이렇게 말하면 더 자연스러워요<br><b></b><span class="tutor-tip-why"></span>`;
  t.querySelector("b").lang = "en";
  tutorMarkChanges(t.querySelector("b"), said, tip);   // 바뀐 낱말에 표시
  if (why) t.querySelector(".tutor-tip-why").textContent = " · " + why;
  addPracticeButtons(t, tip);                       // 고친 문장을 직접 다시 말해 보게
  bubble.after(t);
  tutorNoteAdd({ en: tip, said, why, src: "fix" });   // (맨 아래를 보고 있으면 tutorLogFollow가 따라간다)
}
/** 고친 문장을 넣으면서 내 말과 달라진 낱말에 형광펜 표시를 한다 (무엇을 고쳤는지 한눈에) */
function tutorMarkChanges(el, said, better) {
  const a = tutorNorm(said).split(" ").filter(Boolean), toks = better.split(/(\s+)/), b = toks.map(x => tutorNorm(x));
  const idx = toks.map((x, i) => i).filter(i => b[i]);
  // 같은 순서로 겹치는 낱말 찾기
  const n = a.length, m = idx.length, dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = a[i] === b[idx[j]] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const same = new Set(), del = new Map(), tail = [];   // 빠진 낱말: 고친 문장의 어느 낱말 앞에서 빠졌는지
  const drop = (j, w) => { if (j < m) { if (!del.has(idx[j])) del.set(idx[j], []); del.get(idx[j]).push(w); } else tail.push(w); };
  for (let i = 0, j = 0; i < n;) {
    if (j < m && a[i] === b[idx[j]]) { same.add(idx[j]); i++; j++; }
    else if (j >= m || dp[i + 1][j] >= dp[i][j + 1]) { drop(j, a[i]); i++; }
    else j++;
  }
  const onlyDrops = idx.every(i => same.has(i)) && (del.size > 0 || tail.length > 0);   // 새로 넣은 낱말 없이 빼기만 했다
  const strike = ws => { const d = document.createElement("del"); d.textContent = ws.join(" "); el.appendChild(d); };
  el.textContent = "";
  toks.forEach((x, i) => {
    if (onlyDrops && del.has(i)) { strike(del.get(i)); el.appendChild(document.createTextNode(" ")); }
    if (b[i] && !same.has(i)) { const mk = document.createElement("mark"); mk.textContent = x; el.appendChild(mk); }
    else el.appendChild(document.createTextNode(x));
  });
  if (onlyDrops && tail.length) { el.appendChild(document.createTextNode(" ")); strike(tail); }
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
// 교정 비교용: 위와 같지만 ' 빠진 dont·im·its·cant는 그대로 둔다 (글로 쓴 이런 실수는 진짜로 고친 것)
const TUTOR_REAL_FIX = new Set(["its", "im", "dont", "cant"]);
const tutorLooseWords = x => tutorNorm(x).replace(/\b([ap]) m\b/g, "$1m").split(" ").filter(Boolean)
  .flatMap(w => /^\d{1,3}$/.test(w) ? tutorNumWords(+w).split(" ") : TUTOR_REAL_FIX.has(w) ? [w] : tutorExpand(w).split(" "));
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
function tutorStartPractice(target, box, quietIfSilent, tries = 0) {
  if (!tutorReady() || tutorTranscribing) return;
  if (tutorPractice && tutorPractice.box === box && (tutorMic || tutorRecRec)) { toggleTutorMic(); return; }   // 한 번 더 누르면 들은 데까지
  tutorCancelListening();
  stopTutorSpeech();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  tutorPractice = { target, box, quietIfSilent, tries };
  tutorPracticeShow(box, "🎤 듣고 있어요… 따라 말해 보세요", "", "listening");
  toggleTutorMic();
  if (!tutorMic && !tutorRecRec) tutorPracticeEnd("");     // 마이크를 못 켰으면 (안내 창은 이미 떴다)
}
/** 들은 말 처리: 다시 말해 보기 중이면 비교, 아니면 튜터에게 보낸다 */
function tutorHandleSaid(text) {
  const pr = tutorPractice;
  if (!pr) {
    // 녹음 받아쓰기는 한국어도 적어 온다: 한국어로 말했으면 영어 표현을 알려 주고, 섞인 '어·음' 같은 소리는 뺀다
    const ko = text.replace(/(^|\s)(어+|음+|으+음*|그+|아+|저기?|막|엄|흠|에)(?=[\s,.?!]|$)/g, " ");
    if ((ko.match(/[가-힣]/g) || []).length >= 2) { tutorHelping = true; tutorKoreanHelp(ko.replace(/\s+/g, " ").trim()); return; }
    const en = text.replace(/[가-힣ㄱ-ㅎ]+/g, " ").replace(/\s+/g, " ").trim();
    if (!en) { tutorRecMiss(tutorSessionToken); return; }
    sendTutorWhenFree(en);
    return;
  }
  tutorPractice = null;
  const token = tutorSessionToken;
  const score = tutorSimilarity(text, pr.target);
  // 🔊 듣기 뒤 저절로 켠 마이크에 전혀 다른 말을 했으면 따라 하기가 아니라 튜터에게 한 대답이다: 채점하지 않고 보낸다
  if (pr.quietIfSilent && !pr.tries && score < 0.5) { tutorPracticeShow(pr.box, "", "", ""); tutorHandleSaid(text); return; }
  const good = score >= 0.85;
  // 처음에 틀리면 튜터가 천천히 한 번 더 들려주고 다시 따라 하게 한다
  if (!good && !pr.tries && (!pr.quietIfSilent || score >= 0.5)) {   // (들어 보기 뒤 저절로 켠 마이크에 전혀 다른 말을 했으면 다시 들려주지 않는다)
    tutorPracticeShow(pr.box, "👂 한 번 더 들어 보고 따라 해 보세요", `들린 말: ${text}`, "");
    speakTutor(pr.target, token, true, { then: () => tutorCanAutoListen(token) && !tutorTypingNow() ? tutorStartPractice(pr.target, pr.box, true, 1) : tutorAfterSpeak(token) });
    return;
  }
  tutorPracticeShow(pr.box, good ? "✅ 완벽해요!" : score >= 0.6 ? "👍 거의 맞았어요!" : "🙂 괜찮아요, 다음에 또 해 봐요", good ? "" : `들린 말: ${text}`, good ? "good" : "");
  if (good) tutorNoteMark(pr.target, "practiced");
  setTutorStatus(good ? "잘했어요! 이제 대화를 이어 가요" : tutorIdleMsg(), "");
  // 연습을 마치면 짧게 칭찬하고 하던 질문으로 돌아간다
  setTimeout(() => {
    if (token !== tutorSessionToken || !tutorCallActive) return;
    if (!tutorCanAutoListen(token) || tutorTypingNow()) { tutorAfterSpeak(token); return; }
    const q = tutorPendingQuestion(), praise = tutorTurnPick(good ? TUTOR_PRAISE.good : TUTOR_PRAISE.try);
    tutorAddNudge(q ? praise + " " + q : praise);
    tutorSayLines(token, q ? [praise, q] : [praise]);
  }, 500);
}
/** 고친 문장·배운 표현 아래에 [🔊 듣기] [🎤 다시 말해 보기] */
function addPracticeButtons(box, target, plainListen) {
  const acts = document.createElement("div"); acts.className = "tutor-practice";
  acts.innerHTML = `<button class="tutor-slow-btn"><span aria-hidden="true">🔊</span> 듣기</button><button class="tutor-slow-btn tutor-practice-btn"><span aria-hidden="true">🎤</span> 다시 말해 보기</button><div class="tutor-practice-result hidden"></div>`;
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
  tutorPracticeShow(box, `${tutorName()} 말이 끝나면 다시 눌러 주세요`, "", "");
  return true;
}

// 한국어로 쓰면: 하고 싶은 말을 자연스러운 영어로 알려 주고, 튜터 목소리로 들려준 뒤 바로 영어로 말하게 한다 (대화에는 넣지 않음)
const TUTOR_KO_SCHEMA = { type: "OBJECT", properties: { en: { type: "STRING" } }, required: ["en"] };
async function tutorKoreanHelp(ko) {
  const token = tutorSessionToken, conv = tutorConvId, log = tutorEl("tutor-log");
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
    if (!en) throw new Error("다시 말하거나 적어 주세요.");
    const stale = token !== tutorSessionToken;            // 그사이 피드백을 열었거나 화면을 떠났다: 보여 주고 노트에는 넣되 말하지는 않는다
    const a = card.querySelector(".tutor-ko-a");
    a.innerHTML = `<div class="tutor-ko-label">✨ 영어로는 이렇게 말해요</div><b></b><div class="tutor-ko-next"></div>`;
    a.querySelector("b").textContent = en; a.querySelector("b").lang = "en";
    a.querySelector(".tutor-ko-next").textContent = `🎤 이제 ${tutorName()}에게 영어로 말해 보세요`;
    addPracticeButtons(a, en, true);
    a.querySelector(".tutor-practice-btn").remove();      // 여기서는 바로 튜터에게 말하는 게 연습이다
    log.scrollTop = log.scrollHeight;
    tutorNoteAdd({ en, ko, src: "ko" });
    if (conv === tutorConvId && card.isConnected) tutorKoTarget = { en, card };   // 학습자가 이 말을 하면 튜터가 알아보고 반가워한다
    if (stale) return;                                     // (다른 찾기가 진행 중일 수 있어 tutorHelping은 건드리지 않는다)
    tutorHelping = false;
    const sheetOpen = ["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); });
    if (sheetOpen || tutorBusy || tutorSpeaking) return;   // 판을 열었거나 튜터가 다른 말을 하는 중이면 소리 내지 않는다 (판을 닫으면·말이 끝나면 하던 대로 이어 간다)
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
  box.innerHTML = `<div class="tutor-report-title">📒 내 표현 노트 <small>${list.length}개${list.length > 30 ? " · 최근 30개" : ""}</small></div>`;
  if (!list.length) {
    const d = document.createElement("div"); d.className = "tutor-fb-note";
    d.textContent = `고친 문장과 배운 표현이 여기에 모여요. 다음 대화에서 이 표현을 써 볼 수 있게 ${tutorName()}가 도와줘요.`;
    box.appendChild(d); return;
  }
  list.slice(0, 30).forEach(n => {
    const row = document.createElement("div"); row.className = "tutor-note-row";
    row.innerHTML = `<div class="tutor-note-main"><b></b><small></small></div><span class="tutor-note-used"></span><button class="tutor-note-del" aria-label="노트에서 지우기">✕</button>`;
    row.querySelector("b").textContent = n.en;
    row.querySelector("small").textContent = n.ko || (n.said ? "← " + n.said : "");
    row.querySelector(".tutor-note-used").textContent = n.used ? `✓ ${n.used}번` : "";
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
  af_bella: { label: "밝고 생기 있는 ★", g: "f" }, af_heart: { label: "따뜻하고 편안한", g: "f" },
  af_nicole: { label: "속삭이듯 부드러운", g: "f" }, af_kore: { label: "차분하고 또렷한", g: "f" }, af_sarah: { label: "상냥한", g: "f" },
  am_puck: { label: "밝고 경쾌한 ★", g: "m" }, am_michael: { label: "다정하고 편안한", g: "m" },
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
  // 기본 남성 목소리를 '밝고 경쾌한'으로 바꿨다: 예전 기본(다정하고 자연스러운)에 있던 사람도 새 기본으로 (한 번만)
  if (!localStorage.getItem("tutorVoiceV6")) {
    if (localStorage.getItem("tutorVoice") === "am_michael") localStorage.removeItem("tutorVoice");
    localStorage.setItem("tutorVoiceV6", "1");
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
function tutorMarkPreparing(msg = TUTOR_PREP_MSG) {
  setTutorStatus(msg, "thinking");
  clearInterval(tutorPrepTimer);
  const my = tutorSpeechToken;
  const timer = tutorPrepTimer = setInterval(() => {
    if (!tutorSpeaking || my !== tutorSpeechToken) { clearInterval(timer); return; }   // 끊겼거나 다음 말로 넘어갔으면 손대지 않는다
    if (!tutorAudioPlaying()) return;
    clearInterval(timer);
    const st = tutorEl("tutor-status"), same = !st || st.textContent === msg;
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

// 첫 인사·목소리 들어 보기·정해 둔 짧은 말("Take your time." 등) 음성은 기기에 저장해 두고, 같은 문장이 다시 나오면 만들지 않고 바로 튼다. 최근 120개까지만
const TUTOR_GREET_CACHE = "faith-voice-tutor-greet";   // faith-voice로 시작해서 앱 업데이트 때 지워지지 않는다
const tutorGreetUrl = (text) => location.origin + "/__tutor-greet/k-" + tutorVoiceId() + "/" + encodeURIComponent(text);
const tutorPreviewText = () => `Hi, I'm ${tutorName()}! I'm so happy to talk with you today.`;
// 기기에 저장해 두는 음성: 첫 인사(지금 것·시작 화면에서 미리 고른 것), 목소리 들어 보기 문장, 정해 둔 짧은 말
const tutorPersistable = text => !!text && (text === tutorGreeting || (tutorNextGreeting && text === tutorNextGreeting.text) || text === tutorPreviewText() || tutorFixedLine(text));
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
    const keys = await cache.keys();                              // 오래된 것부터 지워 120개까지만 (반응 목소리 47개 + 인사 등)
    for (const k of keys.slice(0, Math.max(0, keys.length - 120))) await cache.delete(k);
  } catch (e) {}
}

/** 문장 → 음성 (기기 안에서 만든다. 같은 문장은 한 번만).
 *  돌려주는 clip은 만드는 중에도 쓸 수 있다: 다 되면 chunks에 소리가 들어가고 listeners를 부른다 */
function tutorTtsFetch(text, slow) {
  const key = tutorTtsKey(text, slow);
  if (tutorTtsCache.has(key)) return tutorTtsCache.get(key);
  const clip = { key, chunks: [], sampleRate: 24000, done: false, error: null, listeners: new Set(), skip: false, reqId: 0 };
  const emit = () => clip.listeners.forEach(f => f());
  const push = (wav, rate) => { clip.sampleRate = rate; clip.chunks.push(tutorTrimSilence(wav, rate)); clip.done = true; emit(); };   // 문장 하나가 통째로 온다 → 받자마자 '다 됨' (입 움직임을 미리 짜려면 재생 전에 알아야 한다)
  const voice = tutorVoiceId();
  clip.ready = (async () => {
    const saved = slow ? null : await tutorGreetLoad(text);
    if (saved) { push(saved.wav, saved.sampleRate); return; }
    try {
      if (clip.skip) throw new Error("skipped");
      const req = KokoroVoice.generate(text, voice, slow ? 0.8 : 1);
      clip.reqId = req.reqId || 0;
      tutorTtsPending++;
      let a;
      try { a = await req; } finally { tutorTtsPending--; setTimeout(tutorWarmReaction, 0); }
      if (!a || clip.skip) throw new Error("skipped");
      push(a.wav, a.sampleRate);
      if (!slow) tutorGreetSave(text, clip);
    } catch (e) {
      clip.error = e;
      if (tutorTtsCache.get(key) === clip) tutorTtsCache.delete(key);
      if (!clip.skip && !KokoroVoice.isLoaded()) tutorNaturalBroken = true;   // 엔진 자체를 못 열었으면 이번에는 기기 음성으로
    }
  })().finally(() => { clip.done = true; emit(); });
  tutorTtsCache.set(key, clip);
  while (tutorTtsCache.size > 100) tutorTtsCache.delete(tutorTtsCache.keys().next().value);
  return clip;
}
// 반응 목소리 미리 만들기: 튜터 답의 목소리를 다 만들어 두고 아직 말하는 중일 때(엔진이 노는 때) 한 번에 하나씩.
// 학습자가 말할 때는 만들지 않는다 (진짜 답 목소리가 그 뒤에 줄 서지 않게). 한 번 만든 건 기기에 저장돼 다음부터 바로
let tutorTtsPending = 0, tutorWarmBusy = false;
async function tutorWarmReaction() {
  if (tutorWarmBusy || tutorTtsPending || !tutorSpeaking || tutorBusy || tutorSpec || !tutorUseNatural()) return;
  tutorWarmBusy = true;
  try {
    for (const x of TUTOR_REACTIONS) {
      if (tutorTtsCache.has(tutorTtsKey(x, false))) continue;
      const saved = await tutorGreetLoad(x);
      if (saved) { tutorTtsFetch(x, false); continue; }                  // 저장해 둔 것은 바로 불러온다
      if (!tutorSpeaking || tutorTtsPending || tutorSpec) break;
      const clip = tutorTtsFetch(x, false); clip.warm = true;
      break;                                                             // 새로 만드는 건 한 번에 하나만
    }
  } finally { tutorWarmBusy = false; }
}
/** 아직 만드는 중인 목소리를 그만둔다 (줄을 서 있으면 건너뛰고, 다 만든 건 그대로 둔다) */
function tutorTtsDrop(clip) {
  if (!clip || clip.done) return;
  clip.skip = true;
  if (clip.reqId && KokoroVoice.skip) KokoroVoice.skip(clip.reqId);
  if (tutorTtsCache.get(clip.key) === clip) tutorTtsCache.delete(clip.key);
}
/** 답의 첫 문장이 길면 쉼표에서 둘로 나눠 앞부분 목소리부터 만든다 (목소리는 소리 길이에 비례해 오래 걸려서, 짧은 앞부분이 빨리 나온다).
 *  뒷부분은 앞부분을 들려주는 동안(쉼표 쉼 포함) 다 만들어질 때만 나눈다 — 이 기기의 목소리 만드는 속도로 따진다 (낱말당 약 0.3초, 앞뒤 빈 소리 약 1초) */
function tutorVoicePieces(sen) {
  if (!sen || tutorFixedLine(sen)) return [sen];            // 정해 둔 짧은 말은 저장해 둔 그대로
  const w = sen.trim().split(/\s+/);
  if (w.length < 6) return [sen];
  const r = Math.max(0.15, (typeof KokoroVoice !== "undefined" && KokoroVoice.rtf()) || 1);
  for (let i = 2; i <= w.length - 3; i++) {
    if (!/,$/.test(w[i - 1])) continue;
    if (r * (0.3 * (w.length - i) + 1) <= 0.3 * i + 0.55) return [w.slice(0, i).join(" "), w.slice(i).join(" ")];
  }
  return [sen];
}
/** Kokoro는 문장 앞뒤에 0.4~0.6초씩 아무 소리 없는 부분을 붙여 만든다 → 앞은 0.05초, 뒤는 0.2초만 남긴다
 *  (첫 소리가 바로 나고, 문장 사이가 1초씩 늘어지지 않게) */
function tutorTrimSilence(wav, sr) {
  const th = 0.003;
  let a = 0, b = wav.length - 1;
  while (a < wav.length && Math.abs(wav[a]) < th) a++;
  while (b > a && Math.abs(wav[b]) < th) b--;
  if (a >= b) return wav;
  const s = Math.max(0, a - Math.round(sr * 0.05)), e = Math.min(wav.length, b + 1 + Math.round(sr * 0.2));
  return s === 0 && e === wav.length ? wav : wav.slice(s, e);
}
/** 만든(또는 만드는 중인) 음성을 튼다. 못 만들었으면 기기 음성으로 읽는다 */
let tutorClipWaiting = false;   // 다음 문장 목소리가 아직 만들어지는 중 (그동안 말하는 얼굴을 잠깐 유지한다)
async function tutorPlayClip(clip, text, alive) {
  if (!clip.chunks.length && !clip.done) {
    tutorClipWaiting = true;
    await new Promise(r => { const f = () => { if (clip.chunks.length || clip.done) { clip.listeners.delete(f); r(); } }; clip.listeners.add(f); });
    tutorClipWaiting = false;
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
  // 문장 소리를 다 알고 시작하면, 말하는 영상의 시작 장면·재생 속도를 소리에 맞춰 미리 짠다 (첫 음절부터 맞게, 길어야 0.2초만 기다린다.
  // 말하는 얼굴이 이미 보이는 다음 문장들은 0.12초만 — 늦으면 그동안은 1배로 이어 가다 따라붙는다)
  const whole = clip.done && clip.chunks.length ? (clip.chunks.length === 1 ? clip.chunks[0] : tutorJoinChunks(clip.chunks)) : null;
  if (whole) {
    await Promise.race([TutorAvatar.prepare(whole, clip.sampleRate), new Promise(r => setTimeout(r, TutorAvatar.clip === "talk" ? 120 : 200))]);
    if (!alive()) return;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  const player = NeuralTTS.playStream();
  let i = 0;
  const feed = () => {
    if (!alive()) { player.end(); return; }
    const first = i === 0 && whole;
    while (i < clip.chunks.length) {
      const at = player.push(clip.chunks[i++], clip.sampleRate);
      if (first && i === 1 && at != null) TutorAvatar.speak(whole, clip.sampleRate, at);
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
  tutorPreviewDebounce = setTimeout(() => { const set = tutorEl("tutor-sheet-settings"); if (!tutorLobbyOpen() && !(set && !set.classList.contains("hidden"))) return; tutorPreviewVoice(true); if (tutorLobbyOpen()) tutorPrepGreeting(1500); }, 500);   // 연달아 바꾸면 마지막 것만 들려준다 (첫 인사도 새 목소리로 미리)
}

// ---------- 말하기 (튜터 목소리 + 입모양) ----------
/** 한 번 읽기 (끝까지 읽었으면 true) */
async function speakTutor(text, token, slow, opts) {
  if (token !== tutorSessionToken) return false;
  tutorCancelListening();                // 듣는 중이면 멈춘다 (튜터 목소리를 내 말로 알아듣지 않게)
  if (tutorSpeaking || tutorDeviceTalking) tutorSilenceAll();   // 앞 말이 아직 나거나 만들어지는 중이면 끊는다 (겹치지 않게)
  const my = ++tutorSpeechToken;
  tutorSpeaking = true;
  tutorMarkPreparing();
  try { await tutorSay(text, slow, () => token === tutorSessionToken && my === tutorSpeechToken); } catch (e) {}
  // 중간에 끊고 새로 말하거나 대화가 바뀌었으면 상태를 건드리지 않는다
  if (token !== tutorSessionToken || my !== tutorSpeechToken) return false;
  tutorSpeaking = false;
  setTutorStatus(tutorIdleMsg(), "");
  if (opts && opts.then) opts.then();    // 예: 고친 문장을 들려준 뒤에는 '다시 말해 보기'로 듣는다
  else tutorAfterSpeak(token);           // 다 말했으면 다시 듣는다
  return true;
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
  const typeIt = "\n\n마이크 없이도 아래 입력칸에 적어서 대화할 수 있어요.";
  if (env.inFrame && !env.inApp) { tutorAlert("마이크 사용이 막혀 있어요.\n이 화면을 담고 있는 바깥 페이지(앱)에서 마이크를 허락해야 해요." + typeIt); return; }
  if (env.inApp) {
    const app = env.inApp === "앱" ? "이 앱" : env.inApp;
    tutorAlert(`마이크 사용이 막혀 있어요.\n${env.android ? `휴대폰 설정 → 애플리케이션 → ${app} → 권한 → 마이크 '허용'` : `설정 앱 → ${app} → 마이크 켜기`} 후 다시 시도해 주세요.` + typeIt);
    return;
  }
  let how;
  if (env.android && env.standalone) how = "홈 화면 앱은 크롬의 권한을 따라요.\n① 크롬 앱 → 오른쪽 위 ⋮ → 설정 → 사이트 설정 → 마이크 → engo.life를 '허용'\n② 그래도 안 되면 휴대폰 설정 → 애플리케이션 → Chrome → 권한 → 마이크 '허용'\n바꾼 뒤 앱을 완전히 닫았다 다시 열어 주세요.";
  else if (env.android) how = "① 주소창 왼쪽 아이콘(⚙ 또는 자물쇠) → 권한 → 마이크 '허용'\n② 그래도 안 되면 휴대폰 설정 → 애플리케이션 → Chrome → 권한 → 마이크 '허용'";
  else if (env.ios) how = "① 설정 앱 → Safari → 마이크 → '허용' 또는 '확인'\n② 사파리 주소창 왼쪽 '가가' → 웹 사이트 설정 → 마이크 '허용'\n③ 설정 → 개인정보 보호 및 보안 → 음성 인식/마이크에서 Safari가 켜져 있는지 확인";
  else how = "주소창 왼쪽 자물쇠 아이콘 → 사이트 설정 → 마이크 '허용'";
  tutorAlert("마이크 사용이 막혀 있어요.\n\n" + how + typeIt);
}

// ---------- 듣기 (음성 인식) ----------
// 안드로이드 크롬은 인식기가 끝 신호(onend)를 안 보내고 멈추거나, 같은 말을 겹쳐 보내는 경우가 있어
// 버튼을 다시 누르면 무조건 끝내고(들은 만큼 보냄), 시간 제한·오류 안내를 둔다
let tutorMic = null;   // { rec, stop }
const TUTOR_MIC_MSG = {
  "audio-capture": "마이크를 쓸 수 없어요. 다른 앱이 마이크를 쓰고 있지 않은지 확인해 주세요.",
  "network": "음성 인식에 인터넷 연결이 필요해요. 입력칸에 적어서 보내도 돼요.",
  "language-not-supported": "이 기기는 영어 음성 인식을 지원하지 않아요. 입력칸에 적어 주세요."
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
function tutorEndWaitId() { let v = null; try { v = localStorage.getItem("tutorEndWait"); } catch (e) {} return TUTOR_END_WAIT[v] ? v : "short"; }   // 기본은 짧게 (빨리 대답하게)
// 말 끝 기다리기를 대화에 맞춘다: "How about you?"로 넘겼거나, 예/아니요 질문에 "Yes, I did."처럼 완전하게 답했으면 조금 빨리 보낸다
const TUTOR_YIELD = /\b(how about you|what about you|and you)$/;
// ("Yes, I have…"처럼 뒤가 이어질 수 있는 말은 빼고)
const TUTOR_COMPLETE = /^((yes|yeah|yep|no|nope) )?(i do|i don't|i did|i didn't|i'm not|i wasn't|i haven't|i can't|i won't|it's not|of course|not really|not yet|i think so|i don't think so|me too|me neither)$/;
const TUTOR_CLOSED_Q = new RegExp("^" + TUTOR_Q_OPENER + String.raw`(do|does|did|are|is|was|were|have|has|can|could|would|will|should)\b`, "i");
function tutorEndWait(text) {
  const base = TUTOR_END_WAIT[tutorEndWaitId()].ms;
  const last = (text || "").trim().toLowerCase().replace(/[^a-z' ]/g, "").split(/\s+/).pop() || "";
  // 말이 이어질 낱말(and, because, the, I…)로 멈췄으면 더 기다린다. "I think so"처럼 so로 끝나는 완전한 대답은 빼고
  const done = /\b(think|hope|guess) so$/.test((text || "").trim().toLowerCase().replace(/[^a-z' ]/g, "").trim());
  if (TUTOR_DANGLING.test(last) && !done) return base + 1500;
  if (tutorPractice) return base;
  if (tutorHintTarget && tutorSimilarity(text, tutorHintTarget) >= 0.85) return Math.min(base, 700);   // 힌트 문장을 끝까지 따라 읽었으면 바로 보낸다
  const t = tutorNorm(text);
  if (TUTOR_YIELD.test(t)) return Math.max(900, Math.round(base * 0.6));
  const q = tutorSplitSentences(tutorSaidLines[tutorSaidLines.length - 1] || "").filter(tutorIsQuestion).pop() || "";
  const closedQ = TUTOR_CLOSED_Q.test(q) || /\bor\b[^?]*\?["”']?$/i.test(q);
  if (closedQ && TUTOR_COMPLETE.test(t)) return Math.max(1000, Math.round(base * 0.7));
  return base;
}
/** 아무 말이 없을 때 튜터가 먼저 말을 건네기까지 (말 끝 기다리기에 맞춰: 6 / 7 / 11.2초) */
const tutorQuietMs = () => Math.max(6000, Math.round(TUTOR_END_WAIT[tutorEndWaitId()].ms * 3.5));
/** 듣는 중에 말소리가 들어오면 듣기 막대가 살짝 반응한다 (내 말을 듣고 있다는 느낌) */
let tutorHearAt = 0, tutorHearTimer = null;
function tutorHearPulse() {
  const now = Date.now(); if (now - tutorHearAt < 150) return; tutorHearAt = now;
  const room = tutorEl("tutor-chat-area"); if (!room || room.dataset.mode !== "listening") return;
  room.dataset.hearing = "1"; clearTimeout(tutorHearTimer);
  tutorHearTimer = setTimeout(() => { delete room.dataset.hearing; }, 450);
}
// 말 보내기: auto(말이 멈추면 자동) · manual(다 말한 뒤 ➤나 튜터를 눌러 보내기)
const TUTOR_SEND = { auto: "멈추면 자동", manual: '<span class="tutor-send-ico">➤</span> 눌러서' };
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
      `<button class="tutor-level-btn${(k === "manual") === manual ? " active" : ""}" aria-pressed="${(k === "manual") === manual}" onclick="changeTutorSendMode('${k}')">${v}</button>`).join("");
  });
  document.querySelectorAll(".tutor-send-tip").forEach(el => el.classList.toggle("hidden", !manual));
  document.querySelectorAll(".tutor-endwait-row").forEach(el => el.classList.toggle("hidden", manual));   // 직접 보내면 기다리는 시간은 필요 없다
  const cur = tutorEndWaitId();
  ["tutor-endwait-set", "tutor-endwait-lobby"].forEach(id => {
    const box = tutorEl(id);
    if (box) box.innerHTML = Object.entries(TUTOR_END_WAIT).map(([k, v]) =>
      `<button class="tutor-level-btn${k === cur ? " active" : ""}" aria-pressed="${k === cur}" onclick="changeTutorEndWait('${k}')">${v.label}</button>`).join("");
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
  let committed = "", heard = "", done = false, fatal = false, restarts = 0, silence = null, hinted = false, specTimer = null, specs = 0;
  let live = false, quietTimer = null, quietRestarts = 0;
  const manual = tutorSendManual();          // 직접 보내기: 조용해져도 보내지 않고 ➤를 기다린다
  const quietOn = !manual && !tutorPractice;   // 아무 말이 없으면 정해 둔 시간 뒤 튜터가 먼저 말을 건넨다 (브라우저가 먼저 듣기를 끝내도 그때까지는 다시 듣는다)
  const sendBtn = document.querySelector(".talk-input .send");
  let prefill = inp.value;   // 힌트로 넣어 둔 문장 (아무 말도 안 들리면 되살린다)
  let reading = !!prefill.trim();   // 입력칸에 문장(힌트·적던 글)이 있으면 그걸 보며 말하는 중: 칸은 그대로 두고 들은 말은 상태 줄에
  const timers = [];
  const state = { rec: null, user: false, heardText: () => heard.trim() };
  const finish = (send = true) => {
    if (done) return;
    done = true;
    clearTimeout(silence); clearTimeout(specTimer); timers.forEach(clearTimeout);
    if (tutorMic === state) tutorMic = null;
    if (sendBtn) sendBtn.classList.remove("waiting");
    const r = state.rec;
    if (r) { r.onend = r.onerror = r.onresult = null; try { r.abort(); } catch (e) {} }
    const said = send ? heard.trim() : "";
    if (!said || tutorPractice) tutorSpecDrop();     // 보내지 않으면 미리 받던 답은 버린다
    inp.value = said ? "" : prefill;                 // 보냈으면 비우고, 그만뒀으면 듣기 전 내용으로
    setTutorStatus(tutorIdleMsg(), "");
    if (said) tutorHandleSaid(said);
    else if (tutorPractice) { const q = tutorPractice.quietIfSilent; tutorPracticeEnd(send && !q ? "소리가 들리지 않았어요. 다시 눌러 말해 보세요" : ""); if (q && send) tutorAfterSpeak(tutorSessionToken); }
    else if (send && !state.user && !fatal) tutorQuietRestart();   // 조용해서 끝났으면 다시 듣는다
  };
  state.stop = () => finish(true);
  state.cancel = () => finish(false);
  // 아직 아무 말도 없을 때 '말 걸기'를 처음부터 다시 잰다 (해석을 읽거나 막 말을 꺼내는 중)
  state.poke = () => {
    if (done || heard.trim() || !quietTimer) return;
    clearTimeout(quietTimer);
    quietTimer = setTimeout(() => { if (!done && !heard.trim()) finish(true); }, tutorQuietMs()); timers.push(quietTimer);
  };
  // 입력칸을 눌렀다: 듣기만 멈추고 받아쓴 말은 칸에 남겨 둔다 (잘못 들은 낱말을 고쳐서 ➤로 보내게)
  // 듣는 중에 힌트를 골랐다: 마이크를 끄고 다시 켜지 않고 그대로 들으면서 입력칸 문장을 따라 읽게 한다 (다시 켤 때 소리·지연이 없게)
  state.read = () => {
    if (done || heard.trim()) return false;
    prefill = inp.value; reading = true; clearTimeout(quietTimer);   // 따라 읽는 동안 '말 걸기'는 하지 않는다
    setTutorStatus("문장을 따라 말하거나 ➤를 누르세요", live ? "listening" : "");
    return true;
  };
  state.edit = () => {
    const h = heard.trim();
    finish(false);
    if (tutorMic === state) tutorMic = null;
    if (h && !reading) { inp.value = h; setTutorStatus("고친 뒤 ➤를 눌러 보내세요", ""); }
  };
  const listenMsg = reading && !tutorPractice ? "문장을 따라 말하거나 ➤를 누르세요" : tutorPractice && !tutorPractice.quietIfSilent ? "듣고 있어요… 따라 말해 보세요" : manual ? "듣고 있어요… 다 말하면 ➤를 누르세요" : "듣고 있어요… 영어로 말해 보세요";
  // 마이크가 실제로 소리를 받기 시작했을 때만 '듣고 있어요' (그 전에 말하면 첫 낱말이 사라진다)
  const markLive = () => {
    if (live || done) return;
    live = true; tutorNoMic = false;
    if (quietOn && !heard.trim()) { quietTimer = setTimeout(() => { if (!done && !heard.trim()) finish(true); }, tutorQuietMs()); timers.push(quietTimer); }
    if (heard.trim() || hinted) tutorSetMode("listening"); else setTutorStatus(listenMsg, "listening");
  };
  const armSilence = () => {
    clearTimeout(silence); clearTimeout(specTimer);
    if (!heard.trim()) return;
    clearTimeout(quietTimer);
    // 말이 잠깐 멈추면 답을 미리 받기 시작한다 (그대로 보내지면 바로 대답한다)
    if (!tutorPractice && specs < TUTOR_SPEC.max) {
      const last = heard.trim().toLowerCase().replace(/[^a-z' ]/g, "").split(/\s+/).pop() || "";
      specTimer = setTimeout(() => { if (!done && heard.trim()) { specs++; tutorSpeculate(heard); } },
        TUTOR_DANGLING.test(last) ? TUTOR_SPEC.dangling : Math.min(TUTOR_SPEC.ms, Math.round(tutorEndWait(heard) / 2)));
    }
    if (manual) {
      if (sendBtn) sendBtn.classList.add("waiting");
      if (!hinted) { hinted = true; setTutorStatus("다 말했으면 ➤를 누르세요", "listening"); }
      return;
    }
    silence = setTimeout(() => finish(true), tutorEndWait(heard));
    if (!hinted) { hinted = true; setTutorStatus(`${tutorName()}를 누르면 바로 보내요`, "listening"); }   // 멈추면 저절로 보내고, 누르면 기다리지 않고 바로
  };
  const startRec = () => {
    const rec = new SR();
    rec.lang = "en-US"; rec.interimResults = true; rec.maxAlternatives = 1; rec.continuous = true;
    state.rec = rec;
    rec.onaudiostart = markLive;
    rec.onspeechstart = () => state.poke();
    rec.onresult = e => {
      tutorSrNetErrors = 0;
      const text = (committed + " " + tutorJoinResults(e.results)).replace(/\s+/g, " ").trim();
      if (text !== heard) {                                      // 새 말이 들릴 때마다 기다리는 시간을 다시 잰다
        if (tutorSpec && tutorSpec.key !== tutorNorm(text)) tutorSpecDrop();   // 말이 이어졌다: 미리 받던 답은 버린다
        markLive(); tutorHearPulse();
        heard = text; armSilence();
        if (reading) setTutorStatus("🎤 " + heard, "listening"); else inp.value = heard;
      }
    };
    rec.onerror = e => {
      if (e.error === "no-speech" || e.error === "aborted") return;   // 끝 처리는 onend에서
      // 브라우저 음성 인식 서비스를 못 쓰는 환경이면 다음부터 녹음 + Gemini 받아쓰기로 (마이크 권한 자체가 막힌 건 아님)
      if (e.error === "network" && navigator.onLine !== false && ++tutorSrNetErrors < 2) {   // 한 번은 일시적인 끊김으로 보고 그대로 다시 듣는다
        hinted = false; setTimeout(() => { if (!done) setTutorStatus("연결이 잠깐 끊겼어요 · 다시 들을게요", "listening"); }, 0);
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
      else if (TUTOR_MIC_MSG[e.error]) { fatal = true; if (e.error === "audio-capture") tutorNoMic = true; tutorAlert(TUTOR_MIC_MSG[e.error]); }
      finish(!fatal);
    };
    rec.onend = () => {
      if (done) return;
      // 말하던 중에 브라우저가 듣기를 끝냈으면 이어서 다시 듣는다 (기다리는 시간은 계속 흐른다)
      if ((heard.trim() || manual) && restarts < (manual ? 60 : 10)) {   // 직접 보내기면 조용해도 계속 듣는다
        committed = heard; restarts++;
        try { startRec(); return; } catch (e) {}
      }
      // 아무 말도 없는데 브라우저가 먼저 듣기를 끝냈다: 튜터가 말을 건넬 때까지는 조용히 다시 듣는다
      if (!heard.trim() && quietOn && quietRestarts < 40) { quietRestarts++; try { startRec(); return; } catch (e) {} }
      finish(true);
    };
    rec.start();
  };
  tutorMic = state;
  timers.push(setTimeout(() => finish(true), manual ? 120000 : 30000));   // 아무리 길어도 30초(직접 보내기는 2분)면 보낸다
  try {
    startRec();
    setTutorStatus("마이크 켜는 중…", "");
    timers.push(setTimeout(markLive, 700));                  // 시작 알림(onaudiostart)이 안 오는 브라우저도 있다
  } catch (e) { fatal = true; finish(false); setTutorStatus(`마이크를 켜지 못했어요 · ${tutorName()}를 다시 눌러 주세요`, ""); }
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
// 인터넷이 다시 연결되면 답을 못 받은 말을 저절로 다시 보낸다 (학습자가 말하는 중이 아닐 때만)
window.addEventListener("online", () => setTimeout(() => { tutorOnlineMissed = true; tutorAutoRetry(); }, 800));
let tutorOnlineMissed = false;   // 연결이 돌아왔는데 그때는 바빠서 못 보냈다 (튜터 말이 끝나면 보낸다)
function tutorAutoRetry() {
  const r = tutorRetryLast;
  if (!r || tutorBusy || tutorSpeaking || tutorHelping || tutorPractice || !tutorCallActive || tutorRecRec || tutorTranscribing) return false;
  if (["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); })) return false;   // 판을 닫으면 그때 (tutorResume)
  if (tutorMic && tutorMic.heardText && tutorMic.heardText()) return false;
  if (!tutorLastIsError()) return false;
  tutorOnlineMissed = false;
  r();
  return !!tutorBusy;   // 실제로 다시 보냈는지 (이미 다른 대화면 보내지 않고 버튼만 치운다)
}
/** 마이크로 한 마디 녹음: 말을 멈추면('말 끝 기다리기'만큼 조용) 자동으로 끝나고, 16kHz 소리 데이터를 돌려준다.
 *  quietMs: 아무 말이 없으면 이만큼 뒤에 끝낸다 · onLive: 마이크가 실제로 소리를 받기 시작했을 때 · onVoice: 말소리가 들어올 때 */
function tutorRecordUtterance(manual, { quietMs = 8000, onLive = null, onVoice = null } = {}) {
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
    let heardVoice = false, lastVoice = 0, loudMs = 0, first = true;
    const floorWin = [];
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
        if (first) { first = false; if (onLive) onLive(); }
        const d = e.inputBuffer.getChannelData(0);
        chunks.push(new Float32Array(d));
        let sum = 0; for (let i = 0; i < d.length; i++) sum += d[i] * d[i];
        const rms = Math.sqrt(sum / d.length), now = performance.now();
        // 주변 소리 바닥: 최근 1.5초 조각들 중 아래쪽 10% (바로 말을 시작해도 낮게 잡히고, 시끄러운 곳에선 따라 오른다). 0에 가까운 첫 조각은 뺀다
        if (rms > 1e-4) { floorWin.push([now, rms]); while (now - floorWin[0][0] > 1500) floorWin.shift(); }
        if (now - t0 < 350) return;
        const lv = floorWin.map(x => x[1]).sort((a, b) => a - b);
        const thr = Math.max(0.012, Math.min(0.06, (lv[Math.floor(lv.length * 0.1)] || 0) * 3));
        // 작은 토막(약 0.02초)으로 나눠 0.13초 넘게 이어서 크면 말소리 (기침·딸깍 한 번은 무시).
        // 말이 시작된 뒤엔 큰 토막 하나만 와도 '아직 말하는 중' (음절 사이가 잠깐 작아져도 끊지 않게)
        const sub = 1024, subMs = sub / ctx.sampleRate * 1000;
        let inRun = false;
        for (let o = 0; o < d.length; o += sub) {
          let q = 0; const e2 = Math.min(d.length, o + sub); for (let i = o; i < e2; i++) q += d[i] * d[i];
          if (Math.sqrt(q / (e2 - o)) > thr) { loudMs += subMs; if (loudMs >= 130) { heardVoice = true; lastVoice = now; inRun = true; } else if (heardVoice) lastVoice = now; }
          else loudMs = 0;
        }
        if (inRun && rms > 1e-4) floorWin.pop();                 // 말소리 조각은 주변 소리 바닥에 넣지 않는다 (길게 말하면 기준이 말소리까지 올라가 끊기지 않게)
        if (heardVoice && lastVoice === now && onVoice) onVoice();
        if (manual ? now - t0 > 120000 || (!heardVoice && now - t0 > 30000)   // 직접 보내기: ➤를 누를 때까지 (최대 2분)
          : (heardVoice && now - lastVoice > tutorEndWait("")) || (!heardVoice && now - t0 > quietMs) || now - t0 > 30000) finish();   // 말이 멈추고 '말 끝 기다리기'만큼 조용하면
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
    { text: "Transcribe what this English learner says. Write exactly the words spoken, keeping any grammar mistakes. If they speak Korean (or mix in Korean words), write the Korean in Hangul as spoken. If there is no clear speech, output exactly [none]. Output only the transcript." }
  ] }], { temperature: 0, maxTokens: 200, chain: "aux", allowEmpty: true });   // 말이 없어서 빈 답이 온 건 다른 모델로 다시 묻지 않는다
  return cleanHeardText(out);
}
// 녹음은 됐는데 알아듣지 못했다: 튜터가 "Sorry, could you say that again?" 하고 다시 듣는다 (연달아 두 번까지, 그다음엔 쉰다)
let tutorRecMissCount = 0;
function tutorRecMiss(token) {
  if (++tutorRecMissCount > 2 || !tutorCanAutoListen(token)) { tutorRecMissCount = 0; setTutorStatus(`잘 못 들었어요 · ${tutorName()}를 누르고 다시 말해 주세요`, ""); return; }
  tutorAddNudge(TUTOR_SAY_AGAIN);
  tutorSayLines(token, [TUTOR_SAY_AGAIN]);
}

let tutorRecRec = null;
async function toggleTutorRecordMic() {
  if (tutorRecRec) { tutorRecRec.user = true; tutorRecRec.stop(); return; }   // 듣는 중에 누르면 바로 끝내고 보낸다
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    tutorAlert("이 화면에서는 마이크를 쓸 수 없어요.\n아래 입력칸에 적어서 대화해 주세요.").then(() => tutorEl("tutor-input").focus()); return;
  }
  stopTutorSpeech();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (tutorEnv().android && typeof NeuralTTS !== "undefined" && NeuralTTS.suspendAudio) NeuralTTS.suspendAudio();   // 안드로이드만 (아이폰은 다시 깨울 때 소리가 안 나기도 함)
  const token = tutorSessionToken;
  const rec = tutorRecordUtterance(tutorSendManual(), {
    quietMs: tutorPractice || tutorSendManual() ? 8000 : tutorQuietMs(),
    onLive: () => { tutorNoMic = false; if (tutorRecRec === rec) setTutorStatus(tutorSendManual() ? "듣고 있어요… 다 말하면 ➤를 누르세요" : "듣고 있어요… 말을 멈추면 보내요", "listening"); },
    onVoice: tutorHearPulse
  });
  tutorRecRec = rec;
  setTutorStatus("마이크 켜는 중…", "");
  let result;
  try { result = await rec.done; }
  catch (e) {
    if (tutorRecRec === rec) tutorRecRec = null;
    if (rec.cancelled || token !== tutorSessionToken) return;    // 그사이 멈췄거나 화면을 떠났으면 알리지 않는다
    setTutorStatus(tutorIdleMsg(), "");
    tutorPracticeEnd("");
    if (e && (e.name === "NotAllowedError" || e.name === "SecurityError")) { tutorMicDenied = true; showMicPermissionHelp(); }
    else if (e && e.name === "NotFoundError") { tutorRecFailAt = Date.now(); tutorNoMic = true; tutorAlert("마이크를 찾지 못했어요.\n아래 입력칸에 적어서 대화할 수 있어요."); }
    else { tutorRecFailAt = Date.now(); console.warn("마이크 열기 실패", e); tutorAlert("마이크를 열지 못했어요. 다른 앱이 마이크를 쓰고 있지 않은지 확인해 주세요.\n아래 입력칸에 적어서 대화할 수도 있어요."); }
    return;
  }
  if (tutorRecRec === rec) tutorRecRec = null;                   // (그사이 새 녹음이 시작됐으면 건드리지 않는다)
  if (rec.cancelled) return;                                     // 글로 입력해 보냈으면 녹음은 버린다
  if (!result.heardVoice || result.audio.length < 16000 * 0.4) {
    setTutorStatus(tutorIdleMsg(), "");
    if (tutorPractice) { const q = tutorPractice.quietIfSilent; tutorPracticeEnd(q ? "" : "소리가 들리지 않았어요. 다시 눌러 말해 보세요"); if (q && !rec.user) tutorAfterSpeak(tutorSessionToken); }
    else if (!rec.user) tutorQuietRestart();
    return;
  }
  setTutorStatus("알아듣는 중…", "thinking");
  tutorTranscribing = rec;
  const slow = setTimeout(() => { if (tutorTranscribing === rec) setTutorStatus("알아듣는 중… 조금만 기다려 주세요", "thinking"); }, 5000);
  try {
    const text = await geminiTranscribe(result.audio);
    clearTimeout(slow);
    if (tutorTranscribing === rec) tutorTranscribing = null;
    if (rec.cancelled || token !== tutorSessionToken || !tutorCallActive) return;   // 그사이 글로 보냈거나 화면을 떠났으면 버린다
    setTutorStatus(tutorIdleMsg(), "");
    if (!text) {
      if (tutorPractice) { tutorPracticeEnd("잘 못 알아들었어요. 다시 눌러 또박또박 말해 보세요"); setTutorStatus(`잘 못 들었어요 · ${tutorName()}를 누르고 다시 말해 주세요`, ""); }
      else tutorRecMiss(token);
      return;
    }
    tutorHandleSaid(text);
  } catch (e) {
    clearTimeout(slow);
    if (tutorTranscribing === rec) tutorTranscribing = null;
    if (rec.cancelled || token !== tutorSessionToken) return;
    setTutorStatus(tutorIdleMsg(), "");
    // 대화가 끊기지 않게: 알림 창 대신 상태 줄로 알리거나 튜터가 다시 말해 달라고 한다
    if (geminiKeyProblem(e)) { tutorPracticeEnd(""); tutorSetKey(""); setTimeout(() => { renderTutorPage(); tutorAlert(geminiErrorText(e)); }, 0); }
    else if (tutorPractice) tutorPracticeEnd("말을 알아듣지 못했어요. 다시 눌러 주세요");
    else if (e && e.status === 429) setTutorStatus("사용량이 다 찼어요 · 잠시 뒤 다시 해 주세요", "");
    else if (e && e.reason === "OFFLINE") setTutorStatus("인터넷 연결을 확인해 주세요", "");
    else if (geminiTransient(e)) setTutorStatus(`연결이 불안정해요 · ${tutorName()}를 눌러 다시 말해 주세요`, "");
    else tutorRecMiss(token);
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
// 힌트 길이·낱말 수준 (수준별)
const TUTOR_HINT_LEVEL = {
  beginner: "4 to 10 words each, very common everyday words and simple grammar.",
  intermediate: "up to about 14 words each, everyday expressions and common phrasal verbs.",
  advanced: "up to about 18 words each, natural idioms and phrasal verbs a native speaker would use."
};
async function loadTutorAiHints(key) {
  const said = tutorSaidLines[tutorSaidLines.length - 1] || "";
  const entry = tutorHintCache;
  const show = list => { if (tutorHintCache === entry && tutorHintCache.key === key && list.length > (entry.list || []).length) { entry.list = list; if (tutorHintShown) renderTutorHint(true); } };
  const text = await geminiStream([
    { role: "system", content: [
      `You help a Korean adult at the ${tutorLevel().desc} level reply in a casual English conversation. Suggest 3 different things the student could naturally say next, in reply to the teacher's last message.`,
      "- Each must be what a native speaker would actually say in everyday conversation: natural and fully grammatical, with contractions (I'm, it's, didn't). Not stiff textbook English (never \"I am fine, thank you. And you?\").",
      "- Directly answer or respond to the teacher's last message, using the conversation so far, and sound like the student's own real answer (concrete, with a small personal detail).",
      "- Make the 3 different: 1) a short, easy answer 2) an answer with one detail or reason 3) an answer that also asks something back or keeps the chat going.",
      `- Length and words: ${TUTOR_HINT_LEVEL[tutorLevelId()] || TUTOR_HINT_LEVEL.beginner}`,
      "- The Korean is the natural spoken meaning (해요체), not a word-for-word translation.",
      "Write exactly 3 lines and nothing else. Each line: the English, then ' ||| ', then the Korean.",
      "Example (teacher: \"What did you do last weekend?\"):",
      "I just stayed home and relaxed. ||| 그냥 집에서 쉬었어요.",
      "I went hiking with my friends. It was really nice. ||| 친구들이랑 등산 갔어요. 정말 좋았어요.",
      `Not much, honestly. How about you? ||| 솔직히 별거 안 했어요. ${tutorName()}는요?`
    ].join("\n") },
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
    .then(list => { if (!list.length) entry.error = new Error("잠시 뒤 다시 눌러 주세요."); })
    .catch(e => { entry.error = e; })
    .finally(() => { entry.loading = null; if (tutorHintCache === entry && tutorHintShown) renderTutorHint(true); });   // 실패해도 여기서 다시 요청하지 않는다 (끝없이 되풀이 방지)
  tutorHintCache = entry;
}
/** 힌트 고르기: 입력칸에 넣는다 (➤로 바로 보내거나, 그대로 따라 말하거나, 고쳐 쓸 수 있게). 힌트 창은 닫는다 */
function tutorUseHint(en) {
  const keep = !!(tutorMic && tutorMic.read && !tutorMic.heardText());   // 이미 듣는 중이면 마이크는 그대로 둔다
  if (!keep) tutorCancelListening();
  stopTutorSpeech();                                   // 튜터가 아직 말하는 중이면 끊는다 (소리가 겹치지 않게)
  const inp = tutorEl("tutor-input");
  inp.value = en; tutorHintTarget = en.trim();
  tutorHintShown = false; renderTutorHint();
  const send = document.querySelector(".talk-input .send");
  if (send) { send.classList.remove("ready"); void send.offsetWidth; send.classList.add("ready"); }   // 보내기 버튼을 반짝여 알려 준다
  // 튜터가 읽어 주지 않는다 (내가 할 말이라서). 바로 듣기 시작 → 그대로 따라 말하면 보내지고, ➤를 눌러 글로 보내도 된다
  if (keep && tutorMic.read()) return;
  setTutorStatus(document.activeElement === inp ? "➤를 눌러 보내 보세요" : "➤로 보내거나 그대로 따라 말해 보세요", "");
  const token = tutorSessionToken;
  setTimeout(() => tutorAfterSpeak(token), 300);
}
function renderTutorHint(noRetry) {
  const box = tutorEl("tutor-hint");
  if (!box) return;
  box.classList.toggle("hidden", !tutorHintShown);
  const hb = tutorEl("tutor-hint-btn"); if (hb) { hb.classList.toggle("on", tutorHintShown); hb.setAttribute("aria-expanded", String(tutorHintShown)); }
  const room = tutorEl("tutor-chat-area"); if (room) room.classList.toggle("hinting", tutorHintShown);
  requestAnimationFrame(() => { const log = tutorEl("tutor-log"); if (log && tutorLogPinned) log.scrollTop = log.scrollHeight; });   // 힌트가 답하는 튜터 말이 보이게 (위로 올려 읽는 중이면 그대로)
  if (!tutorHintShown) return;
  if (!tutorReady()) return;
  if (tutorBusy) { box.innerHTML = `<div class="tutor-hint-label">힌트 만드는 중…</div>`; return; }   // Emma 답이 정해지면 그 답에 맞춰 만든다
  if (!noRetry) tutorPrepareHints();
  const hc = tutorHintCache;
  if (!hc.list || !hc.list.length) {
    if (tutorHintCache.error) {
      box.innerHTML = `<div class="tutor-hint-label"></div><button class="tutor-slow-btn tutor-hint-retry"><span aria-hidden="true">🔄</span> 다시 시도</button>`;
      box.firstChild.textContent = "힌트를 만들지 못했어요. " + geminiErrorText(tutorHintCache.error);
      box.querySelector("button").onclick = e => { e.stopPropagation(); renderTutorHint(); };
    } else box.innerHTML = `<div class="tutor-hint-label">힌트 만드는 중…</div>`;
    return;
  }
  box.innerHTML = `<div class="tutor-hint-label tutor-hint-head">이렇게 말해 볼까요? 누르면 입력칸에 넣어요</div>`;
  tutorHintCache.list.forEach(h => {
    const row = document.createElement("button"); row.type = "button"; row.className = "tutor-hint-item";
    row.innerHTML = `<span class="tutor-hint-en" lang="en"></span><span class="tutor-hint-kr"></span>`;
    row.querySelector(".tutor-hint-en").textContent = h.en;
    row.querySelector(".tutor-hint-kr").textContent = h.kr;
    row.onclick = () => tutorUseHint(h.en);
    box.appendChild(row);
  });
  if (hc.loading && hc.list.length < 3) { const more = document.createElement("div"); more.className = "tutor-hint-label"; more.textContent = "더 만드는 중…"; box.appendChild(more); }
}

/** 오늘 대화 피드백: 한 줄 총평 · 오늘의 핵심 하나 · 고쳐 말하기 · 써 볼 표현 2개 (짧고 깔끔하게).
 *  선생님 정리(AI)와 문장 확인을 동시에 시작해서, 먼저 끝나는 것부터 보여 준다. 대화가 그대로면 다시 열 때 바로 */
let tutorFeedbackCache = { key: "", p: null };
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
    box.innerHTML = `<div class="tutor-fb-summary">아직 영어로 말한 문장이 없어요. 한마디라도 말해 봐요! 😊</div>`;
    return;
  }
  if (!tutorReady()) return;
  const token = tutorSessionToken;
  const n = tutorLearnerLines.length;
  box.innerHTML = `<div class="tutor-feedback-body">
    <div class="tutor-fb-summary">영어로 ${n}번 말했어요</div>
    <div class="tutor-fb-card"><div class="tutor-fb-overall tutor-fb-wait">${tutorName()}가 오늘 대화를 정리하고 있어요…</div><div class="tutor-fb-focus hidden"></div></div>
    <div class="tutor-report-sec tutor-fb-fixes"><div class="tutor-report-title">✏️ 이렇게 고쳐 말해요</div><div class="tutor-fb-list tutor-fb-wait">내가 말한 문장을 확인하고 있어요…</div></div>
    <div class="tutor-report-sec tutor-fb-expr hidden"><div class="tutor-report-title">✨ 써 볼 표현</div></div>
    <div class="tutor-fb-note">문장을 누르면 들을 수 있어요 · AI 평가는 참고용이에요</div>
  </div>`;
  const q = sel => box.querySelector(sel);
  // ① 선생님 정리: 바로 시작 (대화가 그대로면 지난 결과를 그대로)
  const key = [tutorGreeting, n, tutorLearnerLines[n - 1], tutorLevelId()].join("|");   // 같은 대화·같은 문장 수면 다시 요청하지 않는다
  if (tutorFeedbackCache.key !== key) {   // 받는 중에 닫았다 다시 열어도 같은 요청을 기다린다 (실패하면 다음에 다시)
    const p = tutorFeedbackReport();
    tutorFeedbackCache = { key, p };
    p.then(r => { if (!r || !r.overall) throw 0; }).catch(() => { if (tutorFeedbackCache.p === p) tutorFeedbackCache = { key: "", p: null }; });
  }
  const reportP = tutorFeedbackCache.p
    .then(r => {
      if (token !== tutorSessionToken) return;
      if (!r || !r.overall) throw new Error("피드백을 닫았다가 다시 열어 주세요.");
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
      ov.textContent = "총평을 받지 못했어요. " + geminiErrorText(e);
    });
  // ② 고쳐 말하기: 대화 중에 확인 못 한 문장만 지금 확인
  // 확인 중인 것은 기다리고, 확인 못 한 문장은 하나씩 다시 (한꺼번에 보내면 사용량 초과가 더 심해진다) — 사용량 초과면 거기서 멈춘다
  await Promise.all(tutorLearnerItems.map(it => it.check).filter(Boolean));
  for (let i = 0; i < tutorLearnerItems.length; i++) {
    const it = tutorLearnerItems[i];
    if (it.fix !== undefined || token !== tutorSessionToken) continue;
    let hit429 = false;
    await (tutorCheckItem(it, it.before, token) || Promise.resolve());
    if (it.fix === undefined && tutorLastCheckErr && tutorLastCheckErr.status === 429) hit429 = true;
    if (hit429) break;
  }
  if (token !== tutorSessionToken) return;
  const seen = new Set();   // 같은 문장을 여러 번 말했으면 교정은 한 번만
  tutorCorrections = tutorLearnerItems.filter(it => it.fix && !seen.has(tutorNorm(it.text)) && seen.add(tutorNorm(it.text))).map(it => ({ said: it.text, better: it.fix, why: it.why }));
  const fixes = tutorCorrections.slice(-5), failed = tutorLearnerItems.filter(it => it.fix === undefined).length;
  q(".tutor-fb-summary").textContent = `영어로 ${n}번 말했어요 · ` + (fixes.length ? `고쳐 볼 문장 ${tutorCorrections.length}개` + (tutorCorrections.length > fixes.length ? ` (최근 ${fixes.length}개)` : "")
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
  const TALK = { on: 0.16, off: 0.08, gap: 0.06, base: 1.0, gain: 0.6, min: 0.85, max: 1.5, hurryOpen: 1.5, close: 1.3, quietSlow: 0.6, slew: 0.12, longGap: 0.8, holdMax: 2.2 };   // 소리를 미리 모를 때(기기 음성 등): 소리 크기에 맞춰 속도만 (멈추지 않는다)
  // 미리 짜기 (js/talk-plan.js): 문장 소리 전체를 알고 시작할 때, 시작 장면과 장면마다 재생 속도(0.5~1.5배)를 짜 두고 그대로 따라 튼다.
  // 멈추거나 장면을 건너뛰지 않는다 (얼굴이 끊기지 않게). 영상은 늘 실제 장면 그대로 (잘라 붙이면 입이 찌그러져 보였다)
  const SPEAK = { maxSec: 30, gain: 0.25, corr: 0.3, dead: 0.6, catchUp: 3, min: 0.5, max: 1.6, drop: 24, seekAhead: 0.2 };
  let prep = null;   // 소리를 내기 직전에 짜 둔 계획 { wav, ready, plan, cont }
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
    fetch(media + "talk.json?v=2")   // v: 영상 자료(시작 장면 후보 등)를 바꾸면 올린다
      .then(r => (r.ok ? r.json() : null)).then(d => {
      if (!d || !Array.isArray(d.open) || !d.open.length || !mounted || tutorChar().media !== media) return;
      const n = d.n = d.open.length;
      d.fps = d.fps || 24;
      // 이 장면에서 입이 열리기까지 몇 장면 남았는지 (닫힌 채 멈출 자리를 고를 때)
      d.nextOpen = d.open.map((_, f) => { let k = 0; while (k < n && d.open[(f + k) % n] < d.openAt) k++; return k; });
      d.openN = Float32Array.from(d.open, v => v / 100);
      if (typeof TalkPlan !== "undefined") try { TalkPlan.warm(media, d.openN); } catch (e) {}
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
  /** 자연스러운 음성이 문장 하나를 내기 직전: 시작 장면·재생 속도 계획을 짜고, (말하는 얼굴이 아직 안 보이면) 말하는 영상을 첫 장면으로 옮겨 둔다.
   *  다 되면 끝나는 약속 (부르는 쪽은 길어야 0.3초만 기다린다 — 그래야 첫 음절부터 입이 맞는다) */
  function prepare(wav, sr) {
    const d = talk;
    prep = null;
    if (!d || !clips || !d.cand || !d.openN || typeof TalkPlan === "undefined" || !tutorSpeaking || !wav || !wav.length || wav.length / sr > SPEAK.maxSec) return Promise.resolve();
    const T = clips.talk, I = clips.idle, tts = NeuralTTS;
    const lead = 0.06 + Math.min(350, tts.outputLatencyMs ? tts.outputLatencyMs() : 0) / 1000;   // 소리를 넣고 실제로 들리기까지
    let starts, k0 = -1;
    const cont = ctl.on;
    if (cont) {
      // 말하는 얼굴이 이미 보이면 지금 장면에서 이어서 (소리가 들릴 때쯤의 자리)
      ctl.leaving = false;
      const r = T.paused ? 1 : (T.playbackRate || 1);
      starts = [(T.currentTime || 0) * d.fps - 0.5 + (lead + 0.03) * d.fps * r];
      k0 = Math.max(0, Math.min(TalkPlan.P.steps.length - 1, TalkPlan.P.steps.indexOf(Math.round(r * 4))));
    } else {
      // 듣는 얼굴의 (소리가 들릴 때쯤) 장면과 자세가 비슷한 말하는 장면들 중에서 시작
      const fi = (frameOf(I, { fps: d.fps, n: d.idleFrames }) + Math.round((lead + 0.25) * d.fps)) % d.idleFrames;
      starts = d.cand[fi] || [d.idleToTalk[fi] || 0];
    }
    const p = { wav, plan: null, cont };
    p.ready = TalkPlan.planAudio(tutorChar().media, d.openN, wav, sr, d.fps, starts, k0).then(r => {
      p.plan = r;
      if (cont || ctl.on || !clips || clips.talk !== T) return;
      // 보이지 않는 동안 말하는 영상을 첫 장면 조금 앞(소리 2장면 전)으로 옮겨 둔다
      const f0 = (((Math.round(r.start - 2 * r.rate[0])) % d.n) + d.n) % d.n;
      return new Promise(res => { ctl.seeking = true; ctl.prepAt = performance.now(); ctl.prepFrame = f0; T.pause(); seekFrame(T, f0, d, () => { ctl.seeking = false; res(); }); });
    }).catch(() => {});
    prep = p;
    return p.ready;
  }
  /** 자연스러운 음성이 문장 하나를 at(재생 장치 시계)부터 들려준다: prepare로 짜 둔 계획을 붙인다 */
  function speak(wav, sr, at) {
    const p = prep && prep.wav === wav ? prep : null;
    prep = null;
    if (!talk || !clips || !p) return;                                    // 짜 둔 계획이 없으면 소리 크기에 맞춰 그때그때
    const pl = ctl.plan = { at, res: null, T: 0 };
    const bind = () => { if (ctl.plan === pl && p.plan) { pl.res = p.plan; pl.T = p.plan.pos.length; } };
    if (p.plan) bind(); else p.ready.then(bind);
    ctl.leaving = false; ctl.lateSeeks = 0;
  }
  /** 재생 속도 (0.05 단위, 0.1 넘게 달라질 때만 바꾼다 — 자주 바꾸지 않게) */
  function setRate(r, now) {
    const T = clips.talk, q = Math.round(r * 20) / 20;
    if (Math.abs((T.playbackRate || 1) - q) >= 0.1 - 1e-6 && now - ctl.rateAt > 80) { try { T.playbackRate = q; } catch (e) {} ctl.rateAt = now; }
  }
  /** 짜 둔 계획을 따라간다: 있어야 할 장면과의 차이만큼 재생 속도를 살짝 더하거나 뺀다 (멈추거나 건너뛰지 않는다). 문장이 끝났거나 소리가 멈췄으면 false */
  function followPlan(now, dt) {
    const pl = ctl.plan, d = talk, T = clips.talk;
    const tts = typeof NeuralTTS !== "undefined" ? NeuralTTS : null;
    if (!tts || !tutorSpeaking) { ctl.plan = null; return false; }
    // 재생이 끝나도 재생 장치 지연(블루투스 등)만큼은 소리가 아직 들린다
    if (tts.isPlaying()) pl.endAt = 0; else if (!pl.endAt) pl.endAt = now;
    if (pl.endAt && now - pl.endAt > Math.min(350, tts.outputLatencyMs()) + 80) { ctl.plan = null; return false; }
    const r = pl.res, x = (tts.heardTime() - pl.at) * d.fps;            // 지금 들리는 소리 장면 (소수)
    if (!r) { if (ctl.on) { setRate(1, now); if (T.paused) playClip(T); } return true; }   // 계획이 아직이면 (드묾) 그대로 1배
    if (x > pl.T + 2) { ctl.plan = null; return false; }
    let want, rateNow;
    if (x < 0) { want = r.pos[0] + x * r.rate[0]; rateNow = r.rate[0]; }
    else if (x >= pl.T - 1) { want = r.pos[pl.T - 1] + (x - pl.T + 1); rateNow = 1; }
    else { const i = Math.floor(x), f = x - i; want = r.pos[i] + (r.pos[i + 1] - r.pos[i]) * f; rateNow = r.rate[i]; }
    const cont = (T.currentTime || 0) * d.fps - 0.5;
    let err = (want - cont) % d.n; if (err > d.n / 2) err -= d.n; if (err < -d.n / 2) err += d.n;
    if (!ctl.on) {
      if (x < -2.5) return true;                                          // 아직 소리 전 (듣는 얼굴)
      if (ctl.seeking && now - ctl.prepAt < 700) return true;            // 첫 장면으로 옮기는 중
      // 준비가 늦어 소리가 먼저 시작됐으면, 보이기 전에 지금 있어야 할 장면(옮기는 시간만큼 앞)으로 옮겨 놓고 시작한다 (보이지 않을 때라 건너뜀이 안 보인다)
      if (Math.abs(err) > 1.5 && (ctl.lateSeeks || 0) < 2) {
        ctl.lateSeeks = (ctl.lateSeeks || 0) + 1;
        const f = (((Math.round(want + SPEAK.seekAhead * d.fps * rateNow)) % d.n) + d.n) % d.n;
        ctl.seeking = true; ctl.prepAt = now; T.pause(); seekFrame(T, f, d, () => { ctl.seeking = false; });
        return true;
      }
      ctl.lateSeeks = 0;
      startTalk(rateNow);
    }
    if (Math.abs(err) > SPEAK.drop) { ctl.plan = null; return false; }   // 크게 어긋났으면 (기기가 버벅였을 때 등) 이 문장은 소리 크기에 맞춰
    // 작은 차이는 그냥 두고(속도가 출렁이지 않게), 많이 늦었으면 조금 더 세게 따라잡는다
    const e = Math.abs(err) < SPEAK.dead ? 0 : err, lim = Math.abs(err) > SPEAK.catchUp ? 0.5 : SPEAK.corr;
    ctl.rate = Math.min(SPEAK.max, Math.max(SPEAK.min, rateNow + Math.max(-lim, Math.min(lim, e * SPEAK.gain))));
    setRate(ctl.rate, now);
    if (T.paused) playClip(T);
    const f = frameOf(T, d), tg = x >= 0 && x < pl.T ? r.tgt[Math.floor(x)] : 0;
    level = Math.min(1, d.open[f] / 100); ctl.a = tg; ctl.f = f;
    if (tg > 0) { ctl.spk = true; ctl.quiet = 0; } else { ctl.quiet += dt; if (ctl.quiet > TALK.gap) ctl.spk = false; }
    ctl.offAt = 0;
    return true;
  }
  /** 말하는 영상을 위에 띄운다 (듣는 영상은 아래 그대로 → 겹쳐 바뀌는 동안 배경이 비치지 않는다) */
  function startTalk(rate) {
    const T = clips.talk;
    ctl.on = true; ctl.leaving = false; ctl.spk = true; ctl.quiet = 0; ctl.rate = rate || TALK.base; ctl.offAt = 0;
    try { T.playbackRate = ctl.rate; } catch (e) {}
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
    ctl.on = false; ctl.leaving = false; ctl.seeking = false; ctl.prepFrame = -1; ctl.plan = null; prep = null; clip = "idle";
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
      if (tutorSpeaking && !ctl.seeking && !ctl.plan && !prep && now - ctl.prepAt > 400) {
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
    // 멈추지 않고 속도만: 말소리가 나면 입이 열리는 장면 쪽으로, 조용하면 입 다문 장면에서는 천천히·벌린 장면은 조금 빨리 지나간다
    let want;
    if (ctl.spk) want = closed ? (d.nextOpen[f] > 2 ? TALK.hurryOpen : TALK.base + 0.2) : Math.min(TALK.max, Math.max(TALK.min, TALK.base + TALK.gain * (a - Math.min(o, 1))));
    else want = closed ? TALK.quietSlow : TALK.close;
    ctl.rate += (want - ctl.rate) * (1 - Math.pow(1 - TALK.slew, dt * 60));
    setRate(ctl.rate, now);
    if (T.paused) playClip(T);
    if (ctl.leaving && ctl.spk) ctl.leaving = false;                     // 듣는 얼굴로 가던 중에 다시 말하면 그대로 말하기
    // 튜터 말이 끝났으면 (입이 다물린 때, 늦어도 0.6초 뒤) 또는 말 사이가 길면 듣는 얼굴로
    if (!tutorSpeaking) { if (!ctl.offAt) ctl.offAt = now; } else ctl.offAt = 0;
    // 다음 문장 목소리를 기다리는 중이면 2초 남짓까지 말하는 얼굴 그대로 (문장 사이에 듣는 얼굴로 갔다 오면 어색하다)
    const waitingNext = tutorSpeaking && (tutorClipWaiting || tutorBusy) && ctl.quiet < TALK.holdMax;
    if (!ctl.leaving && !ctl.spk && ((ctl.quiet > TALK.longGap && !waitingNext) || (ctl.offAt && (closed || now - ctl.offAt > 600)))) leaveTalk();
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
    clips = null; frames = null; mouthEls = null; mounted = false; talk = null; prep = null;
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
      if (talk) stepTalk(now); else stepGate(now);
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
  return { mount, remount, apply, prepare, speak, get level() { return level; }, get clip() { return clips ? clip : null; },
    get mouth() { return talk && ctl.on && clips ? talk.open[frameOf(clips.talk, talk)] : -1; },     // 지금 보이는 말하는 장면의 입 벌림 (0~100, 시험용)
    get rate() { return clips && ctl.on ? (clips.talk.paused ? 0 : clips.talk.playbackRate) : 0; },
    get mode() { return talk ? "warp" : clips ? "gate" : "draw"; },
    get debug() { return { a: ctl.a, spk: ctl.spk, f: ctl.f, on: ctl.on, plan: !!ctl.plan, planReady: !!(ctl.plan && ctl.plan.res), t: clips ? clips.talk.currentTime : 0 }; } };
})();
