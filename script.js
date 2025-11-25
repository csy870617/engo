// --------------------------
// 1. 전역 변수 및 데이터 준비
// --------------------------

// SPA 네비게이션 페이지 목록
const pages = [
  "home", "patterns", "pattern-detail", "words", "word-detail",
  "idioms", "idiom-detail", "conversations", "conv-detail",
  "shadowing", "puzzle", "speaking"
];

// 숙어 데이터 합치기 (idiom.js 파일이 있을 때만)
const idiomData = [
  ...(typeof idiomsLevel1 !== "undefined" ? idiomsLevel1 : []),
  ...(typeof idiomsLevel2 !== "undefined" ? idiomsLevel2 : []),
  ...(typeof idiomsLevel3 !== "undefined" ? idiomsLevel3 : []),
  ...(typeof idiomsLevel4 !== "undefined" ? idiomsLevel4 : []),
  ...(typeof idiomsLevel5 !== "undefined" ? idiomsLevel5 : [])
];

// 현재 선택된 아이템 ID 저장
let currentPatternId = null;
let currentConvId = null;
let currentWordId = null;
let currentIdiomId = null;

// 필터링된 현재 리스트 저장 (이전/다음 이동용)
let currentPatternList = [];
let currentWordList = [];
let currentIdiomList = [];
let currentConvList = [];

// 단어/숙어/패턴 상태 관리
let selectedWordLevel = 0;      // 0 = 전체
let memorizedWords = new Set();
let wordStudyingOnly = false;

let selectedIdiomLevel = 0;
let memorizedIdioms = new Set();
let idiomStudyingOnly = false;

let memorizedPatterns = new Set();
let patternStudyingOnly = false;


// --------------------------
// 2. 네비게이션 (SPA)
// --------------------------
function goTo(page) {
  pages.forEach((p) => {
    const el = document.getElementById("page-" + p);
    if (!el) return;
    if (p === page) el.classList.remove("hidden");
    else el.classList.add("hidden");
  });

  // 페이지 진입 시 초기화 로직
  if (page === "patterns") renderPatternList();
  if (page === "words") renderWordList();
  if (page === "idioms") renderIdiomList();
  if (page === "conversations") renderConversationList();
  if (page === "puzzle") initPuzzle();
  if (page === "speaking") initSpeaking();
  if (page === "shadowing") initShadowing();
}


