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
  "shadowing-list", "shadowing", "puzzle", "blog-list", "blog-detail"
];

// 데이터 병합 (외부 파일에서 로드된 데이터가 없을 경우 대비)
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

// 설정값 변수
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
let isConversationPlaying = false;
let currentAudioSessionId = 0; // 오디오 중복 재생 방지용

// ==========================================
// 2. 네비게이션 (히스토리 API 적용)
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

  // 각 페이지 진입 시 렌더링
  if (page === "patterns") renderPatternList();
  if (page === "pattern-detail") { renderPatternList(); renderPatternDetail(); }
  if (page === "words") renderWordList();
  if (page === "word-detail") { renderWordList(); renderWordDetail(); }
  if (page === "idioms") renderIdiomList();
  if (page === "idiom-detail") { renderIdiomList(); renderIdiomDetail(); }
  if (page === "conversations") renderConversationList();
  if (page === "conv-detail") { renderConversationList(); renderConversationDetail(); }
  if (page === "shadowing-list") renderShadowingList();
  if (page === "puzzle") initPuzzle();
  if (page === "blog-list") renderBlogList();
  if (page === "blog-detail") renderBlogDetail();
}

function stopAudio() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  isConversationPlaying = false;
  currentAudioSessionId++; 
}

// ==========================================
// 3. 데이터 저장/로드
// ==========================================
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
    if(wLevel !== null) selectedWordLevel = parseInt(wLevel);
    const iLevel = localStorage.getItem("selectedIdiomLevel");
    if(iLevel !== null) selectedIdiomLevel = parseInt(iLevel);

    currentPatternId = localStorage.getItem("currentPatternId");
    currentWordId = localStorage.getItem("currentWordId");
    currentIdiomId = localStorage.getItem("currentIdiomId");
    currentConvId = localStorage.getItem("currentConvId");
  } catch (e) { console.warn(e); }
}
function saveData(type) { saveDataLocally(type); }

