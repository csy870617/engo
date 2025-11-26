// ==========================================
// 🚨 카카오톡 인앱 브라우저 탈출 및 초기 설정
// ==========================================
(function() {
  const ua = navigator.userAgent.toLowerCase();
  const url = location.href;
  if (ua.indexOf('kakaotalk') > -1) {
    if (ua.indexOf('android') > -1) {
      location.href = 'intent://' + url.replace(/https?:\/\//i, '') + '#Intent;scheme=https;end';
    }
    // 아이폰은 인앱 유지 (안내 불필요)
  }
})();

// ==========================================
// 1. 전역 변수 및 데이터 준비
// ==========================================
const pages = [
  "home", "patterns", "pattern-detail", "words", "word-detail",
  "idioms", "idiom-detail", "conversations", "conv-detail",
  "shadowing", "puzzle", "speaking"
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

// 🔽 [추가] 뒤로 가기 감지용 플래그
let isBackAction = false; 

// ==========================================
// 2. 네비게이션 (히스토리 API 적용)
// ==========================================

// 🔽 [추가] 브라우저 뒤로 가기 버튼 감지 (popstate 이벤트)
window.onpopstate = function(event) {
  // 히스토리 상태가 있으면 그 페이지로, 없으면 홈으로
  const page = (event.state && event.state.page) ? event.state.page : 'home';
  
  isBackAction = true; // goTo 함수에서 history.pushState 중복 방지
  goTo(page);
  isBackAction = false; // 플래그 초기화
};

function goTo(page) {
  // 🔽 [추가] 히스토리 스택 쌓기 (뒤로 가기가 아닐 때만)
  if (!isBackAction) {
    // 현재 페이지와 같지 않을 때만 기록 추가
    if (!history.state || history.state.page !== page) {
      history.pushState({ page: page }, "", "#" + page);
    }
  }

  // 화면 전환 로직
  pages.forEach((p) => {
    const el = document.getElementById("page-" + p);
    if (!el) return;
    if (p === page) el.classList.remove("hidden");
    else el.classList.add("hidden");
  });

  if (page === "patterns") renderPatternList();
  if (page === "words") renderWordList();
  if (page === "idioms") renderIdiomList();
  if (page === "conversations") renderConversationList();
  if (page === "puzzle") initPuzzle();
  if (page === "speaking") initSpeaking();
  if (page === "shadowing") initShadowing();
}

// ==========================================
// 3. 데이터 저장/로드 (LocalStorage)
// ==========================================
function loadMemorizedData() {
  try {
    const pRaw = localStorage.getItem("patternMemorizedIds");
    if (pRaw) memorizedPatterns = new Set(JSON.parse(pRaw));
  } catch (e) { console.warn(e); }

  try {
    const wRaw = localStorage.getItem("wordMemorizedIds");
    if (wRaw) memorizedWords = new Set(JSON.parse(wRaw));
  } catch (e) { console.warn(e); }

  try {
    const iRaw = localStorage.getItem("idiomMemorizedIds");
    if (iRaw) memorizedIdioms = new Set(JSON.parse(iRaw));
  } catch (e) { console.warn(e); }
}

function saveData(type) {
  if (type === 'pattern') {
    localStorage.setItem("patternMemorizedIds", JSON.stringify(Array.from(memorizedPatterns)));
    updatePatternProgress();
  }
  if (type === 'word') {
    localStorage.setItem("wordMemorizedIds", JSON.stringify(Array.from(memorizedWords)));
    updateWordProgress();
  }
  if (type === 'idiom') {
    localStorage.setItem("idiomMemorizedIds", JSON.stringify(Array.from(memorizedIdioms)));
    updateIdiomProgress();
  }
}

// ==========================================
// 4. 패턴 (Patterns) 로직
// ==========================================
function renderPatternList() {
  const container = document.getElementById("pattern-list");
  if (!container) return;
  if (typeof patternData === "undefined") return;

  const keyword = (document.getElementById("pattern-search")?.value || "").toLowerCase();
  container.innerHTML = "";

  const filtered = patternData.filter((p) => {
    const matchText = (p.title + p.desc).toLowerCase().includes(keyword);
    const matchStudy = !patternStudyingOnly || !memorizedPatterns.has(p.id);
    return matchText && matchStudy;
  });

  currentPatternList = filtered;

  filtered.forEach((p) => {
    const div = document.createElement("div");
    div.className = "list-item";
    if (memorizedPatterns.has(p.id)) div.classList.add("memorized");
    div.onclick = () => openPattern(p.id);

    const left = document.createElement("div");
    left.innerHTML = `<div class="list-item-title">${p.title}</div><div class="list-item-sub">${p.desc}</div>`;

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "pattern-check";
    check.checked = memorizedPatterns.has(p.id);
    check.onclick = (e) => {
      e.stopPropagation();
      if (check.checked) memorizedPatterns.add(p.id);
      else memorizedPatterns.delete(p.id);
      saveData('pattern');
      if (patternStudyingOnly) renderPatternList();
    };

    div.appendChild(left);
    div.appendChild(check);
    container.appendChild(div);
  });
  if (filtered.length === 0) container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
  updatePatternProgress();
}

function updatePatternProgress() {
  if (typeof patternData === "undefined") return;
  const label = document.getElementById("pattern-progress");
  const bar = document.getElementById("pattern-progress-bar");
  const total = patternData.length;
  const done = patternData.filter(p => memorizedPatterns.has(p.id)).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  if (label) label.textContent = `패턴 암기 ${done} / ${total}개 (${percent}%)`;
  if (bar) bar.style.width = `${percent}%`;
}

function openPattern(id) {
  currentPatternId = id;
  const pattern = patternData.find(p => p.id === id);
  if (!pattern) return;
  document.getElementById("pattern-title").textContent = pattern.title;
  document.getElementById("pattern-desc").textContent = pattern.desc;
  const memCheck = document.getElementById("pattern-memorized-checkbox");
  if (memCheck) memCheck.checked = memorizedPatterns.has(id);
  document.getElementById("pattern-toggle-kr").checked = true;
  renderPatternExamples();
  goTo("pattern-detail");

  // 🔊 [수정] 딜레이 없이 즉시 실행 (브라우저 차단 방지)
  if (autoPlayEnabled) {
      playPatternExamples();
    }
}

function renderPatternExamples() {
  const pattern = patternData.find(p => p.id === currentPatternId);
  if (!pattern) return;
  const showKr = document.getElementById("pattern-toggle-kr").checked;
  const container = document.getElementById("pattern-examples");
  container.innerHTML = "";
  pattern.examples.forEach(ex => {
    const row = document.createElement("div");
    row.className = "sentence-row";
    row.innerHTML = `<div class="sentence-text"><div>${ex.en}</div>${showKr ? `<div class="sentence-kr">${ex.kr}</div>` : ''}</div>`;
    const btn = document.createElement("button");
    btn.className = "btn small";
    btn.textContent = "▶";
    btn.onclick = () => speakText(ex.en);
    row.appendChild(btn);
    container.appendChild(row);
  });
}

function togglePatternStudying() {
  patternStudyingOnly = !patternStudyingOnly;
  const btn = document.getElementById("pattern-studying-btn");
  if (btn) btn.classList.toggle("active", patternStudyingOnly);
  renderPatternList();
}

function togglePatternMemorizedDetail() {
  const chk = document.getElementById("pattern-memorized-checkbox");
  if (chk.checked) memorizedPatterns.add(currentPatternId);
  else memorizedPatterns.delete(currentPatternId);
  saveData('pattern');
  renderPatternList();
}

function playPatternExamples() {
  const p = patternData.find(x => x.id === currentPatternId);
  if (p) speakText(p.examples.map(e => e.en).join(". "));
}

// ==========================================
// 5. 단어 (Words)
// ==========================================
function renderWordList() {
  const container = document.getElementById("word-list");
  if (!container || typeof wordData === "undefined") return;
  const keyword = (document.getElementById("word-search")?.value || "").toLowerCase();
  container.innerHTML = "";
  const filtered = wordData.filter(w => {
    const matchText = (w.word + w.meaning).toLowerCase().includes(keyword);
    const level = parseInt(w.id.match(/^L(\d)-/)?.[1] || 0);
    const matchLevel = selectedWordLevel === 0 || level === selectedWordLevel;
    const matchStudy = !wordStudyingOnly || !memorizedWords.has(w.id);
    return matchText && matchLevel && matchStudy;
  });
  currentWordList = filtered;
  filtered.forEach(w => {
    const div = document.createElement("div");
    div.className = "list-item";
    if (memorizedWords.has(w.id)) div.classList.add("memorized");
    div.onclick = () => openWord(w.id);
    div.innerHTML = `<div><div class="list-item-title">${w.word} - ${w.meaning}</div><div class="list-item-sub">${w.examples?.[0]?.kr || ""}</div></div>`;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "word-check";
    check.checked = memorizedWords.has(w.id);
    check.onclick = (e) => {
      e.stopPropagation();
      if (check.checked) memorizedWords.add(w.id); else memorizedWords.delete(w.id);
      saveData('word');
      if (wordStudyingOnly) renderWordList();
    };
    div.appendChild(check);
    container.appendChild(div);
  });
  if (filtered.length === 0) container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
  updateWordProgress();
}

function updateWordProgress() {
  if (typeof wordData === "undefined") return;
  const pool = selectedWordLevel === 0 ? wordData : wordData.filter(w => parseInt(w.id.match(/^L(\d)-/)?.[1] || 0) === selectedWordLevel);
  const total = pool.length;
  const done = pool.filter(w => memorizedWords.has(w.id)).length;
  const percent = total === 0 ? 0 : Math.round((done/total)*100);
  const label = document.getElementById("word-progress");
  const bar = document.getElementById("word-progress-bar");
  if (label) label.textContent = `현재 레벨 기준 암기 ${done} / ${total}개 (${percent}%)`;
  if (bar) bar.style.width = `${percent}%`;
}

function setWordLevel(lvl) {
  selectedWordLevel = lvl;
  document.querySelectorAll("[data-word-level-btn]").forEach(b => b.classList.toggle("active", parseInt(b.dataset.wordLevelBtn) === lvl));
  renderWordList();
}

function toggleWordStudying() {
  wordStudyingOnly = !wordStudyingOnly;
  document.getElementById("word-studying-btn").classList.toggle("active", wordStudyingOnly);
  renderWordList();
}

function openWord(id) {
  currentWordId = id;
  const w = wordData.find(x => x.id === id);
  if (!w) return;
  document.getElementById("word-title").textContent = `${w.word} - ${w.meaning}`;
  document.getElementById("word-desc").textContent = w.examples?.[0]?.kr || w.meaning;
  document.getElementById("word-memorized-checkbox").checked = memorizedWords.has(id);
  document.getElementById("word-toggle-kr").checked = true;
  renderWordExamples();
  goTo("word-detail");

  // 🔊 [수정] 즉시 실행
  if (autoPlayEnabled) {
      const textToRead = `${w.word}. ${w.examples.map(e => e.en).join(". ")}`;
      speakText(textToRead);
    }
}

function renderWordExamples() {
  const w = wordData.find(x => x.id === currentWordId);
  if (!w) return;
  const showKr = document.getElementById("word-toggle-kr").checked;
  const container = document.getElementById("word-examples");
  container.innerHTML = "";
  w.examples.forEach(ex => {
    const row = document.createElement("div");
    row.className = "sentence-row";
    row.innerHTML = `<div class="sentence-text"><div>${ex.en}</div>${showKr ? `<div class="sentence-kr">${ex.kr}</div>` : ''}</div>`;
    const btn = document.createElement("button");
    btn.className = "btn small";
    btn.textContent = "▶";
    btn.onclick = () => speakText(ex.en);
    row.appendChild(btn);
    container.appendChild(row);
  });
}

function toggleWordMemorizedDetail() {
  const chk = document.getElementById("word-memorized-checkbox");
  if (chk.checked) memorizedWords.add(currentWordId); else memorizedWords.delete(currentWordId);
  saveData('word');
  renderWordList();
}

function playWordExamples() {
  const w = wordData.find(x => x.id === currentWordId);
  if (w) speakText(w.examples.map(e => e.en).join(". "));
}

// ==========================================
// 6. 숙어 (Idioms)
// ==========================================
function renderIdiomList() {
  const container = document.getElementById("idiom-list");
  if (!container) return;
  const keyword = (document.getElementById("idiom-search")?.value || "").toLowerCase();
  container.innerHTML = "";
  const filtered = idiomData.filter(i => {
    const matchText = (i.idiom + i.meaning).toLowerCase().includes(keyword);
    const matchLevel = selectedIdiomLevel === 0 || i.level === selectedIdiomLevel;
    const matchStudy = !idiomStudyingOnly || !memorizedIdioms.has(i.id);
    return matchText && matchLevel && matchStudy;
  });
  currentIdiomList = filtered;
  filtered.forEach(i => {
    const div = document.createElement("div");
    div.className = "list-item";
    if (memorizedIdioms.has(i.id)) div.classList.add("memorized");
    div.onclick = () => openIdiom(i.id);
    div.innerHTML = `<div><div class="list-item-title">${i.idiom} - ${i.meaning}</div><div class="list-item-sub">${i.desc}</div></div>`;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "idiom-check";
    check.checked = memorizedIdioms.has(i.id);
    check.onclick = (e) => {
      e.stopPropagation();
      if (check.checked) memorizedIdioms.add(i.id); else memorizedIdioms.delete(i.id);
      saveData('idiom');
      if (idiomStudyingOnly) renderIdiomList();
    };
    div.appendChild(check);
    container.appendChild(div);
  });
  if (filtered.length === 0) container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
  updateIdiomProgress();
}

function updateIdiomProgress() {
  const pool = selectedIdiomLevel === 0 ? idiomData : idiomData.filter(i => i.level === selectedIdiomLevel);
  const total = pool.length;
  const done = pool.filter(i => memorizedIdioms.has(i.id)).length;
  const percent = total === 0 ? 0 : Math.round((done/total)*100);
  document.getElementById("idiom-progress").textContent = `현재 레벨 기준 암기 ${done} / ${total}개 (${percent}%)`;
  document.getElementById("idiom-progress-bar").style.width = `${percent}%`;
}

function setIdiomLevel(lvl) {
  selectedIdiomLevel = lvl;
  document.querySelectorAll("[data-idiom-level-btn]").forEach(b => b.classList.toggle("active", parseInt(b.dataset.idiomLevelBtn) === lvl));
  renderIdiomList();
}

function toggleIdiomStudying() {
  idiomStudyingOnly = !idiomStudyingOnly;
  document.getElementById("idiom-studying-btn").classList.toggle("active", idiomStudyingOnly);
  renderIdiomList();
}

function openIdiom(id) {
  currentIdiomId = id;
  const item = idiomData.find(x => x.id === id);
  if (!item) return;
  document.getElementById("idiom-title").textContent = `${item.idiom} - ${item.meaning}`;
  document.getElementById("idiom-desc").textContent = item.desc;
  document.getElementById("idiom-memorized-checkbox").checked = memorizedIdioms.has(id);
  document.getElementById("idiom-toggle-kr").checked = true;
  renderIdiomExamples();
  goTo("idiom-detail");

  // 🔊 [수정] 즉시 실행
  if (autoPlayEnabled) {
      const textToRead = `${item.idiom}. ${item.examples.map(e => e.en).join(". ")}`;
      speakText(textToRead);
    }
}

function renderIdiomExamples() {
  const item = idiomData.find(x => x.id === currentIdiomId);
  if (!item) return;
  const showKr = document.getElementById("idiom-toggle-kr").checked;
  const container = document.getElementById("idiom-examples");
  container.innerHTML = "";
  item.examples.forEach(ex => {
    const row = document.createElement("div");
    row.className = "sentence-row";
    row.innerHTML = `<div class="sentence-text"><div>${ex.en}</div>${showKr ? `<div class="sentence-kr">${ex.kr}</div>` : ''}</div>`;
    const btn = document.createElement("button");
    btn.className = "btn small";
    btn.textContent = "▶";
    btn.onclick = () => speakText(ex.en);
    row.appendChild(btn);
    container.appendChild(row);
  });
}

function toggleIdiomMemorizedDetail() {
  const chk = document.getElementById("idiom-memorized-checkbox");
  if (chk.checked) memorizedIdioms.add(currentIdiomId); else memorizedIdioms.delete(currentIdiomId);
  saveData('idiom');
  renderIdiomList();
}

function playIdiomExamples() {
  const item = idiomData.find(x => x.id === currentIdiomId);
  if (item) speakText(item.examples.map(e => e.en).join(". "));
}

// ==========================================
// 7. 대화 (Conversation) & 섀도잉
// ==========================================
function renderConversationList() {
  const container = document.getElementById("conv-list");
  if (!container || typeof conversationData === "undefined") return;
  const keyword = (document.getElementById("conv-search")?.value || "").toLowerCase();
  container.innerHTML = "";
  const filtered = conversationData.filter(c => (c.title + c.lines.map(l => l.en).join(" ") + c.lines.map(l => l.kr).join(" ")).toLowerCase().includes(keyword));
  currentConvList = filtered;
  filtered.forEach(c => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.onclick = () => openConversation(c.id);
    div.innerHTML = `<div><div class="list-item-title">${c.title}</div><div class="list-item-sub">${c.lines[0]?.en || ""}</div></div><div>▶</div>`;
    container.appendChild(div);
  });
  if (filtered.length === 0) container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
}

function openConversation(id) {
  currentConvId = id;
  const conv = conversationData.find(c => c.id === id);
  if (!conv) return;
  document.getElementById("conv-title").textContent = conv.title;
  document.getElementById("conv-toggle-kr").checked = true;
  renderConversationDetail();
  goTo("conv-detail");

  // 🔊 [수정] 즉시 실행
  if (autoPlayEnabled) {
      playConversationAll();
    }
}

function renderConversationDetail() {
  const conv = conversationData.find(c => c.id === currentConvId);
  if (!conv) return;
  const showKr = document.getElementById("conv-toggle-kr").checked;
  const container = document.getElementById("conv-lines");
  container.innerHTML = "";
  conv.lines.forEach(line => {
    const row = document.createElement("div");
    row.className = "sentence-row";
    row.innerHTML = `<div class="sentence-text"><div><b>${line.speaker}:</b> ${line.en}</div>${showKr ? `<div class="sentence-kr">${line.kr}</div>` : ''}</div>`;
    const btn = document.createElement("button");
    btn.className = "btn small";
    btn.textContent = "▶";
    btn.onclick = () => speakText(line.en);
    row.appendChild(btn);
    container.appendChild(row);
  });
}

function playConversationAll() {
  const conv = conversationData.find(c => c.id === currentConvId);
  if (conv) speakText(conv.lines.map(l => l.en).join(" "));
}

let shadowingIndex = 0;
function initShadowing() { shadowingIndex = 0; updateShadowingText(); }
function updateShadowingText() {
  const conv = conversationData.find(c => c.id === currentConvId);
  const el = document.getElementById("shadowing-text");
  if (!conv) return;
  const line = conv.lines[shadowingIndex];
  el.textContent = `${line.speaker}: ${line.en}`;
}
function playShadowingCurrent() {
  const conv = conversationData.find(c => c.id === currentConvId);
  if (conv) speakText(conv.lines[shadowingIndex].en);
}
function nextShadowing() {
  const conv = conversationData.find(c => c.id === currentConvId);
  if (!conv) return;
  shadowingIndex = (shadowingIndex + 1) % conv.lines.length;
  updateShadowingText();
}

// 이동 헬퍼
function moveItemInList(currentId, list, offset, openFunc) {
  if (!list || list.length === 0) return;
  const idx = list.findIndex(item => item.id === currentId);
  if (idx === -1) return;
  const nextIdx = idx + offset;
  if (nextIdx >= 0 && nextIdx < list.length) openFunc(list[nextIdx].id);
  else alert(offset > 0 ? "마지막 항목입니다." : "첫 번째 항목입니다.");
}
function movePattern(o) { moveItemInList(currentPatternId, currentPatternList, o, openPattern); }
function moveWord(o) { moveItemInList(currentWordId, currentWordList, o, openWord); }
function moveIdiom(o) { moveItemInList(currentIdiomId, currentIdiomList, o, openIdiom); }
function moveConv(o) { moveItemInList(currentConvId, currentConvList, o, openConversation); }


// ==========================================
// 8. 문장 퍼즐 & 말하기 (Speaking)
// ==========================================
let currentPuzzleAnswer = "";
let puzzleTargetTokens = [];
let puzzleShuffledTokens = [];

function initPuzzle() {
  if (!currentPuzzleAnswer) nextPuzzle();
  else renderPuzzle();
}

function nextPuzzle() {
  let pool = [];
  if (typeof conversationData !== "undefined") {
    conversationData.forEach(c => c.lines.forEach(l => {
      if (l.en.split(" ").length > 2) pool.push({ en: l.en, kr: l.kr, src: "대화" });
    }));
  }
  if (typeof patternData !== "undefined") {
    patternData.forEach(p => p.examples.forEach(ex => {
      if (ex.en.split(" ").length > 2) pool.push({ en: ex.en, kr: ex.kr, src: "패턴" });
    }));
  }
  if (pool.length === 0) return document.getElementById("puzzle-question").textContent = "데이터 부족";
  const target = pool[Math.floor(Math.random() * pool.length)];
  currentPuzzleAnswer = target.en.trim();
  // 🔽 [수정] 출처 숨기고 한글 문제만 표시
  document.getElementById("puzzle-question").textContent = target.kr;

  puzzleTargetTokens = [];
  puzzleShuffledTokens = currentPuzzleAnswer.split(" ").sort(() => Math.random() - 0.5);
  document.getElementById("puzzle-feedback").textContent = "";
  renderPuzzle();
}

function renderPuzzle() {
  const bank = document.getElementById("puzzle-bank");
  const target = document.getElementById("puzzle-target");
  bank.innerHTML = ""; target.innerHTML = "";
  
  const currentBank = [...puzzleShuffledTokens];
  puzzleTargetTokens.forEach(t => {
    const idx = currentBank.indexOf(t);
    if (idx > -1) currentBank.splice(idx, 1);
  });
  
  currentBank.forEach(t => {
    const span = document.createElement("span");
    span.className = "token";
    span.textContent = t;
    span.onclick = () => { puzzleTargetTokens.push(t); renderPuzzle(); };
    bank.appendChild(span);
  });
  puzzleTargetTokens.forEach((t, i) => {
    const span = document.createElement("span");
    span.className = "token";
    span.textContent = t;
    span.onclick = () => { puzzleTargetTokens.splice(i, 1); renderPuzzle(); };
    target.appendChild(span);
  });
}

function checkPuzzle() {
  const user = puzzleTargetTokens.join(" ");
  const fb = document.getElementById("puzzle-feedback");
  if (user === currentPuzzleAnswer) {
    fb.textContent = "정답입니다! 🎉";
    fb.className = "feedback ok";
    speakText(currentPuzzleAnswer);
  } else {
    fb.textContent = "오답입니다.";
    fb.className = "feedback error";
  }
}
function resetPuzzle() { puzzleTargetTokens = []; document.getElementById("puzzle-feedback").textContent = ""; renderPuzzle(); }

// Speaking
let speakingData = [];
let currentSpeaking = null;
let recognition = null;
let isRecording = false;

function initSpeaking() {
  speakingData = [];
  if (typeof conversationData !== "undefined") {
    conversationData.forEach(c => {
      for (let i=0; i<c.lines.length-1; i++) {
        if (c.lines[i].en.trim().endsWith("?")) speakingData.push({ q: c.lines[i], a: c.lines[i+1] });
      }
    });
  }
  initSpeechRecognition();
  nextSpeaking();
}

function initSpeechRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return;
  recognition = new SR();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.onstart = () => { isRecording = true; updateMicUI(); };
  recognition.onend = () => { isRecording = false; updateMicUI(); };
  recognition.onresult = (e) => {
    const txt = e.results[0][0].transcript;
    document.getElementById("user-speech-result").textContent = `🗣 내 답변: "${txt}"`;
    document.getElementById("user-speech-result").classList.remove("hidden");
  };
}
function toggleRecording() {
  if (!recognition) return alert("PC 크롬 브라우저를 사용해주세요.");
  if (isRecording) recognition.stop();
  else {
    document.getElementById("user-speech-result").textContent = "";
    recognition.start();
  }
}
function updateMicUI() {
  const btn = document.getElementById("mic-btn");
  const st = document.getElementById("mic-status");
  if (isRecording) { btn.classList.add("recording"); st.textContent = "듣고 있습니다..."; }
  else { btn.classList.remove("recording"); st.textContent = "눌러서 말하기"; }
}
function nextSpeaking() {
  if (speakingData.length === 0) return;
  
  // 랜덤으로 질문 선택
  currentSpeaking = speakingData[Math.floor(Math.random() * speakingData.length)];
  
  // 화면에 질문/답변 텍스트 업데이트
  document.getElementById("speaking-q-en").textContent = currentSpeaking.q.en;
  document.getElementById("speaking-q-kr").textContent = currentSpeaking.q.kr;
  document.getElementById("speaking-a-en").textContent = currentSpeaking.a.en;
  document.getElementById("speaking-a-kr").textContent = currentSpeaking.a.kr;
  
  // 정답 가리기 및 초기화
  document.getElementById("speaking-answer-toggle").checked = false;
  toggleSpeakingAnswer();
  document.getElementById("user-speech-result").classList.add("hidden");

  // 🔊 [추가] 질문 자동 재생 (설정이 켜져 있을 때만)
  if (autoPlayEnabled) {
    playSpeakingQuestion();
  }
}
function toggleSpeakingAnswer() {
  const chk = document.getElementById("speaking-answer-toggle");
  const area = document.getElementById("speaking-answer-area");
  if (chk.checked) area.classList.remove("hidden"); else area.classList.add("hidden");
}
function playSpeakingQuestion() { if(currentSpeaking) speakText(currentSpeaking.q.en); }
function playSpeakingAnswer() { if(currentSpeaking) speakText(currentSpeaking.a.en); }


