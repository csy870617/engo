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
// 2. 네비게이션 (히스토리 API 적용 - 뒤로가기 최적화)
// ==========================================
window.onpopstate = function(event) {
  const openModals = document.querySelectorAll('.modal:not(.hidden)');
  if (openModals.length > 0) {
    openModals.forEach(modal => modal.classList.add('hidden'));
  }

  // 히스토리 상태가 없으면 홈으로 간주
  const page = (event.state && event.state.page) ? event.state.page : 'home';
  
  isBackAction = true;
  goTo(page);
  isBackAction = false;
};

// [수정됨] isInitialLoad 옵션 추가: 초기 로딩 시 히스토리를 쌓지 않고 '교체'함
function goTo(page, isInitialLoad = false) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  // 뒤로가기 버튼으로 온 게 아닐 때만 히스토리 처리
  if (!isBackAction) {
    if (isInitialLoad) {
      // [핵심] 처음 켤 때는 pushState(쌓기) 대신 replaceState(교체) 사용
      // 이렇게 해야 뒤로 가기 시 이전 기록(빈 페이지)이 아닌 브라우저 밖으로 나감
      history.replaceState({ page: page }, "", "#" + page);
    } else {
      // 일반 이동 시에는 기록 쌓기 (단, 중복 방지)
      if (!history.state || history.state.page !== page) {
        history.pushState({ page: page }, "", "#" + page);
      }
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

    const wRaw = localStorage.getItem("wordMemorizedIds");
    if (wRaw) memorizedWords = new Set(JSON.parse(wRaw));

    const iRaw = localStorage.getItem("idiomMemorizedIds");
    if (iRaw) memorizedIdioms = new Set(JSON.parse(iRaw));

    const pStudyRaw = localStorage.getItem("patternStudyingOnly");
    if (pStudyRaw !== null) patternStudyingOnly = (pStudyRaw === 'true');

    const wStudyRaw = localStorage.getItem("wordStudyingOnly");
    if (wStudyRaw !== null) wordStudyingOnly = (wStudyRaw === 'true');

    const iStudyRaw = localStorage.getItem("idiomStudyingOnly");
    if (iStudyRaw !== null) idiomStudyingOnly = (iStudyRaw === 'true');

    const wLevelRaw = localStorage.getItem("selectedWordLevel");
    if (wLevelRaw !== null) selectedWordLevel = parseInt(wLevelRaw);

    const iLevelRaw = localStorage.getItem("selectedIdiomLevel");
    if (iLevelRaw !== null) selectedIdiomLevel = parseInt(iLevelRaw);

  } catch (e) { console.warn(e); }
}

function saveData(type) {
  saveDataLocally(type);
}

// ==========================================
// 4. 패턴 (Patterns) 로직
// ==========================================
function renderPatternList() {
  const container = document.getElementById("pattern-list");
  if (!container || typeof patternData === "undefined") return;

  const filterBtn = document.getElementById("pattern-studying-btn");
  if (filterBtn) {
    filterBtn.classList.toggle("active", patternStudyingOnly);
  }

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
      else updatePatternProgress();
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
  localStorage.setItem("patternStudyingOnly", patternStudyingOnly);
  renderPatternList();
}

function togglePatternMemorizedDetail() {
  const chk = document.getElementById("pattern-memorized-checkbox");
  if (chk.checked) memorizedPatterns.add(currentPatternId);
  else memorizedPatterns.delete(currentPatternId);
  saveData('pattern');
  updatePatternProgress(); 
}

function playPatternExamples() {
  const p = patternData.find(x => x.id === currentPatternId);
  if (p) speakText(p.examples.map(e => e.en).join(". "));
}

// ==========================================
// 5. 단어 (Words) 로직
// ==========================================
function renderWordList() {
  const container = document.getElementById("word-list");
  if (!container || typeof wordData === "undefined") return;
  
  const filterBtn = document.getElementById("word-studying-btn");
  if (filterBtn) {
    filterBtn.classList.toggle("active", wordStudyingOnly);
  }

  document.querySelectorAll("[data-word-level-btn]").forEach(b => {
    b.classList.toggle("active", parseInt(b.dataset.wordLevelBtn) === selectedWordLevel);
  });

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
  localStorage.setItem("selectedWordLevel", lvl);
  renderWordList();
}

