// ==========================================
// AI 튜터: 기기 안에서 돌아가는 작은 언어 모델(WebLLM)과 실시간 말하기 연습
// - 모델은 한 번 내려받으면 브라우저 저장소에 남아, 토큰·서버 비용 없이 동작
// - 듣기: 브라우저 음성 인식(없으면 키보드 입력) / 말하기: 앱 음성 + 소리에 맞춘 입모양
// ==========================================

const WEBLLM_URL = "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.85/+esm";
// shader-f16을 지원하는 기기는 f16(가볍고 빠름), 아니면 f32 모델
const TUTOR_MODELS = { f16: "Llama-3.2-1B-Instruct-q4f16_1-MLC", f32: "Llama-3.2-1B-Instruct-q4f32_1-MLC" };
const TUTOR_SIZE_LABEL = "약 0.9GB";
// 튜터 그림: 입 모양별 이미지 3장(다문 입·반쯤 벌린 입·크게 벌린 입)을 넣으면 소리에 맞춰 바뀐다.
// 비워 두면 기본 캐릭터(SVG). 예: { closed: "images/tutor/closed.png", half: "images/tutor/half.png", open: "images/tutor/open.png" }
const TUTOR_AVATAR_FRAMES = null;
// 튜터 페이지를 떠난 뒤 이 시간이 지나면 모델을 메모리에서 내린다 (휴대폰 메모리 보호)
const TUTOR_UNLOAD_MS = 2 * 60 * 1000;
// 작업자 파일 위치는 이 스크립트 기준 (스크립트가 처음 실행될 때만 currentScript를 알 수 있다)
const TUTOR_WORKER_URL = new URL("tutor-worker.js", (document.currentScript && document.currentScript.src) || location.href).href;

let tutorLib = null;          // WebLLM 모듈 (튜터 페이지를 열 때만 불러온다)
let tutorEngine = null;
let tutorWorker = null;
let tutorEngineLoading = null;
let tutorModelId = null;
let tutorSupport = null;      // { ok, f16, reason }
let tutorMessages = [];       // 모델에 보내는 대화 (system 포함)
let tutorLearnerLines = [];   // 학습자가 말한 문장 (피드백용)
let tutorScenarioId = "free";
let tutorBusy = false;
let tutorSessionToken = 0;
let tutorRec = null;
let tutorSpeaking = false;
let tutorUnloadTimer = null;
let tutorHintShown = false;
let tutorSpeechToken = 0;
let tutorProgressCb = null;   // 불러오는 중에 페이지를 다시 열어도 진행 표시가 이어지도록 마지막 화면에 연결

// ---------- 지원 여부·모델 ----------
async function tutorCheckSupport() {
  if (tutorSupport) return tutorSupport;
  const fail = reason => (tutorSupport = { ok: false, reason });
  if (!window.isSecureContext || !navigator.gpu) return fail("이 브라우저는 AI 계산(WebGPU)을 지원하지 않아요. PC·안드로이드는 최신 크롬, 아이폰은 최신 iOS의 사파리에서 열어 주세요.");
  try {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) return fail("이 기기에서 AI 계산 장치를 찾지 못했어요. 최신 크롬·사파리나 다른 기기에서 이용해 주세요.");
    const f16 = adapter.features.has("shader-f16");
    tutorModelId = (window.TUTOR_MODEL_OVERRIDE && window.TUTOR_MODEL_OVERRIDE[f16 ? "f16" : "f32"]) || TUTOR_MODELS[f16 ? "f16" : "f32"];
    return (tutorSupport = { ok: true, f16 });
  } catch (e) {
    return fail("AI 계산 장치를 여는 중 문제가 생겼어요. (" + (e && e.message || e) + ")");
  }
}
async function loadTutorLib() {
  if (!tutorLib) tutorLib = await import(WEBLLM_URL);
  return tutorLib;
}
async function tutorModelCached() {
  try { const lib = await loadTutorLib(); return await lib.hasModelInCache(tutorModelId); } catch (e) { return false; }
}