// ==========================================
// 9. TTS 설정 및 학습내용 저장/불러오기
// ==========================================
let ttsVoices = [];
let userVoiceIndex = null;
let userRate = 1.0;
let autoPlayEnabled = true;

function loadVoices() {
  ttsVoices = window.speechSynthesis.getVoices();
  const sel = document.getElementById("tts-voice-select");
  if(sel) {
    sel.innerHTML = '<option value="">기본 목소리</option>';
    ttsVoices.forEach((v, i) => {
      if(v.lang.includes("en")) {
        const opt = document.createElement("option");
        opt.value = i; opt.textContent = `${v.name} (${v.lang})`;
        sel.appendChild(opt);
      }
    });
  }
  const raw = localStorage.getItem("ttsSettings");
  if(raw) {
    const d = JSON.parse(raw);
    userVoiceIndex = d.voiceIndex;
    userRate = d.rate || 1.0;
    if (d.autoPlay !== undefined) autoPlayEnabled = d.autoPlay;
  }
}
if("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = loadVoices;

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = userRate || 1.0;
  if (ttsVoices.length === 0) ttsVoices = window.speechSynthesis.getVoices();
  if (userVoiceIndex !== null && ttsVoices[userVoiceIndex]) u.voice = ttsVoices[userVoiceIndex];
  window.speechSynthesis.speak(u);
}