function toggleWordStudying() {
  wordStudyingOnly = !wordStudyingOnly;
  localStorage.setItem("wordStudyingOnly", wordStudyingOnly);
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
  updateWordProgress();
}

function playWordExamples() {
  const w = wordData.find(x => x.id === currentWordId);
  if (w) speakText(w.examples.map(e => e.en).join(". "));
}

// ==========================================
// 6. 숙어 (Idioms) 로직
// ==========================================
function renderIdiomList() {
  const container = document.getElementById("idiom-list");
  if (!container) return;
  
  const filterBtn = document.getElementById("idiom-studying-btn");
  if (filterBtn) {
    filterBtn.classList.toggle("active", idiomStudyingOnly);
  }

  document.querySelectorAll("[data-idiom-level-btn]").forEach(b => {
    b.classList.toggle("active", parseInt(b.dataset.idiomLevelBtn) === selectedIdiomLevel);
  });

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
  localStorage.setItem("selectedIdiomLevel", lvl);
  renderIdiomList();
}

function toggleIdiomStudying() {
  idiomStudyingOnly = !idiomStudyingOnly;
  localStorage.setItem("idiomStudyingOnly", idiomStudyingOnly);
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
  updateIdiomProgress();
}

function playIdiomExamples() {
  const item = idiomData.find(x => x.id === currentIdiomId);
  if (item) speakText(item.examples.map(e => e.en).join(". "));
}

// ==========================================
// 7. 대화 (Conversation)
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
  if (!list || list.length === 0) {
    alert("목록이 비어있습니다.");
    return;
  }
  
  const idx = list.findIndex(item => item.id === currentId);
  
  if (idx === -1) {
    openFunc(list[0].id);
    return;
  }
  
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


// ==========================================
// 8. 쉐도잉 (Shadowing)
// ==========================================
let isBlindMode = false;
let isHideKr = false;

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

function toggleShadowingOption(type) {
  if (type === 'blind') isBlindMode = !isBlindMode;
  if (type === 'hideKr') isHideKr = !isHideKr;
  updateShadowingOptionsUI();
  updateShadowingUI();
}

function updateShadowingOptionsUI() {
  const btnBlind = document.getElementById("btn-blind-mode");
  const btnHideKr = document.getElementById("btn-hide-kr");
  
  if(btnBlind) btnBlind.classList.toggle("active", isBlindMode);
  if(btnHideKr) btnHideKr.classList.toggle("active", isHideKr);
}

function updateShadowingUI() {
  const conv = conversationData.find(c => c.id === currentShadowingId);
  if (!conv) return;

  const line = conv.lines[shadowingLineIndex];
  
  document.getElementById("shadowing-counter").textContent = `${shadowingLineIndex + 1} / ${conv.lines.length}`;
  document.getElementById("shadowing-speaker").textContent = `Speaker ${line.speaker}`;
  
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

  const krText = document.getElementById("shadowing-kr");
  krText.textContent = line.kr;
  krText.style.visibility = isHideKr ? "hidden" : "visible";

  if (autoPlayEnabled) {
    speakText(line.en);
  }
}

function revealTextTemp() {
  const enText = document.getElementById("shadowing-text");
  if (isBlindMode) {
    enText.classList.add("revealed");
    setTimeout(() => {
      enText.classList.remove("revealed");
    }, 2000);
  }
}

function playShadowingCurrent() {
  const btn = document.getElementById("shadowing-play-btn");
  btn.style.transform = "scale(0.95)";
  setTimeout(() => btn.style.transform = "scale(1)", 100);

  const conv = conversationData.find(c => c.id === currentShadowingId);
  if (!conv) return;
  speakText(conv.lines[shadowingLineIndex].en);
}

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
      shadowingLineIndex = 0;
      updateShadowingUI();
    }
  }
}

function prevShadowing() {
  if (shadowingLineIndex > 0) {
    shadowingLineIndex--;
    updateShadowingUI();
  }
}

function nextRandomShadowingTopic() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  if (!conversationData || conversationData.length === 0) return;
  
  let nextConv;
  if (conversationData.length > 1) {
    do {
      const randomIndex = Math.floor(Math.random() * conversationData.length);
      nextConv = conversationData[randomIndex];
    } while (nextConv.id === currentShadowingId);
  } else {
    nextConv = conversationData[0];
  }
  
  currentShadowingId = nextConv.id;
  shadowingLineIndex = 0;
  
  updateShadowingUI();
}

