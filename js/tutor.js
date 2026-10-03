// ==========================================
// AI 튜터: 기기 안에서 돌아가는 작은 언어 모델(WebLLM)과 실시간 말하기 연습
// - 모델은 한 번 내려받으면 브라우저 저장소에 남아, 토큰·서버 비용 없이 동작
// - 듣기: 브라우저 음성 인식(없으면 키보드 입력) / 말하기: 앱 음성 + 소리에 맞춘 입모양
// ==========================================

const WEBLLM_URL = "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.85/+esm";
// shader-f16을 지원하는 기기는 f16(가볍고 빠름), 아니면 f32 모델
// 후보 비교(같은 프롬프트·학습자 문장)에서 역할극 대화와 교정이 가장 좋았던 모델
const TUTOR_MODELS = { f16: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC", f32: "Qwen2.5-1.5B-Instruct-q4f32_1-MLC" };
const TUTOR_SIZE_LABEL = "약 1GB";
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
let tutorCorrections = [];    // 대화 중 교정한 문장 [{ said, better }] (피드백 정리용)
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
    // 작업자가 뜨지 못하거나(네트워크 등) 진행이 한참 멈추면 무한 대기 대신 오류로 끝낸다
    let lastProgress = Date.now();
    const failed = new Promise((_, reject) => {
      tutorWorker.addEventListener("error", e => reject(new Error("AI 엔진을 불러오지 못했어요 (" + ((e && e.message) || "네트워크") + ")")));
      const watch = setInterval(() => {
        if (tutorEngine || !tutorWorker) return clearInterval(watch);
        if (Date.now() - lastProgress > 90000) { clearInterval(watch); reject(new Error("응답이 없어 중단했어요. 인터넷 연결을 확인해 주세요.")); }
      }, 5000);
    });
    const engine = await Promise.race([lib.CreateWebWorkerMLCEngine(tutorWorker, tutorModelId, {
      initProgressCallback: r => { lastProgress = Date.now(); tutorProgressCb && tutorProgressCb(r.progress || 0, r.text || ""); }
    }), failed]);
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

// ---------- 프롬프트·후처리 (평가 스크립트도 같은 함수를 쓴다) ----------
// 답하기와 교정을 나눈다: 작은 모델은 한 번에 한 가지 일을 시킬 때 훨씬 정확하다
const TUTOR_STYLE = [
  "How to talk:",
  "- Say 1 or 2 short sentences, 15 words or fewer in total.",
  "- Use only very common everyday words and simple grammar for a beginner. No idioms, no slang.",
  "- End with one simple question to keep the conversation going.",
  "- Never repeat something you already said.",
  "- If the learner's English is broken, guess what they mean and answer kindly. Do not correct them.",
  "- Stay in your role. Never say you are an AI. Never use Korean, lists, emojis or notes in brackets."
].join("\n");
// 역할극 장면: 튜터가 맡을 역할 (상황마다 한 줄)
const TUTOR_SCENES = {
  "conv-001": "You are a friendly coworker meeting the learner for the first time at the office.",
  "conv-002": "You are an old friend running into the learner after a long time.",
  "conv-003": "You are a friend chatting with the learner about weekend plans.",
  "conv-004": "You are a coworker making small talk with the learner about the weather.",
  "conv-035": "You are a friend. The learner is leaving your place at the end of the evening.",
  "conv-045": "You are a friend. The learner wants to ask you for a favor.",
  "conv-055": "You are a friend. The learner is inviting you to a weekend barbecue.",
  "conv-061": "You are a friend. The learner is giving you a compliment on your clothes.",
  "conv-080": "You are a guest at a party meeting the learner for the first time.",
  "conv-006": "You are a coworker deciding with the learner where to go for lunch.",
  "conv-007": "You are a barista at a coffee shop. The learner is a customer ordering a drink.",
  "conv-008": "You are a local friend. The learner is asking you for a good restaurant nearby.",
  "conv-052": "You are a server at a restaurant. The learner is a customer ordering food.",
  "conv-060": "You are a restaurant host on the phone. The learner wants to book a table.",
  "conv-009": "You are a server at a restaurant. The learner wants to pay the bill.",
  "conv-010": "You are the learner's roommate deciding what food to order for delivery.",
  "conv-044": "You are a server at a restaurant. The learner's food is taking too long.",
  "conv-046": "You are a friend who has not tried much Korean food. The learner is telling you about it.",
  "conv-079": "You are a local friend. The learner is asking you how tipping works in the US.",
  "conv-021": "You are a clothing store clerk. The learner is looking for a different size.",
  "conv-022": "You are a store clerk at the returns counter. The learner wants to return an item.",
  "conv-024": "You are a grocery store worker. The learner is looking for items in the store.",
  "conv-025": "You are a store clerk. The learner is looking for a gift.",
  "conv-037": "You are a phone store employee. The learner wants a new phone or plan.",
  "conv-065": "You are a bank teller. The learner wants to open a bank account.",
  "conv-066": "You are a hairstylist. The learner is a customer explaining the haircut they want.",
  "conv-071": "You are a post office clerk. The learner wants to send a package overseas.",
  "conv-011": "You are a local person on the street. The learner is asking you for directions.",
  "conv-015": "You are a bus driver or a person at the bus stop. The learner is asking which bus to take.",
  "conv-056": "You are a taxi driver. The learner is your passenger.",
  "conv-068": "You are a ticket agent at a train station. The learner wants to buy a ticket.",
  "conv-070": "You are a car rental agent. The learner is picking up a rental car.",
  "conv-062": "You are a kind stranger at a station. The learner needs help with a ticket machine.",
  "conv-051": "You are a local person at a train station. The learner is asking how to get downtown.",
  "conv-013": "You are a tourist nearby. The learner is asking you to take a photo.",
  "conv-064": "You are an airline check-in agent at the airport. The learner is checking in for a flight.",
  "conv-058": "You are an immigration officer at the airport. The learner is a traveler arriving in the US.",
  "conv-014": "You are an airline baggage service agent. The learner's bag did not arrive.",
  "conv-069": "You are an airline gate agent. The learner's flight has a problem.",
  "conv-067": "You are a currency exchange clerk. The learner wants to exchange money.",
  "conv-012": "You are a hotel front desk clerk. The learner is checking in.",
  "conv-059": "You are a hotel front desk clerk on the phone. The learner has a problem in their room.",
  "conv-074": "You are a hotel front desk clerk. The learner is checking out.",
  "conv-016": "You are the learner's coworker in a work meeting about a project.",
  "conv-017": "You are a coworker. You and the learner are working late at the office.",
  "conv-018": "You are the learner's manager. The learner wants to ask for a day off.",
  "conv-053": "You are a receptionist answering the phone at a company. The learner is calling for someone.",
  "conv-054": "You are the learner's coworker. The learner arrives late to a meeting.",
  "conv-063": "You are a job interviewer. The learner is the job candidate.",
  "conv-073": "You are a coworker. The learner wants to change the time of a meeting.",
  "conv-078": "You are a coworker on a video call with the learner.",
  "conv-026": "You are the learner's manager. The learner is not feeling well at work.",
  "conv-027": "You are a pharmacist. The learner needs medicine.",
  "conv-057": "You are a receptionist at a doctor's office. The learner wants to make an appointment.",
  "conv-075": "You are a 911 operator. The learner is calling about an emergency.",
  "conv-036": "You are a cafe worker. The learner is asking about the Wi-Fi.",
  "conv-077": "You are a customer support agent on the phone. The learner has a problem with an account.",
  "conv-041": "You are a cafe worker. The learner lost a wallet here earlier.",
  "conv-043": "You are the learner's upstairs neighbor. The learner is talking to you about noise.",
  "conv-072": "You are the building manager. The learner is reporting a problem in the apartment.",
  "conv-076": "You are a close friend. The learner has good news to share.",
  "conv-029": "You are a close friend. The learner is stressed and wants to talk.",
  "conv-031": "You are a close friend. The learner is upset about something.",
  "conv-032": "You are a close friend. The learner had a bad day and needs comfort.",
  "conv-034": "You are a close friend. The learner wants your advice on a decision.",
  "conv-005": "You are a friend chatting with the learner about hobbies.",
  "conv-048": "You are a friend chatting with the learner about movies.",
  "conv-050": "You are a dog owner in the park. The learner wants to pet your dog."
};
function tutorSystemPrompt(sc) {
  const who = "You are Emma, a warm and patient English conversation partner for a Korean adult beginner.";
  if (sc.id === "free") return `${who} Chat casually about everyday topics like the learner's day, food, work, hobbies, weekend plans and travel.\n` +
    `You already started the chat by saying: "${TUTOR_FREE_GREETING}" Do not greet or introduce yourself again.\n${TUTOR_STYLE}`;
  // 예시 대화를 주면 작은 모델이 그 줄을 그대로 베껴 말한다 → 역할과 장면만 짧게 알려 주고 자유롭게 답하게
  const scene = TUTOR_SCENES[sc.id] || `You are the other person in this situation: ${(sc.title.match(/\(([^)]+)\)/) || [])[1] || sc.title}.`;
  return `${who} Role-play: ${scene} The learner speaks first. Stay in your role and answer what the learner actually says.\n${TUTOR_STYLE}`;
}
// 시작: 자유 대화는 튜터가 정해진 인사로, 역할극은 실제 상황처럼 학습자(A)가 먼저 말을 건다
const TUTOR_FREE_GREETING = "Hi, I'm Emma! How's your day going?";
function tutorStartMessages(sc) {
  // 인사는 시스템 안내에 적어 둔다 (가짜 대화를 넣으면 작은 모델이 인사를 되풀이함)
  return [{ role: "system", content: tutorSystemPrompt(sc) }];
}
const TUTOR_REPLY_OPTS = { temperature: 0.6, top_p: 0.9, max_tokens: 60, presence_penalty: 0.4 };

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
  for (const sen of sentences) {
    const next = (out + " " + sen.trim()).trim();
    if (out && (next.split(" ").length > 24 || full >= 2)) break;
    out = next;
    if (sen.trim().split(" ").length > 2) full++;   // "Hello!", "Sure." 같은 짧은 말은 문장 수에 넣지 않는다
  }
  return out;
}