// ==========================================
// 4. 패턴 학습
// ==========================================
function renderPatternList() {
  const container = document.getElementById("pattern-list");
  if (!container || typeof patternData === "undefined") return;
  const filterBtn = document.getElementById("pattern-studying-btn");
  if (filterBtn) filterBtn.classList.toggle("active", patternStudyingOnly);
  
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
    div.innerHTML = `<div><div class="list-item-title">${p.title}</div><div class="list-item-sub">${p.desc}</div></div>`;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "pattern-check";
    check.checked = memorizedPatterns.has(p.id);
    check.onclick = (e) => {
      e.stopPropagation();
      if (check.checked) memorizedPatterns.add(p.id); else memorizedPatterns.delete(p.id);
      saveData('pattern');
      updatePatternProgress();
    };
    div.appendChild(check);
    container.appendChild(div);
  });
  if (filtered.length === 0) container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
  updatePatternProgress();
}
function updatePatternProgress() {
  if (typeof patternData === "undefined") return;
  const done = patternData.filter(p => memorizedPatterns.has(p.id)).length;
  const total = patternData.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  document.getElementById("pattern-progress").textContent = `패턴 암기 ${done} / ${total}개 (${percent}%)`;
  document.getElementById("pattern-progress-bar").style.width = `${percent}%`;
}
function openPattern(id) {
  currentPatternId = id;
  localStorage.setItem("currentPatternId", id); 
  goTo("pattern-detail"); 
  if (autoPlayEnabled) playPatternExamples();
}
function renderPatternDetail() {
  const pattern = patternData.find(p => p.id === currentPatternId);
  if (!pattern) return;
  document.getElementById("pattern-title").textContent = pattern.title;
  document.getElementById("pattern-desc").textContent = pattern.desc;
  document.getElementById("pattern-memorized-checkbox").checked = memorizedPatterns.has(currentPatternId);
  document.getElementById("pattern-toggle-kr").checked = true;
  renderPatternExamples();
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
  localStorage.setItem("patternStudyingOnly", patternStudyingOnly);
  renderPatternList();
}
function togglePatternMemorizedDetail() {
  const chk = document.getElementById("pattern-memorized-checkbox");
  if (chk.checked) memorizedPatterns.add(currentPatternId); else memorizedPatterns.delete(currentPatternId);
  saveData('pattern');
  updatePatternProgress(); 
}
async function playPatternExamples() {
  stopAudio();
  currentAudioSessionId++;
  const mySessionId = currentAudioSessionId;
  isConversationPlaying = true;
  const p = patternData.find(x => x.id === currentPatternId);
  if (!p) return;
  await speakWithPromise(p.title);
  if (currentAudioSessionId !== mySessionId || !isConversationPlaying) return;
  await new Promise(resolve => setTimeout(resolve, 800));
  for (const ex of p.examples) {
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await speakWithPromise(ex.en);
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  if (currentAudioSessionId === mySessionId) isConversationPlaying = false;
}

// ==========================================
// 5. 단어 학습
// ==========================================
function renderWordList() {
  const container = document.getElementById("word-list");
  if (!container || typeof wordData === "undefined") return;
  const filterBtn = document.getElementById("word-studying-btn");
  if (filterBtn) filterBtn.classList.toggle("active", wordStudyingOnly);
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
      updateWordProgress();
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
  document.getElementById("word-progress").textContent = `현재 레벨 기준 암기 ${done} / ${total}개 (${percent}%)`;
  document.getElementById("word-progress-bar").style.width = `${percent}%`;
}
function setWordLevel(lvl) { selectedWordLevel = lvl; localStorage.setItem("selectedWordLevel", lvl); renderWordList(); }
function toggleWordStudying() { wordStudyingOnly = !wordStudyingOnly; localStorage.setItem("wordStudyingOnly", wordStudyingOnly); renderWordList(); }
function openWord(id) {
  currentWordId = id;
  localStorage.setItem("currentWordId", id);
  goTo("word-detail");
  if (autoPlayEnabled) playWordExamples();
}
function renderWordDetail() {
  const w = wordData.find(x => x.id === currentWordId);
  if (!w) return;
  document.getElementById("word-title").textContent = `${w.word} - ${w.meaning}`;
  document.getElementById("word-desc").textContent = w.examples?.[0]?.kr || w.meaning;
  document.getElementById("word-memorized-checkbox").checked = memorizedWords.has(currentWordId);
  document.getElementById("word-toggle-kr").checked = true;
  renderWordExamples();
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
  updateWordProgress();
}
async function playWordExamples() {
  stopAudio();
  currentAudioSessionId++;
  const mySessionId = currentAudioSessionId;
  isConversationPlaying = true;
  const w = wordData.find(x => x.id === currentWordId);
  if (!w) return;
  await speakWithPromise(w.word);
  if (currentAudioSessionId !== mySessionId || !isConversationPlaying) return;
  await new Promise(resolve => setTimeout(resolve, 800));
  for (const ex of w.examples) {
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await speakWithPromise(ex.en);
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  if (currentAudioSessionId === mySessionId) isConversationPlaying = false;
}

// ==========================================
// 6. 숙어 학습
// ==========================================
function renderIdiomList() {
  const container = document.getElementById("idiom-list");
  if (!container) return;
  const filterBtn = document.getElementById("idiom-studying-btn");
  if (filterBtn) filterBtn.classList.toggle("active", idiomStudyingOnly);
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
      updateIdiomProgress();
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
function setIdiomLevel(lvl) { selectedIdiomLevel = lvl; localStorage.setItem("selectedIdiomLevel", lvl); renderIdiomList(); }
function toggleIdiomStudying() { idiomStudyingOnly = !idiomStudyingOnly; localStorage.setItem("idiomStudyingOnly", idiomStudyingOnly); renderIdiomList(); }
function openIdiom(id) {
  currentIdiomId = id;
  localStorage.setItem("currentIdiomId", id);
  goTo("idiom-detail");
  if (autoPlayEnabled) playIdiomExamples();
}
function renderIdiomDetail() {
  const item = idiomData.find(x => x.id === currentIdiomId);
  if (!item) return;
  document.getElementById("idiom-title").textContent = `${item.idiom} - ${item.meaning}`;
  document.getElementById("idiom-desc").textContent = item.desc;
  document.getElementById("idiom-memorized-checkbox").checked = memorizedIdioms.has(currentIdiomId);
  document.getElementById("idiom-toggle-kr").checked = true;
  renderIdiomExamples();
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
  updateIdiomProgress();
}
async function playIdiomExamples() {
  stopAudio();
  currentAudioSessionId++;
  const mySessionId = currentAudioSessionId;
  isConversationPlaying = true;
  const item = idiomData.find(x => x.id === currentIdiomId);
  if (!item) return;
  await speakWithPromise(item.idiom);
  if (currentAudioSessionId !== mySessionId || !isConversationPlaying) return;
  await new Promise(resolve => setTimeout(resolve, 800));
  for (const ex of item.examples) {
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await speakWithPromise(ex.en);
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  if (currentAudioSessionId === mySessionId) isConversationPlaying = false;
}

// ==========================================
// 7. 대화 학습
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
  localStorage.setItem("currentConvId", id);
  goTo("conv-detail");
  if (autoPlayEnabled) playConversationAll();
}
function renderConversationDetail() {
  const conv = conversationData.find(c => c.id === currentConvId);
  if (!conv) return;
  document.getElementById("conv-title").textContent = conv.title;
  document.getElementById("conv-toggle-kr").checked = true;
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
    btn.onclick = () => speakText(line.en, line.speaker);
    row.appendChild(btn);
    container.appendChild(row);
  });
}
async function playConversationAll() {
  stopAudio();
  currentAudioSessionId++;
  const mySessionId = currentAudioSessionId;
  isConversationPlaying = true; 
  const conv = conversationData.find(c => c.id === currentConvId);
  if (!conv) return;
  for (const line of conv.lines) {
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break; 
    await speakWithPromise(line.en, line.speaker);
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  if (currentAudioSessionId === mySessionId) isConversationPlaying = false;
}
function startShadowingFromConv(id) {
  currentShadowingId = id;
  shadowingLineIndex = 0;
  goTo("shadowing");
  isBlindMode = true; isHideKr = false; updateShadowingOptionsUI();
  setTimeout(() => { updateShadowingUI(); playShadowingCurrent(); }, 100);
}
function moveItemInList(currentId, list, offset, openFunc) {
  if (!list || list.length === 0) { alert("목록이 비어있습니다."); return; }
  const idx = list.findIndex(item => item.id === currentId);
  if (idx === -1) { openFunc(list[0].id); return; }
  const nextIdx = idx + offset;
  if (nextIdx >= 0 && nextIdx < list.length) openFunc(list[nextIdx].id);
  else alert(offset > 0 ? "마지막 항목입니다." : "첫 번째 항목입니다.");
}
function movePattern(o) { moveItemInList(currentPatternId, currentPatternList, o, openPattern); }
function moveWord(o) { moveItemInList(currentWordId, currentWordList, o, openWord); }
function moveIdiom(o) { moveItemInList(currentIdiomId, currentIdiomList, o, openIdiom); }
function moveConv(o) { moveItemInList(currentConvId, currentConvList, o, openConversation); }

// ==========================================
// 8. 쉐도잉
// ==========================================
let isBlindMode = false; let isHideKr = false;
function renderShadowingList() {
  const container = document.getElementById("shadowing-list-container");
  if (!container || typeof conversationData === "undefined") return;
  const keyword = (document.getElementById("shadowing-search")?.value || "").toLowerCase();
  container.innerHTML = "";
  const filtered = conversationData.filter(c => (c.title + c.lines.map(l => l.en).join(" ")).toLowerCase().includes(keyword));
  filtered.forEach(c => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.onclick = () => {
      currentShadowingId = c.id; shadowingLineIndex = 0; goTo("shadowing");
      isBlindMode = true; isHideKr = false; updateShadowingOptionsUI();
      setTimeout(() => { updateShadowingUI(); playShadowingCurrent(); }, 100);
    };
    div.innerHTML = `<div><div class="list-item-title">🗣️ ${c.title}</div><div class="list-item-sub">총 ${c.lines.length}문장</div></div><div style="color:var(--accent); font-size:0.9rem;">Start ▶</div>`;
    container.appendChild(div);
  });
  if (filtered.length === 0) container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
}
function toggleShadowingOption(type) {
  if (type === 'blind') isBlindMode = !isBlindMode;
  if (type === 'hideKr') isHideKr = !isHideKr;
  updateShadowingOptionsUI(); updateShadowingUI();
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
  if (isBlindMode) { enText.classList.add("blind-text"); enText.classList.remove("revealed"); document.getElementById("shadowing-hint").classList.remove("hidden"); }
  else { enText.classList.remove("blind-text"); enText.classList.add("revealed"); document.getElementById("shadowing-hint").classList.add("hidden"); }
  const krText = document.getElementById("shadowing-kr");
  krText.textContent = line.kr;
  krText.style.visibility = isHideKr ? "hidden" : "visible";
}
function revealTextTemp() {
  const enText = document.getElementById("shadowing-text");
  if (isBlindMode) { enText.classList.add("revealed"); setTimeout(() => { enText.classList.remove("revealed"); }, 2000); }
}
function playShadowingCurrent() {
  const btn = document.getElementById("shadowing-play-btn");
  if(btn) { btn.style.transform = "scale(0.95)"; setTimeout(() => btn.style.transform = "scale(1)", 100); }
  const conv = conversationData.find(c => c.id === currentShadowingId);
  if (!conv) return;
  speakText(conv.lines[shadowingLineIndex].en, conv.lines[shadowingLineIndex].speaker);
}
function nextShadowing() {
  const conv = conversationData.find(c => c.id === currentShadowingId);
  if (!conv) return;
  if (shadowingLineIndex < conv.lines.length - 1) {
    shadowingLineIndex++; updateShadowingUI();
    if (autoPlayEnabled) playShadowingCurrent();
  } else {
    if(confirm("대화가 끝났습니다. 목록으로 돌아갈까요?")) goTo("shadowing-list");
    else { shadowingLineIndex = 0; updateShadowingUI(); }
  }
}
function prevShadowing() {
  if (shadowingLineIndex > 0) {
    shadowingLineIndex--; updateShadowingUI();
    if (autoPlayEnabled) playShadowingCurrent();
  }
}
function nextRandomShadowingTopic() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (!conversationData || conversationData.length === 0) return;
  let nextConv;
  if (conversationData.length > 1) {
    do { const randomIndex = Math.floor(Math.random() * conversationData.length); nextConv = conversationData[randomIndex]; } while (nextConv.id === currentShadowingId);
  } else { nextConv = conversationData[0]; }
  currentShadowingId = nextConv.id; shadowingLineIndex = 0;
  updateShadowingUI();
  if (autoPlayEnabled) setTimeout(() => playShadowingCurrent(), 100);
}

