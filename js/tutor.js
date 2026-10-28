// ==========================================
// AI 튜터: 구글 Gemini와 실시간 영어 대화
// - 사용자가 자기 Gemini API 키(구글 AI Studio에서 무료로 만듦)를 한 번 붙여 넣으면 이 기기에서 구글로 바로 연결한다.
//   키는 이 기기에만 저장되고 우리 서버를 거치지 않는다. 사용량도 각자의 무료 한도에서 쓴다
// - 대화: Gemini Live(실시간 음성). 마이크 소리를 바로 보내고 튜터 목소리를 바로 받아 튼다 (듣기·생각·말하기를 한 모델이 한 번에)
// - 교정·힌트·해석·한국어 도움·피드백은 따로 Gemini에게 글로 묻는다 (대화를 느리게 하지 않게)
// ==========================================

const GEMINI_API = "https://generativelanguage.googleapis.com/v1beta/models/";
// 글로 묻는 보조 일(교정·해석·한국어 도움·피드백)에 쓰는 모델. 일마다 다른 모델부터 써서 무료 사용량을 나눈다.
// 앞 모델의 무료 사용량을 다 쓰거나 잠시 막히면 다음 모델로 넘어간다 (말로 하는 대화는 아래 Gemini Live로)
const TUTOR_GEMINI_CHAINS = {
  chat: ["gemini-3.5-flash-lite", "gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3.8-flash"],   // 피드백 정리
  aux: ["gemini-3.1-flash-lite", "gemini-3.5-flash-lite", "gemini-3.6-flash"],
  fix: ["gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3.5-flash-lite"]   // 첨삭: 정확해야 해서 Flash부터 (막히면 Lite로)
};
const GEMINI_KEY_STORE = "geminiApiKey";
const GEMINI_KEY_PAGE = "https://aistudio.google.com/apikey";
// 튜터 그림: 입 모양별 이미지 3장(다문 입·반쯤 벌린 입·크게 벌린 입)을 넣으면 소리에 맞춰 바뀐다.
// 비워 두면 기본 캐릭터(SVG). 예: { closed: "images/tutor/closed.png", half: "images/tutor/half.png", open: "images/tutor/open.png" }
const TUTOR_AVATAR_FRAMES = null;
// 튜터: 이름 · 기본 목소리(Gemini Live 목소리) · 영상 폴더 (같은 사진에서 만든 반복 영상: idle 듣기 / talk 말하기 / poster 첫 화면)
// about: 튜터마다 정해 둔 자기 얘기 ("너는?"에 매번 다른 말을 지어내지 않고, 자기 얘기를 조금씩 나누게)
// 반응 영상 (act-이름.webm/mp4): 듣다가 끄덕이기 · 생각하기 · 웃기 · 놀라기 · 손 흔들기 · 긴 대기 (말하지 않을 때만 잠깐씩)
const TUTOR_ACTS = ["listen", "think", "laugh", "wow", "wave", "idle2"];
const TUTORS = {
  // face: 영상(세로 960)에서 얼굴 가운데(눈과 입 사이)의 높이 비율 — 영상 칸 크기가 바뀌어도 얼굴이 가운데쯤 오게 맞춘다
  emma: { name: "Emma", label: "Emma", gender: "f", voice: "Leda", media: "images/tutor/emma/web/", face: 0.42, acts: TUTOR_ACTS,
    style: "a sweet, bright K-pop idol girl in her early 20s chatting with her fans on a live stream: cheerful, warm and cute, with a light, youthful voice",
    about: "You're in your early 20s. You grew up in Los Angeles, moved to Seoul two years ago, and teach English online. You love iced lattes, spicy rice cakes, K-dramas and dance practice, and you have a lazy cat named Mochi. You're cheerful, a little clumsy, and you laugh easily." },
  jay: { name: "Jay", label: "Jay", gender: "m", voice: "Puck", media: "images/tutor/jay/web/", face: 0.45, acts: TUTOR_ACTS,
    style: "a gentle, charming K-pop idol boy in his early 20s chatting with his fans on a live stream: soft, warm and sweet, calm and friendly, with a youthful voice",
    about: "You're in your early 20s. You grew up in Seattle, moved to Seoul last year, and teach English online. You love basketball, playing guitar, hiking and late-night ramen, and you have a small dog named Bori. You're calm, kind and a bit shy, with a quiet sense of humor." }
};
function tutorCharId() { let v = null; try { v = localStorage.getItem("tutorChar"); } catch (e) {} return TUTORS[v] ? v : "emma"; }
const tutorChar = () => TUTORS[tutorCharId()];
const tutorName = () => tutorChar().name;
let tutorMessages = [];       // 대화 기록 { role, content } (system 포함 — 힌트·피드백·다시 연결할 때 쓴다)
let tutorLearnerLines = [];   // 학습자가 말한 문장 (힌트·피드백용)
let tutorCorrections = [];    // 교정한 문장 [{ said, better, why }] (피드백 정리용)
let tutorLearnerItems = [];   // 학습자 말풍선 [{ text, bubble, fix, why, check }] (check: 교정 확인 중인 요청)
let tutorSaidLines = [];      // 튜터가 한 말 (힌트·교정·돌아왔을 때 다시 물을 질문)
let tutorGreeting = "";       // 이번 대화의 첫 인사
let tutorBusy = false;
let tutorSessionToken = 0;
let tutorConvId = 0;          // 대화마다 하나 (피드백 판을 열어도 바뀌지 않는다 — 늦게 온 교정도 대화에 붙인다)
let tutorSpeaking = false;

// ---------- Gemini 키 (이 기기에만 · 암호화해서 저장) ----------
// 웹 앱은 Keychain 같은 기기 암호화 저장소를 쓸 수 없다. 대신 브라우저 밖으로 꺼낼 수 없는 암호 열쇠(Web Crypto, extractable=false)를
// IndexedDB에 두고, 키는 그 열쇠로 암호화한 글자만 저장한다 (저장 파일을 복사하거나 들여다봐도 키가 보이지 않게).
// 쓰는 동안에는 메모리에만 풀어 둔다. 암호화를 못 쓰는 브라우저(일부 사생활 보호 창)면 예전처럼 그대로 저장한다
const GEMINI_KEY_ENC = "geminiApiKeyEnc";
let tutorKeyMem = "";          // 풀어 둔 키 (메모리에만)
let tutorKeyLoading = null;    // 저장된 키 풀기 (한 번)
let tutorKeyDone = false;
let tutorKeyQueue = Promise.resolve();   // 저장·지우기를 차례대로 (빠르게 연결·끊기를 해도 순서가 꼬이지 않게)
const tutorCanEncrypt = () => !!(window.crypto && crypto.subtle && window.indexedDB);
function tutorKeyDb() {
  return new Promise((res, rej) => {
    const r = indexedDB.open("engo-secure", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("keys");
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  });
}
/** 암호 열쇠 (create면 없을 때 새로 만든다. 밖으로 꺼낼 수 없는 열쇠라 저장소를 복사해도 쓸 수 없다) */
async function tutorCryptoKey(create) {
  const db = await tutorKeyDb();
  try {
    let k = await new Promise((res, rej) => { const q = db.transaction("keys").objectStore("keys").get("gemini"); q.onsuccess = () => res(q.result || null); q.onerror = () => rej(q.error); });
    if (!k && create) {
      k = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
      await new Promise((res, rej) => { const tx = db.transaction("keys", "readwrite"); tx.objectStore("keys").put(k, "gemini"); tx.oncomplete = res; tx.onerror = () => rej(tx.error); });
    }
    return k;
  } finally { db.close(); }
}
async function tutorKeyEncrypt(plain) {
  const ck = await tutorCryptoKey(true);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, ck, new TextEncoder().encode(plain)));
  const all = new Uint8Array(iv.length + ct.length); all.set(iv); all.set(ct, iv.length);
  let bin = ""; all.forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin);
}
async function tutorKeyDecrypt(text) {
  const all = Uint8Array.from(atob(text), c => c.charCodeAt(0));
  const ck = await tutorCryptoKey(false);
  if (!ck) throw new Error("암호 열쇠가 없어요");
  return new TextDecoder().decode(await crypto.subtle.decrypt({ name: "AES-GCM", iv: all.slice(0, 12) }, ck, all.slice(12)));
}
/** 기기에 저장: 암호화해서 (못 하면 그대로) */
async function tutorKeyPersist(k) {
  if (!k) { try { localStorage.removeItem(GEMINI_KEY_ENC); localStorage.removeItem(GEMINI_KEY_STORE); } catch (e) {} return; }
  try {
    if (!tutorCanEncrypt()) throw new Error("암호화를 쓸 수 없는 브라우저");
    const enc = await tutorKeyEncrypt(k);
    localStorage.setItem(GEMINI_KEY_ENC, enc); localStorage.removeItem(GEMINI_KEY_STORE);
  } catch (e) {
    console.warn("키를 암호화하지 못해 그대로 저장해요", e);
    try { localStorage.setItem(GEMINI_KEY_STORE, k); localStorage.removeItem(GEMINI_KEY_ENC); } catch (e2) {}
  }
}
/** 앱을 열 때 한 번: 저장된 키를 풀어 메모리에 둔다 (예전에 그대로 저장된 키는 암호화해서 다시 저장) */
function tutorKeyLoad() {
  if (!tutorKeyLoading) tutorKeyLoading = (async () => {
    let plain = "", enc = "";
    try { plain = (localStorage.getItem(GEMINI_KEY_STORE) || "").trim(); enc = localStorage.getItem(GEMINI_KEY_ENC) || ""; } catch (e) {}
    if (enc) {
      try { tutorKeyMem = (await tutorKeyDecrypt(enc)).trim(); }
      catch (e) { console.warn("저장된 키를 풀지 못했어요 (다시 연결해 주세요)", e); try { localStorage.removeItem(GEMINI_KEY_ENC); } catch (e2) {} }
    }
    if (!tutorKeyMem && plain) tutorKeyMem = plain;
    if (plain && tutorCanEncrypt()) await tutorKeyPersist(tutorKeyMem);
  })().catch(e => console.warn(e)).finally(() => { tutorKeyDone = true; });
  return tutorKeyLoading;
}
tutorKeyLoad();
function tutorGetKey() { return tutorKeyMem; }
/** 키 바꾸기. persist=false면 메모리에만 (연결하기에서 확인이 끝나기 전) */
function tutorSetKey(k, persist = true) {
  tutorKeyMem = (k || "").trim();
  if (persist) { const v = tutorKeyMem; tutorKeyQueue = tutorKeyQueue.then(() => tutorKeyPersist(v)); }
}
const tutorReady = () => !!tutorGetKey();
/** 화면에 보여 줄 키 (끝 4자리만) */
const tutorKeyMasked = () => { const k = tutorGetKey(); return k ? "…" + k.slice(-4) : ""; };

// ---------- Gemini 요청 ----------
class GeminiError extends Error {
  constructor(message, status, reason) { super(message); this.status = status || 0; this.reason = reason || ""; }
}
const tutorModelIdx = { chat: 0, aux: 0, fix: 0 };   // 일마다 지금 쓰는 모델 (목록 안의 위치)
const tutorModelSince = { chat: 0, aux: 0, fix: 0 }; // 다음 모델로 넘어간 시각 (5분 지나면 가장 빠른 첫 모델부터 다시 시도)
// 모델별 생각 수준: 기본은 MINIMAL(가장 빠름). 못 쓰는 모델은 LOW로 (알아낸 것은 기기에 기억해서 헛요청을 줄인다)
const tutorThinking = (() => {
  let t = {};
  try {
    if (Date.now() - (+localStorage.getItem("tutorThinkingAt") || 0) > 7 * 86400000) localStorage.removeItem("tutorThinking");   // 일주일 지나면 다시 알아본다 (모델이 바뀌었을 수 있다)
    t = JSON.parse(localStorage.getItem("tutorThinking") || "{}") || {};
  } catch (e) {}
  return { "gemini-3.8-flash": "LOW", "gemini-3.7-flash": "LOW", ...t };
})();

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
/** 키는 맞지만 키 쪽 설정 문제(결제·지역 제한·API 꺼짐·정지)인지: 모델을 바꿔도 같으니 바로 알린다 */
const geminiSetupKind = e => {
  if (!e || geminiKeyProblem(e) || e.status === 429) return "";
  const m = (e.message || "") + " " + (e.reason || "");
  if (/location is not supported|not (available|supported) in your (country|region)|unsupported_location/i.test(m)) return "region";
  if (/BILLING|billing|payment|prepay/i.test(m)) return "billing";
  if (/SERVICE_DISABLED|CONSUMER_SUSPENDED|has not been used in project|is disabled|been suspended|PROJECT_DENIED/i.test(m)) return "disabled";
  return "";
};
/** 모델을 바꿔 다시 해 볼 만한 오류인지 (사용량 초과·모델 없음/권한 없음·서버 혼잡) */
const geminiTryNext = e => e && !geminiKeyProblem(e) && !geminiSetupKind(e) && (e.status === 429 || e.status === 404 || e.status === 403 || e.status === 400 || e.status >= 500 || e instanceof TypeError);
/** 여러 모델이 다 실패했을 때 보여 줄 오류: 키 문제 > 사용량 초과 > 늦음·혼잡 > 기타 > 모델 없음 */
const geminiErrRank = e => !e ? 0 : geminiKeyProblem(e) ? 7 : geminiSetupKind(e) ? 6 : e.reason === "OFFLINE" ? 5 : e.status === 429 ? 4 : (e.status >= 500 || e instanceof TypeError) ? 3 : (e.status === 404 || e.status === 403) ? 1 : 2;
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
  // 키 쪽 문제는 '앱 오류가 아니라 내 키의 한도·설정 문제'임을 분명히 알린다
  if (geminiKeyProblem(e)) return "연결한 Gemini 키가 맞지 않거나 만료됐어요 (앱 오류가 아니에요). 구글 AI Studio에서 키를 확인하고 다시 연결해 주세요.";
  const setup = geminiSetupKind(e);
  if (setup === "region") return "지금 있는 나라·지역에서는 구글이 이 Gemini 키를 막고 있어요 (앱 오류가 아니라 구글 쪽 지역 제한이에요).";
  if (setup === "billing") return "내 Gemini 키의 결제 설정에 문제가 있어요 (앱 오류가 아니에요). 구글 AI Studio에서 결제·요금제를 확인해 주세요.";
  if (setup === "disabled") return "내 Gemini 키의 프로젝트에서 Gemini API가 꺼져 있거나 정지됐어요 (앱 오류가 아니에요). 구글 AI Studio에서 새 키를 만들어 다시 연결해 주세요.";
  if (e.status === 429) {
    const m = e.message || "";
    if (/prepay|credits are depleted/i.test(m)) return "내 Gemini 키의 결제 크레딧을 다 썼어요 (앱 오류가 아니에요). 구글 AI Studio에서 결제 상태를 확인해 주세요.";
    if (/per ?day|PerDay|daily/i.test(m)) return "내 Gemini 키의 오늘 무료 사용 한도를 다 썼어요 (앱 오류가 아니에요). 내일 다시 쓸 수 있어요.";
    return "내 Gemini 키의 사용 한도가 잠시 찼어요 (앱 오류가 아니에요). 1분쯤 뒤에 다시 해 주세요.";
  }
  if (e.reason === "OFFLINE") return "인터넷에 연결되어 있지 않아요. 연결을 확인해 주세요.";
  if (e.reason === "TIMEOUT") return "구글 서버 응답이 너무 늦어요. 인터넷 연결을 확인하고 다시 해 주세요.";
  if (e.reason === "EMPTY") return "AI가 답을 만들지 못했어요. 한 번 더 해 주세요.";
  if (e.status === 404) return "지금은 이 키로 대화할 수 없어요. 잠시 뒤 다시 해 주세요.";
  if (e.status === 403) return "이 Gemini 키에 사용 권한이 없어요 (앱 오류가 아니에요). 구글 AI Studio에서 새 키를 만들어 다시 연결해 주세요.";
  if (e.status >= 500) return "구글 서버가 잠시 바빠요. 조금 뒤에 다시 해 주세요.";
  if (e instanceof TypeError) return "인터넷 연결을 확인해 주세요.";
  return e.message && /[가-힣]/.test(e.message) ? e.message : "문제가 생겼어요. 잠시 뒤 다시 해 주세요.";   // 영어 원문 오류는 보여 주지 않는다
}
// ---------- 예전 튜터 정리 ----------
// 예전에는 AI 모델(0.3~1.1GB)·음성 인식 모델을 기기에 받아 쓰거나, 튜터 목소리를 기기에서 만들어 저장해 두었다 (정해 둔 말 묶음·첫 인사).
// 이제 쓰지 않으니 남은 파일과 설정을 지운다 (한 번만). 앱의 다른 화면이 쓰는 자연스러운 음성(Kokoro) 모델은 그대로 둔다
async function tutorCleanupOldEngine() {
  try {
    if (localStorage.getItem("tutorOldEngineCleaned") === "2") return;
    if (typeof caches !== "undefined") {
      for (const k of await caches.keys()) if (/^(webllm|tvmjs|transformers-cache|faith-voice-tutor-)/.test(k)) await caches.delete(k);
    }
    Object.keys(localStorage).filter(k => /^(tutorModelReady|tutorSttReady|tutorProfile|tutorLoadingModel|tutorFailed:|tutorCrashCount:)/.test(k)).forEach(k => localStorage.removeItem(k));
    localStorage.setItem("tutorOldEngineCleaned", "2");
  } catch (e) { console.warn("예전 튜터 파일 정리 실패", e); }
}
setTimeout(tutorCleanupOldEngine, 4000);

// ---------- 화면 ----------
const tutorEl = id => document.getElementById(id);
const tutorIdleMsg = () => `${tutorName()}를 누르면 다시 들어요`;   // 쉬는 중: 튜터를 누르면 다시 듣기 시작 (말이 끝나면 저절로 듣는다)
function setTutorStatus(text, mode) {
  const st = tutorEl("tutor-status"); if (st) st.textContent = text;
  tutorSetMode(mode);
}
/** 표시만 바꾼다 (말하는 중·듣는 중·생각 중 색과 막대) */
let tutorPrevMode = "";
function tutorSetMode(mode) {
  const av = tutorEl("tutor-avatar"); if (av) av.dataset.mode = mode || "";
  const room = tutorEl("tutor-chat-area"); if (room) { room.dataset.mode = mode || ""; if (mode !== "listening") delete room.dataset.hearing; }
  // 내 말이 끝나 튜터가 생각하는 동안: 내 말에 반응한다 (웃긴 말엔 웃고, 신나는 말엔 놀라고, 아니면 생각하는 표정) — 대답 목소리가 오면 말하는 얼굴로
  if (mode === "thinking" && tutorPrevMode === "listening" && typeof TutorAvatar !== "undefined") {
    const me = Array.from(document.querySelectorAll("#tutor-log .tutor-msg.me")).pop(), t = me ? me.textContent : "";
    TutorAvatar.act(/\b(ha){2,}|\blol\b|funny|joke|hilarious|ㅋㅋ|ㅎㅎ/i.test(t) ? "laugh"
      : /\b(wow|amazing|awesome|won|winner|finally|excited|best|first time|passed|promoted|birthday)\b|!/i.test(t) ? "wow" : "think");
  }
  tutorPrevMode = mode || "";
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
  let live = ""; try { live = localStorage.getItem("tutorLiveModel") || ""; } catch (e) {}
  const ver = ((document.querySelector('script[src*="js/tutor.js"]') || {}).src || "").match(/v=(\d+)/);   // 앱 버전 (새 버전이 적용됐는지 확인용)
  el.textContent = (tutorReady() ? `AI: Google Gemini 실시간 대화 · 내 키(${tutorKeyMasked()})로 연결돼 있어요` : "AI: Google Gemini") + (ver ? ` · v${ver[1]}` : "");
  el.title = tutorReady() ? (live || TUTOR_LIVE_MODELS[0]) : "";
  if (!el.dataset.diag) { el.dataset.diag = "1"; let taps = [];   // 5번 빠르게 누르면 키보드 진단 표시 켜기·끄기
    el.addEventListener("click", () => { const now = Date.now(); taps = taps.filter(t => now - t < 3000); taps.push(now); if (taps.length >= 5) { taps = []; tutorKbDiag(!tutorKbDiagOn); } });
  }
}