function openSettingsModal() {
  document.getElementById("settings-modal").classList.remove("hidden");
  const sel = document.getElementById("tts-voice-select");
  const rng = document.getElementById("tts-rate-range");
  const chk = document.getElementById("tts-autoplay-toggle");
  if(sel) sel.value = userVoiceIndex !== null ? userVoiceIndex : "";
  if(rng) rng.value = userRate;
  if(chk) chk.checked = autoPlayEnabled;
  updateRateLabel();
}
function closeSettingsModal() { document.getElementById("settings-modal").classList.add("hidden"); }
function updateRateLabel() { document.getElementById("tts-rate-label").textContent = document.getElementById("tts-rate-range").value + "x"; }
function previewVoiceSettings() {
  updateRateLabel();
  const tempVoice = document.getElementById("tts-voice-select").value;
  const tempRate = document.getElementById("tts-rate-range").value;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance("Hello, voice test.");
  u.lang = "en-US";
  u.rate = parseFloat(tempRate);
  if(tempVoice && ttsVoices[tempVoice]) u.voice = ttsVoices[tempVoice];
  window.speechSynthesis.speak(u);
}
function saveSettings() {
  userVoiceIndex = document.getElementById("tts-voice-select").value || null;
  userRate = parseFloat(document.getElementById("tts-rate-range").value);
  autoPlayEnabled = document.getElementById("tts-autoplay-toggle").checked;
  localStorage.setItem("ttsSettings", JSON.stringify({ 
    voiceIndex: userVoiceIndex, 
    rate: userRate,
    autoPlay: autoPlayEnabled 
  }));
  closeSettingsModal();
}

