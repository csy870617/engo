// ==========================================
// 🚨 카카오톡 인앱 브라우저 탈출 및 초기 설정
// ==========================================
(function() {
  const ua = navigator.userAgent.toLowerCase();
  const url = location.href;
  if (ua.indexOf('kakaotalk') > -1) {
    if (ua.indexOf('android') > -1) {
      location.href = 'intent://' + url.replace(/https?:\/\//i, '') + '#Intent;scheme=https;end';
    } else if (/iphone|ipad|ipod/.test(ua)) {
      // iOS 카카오톡은 intent 스킴을 지원하지 않으므로 외부 브라우저 열기 요청
      location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(url);
    }
  }
})();

// ==========================================
// 1. 전역 변수 선언
// ==========================================
const pages = [
  "home", "patterns", "pattern-detail", "words", "word-detail",
  "idioms", "idiom-detail", "conversations", "conv-detail",
  "shadowing-list", "shadowing", "puzzle", "blog-list", "blog-detail", "tutor"
];

const idiomData = [
  ...(typeof idiomsLevel1 !== "undefined" ? idiomsLevel1 : []),
  ...(typeof idiomsLevel2 !== "undefined" ? idiomsLevel2 : []),
  ...(typeof idiomsLevel3 !== "undefined" ? idiomsLevel3 : []),
  ...(typeof idiomsLevel4 !== "undefined" ? idiomsLevel4 : []),
  ...(typeof idiomsLevel5 !== "undefined" ? idiomsLevel5 : [])
];

let currentPatternId = null;
let currentConvId = null;
let currentWordId = null;
let currentIdiomId = null;

let currentPatternList = [];
let currentWordList = [];
let currentIdiomList = [];
let currentConvList = [];

let selectedWordLevel = 0;
let memorizedWords = new Set();
let wordStudyingOnly = false;

let selectedIdiomLevel = 0;
let memorizedIdioms = new Set();
let idiomStudyingOnly = false;

let memorizedPatterns = new Set();
let patternStudyingOnly = false;

let selectedPuzzleLevel = 0;

let currentShadowingId = null;
let shadowingLineIndex = 0;
let isBackAction = false; 
let isConversationPlaying = false;
let currentAudioSessionId = 0; 

// 편향 없는 셔플 (Fisher-Yates) - 뉴스/퍼즐에서 공용 사용
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ==========================================
// 2. 네비게이션 & UI 제어
// ==========================================
window.onpopstate = function(event) {
  const openModals = document.querySelectorAll('.modal:not(.hidden)');
  if (openModals.length > 0) {
    openModals.forEach(modal => modal.classList.add('hidden'));
  }
  stopAudio();
  // 설정 모달을 '저장' 없이 닫은 경우(취소/뒤로가기) 미리 적용된 속도·글자 크기 되돌림
  restoreUnsavedSettings();
  // 주소창에서 해시를 직접 바꾼 경우 state가 없으므로 해시를 기준으로 이동
  let page = (event.state && event.state.page) ? event.state.page : (location.hash.replace('#', '') || 'home');
  if (!pages.includes(page)) page = 'home';
  isBackAction = true;
  goTo(page);
  isBackAction = false;
  if (!event.state) history.replaceState({ page: page }, "", "#" + page);
};

function goTo(page, isReplace = false) {
  // 존재하지 않는 페이지(#sync, #settings, 오타 해시 등)로 진입 시 빈 화면 방지
  if (!pages.includes(page)) page = "home";
  stopAudio();
  // AI 튜터를 떠날 때: 듣기·말하기·답 만들기를 멈추고 잠시 뒤 모델을 메모리에서 내린다
  if (page !== "tutor" && typeof leaveTutorPage === 'function') leaveTutorPage();

  if (!isBackAction) {
    if (isReplace) history.replaceState({ page: page }, "", "#" + page);
    else if (!history.state || history.state.page !== page) history.pushState({ page: page }, "", "#" + page);
  }

  pages.forEach((p) => {
    const el = document.getElementById("page-" + p);
    if (!el) return;
    if (p === page) el.classList.remove("hidden");
    else el.classList.add("hidden");
  });

  if (typeof renderPatternList === 'function') {
      if (page === "patterns") renderPatternList();
      if (page === "pattern-detail") { renderPatternList(); renderPatternDetail(); }
      if (page === "words") renderWordList();
      if (page === "word-detail") { renderWordList(); renderWordDetail(); }
      if (page === "idioms") renderIdiomList();
      if (page === "idiom-detail") { renderIdiomList(); renderIdiomDetail(); }
      if (page === "conversations") renderConversationList();
      if (page === "conv-detail") { renderConversationList(); renderConversationDetail(); }
      if (page === "shadowing-list") renderShadowingList();
      if (page === "blog-list") renderBlogList();
      if (page === "blog-detail") renderBlogDetail();
  }
  
  if (page === "tutor" && typeof renderTutorPage === 'function') renderTutorPage();
  if (page === "puzzle" && typeof initPuzzle === 'function') {
    document.querySelectorAll("[data-puzzle-level-btn]").forEach(b => {
      b.classList.toggle("active", parseInt(b.dataset.puzzleLevelBtn) === selectedPuzzleLevel);
    });
    initPuzzle();
  }
}

function stopAudio() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (typeof stopNeuralSpeech === 'function') stopNeuralSpeech();
  if (typeof endListPlayback === 'function') endListPlayback();
  isConversationPlaying = false;
  currentAudioSessionId++; 
}