// 대화 기록: 맨 아래를 보고 있으면 말풍선에 버튼·해석·팁·연습 결과가 붙어도 계속 맨 아래가 보이게 (위로 올려 읽는 중이면 그대로 둔다)
let tutorLogPinned = true;
function tutorLogFollow() {
  const log = tutorEl("tutor-log"); if (!log || log.dataset.follow) return;
  log.dataset.follow = "1";
  log.addEventListener("scroll", () => { const d = log.scrollHeight - log.scrollTop - log.clientHeight; tutorLogPinned = d < 60; }, { passive: true });
  new MutationObserver(() => { if (tutorLogPinned) log.scrollTop = log.scrollHeight; })
    .observe(log, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["class"] });
}
/** 튜터 페이지에 들어올 때 (core.js goTo) */
function renderTutorPage() {
  if (!tutorKeyDone) { tutorKeyLoad().then(() => { if (currentPageName === "tutor") renderTutorPage(); }); return; }   // 저장된 키를 푸는 중 (잠깐)
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
  tutorVirtualKeyboard(true);
  tutorAudioSession(true);
  tutorLockScroll(true);
  showTutorLobby();             // 바로 시작하지 않고 시작 화면부터 (튜터·수준·목소리를 고르고 '시작하기')
  tutorFitViewport();
  tutorRelayout();
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
  tutorLivePause();
  const room = tutorEl("tutor-chat-area"); if (room) room.classList.add("lobby");
  tutorEl("tutor-lobby").classList.remove("hidden");
  tutorRelayout();
  const going = tutorLearnerLines.length > 0;   // 하던 대화가 있으면 '이어서 대화하기'가 먼저
  tutorEl("tutor-start-btn").textContent = going ? "이어서 대화하기" : "대화 시작하기";
  setTimeout(() => { if (tutorLobbyOpen() && typeof TutorAvatar !== "undefined") TutorAvatar.act("wave"); }, 3500);   // 시작 화면에서 손을 흔들어 반긴다 (반응 영상을 받은 뒤)
  tutorEl("tutor-new-btn").classList.toggle("hidden", !going);
  setTutorStatus(`${tutorName()}와 대화할 준비가 됐어요`, "");
}
/** 시작하기 (누른 순간에 소리 장치를 깨워 둔다: 아이폰은 사용자가 누른 순간에만 소리를 켤 수 있다) */
function tutorStartFromLobby(fresh) {
  if (!tutorReady()) return;
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  tutorPrimeSpeech();
  tutorStopPreview();
  toggleTutorSheet();
  tutorEl("tutor-lobby").classList.add("hidden");
  const room = tutorEl("tutor-chat-area"); if (room) room.classList.remove("lobby");
  tutorLayout();
  const row = tutorEl("tutor-type-row"); if (row) { row.style.pointerEvents = "none"; setTimeout(() => { row.style.pointerEvents = ""; }, 450); }   // 시작하기를 두 번 눌러도 그 자리에 나타난 입력칸이 눌리지 않게
  tutorCallActive = true;
  tutorPausedAt = 0;                                   // (시작 화면에서 이어 가면 튜터가 반갑게 하던 질문을 다시 한다)
  if (!fresh && tutorLearnerLines.length) tutorLiveResume("lobby");
  else startTutorSession();
}
/** 목소리 들어 보기 (시작 화면) */
/** 시작 화면·설정의 목소리 칸 아래 안내 (상태 표시는 시작 화면에 가려 안 보여서) */
function tutorVoiceNote(text) {
  document.querySelectorAll(".tutor-voice-note").forEach(n => { n.textContent = text || ""; n.classList.toggle("hidden", !text); });
}
let tutorPreview = null, tutorPreviewSeq = 0;   // 목소리 들어 보기 (따로 짧게 연결해서 한 마디만 듣는다) { ws, player, seq }
function tutorPreviewButtons(state) {
  const label = { idle: "▶ 듣기", loading: "준비 중…", playing: "■ 그만" }[state];
  const name = { idle: "목소리 들어 보기", loading: "목소리 준비 중", playing: "목소리 그만 듣기" }[state];
  document.querySelectorAll(".tutor-voice-try").forEach(b => { b.textContent = label; b.dataset.state = state; b.setAttribute("aria-label", name); });
}
function tutorStopPreview() {
  clearTimeout(tutorPreviewDebounce);
  const p = tutorPreview; tutorPreview = null;
  if (p) {
    clearTimeout(p.timer);
    try { p.ws.close(); } catch (e) {}
    if (p.player) { NeuralTTS.stopAudio(); if (!tutorTurn) tutorSpeaking = false; }
  }
  tutorPreviewButtons("idle");
}
/** 목소리 들어 보기: 고른 목소리로 잠깐 연결해 튜터가 한 마디 한다 (대화와는 따로). fromChange: 목소리를 바꿔서 (누르기가 아니라 멈추지 않는다) */
function tutorPreviewVoice(fromChange, tries = 0) {
  if (tutorPreview && !fromChange && !tries) { tutorStopPreview(); return; }   // 듣는 중에 누르면 멈춘다
  if (tutorPreview) tutorStopPreview();
  if (!tutorReady()) { tutorPreviewButtons("idle"); return; }
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  if (tutorTurn || tutorSpeaking) tutorCutTutor();    // 대화 중 튜터가 말하고 있으면 끊고 들려준다
  tutorVoiceNote("");
  const seq = ++tutorPreviewSeq, name = tutorName();
  let model = TUTOR_LIVE_MODELS[0];
  try { const m = localStorage.getItem("tutorLiveModel"); if (TUTOR_LIVE_MODELS.includes(m)) model = m; } catch (e) {}
  model = TUTOR_LIVE_MODELS[(TUTOR_LIVE_MODELS.indexOf(model) + tries) % TUTOR_LIVE_MODELS.length];   // 안 되는 모델이면 다음 모델로
  let ws;
  try { ws = new WebSocket(TUTOR_LIVE_URL + "?key=" + encodeURIComponent(tutorGetKey())); } catch (e) { tutorVoiceNote("목소리를 들려주지 못했어요. 인터넷 연결을 확인해 주세요."); return; }
  ws.binaryType = "arraybuffer";
  const p = tutorPreview = { ws, seq, player: null, timer: 0, said: false };
  tutorPreviewButtons("loading");
  const fail = e => {
    if (tutorPreview !== p) return;
    tutorStopPreview();
    if (tries < TUTOR_LIVE_MODELS.length - 1 && geminiTryNext(e) && e.reason !== "TIMEOUT") { tutorPreviewVoice(true, tries + 1); return; }
    tutorVoiceNote("목소리를 들려주지 못했어요. " + geminiErrorText(e));
  };
  p.timer = setTimeout(() => fail(geminiTimeoutError()), 12000);
  ws.onopen = () => {
    try {
      ws.send(JSON.stringify({ setup: {
        model: "models/" + model,
        generationConfig: { responseModalities: ["AUDIO"], temperature: 0.6, speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: tutorVoiceId() } } } },
        systemInstruction: { parts: [{ text: `You are ${name}, a friendly English tutor. When the user gives you a line in quotes, say exactly that line in a warm, natural, cheerful voice, and nothing else.` }] }
      } }));
    } catch (e) { fail(e); }
  };
  ws.onmessage = ev => {
    if (tutorPreview !== p) return;
    const m = tutorLiveParse(ev.data); if (!m) return;
    if (m.setupComplete) {
      const line = { text: `"Hi! I'm ${name}. This is my voice. Shall we chat in English?"` };
      ws.send(JSON.stringify({ realtimeInput: line }));
      return;
    }
    const sc = m.serverContent; if (!sc) return;
    for (const part of (sc.modelTurn && sc.modelTurn.parts) || []) {
      const d = part.inlineData; if (!d || !d.data) continue;
      if (!p.player) {
        clearTimeout(p.timer);
        p.player = NeuralTTS.playStream(); tutorSpeaking = true;
        tutorPreviewButtons("playing");
        p.player.done.then(() => { if (tutorPreview === p) tutorStopPreview(); else if (!tutorTurn) tutorSpeaking = false; });
      }
      p.player.push(tutorPcm16ToF32(d.data), TUTOR_LIVE_OUT_RATE);
    }
    if (sc.generationComplete || sc.turnComplete || sc.interrupted) {
      if (p.player) p.player.end(); else fail(new GeminiError("빈 답이 왔어요", 503, "EMPTY"));
      try { ws.close(); } catch (e) {}
    }
  };
  ws.onclose = ev => { if (tutorPreview !== p) return; if (p.player) p.player.end(); else fail(tutorLiveCloseError(ev)); };   // (받은 소리는 끝까지 튼다)
}
/** 지금 대화를 지운다 (다른 튜터를 고르면) */
function tutorResetConversation() {
  stopTutorActivity();
  tutorLiveClose(true);
  tutorMessages = []; tutorLearnerLines = []; tutorLearnerItems = []; tutorCorrections = []; tutorSaidLines = [];
  tutorPausedAt = 0;
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
  tutorSetKey(key, false);   // 확인이 끝날 때까지는 메모리에만
  try {
    await geminiGenerate([{ role: "user", content: "Reply with just: OK" }], { temperature: 0, maxTokens: 20, chain: "aux" }).catch(e => { if (e.reason !== "EMPTY") throw e; });   // 빈 답이어도 키는 맞다
    tutorSetKey(key);
    inp.value = "";
    showTutorKeyMsg("", false);
    renderTutorPage();
  } catch (e) {
    console.warn("키 확인 실패", e);
    // 사용량 초과·서버 혼잡은 키 자체는 맞으니 저장해 둔다
    if (geminiKeyProblem(e) || !(e.status === 429 || e.status >= 500)) { tutorSetKey(prev, false); showTutorKeyMsg(geminiErrorText(e), true); }
    else {
      tutorSetKey(key);   // 키는 맞는데 구글이 바쁘거나 사용량이 찼다 → 키는 저장하고 시작 화면으로 (설명은 창으로, 숨겨진 칸에 쓰지 않게)
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
  tutorLiveClose(true);
  tutorCallActive = false; toggleTutorSheet();
  tutorSetKey("");
  tutorMessages = []; tutorLearnerLines = []; tutorLearnerItems = [];
  tutorEl("tutor-log").innerHTML = "";
  renderTutorPage();
}
/** 다른 화면·판으로 갈 때: 듣기·말하기를 멈춘다 (연결은 그대로 둔다 — 돌아오면 바로 이어서) */
function stopTutorActivity() {
  tutorSessionToken++;
  if (tutorPractice) tutorPracticeEnd("");
  tutorHelping = false;
  tutorLivePause();
  if (tutorSpeaking || tutorDeviceTalking) tutorSilenceAll();
  tutorDeviceTalking = false;
  if (!tutorPreview) tutorSpeaking = false;
  tutorKoTarget = null;
}
function leaveTutorPage() {
  if (tutorDialogOpen) tutorDialogOpen(false);
  const hd = document.querySelector("header"); if (hd) hd.inert = false;
  tutorMarkPause();
  stopTutorActivity();
  tutorLiveClose(false);        // 연결은 닫고 이어 가기 표는 둔다 (금방 돌아오면 하던 대화를 그대로 이어 간다)
  tutorStopPreview();
  tutorCallActive = false;
  toggleTutorSheet(undefined, false, "leave");
  tutorTypingHistoryOff(true);
  tutorAudioSession(false);
  tutorVirtualKeyboard(false);
  tutorLockScroll(false);
  const call = tutorEl("tutor-call"); if (call) call.style.top = call.style.height = call.style.bottom = "";   // 키보드용으로 줄였던 크기를 풀어 둔다
  const room = tutorEl("tutor-chat-area"); if (room) room.style.removeProperty("--kb");
  tutorKbOpen = false; tutorKbPushed = 0;
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
  if (tutorTypingHistory) { tutorTypingHistory = false; const inp = tutorEl("tutor-input"); if (inp && document.activeElement === inp) inp.blur(); return true; }   // 키보드를 닫은 뒤 뒤로 가기: 글쓰기만 끝낸다
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
  if (opened) { tutorMarkPause(true); tutorCancelListening(); }
  else if (closed && mode !== "leave") { tutorStopPreview(); tutorResume("sheet"); }   // 미리 듣던 목소리는 멈춘다 (안 그러면 다시 듣기가 켜지지 않는다)
}
function tutorTypingNow() {
  const inp = tutorEl("tutor-input"); if (!inp) return false;
  const v = inp.value.trim();
  return document.activeElement === inp || !!v;
}
let tutorNoMic = false;   // 마이크를 찾지 못했다: 저절로 켜지 않는다 (튜터를 누르면 다시 해 본다)
/** 설정·피드백 판이 열려 있는지 */
const tutorSheetOpen = () => ["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); });
/** 지금 내 말을 튜터에게 보내도 되는지 (튜터 말·부탁한 말을 기다리는 중·다른 판·화면 밖·글 쓰는 중이면 안 된다) */
function tutorCanListen() {
  if (!tutorCallActive || !tutorReady() || tutorMicDenied || tutorNoMic || tutorHelping) return false;
  if (!tutorLive || !tutorLive.ready || tutorSpeaking || (tutorTurn && !tutorTurn.cut) || tutorExpect.length || tutorOutbox.length || tutorPreview) return false;
  if (!tutorPageVisible() || document.hidden || tutorLobbyOpen() || tutorTypingNow()) return false;
  return !tutorSheetOpen();
}
/** 튜터 말이 끝났을 때 (또는 쉬다가 돌아왔을 때): 듣기를 다시 켠다 */
function tutorAfterSpeak() {
  if (!tutorCallActive || !tutorPageVisible()) return;
  if (tutorTypingNow()) {                          // 글로 쓰는 중이면 듣지 않는다
    const inp = tutorEl("tutor-input");
    if (inp.value.trim() && document.activeElement !== inp) setTutorStatus("입력칸의 문장을 보내기 단추로 보내 보세요", "");
    return;
  }
  if (!tutorCanListen()) { if (!tutorSpeaking && !tutorTurn && !tutorExpect.length && !tutorOutbox.length) setTutorStatus(tutorNoMic || tutorMicDenied ? "아래 입력칸에 적어서 말해 보세요" : tutorIdleMsg(), ""); return; }
  const gen = tutorLiveGen;
  setTimeout(() => { if (gen === tutorLiveGen && tutorCanListen()) tutorLiveListen(); }, tutorHandoffMs());
}
/** 튜터 말이 끝난 뒤 내 말을 보내기 시작하기까지: 스피커에서 아직 나는 끝소리가 마이크로 들어가지 않게 (블루투스처럼 늦게 들리면 그만큼 기다린다) */
function tutorHandoffMs() {
  if (typeof NeuralTTS === "undefined") return 250;
  const extra = tutorEnv().android ? 200 : 0;   // 안드로이드는 에코 제거를 꺼서 스피커 끝소리가 다 사라지기를 조금 더 기다린다
  return Math.max(150, Math.min(650, Math.round(NeuralTTS.outputLatencyMs() + 80 + extra)));
}
let tutorPausedAt = 0;   // 대화를 잠시 멈춘 때 (판을 열거나 화면을 떠날 때 — 돌아오면 튜터가 하던 얘기로 데려간다)
/** 학습자가 대답할 차례인 튜터의 마지막 질문 (없으면 "") */
function tutorPendingQuestion() {
  const lm = tutorMessages[tutorMessages.length - 1];
  if (lm && lm.role === "user") return "";
  return tutorSplitSentences(tutorSaidLines[tutorSaidLines.length - 1] || "").filter(tutorIsQuestion).pop() || "";
}
/** 대화를 잠시 멈출 때 (피드백·설정 판을 열거나 화면을 떠날 때) */
function tutorMarkPause() { if (!tutorPausedAt) tutorPausedAt = Date.now(); }
/** 쉬었다 돌아오면 친구처럼 이어 간다: 한참 쉬었으면 튜터가 반갑게 하던 질문을 다시 하고, 아니면 바로 듣는다
 *  (kind: sheet 판을 닫음 · lobby 시작 화면에서 이어서) */
function tutorResume(kind) {
  const token = tutorSessionToken, away = tutorPausedAt ? Date.now() - tutorPausedAt : 0;
  tutorPausedAt = 0;
  setTimeout(() => {
    if (token !== tutorSessionToken || !tutorCallActive || !tutorPageVisible() || document.hidden || tutorSheetOpen()) return;
    tutorHold = false;
    const live = tutorLive && tutorLive.ready, back = kind === "lobby" || away >= 12000;
    if (!live || tutorLiveStale) { tutorLiveResume(back ? kind : "quiet"); return; }   // 연결이 끊겼거나 설정을 바꿨으면 다시 연결해서 이어 간다
    if ((tutorTurn && !tutorTurn.cut) || tutorSpeaking || tutorExpect.length || tutorOutbox.length) return;   // 튜터가 말하는(만드는) 중이면 끝난 뒤 저절로 듣는다
    const missed = tutorUnheard; tutorUnheard = null;
    if (missed && missed.isConnected && missed._pcm && !tutorTypingNow()) { tutorReplayTurn(missed); return; }   // 멈춘 동안 온 튜터 말을 들려준다
    if (tutorTurn) return;                                                   // 멈춘 동안 온 말을 아직 받는 중: 다 받으면 들려준다
    if (back && tutorPendingQuestion() && !tutorTypingNow()) { tutorLiveSay(TUTOR_BACK_NOTE, { kind: "back" }); return; }
    tutorAfterSpeak();
  }, 250);
}
/** 듣기를 그만두고 마이크를 놓는다 (튜터 말은 그대로 둔다) */
function tutorCancelListening() {
  tutorRest();                                         // 마이크도 놓는다 (다시 들을 때 켠다)
  if (tutorPractice) tutorPracticeEnd("");
  if (!tutorSpeaking && !tutorTurn && !tutorExpect.length && !tutorOutbox.length) setTutorStatus(tutorIdleMsg(), "");
}
/** 튜터(위쪽 영상)를 누르면: 말하는 중이면 끊고 바로 듣기, 듣는 중이면 (말했으면) 바로 보내기·(아니면) 쉬기, 쉬는 중이면 다시 듣기 */
function tutorTapTutor(e) {
  if (e && e.target.closest && e.target.closest("button")) return;
  if (tutorSheetOpen()) { tutorCloseSheets(); return; }   // 판이 열려 있으면 닫기만
  const inp = tutorEl("tutor-input");
  if (document.activeElement === inp) inp.blur();       // 글 쓰는 중이면 끝낸다 (키보드를 닫아도 알려 주지 않는 브라우저에서 올라간 입력줄을 내리는 길)
  if (!tutorReady() || !tutorCallActive || tutorHelping) return;   // 시작 화면·한국어 표현을 찾는 중에는 반응하지 않는다
  tutorPrimeSpeech();
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  if ((tutorTurn && !tutorTurn.cut) || tutorSpeaking) {  // 말하는 중: 끊고 바로 내 차례
    tutorCutTutor();
    if (tutorMicDenied) { setTutorStatus("아래 입력칸에 적어서 말해 보세요", ""); return; }
    tutorNoMic = false;
    tutorLiveListen();
    return;
  }
  if (tutorMicDenied) { showMicPermissionHelp(); tutorCheckMicPermission(); return; }
  if (!tutorLive || !tutorLive.ready) { if (!tutorLiveConnecting) { tutorNoMic = false; tutorLiveResume("tap"); } return; }   // 연결이 끊겼으면 다시 연결
  if (tutorExpect.length || tutorOutbox.length) return;   // 부탁한 말을 기다리는 중
  if (tutorListening) {
    if (tutorHeardSomething()) { tutorManualSend(); return; }   // 말하던 중이면 기다리지 않고 바로 보낸다
    tutorRest(tutorIdleMsg());                          // 아무 말도 안 했으면 쉰다 (마이크도 놓는다)
    return;
  }
  tutorNoMic = false;
  tutorLiveListen();
}
/** 입력칸을 누르면 듣기를 멈추고, 입력을 마치고 나가면 다시 듣는다 */
function tutorInputFocus(on) {
  const room = tutorEl("tutor-chat-area");
  if (room) room.classList.toggle("typing", on);
  // 안드로이드: 누르는 순간 키보드가 올라올 자리를 어림해 미리 맞춘다 (크기를 늦게 알려 주거나 끝내 알려 주지 않는 브라우저가 있다). 실제 크기를 알게 되면 그걸로
  tutorKbGuess = !!on && tutorEnv().android && !!(window.matchMedia && matchMedia("(pointer: coarse)").matches);
  if (on) { tutorKbFocusAt = performance.now(); tutorKbTouched = false; }
  tutorKbPushed = 0;
  tutorFitViewport();
  tutorLayout();
  tutorRefit();
  setTimeout(() => { const log = tutorEl("tutor-log"); log.scrollTop = log.scrollHeight; }, 300);   // 자리가 바뀐 뒤 최근 대화가 보이게
  if (on) {
    if (tutorListening) tutorCancelListening();
    setTimeout(() => { if (tutorKbGuess && !tutorKbReal && tutorStageMode() && document.activeElement === tutorEl("tutor-input")) tutorTypingHistoryOn(); }, 800);
    return;
  }
  tutorTypingHistoryOff();
  setTimeout(() => { if (!tutorTypingNow()) tutorAfterSpeak(); }, 300);
}
// 키보드 크기를 알려 주지 않는 브라우저(삼성 인터넷)는 키보드를 닫아도 알 수 없다 → 글 쓰는 동안 기록을 하나 넣어 둔다:
// 뒤로 가기 첫 번째는 키보드가 받아 키보드를 닫고(안드로이드), 두 번째는 튜터를 떠나지 않고 글쓰기만 끝낸다 (올라간 입력줄이 내려온다)
let tutorTypingHistory = false;
function tutorTypingHistoryOn() {
  if (tutorTypingHistory || !tutorPageVisible()) return;
  tutorTypingHistory = true;
  try { history.pushState({ page: "tutor", modal: "tutor-typing" }, "", "#tutor"); } catch (e) {}
}
/** 글쓰기를 끝내면 넣어 둔 기록을 치운다 (다른 화면으로 가는 중이면 보통 기록으로 바꾼다) */
function tutorTypingHistoryOff(leaving) {
  if (!tutorTypingHistory) return;
  tutorTypingHistory = false;
  if (!history.state || history.state.modal !== "tutor-typing") return;   // 위에 판(설정·피드백) 기록이 쌓였으면 그대로 둔다
  if (leaving) history.replaceState({ page: "tutor" }, "", "#tutor");
  else { tutorPopSwallow = true; history.back(); }
}
// 휴대폰 키보드가 올라오면 입력칸이 키보드에 가리지 않게 맞춘다
//  - 휴대폰 세로 화면: 튜터 영상은 그대로 두고 대화·입력줄만 키보드 위로 올린다 (--kb)
//  - 넓은 화면·시작 화면: 대화 화면 전체를 키보드 위 영역에 맞춘다
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
  const call = tutorEl("tutor-call"), room = tutorEl("tutor-chat-area"), vv = window.visualViewport;
  if (!call || !vv) return;
  const setKb = px => { if (!room) return; if (px > 0) room.style.setProperty("--kb", Math.round(px) + "px"); else room.style.removeProperty("--kb"); };
  // 다른 화면에서 키보드를 열었을 때는 손대지 않는다 (튜터 화면에 들어왔을 때 줄어든 크기가 남지 않게)
  if (!tutorPageVisible()) { if (call.style.height) call.style.top = call.style.height = call.style.bottom = ""; setKb(0); tutorKbOpen = false; tutorBaseH = 0; return; }
  const inp0 = tutorEl("tutor-input"), typing = !!inp0 && document.activeElement === inp0;
  if (!typing || !tutorBaseH) tutorBaseH = window.innerHeight;   // 키보드가 없을 때의 높이 (화면 전체를 줄이는 브라우저도 알아채게)
  // 키보드 크기 알아내기 (먼저 맞는 것으로):
  // ① 보이는 영역(visualViewport)이 줄었다 — 아이폰·크롬 (밀려 올라간 만큼 offsetTop도 따라간다)
  // ② 키보드가 높이를 알려 준다 (VirtualKeyboard API, 안드로이드 크롬)
  // ③ 아무것도 알려 주지 않는다 (삼성 인터넷·앱 안 브라우저) — 키보드 높이를 어림한다 (잰 값이 있으면 그 값)
  const vvOpen = Math.max(window.innerHeight, tutorBaseH) - vv.height > 80, vkOpen = tutorVkOn && tutorVkH > 80;
  const open = vvOpen || vkOpen, guess = !open && tutorKbGuess && typing;
  let top = 0, height = 0, kb = 0;                   // height 0: 화면 전체 그대로
  if (tutorStageMode()) {
    if (vvOpen) { top = vv.offsetTop; height = tutorBaseH; kb = tutorBaseH - vv.height; }   // 화면이 줄거나 밀려도 영상은 키보드 없을 때 크기·자리 그대로
    else if (vkOpen) kb = tutorVkH;
    else if (guess) {
      // 크기를 알려 주지 않는 브라우저는 키보드에 가려진 입력칸을 보여 주려고 화면 전체를 밀어 올린다 (영상도 함께 밀려 튜터가 사라진다).
      // 입력칸을 미리 키보드 위로 올려 두면 밀어 올리지 않는다. 그래도 밀어 올렸으면(키보드가 어림보다 크다) 그만큼 영상을 내려 제자리에 보이게
      kb = tutorKbShift();
      if (tutorKbPushed) { top = tutorKbPushed; height = tutorBaseH; }
    }
  } else if (vvOpen) { top = vv.offsetTop; height = vv.height; }
  else if (vkOpen) { top = vv.offsetTop; height = window.innerHeight - tutorVkH - vv.offsetTop; }
  else if (guess) height = window.innerHeight - tutorKbShift();
  const log = tutorEl("tutor-log");
  const pinned = log && log.scrollHeight - log.scrollTop - log.clientHeight < 40;   // 맨 아래를 보고 있었으면 크기가 바뀐 뒤에도 맨 아래로
  if (pinned) requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; });
  // 아이폰은 입력칸을 보여 주려고 넘침을 숨긴 칸까지 밀어 올리기도 한다 → 제자리로 (튜터가 잘려 보이지 않게)
  [call, room].forEach(el => { if (el && el.scrollTop) el.scrollTop = 0; });
  if (height) { call.style.top = top + "px"; call.style.height = height + "px"; call.style.bottom = "auto"; }
  else {
    call.style.top = call.style.height = call.style.bottom = "";
    // 아이폰은 키보드가 뜰 때 페이지를 위로 밀어 올리고, 닫혀도 그대로 두는 일이 있다 → 제자리로
    if (!open && (window.scrollY || document.documentElement.scrollTop)) window.scrollTo(0, 0);
  }
  setKb(kb);
  // 키보드 위 자리가 좁으면 대화를 영상 아래쪽에 겹쳐 올린다 (영상 크기는 그대로, 얼굴은 위쪽이라 가리지 않는다)
  let pull = 0;
  if (room && kb && room.classList.contains("stage")) {
    const vis = (tutorBaseH || window.innerHeight) - kb, hh = parseFloat(room.style.getPropertyValue("--hero-h")) || 0, row = tutorEl("tutor-type-row");
    pull = Math.max(0, Math.round(vis * 0.38) - (vis - hh - (row ? row.offsetHeight : 0)));
  }
  if (room) { room.style.setProperty("--log-pull", pull + "px"); room.classList.toggle("pulled", pull > 0); }
  // 안드로이드 뒤로 가기로 키보드만 닫으면 입력칸에 초점이 남아 '글 쓰는 중'으로 멈춰 있게 된다 → 초점을 풀어 다시 듣게
  if (tutorKbReal && !open && typing) inp0.blur();
  tutorKbReal = open;
  if (open) tutorKbGuess = false;                    // 실제 키보드 크기를 알려 주는 화면이다 (어림은 그만)
  tutorKbOpen = open || guess;
}
let tutorKbGuess = false, tutorKbReal = false;   // 키보드가 뜰 텐데 아직(또는 끝내) 크기를 알려 주지 않는 화면
/** 안드로이드 앱 안 브라우저(WebView)인지 */
const tutorInWebView = () => /Android/i.test(navigator.userAgent || "") && /; wv\)/.test(navigator.userAgent || "");
// 키보드 높이는 화면 크기별로 잰 값을 기억한다 (가로·세로가 다르다)
let tutorKbShiftMap = null;
const tutorKbKey = () => window.innerWidth + "x" + (tutorBaseH || window.innerHeight);
function tutorKbShifts() {
  if (!tutorKbShiftMap) { try { const o = JSON.parse(localStorage.getItem("tutorKbShift") || "{}"); tutorKbShiftMap = o && typeof o === "object" ? o : {}; } catch (e) { tutorKbShiftMap = {}; } }
  return tutorKbShiftMap;
}
/** 키보드가 덮는 높이: 잰 값이 있으면 그 값, 없으면 어림 (세로 화면은 41.5% · 삼성 키보드 숫자 줄·도구 줄 포함으로 잰 값, 가로 화면은 절반쯤) */
function tutorKbShift() {
  const saved = +tutorKbShifts()[tutorKbKey()];
  if (saved > 0) return saved;
  const H = tutorBaseH || window.innerHeight;
  const W = window.innerWidth;   // 가로 화면은 절반쯤, 펼친 폴더블·태블릿은 키보드가 넓은 만큼 높다 (폴더블에서 잰 값 45%)
  return Math.round(W > H ? Math.max(150, Math.min(420, H * 0.55)) : W >= 600 ? Math.max(260, Math.min(560, H * 0.48)) : Math.max(240, Math.min(520, H * 0.415)));
}
function tutorKbSave(K) {
  const map = tutorKbShifts();
  map[tutorKbKey()] = K;
  try { localStorage.setItem("tutorKbShift", JSON.stringify(map)); } catch (e) {}
}
// 키보드가 어림보다 커서 브라우저가 화면을 밀어 올렸는지 재기: 화면을 밀어 올리면 누른 곳의 화면 좌표(screenY)와 페이지 좌표(clientY)의
// 차이가 그만큼 줄어든다 → 키보드가 없을 때 잰 차이(기준)와 견줘 밀어 올린 높이 P를 알아낸다
let tutorKbBase = null, tutorKbBaseY = 0, tutorKbScreenOk = false, tutorKbFocusAt = 0, tutorKbTouched = false, tutorKbLastP = null, tutorKbPushed = 0;
document.addEventListener("touchstart", e => {
  const t = e.touches && e.touches[0], vv = window.visualViewport;
  if (!t || !isFinite(t.screenY) || !isFinite(t.clientY) || (vv && Math.abs((vv.scale || 1) - 1) > 0.01)) return;   // 확대한 상태에서는 재지 않는다
  const d = t.screenY - t.clientY, a = document.activeElement, inp = tutorEl("tutor-input");
  if (!inp || a !== inp) {
    if (a && (a.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))) return;   // 다른 입력칸의 키보드가 떠 있을 수 있다
    // 서로 다른 높이를 눌러도 차이가 같아야 screenY를 믿는다 (화면 좌표를 제대로 주지 않는 브라우저도 있다)
    if (tutorKbBase !== null && Math.abs(t.clientY - tutorKbBaseY) > 60 && Math.abs(d - tutorKbBase) <= 2) tutorKbScreenOk = true;
    tutorKbBase = d; tutorKbBaseY = t.clientY;
    return;
  }
  if (!tutorKbGuess || tutorKbBase === null || !tutorKbScreenOk || !tutorStageMode()) return;
  const P = Math.round(tutorKbBase - d), H = tutorBaseH || window.innerHeight;
  tutorKbLastP = P;
  if (tutorKbPushed) { if (Math.abs(P) < 24) inp.blur(); return; }   // 밀어 올림이 없어졌다 = 뒤로 가기로 키보드만 닫았다 → 입력을 끝내고 원래 화면으로
  if (tutorKbTouched || performance.now() - tutorKbFocusAt < 1000) return;   // 키보드가 다 올라온 뒤 처음 누를 때만 (그 뒤로는 손으로 화면을 옮겼을 수 있다)
  tutorKbTouched = true;
  if (P < 24 || P > H * 0.65) return;               // 밀어 올리지 않았다 (어림이 맞았다)
  // 입력칸을 보이는 영역 가운데로 맞추느라 P만큼 밀어 올렸다 → 키보드 높이를 거꾸로 계산해 기억하고(다음부터 맞게), 이번에는 영상을 P만큼 내려 제자리에
  // (올려 두기 전 자리를 보고 끝까지 밀어 올린 거라면 밀어 올린 높이가 곧 키보드 높이다)
  const r = inp.getBoundingClientRect();
  let K = Math.round(H - 2 * ((r.top + r.bottom) / 2 - P));
  if (!(K > tutorKbShift() && K <= H * 0.7 && P < K)) K = P;
  if (K < H * 0.25 || K > H * 0.7) return;
  if (K > tutorKbShift() + 2) tutorKbSave(K + 4);
  tutorKbPushed = P;
  setTimeout(() => { tutorFitViewport(); tutorLayout(); }, 300);   // 누르는 동안에는 화면을 옮기지 않는다 (누른 단추가 비켜 가지 않게)
}, { capture: true, passive: true });
if (window.visualViewport) { visualViewport.addEventListener("resize", tutorFitViewport); visualViewport.addEventListener("scroll", tutorFitViewport); window.addEventListener("resize", tutorFitViewport); }
window.addEventListener("orientationchange", () => { tutorBaseH = 0; });
// 안드로이드 크롬(홈 화면 앱 포함)은 키보드가 뜨면 화면을 밀어 올려 위쪽 튜터가 화면 밖으로 나가 버린다.
// 튜터 화면에서는 키보드가 화면 위에 덮이게 하고(VirtualKeyboard API), 알려 준 키보드 높이만큼 대화 화면을 직접 줄인다
let tutorVkOn = false, tutorVkH = 0;
function tutorVirtualKeyboard(on) {
  const vk = navigator.virtualKeyboard;
  if (!vk || !("overlaysContent" in vk) || tutorInWebView()) return;
  try { vk.overlaysContent = !!on; tutorVkOn = !!on && !!vk.overlaysContent; } catch (e) { tutorVkOn = false; }   // 받아들이지 않는 브라우저도 있다 (삼성 인터넷)
  if (!on) tutorVkH = 0;
}
if (navigator.virtualKeyboard && navigator.virtualKeyboard.addEventListener) {
  navigator.virtualKeyboard.addEventListener("geometrychange", e => {
    const r = (e && e.target && e.target.boundingRect) || navigator.virtualKeyboard.boundingRect;
    tutorVkH = Math.round((r && r.height) || 0);
    tutorKbNote("vk " + tutorVkH);
    if (tutorVkOn) { tutorFitViewport(); tutorRefit(); }
  });
}
// ---------- 키보드 진단 (설정 맨 아래 버전 글자를 5번 누르면 켜고 끈다) ----------
// 실제 기기에서 키보드가 뜰 때 화면 크기·위치 값이 어떻게 바뀌는지 보여 준다 (원인을 확인하는 용도)
let tutorKbDiagOn = false, tutorKbDiagTimer = 0;
/** 앱 버전 (index.html이 붙인 ?v= 숫자) */
const tutorAppVer = () => (((document.querySelector('script[src*="js/tutor.js"]') || {}).src || "").match(/v=(\d+)/) || [])[1] || "";
const tutorKbLog = [];
function tutorKbNote(what) {
  if (!tutorKbDiagOn) return;
  const vv = window.visualViewport || {};
  tutorKbLog.push(`${(performance.now() / 1000).toFixed(1)} ${what} ih${window.innerHeight} vv${Math.round(vv.height || 0)}/${Math.round(vv.offsetTop || 0)}`);
  while (tutorKbLog.length > 7) tutorKbLog.shift();
}
function tutorKbDiag(on) {
  tutorKbDiagOn = !!on;
  try { if (on) localStorage.setItem("tutorKbDiag", tutorAppVer()); else localStorage.removeItem("tutorKbDiag"); } catch (e) {}   // 켠 버전에서만 (새 버전이 나오면 저절로 꺼진다)
  clearInterval(tutorKbDiagTimer);
  let box = tutorEl("tutor-kb-diag");
  if (!on) { if (box) box.remove(); return; }
  if (!box) {
    box = document.createElement("pre"); box.id = "tutor-kb-diag";
    box.style.cssText = "position:absolute;left:4px;right:4px;top:calc(58px + env(safe-area-inset-top));z-index:50;margin:0;padding:6px 8px;max-height:40%;overflow:hidden;font:10px/1.35 monospace;white-space:pre-wrap;word-break:break-all;color:#0f0;background:rgba(0,0,0,0.78);border-radius:8px;pointer-events:none";
    const room = tutorEl("tutor-chat-area"); if (room) room.appendChild(box);
  }
  const r = el => { if (!el) return "-"; const b = el.getBoundingClientRect(); return `${Math.round(b.top)}~${Math.round(b.bottom)}`; };
  const upd = () => {
    const vv = window.visualViewport || {}, vk = navigator.virtualKeyboard, call = tutorEl("tutor-call"), main = document.querySelector("main");
    const ua = navigator.userAgent || "";
    box.textContent = [
      `v${tutorAppVer()} wv:${tutorInWebView()} dpr:${window.devicePixelRatio} scr:${screen.width}x${screen.height} out:${window.outerWidth}x${window.outerHeight}`,
      `inner:${window.innerWidth}x${window.innerHeight} client:${document.documentElement.clientHeight} vv:${Math.round(vv.width || 0)}x${Math.round(vv.height || 0)} off:${Math.round(vv.offsetTop || 0)} pageTop:${Math.round(vv.pageTop || 0)} scale:${(vv.scale || 1).toFixed(2)}`,
      `scrollY:${Math.round(window.scrollY)} html:${document.documentElement.scrollTop} body:${document.body.scrollTop} main:${main ? main.scrollTop : "-"} call:${call ? call.scrollTop : "-"} room:${(tutorEl("tutor-chat-area") || {}).scrollTop}`,
      `vk:${!!vk}${vk ? ` overlay:${vk.overlaysContent} rect:${Math.round((vk.boundingRect || {}).height || 0)}` : ""} vkOn:${tutorVkOn} vkH:${tutorVkH} guess:${tutorKbGuess} real:${tutorKbReal} open:${tutorKbOpen}`,
      `kb stage:${tutorStageMode()} --kb:${(tutorEl("tutor-chat-area") || document.body).style.getPropertyValue("--kb") || "-"} est:${tutorKbShift()} saved:${tutorKbShifts()[tutorKbKey()] || "-"} pushed:${tutorKbPushed} base:${tutorKbBase === null ? "-" : Math.round(tutorKbBase)} ok:${tutorKbScreenOk} P:${tutorKbLastP === null ? "-" : tutorKbLastP}`,
      `call top:${call ? call.style.top || "-" : "-"} h:${call ? call.style.height || "-" : "-"} rect:${r(call)} hero:${r(document.querySelector(".talk-hero"))} input:${r(tutorEl("tutor-input"))} focus:${document.activeElement && document.activeElement.id}`,
      `ua:${ua.replace(/^Mozilla\/5\.0 /, "").slice(0, 110)}`,
      ...tutorKbLog
    ].join("\n");
  };
  upd(); tutorKbDiagTimer = setInterval(upd, 300);
}
["resize"].forEach(t => window.addEventListener(t, () => tutorKbNote("win-" + t)));
if (window.visualViewport) { visualViewport.addEventListener("resize", () => tutorKbNote("vv-resize")); visualViewport.addEventListener("scroll", () => tutorKbNote("vv-scroll")); }
document.addEventListener("focusin", e => { if (e.target && e.target.id === "tutor-input") tutorKbNote("focus"); });
document.addEventListener("focusout", e => { if (e.target && e.target.id === "tutor-input") tutorKbNote("blur"); });
window.addEventListener("scroll", () => tutorKbNote("win-scroll " + Math.round(window.scrollY)), { passive: true });
// 앱 안 브라우저에서 뒤로 가기로 키보드만 닫으면 아래로 내려 둔 화면이 그대로 남는다 → 튜터 화면 바깥(위쪽 빈 곳)을 누르면 입력을 끝낸다
document.addEventListener("pointerdown", e => {
  const inp = tutorEl("tutor-input"), call = tutorEl("tutor-call");
  if (!tutorKbGuess || !inp || document.activeElement !== inp || !call) return;
  if (!call.contains(e.target) || e.target === call) inp.blur();
}, true);
try { if (localStorage.getItem("tutorKbDiag") === tutorAppVer()) setTimeout(() => tutorKbDiag(true), 1500); } catch (e) {}
// 튜터 화면에서는 페이지 자체도 스크롤되지 않게 (키보드가 입력칸을 보여 주려고 밀어 올려도 제자리로)
window.addEventListener("scroll", () => { if (tutorVkOn && tutorPageVisible() && (window.scrollY || document.documentElement.scrollTop)) window.scrollTo(0, 0); }, { passive: true });