/** 모델을 내려받거나(처음) 저장소에서 꺼내 메모리에 올린다. 진행 상황은 progress(0~1, 문구)로 */
function ensureTutorEngine(progress) {
  tutorProgressCb = progress || null;
  if (tutorEngine) return Promise.resolve(tutorEngine);
  if (tutorEngineLoading) return tutorEngineLoading;
  tutorEngineLoading = (async () => {
    const lib = await loadTutorLib();
    tutorWorker = new Worker(TUTOR_WORKER_URL, { type: "module" });
    const engine = await lib.CreateWebWorkerMLCEngine(tutorWorker, tutorModelId, {
      initProgressCallback: r => tutorProgressCb && tutorProgressCb(r.progress || 0, r.text || "")
    });
    tutorEngine = engine;
    try { localStorage.setItem("tutorModelReady", "true"); } catch (e) {}
    // 불러오는 사이에 다른 화면으로 갔다면 잠시 뒤 메모리에서 내린다
    const page = document.getElementById("page-tutor");
    if (page && page.classList.contains("hidden")) leaveTutorPage();
    return engine;
  })();
  tutorEngineLoading.catch(() => {}).finally(() => { tutorEngineLoading = null; });
  return tutorEngineLoading.catch(e => { unloadTutorEngine(); throw e; });
}
function unloadTutorEngine() {
  const eng = tutorEngine, w = tutorWorker;
  tutorEngine = null; tutorWorker = null;
  if (eng) { try { eng.unload(); } catch (e) {} }
  if (w) setTimeout(() => { try { w.terminate(); } catch (e) {} }, 300);
}

// ---------- 화면 ----------
const tutorEl = id => document.getElementById(id);
function setTutorStatus(text, mode) {
  const st = tutorEl("tutor-status"); if (st) st.textContent = text;
  const av = tutorEl("tutor-avatar"); if (av) av.dataset.mode = mode || "";
  const mic = tutorEl("tutor-mic-btn");
  if (mic) {
    mic.classList.toggle("listening", mode === "listening");
    mic.disabled = mode === "thinking" || mode === "loading";
    const label = mic.querySelector("span");
    if (label) label.textContent = mode === "listening" ? "듣는 중… (누르면 끝)" : "누르고 말하기";
  }
}
function showTutorSection(which) {
  tutorEl("tutor-setup").classList.toggle("hidden", which !== "setup");
  tutorEl("tutor-chat-area").classList.toggle("hidden", which !== "chat");
}
function setTutorProgress(p, text) {
  tutorEl("tutor-progress").classList.remove("hidden");
  tutorEl("tutor-progress-bar").style.width = Math.round(p * 100) + "%";
  tutorEl("tutor-progress-text").textContent = text ? `${Math.round(p * 100)}% · ${text}` : `${Math.round(p * 100)}%`;
}

/** 튜터 페이지에 들어올 때 (core.js goTo) */
async function renderTutorPage() {
  clearTimeout(tutorUnloadTimer);
  TutorAvatar.mount();
  fillTutorScenarios();
  if (tutorEngine) { showTutorSection("chat"); if (tutorMessages.length === 0) startTutorSession(); else setTutorStatus("마이크를 누르고 영어로 말해 보세요", ""); return; }
  showTutorSection("setup");
  tutorEl("tutor-download-btn").disabled = true;
  setTutorStatus("확인 중…", "loading");
  const sup = await tutorCheckSupport();
  const warn = tutorEl("tutor-unsupported");
  tutorEl("tutor-download-btn").classList.toggle("hidden", !sup.ok);
  if (!sup.ok) { warn.textContent = sup.reason; warn.classList.remove("hidden"); setTutorStatus("이 기기에서는 쓸 수 없어요", ""); return; }
  warn.classList.add("hidden");
  const cached = await tutorModelCached();
  if (cached) { tutorEl("tutor-download-btn").textContent = "AI 튜터 시작"; await startTutorEngine(false); return; }
  tutorEl("tutor-download-btn").disabled = false;
  tutorEl("tutor-download-btn").textContent = `AI 튜터 받기 (${TUTOR_SIZE_LABEL})`;
  setTutorStatus("AI 튜터를 받으면 바로 대화할 수 있어요", "");
}

