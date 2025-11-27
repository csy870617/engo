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
  }
})();

// ==========================================
// 1. 전역 변수 및 데이터 준비
// ==========================================
const pages = [
  "home", "patterns", "pattern-detail", "words", "word-detail",
  "idioms", "idiom-detail", "conversations", "conv-detail",
  "shadowing-list", "shadowing", "puzzle"
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

let currentShadowingId = null;
let shadowingLineIndex = 0;

let isBackAction = false; 

// ==========================================
// 2. 네비게이션 (히스토리 API 적용)
// ==========================================
window.onpopstate = function(event) {
  const page = (event.state && event.state.page) ? event.state.page : 'home';
  isBackAction = true;
  goTo(page);
  isBackAction = false;
};

function goTo(page) {
  // [수정됨] 화면 이동 시 재생 중인 TTS 즉시 중지 🛑
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  if (!isBackAction) {
    if (!history.state || history.state.page !== page) {
      history.pushState({ page: page }, "", "#" + page);
    }
  }

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
  if (page === "shadowing-list") renderShadowingList();
  if (page === "puzzle") initPuzzle();
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
  if (!container || typeof patternData === "undefined") return;

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
    btn.className = "btn-small";
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
    btn.className = "btn-small";
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
    btn.className = "btn-small";
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
// 7. 대화 (Conversation) & 쉐도잉 진입
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
    btn.className = "btn-small";
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

// 대화 상세 화면에서 쉐도잉 시작
function startShadowingFromConv(id) {
  currentShadowingId = id;
  shadowingLineIndex = 0;
  goTo("shadowing");
  
  isBlindMode = true; 
  isHideKr = false;
  updateShadowingOptionsUI();
  updateShadowingUI();
}

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
// 8. 쉐도잉 (Shadowing) - 메인 기능화 (업그레이드)
// ==========================================

// 쉐도잉 옵션 상태
let isBlindMode = false;
let isHideKr = false;

// 쉐도잉 목록 렌더링
function renderShadowingList() {
  const container = document.getElementById("shadowing-list-container");
  if (!container || typeof conversationData === "undefined") return;
  
  const keyword = (document.getElementById("shadowing-search")?.value || "").toLowerCase();
  container.innerHTML = "";
  
  const filtered = conversationData.filter(c => 
    (c.title + c.lines.map(l => l.en).join(" ")).toLowerCase().includes(keyword)
  );

  filtered.forEach(c => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.onclick = () => {
      currentShadowingId = c.id;
      shadowingLineIndex = 0;
      goTo("shadowing");
      
      // 진입 시 기본값 설정
      isBlindMode = true; 
      isHideKr = false;
      updateShadowingOptionsUI();
      updateShadowingUI();
    };
    div.innerHTML = `
      <div>
        <div class="list-item-title">🗣️ ${c.title}</div>
        <div class="list-item-sub">총 ${c.lines.length}문장</div>
      </div>
      <div style="color:var(--accent); font-size:0.9rem;">Start ▶</div>
    `;
    container.appendChild(div);
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
  }
}

// 쉐도잉 옵션 토글
function toggleShadowingOption(type) {
  if (type === 'blind') isBlindMode = !isBlindMode;
  if (type === 'hideKr') isHideKr = !isHideKr;
  updateShadowingOptionsUI();
  updateShadowingUI();
}

// 옵션 버튼 스타일 업데이트
function updateShadowingOptionsUI() {
  const btnBlind = document.getElementById("btn-blind-mode");
  const btnHideKr = document.getElementById("btn-hide-kr");
  
  if(btnBlind) btnBlind.classList.toggle("active", isBlindMode);
  if(btnHideKr) btnHideKr.classList.toggle("active", isHideKr);
}

// 쉐도잉 화면 내용 업데이트
function updateShadowingUI() {
  const conv = conversationData.find(c => c.id === currentShadowingId);
  if (!conv) return;

  const line = conv.lines[shadowingLineIndex];
  
  // 카운터 업데이트
  document.getElementById("shadowing-counter").textContent = `${shadowingLineIndex + 1} / ${conv.lines.length}`;

  // 화자
  document.getElementById("shadowing-speaker").textContent = `Speaker ${line.speaker}`;
  
  // 영어 문장 (블라인드 모드 처리)
  const enText = document.getElementById("shadowing-text");
  enText.textContent = line.en;
  
  if (isBlindMode) {
    enText.classList.add("blind-text");
    enText.classList.remove("revealed");
    document.getElementById("shadowing-hint").classList.remove("hidden");
  } else {
    enText.classList.remove("blind-text");
    enText.classList.add("revealed");
    document.getElementById("shadowing-hint").classList.add("hidden");
  }

  // 한글 해석 (숨김 처리)
  const krText = document.getElementById("shadowing-kr");
  krText.textContent = line.kr;
  krText.style.visibility = isHideKr ? "hidden" : "visible";

  // 자동 재생 (페이지 진입하거나 다음 문장 넘어갈 때)
  if (autoPlayEnabled) {
    speakText(line.en);
  }
}

// 문장 잠시 보기 (블라인드 모드에서 클릭 시)
function revealTextTemp() {
  const enText = document.getElementById("shadowing-text");
  if (isBlindMode) {
    enText.classList.add("revealed");
    // 2초 후 다시 가리기
    setTimeout(() => {
      enText.classList.remove("revealed");
    }, 2000);
  }
}

// 현재 문장 다시 듣기 (버튼 클릭 효과 포함)
function playShadowingCurrent() {
  const btn = document.getElementById("shadowing-play-btn");
  
  // 클릭 애니메이션 효과
  btn.style.transform = "scale(0.95)";
  setTimeout(() => btn.style.transform = "scale(1)", 100);

  const conv = conversationData.find(c => c.id === currentShadowingId);
  if (!conv) return;
  speakText(conv.lines[shadowingLineIndex].en);
}

// 다음 문장
function nextShadowing() {
  const conv = conversationData.find(c => c.id === currentShadowingId);
  if (!conv) return;

  if (shadowingLineIndex < conv.lines.length - 1) {
    shadowingLineIndex++;
    updateShadowingUI();
  } else {
    if(confirm("대화가 끝났습니다. 목록으로 돌아갈까요?")) {
      goTo("shadowing-list");
    } else {
      // 처음부터 다시 하기
      shadowingLineIndex = 0;
      updateShadowingUI();
    }
  }
}

// 이전 문장
function prevShadowing() {
  if (shadowingLineIndex > 0) {
    shadowingLineIndex--;
    updateShadowingUI();
  }
}

// ==========================================
// 9. 문장 퍼즐 (Puzzle)
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

// ==========================================
// 10. TTS 설정 및 학습내용 저장/불러오기
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
// 학습내용 저장/불러오기 (Firebase)
// ---------------------------------------------------------
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
  const lastId = localStorage.getItem("lastSyncId");
  if(lastId) document.getElementById("sync-id").value = lastId;
}
function closeSyncModal() { document.getElementById("sync-modal").classList.add("hidden"); }

async function uploadData() {
  const id = document.getElementById("sync-id").value.trim();
  const pw = document.getElementById("sync-pw").value.trim();
  
  if(!id || !pw) return alert("아이디와 비밀번호를 모두 입력해주세요.");
  if(!db) return alert("데이터베이스 연결 실패");

  try {
    const ref = db.collection("users").doc(id);
    const doc = await ref.get();

    if(doc.exists) {
      if(doc.data().password !== pw) {
        return alert("비밀번호가 틀렸습니다.\n(다른 사람이 사용 중인 아이디일 수 있습니다.)");
      }
      if(!confirm("기존 데이터를 덮어쓰고 저장하시겠습니까?")) return;
    } else {
      if(!confirm(`'${id}' 계정을 새로 만들고 저장하시겠습니까?`)) return;
    }

    await ref.set({
      password: pw,
      updatedAt: new Date().toISOString(),
      patterns: Array.from(memorizedPatterns),
      words: Array.from(memorizedWords),
      idioms: Array.from(memorizedIdioms),
      settings: { voiceIndex: userVoiceIndex, rate: userRate, autoPlay: autoPlayEnabled }
    });

    localStorage.setItem("lastSyncId", id);
    alert("✅ 학습내용이 안전하게 저장되었습니다.");
    closeSyncModal();
  } catch(e) {
    console.error(e);
    alert("오류 발생: " + e.message);
  }
}

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
    
    if(d.patterns) memorizedPatterns = new Set(d.patterns);
    if(d.words) memorizedWords = new Set(d.words);
    if(d.idioms) memorizedIdioms = new Set(d.idioms);
    if(d.settings) {
      userVoiceIndex = d.settings.voiceIndex;
      userRate = d.settings.rate;
      if(d.settings.autoPlay !== undefined) autoPlayEnabled = d.settings.autoPlay;
    }
    
    saveDataLocally('pattern'); 
    saveDataLocally('word'); 
    saveDataLocally('idiom');
    localStorage.setItem("ttsSettings", JSON.stringify({ voiceIndex: userVoiceIndex, rate: userRate, autoPlay: autoPlayEnabled }));
    localStorage.setItem("lastSyncId", id);
    
    updatePatternProgress(); updateWordProgress(); updateIdiomProgress();
    
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