// ==========================================
// 9. 문장 퍼즐 (Puzzle) - (수정됨)
// ==========================================
let puzzleList = []; let currentPuzzleIndex = 0; let currentPuzzleAnswer = ""; let puzzleTargetTokens = []; let puzzleShuffledTokens = [];
function initPuzzle() {
  if (puzzleList.length === 0) {
    let pool = [];
    const addIfValid = (en, kr) => { if (!en) return; const cleanEn = en.trim(); if (cleanEn.split(/\s+/).length >= 5) pool.push({ en: cleanEn, kr: kr }); };
    if (typeof conversationData !== "undefined") conversationData.forEach(c => c.lines.forEach(l => addIfValid(l.en, l.kr)));
    if (typeof patternData !== "undefined") patternData.forEach(p => p.examples.forEach(ex => addIfValid(ex.en, ex.kr)));
    if (typeof wordData !== "undefined") wordData.forEach(w => { const idStr = w.id || ""; if (idStr.startsWith("L1") || idStr.startsWith("L2") || idStr.startsWith("L3")) if (w.examples) w.examples.forEach(ex => addIfValid(ex.en, ex.kr)); });
    if (typeof idiomData !== "undefined") idiomData.forEach(i => { if (i.level && i.level <= 3) if (i.examples) i.examples.forEach(ex => addIfValid(ex.en, ex.kr)); });
    if (pool.length === 0) pool.push({ en: "Welcome to the English puzzle game.", kr: "영어 퍼즐 게임에 오신 것을 환영합니다." });
    puzzleList = pool.sort(() => Math.random() - 0.5);
    currentPuzzleIndex = 0;
  }
  if (!currentPuzzleAnswer) nextPuzzle(); else renderPuzzle();
}
function nextPuzzle() {
  if (puzzleList.length === 0) { initPuzzle(); return; }
  if (currentPuzzleIndex >= puzzleList.length) { currentPuzzleIndex = 0; puzzleList.sort(() => Math.random() - 0.5); }
  const target = puzzleList[currentPuzzleIndex];
  currentPuzzleIndex++;
  currentPuzzleAnswer = target.en.trim();
  document.getElementById("puzzle-counter").textContent = `${currentPuzzleIndex} / ${puzzleList.length}`;
  document.getElementById("puzzle-question").textContent = target.kr;
  document.getElementById("puzzle-feedback").textContent = "";
  document.getElementById("puzzle-feedback").className = "feedback-msg";
  document.getElementById("puzzle-feedback").style.color = ""; 
  puzzleTargetTokens = [];
  puzzleShuffledTokens = currentPuzzleAnswer.split(" ").sort(() => Math.random() - 0.5);
  renderPuzzle();
}
function renderPuzzle() {
  const bank = document.getElementById("puzzle-bank"); const target = document.getElementById("puzzle-target");
  bank.innerHTML = ""; target.innerHTML = "";
  const currentBank = [...puzzleShuffledTokens];
  puzzleTargetTokens.forEach(t => { const idx = currentBank.indexOf(t); if (idx > -1) currentBank.splice(idx, 1); });
  currentBank.forEach(t => { const span = document.createElement("span"); span.className = "token"; span.textContent = t; span.onclick = () => { puzzleTargetTokens.push(t); renderPuzzle(); }; bank.appendChild(span); });
  puzzleTargetTokens.forEach((t, i) => { const span = document.createElement("span"); span.className = "token"; span.textContent = t; span.onclick = () => { puzzleTargetTokens.splice(i, 1); renderPuzzle(); }; target.appendChild(span); });
}
function checkPuzzle() {
  const user = puzzleTargetTokens.join(" ");
  const fb = document.getElementById("puzzle-feedback");
  fb.style.color = ""; 
  if (user === currentPuzzleAnswer) { fb.textContent = "정답입니다! 🎉"; fb.className = "feedback ok"; speakText(currentPuzzleAnswer); }
  else { fb.textContent = "오답입니다."; fb.className = "feedback error"; }
}
function resetPuzzle() { puzzleTargetTokens = []; const fb = document.getElementById("puzzle-feedback"); fb.textContent = ""; fb.style.color = ""; renderPuzzle(); }
function showPuzzleAnswer() { const fb = document.getElementById("puzzle-feedback"); fb.textContent = `정답: ${currentPuzzleAnswer}`; fb.className = "feedback-msg"; fb.style.color = "#38bdf8"; }
function movePuzzle(offset) { if (offset === 1) nextPuzzle(); else alert("이전 문제는 지원하지 않습니다. (랜덤 방식)"); }