// ---------------------------------------------------------
// [수정됨] 학습내용 저장/불러오기 (수동 ID/PW 방식)
// ---------------------------------------------------------

// ⚠️ 본인의 Firebase 키로 유지하세요!
const firebaseConfig = {
  apiKey: "AIzaSyCdr88Bomc9SQzZBj03iih3epxivhPL63I",
  authDomain: "engo-9c8e3.firebaseapp.com",
  projectId: "engo-9c8e3",
  storageBucket: "engo-9c8e3.firebasestorage.app",
  messagingSenderId: "252712209702",
  appId: "1:252712209702:web:5ed2ccb9f07230824d45e7",
  measurementId: "G-KHE07H3HKR"
};

let db;
if (typeof firebase !== "undefined") {
  try { firebase.initializeApp(firebaseConfig); db = firebase.firestore(); } catch (e) { console.error(e); }
}

function openSyncModal() {
  document.getElementById("sync-modal").classList.remove("hidden");
  // 이전에 입력한 아이디가 있으면 자동 입력
  const lastId = localStorage.getItem("lastSyncId");
  if(lastId) document.getElementById("sync-id").value = lastId;
}
function closeSyncModal() { document.getElementById("sync-modal").classList.add("hidden"); }

// 데이터 업로드 (저장)
async function uploadData() {
  const id = document.getElementById("sync-id").value.trim();
  const pw = document.getElementById("sync-pw").value.trim();
  
  if(!id || !pw) return alert("아이디와 비밀번호를 모두 입력해주세요.");
  if(!db) return alert("데이터베이스 연결 실패");

  try {
    const ref = db.collection("users").doc(id);
    const doc = await ref.get();

    // 이미 존재하는 아이디면 비번 확인
    if(doc.exists) {
      if(doc.data().password !== pw) {
        return alert("비밀번호가 틀렸습니다.\n(다른 사람이 사용 중인 아이디일 수 있습니다.)");
      }
      if(!confirm("기존 데이터를 덮어쓰고 저장하시겠습니까?")) return;
    } else {
      // 새로운 아이디면 생성 확인
      if(!confirm(`'${id}' 계정을 새로 만들고 저장하시겠습니까?`)) return;
    }

    // 저장할 데이터 구성
    await ref.set({
      password: pw, // 비번 저장 (간단한 방식)
      updatedAt: new Date().toISOString(),
      patterns: Array.from(memorizedPatterns),
      words: Array.from(memorizedWords),
      idioms: Array.from(memorizedIdioms),
      settings: { voiceIndex: userVoiceIndex, rate: userRate, autoPlay: autoPlayEnabled }
    });

    localStorage.setItem("lastSyncId", id); // 아이디 기억
    alert("✅ 학습내용이 안전하게 저장되었습니다.");
    closeSyncModal();
  } catch(e) {
    console.error(e);
    alert("오류 발생: " + e.message);
  }
}