// 교정은 두 단계: ① 맞는 문장인지 Yes/No로만 판정 → ② 틀렸을 때만 고친 문장을 만든다
// (한 번에 고치라고 하면 맞는 문장까지 바꾸는 일이 잦아서. 평가: 틀린 문장 14개 중 12개 교정, 맞는 문장 14개 중 1개만 손댐)
const TUTOR_CHECK_EXAMPLES = [
  ["I goed to school yesterday.", "No"], ["Can I get a coffee, please?", "Yes"], ["I want sandwich.", "No"], ["I'm fine. And you?", "Yes"],
  ["Where is bus stop?", "No"], ["Can I pay in cash?", "Yes"], ["Please drive more careful.", "No"], ["Do you have any plans this weekend?", "Yes"]
];
function tutorGrammarCheckMessages(text) {
  const msgs = [{ role: "system", content: "Is the English sentence grammatically correct? Missing a/an/the, wrong tense, missing plural -s or wrong word forms make it incorrect. Answer only Yes or No." }];
  TUTOR_CHECK_EXAMPLES.forEach(([q, a]) => msgs.push({ role: "user", content: q }, { role: "assistant", content: a }));
  msgs.push({ role: "user", content: text });
  return msgs;
}
const TUTOR_CHECK_OPTS = { temperature: 0, max_tokens: 3 };
const tutorCheckSaysWrong = out => /^\s*no\b/i.test(out || "");