// --------------------------
// 3. 데이터 저장/로드 (LocalStorage)
// --------------------------
function loadMemorizedData() {
  // 패턴
  try {
    const pRaw = localStorage.getItem("patternMemorizedIds");
    if (pRaw) memorizedPatterns = new Set(JSON.parse(pRaw));
  } catch (e) { console.warn(e); }

  // 단어
  try {
    const wRaw = localStorage.getItem("wordMemorizedIds");
    if (wRaw) memorizedWords = new Set(JSON.parse(wRaw));
  } catch (e) { console.warn(e); }

  // 숙어
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


// --------------------------
// 4. 패턴 (Patterns) 로직
// --------------------------
function renderPatternList() {
  const container = document.getElementById("pattern-list");
  if (!container) return;
  
  // 데이터 체크
  if (typeof patternData === "undefined") {
    container.innerHTML = '<div class="list-item"><div>pattern.js 파일이 연결되지 않았습니다.</div></div>';
    return;
  }

  const input = document.getElementById("pattern-search");
  const keyword = (input ? input.value : "").toLowerCase();
  container.innerHTML = "";

  const filtered = patternData.filter((p) => {
    const matchText = (p.title + p.desc).toLowerCase().includes(keyword);
    const matchStudy = !patternStudyingOnly || !memorizedPatterns.has(p.id);
    return matchText && matchStudy;
  });

  currentPatternList = filtered; // 리스트 저장

  filtered.forEach((p) => {
    const div = document.createElement("div");
    div.className = "list-item";
    if (memorizedPatterns.has(p.id)) div.classList.add("memorized");

    // 상세 이동
    div.onclick = () => openPattern(p.id);

    const left = document.createElement("div");
    left.innerHTML = `<div class="list-item-title">${p.title}</div><div class="list-item-sub">${p.desc}</div>`;

    // 체크박스
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
  const labelEl = document.getElementById("pattern-progress");
  const barEl = document.getElementById("pattern-progress-bar");
  if (!labelEl || !barEl) return;

  const total = patternData.length;
  const done = patternData.filter(p => memorizedPatterns.has(p.id)).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  labelEl.textContent = `패턴 암기 ${done} / ${total}개 (${percent}%)`;
  barEl.style.width = `${percent}%`;
}

function openPattern(id) {
  if (typeof patternData === "undefined") return;
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
  if (!currentPatternId) return;
  const chk = document.getElementById("pattern-memorized-checkbox");
  if (chk.checked) memorizedPatterns.add(currentPatternId);
  else memorizedPatterns.delete(currentPatternId);
  saveData('pattern');
  renderPatternList();
}

function playPatternExamples() {
  const pattern = patternData.find(p => p.id === currentPatternId);
  if (pattern) speakText(pattern.examples.map(ex => ex.en).join(". "));
}


// --------------------------
// 5. 단어 (Words) 로직
// --------------------------
function renderWordList() {
  const container = document.getElementById("word-list");
  if (!container) return;
  if (typeof wordData === "undefined") {
    container.innerHTML = '<div class="list-item"><div>word.js 파일이 없습니다.</div></div>';
    return;
  }

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

    const left = document.createElement("div");
    left.innerHTML = `<div class="list-item-title">${w.word} - ${w.meaning}</div><div class="list-item-sub">${w.examples?.[0]?.kr || ""}</div>`;

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "word-check";
    check.checked = memorizedWords.has(w.id);
    check.onclick = (e) => {
      e.stopPropagation();
      if (check.checked) memorizedWords.add(w.id);
      else memorizedWords.delete(w.id);
      saveData('word');
      if (wordStudyingOnly) renderWordList();
    };

    div.appendChild(left);
    div.appendChild(check);
    container.appendChild(div);
  });
  
  if (filtered.length === 0) container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
  updateWordProgress();
}

function updateWordProgress() {
  if (typeof wordData === "undefined") return;
  const label = document.getElementById("word-progress");
  const bar = document.getElementById("word-progress-bar");
  
  const pool = selectedWordLevel === 0 ? wordData : wordData.filter(w => parseInt(w.id.match(/^L(\d)-/)?.[1] || 0) === selectedWordLevel);
  const total = pool.length;
  const done = pool.filter(w => memorizedWords.has(w.id)).length;
  const percent = total === 0 ? 0 : Math.round((done/total)*100);

  label.textContent = `현재 레벨 기준 암기 ${done} / ${total}개 (${percent}%)`;
  bar.style.width = `${percent}%`;
}

function setWordLevel(lvl) {
  selectedWordLevel = lvl;
  document.querySelectorAll("[data-word-level-btn]").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.wordLevelBtn) === lvl);
  });
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
  if (!currentWordId) return;
  const chk = document.getElementById("word-memorized-checkbox");
  if (chk.checked) memorizedWords.add(currentWordId);
  else memorizedWords.delete(currentWordId);
  saveData('word');
  renderWordList();
}

function playWordExamples() {
  const w = wordData.find(x => x.id === currentWordId);
  if (w) speakText(w.examples.map(e => e.en).join(". "));
}


// --------------------------
// 6. 숙어 (Idioms) 로직
// --------------------------
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

    const left = document.createElement("div");
    left.innerHTML = `<div class="list-item-title">${i.idiom} - ${i.meaning}</div><div class="list-item-sub">${i.desc}</div>`;

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "idiom-check";
    check.checked = memorizedIdioms.has(i.id);
    check.onclick = (e) => {
      e.stopPropagation();
      if (check.checked) memorizedIdioms.add(i.id);
      else memorizedIdioms.delete(i.id);
      saveData('idiom');
      if (idiomStudyingOnly) renderIdiomList();
    };

    div.appendChild(left);
    div.appendChild(check);
    container.appendChild(div);
  });

  if (filtered.length === 0) container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
  updateIdiomProgress();
}

function updateIdiomProgress() {
  const label = document.getElementById("idiom-progress");
  const bar = document.getElementById("idiom-progress-bar");
  
  const pool = selectedIdiomLevel === 0 ? idiomData : idiomData.filter(i => i.level === selectedIdiomLevel);
  const total = pool.length;
  const done = pool.filter(i => memorizedIdioms.has(i.id)).length;
  const percent = total === 0 ? 0 : Math.round((done/total)*100);

  label.textContent = `현재 레벨 기준 암기 ${done} / ${total}개 (${percent}%)`;
  bar.style.width = `${percent}%`;
}

function setIdiomLevel(lvl) {
  selectedIdiomLevel = lvl;
  document.querySelectorAll("[data-idiom-level-btn]").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.idiomLevelBtn) === lvl);
  });
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
  if (!currentIdiomId) return;
  const chk = document.getElementById("idiom-memorized-checkbox");
  if (chk.checked) memorizedIdioms.add(currentIdiomId);
  else memorizedIdioms.delete(currentIdiomId);
  saveData('idiom');
  renderIdiomList();
}