// ==========================================
// 9. 문장 퍼즐 (Puzzle)
// ==========================================
let puzzleList = [];
let currentPuzzleIndex = 0;
let currentPuzzleAnswer = "";
let puzzleTargetTokens = [];
let puzzleShuffledTokens = [];

function initPuzzle() {
  if (puzzleList.length === 0) {
    let pool = [];
    if (typeof conversationData !== "undefined") {
      conversationData.forEach(c => c.lines.forEach(l => {
        if (l.en.trim().split(" ").length > 2) pool.push({ en: l.en, kr: l.kr });
      }));
    }
    if (typeof patternData !== "undefined") {
      patternData.forEach(p => p.examples.forEach(ex => {
        if (ex.en.trim().split(" ").length > 2) pool.push({ en: ex.en, kr: ex.kr });
      }));
    }
    puzzleList = pool.sort(() => Math.random() - 0.5);
    currentPuzzleIndex = 0;
  }
  renderPuzzle();
}

function renderPuzzle() {
  if (puzzleList.length === 0) {
    document.getElementById("puzzle-question").textContent = "데이터 부족";
    return;
  }
  const target = puzzleList[currentPuzzleIndex];
  currentPuzzleAnswer = target.en.trim();
  document.getElementById("puzzle-counter").textContent = `${currentPuzzleIndex + 1} / ${puzzleList.length}`;
  document.getElementById("puzzle-question").textContent = target.kr;
  document.getElementById("puzzle-feedback").textContent = "";
  document.getElementById("puzzle-feedback").className = "feedback-msg";
  document.getElementById("puzzle-feedback").style.color = ""; // 스타일 초기화
  puzzleTargetTokens = [];
  puzzleShuffledTokens = currentPuzzleAnswer.split(" ").sort(() => Math.random() - 0.5);
  updatePuzzleBoard();
}

function updatePuzzleBoard() {
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
    span.onclick = () => { puzzleTargetTokens.push(t); updatePuzzleBoard(); };
    bank.appendChild(span);
  });
  puzzleTargetTokens.forEach((t, i) => {
    const span = document.createElement("span");
    span.className = "token";
    span.textContent = t;
    span.onclick = () => { puzzleTargetTokens.splice(i, 1); updatePuzzleBoard(); };
    target.appendChild(span);
  });
}

function checkPuzzle() {
  const user = puzzleTargetTokens.join(" ");
  const fb = document.getElementById("puzzle-feedback");
  fb.style.color = ""; // 색상 초기화
  if (user === currentPuzzleAnswer) {
    fb.textContent = "정답입니다! 🎉";
    fb.className = "feedback ok";
    speakText(currentPuzzleAnswer);
  } else {
    fb.textContent = "오답입니다.";
    fb.className = "feedback error";
  }
}

function resetPuzzle() {
  puzzleTargetTokens = [];
  const fb = document.getElementById("puzzle-feedback");
  fb.textContent = "";
  fb.style.color = "";
  updatePuzzleBoard();
}

function showPuzzleAnswer() {
  const fb = document.getElementById("puzzle-feedback");
  fb.textContent = `정답: ${currentPuzzleAnswer}`;
  fb.className = "feedback-msg";
  fb.style.color = "#38bdf8";
}

function movePuzzle(offset) {
  const newIndex = currentPuzzleIndex + offset;
  if (newIndex >= 0 && newIndex < puzzleList.length) {
    currentPuzzleIndex = newIndex;
    renderPuzzle();
  } else {
    alert(offset > 0 ? "마지막 문제입니다." : "첫 번째 문제입니다.");
  }
}

// ==========================================
// 10. TTS 설정, 글자 크기 및 저장
// ==========================================
let ttsVoices = [];
let userVoiceIndex = null;
let userRate = 1.0;
let userFontSize = 'medium'; // small, medium, large
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
    if (d.fontSize) userFontSize = d.fontSize;
  }
  
  applyFontSizeToBody(userFontSize);
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
  const currentPage = history.state ? history.state.page : 'home';
  history.pushState({ page: currentPage, modal: 'settings' }, "", "#settings");

  document.getElementById("settings-modal").classList.remove("hidden");
  
  const sel = document.getElementById("tts-voice-select");
  const chk = document.getElementById("tts-autoplay-toggle");
  
  if(sel) sel.value = userVoiceIndex !== null ? userVoiceIndex : "";
  if(chk) chk.checked = autoPlayEnabled;

  updateButtonGroup('speed-btn-group', userRate);
  updateButtonGroup('font-btn-group', userFontSize);
}