const TUTOR_CORRECTION_EXAMPLES = [
  ["I goed to school yesterday.", "I went to school yesterday."],
  ["Can I get a coffee, please?", "OK"],
  ["I want sandwich.", "I want a sandwich."],
  ["Thank you so much!", "OK"],
  ["Where is bus stop?", "Where is the bus stop?"],
  ["I need two ticket.", "I need two tickets."],
  ["I'm here for a business trip.", "OK"],
  ["Please drive more careful.", "Please drive more carefully."],
  ["I visit Seoul last year.", "I visited Seoul last year."],
  ["Do you have any plans this weekend?", "OK"]
];
function tutorCorrectionMessages(text) {
  const msgs = [{ role: "system", content: "You correct sentences spoken by Korean beginners learning English. Fix grammar mistakes, especially: missing a/an/the, wrong verb tense, missing plural -s, and wrong word forms (bored/boring, slow/slowly). Keep the meaning and the other words the same. Ignore punctuation and capital letters. If the sentence is already correct, answer exactly: OK" }];
  TUTOR_CORRECTION_EXAMPLES.forEach(([q, a]) => msgs.push({ role: "user", content: q }, { role: "assistant", content: a }));
  msgs.push({ role: "user", content: text });
  return msgs;
}
const TUTOR_CORRECTION_OPTS = { temperature: 0, max_tokens: 40 };
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