/** 다운로드 버튼 / 저장된 모델 열기 */
async function startTutorEngine(isDownload) {
  const btn = tutorEl("tutor-download-btn");
  btn.disabled = true;
  if (isDownload && !confirm(`AI 튜터 모델(${TUTOR_SIZE_LABEL})을 내려받습니다.\n와이파이에서 받는 것을 권장해요. 계속할까요?`)) { btn.disabled = false; return; }
  setTutorStatus(isDownload ? "AI 튜터 받는 중…" : "튜터 깨우는 중…", "loading");
  setTutorProgress(0, "");
  try {
    await ensureTutorEngine((p, text) => setTutorProgress(p, tutorProgressText(text)));
    tutorEl("tutor-progress").classList.add("hidden");
    if (!document.getElementById("page-tutor").classList.contains("hidden")) {
      showTutorSection("chat");
      startTutorSession();
    }
  } catch (e) {
    console.warn("AI 튜터를 열지 못함", e);
    tutorEl("tutor-progress").classList.add("hidden");
    btn.disabled = false;
    btn.textContent = "다시 시도";
    setTutorStatus("AI 튜터를 열지 못했어요", "");
    alert("AI 튜터를 열지 못했어요.\n메모리가 부족하거나 이 기기가 지원하지 않을 수 있어요.\n(" + (e && e.message || e) + ")");
  }
}
function downloadTutor() { startTutorEngine(true); }
// WebLLM 진행 문구(영어)를 짧은 한국어로: "Fetching param cache[3/22]: 120MB fetched..." / "Loading model from cache..."
function tutorProgressText(text) {
  if (/Loading model from cache/i.test(text)) return "저장된 모델 여는 중";
  const m = text.match(/([\d.]+)\s*MB fetched/i);
  if (/Fetching/i.test(text)) return m ? `내려받는 중 ${Math.round(parseFloat(m[1]))}MB` : "내려받는 중";
  if (/Finish/i.test(text)) return "준비 완료";
  return "AI 준비 중";
}

async function deleteTutorModel() {
  if (!confirm("내려받은 AI 튜터 모델을 기기에서 지울까요?\n다시 쓰려면 새로 받아야 해요.")) return;
  stopTutorActivity();
  unloadTutorEngine();
  try { const lib = await loadTutorLib(); await lib.deleteModelAllInfoInCache(tutorModelId); } catch (e) { console.warn(e); }
  try { localStorage.removeItem("tutorModelReady"); } catch (e) {}
  tutorMessages = []; tutorLearnerLines = [];
  tutorEl("tutor-log").innerHTML = "";
  renderTutorPage();
}

/** 다른 화면으로 갈 때: 말하기·듣기·생성을 멈추고, 잠시 뒤 모델을 메모리에서 내린다 */
function stopTutorActivity() {
  tutorSessionToken++;
  tutorSpeechToken++;
  tutorSpeaking = false;
  if (tutorRec) { try { tutorRec.abort(); } catch (e) {} tutorRec = null; }
  if (tutorEngine) { try { tutorEngine.interruptGenerate(); } catch (e) {} }
  tutorBusy = false;
}
function leaveTutorPage() {
  stopTutorActivity();
  clearTimeout(tutorUnloadTimer);
  if (tutorEngine) tutorUnloadTimer = setTimeout(() => { unloadTutorEngine(); tutorMessages = []; }, TUTOR_UNLOAD_MS);
}

