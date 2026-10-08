// ==========================================
// ENGO 스마트 동기화 (디자인 개선됨)
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyCFysb2iiJ7xbUPBCFB0oWlY6D88j6ZfYs",
  authDomain: "engo-a86bb.firebaseapp.com",
  projectId: "engo-a86bb",
  storageBucket: "engo-a86bb.firebasestorage.app",
  messagingSenderId: "798470225024",
  appId: "1:798470225024:web:eafff7ce3c54584f86ba65",
  measurementId: "G-VRN4YXVSPS"
};

let db, auth;
let currentUser = null;

// Firebase 초기화
if (typeof firebase !== "undefined") {
  try {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
      currentUser = user;
      updateSyncUI(); 
    });
  } catch (e) { console.error("Firebase init failed:", e); }
}

// 1. 로컬 데이터 로드
// 항목 하나가 손상되어도 나머지 로드는 계속되도록 키별로 개별 처리
function safeParseIdSet(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set(parsed) : null;
  } catch (e) { console.warn(key + " parse 실패", e); return null; }
}

function safeParseLevel(key) {
  const raw = localStorage.getItem(key);
  if (raw === null) return null;
  const n = parseInt(raw, 10);
  return Number.isNaN(n) ? null : n;
}

// 학습 데이터 정리로 중복 항목이 합쳐진 경우: 예전 ID로 암기한 기록을 남은 같은 항목 ID로 이어 준다
// (wordIdAliases / idiomIdAliases 는 word.js / idiom.js 에 있음)
function migrateIdSet(set, aliases) {
  if (!aliases) return set;
  set.forEach(id => { if (aliases[id]) set.add(aliases[id]); });
  return set;
}
function migrateId(id, aliases) {
  return (id && aliases && aliases[id]) ? aliases[id] : id;
}

function loadMemorizedData() {
  try {
    const pSet = safeParseIdSet("patternMemorizedIds");
    if (pSet) memorizedPatterns = pSet;
    const wSet = safeParseIdSet("wordMemorizedIds");
    if (wSet) memorizedWords = wSet;
    const iSet = safeParseIdSet("idiomMemorizedIds");
    if (iSet) memorizedIdioms = iSet;
    migrateIdSet(memorizedWords, typeof wordIdAliases !== 'undefined' ? wordIdAliases : null);
    migrateIdSet(memorizedIdioms, typeof idiomIdAliases !== 'undefined' ? idiomIdAliases : null);

    const pStudy = localStorage.getItem("patternStudyingOnly");
    if(pStudy !== null) patternStudyingOnly = (pStudy === 'true');
    const wStudy = localStorage.getItem("wordStudyingOnly");
    if(wStudy !== null) wordStudyingOnly = (wStudy === 'true');
    const iStudy = localStorage.getItem("idiomStudyingOnly");
    if(iStudy !== null) idiomStudyingOnly = (iStudy === 'true');

    const wLevel = safeParseLevel("selectedWordLevel");
    if (wLevel !== null) selectedWordLevel = wLevel;
    const iLevel = safeParseLevel("selectedIdiomLevel");
    if (iLevel !== null) selectedIdiomLevel = iLevel;
    const pzLevel = safeParseLevel("selectedPuzzleLevel");
    if (pzLevel !== null) selectedPuzzleLevel = pzLevel;

    currentPatternId = localStorage.getItem("currentPatternId");
    currentWordId = migrateId(localStorage.getItem("currentWordId"), typeof wordIdAliases !== 'undefined' ? wordIdAliases : null);
    currentIdiomId = migrateId(localStorage.getItem("currentIdiomId"), typeof idiomIdAliases !== 'undefined' ? idiomIdAliases : null);
    currentConvId = localStorage.getItem("currentConvId");
  } catch (e) { console.warn(e); }
}