// 모델 호출은 한 번에 하나씩 (답·교정·해석·피드백이 겹치지 않게 줄 세운다)
let tutorQueue = Promise.resolve();
function tutorEngineCall(fn) {
  const run = tutorQueue.then(fn, fn);
  tutorQueue = run.catch(() => {});
  return run;
}

// ---------- 대화 ----------
async function startTutorSession() {
  if (!tutorEngine) return;
  stopTutorActivity();
  const token = ++tutorSessionToken;
  const sc = tutorScenario();
  tutorMessages = tutorStartMessages(sc);
  tutorLearnerLines = [];
  tutorCorrections = [];
  tutorEl("tutor-log").innerHTML = "";
  tutorEl("tutor-feedback").classList.add("hidden");
  if (sc.id === "free") {
    // 자유 대화: 튜터가 정해진 인사로 바로 시작 (모델 계산 없이)
    tutorHintShown = false; renderTutorHint();
    const b = addTutorBubble("tutor", TUTOR_FREE_GREETING);
    b.onclick = () => speakTutor(TUTOR_FREE_GREETING, tutorSessionToken);
    addSlowButton(b, TUTOR_FREE_GREETING);
    await speakTutor(TUTOR_FREE_GREETING, token);
  } else {
    // 역할극: 실제 상황처럼 내가 먼저 말을 건다. 첫 마디는 힌트로 보여 준다
    tutorHintShown = true; renderTutorHint();
    setTutorStatus("먼저 말을 걸어 보세요 (힌트 참고)", "");
  }
}

/** 학습자 문장 보내기 (음성 인식 결과 / 입력창) */
async function sendTutorText(text) {
  text = (text || "").trim();
  if (!text || !tutorEngine || tutorBusy) return false;
  stopTutorSpeech();
  const token = tutorSessionToken;
  tutorLearnerLines.push(text);
  const myBubble = addTutorBubble("me", text);
  tutorMessages.push({ role: "user", content: text });
  tutorHintShown = false; renderTutorHint();
  await tutorReply(token, { text, bubble: myBubble });
  return true;
}
function sendTutorTyped() {
  const inp = tutorEl("tutor-input");
  const t = inp.value;
  if (!t.trim() || tutorBusy || !tutorEngine) return;   // 튜터가 답을 만드는 중이면 입력은 그대로 둔다
  inp.value = "";
  sendTutorText(t);
}