// ---------- 화면 배치: 튜터 영상 ↔ 대화 ----------
// 상황(보통·힌트·글쓰기·시작 화면)과 지금 보이는 화면 크기(키보드가 올라오면 작아진다)에 맞춰 튜터 영상 칸의 높이를 정하고,
// 칸이 작아져도 얼굴이 칸 가운데쯤 오게 맞춘다. 넓은 화면(컴퓨터·가로로 돌린 화면)은 튜터를 왼쪽, 대화를 오른쪽에 둔다
const TUTOR_VIDEO = { w: 720, h: 960 };     // 튜터 영상 크기 (세로 영상)
/** 휴대폰 세로 화면(영상이 화면 전체 + 대화는 자막)인지: 시작 화면이 아니고 넓은 화면(컴퓨터·가로 화면)이 아닐 때.
 *  키보드가 올라와 화면이 줄어도 바뀌지 않게 키보드 없을 때의 높이로 판단한다 */
function tutorStageMode() {
  const room = tutorEl("tutor-chat-area");
  return !!room && !room.classList.contains("lobby");   // 대화 중이면 (세로 화면·넓은 화면 모두) 키보드가 올라와도 영상은 그대로
}
/** 넓은 화면(컴퓨터·가로 화면·펼친 폴더블): 왼쪽 영상 + 오른쪽 대화. 키보드가 올라와도 바뀌지 않게 키보드 없을 때의 높이로 판단한다 */
function tutorWideMode() {
  const w = window.innerWidth, h = Math.max(window.innerHeight, tutorBaseH || 0);
  return w >= 600 && w > h * 0.8;
}
let tutorLayoutRaf = 0;
function tutorRelayout() { if (!tutorLayoutRaf) tutorLayoutRaf = requestAnimationFrame(() => { tutorLayoutRaf = 0; tutorLayout(); }); }
function tutorLayout() {
  const call = tutorEl("tutor-call"), room = tutorEl("tutor-chat-area");
  if (!call || !room || room.classList.contains("hidden") || !tutorPageVisible()) return;
  const CW = call.clientWidth, CH = call.clientHeight;
  if (!CW || !CH) return;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lobby = room.classList.contains("lobby");
  const wide = !lobby && tutorWideMode(), stage = !lobby && !wide;
  room.classList.toggle("wide", wide);
  room.classList.toggle("stage", stage);
  const W = room.clientWidth, H = room.clientHeight;
  // 작게: (휴대폰 세로 화면이 아닌) 시작 화면에서 키보드가 올라왔거나 낮은 화면
  const touch = !!(window.matchMedia && matchMedia("(pointer: coarse)").matches);
  const compact = !wide && !stage && ((touch && room.classList.contains("typing")) || tutorKbOpen || H < 520);
  room.classList.toggle("compact", compact);
  const hero = room.querySelector(".talk-hero");
  let h, anchor;                                   // anchor: 얼굴 가운데가 놓일 칸 안의 높이 비율
  if (wide) { h = H; anchor = 0.42; room.style.setProperty("--wide-hero-h", Math.max(200, H - 32) + "px"); }   // 영상 높이 고정 (키보드가 올라와 오른쪽 대화만 줄어도 그대로)
  // 휴대폰 세로 화면: 위에 영상 통화 화면 (시작 화면과 같은 크기: 키보드가 없을 때 높이의 53% — 키보드가 올라와도 그대로), 아래로 대화
  else if (stage) { h = clamp(H * 0.53, 220, Math.min(640, W * 1.3)); anchor = 0.5; }
  else if (lobby) {
    const sheet = tutorEl("tutor-lobby"), sh = sheet ? sheet.offsetHeight : H * 0.6;
    h = clamp(H - sh + 30, Math.min(H, 200), H);   // 시작 화면 판 위로 보이는 만큼 (얼굴이 그 안에 오게)
    anchor = 0.5;
  } else if (compact) { h = clamp(H * 0.34, 116, 240); anchor = 0.52; }
  else { h = clamp(H * 0.46, 180, Math.max(260, W * 1.25)); anchor = 0.44; }
  h = Math.round(h);
  room.style.setProperty("--hero-h", h + "px");
  // 영상은 칸을 꽉 채운다 (넘치는 쪽은 잘림): 세로로 넘치면 얼굴이 anchor 높이에 오도록 잘라 낼 위치를 정한다
  const hw = (hero && hero.clientWidth) || W, hh = wide ? ((hero && hero.clientHeight) || H) : h;
  const sc = Math.max(hw / TUTOR_VIDEO.w, hh / TUTOR_VIDEO.h), vh = TUTOR_VIDEO.h * sc;
  let y = 50;
  if (vh > hh + 1) y = clamp(((tutorChar().face || 0.42) * vh - hh * anchor) / (vh - hh), 0, 1) * 100;
  room.style.setProperty("--face-y", y.toFixed(1) + "%");
}
if (typeof ResizeObserver !== "undefined") {
  const ro = new ResizeObserver(() => tutorRelayout());
  ["tutor-call", "tutor-lobby"].forEach(id => { const el = tutorEl(id); if (el) ro.observe(el); });
} else window.addEventListener("resize", tutorRelayout);
// 입력칸을 누르면 브라우저가 입력칸을 보여 주려고 넘침을 숨긴 칸(대화 화면)까지 밀어 올린다 → 튜터가 화면 밖으로 사라진다.
// 이 칸들은 스크롤되면 안 되므로 바로 제자리로 (대화 기록 칸만 스크롤된다. 키보드 위 크기는 tutorFitViewport가 맞춘다)
["tutor-call", "tutor-chat-area"].forEach(id => {
  const el = tutorEl(id);
  if (el) el.addEventListener("scroll", () => { if (el.scrollTop || el.scrollLeft) { el.scrollTop = 0; el.scrollLeft = 0; } }, { passive: true });
});
// Esc: 열린 판을 닫는다 (알림 창은 창이 직접 닫는다)
document.addEventListener("keydown", e => {
  if (e.key !== "Escape" || tutorDialogOpen || !tutorPageVisible()) return;
  if (["settings", "feedback"].some(n => { const el = tutorEl("tutor-sheet-" + n); return el && !el.classList.contains("hidden"); })) tutorCloseSheets();
  else return;
  e.preventDefault();
});
// 다른 앱으로 가면 듣기·말하기를 멈추고(마이크를 붙잡고 있지 않게), 돌아오면 이어 간다
document.addEventListener("visibilitychange", () => {
  if (!tutorCallActive || !tutorPageVisible()) return;
  if (document.hidden) { tutorMarkPause(); stopTutorActivity(); setTutorStatus(tutorIdleMsg(), ""); return; }
  if (!tutorSheetOpen()) tutorResume("sheet");
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
  try { localStorage.setItem("tutorChar", id); } catch (e) {}   // 목소리는 튜터마다 따로 기억한다
  tutorStopPreview();
  stopTutorSpeech();
  renderTutorChars(); fillTutorVoices();
  TutorAvatar.remount();
  tutorRelayout();
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
  if (tutorLive || tutorLiveHandle) tutorLiveStale = true;   // 이어 갈 때 새 수준으로 다시 연결한다
  setTutorStatus(`이제 ${tutorLevel().label} 수준으로 말할게요`, "");
}

// ---------- 프롬프트 ----------
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
    "- This is a live voice call: you hear the student and they hear you. Start every reply with a short, natural reaction that really fits what the student said (\"Oh, nice!\", \"Really?\", \"Oh no!\", \"Haha, that's funny!\", \"Aw, how cute!\"), and mix your reactions up a lot.",
    "- Chat like a friend, not an interviewer. React to the exact thing the student just said, sometimes add one short thing about yourself (an opinion or a small experience), then ask ONE easy question that follows from it. Then stop talking and wait. Keep your turns short so the student talks more than you.",
    "- If the student asks you something, first give a real, personal answer, then ask back.",
    "- Stay on a topic for a few turns by asking about details. When it runs out, move on through something already said (\"Speaking of food, ...\"). Remember what the student tells you (names, plans, likes, problems) and bring it up again later when it fits.",
    "- If the answer is very short (\"Yes.\", \"Fine.\"), react and ask an easier, more concrete follow-up. If the student says \"I don't know\" or seems stuck, make it easier: give two choices (\"Coffee or tea?\") or a short example answer they can copy.",
    "- The student is a learner speaking into a phone, so a word can sound unclear. Go with the most likely meaning. Only if you really can't understand, ask one short check question (\"Sorry, did you say Busan?\").",
    "- If the student makes a mistake, do not point it out (a corrected sentence is shown to them on screen). Reply naturally to what they meant, and where it fits, use the correct form of their words in your own sentence.",
    "- If the student speaks Korean or says they don't know how to say something, give a simple English way to say it, starting with \"You can say:\", and encourage them to try it.",
    "- If the student asks what a word means, explain it simply in English with a short example.",
    ...tutorLevel().style.map(x => "- " + x),
    "- Keep every sentence short and easy to say out loud (about 12 words or fewer). Speak clearly, at a relaxed pace" + (tutorLevelId() === "beginner" ? ", a little slower than usual." : "."),
    "- Speak only English. Don't repeat yourself, and don't start two replies the same way. Sound like a real person talking, not like you're reading."
  ].join("\n");
}
/** 노트 표현을 대화 속에서 다시 써 보게 (간격을 두고 다시 쓰는 연습) */
function tutorNotesPrompt() {
  const list = tutorNotesForPrompt();
  if (!list.length) return "";
  return "\nThe student has been learning these expressions. When it fits naturally, ask questions that give the student a chance to use them. Never quiz the student or mention this list:\n" +
    list.map(x => "- " + x).join("\n");
}
function tutorSystemPrompt(history) {
  const past = history ? tutorTranscript(24) : "";
  return `You are ${tutorName()}, a warm, encouraging English conversation partner and teacher. Your vibe: ${tutorChar().style}. ${tutorChar().about} Keep these facts about yourself consistent (small everyday details that fit them are fine). ` +
    "Stay in character and don't bring up being an AI, but if the student sincerely asks whether you are an AI, say yes in a few friendly words and keep chatting.\n" +
    `Your student is a Korean adult at the ${tutorLevel().desc} level who wants to get comfortable speaking English. ` +
    "Chat about everyday life: the student's day, food, work, hobbies, family, weekend plans, travel and feelings, and follow what they're interested in.\n" +
    "Messages in parentheses that start with \"Note:\" come from the learning app, not from the student. Follow them exactly and never mention them.\n" +
    tutorStyle() + tutorNotesPrompt() +
    (past ? `\n\nYou are continuing a chat you already started (don't greet or introduce yourself again). The conversation so far:\n${past}` : "\nAfter your first greeting, don't greet or introduce yourself again.");
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

// 문장 끝이 아닌 점: 숫자 사이(6.25), Mr./Dr. 같은 약어, a.m.·p.m.·U.S.·e.g. 같은 한 글자씩 끊긴 약어
const TUTOR_DOT = "\u2024";
function tutorProtectDots(t) {
  return (t || "").replace(/(\d)\.(\d)/g, `$1${TUTOR_DOT}$2`).replace(/\b(Mr|Mrs|Ms|Dr|St|etc|vs)\./gi, `$1${TUTOR_DOT}`)
    .replace(/\b(?:[A-Za-z]\.){2,}/g, m => m.split(".").join(TUTOR_DOT));
}
const tutorRestoreDots = t => t.split(TUTOR_DOT).join(".");
const tutorIsQuestion = x => /\?["”']?$/.test((x || "").trim());

/** 작은 모델이 자주 하는 실수 걸러 내기 (문장 단위로, 앞에서부터 확정되므로 끝난 문장부터 읽기와 함께 써도 된다)
 *  - 학습자 말을 그대로 따라 하는 문장 ("Here is my passport." → 튜터가 "Here is my passport.")
 *  - 바로 앞 답들에서 이미 한 문장 그대로 되풀이 ("How about you?" 반복 등)
 *  - 대화 중간에 다시 자기소개 ("I'm Emma, ...")
 *  다 걸러져 버리면 원래 문장을 그대로 둔다 (strict면 빈 글자 — 답을 만드는 도중에는 뒤에 더 나올 수 있어서) */
/** 문장 나누기 (6.25나 Mr. 같은 점에서는 나누지 않는다) */
function tutorSplitSentences(text) {
  return (tutorProtectDots(text).match(/[^.!?]+[.!?]+["”']?|[^.!?]+$/g) || []).map(x => tutorRestoreDots(x).trim()).filter(Boolean);
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
/** 첫 인사: 튜터가 정해 둔 인사를 그대로 말하게 한다 (시간대·요일·계절·주제에 맞춰 매번 다르게 고른 것) */
const TUTOR_KICKOFF = g => `(Note: Start our chat now. Say exactly this, warmly and naturally, then stop and wait for my answer: "${g}")`;
const TUTOR_BACK_NOTE = "(Note: I'm back after a short break. Say a very short welcome back (like \"Welcome back!\" or \"So, where were we?\"), then ask your last question again in a few words.)";
function startTutorSession() {
  if (!tutorReady()) return;
  stopTutorActivity();
  tutorLiveClose(true);
  tutorSessionStartedAt = Date.now();
  tutorConvId++;
  const ng = tutorPickGreeting();     // 시간대·요일·계절·주제에 맞춰 매번 다른 첫 질문
  tutorGreeting = ng.text;
  tutorCommitGreeting(ng.q);
  tutorMessages = tutorStartMessages();
  tutorLearnerLines = [];
  tutorLearnerItems = [];
  tutorCorrections = [];
  tutorSaidLines = [];
  tutorEl("tutor-log").innerHTML = "";
  tutorEl("tutor-feedback").classList.add("hidden");
  tutorEl("tutor-input").value = ""; tutorActUpdate();
  tutorPausedAt = 0; tutorKoTarget = null; tutorReconnects = 0; tutorLiveRetry = null;
  setTutorStatus("연결하는 중…", "thinking");
  tutorNoMic = false;
  if (!tutorMicDenied) tutorMicStart();   // 마이크 권한은 연결하는 동안 미리 묻는다
  const conv = tutorConvId;
  tutorLiveConnect().then(() => {
    if (conv !== tutorConvId || !tutorCallActive) return;
    tutorLiveSay(TUTOR_KICKOFF(tutorGreeting), { kind: "greet" });
  }).catch(e => { if (conv === tutorConvId) tutorLiveFailed(e); });
}

/** 학습자 문장 보내기 (입력칸) */
function sendTutorText(text) {
  text = (text || "").trim();
  if (!text || !tutorReady()) return false;
  if (!tutorLive || !tutorLive.ready) {                // 연결이 끊겼으면 다시 연결한 뒤 보낸다
    const inp = tutorEl("tutor-input"); if (inp && !inp.value.trim()) { inp.value = text; tutorActUpdate(); }
    tutorLiveResume("quiet");
    return false;
  }
  if (tutorTurn || tutorSpeaking) tutorCutTutor();     // 튜터가 말하는 중이면 끊고 보낸다
  tutorSetListening(false);
  clearTimeout(tutorQuietTimer);
  tutorPausedAt = 0;
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  const myBubble = addTutorBubble("me", text);
  tutorRecordLearner(text, myBubble);
  tutorLiveSay(text, { kind: "chat", typed: true });
  return true;
}
/** 학습자가 한 말을 기록한다: 말풍선·교정 확인·노트 표현·대화 기록 (beforeMsg: 이 말에 대한 튜터 대답 — 대화 기록에서 그 앞에 넣는다 · before: 이 말 바로 앞의 튜터 말).
 *  기록한 항목을 돌려준다 */
function tutorRecordLearner(text, myBubble, beforeMsg, before) {
  const token = tutorSessionToken;
  tutorLearnerLines.push(text);
  if (before === undefined) before = tutorSaidLines[tutorSaidLines.length - 1];
  const item = { text, bubble: myBubble, fix: undefined, why: "", check: null, before };
  tutorLearnerItems.push(item);
  // 답과 동시에 교정 확인 (고칠 게 있으면 내 말풍선 아래에 팁 · 힌트 문장은 앱이 준 것이라 고치지 않는다 · 한국어로 한 말은 고치지 않는다)
  if ((text.match(/[가-힣]/g) || []).length > (text.match(/[a-z]/gi) || []).length) { item.fix = ""; item.fixLocked = true; } else tutorCheckItem(item, before, token);
  tutorCheckNoteUse(text, myBubble);
  // 한국어로 물어본 표현을 바로 써 봤으면 카드에 표시한다
  if (tutorKoTarget && tutorCovers(text, tutorKoTarget.en) >= 0.8) { const nx = tutorKoTarget.card.querySelector(".tutor-ko-next"); if (nx) nx.textContent = "✅ 잘 말했어요!"; tutorNoteMark(tutorKoTarget.en, "used"); }
  tutorKoTarget = null;
  item.msg = tutorMsgInsert({ role: "user", content: text }, beforeMsg);
  return item;
}
// 한국어 도움으로 알려 준 표현 { en, card } (학습자가 바로 그 말을 하면 튜터가 알아보고 반가워한다)
let tutorKoTarget = null;
/** 아래 둥근 단추: 글이 있으면 보내기, 없으면 말하기 (튜터를 누른 것과 같다: 듣기 시작·보내기·끊고 말하기) */
function tutorActTap() {
  const inp = tutorEl("tutor-input");
  if (inp && inp.value.trim()) { sendTutorTyped(); return; }
  tutorTapTutor(null);
}
/** 입력칸에 글이 있으면 둥근 단추가 보내기(↑)로 바뀐다 */
function tutorActUpdate() {
  const inp = tutorEl("tutor-input"), row = tutorEl("tutor-type-row");
  if (!inp || !row) return;
  const has = !!inp.value.trim();
  row.classList.toggle("has-text", has);
  const btn = row.querySelector(".tutor-act"); if (btn) btn.setAttribute("aria-label", has ? "보내기" : "말하기");
}
function sendTutorTyped() {
  const inp = tutorEl("tutor-input");
  const t = inp.value;
  // 말하는 중에 ➤: (직접 보내기·자동 모두) 기다리지 않고 지금까지 한 말을 바로 보낸다
  if (!t.trim() && tutorListening && tutorHeardSomething()) { tutorManualSend(); return; }
  if (!t.trim() || !tutorReady()) return;
  inp.value = ""; tutorActUpdate();
  if (/[가-힣]/.test(t)) inp.blur();
  tutorSendTyped(t);
}
function tutorSendTyped(t) {
  if (/[가-힣]/.test(t)) {                              // 한국어로 쓰면 영어 표현을 알려 준다
    if (tutorTurn || tutorSpeaking) tutorCutTutor();
    tutorSetListening(false); clearTimeout(tutorQuietTimer);
    tutorHelping = true; tutorKoreanHelp(t.trim()); return;
  }
  sendTutorText(t);
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
  const conv = tutorConvId, said = item.text;
  item.check = tutorFixFetch(item.text, before)
    .then(out => {
      if (item.text !== said) return;   // 그사이 늦게 온 받아쓰기로 문장이 늘어 다시 확인하는 중
      const r = parseTutorFix(item.text, out);
      if (r.unknown) { item.fix = undefined; tutorFixCache.delete(tutorNorm(item.text) + "|" + (before || "")); return; }   // 답이 깨졌으면 '실수 없음'으로 치지 않고 다음에 다시 묻는다 (피드백 때)
      item.fix = r.better; item.why = r.why;
      if (r.better && conv === tutorConvId && item.bubble && item.bubble.isConnected && !item.tipped) { item.tipped = true; item.tipEl = addTutorTip(item.bubble, r.better, r.why, item.text); }
    })
    .catch(e => { console.warn("교정 확인 실패", e); item.fix = undefined; tutorLastCheckErr = e; })
    .finally(() => { item.check = null; });
  return item.check;
}
// 작은 선 아이콘 (글자 그림 대신: 기기마다 모양이 달라지지 않고 깔끔하게)
const TUTOR_ICONS = {
  slow: '<path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m12 14-4-4"/>',
  trans: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  play: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
  retry: '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
  spark: '<path d="M12 3.5l1.9 4.6 4.6 1.9-4.6 1.9-1.9 4.6-1.9-4.6L5.5 10l4.6-1.9z"/>'
};
const tutorIcon = name => `<svg class="ti" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${TUTOR_ICONS[name] || ""}</svg>`;
// 천천히 듣기: 초보자가 못 알아들었을 때 튜터가 같은 말을 천천히 한 번 더
function addSlowButton(bubble, text) {
  const btn = document.createElement("button");
  btn.className = "tutor-slow-btn";
  btn.innerHTML = `${tutorIcon("slow")}천천히`;
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
  btn.innerHTML = `${tutorIcon("trans")}해석`;
  btn.onclick = async e => {
    e.stopPropagation();
    tutorArmQuiet();                                     // 해석을 읽는 동안 튜터가 끼어들지 않게 (조용할 때 다시 묻기를 처음부터 잰다)
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
/** 말풍선을 누르면 다시 듣기 (받아 둔 튜터 목소리를 그대로) · 🐢는 튜터가 천천히 다시 말한다 */
function tutorSpeakTap(text, slow, bubble) {
  if (tutorTurn && !tutorTurn.played && !tutorTurn.cut && tutorTurn.kind !== "say") { setTutorStatus(`${tutorName()} 말이 끝나면 다시 눌러 주세요`, tutorSpeaking ? "speaking" : "thinking"); return; }
  if (!slow && bubble && bubble._pcm) { tutorReplayTurn(bubble); return; }
  speakTutor(text, tutorSessionToken, slow);
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
  t.innerHTML = `<div class="tutor-tip-label">${tutorIcon("spark")}이렇게 말하면 더 자연스러워요</div><b></b><span class="tutor-tip-why"></span>`;
  t.querySelector("b").lang = "en";
  tutorMarkChanges(t.querySelector("b"), said, tip);   // 바뀐 낱말에 표시
  if (why) t.querySelector(".tutor-tip-why").textContent = " · " + why;
  addPracticeButtons(t, tip);                       // 고친 문장을 직접 다시 말해 보게
  tutorMarkMine(bubble, said, tip);                 // 내 말에서 틀린 낱말에 표시
  bubble.after(t);
  tutorNoteAdd({ en: tip, said, why, src: "fix" });   // (맨 아래를 보고 있으면 tutorLogFollow가 따라간다)
  return t;
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
/** 내 말에서 고친 문장에 없는 낱말에 빨간 표시를 한다 (무엇이 틀렸는지 내 말 위에서 바로 보이게) */
function tutorMarkMine(bubble, said, better) {
  const el = bubble && bubble.querySelector(".tutor-text");
  if (!el || el.textContent !== said) return;
  const toks = said.split(/(\s+)/), b = tutorNorm(better).split(" ").filter(Boolean), A = [];
  toks.forEach((x, i) => tutorNorm(x).split(" ").filter(Boolean).forEach(w => A.push({ i, w })));
  const n = A.length, m = b.length, dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = A[i].w === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hit = new Array(n).fill(false);
  for (let i = 0, j = 0; i < n && j < m;) {
    if (A[i].w === b[j]) { hit[i] = true; i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
  }
  const miss = new Set(A.filter((x, k) => !hit[k]).map(x => x.i));
  if (!miss.size) return;                           // 빠진 낱말만 있었다 (내 말에는 표시할 게 없다)
  el.textContent = "";
  toks.forEach((x, i) => {
    if (miss.has(i)) { const mk = document.createElement("mark"); mk.className = "tutor-miss"; mk.textContent = x; el.appendChild(mk); }
    else el.appendChild(document.createTextNode(x));
  });
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
/** 🎤 다시 말해 보기: 튜터가 "해 보세요!" 하고 들은 뒤, 맞으면 칭찬하고 아니면 천천히 한 번 더 들려준다 (튜터와 실제로 연습).
 *  내가 한 말은 받아쓴 글로 목표 문장과 비교해 결과를 보여 준다 */
function tutorStartPractice(target, box) {
  if (!tutorReady()) return;
  if (tutorPractice && tutorPractice.box === box) { tutorPracticeEnd(""); tutorAfterSpeak(); return; }   // 한 번 더 누르면 그만
  if (!tutorCallActive || !tutorLive || !tutorLive.ready) { tutorPracticeShow(box, "대화하는 중에 해 볼 수 있어요", "", ""); return; }
  if (tutorMicDenied || tutorNoMic) { if (tutorMicDenied) showMicPermissionHelp(); else tutorPracticeShow(box, "마이크를 쓸 수 없어요", "", ""); return; }
  if (tutorTurn || tutorSpeaking) tutorCutTutor();
  if (tutorPractice) tutorPracticeEnd("");
  tutorSetListening(false); clearTimeout(tutorQuietTimer);
  tutorPractice = { target, box, tries: 0 };
  tutorPracticeShow(box, "따라 말해 보세요", "", "listening");
  tutorLiveSay(`(Note: The student wants to practice saying this sentence out loud: "${target}". Right now, say only "Okay, go ahead!" and wait. ` +
    "When they try it: if it's right or very close, praise them in a few words, then ask your last question again. If not, say the sentence once more, slowly and clearly, and say \"Try again!\". " +
    "After a second try, praise the effort warmly and ask your last question again.)", { kind: "practice" });
}
/** 연습으로 한 말 채점 (튜터의 반응과 함께 결과를 보여 준다. 처음에 틀리면 한 번 더) */
function tutorPracticeJudge(text) {
  const pr = tutorPractice; if (!pr) return;
  const score = tutorSimilarity(text, pr.target), good = score >= 0.85;
  pr.tries++;
  if (!good && pr.tries < 2) { tutorPracticeShow(pr.box, "👂 한 번 더 들어 보고 따라 해 보세요", `들린 말: ${text}`, "listening"); return; }   // 튜터가 천천히 한 번 더 들려준다
  tutorPractice = null;
  tutorPracticeShow(pr.box, good ? "✅ 완벽해요!" : score >= 0.6 ? "👍 거의 맞았어요!" : "🙂 괜찮아요, 다음에 또 해 봐요", good ? "" : `들린 말: ${text}`, good ? "good" : "");
  if (good) tutorNoteMark(pr.target, "practiced");
}
/** 고친 문장·배운 표현 아래에 [🔊 듣기] [🎤 다시 말해 보기] */
function addPracticeButtons(box, target) {
  const acts = document.createElement("div"); acts.className = "tutor-practice";
  acts.innerHTML = `<button class="tutor-slow-btn">${tutorIcon("play")}듣기</button><button class="tutor-slow-btn tutor-practice-btn">${tutorIcon("mic")}다시 말해 보기</button><div class="tutor-practice-result hidden"></div>`;
  const [listen, say] = acts.querySelectorAll("button");
  listen.onclick = e => { e.stopPropagation(); if (tutorWaitBusy(acts)) return; speakTutor(target, tutorSessionToken); };   // 튜터가 그 문장을 읽어 준다
  say.onclick = e => { e.stopPropagation(); if (tutorWaitBusy(acts)) return; tutorStartPractice(target, acts); };
  box.appendChild(acts);
}
/** 튜터가 아직 답을 만드는 중이면 기다리게 한다 (그사이 소리를 내거나 마이크를 켜면 답이 끊기거나 겹친다) */
function tutorWaitBusy(box) {
  if (!tutorBusy) return false;
  tutorPracticeShow(box, `${tutorName()} 말이 끝나면 다시 눌러 주세요`, "", "");
  return true;
}
// 한국어로 쓰면: 하고 싶은 말을 자연스러운 영어로 알려 주고, 튜터가 "You can say: …" 하고 들려준 뒤 바로 영어로 말하게 한다
const TUTOR_KO_SCHEMA = { type: "OBJECT", properties: { en: { type: "STRING" } }, required: ["en"] };
async function tutorKoreanHelp(ko) {
  const token = tutorSessionToken, conv = tutorConvId, log = tutorEl("tutor-log");
  const card = document.createElement("div"); card.className = "tutor-ko-card";
  card.innerHTML = `<div class="tutor-ko-q"></div><div class="tutor-ko-a">영어로 바꾸는 중…</div>`;
  card.querySelector(".tutor-ko-q").textContent = ko;
  log.appendChild(card); log.scrollTop = log.scrollHeight;
  setTutorStatus("영어 표현을 찾는 중…", "thinking");
  try {
    const said = tutorSaidLines[tutorSaidLines.length - 1] || "";
    const j = await geminiJSON([
      { role: "system", content: `You help a Korean adult at the ${tutorLevel().desc} level say things in English during a casual conversation. ` +
        "Turn what the student wants to say into the most natural spoken English a friendly native speaker would use, at the student's level (beginner: short and simple). Keep the meaning. Put only the English in 'en'." },
      { role: "user", content: (said ? `The tutor just said: "${said}"\n` : "") + `What the student wants to say (Korean): ${ko}` }
    ], { temperature: 0.3, maxTokens: 150, schema: TUTOR_KO_SCHEMA, chain: "aux" });
    const en = ((j && j.en) || "").trim();
    if (!en) throw new Error("다시 말하거나 적어 주세요.");
    const stale = token !== tutorSessionToken;            // 그사이 피드백을 열었거나 화면을 떠났다: 보여 주고 노트에는 넣되 말하지는 않는다
    const a = card.querySelector(".tutor-ko-a");
    a.innerHTML = `<div class="tutor-ko-label">${tutorIcon("spark")}영어로는 이렇게 말해요</div><b></b><div class="tutor-ko-next"></div>`;
    a.querySelector("b").textContent = en; a.querySelector("b").lang = "en";
    a.querySelector(".tutor-ko-next").textContent = `이제 ${tutorName()}에게 영어로 말해 보세요`;
    addPracticeButtons(a, en);
    a.querySelector(".tutor-practice-btn").remove();      // 여기서는 바로 튜터에게 말하는 게 연습이다
    log.scrollTop = log.scrollHeight;
    tutorNoteAdd({ en, ko, src: "ko" });
    if (conv === tutorConvId && card.isConnected) tutorKoTarget = { en, card };   // 학습자가 이 말을 하면 카드에 표시한다
    if (stale) return;                                     // (다른 찾기가 진행 중일 수 있어 tutorHelping은 건드리지 않는다)
    tutorHelping = false;
    if (tutorSheetOpen() || !tutorCallActive || !tutorLive || !tutorLive.ready) { setTutorStatus(tutorIdleMsg(), ""); return; }
    if (tutorTurn || tutorSpeaking) tutorCutTutor();
    // 튜터가 알려 주고 따라 말하게 한다 (말하면 튜터가 알아보고 반가워한다)
    tutorLiveSay(`(Note: The student asked how to say this in English: "${ko}". Tell them in one short sentence: "You can say: ${en}", and encourage them to say it to you. When they say it, praise them briefly and reply to what they said.)`, { kind: "ko" });
  } catch (e) {
    if (token !== tutorSessionToken) { card.querySelector(".tutor-ko-a").textContent = "취소됐어요 · 다시 적어 주세요"; return; }
    tutorHelping = false;
    card.querySelector(".tutor-ko-a").textContent = "영어로 바꾸지 못했어요. " + geminiErrorText(e);
    setTutorStatus(tutorIdleMsg(), "");
    tutorAfterSpeak();
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
  box.innerHTML = `<div class="tutor-report-title">내 표현 노트 <small>${list.length}개${list.length > 30 ? " · 최근 30개" : ""}</small></div>`;
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

// ---------- 튜터 목소리 (Gemini Live 목소리) ----------
// 튜터 성별에 맞는 목소리만 고를 수 있다 (g: f 여성 / m 남성). 튜터마다 고른 목소리를 따로 기억한다
const TUTOR_VOICES = {
  Leda: { label: "젊고 발랄한 ★", g: "f" }, Laomedeia: { label: "명랑하고 신나는", g: "f" }, Aoede: { label: "산뜻하고 경쾌한", g: "f" },
  Zephyr: { label: "밝고 또렷한", g: "f" }, Sulafat: { label: "따뜻한", g: "f" }, Achernar: { label: "부드러운", g: "f" },
  Vindemiatrix: { label: "다정하고 차분한", g: "f" }, Kore: { label: "단단하고 또렷한", g: "f" },
  Puck: { label: "밝고 경쾌한 ★", g: "m" }, Achird: { label: "다정하고 친근한", g: "m" }, Sadachbia: { label: "생기 있는", g: "m" },
  Zubenelgenubi: { label: "편안한", g: "m" }, Umbriel: { label: "느긋하고 부드러운", g: "m" }, Iapetus: { label: "또렷한", g: "m" },
  Charon: { label: "차분하고 깊은", g: "m" }
};
// 예전(기기 안에서 만들던 목소리) 설정은 이제 쓰지 않는다 (한 번만 정리)
try {
  if (!localStorage.getItem("tutorLiveV1")) {
    ["tutorVoice", "tutorVoiceV4", "tutorVoiceV5", "tutorVoiceV6", "tutorTtsDown"].forEach(k => localStorage.removeItem(k));
    localStorage.setItem("tutorLiveV1", "1");
  }
} catch (e) {}
function tutorVoiceId() {
  let v = null; try { v = localStorage.getItem("tutorLiveVoice:" + tutorCharId()); } catch (e) {}
  return TUTOR_VOICES[v] && TUTOR_VOICES[v].g === tutorChar().gender ? v : tutorChar().voice;   // 따로 고르지 않았으면 튜터의 기본 목소리
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
let tutorClipWaiting = false;   // (튜터 얼굴) 다음 목소리 조각을 기다리는 중 — 실시간 대화에서는 쓰지 않는다
function fillTutorVoices() {
  const g = tutorChar().gender;   // 튜터 성별에 맞는 목소리만
  ["tutor-voice", "tutor-voice-lobby"].forEach(id => {
    const sel = tutorEl(id); if (!sel) return;
    sel.innerHTML = "";
    Object.entries(TUTOR_VOICES).filter(([, v]) => v.g === g).forEach(([k, v]) => { const o = document.createElement("option"); o.value = k; o.textContent = v.label; sel.appendChild(o); });
    sel.value = tutorVoiceId();
  });
}
/** 목소리 바꾸기 (설정·시작 화면 어느 쪽에서든): 바로 한 마디 들려준다. 대화 중이면 판을 닫을 때 새 목소리로 다시 연결한다 */
let tutorPreviewDebounce = null;
function changeTutorVoice(sel) {
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();   // 고른 순간에 소리 장치를 깨워 둔다 (아이폰은 누른 순간에만 된다)
  try { localStorage.setItem("tutorLiveVoice:" + tutorCharId(), (sel || tutorEl("tutor-voice")).value); } catch (e) {}
  fillTutorVoices();
  if (tutorLive || tutorLiveHandle) tutorLiveStale = true;
  tutorStopPreview();
  tutorPreviewButtons("loading");
  tutorPreviewDebounce = setTimeout(() => { if (tutorLobbyOpen() || tutorSheetOpen()) tutorPreviewVoice(true); else tutorPreviewButtons("idle"); }, 450);   // 연달아 바꾸면 마지막 것만
}
// ---------- 말하기 (튜터 목소리 + 입모양) ----------
let tutorDeviceSeq = 0;   // 다시 듣기·기기 음성 차례 (끊으면 하나씩 늘어난다)
/** 문장 하나를 튜터 목소리로 (고친 문장·배운 표현·노트 듣기): 대화 중이면 튜터에게 그 문장만 말해 달라고 하고, 아니면 기기 음성으로.
 *  다 말했으면 true (opts.then이 있으면 그다음에 부른다 — 없으면 다시 듣는다) */
function speakTutor(text, token, slow, opts) {
  text = (text || "").trim();
  if (!text) return Promise.resolve(false);
  if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio();
  tutorStopPreview();
  const after = () => { if (opts && opts.then) opts.then(); else tutorAfterSpeak(); };
  if (tutorCallActive && tutorLive && tutorLive.ready) {
    if (tutorTurn || tutorSpeaking) tutorCutTutor();
    tutorSetListening(false); clearTimeout(tutorQuietTimer);
    const note = slow ? `(Note: Say this again, slowly and clearly, and nothing else: "${text}")` : `(Note: Say just this, clearly and naturally, and nothing else: "${text}")`;
    return new Promise(resolve => tutorLiveSay(note, { kind: "say", then: ok => { resolve(ok); if (ok) after(); } }));
  }
  // 연결이 없으면 기기 음성으로 (튜터 성별에 맞춰)
  tutorCutTutor();
  tutorSetListening(false);
  const my = ++tutorDeviceSeq;
  tutorSpeaking = true;
  setTutorStatus("말하는 중… (기기 음성)", "speaking");
  return tutorDeviceSpeak(text, slow).then(() => {
    if (my !== tutorDeviceSeq) return false;
    tutorSpeaking = false;
    setTutorStatus(tutorIdleMsg(), "");
    after();
    return true;
  });
}
/** 튜터 말을 멈춘다 */
function stopTutorSpeech() {
  tutorDeviceTalking = false;
  if (tutorTurn || tutorSpeaking) tutorCutTutor();
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
// 말 끝 기다리기: 내 말이 멈춘 뒤 이만큼 조용하면 다 말한 것으로 보고 튜터가 대답한다 (구글이 말소리를 듣고 판단한다 — 생각하느라 멈춘 건 기다려 준다)
const TUTOR_END_WAIT = { short: { label: "짧게", ms: 900 }, normal: { label: "보통", ms: 1500 }, long: { label: "길게", ms: 2400 } };
function tutorEndWaitId() { let v = null; try { v = localStorage.getItem("tutorEndWait"); } catch (e) {} return TUTOR_END_WAIT[v] ? v : "short"; }   // 기본은 짧게 (빨리 대답하게)
/** 아무 말이 없으면 이만큼 뒤 마이크를 쉰다 (데이터·배터리를 아끼게 — 튜터를 누르면 다시 듣는다). 따라 말하기는 짧게 */
const tutorQuietMs = () => tutorPractice ? 15000 : tutorSendManual() ? 120000 : 30000;
/** 듣는 중에 말소리가 들어오면 듣기 막대가 살짝 반응한다 (내 말을 듣고 있다는 느낌) */
let tutorHearAt = 0, tutorHearTimer = null;
let tutorHearSince = 0;
function tutorHearPulse() {
  const now = Date.now(); if (now - tutorHearAt < 150) return;
  if (now - tutorHearAt > 1500) tutorHearSince = now;   // 새로 말하기 시작
  tutorHearAt = now;
  const room = tutorEl("tutor-chat-area"); if (!room || room.dataset.mode !== "listening") return;
  if (now - tutorHearSince > 1200 && typeof TutorAvatar !== "undefined") TutorAvatar.act("listen");   // 1초 넘게 말하면 끄덕이며 듣는다
  room.dataset.hearing = "1"; clearTimeout(tutorHearTimer);
  tutorHearTimer = setTimeout(() => { delete room.dataset.hearing; }, 450);
}
// 말 보내기: auto(말이 멈추면 자동) · manual(다 말한 뒤 ➤나 튜터를 눌러 보내기)
const TUTOR_SEND = { auto: "멈추면 자동", manual: "직접 보내기" };
function tutorSendManual() { try { return localStorage.getItem("tutorSendMode") === "manual"; } catch (e) { return false; } }
function changeTutorSendMode(id) {
  if (!TUTOR_SEND[id]) return;
  try { localStorage.setItem("tutorSendMode", id); } catch (e) {}
  renderTutorEndWait();
  if (tutorLive || tutorLiveHandle) tutorLiveStale = true;   // 판을 닫고 이어 갈 때 새 방법으로 다시 연결한다
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
  if (tutorLive || tutorLiveHandle) tutorLiveStale = true;
}
// ---------- 실시간 대화 (Gemini Live) ----------
// 마이크 소리를 0.1초씩 바로 보내면 구글이 내 말이 끝난 때를 알아채고(VAD) 곧바로 튜터 목소리(24kHz)를 보내온다.
// 내가 한 말·튜터가 한 말은 글로도 함께 온다 (말풍선·교정·힌트·피드백에 쓴다).
// 튜터가 말하는 동안에는 내 소리를 보내지 않는다 (스피커 소리를 내 말로 듣고 튜터가 스스로 끊기지 않게). 끊고 싶으면 튜터를 누른다
const TUTOR_LIVE_URL = "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent";
// 실시간 모델: 앞 모델이 없거나 막히면 다음 모델로 (된 모델은 기억해 두고 다음에 먼저 쓴다)
const TUTOR_LIVE_MODELS = ["gemini-3.8-live", "gemini-3.1-flash-live-preview", "gemini-2.5-flash-native-audio-preview-12-2025"];
const TUTOR_LIVE_IN = "audio/pcm;rate=16000", TUTOR_LIVE_OUT_RATE = 24000;
const TUTOR_HANDLE_MS = 110 * 60000;   // 이어 가기 표는 2시간 동안 쓸 수 있다 (조금 넉넉히 빼고)
let tutorLive = null;            // 지금 연결 { ws, model, gen, ready, closing, manual, activity, sentAudio, renewTimer, lastServerAt }
let tutorLiveGen = 0;            // 연결할 때마다 하나씩 (늦게 온 옛 연결의 소식은 버린다)
let tutorLiveHandle = "", tutorLiveHandleAt = 0;   // 이어 가기 표 (연결이 끊겨도 2시간 안이면 하던 대화를 그대로 이어 간다)
let tutorLiveStale = false;      // 수준·목소리·보내는 방법을 바꿨다: 이어 갈 때 새 설정으로 다시 연결한다
let tutorLiveConnecting = null;  // 연결하는 중 (Promise)
let tutorLiveRetry = null;       // 연결이 끊겨 답을 못 받은 글 (다시 연결되면 다시 보낸다)
let tutorReconnects = 0;         // 저절로 다시 연결한 횟수 (연달아 끊기면 알린다)
let tutorListening = false;      // 내 말을 튜터에게 보내는 중
let tutorHold = false;           // 잠시 멈춤 (판·다른 앱): 그사이 온 튜터 말은 소리 없이 말풍선으로만 (돌아오면 들려준다)
let tutorTurn = null, tutorLastTurn = null;   // 튜터의 지금 차례 { kind, ex, text, pcm[], player, bubble, msg, user, conv, done, played, cut, settled }
let tutorUserTurn = null;        // 내 지금 차례 { text, interim, bubble, reply, beforeMsg, before, recorded, closed }
let tutorLastUser = null;        // 방금 끝난 내 차례 (늦게 온 받아쓰기를 이어 붙인다)
let tutorExpect = [];            // 글로 보내고 답을 기다리는 부탁 (한 번에 하나만 보낸다: 답이 서로 바뀌지 않게)
let tutorOutbox = [];            // 앞 부탁의 답이 끝나면 보낼 부탁
let tutorUnheard = null;         // 잠시 멈춘 동안 온 튜터 말풍선 (돌아오면 들려준다)
let tutorQuietTimer = null, tutorReplyTimer = null;
let tutorVoiceAt = 0, tutorListenAt = 0;   // 마지막으로 내 말소리가 들린 때 · 듣기를 시작한 때
let tutorUttVoiceMs = 0;         // 이번에 듣는 동안 들린 말소리 길이 (눌러서 보내기에 쓴다)
let tutorNoise = 0;              // 주변 소리 크기 (말소리를 가려내는 기준)
let tutorMicIn = null;           // 마이크 { stream, ctx, src, node, ready, closed }
let tutorMicBuf = null, tutorMicBufN = 0;   // 보내기 전에 모으는 16kHz 소리 (0.1초씩)
let tutorPreRoll = [];           // 직접 보내기: 말이 시작되기 직전 0.4초 (말이 들리면 '말 시작' 알림과 함께 보내서 첫소리가 잘리지 않게)
const tutorAudioKept = [];       // 다시 듣기용 목소리를 둔 말풍선 (최근 12개만)
/** 튜터가 답을 만드는 중인지 (힌트는 기다리게 하고, 끝나면 다시 그린다) */
function tutorSetBusy(v) {
  const was = tutorBusy; tutorBusy = !!v;
}

/** 연결을 연다: 모델을 차례로 시도한다. opts.resume: 이어 가기 표로 (표가 없으면 지금까지 대화를 붙여) · opts.history: 대화를 안내에 붙여 새로 */
function tutorLiveConnect(opts = {}) {
  tutorLiveClose(false, true, true);
  const gen = ++tutorLiveGen;
  const canResume = !!opts.resume && !opts.history && !!tutorLiveHandle && Date.now() - tutorLiveHandleAt < TUTOR_HANDLE_MS;
  const handle = canResume ? tutorLiveHandle : "", history = !!opts.history || (!!opts.resume && !canResume);
  tutorLiveStale = false;
  const p = (async () => {
    if (!tutorGetKey()) throw new GeminiError("Gemini 키가 연결되어 있지 않아요", 0, "NO_KEY");
    let start = 0;
    try { start = Math.max(0, TUTOR_LIVE_MODELS.indexOf(localStorage.getItem("tutorLiveModel"))); } catch (e) {}
    let best = null, keyOk = null;
    for (let k = 0; k < TUTOR_LIVE_MODELS.length; k++) {
      if (gen !== tutorLiveGen) throw new DOMException("취소됨", "AbortError");
      const model = TUTOR_LIVE_MODELS[(start + k) % TUTOR_LIVE_MODELS.length];
      try {
        const conn = await tutorLiveOpen(model, tutorLiveSetup(model, handle, history), gen);
        try { localStorage.setItem("tutorLiveModel", model); } catch (e) {}
        renderTutorCredit();
        return conn;
      } catch (e) {
        if (e && e.name === "AbortError") throw e;
        let err = e;
        // 실시간 연결이 '키 문제'라고 닫아도 모델·미리보기 권한 문제일 수 있다: 글 요청으로 키를 확인한 뒤에만 키 문제로 본다
        if (geminiKeyProblem(err)) {
          if (keyOk === null) keyOk = await tutorKeyCheck();
          if (keyOk !== true) throw keyOk;
          err = new GeminiError("이 키로는 이 실시간 모델을 쓸 수 없어요", 403, "PERMISSION_DENIED");   // (키 자체는 맞다: 다음 모델로)
        }
        console.warn(`Gemini Live ${model} 실패`, err.status || "", err.message || err);
        if (geminiErrRank(err) >= geminiErrRank(best)) best = err;
        if (!geminiTryNext(err)) throw err;
      }
    }
    if (gen !== tutorLiveGen) throw new DOMException("취소됨", "AbortError");
    if (!best || best.reason === "DROPPED") {
      // 까닭 없이 끊기기만 했다: 키가 틀려도 실시간 연결은 까닭을 알려 주지 않을 때가 있어서, 글 요청으로 키를 확인해 본다
      if (keyOk === null) keyOk = await tutorKeyCheck();
      if (keyOk !== true) throw keyOk;
      throw new GeminiError("실시간 대화 서버에 연결하지 못했어요. 인터넷 연결을 확인하고 다시 연결해 주세요.", 0, "LIVE_DOWN");
    }
    throw best;
  })();
  tutorLiveConnecting = p;
  p.then(() => { if (tutorLiveConnecting === p) tutorLiveConnecting = null; }, () => { if (tutorLiveConnecting === p) tutorLiveConnecting = null; });
  return p;
}
/** 키가 맞는지 짧은 글 요청으로 확인: 맞으면 true, 키·설정·사용량·인터넷 문제면 그 오류 (그 밖의 실패는 키 탓이 아니다) */
async function tutorKeyCheck() {
  try { await geminiGenerate([{ role: "user", content: "Reply with just: OK" }], { temperature: 0, maxTokens: 20, chain: "aux" }); return true; }
  catch (e) { return geminiKeyProblem(e) || geminiSetupKind(e) || e.status === 429 || e.reason === "OFFLINE" ? e : true; }
}
/** 소켓 하나를 열고 준비(setupComplete)될 때까지 기다린다 */
function tutorLiveOpen(model, setup, gen) {
  return new Promise((resolve, reject) => {
    let ws;
    try { ws = new WebSocket(TUTOR_LIVE_URL + "?key=" + encodeURIComponent(tutorGetKey())); }
    catch (e) { reject(new GeminiError("연결하지 못했어요", 503, "DROPPED")); return; }
    ws.binaryType = "arraybuffer";
    const aad = setup.setup.realtimeInputConfig.automaticActivityDetection;
    const conn = { ws, model, gen, ready: false, closing: false, manual: !!aad.disabled, activity: false, sentAudio: false, renewTimer: 0, lastServerAt: 0 };
    let settled = false;
    const fail = e => {
      if (settled) return;
      settled = true; clearTimeout(timer); conn.closing = true;
      try { ws.close(); } catch (e2) {}
      reject(e);
    };
    const timer = setTimeout(() => fail(geminiTimeoutError()), 15000);   // 15초 안에 준비가 안 되면 다음 모델로
    const stale = () => gen !== tutorLiveGen;
    ws.onopen = () => {
      if (stale()) { fail(new DOMException("취소됨", "AbortError")); return; }
      try { ws.send(JSON.stringify(setup)); } catch (e) { fail(new GeminiError("연결이 끊겼어요", 503, "DROPPED")); }
    };
    ws.onmessage = ev => {
      if (stale()) { if (!settled) fail(new DOMException("취소됨", "AbortError")); else { conn.closing = true; try { ws.close(); } catch (e) {} } return; }
      const m = tutorLiveParse(ev.data);
      if (!m) return;
      if (!settled) {
        if (!m.setupComplete) return;
        settled = true; clearTimeout(timer);
        conn.ready = true; tutorLive = conn;
        resolve(conn);
        return;
      }
      conn.lastServerAt = Date.now();
      if (conn === tutorLive) tutorLiveOnMessage(m, conn);
    };
    ws.onerror = () => {};   // 자세한 까닭은 onclose로 온다
    ws.onclose = ev => {
      if (!settled) { fail(stale() ? new DOMException("취소됨", "AbortError") : tutorLiveCloseError(ev)); return; }
      if (conn === tutorLive && !conn.closing) tutorLiveDropped(conn, ev);
    };
  });
}
/** 처음 보내는 설정: 모델·목소리·안내·말 끝 알아채기·받아쓰기·긴 대화(창 밀기)·이어 가기 */
function tutorLiveSetup(model, handle, history) {
  const manual = tutorSendManual(), ew = TUTOR_END_WAIT[tutorEndWaitId()];
  const gc = { responseModalities: ["AUDIO"], temperature: 0.8, speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: tutorVoiceId() } } } };
  if (/^gemini-2\.5/.test(model)) gc.thinkingConfig = { thinkingBudget: 0 };   // 2.5 실시간 모델은 기본으로 생각부터 해서 대답이 늦다: 짧은 대화라 끈다
  return { setup: {
    model: "models/" + model,
    generationConfig: gc,
    systemInstruction: { parts: [{ text: tutorSystemPrompt(history) }] },
    realtimeInputConfig: { automaticActivityDetection: manual ? { disabled: true }    // 직접 보내기: 말 시작·끝을 앱이 알린다 (➤를 누를 때까지 기다린다)
      : { disabled: false, endOfSpeechSensitivity: "END_SENSITIVITY_LOW", silenceDurationMs: ew.ms } },   // 말하다 잠깐 멈춘 건 끝으로 보지 않게
    inputAudioTranscription: {}, outputAudioTranscription: {},
    contextWindowCompression: { slidingWindow: {} },      // 대화가 길어져도 끊기지 않게 (오래된 말부터 줄인다)
    sessionResumption: handle ? { handle } : {}
  } };
}
function tutorLiveParse(data) {
  try { return JSON.parse(typeof data === "string" ? data : new TextDecoder().decode(data)); } catch (e) { return null; }
}
/** 연결이 닫힌 까닭 → 오류 (키 문제·사용량·모델 없음·지역 제한·서버 혼잡·인터넷) */
function tutorLiveCloseError(ev) {
  const r = (ev && ev.reason) || "", c = ev ? ev.code : 0;
  if (/api[ _]?key|API_KEY|credential|unauthenticated/i.test(r)) return new GeminiError(r, 400, "API_KEY_INVALID");
  if (/quota|exhausted|rate.?limit|too many requests/i.test(r)) return new GeminiError(r, 429, "RESOURCE_EXHAUSTED");
  const setup = new GeminiError(r, 400, "");
  if (r && geminiSetupKind(setup)) return setup;                         // 지역 제한·결제·API 꺼짐
  if (/not found|not supported|unsupported|is not available|unknown model/i.test(r)) return new GeminiError(r, 404, "NOT_FOUND");
  if (/permission|denied|forbidden/i.test(r)) return new GeminiError(r, 403, "PERMISSION_DENIED");
  if (/invalid|unknown name|bad request/i.test(r) || c === 1007) return new GeminiError(r || "잘못된 요청", 400, "INVALID_ARGUMENT");
  if (navigator.onLine === false) return new GeminiError("인터넷에 연결되어 있지 않아요", 0, "OFFLINE");
  return new GeminiError(r || `연결이 끊겼어요 (${c})`, 503, "DROPPED");
}
function tutorLiveSend(msg) {
  const c = tutorLive;
  if (!c || !c.ready || c.ws.readyState !== 1) return false;
  try { c.ws.send(JSON.stringify(msg)); return true; } catch (e) { return false; }
}
/** 글을 보낸다 (입력한 말·앱의 부탁). 직접 보내기로 연결했으면 말 시작·끝 알림으로 감싸야 튜터가 대답한다 */
function tutorLiveSendText(text) {
  const c = tutorLive; if (!c) return false;
  if (c.manual && !c.activity) tutorLiveSend({ realtimeInput: { activityStart: {} } });
  const ok = tutorLiveSend({ realtimeInput: { text } });
  if (c.manual) { tutorLiveSend({ realtimeInput: { activityEnd: {} } }); c.activity = false; tutorPreRoll = []; }
  return ok;
}
/** 튜터에게 글로 말하거나 부탁한다 (kind: chat 입력한 말 · greet 첫 인사 · back 돌아왔을 때 · say 문장 읽어 주기 · ko 한국어 도움 · practice 따라 말하기).
 *  한 번에 하나씩 보낸다: 앞 부탁의 답이 아직이면 끝난 뒤에 (답이 서로 바뀌지 않게). 같은 부탁을 또 누르면 한 번만 */
function tutorLiveSay(text, opts = {}) {
  const ex = { kind: opts.kind || "chat", then: opts.then || null, text, typed: !!opts.typed, tries: 0, waits: 0, timer: 0, conv: tutorConvId, sentAt: 0 };
  if (!tutorLive || !tutorLive.ready) { if (ex.then) ex.then(false); return false; }
  tutorHold = false;
  tutorSetListening(false);
  clearTimeout(tutorQuietTimer); clearTimeout(tutorReplyTimer);
  if ([...tutorExpect, ...tutorOutbox].some(x => x.text === text && x.conv === ex.conv)) { if (ex.then) ex.then(false); return true; }
  tutorSetBusy(true);
  setTutorStatus(ex.kind === "say" ? "…" : "생각 중…", "thinking");
  if (tutorExpect.length || (tutorTurn && !tutorTurn.cut)) { tutorOutbox.push(ex); return true; }
  tutorLiveSendEx(ex);
  return true;
}
/** 부탁 하나를 보내고 답을 기다린다 (답이 안 오면: 2.5 모델은 다른 방식으로 한 번 더, 아니면 알린다) */
function tutorLiveSendEx(ex) {
  const c = tutorLive;
  if (!c || !c.ready) { if (ex.then) { const f = ex.then; ex.then = null; f(false); } return; }
  tutorExpect.push(ex);
  ex.sentAt = Date.now();
  tutorSetBusy(true);
  tutorLiveSendText(ex.text);
  const gen = tutorLiveGen;
  const watch = ms => {
    ex.timer = setTimeout(() => {
      if (gen !== tutorLiveGen || !tutorExpect.includes(ex)) return;
      // 서버가 그사이 다른 말을 보내오는 중이면 (끊은 말을 마저 만드는 중) 조금 더 기다린다
      if (c.lastServerAt > ex.sentAt && Date.now() - c.lastServerAt < 3000 && ex.waits++ < 4) { watch(2500); return; }
      // 2.5 모델: 글 입력을 대화 기록 방식으로 한 번 더 (3.x 실시간 모델은 이 방식을 처음 기록에만 받아서 보내지 않는다)
      if (!ex.tries++ && /^gemini-2\.5/.test(c.model)) {
        ex.sentAt = Date.now();
        tutorLiveSend({ clientContent: { turns: [{ role: "user", parts: [{ text: ex.text }] }], turnComplete: true } });
        watch(8000);
        return;
      }
      tutorExpect = tutorExpect.filter(x => x !== ex);
      if (!tutorTurn) tutorSetBusy(false);
      tutorLiveNoAnswer(ex);
    }, ms);
  };
  watch(7000);
}
/** 기다리던 다음 부탁을 보낸다 (보냈으면 true) */
function tutorLiveNext() {
  while (!tutorExpect.length && tutorOutbox.length) {
    const ex = tutorOutbox.shift();
    if (ex.conv !== tutorConvId || !tutorLive || !tutorLive.ready) { if (ex.then) { const f = ex.then; ex.then = null; f(false); } continue; }
    tutorLiveSendEx(ex);
    return true;
  }
  return false;
}
/** 부탁한 말에 답이 오지 않았다 */
function tutorLiveNoAnswer(ex) {
  if (ex.conv !== tutorConvId) return;
  if (ex.then) { const f = ex.then; ex.then = null; f(false); }
  if (tutorLiveNext()) return;
  if (ex.kind === "greet" || ex.typed) {
    tutorMicStop();
    if (tutorLiveErrBubble("(답을 받지 못했어요)", "AI가 답을 만들지 못했어요. 다시 보내 볼까요?", "다시 보내기", () => tutorLiveSay(ex.text, { kind: ex.kind, typed: ex.typed })))
      setTutorStatus("답을 받지 못했어요 · 다시 보내기를 눌러 주세요", "");
    return;
  }
  setTutorStatus(tutorIdleMsg(), "");
  tutorAfterSpeak();
}
/** 대화 기록에 알림 말풍선 (버튼을 누르면 다시 시도). 앞의 알림은 치운다 */
function tutorLiveErrBubble(line, why, label, retry) {
  const log = tutorEl("tutor-log"); if (!log) return null;
  log.querySelectorAll(".tutor-live-err").forEach(x => x.remove());
  const b = addTutorBubble("tutor", line);
  b.classList.add("tutor-nudge", "tutor-live-err");
  b.removeAttribute("title");
  const w = document.createElement("div"); w.className = "tutor-err"; w.textContent = why; b.appendChild(w);
  const again = document.createElement("button"); again.className = "tutor-slow-btn";
  again.innerHTML = `${tutorIcon("retry")}${label}`;
  again.onclick = ev => { ev.stopPropagation(); b.remove(); if (typeof NeuralTTS !== "undefined") NeuralTTS.unlockAudio(); retry(); };
  b.appendChild(again);
  return b;
}
/** 서버가 보낸 소식 */
function tutorLiveOnMessage(m, conn) {
  const u = m.sessionResumptionUpdate;
  if (u && u.newHandle && u.resumable !== false) { tutorLiveHandle = u.newHandle; tutorLiveHandleAt = Date.now(); }
  if (m.goAway) tutorLiveRenewSoon(conn);                       // 곧 끊긴다고 알려 왔다: 쉬는 틈에 이어 가기 표로 새로 연결
  const va = m.voiceActivity;
  if (va) {
    const ty = String(va.type || va.voiceActivityType || "");
    if (/START/.test(ty)) tutorUserSpeaking();
    else if (/END/.test(ty) && tutorListening && !conn.manual) { tutorSetBusy(true); tutorWaitReply(); }
  }
  const sc = m.serverContent;
  if (!sc) return;
  if (sc.interimInputTranscription && sc.interimInputTranscription.text) tutorUserText(sc.interimInputTranscription.text, true);
  if (sc.inputTranscription && sc.inputTranscription.text) tutorUserText(sc.inputTranscription.text, false);
  if (sc.interrupted) tutorTutorInterrupted();
  const parts = (sc.modelTurn && sc.modelTurn.parts) || [];
  for (const p of parts) if (p && p.inlineData && p.inlineData.data && /^audio/i.test(p.inlineData.mimeType || "audio/pcm")) tutorTutorAudio(p.inlineData.data);
  if (sc.outputTranscription && sc.outputTranscription.text) tutorTutorText(sc.outputTranscription.text);
  if (sc.generationComplete || sc.turnComplete) { const t = tutorTurn; if (t && !t.done) tutorTurnGenDone(t); }
  if (sc.turnComplete) { const t = tutorLastTurn; if (t && t.user && !t.user.recorded && t.conv === tutorConvId) tutorUserTurnDone(t.user, true); }   // 내 말 받아쓰기는 차례가 다 끝날 때까지 기다려 본다
}

// ----- 내 차례 -----
/** 내 말소리가 들린다 (마이크 소리 크기·받아쓰기·구글의 말 시작 알림으로): 처음 들리면 '누르면 바로 보내요' 안내 */
let tutorUttHinted = false;
function tutorUserSpeaking() {
  tutorVoiceAt = Date.now();
  clearTimeout(tutorReplyTimer);
  if (!tutorListening) return;
  tutorSetMode("listening");
  if (tutorUttHinted || tutorPractice) return;
  tutorUttHinted = true;
  const manual = tutorLive ? tutorLive.manual : tutorSendManual();
  setTutorStatus(manual ? "다 말했으면 보내기 단추를 누르세요" : `${tutorName()}를 누르면 바로 보내요`, "listening");
  const send = document.querySelector(".talk-input .send"); if (send && manual) send.classList.add("waiting");   // 직접 보내기: 보내기 버튼이 은은하게 빛난다
}
/** 이번에 듣는 동안 내가 뭔가 말했는지 (마이크 소리나 받아쓰기로) */
const tutorHeardSomething = () => tutorUttVoiceMs >= 250 || !!(tutorUserTurn && tutorCleanHeard(tutorUserTurn.text || tutorUserTurn.interim));
const tutorSendGlow = on => { const send = document.querySelector(".talk-input .send"); if (send && !on) send.classList.remove("waiting"); };
const tutorCleanHeard = s => (s || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").replace(/\s+([,.!?])/g, "$1").trim();
const tutorNewUserTurn = () => ({ text: "", interim: "", bubble: null, reply: null, beforeMsg: null, practice: !!tutorPractice, recorded: false, closed: false,
  at: Date.now(), startAt: Date.now(), conv: tutorConvId, before: tutorSaidLines[tutorSaidLines.length - 1] });
/** 받아쓴 내 말 조각: 지금 내 차례에 붙인다. 받아쓰기는 늦게 오기도 해서 (튜터가 대답하기 시작한 뒤에도), 듣지 않는 동안 온 조각은 방금 끝난 내 말의 것으로 본다 */
function tutorUserText(frag, interim) {
  let u = tutorUserTurn;
  if (!u) {
    const last = (tutorTurn && tutorTurn.user) || tutorLastUser;
    // 듣지 않는 동안(튜터 차례·쉬는 중)이나 막 다시 듣기 시작했을 때 온 조각은 방금 끝난 내 말의 늦은 받아쓰기다 (새 말은 보낸 소리가 있어야 받아써진다)
    if (last && last.conv === tutorConvId && Date.now() - last.at < 15000 && (!tutorListening || (Date.now() - tutorListenAt < 400 && tutorUttVoiceMs < 100))) u = last;
    else if (!tutorCallActive) return;
    else u = tutorUserTurn = tutorNewUserTurn();
  }
  if (interim) u.interim = frag;
  else {
    const a = tutorNorm(u.text), b = tutorNorm(frag);
    u.text = a.length > 3 && b.startsWith(a) ? frag : u.text + frag;   // 누적으로 보내는 모델이면 바꿔 끼운다
    u.interim = "";
  }
  u.at = Date.now();
  if (tutorListening && u === tutorUserTurn) tutorUserSpeaking();
  const shown = tutorCleanHeard(u.text + (u.interim ? " " + u.interim : ""));
  if (!shown) return;
  if (!u.bubble) {
    u.bubble = addTutorBubble("me", shown);
    if (!u.recorded) u.bubble.classList.add("live");
    if (u.reply && u.reply.isConnected) u.reply.before(u.bubble);   // 그 말에 대한 튜터 대답보다 앞에
  } else u.bubble.querySelector(".tutor-text").textContent = shown;
  if (u.closed) tutorUserLate(u);
}
/** 내 차례를 마무리한다: 글이 있으면 기록(교정·노트), 따라 말하기 중이면 채점. 아직 글이 없으면 final일 때만 닫고 늦게 올 글을 기다린다 */
function tutorUserTurnDone(u, final) {
  if (!u || u.recorded) return;
  const text = tutorCleanHeard(u.text || u.interim);
  if (tutorUserTurn === u && (final || text)) tutorUserTurn = null;
  if (!text) {
    if (final) { u.closed = true; tutorLastUser = u; if (u.bubble) { u.bubble.remove(); u.bubble = null; } }
    return;
  }
  u.recorded = true; u.closed = true;
  tutorLastUser = u;
  if (!u.bubble) { u.bubble = addTutorBubble("me", text); if (u.reply && u.reply.isConnected) u.reply.before(u.bubble); }
  u.bubble.classList.remove("live");
  u.bubble.querySelector(".tutor-text").textContent = text;
  if (/[가-힣]/.test(text)) u.bubble.removeAttribute("lang"); else u.bubble.lang = "en";
  u.said = text;
  if (u.practice && tutorPractice) {                          // 따라 말하기: 대화 기록에만 넣고 교정·노트에는 넣지 않는다
    u.bubble.classList.add("practice");
    u.msg = tutorMsgInsert({ role: "user", content: text }, u.beforeMsg);
    tutorPracticeJudge(text);
  } else { u.item = tutorRecordLearner(text, u.bubble, u.beforeMsg, u.before); u.msg = u.item.msg; }
}
/** 끝난 뒤에 늦게 온 받아쓰기: 잠시 모았다가 기록·교정을 고친다 (끝날 때 글이 없었으면 이제 기록한다) */
function tutorUserLate(u) {
  clearTimeout(u.lateTimer);
  u.lateTimer = setTimeout(() => {
    const text = tutorCleanHeard(u.text || u.interim);
    if (!text || u.conv !== tutorConvId) return;
    if (!u.recorded) { tutorUserTurnDone(u, true); return; }
    if (text === u.said) return;
    u.said = text;
    if (u.bubble) u.bubble.querySelector(".tutor-text").textContent = text;
    if (u.msg) u.msg.content = text;
    const it = u.item;
    if (!it) return;
    const i = tutorLearnerLines.lastIndexOf(it.text); if (i >= 0) tutorLearnerLines[i] = text;
    it.text = text;
    if (it.tipEl) { it.tipEl.remove(); it.tipEl = null; }
    it.tipped = false;
    if (it.fix === "" && it.fixLocked) return;          // 힌트 문장·한국어는 고치지 않는다
    it.fix = undefined;
    tutorCheckItem(it, it.before, tutorSessionToken);   // 더 들은 문장으로 다시 확인
  }, 700);
}
/** 대화 기록에 넣는다 (그 말에 대한 튜터 대답보다 앞에) */
function tutorMsgInsert(m, beforeMsg) {
  const i = beforeMsg ? tutorMessages.indexOf(beforeMsg) : -1;
  if (i > 0) tutorMessages.splice(i, 0, m); else tutorMessages.push(m);
  return m;
}
/** 말을 보낸 뒤 답이 너무 늦으면 (잡음만 들렸거나 연결이 느리면) 다시 듣는다 */
function tutorWaitReply() {
  clearTimeout(tutorReplyTimer);
  const gen = tutorLiveGen;
  setTutorStatus("생각 중…", "thinking");
  tutorReplyTimer = setTimeout(() => {
    if (gen !== tutorLiveGen || tutorTurn || tutorExpect.length) return;
    tutorSetBusy(false);
    const u = tutorUserTurn;
    if (u) tutorUserTurnDone(u, true);
    setTutorStatus("잘 안 들렸어요 · 다시 말해 주세요", "");
    tutorAfterSpeak();
  }, 9000);
}

// ----- 튜터 차례 -----
/** 튜터의 새 차례 (첫 소리나 첫 글자가 왔을 때) */
function tutorTurnStart() {
  const old = tutorTurn;
  if (old) { old.cut = true; tutorSilenceAll(); if (!old.done) tutorTurnGenDone(old); tutorTurnSettle(old); }
  // 글로 부탁한 말의 답인지, 내가 한 말에 대한 대답인지 (부탁을 보내기 전부터 내가 말하던 중이었으면 먼저 오는 건 내 말에 대한 대답)
  const u = tutorUserTurn, spoke = !!(u && tutorCleanHeard(u.text || u.interim));
  const ex = spoke && (!tutorExpect.length || u.startAt < tutorExpect[0].sentAt) ? null : (tutorExpect.shift() || null);
  if (ex) clearTimeout(ex.timer);
  clearTimeout(tutorReplyTimer); clearTimeout(tutorQuietTimer);
  const t = { kind: ex ? ex.kind : "chat", ex, text: "", pcm: [], player: null, bubble: null, msg: null, user: null, conv: tutorConvId,
    done: false, played: false, cut: tutorHold, held: tutorHold, userCut: false, pauseCut: false, settled: false };
  tutorTurn = tutorLastTurn = t;
  tutorSetBusy(true);
  tutorSetListening(false);                            // 튜터가 말하는 동안 내 소리는 보내지 않는다
  if (t.kind !== "say") { t.msg = { role: "assistant", content: "" }; tutorMessages.push(t.msg); t.bubble = addTutorBubble("tutor", "…"); }   // 대화 기록 자리를 먼저 잡아 둔다 (차례가 뒤섞이지 않게)
  if (!ex) {                                           // 내 말에 대한 대답: 그 말의 받아쓰기가 늦게 와도 이 대답 앞에 붙게
    t.user = tutorUserTurn || tutorNewUserTurn();
    tutorUserTurn = null;
    t.user.reply = t.bubble; t.user.beforeMsg = t.msg;
    if (t.user.bubble && t.bubble) t.bubble.before(t.user.bubble);
  }
  if (!t.cut) setTutorStatus("생각 중…", "thinking");
  return t;
}
const tutorTurnNow = () => tutorTurn && !tutorTurn.done ? tutorTurn : tutorTurnStart();
function tutorTutorAudio(b64) {
  const t = tutorTurnNow();
  let pcm;
  try { pcm = tutorB64ToI16(b64); } catch (e) { return; }
  t.pcm.push(pcm);
  if (t.cut || typeof NeuralTTS === "undefined") return;   // 끊은 차례: 소리는 버리고 (다시 듣기용으로만 둔다)
  if (!t.player) {
    t.player = NeuralTTS.playStream();
    tutorSpeaking = true;
    setTutorStatus("말하는 중…", "speaking");
    t.player.done.then(() => { t.played = true; tutorTurnSettle(t); });
  }
  t.player.push(tutorI16ToF32(pcm), TUTOR_LIVE_OUT_RATE);
}
const tutorCleanSaid = s => (s || "").replace(/<[^>]*>|\[[^\]]*\]/g, " ").replace(/\s+/g, " ").replace(/\s+([,.!?])/g, "$1").trim();
function tutorTutorText(frag) {
  const t = tutorTurnNow();
  const a = tutorNorm(t.text), b = tutorNorm(frag);
  t.text = a.length > 3 && b.startsWith(a) ? frag : t.text + frag;
  if (t.bubble) t.bubble.querySelector(".tutor-text").textContent = tutorCleanSaid(t.text) || "…";
}
/** 구글이 '튜터 말이 끊겼다'고 알려 왔다 (내 말이 이어졌다): 소리를 멈추고 내 말을 계속 듣는다 */
function tutorTutorInterrupted() {
  const t = tutorTurn;
  if (!t || t.done) return;
  const resume = !t.cut;
  t.cut = true;
  tutorSilenceAll(); if (!tutorPreview) tutorSpeaking = false;
  if (!t.userCut && t.user && !t.user.recorded) { tutorUserTurn = t.user; t.user = null; }   // 튜터가 대답하려던 내 말은 아직 끝나지 않았다 (내가 끊은 게 아니면)
  tutorTurnGenDone(t);
  if (resume && tutorCallActive && !tutorHold) tutorLiveListen();
}
/** 튜터가 이번 말을 다 만들었다: 내 말·튜터 말을 기록하고 말풍선을 마무리한다 (소리는 아직 나는 중일 수 있다) */
function tutorTurnGenDone(t) {
  if (!t || t.done) return;
  t.done = true;
  if (tutorTurn === t) tutorSetBusy(false);
  if (t.player) t.player.end(); else t.played = true;
  const mine = t.conv === tutorConvId;
  if (t.user && mine && tutorCleanHeard(t.user.text || t.user.interim)) tutorUserTurnDone(t.user);   // (받아쓰기가 아직이면 차례가 다 끝날 때까지 기다린다)
  let said = tutorCleanSaid(t.text);
  if (!said && t.kind === "greet") said = tutorGreeting;   // 받아쓰기가 없으면 부탁한 인사 그대로
  if (t.kind !== "say" && mine) {
    if (said) { tutorSaidLines.push(said); if (t.msg) t.msg.content = said; }
    else if (t.msg) { const i = tutorMessages.indexOf(t.msg); if (i >= 0) tutorMessages.splice(i, 1); t.msg = null; if (t.user) t.user.beforeMsg = null; }
    const b = t.bubble;
    if (b && b.isConnected) {
      if (said) {
        b.querySelector(".tutor-text").textContent = said;
        b.onclick = () => tutorSpeakTap(said, false, b);
        addSlowButton(b, said);
        addTranslateButton(b, said);
      } else if (!t.pcm.length) b.remove();
      else { b.querySelector(".tutor-text").textContent = "🔊"; b.onclick = () => tutorSpeakTap("", false, b); }   // 소리만 왔다 (누르면 다시 듣기)
    }
  }
  tutorTurnSettle(t);
}
/** 튜터 차례를 끝낸다 (다 만들었고 소리도 끝났거나 끊었을 때): 다시 듣기용 목소리를 두고, 다음으로 */
function tutorTurnSettle(t) {
  if (t.settled || !t.done || !(t.played || t.cut)) return;
  t.settled = true;
  if (t.bubble && t.pcm.length && t.bubble.isConnected) tutorKeepAudio(t.bubble, t.pcm);
  if (t.user && !t.user.recorded && t.conv === tutorConvId) tutorUserTurnDone(t.user, true);
  const cur = tutorTurn === t;
  if (cur) { tutorTurn = null; if (!tutorPreview) tutorSpeaking = false; }
  if (!t.cut) tutorReconnects = 0;
  if (t.conv !== tutorConvId || !cur) return;
  const missed = (t.held || t.pauseCut) && t.bubble && t.bubble._pcm ? t.bubble : null;   // 멈춘 동안 온(끊긴) 튜터 말
  const then = t.ex && t.ex.then;
  if (then) { t.ex.then = null; then(!t.cut); }
  if (tutorLiveNext()) return;                         // 기다리던 다음 부탁을 보낸다
  if (then || t.userCut) return;                       // (내가 끊었으면 누른 쪽에서 이미 듣기 시작)
  if (missed) { if (tutorHold) tutorUnheard = missed; else tutorReplayTurn(missed); return; }   // 돌아오면(이미 돌아와 있으면 지금) 들려준다
  if (t.cut) { if (!tutorHold) tutorAfterSpeak(); return; }
  setTutorStatus(tutorIdleMsg(), "");
  if (tutorLiveRetry && tutorLive && tutorLive.ready) { const r = tutorLiveRetry; tutorLiveRetry = null; tutorLiveSay(r.text, { kind: r.kind, typed: r.typed }); return; }
  tutorAfterSpeak();
}
/** 튜터 말을 끊는다 (byUser: 내가 끊음 — 아니면 판·다른 앱으로 잠시 멈춤): 소리를 멈추고 이번 차례에 더 오는 소리는 버린다 (글은 끝까지 받아 말풍선에) */
function tutorCutTutor(byUser = true) {
  tutorDeviceSeq++;
  const t = tutorTurn;
  if (t) {
    t.cut = true;
    if (byUser) t.userCut = true; else if (!t.userCut) t.pauseCut = true;
    if (t.ex && t.ex.then) { const f = t.ex.then; t.ex.then = null; f(false); }
  }
  tutorSilenceAll();
  tutorDeviceTalking = false;
  if (!tutorPreview) tutorSpeaking = false;
  if (t) tutorTurnSettle(t);
}
/** 다시 듣기용 목소리를 말풍선에 둔다 (메모리를 아끼려고 최근 12개만) */
function tutorKeepAudio(bubble, chunks) {
  const n = chunks.reduce((s, c) => s + c.length, 0), all = new Int16Array(n);
  let o = 0; chunks.forEach(c => { all.set(c, o); o += c.length; });
  bubble._pcm = all;
  tutorAudioKept.push(bubble);
  while (tutorAudioKept.length > 12) { const old = tutorAudioKept.shift(); if (old) old._pcm = null; }
}
/** 받아 둔 튜터 목소리를 그대로 다시 튼다 (말풍선을 누르면 · 멈춘 동안 온 말을 돌아와서) */
function tutorReplayTurn(bubble) {
  if (typeof NeuralTTS === "undefined" || !bubble._pcm) return;
  if (tutorTurn || tutorSpeaking) tutorCutTutor();
  tutorStopPreview();
  tutorSetListening(false); clearTimeout(tutorQuietTimer);
  NeuralTTS.unlockAudio();
  const pcm = bubble._pcm, player = NeuralTTS.playStream(), my = ++tutorDeviceSeq;
  tutorSpeaking = true;
  setTutorStatus("말하는 중…", "speaking");
  for (let o = 0; o < pcm.length; o += TUTOR_LIVE_OUT_RATE) player.push(tutorI16ToF32(pcm.subarray(o, o + TUTOR_LIVE_OUT_RATE)), TUTOR_LIVE_OUT_RATE);
  player.end();
  player.done.then(ok => {
    if (my !== tutorDeviceSeq) return;
    tutorSpeaking = false;
    setTutorStatus(tutorIdleMsg(), "");
    if (ok) tutorAfterSpeak();
  });
}

// ----- 듣기 (마이크) -----
const tutorListenMsg = () => tutorPractice ? "듣고 있어요… 따라 말해 보세요"
  : (tutorLive ? tutorLive.manual : tutorSendManual()) ? "듣고 있어요… 다 말하면 보내기 단추를 누르세요" : "듣고 있어요… 영어로 말해 보세요";
/** 내 말을 듣기 시작한다 (마이크가 아직이면 켠다) */
function tutorLiveListen() {
  tutorHold = false;
  if (!tutorCanListen()) return;
  const gen = tutorLiveGen;
  if (!tutorMicIn) setTutorStatus("마이크 켜는 중…", "");
  tutorMicStart().then(ok => { if (ok && gen === tutorLiveGen && tutorCanListen()) tutorSetListening(true); });
}
/** 내 소리를 튜터에게 보낼지 (끄면 모아 둔 소리를 마저 보내고, 자동 모드면 '소리 끝' 알림) */
function tutorSetListening(on) {
  const c = tutorLive;
  if (on) {
    if (tutorListening || !c) return;
    tutorListening = true; tutorListenAt = Date.now();
    tutorUttVoiceMs = 0; tutorMicBufN = 0; tutorUttHinted = false; tutorPreRoll = [];
    setTutorStatus(tutorListenMsg(), "listening");
    tutorArmQuiet();
    return;
  }
  if (!tutorListening) return;
  tutorListening = false;
  tutorSendGlow(false);
  tutorMicFlush();
  if (c && c.sentAudio && !c.manual) tutorLiveSend({ realtimeInput: { audioStreamEnd: true } });
  if (c) c.sentAudio = false;
  tutorPreRoll = [];
  const room = tutorEl("tutor-chat-area"); if (room && room.dataset.mode === "listening") tutorSetMode("");
}
/** 기다리지 않고 지금까지 한 말을 보낸다 (➤·튜터 누르기 · 직접 보내기 모드) */
function tutorManualSend() {
  const c = tutorLive;
  if (!c || !tutorListening) return;
  tutorMicFlush();
  tutorListening = false;
  tutorSendGlow(false);
  if (c.manual) { if (c.activity) { tutorLiveSend({ realtimeInput: { activityEnd: {} } }); c.activity = false; } }
  else if (c.sentAudio) tutorLiveSend({ realtimeInput: { audioStreamEnd: true } });
  c.sentAudio = false; tutorPreRoll = [];
  clearTimeout(tutorQuietTimer);
  tutorSetBusy(true);
  tutorWaitReply();
}
/** 듣기를 쉬고 마이크를 놓는다 (다시 들을 때 켠다) */
function tutorRest(msg) {
  tutorSetListening(false);
  clearTimeout(tutorQuietTimer);
  tutorMicStop();
  if (msg) setTutorStatus(msg, "");
}
/** 한참 말이 없으면 마이크를 쉰다 (따라 말하기 중이면 연습만 끝낸다) */
function tutorArmQuiet() {
  clearTimeout(tutorQuietTimer);
  if (!tutorListening) return;
  const gen = tutorLiveGen;
  tutorQuietTimer = setTimeout(() => {
    if (gen !== tutorLiveGen || !tutorListening) return;
    if (Date.now() - tutorVoiceAt < 5000 || (tutorUserTurn && Date.now() - tutorUserTurn.at < 5000)) { tutorArmQuiet(); return; }   // 말하는 중이었다
    if (tutorPractice) { tutorPracticeEnd("소리가 들리지 않았어요. 다시 눌러 말해 보세요"); setTutorStatus(tutorListenMsg(), "listening"); tutorArmQuiet(); return; }
    tutorRest(`준비되면 ${tutorName()}를 눌러 주세요`);
  }, tutorQuietMs());
}
// 마이크 소리 모으기 (AudioWorklet: 0.04초씩 화면 쪽으로 보낸다. 못 쓰는 브라우저는 ScriptProcessor로)
const TUTOR_MIC_WORKLET = `class TutorMic extends AudioWorkletProcessor {
  constructor() { super(); this.buf = new Float32Array(2048); this.n = 0; }
  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (ch) for (let i = 0; i < ch.length; i++) { this.buf[this.n++] = ch[i]; if (this.n === this.buf.length) { this.port.postMessage(this.buf.slice(0)); this.n = 0; } }
    return true;
  }
}
registerProcessor("tutor-mic", TutorMic);`;
/** 마이크를 켠다 (대화하는 동안 켜 두고, 보낼지만 정한다). 켜졌으면 true */
function tutorMicStart() {
  if (tutorMicIn) return tutorMicIn.ready;
  const m = { closed: false, stream: null, ctx: null, src: null, node: null, ready: null };
  tutorMicIn = m;
  const drop = () => {
    try { if (m.node) { m.node.onaudioprocess = null; if (m.node.port) m.node.port.onmessage = null; m.node.disconnect(); } } catch (e) {}
    try { if (m.src) m.src.disconnect(); } catch (e) {}
    if (m.stream) m.stream.getTracks().forEach(t => t.stop());
    if (m.ctx && m.ctx.state !== "closed") m.ctx.close().catch(() => {});
  };
  m.drop = drop;
  // 소리 장치는 먼저 만든다 (누른 순간 안에서 만들어야 켜지는 브라우저가 있다)
  const Ctx = window.AudioContext || window.webkitAudioContext;
  try { if (Ctx) { m.ctx = new Ctx(); if (m.ctx.state === "suspended") m.ctx.resume().catch(() => {}); } } catch (e) { m.ctx = null; }
  m.ready = (async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !m.ctx) { const e = new Error("no getUserMedia"); e.name = "NotSupportedError"; throw e; }
      // 안드로이드는 에코 제거를 켜면 '통화' 소리로 바뀌어 음량 버튼이 통화 음량만 바꾸고 미디어 음량이 안 바뀐다 → 끈다
      // (튜터가 말하는 동안에는 내 소리를 보내지 않아서 에코 제거가 없어도 튜터 목소리가 다시 들어가지 않는다)
      const android = tutorEnv().android;
      m.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: !android, noiseSuppression: !android, autoGainControl: true, channelCount: 1 } });
      if (m.closed) { drop(); return false; }
      tutorMicDenied = false; tutorNoMic = false;
      const ctx = m.ctx;
      if (ctx.state === "suspended") await ctx.resume().catch(() => {});
      m.src = ctx.createMediaStreamSource(m.stream);
      const rs = tutorResampler(ctx.sampleRate, 16000);
      const feed = f => { if (!m.closed && tutorMicIn === m) tutorMicFrame(rs(f)); };
      if (ctx.audioWorklet && typeof AudioWorkletNode !== "undefined") {
        try {
          const url = URL.createObjectURL(new Blob([TUTOR_MIC_WORKLET], { type: "application/javascript" }));
          try { await ctx.audioWorklet.addModule(url); } finally { URL.revokeObjectURL(url); }
          if (m.closed) { drop(); return false; }
          const node = new AudioWorkletNode(ctx, "tutor-mic");
          node.port.onmessage = e => feed(e.data);
          m.src.connect(node); node.connect(ctx.destination);   // (소리는 내지 않는다)
          m.node = node;
        } catch (e) { console.warn("AudioWorklet을 못 써서 ScriptProcessor로", e); m.node = null; }
      }
      if (!m.node) {
        const proc = ctx.createScriptProcessor(2048, 1, 1);
        proc.onaudioprocess = e => feed(new Float32Array(e.inputBuffer.getChannelData(0)));
        m.src.connect(proc); proc.connect(ctx.destination);
        m.node = proc;
      }
      if (m.closed) { drop(); return false; }
      return true;
    } catch (e) {
      drop();
      if (tutorMicIn === m) tutorMicIn = null;
      if (!m.closed) tutorMicFailed(e);
      return false;
    }
  })();
  return m.ready;
}
function tutorMicStop() {
  const m = tutorMicIn; tutorMicIn = null;
  if (!m) return;
  m.closed = true;
  m.drop();
}
function tutorMicFailed(e) {
  console.warn("마이크 열기 실패", e);
  if (e && (e.name === "NotAllowedError" || e.name === "SecurityError")) { tutorMicDenied = true; showMicPermissionHelp(); }
  else if (e && e.name === "NotSupportedError") { tutorNoMic = true; tutorAlert("이 화면에서는 마이크를 쓸 수 없어요.\n아래 입력칸에 적어서 대화해 주세요."); }
  else if (e && (e.name === "NotFoundError" || e.name === "OverconstrainedError")) { tutorNoMic = true; tutorAlert("마이크를 찾지 못했어요.\n아래 입력칸에 적어서 대화할 수 있어요."); }
  else { tutorNoMic = true; tutorAlert("마이크를 열지 못했어요. 다른 앱이 마이크를 쓰고 있지 않은지 확인해 주세요.\n아래 입력칸에 적어서 대화할 수도 있어요."); }
  if (!tutorSpeaking && !tutorTurn && !tutorExpect.length) setTutorStatus("아래 입력칸에 적어서 말해 보세요", "");
}
/** 소리 빠르기 바꾸기 (마이크 48kHz 등 → 16kHz): 구간 평균 (간단한 저역 통과 겸). 조각이 이어져도 끊김 없이 */
function tutorResampler(from, to) {
  if (Math.abs(from - to) < 1) return f => f;
  const step = from / to;
  let edge = step, idx = 0, sum = 0, n = 0;
  return f => {
    const out = new Float32Array(Math.ceil(f.length / step) + 1);
    let k = 0;
    for (let i = 0; i < f.length; i++, idx++) {
      sum += f[i]; n++;
      if (idx + 1 >= edge) { out[k++] = sum / n; sum = 0; n = 0; edge += step; }
    }
    return out.subarray(0, k);
  };
}
/** 16kHz 마이크 소리 조각: 말소리인지 보고(듣기 막대·조용할 때 판단), 듣는 중이면 0.1초씩 모아 보낸다.
 *  직접 보내기는 말소리가 들릴 때 '말 시작'을 알리고 그 직전 0.4초부터 보낸다 (조용한 소리를 쌓지 않게) */
function tutorMicFrame(f) {
  if (!f.length) return;
  let s = 0; for (let i = 0; i < f.length; i++) s += f[i] * f[i];
  const rms = Math.sqrt(s / f.length);
  tutorNoise = !tutorNoise ? rms : rms < tutorNoise ? tutorNoise * 0.9 + rms * 0.1 : tutorNoise * 0.998 + rms * 0.002;   // 주변 소리: 조용한 쪽을 따라간다
  if (!tutorListening) return;
  const loud = rms > Math.max(0.012, tutorNoise * 3);
  if (loud) { tutorUttVoiceMs += f.length / 16; tutorHearPulse(); if (tutorUttVoiceMs >= 150) tutorUserSpeaking(); }
  const c = tutorLive;
  if (c && c.manual && !c.activity) {
    tutorPreRoll.push(f);
    let n = tutorPreRoll.reduce((a, x) => a + x.length, 0);
    while (n > 6400 && tutorPreRoll.length > 1) n -= tutorPreRoll.shift().length;
    if (!loud) return;
    if (tutorLiveSend({ realtimeInput: { activityStart: {} } })) c.activity = true;
    const pre = tutorPreRoll; tutorPreRoll = [];
    pre.forEach(tutorMicPush);
    return;
  }
  tutorMicPush(f);
}
function tutorMicPush(f) {
  if (!tutorMicBuf) tutorMicBuf = new Int16Array(1600);
  for (let i = 0; i < f.length; i++) {
    const v = f[i] > 1 ? 1 : f[i] < -1 ? -1 : f[i];
    tutorMicBuf[tutorMicBufN++] = v < 0 ? v * 0x8000 : v * 0x7fff;
    if (tutorMicBufN === tutorMicBuf.length) tutorMicFlush();
  }
}
function tutorMicFlush() {
  if (!tutorMicBufN || !tutorMicBuf) return;
  const bytes = new Uint8Array(tutorMicBuf.buffer, 0, tutorMicBufN * 2);
  tutorMicBufN = 0;
  const c = tutorLive;
  if (c && tutorLiveSend({ realtimeInput: { audio: { data: tutorB64(bytes), mimeType: TUTOR_LIVE_IN } } })) c.sentAudio = true;
}
function tutorB64(bytes) {
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
/** base64 → 16비트 소리 (리틀 엔디언) */
function tutorB64ToI16(b64) {
  const bin = atob(b64), n = bin.length >> 1, out = new Int16Array(n);
  for (let i = 0; i < n; i++) { const v = bin.charCodeAt(2 * i) | (bin.charCodeAt(2 * i + 1) << 8); out[i] = v >= 0x8000 ? v - 0x10000 : v; }
  return out;
}
function tutorI16ToF32(a) { const f = new Float32Array(a.length); for (let i = 0; i < a.length; i++) f[i] = a[i] / 32768; return f; }
const tutorPcm16ToF32 = b64 => tutorI16ToF32(tutorB64ToI16(b64));

// ----- 연결 잇기·끊기 -----
/** 연결을 다시 열어 하던 대화를 이어 간다 (이어 가기 표가 있으면 그대로, 없거나 설정을 바꿨으면 지금까지 대화를 안내에 붙여 새로).
 *  kind: lobby·sheet·back이면 튜터가 반갑게 하던 질문을 다시 한다 · quiet·tap이면 바로 듣는다 */
async function tutorLiveResume(kind) {
  if (!tutorReady() || !tutorCallActive || tutorLiveConnecting) return;
  const conv = tutorConvId;
  if (!tutorSpeaking) setTutorStatus("연결하는 중…", "thinking");
  if (!tutorMicDenied && !tutorNoMic) tutorMicStart();   // 마이크는 연결하는 동안 미리 켠다
  const fresh = tutorLiveStale || !tutorLiveHandle || Date.now() - tutorLiveHandleAt > TUTOR_HANDLE_MS;
  try {
    try { await tutorLiveConnect(fresh ? { history: true } : { resume: true }); }
    catch (e) {
      if (fresh || (e && e.name === "AbortError") || geminiKeyProblem(e) || geminiSetupKind(e) || e.status === 429 || e.reason === "OFFLINE") throw e;
      tutorLiveHandle = "";
      await tutorLiveConnect({ history: true });       // 이어 가기 표가 안 되면 지금까지 대화를 붙여 새로 연다
    }
  } catch (e) {
    if (conv === tutorConvId && !(e && e.name === "AbortError")) tutorLiveFailed(e);
    return;
  }
  if (conv !== tutorConvId || !tutorCallActive) return;
  document.querySelectorAll("#tutor-log .tutor-live-err").forEach(x => x.remove());   // 연결됐으면 앞의 연결 실패 알림은 치운다
  if (!tutorSaidLines.length) { tutorLiveSay(TUTOR_KICKOFF(tutorGreeting || tutorPickGreeting().text), { kind: "greet" }); return; }   // 첫 인사도 못 했다
  if (tutorLiveNext()) return;
  if (tutorLiveRetry) { const r = tutorLiveRetry; tutorLiveRetry = null; tutorLiveSay(r.text, { kind: r.kind, typed: r.typed }); return; }
  if (tutorTurn || tutorSpeaking) return;               // 끊기기 전에 받은 말을 아직 트는 중: 끝나면 저절로 듣는다
  if ((kind === "lobby" || kind === "sheet" || kind === "back") && tutorPendingQuestion() && !tutorTypingNow() && !tutorSheetOpen()) { tutorLiveSay(TUTOR_BACK_NOTE, { kind: "back" }); return; }
  tutorAfterSpeak();
}
/** 연결하지 못했을 때: 대화 기록에 알림 + 🔄 다시 연결 (키 문제면 키 연결 화면으로) */
function tutorLiveFailed(e) {
  console.warn("Gemini Live 연결 실패", e);
  tutorSetBusy(false);
  tutorExpect.forEach(x => clearTimeout(x.timer)); tutorExpect = [];
  tutorRest();
  if (geminiKeyProblem(e)) { tutorLiveClose(true); tutorSetKey(""); setTimeout(() => { renderTutorPage(); tutorAlert(geminiErrorText(e)); }, 0); return; }
  if (!tutorCallActive) return;
  const why = e && e.status === 404 ? "이 키로는 아직 실시간 음성 대화를 쓸 수 없어요 (앱 오류가 아니에요). 잠시 뒤 다시 해 보거나 구글 AI Studio에서 새 키를 만들어 연결해 주세요." : geminiErrorText(e);
  tutorLiveErrBubble("(연결하지 못했어요)", why, "다시 연결", () => tutorLiveResume("back"));
  setTutorStatus(e && e.status === 429 ? "사용량이 다 찼어요 · 잠시 뒤 다시 연결을 눌러 주세요" : "연결하지 못했어요 · 다시 연결을 눌러 주세요", "");
}
/** 대화 중에 연결이 끊겼다: 잠깐의 끊김이면 저절로 다시 잇는다 (이어 가기 표로 · 키 문제처럼 보여도 다시 이으면서 확인한다) */
function tutorLiveDropped(conn, ev) {
  let e = tutorLiveCloseError(ev);
  console.warn("Gemini Live 연결 끊김", ev && ev.code, ev && ev.reason);
  if (geminiKeyProblem(e)) e = new GeminiError("연결이 끊겼어요", 503, "DROPPED");
  tutorLive = null;
  tutorListening = false; tutorPreRoll = [];
  clearTimeout(conn.renewTimer); clearTimeout(tutorQuietTimer); clearTimeout(tutorReplyTimer);
  const t = tutorTurn;
  if (t && !t.done) tutorTurnGenDone(t);               // 받은 데까지 말풍선으로 (받은 소리는 끝까지 튼다)
  const lost = tutorExpect; tutorExpect = [];
  lost.forEach(x => clearTimeout(x.timer));
  const typed = lost.find(x => x.typed || x.kind === "greet");
  if (typed) tutorLiveRetry = { text: typed.text, kind: typed.kind, typed: typed.typed };
  lost.forEach(x => { if (x.then) { const f = x.then; x.then = null; f(false); } });
  if (!tutorTurn) tutorSetBusy(false);
  if (!tutorCallActive || !tutorPageVisible() || document.hidden) return;   // 돌아오면 다시 연결한다
  if (geminiSetupKind(e) || e.status === 429 || tutorReconnects >= 2 || navigator.onLine === false) { tutorLiveFailed(e); return; }
  tutorReconnects++;
  if (!tutorSpeaking) setTutorStatus("연결이 잠깐 끊겼어요 · 다시 잇는 중…", "thinking");
  setTimeout(() => { if (!tutorLive && tutorCallActive && !tutorLiveConnecting) tutorLiveResume("quiet"); }, 500 * tutorReconnects);
}
/** 서버가 곧 끊는다고 알려 왔다: 튜터와 내가 말하지 않는 틈에 새로 연결한다 (이어 가기 표로 — 없으면 대화를 붙여서) */
function tutorLiveRenewSoon(conn) {
  if (conn.renewTimer) return;
  const tick = () => {
    if (conn !== tutorLive) return;
    if (tutorTurn || tutorSpeaking || tutorExpect.length || tutorOutbox.length || tutorUserTurn || conn.activity || (tutorListening && Date.now() - tutorVoiceAt < 1500)) { conn.renewTimer = setTimeout(tick, 400); return; }
    conn.renewTimer = 0;
    if (!tutorCallActive) return;
    const listen = tutorListening;
    tutorLiveConnect({ resume: true })
      .then(() => { if (listen) tutorAfterSpeak(); else if (!tutorSpeaking) setTutorStatus(tutorIdleMsg(), ""); })
      .catch(e => { if (!(e && e.name === "AbortError")) tutorLiveResume("quiet"); });
  };
  conn.renewTimer = setTimeout(tick, 300);
}
/** 잠시 멈춘다 (판·시작 화면·다른 앱): 듣기와 튜터 소리를 멈추고 마이크도 놓는다. 연결은 그대로 */
function tutorLivePause() {
  tutorHold = true;
  tutorSetListening(false);
  clearTimeout(tutorQuietTimer); clearTimeout(tutorReplyTimer);
  if (tutorTurn || tutorSpeaking) tutorCutTutor(false);
  if (!tutorTurn && !tutorExpect.length && !tutorOutbox.length) tutorSetBusy(false);
  tutorMicStop();
}
/** 연결을 닫는다 (forget: 이어 가기 표도 버린다 — 새 대화·튜터 바꾸기·키 끊기 · keepPlaying: 다 받은 튜터 말은 끝까지 튼다 — 다시 연결할 때) */
function tutorLiveClose(forget, keepMic, keepPlaying) {
  tutorLiveGen++;
  const c = tutorLive; tutorLive = null;
  if (c) { c.closing = true; clearTimeout(c.renewTimer); try { c.ws.close(1000); } catch (e) {} }
  tutorListening = false; tutorMicBufN = 0; tutorPreRoll = [];
  const lost = tutorExpect; tutorExpect = [];
  lost.forEach(x => { clearTimeout(x.timer); if (x.then) { const f = x.then; x.then = null; f(false); } });
  if (!keepPlaying) { tutorOutbox.forEach(x => { if (x.then) { const f = x.then; x.then = null; f(false); } }); tutorOutbox = []; }
  clearTimeout(tutorQuietTimer); clearTimeout(tutorReplyTimer);
  const t = tutorTurn;
  if (t && !(keepPlaying && t.done && !t.cut)) { t.cut = true; tutorSilenceAll(); if (!t.done) tutorTurnGenDone(t); tutorTurnSettle(t); if (tutorTurn === t) tutorTurn = null; }
  tutorUserTurn = null;
  if (!tutorTurn) { tutorSetBusy(false); if (!tutorPreview) tutorSpeaking = false; }
  if (forget) { tutorLiveHandle = ""; tutorLiveHandleAt = 0; tutorLiveStale = false; tutorLiveRetry = null; tutorLastUser = null; tutorLastTurn = null; tutorUnheard = null; tutorOutbox = []; }
  if (!keepMic) tutorMicStop();
}
// 인터넷이 다시 연결되면 끊겼던 대화를 다시 잇는다
window.addEventListener("online", () => {
  if (tutorCallActive && !tutorLive && !tutorLiveConnecting && tutorPageVisible() && !document.hidden && !tutorSheetOpen() && tutorReady()) tutorLiveResume("back");
});

// ---------- 피드백 ----------
/** 지금까지 대화 (피드백·다시 연결할 때 튜터에게 주는 안내에 쓴다) */
function tutorTranscript(maxMsgs) {
  return tutorMessages.slice(1).filter(m => m.content).slice(-(maxMsgs || 12)).map(m => (m.role === "user" ? "Student: " : "Teacher: ") + m.content).join("\n");
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
    <div class="tutor-report-sec tutor-fb-fixes"><div class="tutor-report-title">이렇게 고쳐 말해요</div><div class="tutor-fb-list tutor-fb-wait">내가 말한 문장을 확인하고 있어요…</div></div>
    <div class="tutor-report-sec tutor-fb-expr hidden"><div class="tutor-report-title">써 볼 표현</div></div>
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
      if (r.focus) { const f = q(".tutor-fb-focus"); f.innerHTML = `<b>오늘의 핵심</b><span></span>`; f.querySelector("span").textContent = r.focus; f.classList.remove("hidden"); }
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
  // 반응 영상: 듣는 영상 위·말하는 영상 아래에 겹쳐 한 번 틀고, 끝나면 듣는 영상 첫 장면(같은 자세)으로 서서히 돌아간다
  let acts = {}, act = null, actsTimer = 0, busyAt = 0;
  const actAt = {}, ACT_COOL = { listen: 9000, think: 8000, laugh: 15000, wow: 15000, wave: 60000, idle2: 25000 }, ACT_FADE = 0.45;
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
      clearTimeout(actsTimer);
      actsTimer = setTimeout(() => mountActs(media, tutorChar().acts || []), 2500);   // 첫 화면이 다 뜬 뒤에 받는다
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
  function mountActs(media, names) {
    if (!clips || tutorChar().media !== media) return;
    const T = clips.talk;
    names.forEach(k => {
      if (acts[k]) return;
      const v = document.createElement("video");
      v.className = "tutor-clip tutor-act-clip"; v.muted = true; v.defaultMuted = true; v.playsInline = true; v.preload = "auto";
      ["muted", "playsinline", "disablepictureinpicture"].forEach(a => v.setAttribute(a, ""));
      v.setAttribute("aria-hidden", "true");
      v.innerHTML = `<source src="${media}act-${k}.webm" type='video/webm; codecs="vp9"'><source src="${media}act-${k}.mp4" type="video/mp4">`;
      T.parentNode.insertBefore(v, T);                    // 말하는 영상이 늘 위에 오게
      acts[k] = v;
    });
  }
  /** 반응 영상 하나를 튼다 (말하는 중·다른 반응 중·받는 중이면 건너뛴다). 틀었으면 true */
  function playAct(k) {
    const v = acts[k], now = performance.now();
    if (!v || !clips || paused || act || ctl.on || ctl.leaving || tutorSpeaking || v.readyState < 3 || now - (actAt[k] || -1e9) < (ACT_COOL[k] || 10000)) return false;
    actAt[k] = now; act = { k, v, out: false };
    try { v.currentTime = 0; } catch (e) {}
    playClip(v); v.classList.add("on");
    return true;
  }
  /** 반응 영상 끝내기: 끝나 갈 때(같은 자세로 돌아온 때) 듣는 영상을 첫 장면부터 다시 틀고 서서히 걷어 낸다 */
  function endAct(fast) {
    if (!act) return;
    const a = act; act = null; busyAt = performance.now();
    if (!fast && clips) { try { clips.idle.currentTime = 0; } catch (e) {} playClip(clips.idle); }
    a.v.classList.remove("on");
    setTimeout(() => { if (!act || act.v !== a.v) a.v.pause(); }, ACT_FADE * 1000 + 100);
  }
  function stepAct(now) {
    const room = document.getElementById("tutor-chat-area"), mode = room ? room.dataset.mode || "" : "";
    if (ctl.on || tutorSpeaking || (room && room.dataset.hearing)) busyAt = now;
    if (act) {
      const v = act.v;
      if (ctl.on) { endAct(true); return; }              // 말하는 영상이 위에 덮였다
      if (v.ended || (v.duration && v.duration - v.currentTime < ACT_FADE)) endAct(false);
      return;
    }
    // 아무도 말하지 않는 동안이 길면 가끔 긴 대기 영상 (같은 짧은 영상만 되풀이되지 않게)
    if ((mode === "" || mode === "listening") && now - busyAt > 7000) { if (playAct("idle2")) busyAt = now; }
  }
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
    Object.values(acts).forEach(v => { try { v.pause(); v.querySelectorAll("source").forEach(x => x.remove()); v.removeAttribute("src"); v.load(); } catch (e) {} });
    acts = {}; act = null; clearTimeout(actsTimer);
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
        if (!paused) { paused = true; endAct(true); resetTalk(); clips.idle.pause(); }   // 돌아오면 듣는 얼굴부터
        ctl.last = 0;
        return;
      }
      if (paused) { paused = false; playClip(clips.idle); }
      const now = performance.now();
      if (talk) stepTalk(now); else stepGate(now);
      stepAct(now);
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
  return { mount, remount, apply, prepare, speak, act: playAct, get acting() { return act ? act.k : ""; }, get level() { return level; }, get clip() { return clips ? clip : null; },
    get mouth() { return talk && ctl.on && clips ? talk.open[frameOf(clips.talk, talk)] : -1; },     // 지금 보이는 말하는 장면의 입 벌림 (0~100, 시험용)
    get rate() { return clips && ctl.on ? (clips.talk.paused ? 0 : clips.talk.playbackRate) : 0; },
    get mode() { return talk ? "warp" : clips ? "gate" : "draw"; },
    get debug() { return { a: ctl.a, spk: ctl.spk, f: ctl.f, on: ctl.on, plan: !!ctl.plan, planReady: !!(ctl.plan && ctl.plan.res), t: clips ? clips.talk.currentTime : 0 }; } };
})();