// 데이터 다운로드 (불러오기)
async function downloadData() {
  const id = document.getElementById("sync-id").value.trim();
  const pw = document.getElementById("sync-pw").value.trim();

  if(!id || !pw) return alert("아이디와 비밀번호를 입력해주세요.");
  if(!db) return alert("데이터베이스 연결 실패");

  try {
    const ref = db.collection("users").doc(id);
    const doc = await ref.get();

    if(!doc.exists) return alert("존재하지 않는 아이디입니다.");
    if(doc.data().password !== pw) return alert("비밀번호가 틀렸습니다.");

    if(!confirm("현재 기기의 학습 기록을 지우고,\n서버에 저장된 내용을 불러오시겠습니까?")) return;

    const d = doc.data();
    
    // 데이터 복원
    if(d.patterns) memorizedPatterns = new Set(d.patterns);
    if(d.words) memorizedWords = new Set(d.words);
    if(d.idioms) memorizedIdioms = new Set(d.idioms);
    if(d.settings) {
      userVoiceIndex = d.settings.voiceIndex;
      userRate = d.settings.rate;
      if(d.settings.autoPlay !== undefined) autoPlayEnabled = d.settings.autoPlay;
    }
    
    // 로컬 스토리지 업데이트
    saveDataLocally('pattern'); 
    saveDataLocally('word'); 
    saveDataLocally('idiom');
    localStorage.setItem("ttsSettings", JSON.stringify({ voiceIndex: userVoiceIndex, rate: userRate, autoPlay: autoPlayEnabled }));
    localStorage.setItem("lastSyncId", id);
    
    // 화면 갱신
    updatePatternProgress(); updateWordProgress(); updateIdiomProgress();
    
    // 현재 보고 있는 리스트가 있다면 새로고침
    const currPage = history.state ? history.state.page : 'home';
    if (currPage === 'patterns') renderPatternList();
    if (currPage === 'words') renderWordList();
    if (currPage === 'idioms') renderIdiomList();
    
    alert("✅ 학습내용을 성공적으로 불러왔습니다.");
    closeSyncModal();
  } catch(e) {
    console.error(e);
    alert("오류 발생: " + e.message);
  }
}