/** 답 만들기 → 말풍선 → 소리 내어 읽기. 읽는 동안 학습자 문장 교정을 만들어 아래에 붙인다 */
async function tutorReply(token, learner) {
  tutorBusy = true;
  setTutorStatus("생각 중…", "thinking");
  const bubble = addTutorBubble("tutor", "…");
  let raw = "";
  try {
    await tutorEngineCall(async () => {
      const chunks = await tutorEngine.chat.completions.create({ messages: tutorContext(), stream: true, ...TUTOR_REPLY_OPTS });
      for await (const c of chunks) {
        if (token !== tutorSessionToken) { try { tutorEngine.interruptGenerate(); } catch (e) {} break; }
        raw += (c.choices[0] && c.choices[0].delta && c.choices[0].delta.content) || "";
        bubble.querySelector(".tutor-text").textContent = cleanTutorSay(raw) || "…";
      }
    });
  } catch (e) {
    console.warn("튜터 답 생성 실패", e);
    if (token === tutorSessionToken) { bubble.querySelector(".tutor-text").textContent = "(답을 만들지 못했어요. 다시 말해 주세요.)"; setTutorStatus("다시 시도해 주세요", ""); }
    tutorBusy = false;
    return;
  }
  if (token !== tutorSessionToken) { tutorBusy = false; return; }
  const text = cleanTutorSay(raw) || "Sorry, could you say that again?";
  bubble.querySelector(".tutor-text").textContent = text;
  bubble.onclick = () => speakTutor(text, tutorSessionToken);
  addSlowButton(bubble, text);
  tutorMessages.push({ role: "assistant", content: text });
  const speaking = speakTutor(text, token);
  // 튜터가 말하는 동안 교정 (말풍선은 학습자 문장 아래)
  if (learner && tutorNeedsCheck(learner.text)) {
    try {
      const fix = await tutorEngineCall(async () => {
        const v = await tutorEngine.chat.completions.create({ messages: tutorGrammarCheckMessages(learner.text), ...TUTOR_CHECK_OPTS });
        if (!tutorCheckSaysWrong(v.choices[0].message.content)) return "";
        const r = await tutorEngine.chat.completions.create({ messages: tutorCorrectionMessages(learner.text), ...TUTOR_CORRECTION_OPTS });
        return parseTutorCorrection(learner.text, r.choices[0].message.content);
      });
      if (fix && token === tutorSessionToken) { addTutorTip(learner.bubble, fix); tutorCorrections.push({ said: learner.text, better: fix }); }
    } catch (e) { console.warn("교정 실패", e); }
  }
  tutorBusy = false;
  if (!tutorSpeaking && token === tutorSessionToken) setTutorStatus("마이크를 누르고 영어로 말해 보세요", "");
  await speaking;
}

/** 오래된 대화는 덜어서 보낸다 (작은 모델의 기억 범위 안에서) */
function tutorContext() {
  const sys = tutorMessages[0], rest = tutorMessages.slice(1);
  if (rest.length <= 14) return tutorMessages;
  let tail = rest.slice(-10);
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
function speakTutorSlow(text) {
  stopTutorSpeech();
  // 말하기 속도 설정을 이 한 문장에만 낮춘다 (음성 요청은 호출 순간에 속도를 읽으므로 바로 되돌려도 된다)
  const keep = userRate;
  userRate = Math.max(0.5, Math.min(keep, 1) * 0.7);
  const p = speakTutor(text, tutorSessionToken);
  userRate = keep;
  return p;
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

/** 오늘 대화 피드백: 대화 중 문장마다 확인한 교정 결과를 모아 보여 준다
 *  (작은 모델에게 한 번에 여러 문장을 평가시키면 실수를 놓쳐서, 문장별 2단계 확인 결과를 그대로 쓴다) */
function tutorFeedback() {
  const box = tutorEl("tutor-feedback");
  if (tutorLearnerLines.length === 0) { alert("먼저 튜터와 몇 마디 나눠 보세요."); return; }
  box.classList.remove("hidden");
  box.innerHTML = `<div class="tutor-feedback-title">📝 오늘 대화 피드백</div><div class="tutor-feedback-body"></div>`;
  const body = box.querySelector(".tutor-feedback-body");
  const n = tutorLearnerLines.length, fixes = tutorCorrections.slice(-5);
  const summary = document.createElement("div");
  summary.className = "tutor-fb-summary";
  summary.textContent = fixes.length === 0
    ? `영어로 ${n}번 말했어요. 눈에 띄는 실수 없이 잘했어요! 👏`
    : `영어로 ${n}번 말했어요. 이렇게 고쳐 말하면 더 자연스러워요.`;
  body.appendChild(summary);
  fixes.forEach(({ said, better }) => {
    const row = document.createElement("div"); row.className = "tutor-fb-row";
    row.innerHTML = `<span class="from"></span><span class="arrow">→</span><span class="to"></span>`;
    row.querySelector(".from").textContent = said;
    row.querySelector(".to").textContent = better;
    row.onclick = () => speakTutor(better, tutorSessionToken);
    body.appendChild(row);
  });
  const note = document.createElement("div"); note.className = "tutor-fb-note";
  note.textContent = fixes.length ? "고친 문장을 누르면 들을 수 있어요. AI 교정은 참고용이에요." : "AI 교정은 참고용이에요.";
  box.appendChild(note);
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