// 가로 슬라이드(뉴스·유튜브): PC는 터치로 밀 수 없고 스크롤바도 숨겨져 있어 ‹ › 버튼으로 넘긴다
function setupHScroll() {
  document.querySelectorAll('.hscroll').forEach(box => {
    const area = box.querySelector('.news-scroll-area, .youtube-scroll-area');
    const prev = box.querySelector('.hscroll-btn.prev');
    const next = box.querySelector('.hscroll-btn.next');
    if (!area || !prev || !next) return;
    const update = () => {
      const max = area.scrollWidth - area.clientWidth;
      prev.classList.toggle('is-hidden', area.scrollLeft <= 4);
      next.classList.toggle('is-hidden', area.scrollLeft >= max - 4);
    };
    const page = (dir) => area.scrollBy({ left: dir * Math.max(200, area.clientWidth * 0.8), behavior: 'smooth' });
    prev.addEventListener('click', () => page(-1));
    next.addEventListener('click', () => page(1));
    area.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    // 뉴스 카드는 나중에 채워지므로 내용이 바뀔 때마다 다시 계산
    if (typeof MutationObserver !== 'undefined') new MutationObserver(update).observe(area, { childList: true });
    update();
  });
}

// ==========================================
// 3. 설정(Settings) 및 모달 UI
// ==========================================
// 속도·글자 크기는 누르는 즉시 미리 적용되므로, 저장하지 않고 닫으면 되돌리기 위해 열 때 값을 보관
let settingsSnapshot = null;
function restoreUnsavedSettings() {
  if (!settingsSnapshot) return;
  userRate = settingsSnapshot.rate;
  userFontSize = settingsSnapshot.fontSize;
  applyFontSizeToBody(userFontSize);
  settingsSnapshot = null;
}

function openSettingsModal() {
  const currentPage = history.state ? history.state.page : 'home'; history.pushState({ page: currentPage, modal: 'settings' }, "", "#settings");
  settingsSnapshot = { rate: userRate, fontSize: userFontSize };
  document.getElementById("settings-modal").classList.remove("hidden");
  const sel = document.getElementById("tts-voice-select"); const chk = document.getElementById("tts-autoplay-toggle");
  if(sel) sel.value = (typeof currentVoiceSelectValue === 'function') ? currentVoiceSelectValue() : (userVoiceIndex !== null ? userVoiceIndex : ""); if(chk) chk.checked = autoPlayEnabled;
  if (typeof refreshNeuralUI === 'function') refreshNeuralUI();
  updateButtonGroup('speed-btn-group', userRate); updateButtonGroup('font-btn-group', userFontSize);
}
function closeSettingsModal() { if (history.state && history.state.modal === 'settings') history.back(); else { restoreUnsavedSettings(); document.getElementById("settings-modal").classList.add("hidden"); } }

function updateButtonGroup(groupId, activeValue) { const group = document.getElementById(groupId); if(!group) return; group.querySelectorAll('button').forEach(btn => { if (btn.getAttribute('data-value') == activeValue) btn.classList.add('active'); else btn.classList.remove('active'); }); }

// ==========================================
// 4. PWA 및 로딩 화면 (배너 자동 표시 제거됨)
// ==========================================
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // const banner = document.getElementById('install-banner'); 
  // if (banner) banner.classList.remove('hidden'); // <-- 이 부분이 주석 처리되어 배너가 안 뜸
});

async function installPWA() {
  if (!deferredPrompt) {
    alert("이미 설치되어 있거나, 현재 브라우저에서는 설치를 지원하지 않습니다.\n(홈 화면에 추가 기능을 확인해주세요.)");
    return;
  }
  // prompt()는 이벤트당 한 번만 호출 가능 → 설치를 취소한 뒤 다시 누르면 InvalidStateError가 나므로 결과와 관계없이 비움
  const promptEvent = deferredPrompt;
  deferredPrompt = null;
  try {
    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    if (outcome === 'accepted') {
      const banner = document.getElementById('install-banner');
      if (banner) banner.classList.add('hidden');
    }
  } catch (e) { console.warn("PWA 설치 프롬프트 실패", e); }
}
function hideInstallBanner() {
  const banner = document.getElementById('install-banner');
  if (banner) banner.classList.add('hidden');
}

// 'load'는 광고·유튜브 iframe까지 모두 받아야 발생해 느린 네트워크에서 초기화가 늦어짐.
// 그 사이 사용자가 암기 체크를 하면 빈 기록으로 저장돼 기존 기록이 덮어써지므로 DOM 준비 시점에 초기화
document.addEventListener('DOMContentLoaded', () => {
  if(typeof loadMemorizedData === 'function') loadMemorizedData();
  if(typeof loadVoices === 'function') loadVoices();
  if(typeof initNeuralVoice === 'function') initNeuralVoice();
  if(typeof initNewsUpdater === 'function') initNewsUpdater();
  setupHScroll();
  
  const initialPage = location.hash.replace('#', '') || 'home'; 
  goTo(initialPage, true);
});