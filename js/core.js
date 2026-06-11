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
  "shadowing-list", "shadowing", "puzzle", "blog-list", "blog-detail"
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
  const page = (event.state && event.state.page) ? event.state.page : 'home';
  isBackAction = true;
  goTo(page);
  isBackAction = false;
};

function goTo(page, isReplace = false) {
  // 존재하지 않는 페이지(#sync, #settings, 오타 해시 등)로 진입 시 빈 화면 방지
  if (!pages.includes(page)) page = "home";
  stopAudio();

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
  
  if (page === "puzzle" && typeof initPuzzle === 'function') {
    document.querySelectorAll("[data-puzzle-level-btn]").forEach(b => {
      b.classList.toggle("active", parseInt(b.dataset.puzzleLevelBtn) === selectedPuzzleLevel);
    });
    initPuzzle();
  }
}

function stopAudio() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  isConversationPlaying = false;
  currentAudioSessionId++; 
}

// ==========================================
// 3. 설정(Settings) 및 모달 UI
// ==========================================
function openSettingsModal() {
  const currentPage = history.state ? history.state.page : 'home'; history.pushState({ page: currentPage, modal: 'settings' }, "", "#settings");
  document.getElementById("settings-modal").classList.remove("hidden");
  const sel = document.getElementById("tts-voice-select"); const chk = document.getElementById("tts-autoplay-toggle");
  if(sel) sel.value = userVoiceIndex !== null ? userVoiceIndex : ""; if(chk) chk.checked = autoPlayEnabled;
  updateButtonGroup('speed-btn-group', userRate); updateButtonGroup('font-btn-group', userFontSize);
}
function closeSettingsModal() { if (history.state && history.state.modal === 'settings') history.back(); else document.getElementById("settings-modal").classList.add("hidden"); }

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
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    deferredPrompt = null;
    const banner = document.getElementById('install-banner');
    if (banner) banner.classList.add('hidden');
  }
}
function hideInstallBanner() {
  const banner = document.getElementById('install-banner');
  if (banner) banner.classList.add('hidden');
}

window.addEventListener('load', () => {
  if(typeof loadMemorizedData === 'function') loadMemorizedData();
  if(typeof loadVoices === 'function') loadVoices();
  if(typeof initNewsUpdater === 'function') initNewsUpdater();
  
  const initialPage = location.hash.replace('#', '') || 'home'; 
  goTo(initialPage, true);
});