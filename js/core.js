// (카카오톡 인앱 브라우저 탈출은 index.html 맨 위에서 한다: 무거운 학습 데이터를 받기 전에 바깥 브라우저로 넘긴다)

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

// 잠깐 떴다 사라지는 안내 (화면을 막는 알림창 대신: "마지막 항목이에요" 같은 가벼운 안내)
let toastTimer = null;
function showToast(msg) {
  let t = document.getElementById('app-toast');
  if (!t) { t = document.createElement('div'); t.id = 'app-toast'; t.className = 'app-toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1600);
}

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
  // AI 튜터의 설정·피드백 판이 열려 있으면 뒤로 가기는 그 판만 닫는다
  if (typeof tutorHandleBack === 'function' && tutorHandleBack()) return;
  // 대화 중인 튜터 화면 안에서 남은 기록으로 돌아온 경우: 시작 화면으로 되돌리거나 말을 끊지 않는다
  const target = (event.state && event.state.page) || location.hash.replace('#', '');
  if (target === 'tutor' && typeof tutorCallActive !== 'undefined' && tutorCallActive && !document.querySelector('.modal:not(.hidden)')) {
    const tp = document.getElementById('page-tutor');
    if (tp && !tp.classList.contains('hidden')) { if (!event.state) history.replaceState({ page: 'tutor' }, "", "#tutor"); return; }
  }
  // 주소창에서 해시를 직접 바꾼 경우 state가 없으므로 해시를 기준으로 이동
  let page = (event.state && event.state.page) ? event.state.page : (location.hash.replace('#', '') || 'home');
  if (!pages.includes(page)) page = 'home';
  const openModals = document.querySelectorAll('.modal:not(.hidden)');
  if (openModals.length > 0) {
    openModals.forEach(modal => modal.classList.add('hidden'));
    // 설정 모달을 '저장' 없이 닫은 경우(취소/뒤로가기) 미리 적용된 속도·글자 크기 되돌림
    restoreUnsavedSettings();
    // 창(설정·동기화)만 닫는 뒤로 가기: 듣던 소리와 보던 화면은 그대로 둔다
    if (page === currentPageName) { if (!event.state) history.replaceState({ page: page }, "", "#" + page); return; }
  }
  stopAudio();
  restoreUnsavedSettings();
  isBackAction = true;
  try { goTo(page); }
  finally { isBackAction = false; }   // 화면을 그리다 오류가 나도 다음 이동이 기록에 남게
  if (!event.state) history.replaceState({ page: page }, "", "#" + page);
};

// 화면 안의 '❮ 뒤로·❮ 목록': 바로 앞 화면이면 기록을 한 칸 되돌린다 (안드로이드 뒤로 가기가 같은 화면들을 다시 돌지 않게).
// 바로 앞이 아니면(주소로 바로 들어온 경우 등) 지금 기록을 그 화면으로 바꾼다
function goBack(target) {
  const st = history.state;
  if (st && st.prev === target && !st.modal) { history.back(); return; }
  goTo(target, true);
}

// 화면마다 보던 위치를 기억한다: 목록으로 돌아오면 보던 자리, 새 항목(상세)은 맨 위부터
let currentPageName = null;
const pageScrollY = {};
const KEEP_SCROLL_PAGES = ["home", "patterns", "words", "idioms", "conversations", "shadowing-list", "blog-list"];
try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {}