// 로컬 저장 전용 함수 (체크박스 클릭 시 호출됨)
function saveData(type) {
  saveDataLocally(type);
}

function saveDataLocally(type) {
  if (type === 'pattern') {
    localStorage.setItem("patternMemorizedIds", JSON.stringify(Array.from(memorizedPatterns)));
    updatePatternProgress();
  }
  if (type === 'word') {
    localStorage.setItem("wordMemorizedIds", JSON.stringify(Array.from(memorizedWords)));
    updateWordProgress();
  }
  if (type === 'idiom') {
    localStorage.setItem("idiomMemorizedIds", JSON.stringify(Array.from(memorizedIdioms)));
    updateIdiomProgress();
  }
}

// ==========================================
// 12. TTS 엔진 깨우기 및 초기화
// ==========================================
document.body.addEventListener('click', function unlockTTS() {
  if (window.speechSynthesis) {
    const u = new SpeechSynthesisUtterance(""); 
    u.volume = 0; 
    window.speechSynthesis.speak(u);
  }
  document.body.removeEventListener('click', unlockTTS);
}, { once: true });

loadMemorizedData();
loadVoices();
if (!history.state) history.replaceState({ page: 'home' }, "", "#home");
if (typeof patternData !== "undefined") updatePatternProgress();
if (typeof wordData !== "undefined") updateWordProgress();
if (typeof idiomData !== "undefined") updateIdiomProgress();
goTo("home");