// 암기 표시를 바꾼 기록 { pattern: { id: [1|0, 시각] }, word: {...}, idiom: {...} }
// 합치기만 하면 한 번 서버에 올라간 암기는 해제해도 다음 동기화 때 다시 살아나므로, 항목마다 마지막으로 바꾼 쪽이 이긴다
const MEM_LOG_KEY = "memorizedLog";
function memLogLoad() { try { const d = JSON.parse(localStorage.getItem(MEM_LOG_KEY) || "{}"); return d && typeof d === "object" && !Array.isArray(d) ? d : {}; } catch (e) { return {}; } }
function memLogSave(log) { try { localStorage.setItem(MEM_LOG_KEY, JSON.stringify(log)); } catch (e) { console.warn(e); } }
/** 암기 표시를 켜거나 끈다 (목록·상세의 체크): 바꾼 시각을 남기고 저장한다 */
function markMemorized(type, id, on) {
  const set = type === 'pattern' ? memorizedPatterns : type === 'word' ? memorizedWords : type === 'idiom' ? memorizedIdioms : null;
  if (!set || !id) return;
  if (on) set.add(id); else set.delete(id);
  const log = memLogLoad();
  (log[type] = log[type] || {})[id] = [on ? 1 : 0, Date.now()];
  memLogSave(log);
  saveData(type);
}
/** 두 기기의 암기 기록 합치기: 항목마다 마지막으로 바꾼 쪽이 이긴다 (바꾼 기록이 없는 예전 암기는 그대로 둔다) */
function mergeMemorized(localSet, serverArr, localLog, serverLog) {
  const server = new Set(serverArr);
  const ids = new Set([...localSet, ...server, ...Object.keys(localLog), ...Object.keys(serverLog)]);
  const ok = e => Array.isArray(e) && e.length === 2 && typeof e[1] === "number";
  const set = new Set(), log = {};
  ids.forEach(id => {
    const a = ok(localLog[id]) ? localLog[id] : null, b = ok(serverLog[id]) ? serverLog[id] : null;
    const last = a && b ? (a[1] >= b[1] ? a : b) : (a || b);
    if (last) { log[id] = last; if (last[0]) set.add(id); }
    else if (localSet.has(id) || server.has(id)) set.add(id);
  });
  return { set, log };
}
// 설정(속도·글자 크기·자동 재생·레벨·미암기만)을 바꾼 시각: 동기화 때 더 최근에 바꾼 쪽을 쓴다
function touchSettings() { try { localStorage.setItem("settingsUpdatedAt", String(Date.now())); } catch (e) {} }

// 같은 기기의 다른 탭·설치한 앱에서 바꾼 암기 기록을 바로 반영한다 (오래된 탭이 새 기록을 덮어쓰지 않게)
window.addEventListener('storage', (e) => {
  const map = { patternMemorizedIds: 'pattern', wordMemorizedIds: 'word', idiomMemorizedIds: 'idiom' };
  const type = e && map[e.key];
  if (!type) return;
  const set = safeParseIdSet(e.key) || new Set();
  if (type === 'pattern') memorizedPatterns = set;
  if (type === 'word') memorizedWords = migrateIdSet(set, typeof wordIdAliases !== 'undefined' ? wordIdAliases : null);
  if (type === 'idiom') memorizedIdioms = migrateIdSet(set, typeof idiomIdAliases !== 'undefined' ? idiomIdAliases : null);
  if (typeof refreshMemorizedViews === 'function') refreshMemorizedViews();
});
/** 암기 기록이 바뀐 뒤 지금 보고 있는 목록·상세·진행률을 다시 그린다 */
function refreshMemorizedViews() {
  if (typeof updatePatternProgress === 'function') updatePatternProgress();
  if (typeof updateWordProgress === 'function') updateWordProgress();
  if (typeof updateIdiomProgress === 'function') updateIdiomProgress();
  const page = history.state ? history.state.page : 'home';
  const R = { patterns: 'renderPatternList', words: 'renderWordList', idioms: 'renderIdiomList' };
  if (R[page] && typeof window[R[page]] === 'function') window[R[page]]();
  const D = { 'pattern-detail': ['pattern-memorized-checkbox', () => memorizedPatterns.has(currentPatternId)], 'word-detail': ['word-memorized-checkbox', () => memorizedWords.has(currentWordId)], 'idiom-detail': ['idiom-memorized-checkbox', () => memorizedIdioms.has(currentIdiomId)] };
  if (D[page]) { const chk = document.getElementById(D[page][0]); if (chk) chk.checked = D[page][1](); }
}
// 사파리는 한동안 열지 않은 사이트의 저장 기록을 지우기도 한다: 지워지지 않게 요청해 둔다 (지원하는 브라우저만)
try { if (navigator.storage && navigator.storage.persisted) navigator.storage.persisted().then(p => { if (!p && navigator.storage.persist) navigator.storage.persist().catch(() => {}); }).catch(() => {}); } catch (e) {}

