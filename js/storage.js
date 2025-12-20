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
function loadMemorizedData() {
  try {
    const pRaw = localStorage.getItem("patternMemorizedIds");
    if (pRaw) memorizedPatterns = new Set(JSON.parse(pRaw));
    const wRaw = localStorage.getItem("wordMemorizedIds");
    if (wRaw) memorizedWords = new Set(JSON.parse(wRaw));
    const iRaw = localStorage.getItem("idiomMemorizedIds");
    if (iRaw) memorizedIdioms = new Set(JSON.parse(iRaw));

    const pStudy = localStorage.getItem("patternStudyingOnly");
    if(pStudy !== null) patternStudyingOnly = (pStudy === 'true');
    const wStudy = localStorage.getItem("wordStudyingOnly");
    if(wStudy !== null) wordStudyingOnly = (wStudy === 'true');
    const iStudy = localStorage.getItem("idiomStudyingOnly");
    if(iStudy !== null) idiomStudyingOnly = (iStudy === 'true');
    
    const wLevel = localStorage.getItem("selectedWordLevel");
    if (wLevel !== null) selectedWordLevel = parseInt(wLevel);
    const iLevel = localStorage.getItem("selectedIdiomLevel");
    if (iLevel !== null) selectedIdiomLevel = parseInt(iLevel);
    const pzLevel = localStorage.getItem("selectedPuzzleLevel");
    if (pzLevel !== null) selectedPuzzleLevel = parseInt(pzLevel);

    currentPatternId = localStorage.getItem("currentPatternId");
    currentWordId = localStorage.getItem("currentWordId");
    currentIdiomId = localStorage.getItem("currentIdiomId");
    currentConvId = localStorage.getItem("currentConvId");
  } catch (e) { console.warn(e); }
}

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
    statusEl.innerHTML = `<span style="color:#38bdf8; font-weight:bold;">${currentUser.displayName || "User"}</span>님 환영합니다.<br>아래 버튼을 눌러 동기화하세요.`;
    loginArea.classList.add("hidden");
    loggedInArea.classList.remove("hidden");
    
    // 버튼 스타일: 패딩 축소, 가로 배치 느낌, 심플하게 변경
    loggedInArea.innerHTML = `
      <div style="display:flex; justify-content:center; margin-bottom:15px;">
        <button id="modal-sync-btn" class="sync-card-btn" onclick="handleSmartSyncUI('modal')" style="width:auto; min-width:140px; padding:12px 20px; display:flex; flex-direction:row; align-items:center; gap:10px; border-radius:30px;">
          ${syncIconSvg}
          <div class="sync-label" style="font-size:0.95rem; margin:0;">지금 동기화</div>
        </button>
      </div>
      <p style="text-align:center; font-size:0.75rem; color:#64748b; margin-top:5px;">
         ${localStorage.getItem("lastSyncTime") ? "최근: " + localStorage.getItem("lastSyncTime") : "동기화 기록 없음"}
      </p>
      <div style="text-align:center; margin-top:20px; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">
         <button onclick="handleLogout()" style="background:none; border:none; color:var(--text-sub); text-decoration:underline; cursor:pointer; font-size:0.8rem;">로그아웃</button>
      </div>
    `;
  } else {
    statusEl.innerHTML = "로그인하면 모든 기기에서<br>학습 기록이 자동으로 합쳐집니다.";
    loginArea.classList.remove("hidden");
    loggedInArea.classList.add("hidden");
  }
}

// 3. 통합 동기화 핸들러 (UI 효과 + 로직 실행)
async function handleSmartSyncUI(source) {
  if (!currentUser) { openSyncModal(); return; }

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
    alert("동기화 실패: " + e.message);
  } finally {
    setTimeout(() => {
      if(headerBtn) headerBtn.classList.remove("spinning");
      if(modalBtn) {
          const svg = modalBtn.querySelector("svg");
          if(svg) svg.classList.remove("spinning");
      }
    }, 500);
  }
}

// 4. 스마트 동기화 로직 (실제 데이터 처리)
async function performSmartSync() {
  if (!currentUser || !db) throw new Error("연결 오류");
  const uid = currentUser.uid;
  const docRef = db.collection("users").doc(uid);
  
  const doc = await docRef.get();
  let serverData = doc.exists ? doc.data() : {};

  const mergedPatterns = new Set([...memorizedPatterns, ...(serverData.patterns || [])]);
  const mergedWords = new Set([...memorizedWords, ...(serverData.words || [])]);
  const mergedIdioms = new Set([...memorizedIdioms, ...(serverData.idioms || [])]);

  const finalSettings = { 
    voiceIndex: userVoiceIndex, rate: userRate, autoPlay: autoPlayEnabled, fontSize: userFontSize, 
    wordLevel: selectedWordLevel, idiomLevel: selectedIdiomLevel, 
    filterPattern: patternStudyingOnly, filterWord: wordStudyingOnly, filterIdiom: idiomStudyingOnly, 
    puzzleLevel: selectedPuzzleLevel 
  };

  memorizedPatterns = mergedPatterns;
  memorizedWords = mergedWords;
  memorizedIdioms = mergedIdioms;
  
  saveDataLocally('pattern');
  saveDataLocally('word');
  saveDataLocally('idiom');
  
  if(typeof updatePatternProgress === 'function') updatePatternProgress();
  if(typeof updateWordProgress === 'function') updateWordProgress();
  if(typeof updateIdiomProgress === 'function') updateIdiomProgress();
  
  const currPage = history.state ? history.state.page : 'home';
  if (currPage === 'patterns') renderPatternList();
  if (currPage === 'words') renderWordList();
  if (currPage === 'idioms') renderIdiomList();

  const payload = {
    updatedAt: new Date().toISOString(),
    email: currentUser.email,
    patterns: Array.from(mergedPatterns),
    words: Array.from(mergedWords),
    idioms: Array.from(mergedIdioms),
    settings: finalSettings
  };

  await docRef.set(payload);
  localStorage.setItem("lastSyncTime", new Date().toLocaleString());
  updateSyncUI();
}

// 5. 인증
async function handleGoogleLogin() {
  if (!auth) return alert("오류: Firebase 인증 로드 실패");
  try {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  } catch (error) { alert("로그인 실패: " + error.message); }
}

async function handleLogout() {
  if (!auth) return;
  try { await auth.signOut(); alert("로그아웃 되었습니다."); updateSyncUI(); } 
  catch (error) { console.error(error); }
}