// ==========================================
// 10. TTS 설정
// ==========================================
let ttsVoices = []; let userVoiceIndex = null; let userRate = 1.0; let userFontSize = 'medium'; let autoPlayEnabled = true; let voiceA = null; let voiceB = null;
function loadVoices() {
  ttsVoices = window.speechSynthesis.getVoices();
  const sel = document.getElementById("tts-voice-select");
  if(sel) { sel.innerHTML = '<option value="">기본 목소리</option>'; ttsVoices.forEach((v, i) => { if(v.lang.includes("en")) { const opt = document.createElement("option"); opt.value = i; opt.textContent = `${v.name} (${v.lang})`; sel.appendChild(opt); } }); }
  const enVoices = ttsVoices.filter(v => v.lang.includes("en"));
  const preferredVoices = enVoices.filter(v => v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Siri"));
  if (preferredVoices.length >= 2) { voiceA = preferredVoices[0]; voiceB = preferredVoices[1]; } else if (enVoices.length >= 2) { voiceA = enVoices[0]; voiceB = enVoices[1]; } else if (enVoices.length === 1) { voiceA = enVoices[0]; voiceB = enVoices[0]; }
  const raw = localStorage.getItem("ttsSettings");
  if(raw) { const d = JSON.parse(raw); userVoiceIndex = d.voiceIndex; userRate = d.rate || 1.0; if (d.autoPlay !== undefined) autoPlayEnabled = d.autoPlay; if (d.fontSize) userFontSize = d.fontSize; }
  applyFontSizeToBody(userFontSize);
}
if("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = loadVoices;
function speakText(text, speaker = null) {
  if (!("speechSynthesis" in window)) { alert("이 브라우저는 음성 합성을 지원하지 않습니다."); return; }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text); u.lang = "en-US"; u.rate = userRate || 1.0;
  if (userVoiceIndex !== null && ttsVoices[userVoiceIndex]) { u.voice = ttsVoices[userVoiceIndex]; } 
  else if (speaker === 'A' && voiceA) { u.voice = voiceA; u.pitch = 1.0; } else if (speaker === 'B' && voiceB) { u.voice = voiceB; if (voiceA === voiceB) u.pitch = 0.8; else u.pitch = 1.0; }
  window.speechSynthesis.speak(u);
}
function speakWithPromise(text, speaker) {
  return new Promise(resolve => {
    const u = new SpeechSynthesisUtterance(text); u.lang = "en-US"; u.rate = userRate || 1.0;
    if (userVoiceIndex !== null && ttsVoices[userVoiceIndex]) { u.voice = ttsVoices[userVoiceIndex]; } else if (speaker === 'A' && voiceA) { u.voice = voiceA; u.pitch = 1.0; } else if (speaker === 'B' && voiceB) { u.voice = voiceB; if (voiceA === voiceB) u.pitch = 0.8; else u.pitch = 1.0; }
    u.onend = resolve; u.onerror = resolve;
    window.speechSynthesis.speak(u);
  });
}
function openSettingsModal() {
  const currentPage = history.state ? history.state.page : 'home'; history.pushState({ page: currentPage, modal: 'settings' }, "", "#settings");
  document.getElementById("settings-modal").classList.remove("hidden");
  const sel = document.getElementById("tts-voice-select"); const chk = document.getElementById("tts-autoplay-toggle");
  if(sel) sel.value = userVoiceIndex !== null ? userVoiceIndex : ""; if(chk) chk.checked = autoPlayEnabled;
  updateButtonGroup('speed-btn-group', userRate); updateButtonGroup('font-btn-group', userFontSize);
}
function closeSettingsModal() { if (history.state && history.state.modal === 'settings') history.back(); else document.getElementById("settings-modal").classList.add("hidden"); }
function updateButtonGroup(groupId, activeValue) { const group = document.getElementById(groupId); if(!group) return; group.querySelectorAll('button').forEach(btn => { if (btn.getAttribute('data-value') == activeValue) btn.classList.add('active'); else btn.classList.remove('active'); }); }
function setTtsRate(rate, btn) { userRate = parseFloat(rate); updateButtonGroup('speed-btn-group', userRate); previewVoiceSettings(); }
function setAppFontSize(size, btn) { userFontSize = size; updateButtonGroup('font-btn-group', userFontSize); applyFontSizeToBody(size); }
function applyFontSizeToBody(size) { const root = document.documentElement; root.classList.remove('font-small', 'font-medium', 'font-large'); root.classList.add(`font-${size}`); }
function previewVoiceSettings() { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance("Hello."); u.lang = "en-US"; u.rate = userRate; if(document.getElementById("tts-voice-select").value && ttsVoices[document.getElementById("tts-voice-select").value]) u.voice = ttsVoices[document.getElementById("tts-voice-select").value]; window.speechSynthesis.speak(u); }
function saveSettings() { userVoiceIndex = document.getElementById("tts-voice-select").value || null; autoPlayEnabled = document.getElementById("tts-autoplay-toggle").checked; localStorage.setItem("ttsSettings", JSON.stringify({ voiceIndex: userVoiceIndex, rate: userRate, autoPlay: autoPlayEnabled, fontSize: userFontSize })); closeSettingsModal(); }

// ==========================================
// 18. 블로그 (요약 노트)
// ==========================================
let currentBlogType = 'pattern'; let currentBlogIndex = 0;
function filterBlog(type, btn) {
  currentBlogType = type;
  const btns = document.querySelectorAll('#page-blog-list .chip-btn');
  btns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderBlogList();
}
function renderBlogList() {
  const container = document.getElementById('blog-list-container');
  container.innerHTML = "";
  let targetData = []; let label = ""; let tagClass = "";
  if (currentBlogType === 'pattern') { targetData = (typeof patternData !== 'undefined') ? patternData : []; label = "Pattern Note"; tagClass = "tag-pattern"; }
  else if (currentBlogType === 'idiom') { targetData = (typeof idiomData !== 'undefined') ? idiomData : []; label = "Idiom Note"; tagClass = "tag-conv"; }
  else if (currentBlogType === 'word') { targetData = (typeof wordData !== 'undefined') ? wordData : []; label = "Vocabulary"; tagClass = "tag-word"; }

  if (targetData.length === 0) { container.innerHTML = "<div style='text-align:center; padding:20px; color:#888;'>데이터가 없습니다.</div>"; return; }
  const chunkSize = 50; const totalChunks = Math.ceil(targetData.length / chunkSize);
  for (let i = 0; i < totalChunks; i++) {
    const start = i * chunkSize + 1; const end = Math.min((i + 1) * chunkSize, targetData.length);
    const div = document.createElement("div"); div.className = "blog-card";
    div.onclick = () => openBlogPost(currentBlogType, i);
    div.innerHTML = `<span class="blog-tag ${tagClass}">${label}</span><div class="blog-title">${getBlogTitle(currentBlogType)} Vol.${i + 1}</div><div class="blog-desc">No. ${start} ~ ${end} 핵심 정리</div>`;
    container.appendChild(div);
  }
}
function getBlogTitle(type) { if (type === 'pattern') return "필수 영어 패턴"; if (type === 'idiom') return "숙어 & 구동사"; if (type === 'word') return "우선순위 영단어"; return "학습 노트"; }
function openBlogPost(type, index) { currentBlogType = type; currentBlogIndex = index; goTo('blog-detail'); }
// [수정됨] 블로그 상세 내용 그리기 (25개씩 페이지 그룹화)
function renderBlogDetail() {
  const contentBox = document.getElementById('paper-content');
  contentBox.innerHTML = "";
  
  // 현재 선택된 50개 단위 데이터 가져오기
  const chunkSize = 50; 
  const startIndex = currentBlogIndex * chunkSize;
  
  let targetData = []; 
  let titlePrefix = "";

  if (currentBlogType === 'pattern') { targetData = patternData; titlePrefix = "Pattern Note"; }
  else if (currentBlogType === 'idiom') { targetData = idiomData; titlePrefix = "Idiom Note"; }
  else if (currentBlogType === 'word') { targetData = wordData; titlePrefix = "Vocabulary"; }

  const dataSlice = targetData.slice(startIndex, startIndex + chunkSize);

  // [핵심 변경] 25개씩 잘라서 별도의 페이지(div)로 만듦
  const itemsPerPage = 25;
  const totalPages = Math.ceil(dataSlice.length / itemsPerPage);

  for (let p = 0; p < totalPages; p++) {
    const pageStart = p * itemsPerPage;
    const pageEnd = Math.min((p + 1) * itemsPerPage, dataSlice.length);
    const pageItems = dataSlice.slice(pageStart, pageEnd);
    
    // 페이지 컨테이너 생성
    const pageDiv = document.createElement('div');
    pageDiv.className = 'print-page'; // CSS에서 이 클래스를 제어함

    // 페이지 헤더 (제목)
    const headerHtml = `
      <div class="paper-header-area">
        <div class="paper-title">${titlePrefix} Vol.${currentBlogIndex + 1}</div>
        <div class="paper-page-num">Page ${p + 1} / ${totalPages} (No. ${startIndex + pageStart + 1} - ${startIndex + pageEnd})</div>
      </div>
    `;
    
    // 아이템 목록 생성
    let listHtml = '<div class="paper-list-grid">'; // 그리드 레이아웃 적용
    pageItems.forEach((item, idx) => {
      const globalNum = startIndex + pageStart + idx + 1;
      let mainText = ""; 
      let subText = ""; 
      // 인쇄 공간 절약을 위해 예문은 제외하거나 아주 짧게 처리 (여기서는 제외하여 공간 확보)
      
      if (currentBlogType === 'pattern') { 
        mainText = item.title; subText = item.desc; 
      } else if (currentBlogType === 'idiom') { 
        mainText = item.idiom; subText = item.meaning; 
      } else if (currentBlogType === 'word') { 
        mainText = item.word; subText = item.meaning; 
      }
      
      listHtml += `
        <div class="paper-item-compact">
          <div class="pi-num">${globalNum}.</div>
          <div class="pi-content">
            <div class="pi-main">${mainText}</div>
            <div class="pi-sub">${subText}</div>
          </div>
        </div>
      `;
    });
    listHtml += '</div>'; // grid end

    // 페이지 조립
    pageDiv.innerHTML = headerHtml + listHtml;
    contentBox.appendChild(pageDiv);
  }
}
function printPaperContent() { window.print(); }

// Firebase & EmailJS & News
const NEWS_TOPICS = [
  "https://news.google.com/rss/search?q=South+Korea+(k-pop+OR+k-drama+OR+movie)+(popular+OR+success)&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=South+Korea+(technology+OR+samsung+OR+economy)+(growth+OR+innovation)&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=South+Korea+(food+OR+travel+OR+trend)+(viral+OR+famous)&hl=en-US&gl=US&ceid=US:en"
];
let currentTopicIndex = 0;
function refreshNews() { fetchRealNews(); }
async function fetchRealNews() {
  const container = document.getElementById('news-card-list'); if (!container) return;
  container.innerHTML = `<div style="padding:30px; text-align:center; color:#94a3b8; font-size:0.9rem; width:100%;">🔄 Mixing fresh stories...<br><span style="font-size:0.8rem; opacity:0.7">Topic ${currentTopicIndex + 1} Loading</span></div>`;
  const currentRssUrl = NEWS_TOPICS[currentTopicIndex]; const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(currentRssUrl)}`;
  try {
    const response = await fetch(apiUrl); const data = await response.json();
    if (data.status === 'ok') {
      container.innerHTML = "";
      let allArticles = data.items.slice(0, 15); const shuffled = allArticles.sort(() => 0.5 - Math.random()); const selectedArticles = shuffled.slice(0, 3);
      selectedArticles.forEach(item => {
        const cleanTitle = item.title.split(" - ")[0]; const sourceName = item.title.split(" - ")[1] || "News"; const timeAgo = getTimeAgo(new Date(item.pubDate));
        const card = document.createElement('div'); card.className = 'news-card'; card.onclick = () => window.open(item.link, '_blank');
        let topicTag = "#Trending"; if (currentTopicIndex === 0) topicTag = "#K-Culture"; else if (currentTopicIndex === 1) topicTag = "#Tech&Biz"; else if (currentTopicIndex === 2) topicTag = "#Lifestyle";
        card.innerHTML = `<div><span class="news-tag">${topicTag}</span><div class="news-title">${cleanTitle}</div><div class="news-summary" style="font-size:0.8rem; color:#94a3b8;">${item.description ? item.description.replace(/<[^>]*>?/gm, '').substring(0, 70) + "..." : "Click to read more."}</div></div><div class="news-footer"><span>${sourceName}</span> • <span>${timeAgo}</span></div>`;
        container.appendChild(card);
      });
      currentTopicIndex = (currentTopicIndex + 1) % NEWS_TOPICS.length;
    } else { throw new Error("API Error"); }
  } catch (error) { loadBackupNews(); }
}
function loadBackupNews() {
  const container = document.getElementById('news-card-list'); container.innerHTML = "";
  const newsData = [{ tag: "K-Culture", title: "Han Kang wins Nobel Prize", summary: "South Korean author Han Kang brings home the Nobel Prize.", source: "CNN", url: "https://edition.cnn.com/" }];
  newsData.forEach(news => {
    const card = document.createElement('div'); card.className = 'news-card'; card.onclick = () => window.open(news.url, '_blank');
    card.innerHTML = `<div><span class="news-tag">#${news.tag}</span><div class="news-title">${news.title}</div><div class="news-summary">${news.summary}</div></div><div class="news-footer">Source: ${news.source}</div>`;
    container.appendChild(card);
  });
}
function getTimeAgo(date) { const seconds = Math.floor((new Date() - date) / 1000); let interval = seconds / 3600; if (interval > 1) return Math.floor(interval) + " hours ago"; return "Just now"; }
function initNewsUpdater() { fetchRealNews(); }
function openContactModal() { document.getElementById('settings-modal').classList.add('hidden'); document.getElementById('contact-modal').classList.remove('hidden'); }
function closeContactModal() { document.getElementById('contact-modal').classList.add('hidden'); }
function sendInquiry() {
  const msg = document.getElementById('contact-msg').value; if (!msg.trim()) return alert("내용을 입력해주세요.");
  const sendBtn = document.querySelector('#contact-modal .btn-main'); const originalText = sendBtn.innerText; sendBtn.innerText = "전송 중..."; sendBtn.disabled = true;
  if (typeof emailjs !== 'undefined') {
    emailjs.send('service_c7njd5n', 'template_7tws5sz', { message: msg, to_name: "Admin" }).then(() => { alert("✅ 소중한 의견이 전송되었습니다!"); document.getElementById('contact-msg').value = ""; closeContactModal(); })
    .finally(() => { sendBtn.innerText = originalText; sendBtn.disabled = false; });
  } else { alert("EmailJS 라이브러리 로드 실패"); sendBtn.disabled = false; }
}
// Firebase Setup
const firebaseConfig = { apiKey: "AIzaSyCdr88Bomc9SQzZBj03iih3epxivhPL63I", authDomain: "engo-9c8e3.firebaseapp.com", projectId: "engo-9c8e3", storageBucket: "engo-9c8e3.firebasestorage.app", messagingSenderId: "252712209702", appId: "1:252712209702:web:5ed2ccb9f07230824d45e7", measurementId: "G-KHE07H3HKR" };
let db; if (typeof firebase !== "undefined") { try { firebase.initializeApp(firebaseConfig); db = firebase.firestore(); } catch (e) { console.error(e); } }
function openSyncModal(pushHistory = true) { if (pushHistory) { const currentPage = history.state ? history.state.page : 'home'; history.pushState({ page: currentPage, modal: 'sync' }, "", "#sync"); } document.getElementById("sync-modal").classList.remove("hidden"); const savedAuth = localStorage.getItem("syncAuth"); if (savedAuth) { const authData = JSON.parse(savedAuth); document.getElementById("sync-id").value = authData.id; document.getElementById("sync-pw").value = authData.pw; document.getElementById("sync-remember").checked = true; } }
function closeSyncModal() { if (history.state && history.state.modal === 'sync') history.back(); else document.getElementById("sync-modal").classList.add("hidden"); }
function handleRememberAuth(id, pw) { const isRemember = document.getElementById("sync-remember").checked; if (isRemember) localStorage.setItem("syncAuth", JSON.stringify({ id: id, pw: pw })); else localStorage.removeItem("syncAuth"); }
async function uploadData() {
  const id = document.getElementById("sync-id").value.trim(); const pw = document.getElementById("sync-pw").value.trim();
  if(!id || !pw) return alert("아이디와 비밀번호를 입력해주세요."); if(!db) return alert("DB 연결 실패");
  handleRememberAuth(id, pw);
  try {
    const ref = db.collection("users").doc(id); const doc = await ref.get();
    if(doc.exists) { if(doc.data().password !== pw) return alert("비밀번호 불일치"); if(!confirm("덮어쓰시겠습니까?")) return; }
    await ref.set({ password: pw, updatedAt: new Date().toISOString(), patterns: Array.from(memorizedPatterns), words: Array.from(memorizedWords), idioms: Array.from(memorizedIdioms), settings: { voiceIndex: userVoiceIndex, rate: userRate, autoPlay: autoPlayEnabled, fontSize: userFontSize, wordLevel: selectedWordLevel, idiomLevel: selectedIdiomLevel, filterPattern: patternStudyingOnly, filterWord: wordStudyingOnly, filterIdiom: idiomStudyingOnly } });
    alert("✅ 저장 완료"); closeSyncModal();
  } catch(e) { alert("오류: " + e.message); }
}
async function downloadData() {
  const id = document.getElementById("sync-id").value.trim(); const pw = document.getElementById("sync-pw").value.trim();
  if(!id || !pw) return alert("아이디와 비밀번호를 입력해주세요."); if(!db) return alert("DB 연결 실패");
  handleRememberAuth(id, pw);
  try {
    const ref = db.collection("users").doc(id); const doc = await ref.get();
    if(!doc.exists) return alert("존재하지 않는 아이디입니다."); if(doc.data().password !== pw) return alert("비밀번호 불일치");
    if(!confirm("불러오시겠습니까?")) return;
    const d = doc.data();
    if(d.patterns) memorizedPatterns = new Set(d.patterns); if(d.words) memorizedWords = new Set(d.words); if(d.idioms) memorizedIdioms = new Set(d.idioms);
    if(d.settings) {
       userVoiceIndex = d.settings.voiceIndex; userRate = d.settings.rate || 1.0; if(d.settings.autoPlay !== undefined) autoPlayEnabled = d.settings.autoPlay; if(d.settings.fontSize) { userFontSize = d.settings.fontSize; applyFontSizeToBody(userFontSize); }
       if(d.settings.wordLevel !== undefined) selectedWordLevel = d.settings.wordLevel; if(d.settings.idiomLevel !== undefined) selectedIdiomLevel = d.settings.idiomLevel;
       if(d.settings.filterPattern !== undefined) patternStudyingOnly = d.settings.filterPattern; if(d.settings.filterWord !== undefined) wordStudyingOnly = d.settings.filterWord; if(d.settings.filterIdiom !== undefined) idiomStudyingOnly = d.settings.filterIdiom;
    }
    localStorage.setItem("selectedWordLevel", selectedWordLevel); localStorage.setItem("selectedIdiomLevel", selectedIdiomLevel);
    localStorage.setItem("patternStudyingOnly", patternStudyingOnly); localStorage.setItem("wordStudyingOnly", wordStudyingOnly); localStorage.setItem("idiomStudyingOnly", idiomStudyingOnly);
    saveDataLocally('pattern'); saveDataLocally('word'); saveDataLocally('idiom');
    updatePatternProgress(); updateWordProgress(); updateIdiomProgress();
    const currPage = history.state ? history.state.page : 'home';
    if (currPage === 'patterns') renderPatternList(); if (currPage === 'words') renderWordList(); if (currPage === 'idioms') renderIdiomList();
    alert("✅ 불러오기 완료"); closeSyncModal();
  } catch(e) { alert("오류: " + e.message); }
}

// Init Execution
loadMemorizedData(); loadVoices(); initNewsUpdater();
const initialPage = location.hash.replace('#', '') || 'home'; goTo(initialPage, true);

