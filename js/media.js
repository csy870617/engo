// ==========================================
// 미디어(TTS, 뉴스) 및 공유/문의
// ==========================================

// 1. TTS Settings & Functions
let ttsVoices = [];
let userVoiceIndex = null;
let userRate = 1.0;
let userFontSize = 'medium';
let autoPlayEnabled = true;
let voiceA = null;
let voiceB = null;

// 앱 기본 목소리: 사용자가 별도로 고르지 않았을 때 사용할 목소리 (Google US English 우선)
const DEFAULT_VOICE_NAME = "Google US English";
let defaultVoice = null;

// 자연스러운 음성(Kokoro, js/neural-tts.js · js/kokoro-tts.js) 상태
const NEURAL_PREFIX = 'st:';     // 목소리 목록에서 자연스러운 음성을 구분하는 접두어 (예: 'st:af_heart')
let neuralVoice = null;          // 고른 자연스러운 음성 ('af_heart' 등), null이면 브라우저 음성 사용
let neuralReady = false;         // 음성 모델이 이 기기에 받아져 있는지
let neuralBroken = false;        // 모델을 열지 못한 기기 → 이번 실행 동안은 브라우저 음성으로 대체
let neuralDownloading = false;
let neuralGen = 0;               // 정지·이동할 때마다 증가 → 이전 생성 요청·재생을 무효화
let neuralSpeakToken = 0;        // 새 문장을 재생하면 이전 재생을 멈추기 위한 표식
const neuralClipCache = new Map(); // 만든 음성 재사용 (같은 문장 다시 듣기·미리 만들기)