function saveDataLocally(type) {
  if (type === 'pattern') { localStorage.setItem("patternMemorizedIds", JSON.stringify(Array.from(memorizedPatterns))); if(typeof updatePatternProgress === 'function') updatePatternProgress(); }
  if (type === 'word') { localStorage.setItem("wordMemorizedIds", JSON.stringify(Array.from(memorizedWords))); if(typeof updateWordProgress === 'function') updateWordProgress(); }
  if (type === 'idiom') { localStorage.setItem("idiomMemorizedIds", JSON.stringify(Array.from(memorizedIdioms))); if(typeof updateIdiomProgress === 'function') updateIdiomProgress(); }
}
function saveData(type) { saveDataLocally(type); }

// 2. 모달 UI 관리
function openSyncModal(pushHistory = true) { 
  if (pushHistory) { 
    const currentPage = history.state ? history.state.page : 'home'; 
    history.pushState({ page: currentPage, modal: 'sync' }, "", "#sync"); 
  } 
  document.getElementById("sync-modal").classList.remove("hidden");
  updateSyncUI();
}

function closeSyncModal() { 
  if (history.state && history.state.modal === 'sync') history.back(); 
  else document.getElementById("sync-modal").classList.add("hidden"); 
}

function updateSyncUI() {
  const statusEl = document.getElementById("sync-status");
  const loginArea = document.getElementById("login-area");
  const loggedInArea = document.getElementById("logged-in-area");

  // 모달용 아이콘 (사이즈 24px로 적당하게 조정)
  const syncIconSvg = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0;">
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 12c0-3.6 2-6.9 5.4-8.6 2.5-1.3 5.5-1.3 8.1.1L21.5 8M22 12c0 3.6-2 6.9-5.4 8.6-2.5 1.3-5.5 1.3-8.1-.1L2.5 16"/>
    </svg>
  `;

  if (currentUser) {
    // displayName/lastSyncTime 은 외부 입력이므로 textContent로 안전하게 주입
    const nameSpan = document.createElement('span');
    nameSpan.style.cssText = 'color:#38bdf8; font-weight:bold;';
    nameSpan.textContent = currentUser.displayName || 'User';
    statusEl.innerHTML = '';
    statusEl.appendChild(nameSpan);
    statusEl.appendChild(document.createTextNode('님 환영합니다.'));
    statusEl.appendChild(document.createElement('br'));
    statusEl.appendChild(document.createTextNode('아래 버튼을 눌러 동기화하세요.'));

    loginArea.classList.add("hidden");
    loggedInArea.classList.remove("hidden");

    const lastSync = localStorage.getItem("lastSyncTime");
    const lastSyncText = lastSync ? "최근: " + lastSync : "동기화 기록 없음";

    loggedInArea.innerHTML = `
      <div style="display:flex; justify-content:center; margin-bottom:15px;">
        <button id="modal-sync-btn" class="sync-card-btn" onclick="handleSmartSyncUI('modal')" style="width:auto; min-width:140px; padding:12px 20px; display:flex; flex-direction:row; align-items:center; gap:10px; border-radius:30px;">
          ${syncIconSvg}
          <div class="sync-label" style="font-size:0.95rem; margin:0;">지금 동기화</div>
        </button>
      </div>
      <p id="modal-last-sync" style="text-align:center; font-size:0.75rem; color:#64748b; margin-top:5px;"></p>
      <div style="text-align:center; margin-top:20px; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">
         <button onclick="handleLogout()" style="background:none; border:none; color:var(--text-sub); text-decoration:underline; cursor:pointer; font-size:0.8rem;">로그아웃</button>
      </div>
    `;
    const lastSyncEl = document.getElementById('modal-last-sync');
    if (lastSyncEl) lastSyncEl.textContent = lastSyncText;
  } else {
    statusEl.innerHTML = "로그인하면 모든 기기에서<br>학습 기록이 자동으로 합쳐집니다.";
    loginArea.classList.remove("hidden");
    loggedInArea.classList.add("hidden");
  }
}

// 3. 통합 동기화 핸들러 (UI 효과 + 로직 실행)
let isSyncing = false; // 버튼 연타 시 동기화가 겹쳐 실행되며 완료 알림이 중복되는 것 방지
async function handleSmartSyncUI(source) {
  if (!currentUser) { openSyncModal(); return; }
  if (isSyncing) return;
  isSyncing = true;

  const headerBtn = document.getElementById("header-sync-btn");
  const modalBtn = document.getElementById("modal-sync-btn");
  
  if(headerBtn) headerBtn.classList.add("spinning");
  // 모달 버튼 내부의 SVG를 찾아서 회전시키기 (버튼 전체가 아니라 아이콘만)
  if(modalBtn) {
      const svg = modalBtn.querySelector("svg");
      if(svg) svg.classList.add("spinning");
  }

  try {
    await performSmartSync();
    alert("✅ 동기화 완료!\n모든 학습 내용이 최신 상태입니다.");
  } catch (e) {
    console.error(e);
    alert(navigator.onLine === false ? "인터넷에 연결되어 있지 않아요.\n연결한 뒤 다시 눌러 주세요." : "동기화하지 못했어요. 잠시 뒤 다시 눌러 주세요.\n(" + ((e && e.message) || e) + ")");
  } finally {
    isSyncing = false;
    setTimeout(() => {
      if(headerBtn) headerBtn.classList.remove("spinning");
      if(modalBtn) {
          const svg = modalBtn.querySelector("svg");
          if(svg) svg.classList.remove("spinning");
      }
    }, 500);
  }
}

// 4. 스마트 동기화 로직 (양방향 병합)
async function performSmartSync() {
  if (!currentUser || !db) throw new Error("연결 오류");
  const uid = currentUser.uid;
  const docRef = db.collection("users").doc(uid);

  const doc = await withTimeout(docRef.get(), 20000);
  let serverData = doc.exists ? doc.data() : {};

  // 암기 기록 합치기: 항목마다 마지막으로 바꾼 쪽이 이긴다 (해제한 암기가 다시 살아나지 않게)
  // 서버 필드가 배열이 아닌 경우(손상/타 버전 기록)는 빈 기록으로 본다
  const serverLog = (serverData.memLog && typeof serverData.memLog === 'object') ? serverData.memLog : {};
  const localLog = memLogLoad(), mergedLog = {};
  const mergeType = (type, localSet, serverArr, aliases) => {
    const r = mergeMemorized(localSet, Array.isArray(serverArr) ? serverArr : [], localLog[type] || {}, (serverLog[type] && typeof serverLog[type] === 'object') ? serverLog[type] : {});
    mergedLog[type] = r.log;
    return migrateIdSet(r.set, aliases);   // 다른 기기(예전 버전)에서 올린 기록의 옛 ID도 남은 항목 ID로 이어 준다
  };
  const mergedPatterns = mergeType('pattern', memorizedPatterns, serverData.patterns, null);
  const mergedWords = mergeType('word', memorizedWords, serverData.words, typeof wordIdAliases !== 'undefined' ? wordIdAliases : null);
  const mergedIdioms = mergeType('idiom', memorizedIdioms, serverData.idioms, typeof idiomIdAliases !== 'undefined' ? idiomIdAliases : null);
  memLogSave(mergedLog);

  // 설정 합치기: 더 최근에 바꾼 쪽을 쓴다 (예전에는 서버 값이 늘 이겨서, 한 번 동기화한 뒤로는 바꾼 설정이 되돌아갔다)
  const serverSettings = serverData.settings || {};
  const localTs = parseInt(localStorage.getItem("settingsUpdatedAt") || "0", 10) || 0;
  const serverTs = typeof serverSettings.updatedAt === 'number' ? serverSettings.updatedAt : (Object.keys(serverSettings).length ? 1 : 0);   // 시각이 없는 예전 기록은 아주 오래된 것으로
  const oldPuzzleLevel = selectedPuzzleLevel;
  if (serverTs > localTs) {
    // 서버 값의 형식이 어긋나면(손상/타 버전 기록) 목소리·글자 크기가 깨지므로 유효한 값만 반영
    // 개별 브라우저 음성 선택은 없어졌으므로(기본 음성 1개 + AI 음성) 서버의 voiceIndex는 반영하지 않는다
    if (typeof serverSettings.rate === 'number' && serverSettings.rate > 0) userRate = serverSettings.rate;
    if (typeof serverSettings.autoPlay === 'boolean') autoPlayEnabled = serverSettings.autoPlay;
    if (['small', 'medium', 'large'].includes(serverSettings.fontSize)) userFontSize = serverSettings.fontSize;
    if (typeof serverSettings.wordLevel === 'number') selectedWordLevel = serverSettings.wordLevel;
    if (typeof serverSettings.idiomLevel === 'number') selectedIdiomLevel = serverSettings.idiomLevel;
    if (typeof serverSettings.puzzleLevel === 'number') selectedPuzzleLevel = serverSettings.puzzleLevel;
    if (typeof serverSettings.filterPattern === 'boolean') patternStudyingOnly = serverSettings.filterPattern;
    if (typeof serverSettings.filterWord === 'boolean') wordStudyingOnly = serverSettings.filterWord;
    if (typeof serverSettings.filterIdiom === 'boolean') idiomStudyingOnly = serverSettings.filterIdiom;
    try { localStorage.setItem("settingsUpdatedAt", String(serverTs)); } catch (e) {}
  }

  // 병합된 설정값을 로컬에도 영속화
  try {
    localStorage.setItem("ttsSettings", JSON.stringify({
      voiceIndex: userVoiceIndex, rate: userRate, autoPlay: autoPlayEnabled, fontSize: userFontSize,
      neuralVoice: (typeof neuralVoice !== 'undefined') ? neuralVoice : null   // 기기별로 받은 음성 선택 유지
    }));
    localStorage.setItem("selectedWordLevel", String(selectedWordLevel));
    localStorage.setItem("selectedIdiomLevel", String(selectedIdiomLevel));
    localStorage.setItem("selectedPuzzleLevel", String(selectedPuzzleLevel));
    localStorage.setItem("patternStudyingOnly", String(patternStudyingOnly));
    localStorage.setItem("wordStudyingOnly", String(wordStudyingOnly));
    localStorage.setItem("idiomStudyingOnly", String(idiomStudyingOnly));
  } catch (e) { console.warn(e); }
  if (typeof applyFontSizeToBody === 'function') applyFontSizeToBody(userFontSize);

  const finalSettings = {
    voiceIndex: userVoiceIndex, rate: userRate, autoPlay: autoPlayEnabled, fontSize: userFontSize,
    wordLevel: selectedWordLevel, idiomLevel: selectedIdiomLevel,
    filterPattern: patternStudyingOnly, filterWord: wordStudyingOnly, filterIdiom: idiomStudyingOnly,
    puzzleLevel: selectedPuzzleLevel,
    updatedAt: Math.max(localTs, serverTs)
  };

  memorizedPatterns = mergedPatterns;
  memorizedWords = mergedWords;
  memorizedIdioms = mergedIdioms;

  saveDataLocally('pattern');
  saveDataLocally('word');
  saveDataLocally('idiom');

  refreshMemorizedViews();   // 보고 있는 목록·상세 체크·진행률
  if (selectedPuzzleLevel !== oldPuzzleLevel && typeof puzzleList !== 'undefined') {   // 퍼즐 레벨이 바뀌었으면 문제를 새 레벨로
    puzzleList = []; currentPuzzleAnswer = "";
    if ((history.state ? history.state.page : 'home') === 'puzzle' && typeof initPuzzle === 'function') initPuzzle();
  }

  const payload = {
    updatedAt: new Date().toISOString(),
    email: currentUser.email,
    patterns: Array.from(mergedPatterns),   // (예전 버전 앱도 읽을 수 있게 지금 상태 그대로)
    words: Array.from(mergedWords),
    idioms: Array.from(mergedIdioms),
    memLog: mergedLog,
    settings: finalSettings
  };

  // merge:true 로 다른 필드를 보존
  await withTimeout(docRef.set(payload, { merge: true }), 20000);
  localStorage.setItem("lastSyncTime", new Date().toLocaleString());
  updateSyncUI();
}

// 응답이 오지 않으면 돌기만 하지 않게 시간 제한
function withTimeout(p, ms) {
  let t = null;
  return Promise.race([p, new Promise((_, rej) => { t = setTimeout(() => rej(new Error("응답이 너무 늦어요")), ms); })]).finally(() => clearTimeout(t));
}
// 구글 로그인이 막힌 앱 안 브라우저 (카카오톡은 시작할 때 바깥 브라우저로 넘긴다)
function inAppBrowserName() {
  const ua = navigator.userAgent || "";
  if (/NAVER\(inapp|; NAVER/i.test(ua)) return "네이버 앱";
  if (/Instagram/i.test(ua)) return "인스타그램";
  if (/FBAN|FBAV|FB_IAB/i.test(ua)) return "페이스북";
  if (/ Line\//i.test(ua)) return "라인";
  if (/BAND\//i.test(ua)) return "밴드";
  if (/DaumApps/i.test(ua)) return "다음 앱";
  if (/KAKAOTALK/i.test(ua)) return "카카오톡";
  return "";
}
const LOGIN_ERRORS = {
  "auth/popup-blocked": "팝업이 막혀 로그인 창을 열지 못했어요.\n브라우저에서 이 사이트의 팝업을 허용한 뒤 다시 눌러 주세요.",
  "auth/network-request-failed": "인터넷 연결을 확인하고 다시 해 주세요.",
  "auth/operation-not-supported-in-this-environment": "이 브라우저에서는 구글 로그인을 쓸 수 없어요.\n크롬이나 사파리에서 열어 주세요.",
  "auth/web-storage-unsupported": "이 브라우저에서는 구글 로그인을 쓸 수 없어요.\n크롬이나 사파리에서 열어 주세요."
};

// 5. 인증
async function handleGoogleLogin() {
  if (!auth) return alert("로그인 기능을 불러오지 못했어요.\n인터넷 연결을 확인하고 앱을 다시 열어 주세요.");
  const inApp = inAppBrowserName();
  if (inApp) { alert(`${inApp} 안에서는 구글 로그인이 막혀 있어요.\n오른쪽 위(또는 아래) 메뉴의 '다른 브라우저로 열기'로 크롬·사파리에서 연 뒤 로그인해 주세요.`); return; }
  try {
    const r = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (r && r.user) { currentUser = r.user; updateSyncUI(); handleSmartSyncUI('login'); }   // 로그인하면 바로 이 기기 기록과 합친다
  } catch (error) {
    const code = (error && error.code) || "";
    if (/popup-closed-by-user|cancelled-popup-request/.test(code)) return;   // 사용자가 창을 닫았다
    alert(LOGIN_ERRORS[code] || ("로그인하지 못했어요. 잠시 뒤 다시 해 주세요.\n(" + ((error && error.message) || error) + ")"));
  }
}

async function handleLogout() {
  if (!auth) return;
  try { await auth.signOut(); alert("로그아웃 되었습니다."); updateSyncUI(); } 
  catch (error) { console.error(error); }
}