function goTo(page, isReplace = false) {
  // 존재하지 않는 페이지(#sync, #settings, 오타 해시 등)로 진입 시 빈 화면 방지
  if (!pages.includes(page)) page = "home";
  stopAudio();
  // AI 튜터를 떠날 때만: 듣기·말하기·답 만들기를 멈추고 잠시 뒤 모델을 메모리에서 내린다
  // (튜터에 가지 않았는데 다른 화면끼리 오갈 때마다 부르면, 예문 읽기에 쓰는 자연스러운 음성까지 90초 뒤 내려진다)
  if (page !== "tutor" && currentPageName === "tutor" && typeof leaveTutorPage === 'function') leaveTutorPage();
  // 홈의 유튜브 영상은 화면을 떠나면 멈춘다 (숨겨도 소리가 계속 나서)
  if (page !== "home" && currentPageName === "home") pauseHomeVideos();
  if (currentPageName) pageScrollY[currentPageName] = window.scrollY || document.documentElement.scrollTop || 0;

  if (!isBackAction) {
    const prev = currentPageName && currentPageName !== page ? currentPageName : (history.state && history.state.prev) || null;
    if (isReplace) history.replaceState({ page: page, prev: (history.state && history.state.prev) || null }, "", "#" + page);
    else if (!history.state || history.state.page !== page) history.pushState({ page: page, prev: prev }, "", "#" + page);
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
  if (page === "home") hscrollRefresh.forEach(f => f());   // 다른 화면에 있는 동안 창 크기가 바뀌었으면 ‹ › 버튼을 다시 맞춘다
  // 목록·홈은 보던 자리로, 상세·새 화면은 맨 위부터 (화면이 바뀌어도 앞 화면의 스크롤이 남지 않게)
  const y = KEEP_SCROLL_PAGES.includes(page) && page !== currentPageName ? (pageScrollY[page] || 0) : (page === currentPageName && KEEP_SCROLL_PAGES.includes(page) ? null : 0);
  if (y !== null && page !== "tutor") window.scrollTo(0, y);
  currentPageName = page;
}

/** 홈의 유튜브 영상을 멈춘다 (영상 주소에 enablejsapi=1이 있어야 명령을 받는다) */
function pauseHomeVideos() {
  document.querySelectorAll('#page-home iframe').forEach(f => {
    try { f.contentWindow && f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*'); } catch (e) {}
  });
}

function stopAudio() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (typeof stopNeuralSpeech === 'function') stopNeuralSpeech();
  if (typeof endListPlayback === 'function') endListPlayback();
  isConversationPlaying = false;
  currentAudioSessionId++; 
}

// 가로 슬라이드(뉴스·유튜브): PC는 터치로 밀 수 없고 스크롤바도 숨겨져 있어 ‹ › 버튼으로 넘긴다
const hscrollRefresh = [];
function setupHScroll() {
  document.querySelectorAll('.hscroll').forEach(box => {
    const area = box.querySelector('.news-scroll-area, .youtube-scroll-area');
    const prev = box.querySelector('.hscroll-btn.prev');
    const next = box.querySelector('.hscroll-btn.next');
    if (!area || !prev || !next) return;
    const update = () => {
      if (!area.clientWidth) return;   // 홈이 숨겨져 있으면 폭이 0이라 잴 수 없다 (홈으로 돌아올 때 다시 잰다)
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
    hscrollRefresh.push(update);
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
  
  // 외부 브라우저로 넘겨 열 때(안드로이드 intent 등)는 #을 쓸 수 없어 ?go=페이지 로 받는다
  const goParam = new URLSearchParams(location.search).get('go');
  let initialPage = location.hash.replace('#', '') || goParam || 'home';
  // 새로 고침할 때 설정·동기화 창(#settings·#sync)이 열려 있었으면 그 밑의 화면으로
  if (!pages.includes(initialPage) && history.state && pages.includes(history.state.page)) initialPage = history.state.page;
  // 무엇을 보던 중인지 남지 않는 화면은 목록부터 (빈 '준비…' 화면이나 엉뚱한 1권이 뜨지 않게)
  if (initialPage === 'shadowing' && !currentShadowingId) initialPage = 'shadowing-list';
  if (initialPage === 'blog-detail') initialPage = 'blog-list';
  goTo(initialPage, true);
  if (goParam) { try { history.replaceState(history.state, "", location.pathname + location.hash); } catch (e) {} }   // 주소에 남은 ?go= 는 지운다
});