// ---------- 상황 ----------
const TUTOR_FREE = { id: "free", title: "자유 대화 (Free Talk)", category: "자유" };
const TUTOR_FREE_HINTS = [
  { en: "I had a pretty busy day today.", kr: "오늘 꽤 바빴어요." },
  { en: "I'm learning English these days.", kr: "요즘 영어를 배우고 있어요." },
  { en: "What do you like to do on weekends?", kr: "주말에 뭐 하는 거 좋아해요?" },
  { en: "I'm thinking about traveling next month.", kr: "다음 달에 여행 갈까 생각 중이에요." },
  { en: "Can you say that again, please?", kr: "다시 한번 말해 줄래요?" }
];
function tutorScenario() {
  if (tutorScenarioId === "free" || typeof conversationData === "undefined") return TUTOR_FREE;
  return conversationData.find(c => c.id === tutorScenarioId) || TUTOR_FREE;
}
function fillTutorScenarios() {
  const sel = tutorEl("tutor-scenario");
  if (!sel || sel.options.length) return;
  const free = document.createElement("option"); free.value = "free"; free.textContent = "💬 " + TUTOR_FREE.title; sel.appendChild(free);
  if (typeof conversationData !== "undefined") {
    categoriesOf(conversationData).forEach(cat => {
      const g = document.createElement("optgroup"); g.label = cat;
      conversationData.filter(c => categoryOf(c) === cat).forEach(c => { const o = document.createElement("option"); o.value = c.id; o.textContent = c.title; g.appendChild(o); });
      sel.appendChild(g);
    });
  }
  sel.value = tutorScenarioId;
}
function changeTutorScenario() { tutorScenarioId = tutorEl("tutor-scenario").value; startTutorSession(); }

function tutorSystemPrompt(sc) {
  const rules = [
    "Rules:",
    "- Reply in 1 or 2 short, simple sentences (under 20 words in total).",
    "- Use easy, everyday spoken English. Never use Korean.",
    "- Keep the conversation going with one simple question.",
    "- If the learner's last message has a clear grammar mistake or sounds unnatural, add one final line: Tip: <the natural way to say it>",
    "- Do not explain grammar. Do not write anything else."
  ].join("\n");
  if (sc.id === "free") {
    return "You are Emma, a friendly English conversation partner for a Korean adult who is a beginner. Chat casually about daily life, food, work, hobbies, travel and plans.\n" + rules;
  }
  const en = (sc.title.match(/\(([^)]+)\)/) || [])[1] || sc.title;
  const example = sc.lines.map(l => `${l.speaker}: ${l.en}`).join("\n");
  return `You are Emma, a friendly English conversation partner for a Korean adult who is a beginner. You are doing a role-play: ${en}.\n` +
    `The learner plays A and you play B. Here is how this situation usually goes (use it as a guide, but answer what the learner actually says):\n${example}\n` +
    "Stay in your role as B.\n" + rules;
}

// ---------- 대화 ----------
async function startTutorSession() {
  if (!tutorEngine) return;
  stopTutorActivity();
  const token = ++tutorSessionToken;
  const sc = tutorScenario();
  tutorMessages = [{ role: "system", content: tutorSystemPrompt(sc) }];
  tutorLearnerLines = [];
  tutorHintShown = false;
  tutorEl("tutor-log").innerHTML = "";
  tutorEl("tutor-feedback").classList.add("hidden");
  renderTutorHint();
  const opener = sc.id === "free"
    ? "(Start the conversation now: greet the learner in one short sentence and ask how their day is going.)"
    : "(Start the role-play now: say B's first short line, like greeting the learner in your role.)";
  tutorMessages.push({ role: "user", content: opener });
  await tutorReply(token);
}

/** 학습자 문장 보내기 (음성 인식 결과 / 입력창) */
async function sendTutorText(text) {
  text = (text || "").trim();
  if (!text || !tutorEngine || tutorBusy) return false;
  stopTutorSpeech();
  const token = tutorSessionToken;
  tutorLearnerLines.push(text);
  addTutorBubble("me", text);
  tutorMessages.push({ role: "user", content: text });
  tutorHintShown = false; renderTutorHint();
  await tutorReply(token);
  return true;
}
function sendTutorTyped() {
  const inp = tutorEl("tutor-input");
  const t = inp.value;
  if (!t.trim() || tutorBusy || !tutorEngine) return;   // 튜터가 답을 만드는 중이면 입력은 그대로 둔다
  inp.value = "";
  sendTutorText(t);
}