// 아이폰·맥의 장난스러운 목소리(효과음 목소리)는 기본 목소리로 고르지 않는다
const NOVELTY_VOICE = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Deranged|Good News|Hysterical|Jester|Junior|Kathy|Organ|Pipe Organ|Princess|Ralph|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred)\b/i;
/** 브라우저 목소리 목록만 다시 읽는다 (목록은 늦게 도착하기도 해서 voiceschanged 때마다) */
function refreshVoices() {
  // speechSynthesis 미지원 브라우저(일부 인앱 웹뷰 등)에서 예외가 나면 초기화 전체가 중단되므로 가드
  ttsVoices = ("speechSynthesis" in window) ? window.speechSynthesis.getVoices() : [];
  const allEn = ttsVoices.filter(v => v.lang.includes("en"));
  const enVoices = allEn.filter(v => !NOVELTY_VOICE.test(v.name)).length ? allEn.filter(v => !NOVELTY_VOICE.test(v.name)) : allEn;
  const preferredVoices = enVoices.filter(v => v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Siri"));

  // 기본 목소리 결정: Google US English → 다른 Google 계열 en-US → Samantha(아이폰) → 임의 en-US → 첫 영어 목소리
  const isEnUS = (v) => v.lang.replace("_", "-").toLowerCase().startsWith("en-us");
  defaultVoice =
    enVoices.find(v => v.name === DEFAULT_VOICE_NAME) ||
    enVoices.find(v => v.name.includes("Google") && isEnUS(v)) ||
    enVoices.find(v => v.name.includes("Samantha")) ||
    enVoices.find(isEnUS) ||
    enVoices[0] || null;

  if (preferredVoices.length >= 2) {
    voiceA = preferredVoices[0];
    voiceB = preferredVoices[1];
  } else if (enVoices.length >= 2) {
    voiceA = enVoices[0];
    voiceB = enVoices[1];
  } else if (enVoices.length === 1) {
    voiceA = enVoices[0];
    voiceB = enVoices[0];
  }

  // 대화 화자 A는 기본 목소리(Google US English)로 맞추고, B는 되도록 다른 목소리로 구분
  if (defaultVoice) {
    voiceA = defaultVoice;
    if (!voiceB || voiceB === defaultVoice) {
      voiceB = preferredVoices.find(v => v !== defaultVoice) || enVoices.find(v => v !== defaultVoice) || defaultVoice;
    }
  }
  populateVoiceSelect();
}

/** 시작할 때 한 번: 목소리 목록 + 저장된 설정(속도·글자 크기·자동 재생·AI 음성) */
function loadVoices() {
  refreshVoices();
  let raw = null;
  try { raw = localStorage.getItem("ttsSettings"); } catch (e) {}   // 사이트 저장이 막힌 브라우저에서도 시작은 되게
  // 기본 목소리 바꾸기(af_heart → af_bella)는 예전 설정이 있던 사람에게만 한 번: 처음 쓰는 사람은 표시만 해 둔다
  let migrated = true; try { migrated = !!localStorage.getItem('neuralVoiceV5'); localStorage.setItem('neuralVoiceV5', '1'); } catch (e) {}
  if(raw) {
    try {
      const d = JSON.parse(raw);
      userVoiceIndex = (d.voiceIndex === null || d.voiceIndex === undefined || d.voiceIndex === "")
        ? null
        : parseInt(d.voiceIndex, 10);
      if (Number.isNaN(userVoiceIndex)) userVoiceIndex = null;
      userVoiceIndex = null; // 목록이 기본 음성 1개로 바뀌어, 예전에 고른 개별 브라우저 음성은 기본 음성으로 정리
      userRate = d.rate || 1.0;
      if (d.autoPlay !== undefined) autoPlayEnabled = d.autoPlay;
      if (d.fontSize) userFontSize = d.fontSize;
      // 예전 음성(F1~F5 · M1~M5)을 골랐었다면 새 음성의 같은 성별 기본 목소리로
      let nv = /^F\d$/.test(d.neuralVoice || '') ? 'af_bella' : /^M\d$/.test(d.neuralVoice || '') ? 'am_michael' : d.neuralVoice;
      // 기본 목소리를 '밝고 생기 있는'(af_bella)으로 바꿨다: 예전 기본(af_heart)이던 사람도 한 번 새 기본으로
      if (nv === 'af_heart' && !migrated) nv = 'af_bella';
      neuralVoice = neuralVoiceIds().includes(nv) ? nv : null;
      if (neuralVoice && neuralVoice !== d.neuralVoice) persistNeuralVoiceChoice();
    } catch (e) { console.warn("ttsSettings parse 실패", e); }
  }
  applyFontSizeToBody(userFontSize);
  populateVoiceSelect();
}

function neuralVoiceIds() {
  return (typeof NeuralTTS !== 'undefined') ? NeuralTTS.VOICES.map(v => v.id) : [];
}

// 설정의 목소리 목록: (받아 둔 경우) 자연스러운 음성 + 기본 목소리 + 브라우저 영어 목소리
function populateVoiceSelect(selectValue) {
  const sel = document.getElementById("tts-voice-select");
  if (!sel) return;
  const keep = selectValue !== undefined ? selectValue : sel.value;
  sel.innerHTML = '';
  if (neuralReady && typeof NeuralTTS !== 'undefined') {
    const g = document.createElement('optgroup');
    g.label = '🎙 자연스러운 음성 (AI)';
    NeuralTTS.VOICES.forEach(v => {
      const opt = document.createElement('option');
      opt.value = NEURAL_PREFIX + v.id;
      opt.textContent = v.label;
      g.appendChild(opt);
    });
    sel.appendChild(g);
  }
  // 브라우저 음성은 영어 기본 음성 1개만 둔다 (더 좋은 음성은 위의 AI 음성 내려받기로 안내)
  const g2 = document.createElement('optgroup');
  g2.label = '기본 음성';
  const def = document.createElement('option');
  def.value = '';
  def.textContent = defaultVoice ? `기본 음성 (${defaultVoice.name})` : '기본 음성';
  g2.appendChild(def);
  sel.appendChild(g2);
  if ([...sel.options].some(o => o.value === String(keep))) sel.value = String(keep);
}

// 설정 모달을 열 때 현재 쓰는 목소리를 선택 상태로
function currentVoiceSelectValue() {
  if (neuralVoice && neuralReady) return NEURAL_PREFIX + neuralVoice;
  return userVoiceIndex !== null ? String(userVoiceIndex) : "";
}
if("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = refreshVoices;   // (설정은 다시 읽지 않는다: 고르던 속도가 되돌아가지 않게)

function speakText(text, speaker = null) {
  if (typeof stopAudio === 'function') stopAudio();   // 흐르던 자동 재생·전체 듣기는 멈추고 이 문장만
  if (usingNeural()) { speakNeural(text, speaker); return; }
  speakBrowser(text, speaker);
}

function speakWithPromise(text, speaker) {
  if (usingNeural()) return speakNeural(text, speaker);
  return speakBrowserWithPromise(text, speaker);
}

function speakBrowser(text, speaker = null) {
  if (!("speechSynthesis" in window)) {
    if (!speakBrowser.warned) { speakBrowser.warned = true; alert("이 브라우저는 영어 읽어 주기를 지원하지 않아요.\n크롬이나 사파리에서 열면 들을 수 있어요."); }
    return;
  }
  window.speechSynthesis.cancel();
  
  const u = new SpeechSynthesisUtterance(cleanForSpeech(text));
  u.lang = "en-US";
  u.rate = userRate || 1.0;

  if (userVoiceIndex !== null && ttsVoices[userVoiceIndex]) {
    u.voice = ttsVoices[userVoiceIndex];
  } else if (speaker === 'A' && voiceA) {
    u.voice = voiceA;
    u.pitch = 1.0;
  } else if (speaker === 'B' && voiceB) {
    u.voice = voiceB;
    if (voiceA === voiceB) u.pitch = 0.8;
    else u.pitch = 1.0;
  } else if (defaultVoice) {
    u.voice = defaultVoice;
  }

  window.speechSynthesis.speak(u);
}

function speakBrowserWithPromise(text, speaker) {
  return new Promise(resolve => {
    // TTS 미지원 브라우저에서 자동재생 루프가 예외로 죽지 않도록 가드
    if (!("speechSynthesis" in window)) { resolve(); return; }

    const u = new SpeechSynthesisUtterance(cleanForSpeech(text));
    u.lang = "en-US";
    u.rate = userRate || 1.0;

    if (userVoiceIndex !== null && ttsVoices[userVoiceIndex]) {
      u.voice = ttsVoices[userVoiceIndex];
    } else if (speaker === 'A' && voiceA) {
      u.voice = voiceA;
      u.pitch = 1.0;
    } else if (speaker === 'B' && voiceB) {
      u.voice = voiceB;
      if (voiceA === voiceB) u.pitch = 0.8;
      else u.pitch = 1.0;
    } else if (defaultVoice) {
      u.voice = defaultVoice;
    }

    // 일부 브라우저에서 onend/onerror가 누락되면 재생 루프가 영원히 멈추므로
    // 문장 길이에 비례한 안전 타임아웃으로 반드시 resolve 보장
    let settled = false;
    let safetyTimer = null;
    const finish = () => {
      if (settled) return;
      settled = true;
      if (safetyTimer) clearTimeout(safetyTimer);
      resolve();
    };
    const rate = userRate || 1.0;
    safetyTimer = setTimeout(finish, Math.max(5000, (text.length * 150) / rate));

    u.onend = finish;
    u.onerror = finish;
    window.speechSynthesis.speak(u);
  });
}

function setTtsRate(rate, btn) {
  userRate = parseFloat(rate);
  updateButtonGroup('speed-btn-group', userRate);
  previewVoiceSettings();
}

function setAppFontSize(size, btn) {
  userFontSize = size;
  updateButtonGroup('font-btn-group', userFontSize);
  applyFontSizeToBody(size);
}

function applyFontSizeToBody(size) {
  const root = document.documentElement;
  root.classList.remove('font-small', 'font-medium', 'font-large');
  root.classList.add(`font-${size}`);
}

function previewVoiceSettings() {
  const selVal = (document.getElementById("tts-voice-select") || {}).value || "";
  if (selVal.startsWith(NEURAL_PREFIX)) {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    speakNeural("Hello. Nice to meet you.", null, selVal.slice(NEURAL_PREFIX.length));
    return;
  }
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  skipCurrentSpeech();   // 만들던 AI 음성 미리 듣기도 버린다
  const u = new SpeechSynthesisUtterance("Hello.");
  u.lang = "en-US";
  u.rate = userRate;
  const sel = document.getElementById("tts-voice-select");
  if (sel && sel.value !== "") {
    const idx = parseInt(sel.value, 10);
    if (!Number.isNaN(idx) && ttsVoices[idx]) u.voice = ttsVoices[idx];
  } else if (defaultVoice) {
    // '기본 목소리' 선택 시에도 실제 재생과 동일한 목소리로 미리듣기
    u.voice = defaultVoice;
  }
  window.speechSynthesis.speak(u);
}

function saveSettings() {
  const rawVal = document.getElementById("tts-voice-select").value;
  const wasNeural = !!neuralVoice;
  if (rawVal.startsWith(NEURAL_PREFIX)) {
    neuralVoice = rawVal.slice(NEURAL_PREFIX.length);
    userVoiceIndex = null;
  } else {
    neuralVoice = null;
    userVoiceIndex = rawVal === "" ? null : parseInt(rawVal, 10);
    if (Number.isNaN(userVoiceIndex)) userVoiceIndex = null;
  }
  autoPlayEnabled = document.getElementById("tts-autoplay-toggle").checked;
  if (typeof touchSettings === "function") touchSettings();   // 동기화 때 이 기기에서 바꾼 설정이 이기게
  localStorage.setItem("ttsSettings", JSON.stringify({
    voiceIndex: userVoiceIndex,
    rate: userRate,
    autoPlay: autoPlayEnabled,
    fontSize: userFontSize,
    neuralVoice: neuralVoice
  }));
  // 브라우저 음성으로 바꾸면 메모리를 많이 쓰는 음성 모델을 내려 둔다
  if (wasNeural && !neuralVoice && typeof NeuralTTS !== 'undefined') NeuralTTS.shutdown();
  settingsSnapshot = null; // 저장했으므로 닫을 때 되돌리지 않음
  closeSettingsModal();
}

// 1-2. 자연스러운 음성(Kokoro) 재생 · 내려받기
function usingNeural() {
  // 기기에서 너무 느리면(그래픽 가속 없는 기기 등) 기다림이 길어져 기본 음성으로 읽는다
  return !!neuralVoice && neuralReady && !neuralBroken && typeof NeuralTTS !== 'undefined' && !NeuralTTS.tooSlow();
}

// 대화의 B 화자는 짝이 되는 반대 성별 목소리로 구분 (예: af_bella ↔ am_puck)
function neuralStyleFor(speaker, styleOverride) {
  const base = styleOverride || neuralVoice || 'af_bella';
  if (speaker === 'B') return NeuralTTS.pairOf(base);
  return base;
}

// 패턴·숙어의 '~'(빈칸 표시)는 "물결"로 읽지 않게 말로 바꾼다: ~ing → doing, run ~ by → run something by, 나머지 ~ → someone
function cleanForSpeech(text) {
  return String(text || '')
    .replace(/\brun\s*[~∼]\s*by\b/gi, 'run something by')
    .replace(/[~∼]\s?ing\b/g, 'doing')
    .replace(/[~∼]/g, 'someone')
    .replace(/\s+/g, ' ').trim();
}
const cleanForNeural = cleanForSpeech;

function requestNeuralClip(text, style) {
  const key = `${style}|${userRate}|${text}`;
  let p = neuralClipCache.get(key);
  // 다 만든 것이나 지금 세대에서 만드는 중인 것만 다시 쓴다 (멈추기 전 세대의 요청은 빈 결과로 끝나 그 문장이 소리 없이 건너뛰어진다)
  if (p && (p.ready || p.gen === neuralGen)) { neuralClipCache.delete(key); neuralClipCache.set(key, p); return p; }
  p = NeuralTTS.synthesize(cleanForSpeech(text), style, userRate, neuralGen);
  p.gen = neuralGen;
  neuralClipCache.set(key, p);
  // 버려진(null) 요청이나 실패한 요청은 다시 만들 수 있게 지운다 (그사이 새 요청으로 바뀌었으면 건드리지 않는다)
  p.then(r => { if (r) p.ready = true; else if (neuralClipCache.get(key) === p) neuralClipCache.delete(key); },
         () => { if (neuralClipCache.get(key) === p) neuralClipCache.delete(key); });
  while (neuralClipCache.size > 30) neuralClipCache.delete(neuralClipCache.keys().next().value);
  return p;
}

/** 지금 문장을 읽는 동안 다음 문장을 미리 만들어 문장 사이 끊김을 줄인다 */
function prefetchSpeech(text, speaker) {
  if (!text || !usingNeural()) return;
  requestNeuralClip(text, neuralStyleFor(speaker)).catch(() => {});
}

/**
 * 다음 문장 여러 개를 미리 만든다. items: [[text, speaker], ...]
 * 작업자가 쉬지 않고 앞서 만들어 두므로, 느린 기기나 빠른 말하기 속도(문장이 짧게 끝남)에서도
 * 문장 사이가 끊기지 않는다. (이미 만든·만드는 중인 문장은 다시 요청하지 않음)
 */
function prefetchAhead(items) {
  (items || []).forEach(([text, speaker]) => prefetchSpeech(text, speaker));
}

function showNeuralLoading(show) {
  const el = document.getElementById('neural-loading');
  if (el) el.classList.toggle('hidden', !show);
}

/** 자연스러운 음성으로 읽고, 끝나거나 멈추면 resolve */
async function speakNeural(text, speaker, styleOverride) {
  if (typeof NeuralTTS === 'undefined') return speakBrowserWithPromise(text, speaker);
  NeuralTTS.unlockAudio();               // 누른 순간에 소리 장치를 깨워 둔다 (아이폰)
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  NeuralTTS.stopAudio();
  const token = ++neuralSpeakToken;
  const myGen = neuralGen;
  if (!NeuralTTS.isLoaded()) showNeuralLoading(true);
  try {
    let late = null;
    const clip = await Promise.race([requestNeuralClip(text, neuralStyleFor(speaker, styleOverride)),
      new Promise(resolve => { late = setTimeout(() => resolve('late'), NeuralTTS.isLoaded() ? 15000 : 25000); })]);
    clearTimeout(late);
    if (token !== neuralSpeakToken) return;
    showNeuralLoading(false);
    if (clip === 'late') { if (myGen === neuralGen) await speakBrowserWithPromise(text, speaker); return; }   // 너무 늦으면 이번 문장은 기본 음성으로
    if (!clip || myGen !== neuralGen) return;
    // 재생 끝 신호가 오지 않는 경우(아이폰에서 앱을 내렸다 돌아올 때 등) 연속 재생이 멈추지 않도록
    // 문장 길이 + 3초가 지나면 다음으로 넘어간다
    const maxMs = (clip.wav.length / clip.sampleRate) * 1000 + 3000;
    let guard = null;
    await Promise.race([
      NeuralTTS.play(clip.wav, clip.sampleRate),
      new Promise(resolve => { guard = setTimeout(resolve, maxMs); })
    ]);
    clearTimeout(guard);
  } catch (e) {
    if (token === neuralSpeakToken) showNeuralLoading(false);
    console.warn("자연스러운 음성 실패 → 브라우저 음성으로 대체", e);
    if (!NeuralTTS.isLoaded() && !neuralBroken) {
      // 모델 자체를 열지 못한 경우(메모리 부족 등): 이번 실행 동안은 브라우저 음성 사용
      neuralBroken = true;
      alert("자연스러운 음성을 열지 못해 기본 음성으로 읽습니다.\n(" + (e && e.message || e) + ")");
    }
    if (token === neuralSpeakToken && myGen === neuralGen) await speakBrowserWithPromise(text, speaker);
  }
}

/** 목록 전체 듣기의 '다음' 버튼: 지금 읽는 문장만 멈춘다 (미리 만든 다음 문장들은 그대로 사용) */
function skipCurrentSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  neuralSpeakToken++;          // 아직 만드는 중인 문장이면 다 만들어져도 재생하지 않음
  if (typeof NeuralTTS !== 'undefined') NeuralTTS.stopAudio();
}

/** stopAudio()에서 호출: 재생 중인 음성과 대기 중인 생성 요청을 모두 멈춘다 */
function stopNeuralSpeech() {
  neuralGen++;
  neuralSpeakToken++;
  showNeuralLoading(false);
  if (typeof NeuralTTS !== 'undefined') {
    NeuralTTS.stopAudio();
    NeuralTTS.cancelBefore(neuralGen);
  }
}

// 아이폰은 사용자 동작 안에서만 소리 장치를 켤 수 있어, 화면을 누를 때마다 깨워 둔다
// (쉐도잉처럼 잠시 뒤에 재생을 시작하는 경우 대비)
let speechPrimed = false;
const IS_IOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
['click', 'touchend'].forEach(type => document.addEventListener(type, () => {
  if (usingNeural()) NeuralTTS.unlockAudio();
  // 아이폰은 누른 순간에 한 번 말해 둬야 나중에(자연스러운 음성이 실패해 대신 읽을 때) 기본 음성이 들린다
  if (IS_IOS && !speechPrimed && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== 'undefined') {
    speechPrimed = true;
    try { const u = new SpeechSynthesisUtterance(" "); u.volume = 0; window.speechSynthesis.speak(u); } catch (e) {}
  }
}, true));

/** 시작 시: 받아 둔 음성이 있는지 확인하고, 쓰고 있다면 모델을 미리 열어 둔다 */
async function initNeuralVoice() {
  if (typeof NeuralTTS === 'undefined') return;
  neuralReady = await NeuralTTS.isReady();
  populateVoiceSelect();
  refreshNeuralUI();
  if (usingNeural()) setTimeout(() => { NeuralTTS.ensureLoaded().catch(e => console.warn(e)); }, 2000);
}

// variant: 'primary'(내려받기 - 그라데이션) · 'sub'(취소) · 'text'(삭제 - 작게)
function setNeuralUI(statusText, btnText, progressPct, variant) {
  const status = document.getElementById('neural-status');
  const btn = document.getElementById('neural-btn');
  const bar = document.getElementById('neural-progress');
  const fill = document.getElementById('neural-progress-fill');
  const area = document.getElementById('neural-voice-area');
  if (status) status.textContent = statusText;
  if (btn) {
    btn.textContent = btnText;
    const cls = { primary: 'btn-install-gradient', sub: 'btn-sub', text: 'btn-text' }[variant || 'primary'];
    btn.className = cls + ' neural-btn' + (variant === 'text' ? ' neural-btn-small' : '');
  }
  if (area) area.classList.toggle('is-ready', variant === 'text');
  if (bar) bar.classList.toggle('hidden', progressPct == null);
  if (fill && progressPct != null) fill.style.width = progressPct + '%';
}

// 홈 화면 추천 카드: 지원 기기 + 아직 안 받음 + 사용자가 닫지 않았을 때만
function refreshNeuralPromo(progressText) {
  const promo = document.getElementById('neural-promo');
  if (!promo) return;
  let dismissed = false;
  try { dismissed = localStorage.getItem('neural_promo_dismissed') === '1'; } catch (e) {}
  const show = typeof NeuralTTS !== 'undefined' && NeuralTTS.isSupported() && !neuralReady && (!dismissed || neuralDownloading);
  promo.classList.toggle('hidden', !show);
  const desc = document.getElementById('neural-promo-desc');
  if (desc) desc.textContent = progressText || '원어민처럼 또렷한 발음 · 한 번 받으면 인터넷 없이 사용';
}

function dismissNeuralPromo() {
  try { localStorage.setItem('neural_promo_dismissed', '1'); } catch (e) {}
  refreshNeuralPromo();
}

/** 홈 추천 카드 → 설정을 열고 AI 음성 칸을 보여 준다 */
function openNeuralSettings() {
  openSettingsModal();
  const area = document.getElementById('neural-voice-area');
  if (!area) return;
  area.scrollIntoView({ block: 'center', behavior: 'smooth' });
  area.classList.remove('flash'); void area.offsetWidth; area.classList.add('flash');
}

function refreshNeuralUI() {
  const area = document.getElementById('neural-voice-area');
  if (!area) return;
  if (typeof NeuralTTS === 'undefined' || !NeuralTTS.isSupported()) { area.classList.add('hidden'); return; }
  area.classList.remove('hidden');
  refreshNeuralPromo();
  if (neuralDownloading) return;
  if (neuralReady && neuralBroken) { setNeuralUI('자연스러운 음성을 열지 못해 지금은 기본 음성으로 읽고 있어요.', '↻ 다시 열어 보기', null, 'primary'); return; }
  if (neuralReady) setNeuralUI(NeuralTTS.tooSlow()
    ? '받아 둠 · 다만 이 기기에서는 목소리를 만드는 게 느려서 기본 음성으로 읽어요.'
    : `✅ 받아 둠 · 인터넷 없이 사용할 수 있어요. 위 목록에서 여성·남성 목소리 ${NeuralTTS.VOICES.length}종 중 고를 수 있습니다.`, '받은 음성 삭제', null, 'text');
  else setNeuralUI(`사람처럼 자연스러운 원어민 목소리(Kokoro)로 읽어 줍니다. 한 번만 받으면 인터넷 없이 사용할 수 있어요. (약 ${NeuralTTS.downloadMB()}MB · Wi-Fi 권장)`, '⬇ AI 음성 내려받기', null, 'primary');
}

// 받은 직후 바로 쓰도록 자연스러운 음성 선택만 저장 (모달의 미저장 속도·글자 크기는 건드리지 않음)
function persistNeuralVoiceChoice() {
  let d = {};
  try { d = JSON.parse(localStorage.getItem("ttsSettings") || "{}") || {}; } catch (e) { d = {}; }
  d.neuralVoice = neuralVoice;
  if (neuralVoice) d.voiceIndex = null;
  try { localStorage.setItem("ttsSettings", JSON.stringify(d)); } catch (e) { console.warn(e); }
}

async function onNeuralButton() {
  if (typeof NeuralTTS === 'undefined') return;
  if (neuralDownloading) { NeuralTTS.cancelDownload(); return; }
  if (neuralReady && neuralBroken) {   // 다시 열어 보기
    neuralBroken = false; neuralClipCache.clear(); NeuralTTS.shutdown();
    setNeuralUI('여는 중…', '여는 중…', null, 'sub');
    try { await NeuralTTS.ensureLoaded(); refreshNeuralUI(); alert("✅ 자연스러운 음성을 다시 열었어요."); }
    catch (e) { neuralBroken = true; refreshNeuralUI(); alert("이번에도 열지 못했어요. 앱을 완전히 닫았다 다시 열어 보세요.\n(" + ((e && e.message) || e) + ")"); }
    return;
  }

  if (neuralReady) {
    if (!confirm("받아 둔 자연스러운 음성을 삭제할까요?\n다시 쓰려면 새로 내려받아야 합니다.")) return;
    stopAudio();
    await NeuralTTS.remove();
    neuralReady = false;
    neuralClipCache.clear();
    neuralVoice = null;
    persistNeuralVoiceChoice();
    populateVoiceSelect("");
    refreshNeuralUI();
    return;
  }

  neuralDownloading = true;
  setNeuralUI('받는 중… 0%', '취소', 0, 'sub');
  refreshNeuralPromo('받는 중… 0%');
  try {
    await NeuralTTS.download((got, total) => {
      const pct = total ? Math.floor(got / total * 100) : 0;
      setNeuralUI(`받는 중… ${pct}% (${Math.round(got / 1e6)} / ${Math.round(total / 1e6)}MB) · 받는 동안 앱을 닫지 마세요`, '취소', pct, 'sub');
      refreshNeuralPromo(`받는 중… ${pct}% · 앱을 닫지 마세요`);
    });
    neuralDownloading = false;
    neuralReady = true;
    neuralBroken = false;
    neuralVoice = neuralVoice || 'af_bella';
    persistNeuralVoiceChoice();
    populateVoiceSelect(NEURAL_PREFIX + neuralVoice);
    refreshNeuralUI();
    alert(NeuralTTS.tooSlow()
      ? "자연스러운 음성을 받았습니다.\n다만 이 기기에서는 목소리를 만드는 게 느려서 지금은 기본 음성으로 읽어요."
      : "✅ 자연스러운 음성을 받았습니다.\n이제 예문·대화·AI 튜터를 자연스러운 목소리로 들을 수 있어요.");
  } catch (e) {
    neuralDownloading = false;
    refreshNeuralUI();
    if (e && e.name === 'AbortError') {
      setNeuralUI('받기를 멈췄어요. 다시 누르면 처음부터 다시 받아요.', '⬇ 다시 받기', null, 'primary');
    } else {
      console.error(e);
      alert("음성을 받지 못했어요. 와이파이 연결을 확인하고 다시 눌러 주세요. (처음부터 다시 받아요)\n(" + (e && e.message || e) + ")");
    }
  }
}

// 2. News API
const NEWS_TOPICS = [
  "https://news.google.com/rss/search?q=South+Korea+(k-pop+OR+k-drama+OR+movie)+(popular+OR+success)&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=South+Korea+(technology+OR+samsung+OR+economy)+(growth+OR+innovation)&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=South+Korea+(food+OR+travel+OR+trend)+(viral+OR+famous)&hl=en-US&gl=US&ceid=US:en"
];
let currentTopicIndex = 0;

function initNewsUpdater() { fetchRealNews(); }
function refreshNews() { fetchRealNews(); }

async function fetchRealNews() {
  const container = document.getElementById('news-card-list');
  if (!container) return;
  
  container.innerHTML = `<div style="padding:30px; text-align:center; color:#94a3b8; font-size:0.9rem; width:100%;">🔄 Mixing fresh stories...<br><span style="font-size:0.8rem; opacity:0.7">Topic ${currentTopicIndex + 1} Loading</span></div>`;
  
  const currentRssUrl = NEWS_TOPICS[currentTopicIndex];
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(currentRssUrl)}`;

  // 네트워크가 응답 없이 멈추면 '로딩 중' 문구가 계속 남으므로 8초 후 중단하고 백업 뉴스 표시
  const controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const abortTimer = controller ? setTimeout(() => controller.abort(), 8000) : null;
  try {
    const response = await fetch(apiUrl, controller ? { signal: controller.signal } : undefined);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();

    if (data.status === 'ok' && Array.isArray(data.items) && data.items.length) {
      container.innerHTML = "";
      const allArticles = data.items.slice(0, 15);
      const selectedArticles = shuffleArray(allArticles).slice(0, 3);
      
      selectedArticles.forEach(item => {
        const title = String(item.title || ""), cut = title.lastIndexOf(" - ");
        const cleanTitle = cut > 0 ? title.slice(0, cut) : title;
        const sourceName = cut > 0 ? title.slice(cut + 3) : "News";
        const pub = String(item.pubDate || "");
        const timeAgo = getTimeAgo(new Date(/^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d$/.test(pub) ? pub.replace(" ", "T") + "Z" : pub));   // rss2json 시각은 UTC (시간대 표시 없음)

        const card = document.createElement('div');
        card.className = 'news-card';
        card.onclick = () => { if (/^https?:\/\//i.test(item.link || "")) window.open(item.link, '_blank', 'noopener,noreferrer'); };

        let topicTag = "#Trending";
        if (currentTopicIndex === 0) topicTag = "#K-Culture";
        else if (currentTopicIndex === 1) topicTag = "#Tech&Biz";
        else if (currentTopicIndex === 2) topicTag = "#Lifestyle";

        // 외부 RSS 응답을 textContent로 안전하게 주입 (XSS 방지)
        const inner = document.createElement('div');
        const tagSpan = document.createElement('span');
        tagSpan.className = 'news-tag';
        tagSpan.textContent = topicTag;
        const titleDiv = document.createElement('div');
        titleDiv.className = 'news-title';
        titleDiv.textContent = cleanTitle;
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'news-summary';
        summaryDiv.style.cssText = 'font-size:0.8rem; color:#94a3b8;';
        const stripped = item.description ? item.description.replace(/<[^>]*>?/gm, '') : '';
        summaryDiv.textContent = stripped ? stripped.substring(0, 70) + '...' : 'Click to read more.';
        inner.appendChild(tagSpan);
        inner.appendChild(titleDiv);
        inner.appendChild(summaryDiv);

        const footer = document.createElement('div');
        footer.className = 'news-footer';
        const sourceSpan = document.createElement('span');
        sourceSpan.textContent = sourceName;
        const timeSpan = document.createElement('span');
        timeSpan.textContent = timeAgo;
        footer.appendChild(sourceSpan);
        footer.appendChild(document.createTextNode(' • '));
        footer.appendChild(timeSpan);

        card.appendChild(inner);
        card.appendChild(footer);
        container.appendChild(card);
      });
      currentTopicIndex = (currentTopicIndex + 1) % NEWS_TOPICS.length;
    } else { throw new Error("API Error"); }
  } catch (error) { loadBackupNews(); }
  finally { if (abortTimer) clearTimeout(abortTimer); }
}

function loadBackupNews() {
  const container = document.getElementById('news-card-list');
  if (!container) return;
  container.innerHTML = "";
  const newsData = [{ tag: "K-Culture", title: "Han Kang wins Nobel Prize", summary: "South Korean author Han Kang brings home the Nobel Prize.", source: "CNN", url: "https://edition.cnn.com/" }];
  newsData.forEach(news => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.onclick = () => window.open(news.url, '_blank', 'noopener,noreferrer');
    card.innerHTML = `<div><span class="news-tag">#${news.tag}</span><div class="news-title">${news.title}</div><div class="news-summary">${news.summary}</div></div><div class="news-footer">Source: ${news.source}</div>`;
    container.appendChild(card);
  });
}