function playIdiomExamples() {
  const item = idiomData.find(x => x.id === currentIdiomId);
  if (item) speakText(item.examples.map(e => e.en).join(". "));
}


// --------------------------
// 7. 대화 (Conversation) 로직
// --------------------------
function renderConversationList() {
  const container = document.getElementById("conv-list");
  if (!container) return;
  if (typeof conversationData === "undefined") {
    container.innerHTML = '<div class="list-item"><div>conversation.js 파일이 없습니다.</div></div>';
    return;
  }

  const keyword = (document.getElementById("conv-search")?.value || "").toLowerCase();
  container.innerHTML = "";

  const filtered = conversationData.filter(c => 
    (c.title + c.lines.map(l => l.en).join(" ") + c.lines.map(l => l.kr).join(" ")).toLowerCase().includes(keyword)
  );

  currentConvList = filtered;

  filtered.forEach(c => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.onclick = () => openConversation(c.id);
    div.innerHTML = `
      <div>
        <div class="list-item-title">${c.title}</div>
        <div class="list-item-sub">${c.lines[0]?.en || ""}</div>
      </div>
      <div>▶</div>
    `;
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
    row.innerHTML = `
      <div class="sentence-text">
        <div><b>${line.speaker}:</b> ${line.en}</div>
        ${showKr ? `<div class="sentence-kr">${line.kr}</div>` : ''}
      </div>
    `;
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

// --------------------------
// 8. 섀도잉 & 이동 헬퍼
// --------------------------
let shadowingIndex = 0;
function initShadowing() {
  shadowingIndex = 0;
  updateShadowingText();
}
function updateShadowingText() {
  const conv = conversationData.find(c => c.id === currentConvId);
  const el = document.getElementById("shadowing-text");
  if (!conv || !conv.lines.length) return el.textContent = "대화 없음";
  el.textContent = `${conv.lines[shadowingIndex].speaker}: ${conv.lines[shadowingIndex].en}`;
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

function moveItemInList(currentId, list, offset, openFunc) {
  if (!list || list.length === 0) return;
  const idx = list.findIndex(item => item.id === currentId);
  if (idx === -1) return;
  const nextIdx = idx + offset;
  if (nextIdx >= 0 && nextIdx < list.length) {
    openFunc(list[nextIdx].id);
  } else {
    alert(offset > 0 ? "마지막 항목입니다." : "첫 번째 항목입니다.");
  }
}

function movePattern(o) { moveItemInList(currentPatternId, currentPatternList, o, openPattern); }
function moveWord(o) { moveItemInList(currentWordId, currentWordList, o, openWord); }
function moveIdiom(o) { moveItemInList(currentIdiomId, currentIdiomList, o, openIdiom); }
function moveConv(o) { moveItemInList(currentConvId, currentConvList, o, openConversation); }


// --------------------------
// 9. 문장 퍼즐 (업그레이드: 패턴 + 대화)
// --------------------------
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
      if (l.en.split(" ").length > 2) pool.push({ en: l.en, kr: l.kr, src: "대화: " + c.title });
    }));
  }
  if (typeof patternData !== "undefined") {
    patternData.forEach(p => p.examples.forEach(ex => {
      if (ex.en.split(" ").length > 2) pool.push({ en: ex.en, kr: ex.kr, src: "패턴: " + p.title });
    }));
  }

  if (pool.length === 0) {
    document.getElementById("puzzle-question").textContent = "데이터가 부족합니다.";
    return;
  }

  const target = pool[Math.floor(Math.random() * pool.length)];
  currentPuzzleAnswer = target.en.trim();
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

  // Bank (남은 토큰)
  const currentBank = [...puzzleShuffledTokens];
  puzzleTargetTokens.forEach(t => {
    const idx = currentBank.indexOf(t);
    if (idx > -1) currentBank.splice(idx, 1);
  });

  currentBank.forEach(token => {
    const span = document.createElement("span");
    span.className = "token";
    span.textContent = token;
    span.onclick = () => { puzzleTargetTokens.push(token); renderPuzzle(); };
    bank.appendChild(span);
  });

  // Target (선택한 토큰)
  puzzleTargetTokens.forEach((token, idx) => {
    const span = document.createElement("span");
    span.className = "token";
    span.textContent = token;
    span.onclick = () => { puzzleTargetTokens.splice(idx, 1); renderPuzzle(); };
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
    fb.textContent = "오답입니다. 다시 시도해보세요.";
    fb.className = "feedback error";
  }
}
function resetPuzzle() {
  puzzleTargetTokens = [];
  document.getElementById("puzzle-feedback").textContent = "";
  renderPuzzle();
}