/** 모델 답 만들기 → 말풍선 → 소리 내어 읽기 */
async function tutorReply(token) {
  tutorBusy = true;
  setTutorStatus("생각 중…", "thinking");
  const bubble = addTutorBubble("tutor", "…");
  let raw = "";
  try {
    const chunks = await tutorEngine.chat.completions.create({
      messages: tutorContext(), stream: true, temperature: 0.6, top_p: 0.9, max_tokens: 90
    });
    for await (const c of chunks) {
      if (token !== tutorSessionToken) { try { tutorEngine.interruptGenerate(); } catch (e) {} break; }
      raw += (c.choices[0] && c.choices[0].delta && c.choices[0].delta.content) || "";
      bubble.querySelector(".tutor-text").textContent = splitTutorReply(raw).say || "…";
    }
  } catch (e) {
    console.warn("튜터 답 생성 실패", e);
    if (token === tutorSessionToken) { bubble.querySelector(".tutor-text").textContent = "(답을 만들지 못했어요. 다시 말해 주세요.)"; setTutorStatus("다시 시도해 주세요", ""); }
    tutorBusy = false;
    return;
  }
  if (token !== tutorSessionToken) { tutorBusy = false; return; }
  const { say, tip } = splitTutorReply(raw);
  const text = say || "Sorry, could you say that again?";
  bubble.querySelector(".tutor-text").textContent = text;
  bubble.onclick = () => speakTutor(text, tutorSessionToken);
  if (tip) addTutorTip(bubble, tip);
  // 모델에게는 교정(Tip) 없이 대화 내용만 남겨 대화 흐름이 흔들리지 않게
  tutorMessages.push({ role: "assistant", content: text });
  tutorBusy = false;
  await speakTutor(text, token);
}

/** 오래된 대화는 덜어서 보낸다 (작은 모델의 기억 범위 안에서) */
function tutorContext() {
  const sys = tutorMessages[0], rest = tutorMessages.slice(1);
  if (rest.length <= 14) return tutorMessages;
  let tail = rest.slice(-10);
  if (tail[0].role !== "user") tail = tail.slice(1);
  return [sys, rest[0], rest[1], ...tail];
}

/** 모델 출력 정리: 말할 문장과 교정 팁을 나눈다 */
function splitTutorReply(raw) {
  let s = (raw || "").replace(/\r/g, "");
  let tip = "";
  const m = s.match(/(?:^|\n)\s*\**\s*Tip\s*\**\s*:\s*(.+)/i);
  if (m) { tip = m[1].trim(); s = s.slice(0, m.index); }
  s = s.split("\n").map(l => l.replace(/^\s*(B|Emma|Tutor)\s*:\s*/i, "").trim()).filter(Boolean).join(" ");
  s = s.replace(/^["“]|["”]$/g, "").replace(/\s*\([^)]*\)\s*$/, "").trim();
  tip = tip.replace(/^["“]|["”]$/g, "").trim();
  return { say: s, tip };
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
function addTutorTip(bubble, tip) {
  const t = document.createElement("div");
  t.className = "tutor-tip";
  t.innerHTML = `💡 이렇게 말하면 더 자연스러워요<br><b></b>`;
  t.querySelector("b").textContent = tip;
  bubble.after(t);
  const log = tutorEl("tutor-log"); log.scrollTop = log.scrollHeight;
}

// ---------- 말하기 (튜터 목소리 + 입모양) ----------
async function speakTutor(text, token) {
  if (token !== tutorSessionToken) return;
  const my = ++tutorSpeechToken;
  tutorSpeaking = true;
  setTutorStatus("말하는 중…", "speaking");
  try { await speakWithPromise(text, "B"); } catch (e) {}
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

// ---------- 듣기 (음성 인식) ----------
function toggleTutorMic() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { alert("이 브라우저는 음성 인식을 지원하지 않아요. 아래 입력창에 영어로 적어 주세요."); tutorEl("tutor-input").focus(); return; }
  if (tutorRec) { try { tutorRec.stop(); } catch (e) {} return; }
  if (tutorBusy) return;
  stopTutorSpeech();
  const rec = new SR();
  rec.lang = "en-US"; rec.interimResults = true; rec.maxAlternatives = 1; rec.continuous = false;
  let finalText = "";
  const inp = tutorEl("tutor-input");
  rec.onresult = e => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalText += e.results[i][0].transcript; else interim += e.results[i][0].transcript;
    }
    inp.value = (finalText + interim).trim();
  };
  rec.onerror = e => {
    if (e.error === "not-allowed" || e.error === "service-not-allowed") alert("마이크 사용을 허용해 주세요. (브라우저 주소창의 권한 설정)");
    else if (e.error === "network") alert("음성 인식에 인터넷 연결이 필요해요. 입력창에 적어서 보내도 돼요.");
  };
  rec.onend = () => {
    tutorRec = null;
    setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
    const said = (finalText || inp.value).trim();
    if (said) { inp.value = ""; sendTutorText(said); }
  };
  tutorRec = rec;
  try { rec.start(); setTutorStatus("듣고 있어요… 말을 마치면 자동으로 보내요", "listening"); }
  catch (e) { tutorRec = null; }
}