function getTimeAgo(date) {
  if (!date || isNaN(date.getTime())) return "";
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + (hours === 1 ? " hour ago" : " hours ago");
  const days = Math.floor(hours / 24);
  if (days < 30) return days + (days === 1 ? " day ago" : " days ago");
  const months = Math.floor(days / 30);
  if (months < 12) return months + (months === 1 ? " month ago" : " months ago");
  const years = Math.floor(days / 365);
  return years + (years === 1 ? " year ago" : " years ago");
}

// 3. Share (휴대폰 기본 공유 · 안 되면 주소 복사)

function shareApp() {
  const shareData = { 
    title: 'ENGO 영어회화', 
    text: '매일 새로운 영어 패턴과 회화를 공부해보세요!', 
    url: window.location.href 
  };

  // 1. 모바일/브라우저 내장 공유 기능 먼저 시도
  if (navigator.share) { 
    navigator.share(shareData).catch((err) => console.log('공유 취소:', err)); 
  } 
  // 2. 내장 기능이 없으면(PC 등) 즉시 주소 복사
  else {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('주소가 복사되었습니다!\n친구에게 붙여넣기(Ctrl+V)로 공유해보세요.'))
      .catch(() => prompt("이 주소를 복사해서 공유하세요:", window.location.href));
  }
}