function closeSettingsModal() { 
  if (history.state && history.state.modal === 'settings') {
    history.back();
  } else {
    document.getElementById("settings-modal").classList.add("hidden"); 
  }
}

function updateButtonGroup(groupId, activeValue) {
  const group = document.getElementById(groupId);
  if(!group) return;
  const btns = group.querySelectorAll('button');
  btns.forEach(btn => {
    const btnVal = btn.getAttribute('data-value');
    if (btnVal == activeValue) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function setTtsRate(rate, btn) {
  userRate = parseFloat(rate);
  const group = document.getElementById("speed-btn-group");
  group.querySelectorAll("button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  previewVoiceSettings();
}

function setAppFontSize(size, btn) {
  userFontSize = size;
  const group = document.getElementById("font-btn-group");
  group.querySelectorAll("button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  applyFontSizeToBody(size);
}

function applyFontSizeToBody(size) {
  const root = document.documentElement; 
  root.classList.remove('font-small', 'font-medium', 'font-large');
  root.classList.add(`font-${size}`);
}

function previewVoiceSettings() {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance("Hello.");
  u.lang = "en-US";
  u.rate = userRate;
  const tempVoice = document.getElementById("tts-voice-select").value;
  if(tempVoice && ttsVoices[tempVoice]) u.voice = ttsVoices[tempVoice];
  window.speechSynthesis.speak(u);
}

function saveSettings() {
  userVoiceIndex = document.getElementById("tts-voice-select").value || null;
  autoPlayEnabled = document.getElementById("tts-autoplay-toggle").checked;
  localStorage.setItem("ttsSettings", JSON.stringify({ 
    voiceIndex: userVoiceIndex, 
    rate: userRate, 
    autoPlay: autoPlayEnabled,
    fontSize: userFontSize
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

function openSyncModal(pushHistory = true) {
  if (pushHistory) {
    const currentPage = history.state ? history.state.page : 'home';
    history.pushState({ page: currentPage, modal: 'sync' }, "", "#sync");
  }

  document.getElementById("sync-modal").classList.remove("hidden");
  
  const savedAuth = localStorage.getItem("syncAuth");
  if (savedAuth) {
    const authData = JSON.parse(savedAuth);
    document.getElementById("sync-id").value = authData.id;
    document.getElementById("sync-pw").value = authData.pw;
    document.getElementById("sync-remember").checked = true;
  }
}

function closeSyncModal() { 
  if (history.state && history.state.modal === 'sync') {
    history.back();
  } else {
    document.getElementById("sync-modal").classList.add("hidden"); 
  }
}

function handleRememberAuth(id, pw) {
  const isRemember = document.getElementById("sync-remember").checked;
  if (isRemember) {
    localStorage.setItem("syncAuth", JSON.stringify({ id: id, pw: pw }));
  } else {
    localStorage.removeItem("syncAuth");
  }
}

async function uploadData() {
  const id = document.getElementById("sync-id").value.trim();
  const pw = document.getElementById("sync-pw").value.trim();
  
  if(!id || !pw) return alert("아이디와 비밀번호를 모두 입력해주세요.");
  if(!db) return alert("데이터베이스 연결 실패");

  handleRememberAuth(id, pw);

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
      settings: { 
        voiceIndex: userVoiceIndex, 
        rate: userRate, 
        autoPlay: autoPlayEnabled,
        fontSize: userFontSize,
        // [중요] 레벨/필터 상태 저장
        wordLevel: selectedWordLevel,
        idiomLevel: selectedIdiomLevel,
        filterPattern: patternStudyingOnly,
        filterWord: wordStudyingOnly,
        filterIdiom: idiomStudyingOnly
      }
    });

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

  handleRememberAuth(id, pw);

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
      userRate = d.settings.rate || 1.0;
      if(d.settings.autoPlay !== undefined) autoPlayEnabled = d.settings.autoPlay;
      if(d.settings.fontSize) {
        userFontSize = d.settings.fontSize;
        applyFontSizeToBody(userFontSize);
      }
      // [중요] 레벨/필터 상태 복원
      if(d.settings.wordLevel !== undefined) selectedWordLevel = d.settings.wordLevel;
      if(d.settings.idiomLevel !== undefined) selectedIdiomLevel = d.settings.idiomLevel;
      if(d.settings.filterPattern !== undefined) patternStudyingOnly = d.settings.filterPattern;
      if(d.settings.filterWord !== undefined) wordStudyingOnly = d.settings.filterWord;
      if(d.settings.filterIdiom !== undefined) idiomStudyingOnly = d.settings.filterIdiom;
    }
    
    // 로컬 스토리지 동기화 (재접속 시 유지용)
    localStorage.setItem("selectedWordLevel", selectedWordLevel);
    localStorage.setItem("selectedIdiomLevel", selectedIdiomLevel);
    localStorage.setItem("patternStudyingOnly", patternStudyingOnly);
    localStorage.setItem("wordStudyingOnly", wordStudyingOnly);
    localStorage.setItem("idiomStudyingOnly", idiomStudyingOnly);

    saveDataLocally('pattern'); 
    saveDataLocally('word'); 
    saveDataLocally('idiom');
    localStorage.setItem("ttsSettings", JSON.stringify({ 
      voiceIndex: userVoiceIndex, 
      rate: userRate, 
      autoPlay: autoPlayEnabled,
      fontSize: userFontSize
    }));
    
    updatePatternProgress(); updateWordProgress(); updateIdiomProgress();
    
    // 현재 페이지 갱신
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

// ==========================================
// 13. 페이지 종료 전 저장 유도 (바로 종료)
// ==========================================
// 기존 beforeunload 이벤트 리스너 제거됨

// ==========================================
// 14. PWA 설치 배너 로직
// ==========================================
let deferredPrompt;
const installBanner = document.getElementById('install-banner');

window.addEventListener('beforeinstallprompt', (e) => {
  console.log("✅ PWA 설치 이벤트 감지됨!"); 
  e.preventDefault();
  deferredPrompt = e;
  
  if (!localStorage.getItem('installBannerDismissed')) {
    installBanner.classList.remove('hidden');
  }
});

async function installPWA() {
  if (!deferredPrompt) {
    alert("브라우저 메뉴의 [홈 화면에 추가]나 [앱 설치]를 이용해주세요.");
    return;
  }
  
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  
  deferredPrompt = null;
  installBanner.classList.add('hidden');
}

function hideInstallBanner() {
  installBanner.classList.add('hidden');
  localStorage.setItem('installBannerDismissed', 'true');
}

window.addEventListener('appinstalled', () => {
  installBanner.classList.add('hidden');
  deferredPrompt = null;
});

// ==========================================
// 15. 공유 기능
// ==========================================
const KAKAO_JS_KEY = 'YOUR_KAKAO_JS_KEY'; 

if (typeof Kakao !== 'undefined' && KAKAO_JS_KEY !== 'YOUR_KAKAO_JS_KEY') {
  try {
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAO_JS_KEY);
    }
  } catch(e) {
    console.log("Kakao init failed", e);
  }
}

function shareApp() {
  if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
    try {
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'English & Go',
          description: '오늘의 영어 정복을 시작해볼까요? 영어회화 공부 ENGO와 함께해요.',
          imageUrl: window.location.origin + '/icon.png',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '함께 공부하기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
      return;
    } catch(e) {
      console.log("Kakao share failed, trying native share...");
    }
  }

  if (navigator.share) {
    navigator.share({
      title: 'English & Go',
      text: '오늘의 영어 정복을 시작해볼까요? 영어회화 공부 ENGO와 함께해요.',
      url: window.location.href,
    }).catch(console.log);
  } 
  else {
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = window.location.href;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert("링크가 복사되었습니다! 친구에게 붙여넣기 해보세요.");
  }
}

// ==========================================
// 16. 실시간 영어 뉴스 로더 (수동 새로고침)
// ==========================================
const NEWS_TOPICS = [
  "https://news.google.com/rss/search?q=South+Korea+(k-pop+OR+k-drama+OR+movie)+(popular+OR+success)&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=South+Korea+(technology+OR+samsung+OR+economy)+(growth+OR+innovation)&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=South+Korea+(food+OR+travel+OR+trend)+(viral+OR+famous)&hl=en-US&gl=US&ceid=US:en"
];

let currentTopicIndex = 0; 

function refreshNews() {
  fetchRealNews();
}

async function fetchRealNews() {
  const container = document.getElementById('news-card-list');
  if (!container) return;

  container.innerHTML = `<div style="padding:30px; text-align:center; color:#94a3b8; font-size:0.9rem; width:100%;">
    🔄 Mixing fresh stories...<br><span style="font-size:0.8rem; opacity:0.7">Topic ${currentTopicIndex + 1} Loading</span>
  </div>`;

  const currentRssUrl = NEWS_TOPICS[currentTopicIndex];
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(currentRssUrl)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'ok') {
      container.innerHTML = ""; 
      
      let allArticles = data.items.slice(0, 15); 
      const shuffled = allArticles.sort(() => 0.5 - Math.random());
      const selectedArticles = shuffled.slice(0, 3);

      selectedArticles.forEach(item => {
        const cleanTitle = item.title.split(" - ")[0];
        const sourceName = item.title.split(" - ")[1] || "News";
        const date = new Date(item.pubDate);
        const timeAgo = getTimeAgo(date);

        const card = document.createElement('div');
        card.className = 'news-card';
        card.onclick = () => window.open(item.link, '_blank');

        let topicTag = "#Trending";
        if (currentTopicIndex === 0) topicTag = "#K-Culture";
        else if (currentTopicIndex === 1) topicTag = "#Tech&Biz";
        else if (currentTopicIndex === 2) topicTag = "#Lifestyle";

        card.innerHTML = `
          <div>
            <span class="news-tag">${topicTag}</span>
            <div class="news-title">${cleanTitle}</div>
            <div class="news-summary" style="font-size:0.8rem; color:#94a3b8;">
              ${item.description ? item.description.replace(/<[^>]*>?/gm, '').substring(0, 70) + "..." : "Click to read more."}
            </div>
          </div>
          <div class="news-footer">
            <span>${sourceName}</span> • <span>${timeAgo}</span>
          </div>
        `;
        container.appendChild(card);
      });

      currentTopicIndex = (currentTopicIndex + 1) % NEWS_TOPICS.length;

    } else {
      throw new Error("API Error");
    }
  } catch (error) {
    console.error("News fetch failed:", error);
    loadBackupNews();
  }
}

function loadBackupNews() {
  const container = document.getElementById('news-card-list');
  const newsData = [
    { 
      tag: "K-Culture", 
      title: "Han Kang wins Nobel Prize in Literature", 
      summary: "South Korean author Han Kang brings home the Nobel Prize, marking a historic moment for K-Literature.", 
      source: "CNN", 
      url: "https://edition.cnn.com/2024/10/10/style/han-kang-nobel-prize-literature-intl/index.html" 
    },
    { 
      tag: "K-Food", 
      title: "Frozen Kimbap becomes a massive hit in the US", 
      summary: "Trader Joe's sold out of Korean frozen kimbap instantly, showing the global power of K-Food.", 
      source: "NBC News", 
      url: "https://www.nbcnews.com/news/asian-america/frozen-kimbap-korean-food-trader-joes-viral-tiktok-rcna101247" 
    },
    { 
      tag: "Tech", 
      title: "Korea to launch new space rocket next month", 
      summary: "South Korea continues its journey into space with the upcoming launch of its homegrown Nuri rocket.", 
      source: "Korea Herald", 
      url: "http://www.koreaherald.com/" 
    }
  ];
  
  container.innerHTML = "";
  newsData.forEach(news => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.onclick = () => window.open(news.url, '_blank');
    
    card.innerHTML = `
      <div>
        <span class="news-tag">#${news.tag}</span>
        <div class="news-title">${news.title}</div>
        <div class="news-summary">${news.summary}</div>
      </div>
      <div class="news-footer">Source: ${news.source}</div>
    `;
    container.appendChild(card);
  });
}

function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " mins ago";
  return "Just now";
}

function initNewsUpdater() {
  fetchRealNews(); 
}

// 1. 로컬 데이터 로드
loadMemorizedData();
// 2. TTS 초기화
loadVoices();
// 3. 뉴스 초기화
initNewsUpdater(); 

// 4. 초기 화면 렌더링 (중복 히스토리 방지: replace)
const initialPage = location.hash.replace('#', '') || 'home';
goTo(initialPage, true);