// ---------- 힌트 · 피드백 ----------
function tutorHintFor() {
  const sc = tutorScenario();
  if (sc.id === "free") return TUTOR_FREE_HINTS[tutorLearnerLines.length % TUTOR_FREE_HINTS.length];
  const mine = sc.lines.filter(l => l.speaker === "A");
  return mine[Math.min(tutorLearnerLines.length, mine.length - 1)];
}
function toggleTutorHint() { tutorHintShown = !tutorHintShown; renderTutorHint(); }
function renderTutorHint() {
  const box = tutorEl("tutor-hint");
  if (!box) return;
  const h = tutorHintShown && tutorHintFor();
  box.classList.toggle("hidden", !h);
  if (!h) return;
  box.innerHTML = `<div class="tutor-hint-label">이렇게 말해 볼까요?</div><div class="tutor-hint-en"></div><div class="tutor-hint-kr"></div>`;
  box.querySelector(".tutor-hint-en").textContent = h.en;
  box.querySelector(".tutor-hint-kr").textContent = h.kr;
}

async function tutorFeedback() {
  const box = tutorEl("tutor-feedback");
  if (!tutorEngine || tutorBusy) return;
  if (tutorLearnerLines.length === 0) { alert("먼저 튜터와 몇 마디 나눠 보세요."); return; }
  stopTutorSpeech();
  tutorBusy = true;
  setTutorStatus("오늘 대화를 살펴보는 중…", "thinking");
  box.classList.remove("hidden");
  box.innerHTML = `<div class="tutor-feedback-title">📝 오늘 대화 피드백</div><div class="tutor-feedback-body">살펴보는 중…</div>`;
  const lines = tutorLearnerLines.slice(-8).map((l, i) => `${i + 1}. ${l}`).join("\n");
  try {
    const r = await tutorEngine.chat.completions.create({
      messages: [
        { role: "system", content: "You are a kind English teacher for Korean beginners. Be brief and accurate." },
        { role: "user", content: `These are sentences a beginner said in an English conversation:\n${lines}\n\nPick up to 3 sentences that have a mistake or sound unnatural. For each, write exactly one line in this format:\n<original> -> <better sentence>\nIf every sentence is fine, write only: Great job!` }
      ],
      temperature: 0.2, max_tokens: 160
    });
    const out = (r.choices[0].message.content || "").trim();
    const items = out.split("\n").map(l => l.trim()).filter(l => /->|→/.test(l)).slice(0, 3);
    const body = box.querySelector(".tutor-feedback-body");
    if (items.length === 0) body.textContent = "아주 좋아요! 눈에 띄는 실수가 없어요. 👏";
    else {
      body.innerHTML = "";
      items.forEach(l => {
        const [a, b] = l.replace(/^\d+[.)]\s*/, "").split(/\s*(?:->|→)\s*/);
        const row = document.createElement("div"); row.className = "tutor-fb-row";
        row.innerHTML = `<span class="from"></span><span class="arrow">→</span><span class="to"></span>`;
        row.querySelector(".from").textContent = (a || "").replace(/^["“]|["”]$/g, "");
        row.querySelector(".to").textContent = (b || "").replace(/^["“]|["”]$/g, "");
        body.appendChild(row);
      });
    }
    const note = document.createElement("div"); note.className = "tutor-fb-note"; note.textContent = "작은 AI가 만든 참고용 피드백이에요.";
    box.appendChild(note);
  } catch (e) {
    box.querySelector(".tutor-feedback-body").textContent = "피드백을 만들지 못했어요.";
  }
  tutorBusy = false;
  setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
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