// --------------------------
// 10. 말하기 연습 (Speaking)
// --------------------------
let speakingData = [];
let currentSpeaking = null;
let recognition = null;
let isRecording = false;

function initSpeaking() {
  speakingData = [];
  if (typeof conversationData !== "undefined") {
    conversationData.forEach(c => {
      for (let i=0; i<c.lines.length-1; i++) {
        if (c.lines[i].en.trim().endsWith("?")) {
          speakingData.push({ q: c.lines[i], a: c.lines[i+1] });
        }
      }
    });
  }
  initSpeechRecognition();
  nextSpeaking();
}

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  
  recognition.onstart = () => { isRecording = true; updateMicUI(); };
  recognition.onend = () => { isRecording = false; updateMicUI(); };
  recognition.onresult = (e) => {
    const txt = e.results[0][0].transcript;
    const box = document.getElementById("user-speech-result");
    box.textContent = `🗣 내 답변: "${txt}"`;
    box.classList.remove("hidden");
  };
}

function toggleRecording() {
  if (!recognition) return alert("PC 크롬/엣지 브라우저를 사용해주세요.");
  if (isRecording) recognition.stop();
  else {
    document.getElementById("user-speech-result").textContent = "";
    recognition.start();
  }
}

function updateMicUI() {
  const btn = document.getElementById("mic-btn");
  const status = document.getElementById("mic-status");
  if (isRecording) {
    btn.classList.add("recording");
    status.textContent = "듣고 있습니다...";
  } else {
    btn.classList.remove("recording");
    status.textContent = "버튼을 누르고 말씀하세요.";
  }
}

function nextSpeaking() {
  if (speakingData.length === 0) return;
  currentSpeaking = speakingData[Math.floor(Math.random() * speakingData.length)];
  
  document.getElementById("speaking-q-en").textContent = currentSpeaking.q.en;
  document.getElementById("speaking-q-kr").textContent = currentSpeaking.q.kr;
  document.getElementById("speaking-a-en").textContent = currentSpeaking.a.en;
  document.getElementById("speaking-a-kr").textContent = currentSpeaking.a.kr;
  
  document.getElementById("speaking-answer-toggle").checked = false;
  toggleSpeakingAnswer();
  document.getElementById("user-speech-result").classList.add("hidden");
}

function toggleSpeakingAnswer() {
  const chk = document.getElementById("speaking-answer-toggle");
  const area = document.getElementById("speaking-answer-area");
  if (chk.checked) area.classList.remove("hidden");
  else area.classList.add("hidden");
}

function playSpeakingQuestion() { if(currentSpeaking) speakText(currentSpeaking.q.en); }
function playSpeakingAnswer() { if(currentSpeaking) speakText(currentSpeaking.a.en); }


// --------------------------
// 11. TTS 설정
// --------------------------
let ttsVoices = [];
let userVoiceIndex = null;
let userRate = 1.0;

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
  }
}
if("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = loadVoices;

function speakText(text) {
  if(!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = userRate;
  if(userVoiceIndex !== null && ttsVoices[userVoiceIndex]) u.voice = ttsVoices[userVoiceIndex];
  window.speechSynthesis.speak(u);
}

function openSettingsModal() {
  document.getElementById("settings-modal").classList.remove("hidden");
  const sel = document.getElementById("tts-voice-select");
  const rng = document.getElementById("tts-rate-range");
  if(sel) sel.value = userVoiceIndex !== null ? userVoiceIndex : "";
  if(rng) rng.value = userRate;
  updateRateLabel();
}
function closeSettingsModal() { document.getElementById("settings-modal").classList.add("hidden"); }
function updateRateLabel() {
  document.getElementById("tts-rate-label").textContent = document.getElementById("tts-rate-range").value + "x";
}
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
  localStorage.setItem("ttsSettings", JSON.stringify({ voiceIndex: userVoiceIndex, rate: userRate }));
  closeSettingsModal();
}


// --------------------------
// 12. 초기화 (Initialization)
// --------------------------
loadMemorizedData();
loadVoices();

// 초기 데이터 로드 상태 반영
if (typeof patternData !== "undefined") updatePatternProgress();
if (typeof wordData !== "undefined") updateWordProgress();
if (typeof idiomData !== "undefined") updateIdiomProgress();

// 홈 화면으로 이동
goTo("home");