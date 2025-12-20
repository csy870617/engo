// ==========================================
// 학습 관련 기능 (패턴, 단어, 숙어, 회화, 블로그)
// ==========================================

// --- Helper Functions ---
function moveItemInList(currentId, list, offset, openFunc) {
  if (!list || list.length === 0) { alert("목록이 비어있습니다."); return; }
  const idx = list.findIndex(item => item.id === currentId);
  if (idx === -1) { openFunc(list[0].id); return; }
  const nextIdx = idx + offset;
  if (nextIdx >= 0 && nextIdx < list.length) openFunc(list[nextIdx].id);
  else alert(offset > 0 ? "마지막 항목입니다." : "첫 번째 항목입니다.");
}

// --- 1. Patterns ---
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
      if (patternStudyingOnly) renderPatternList(); else updatePatternProgress();
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
function togglePatternStudying() { patternStudyingOnly = !patternStudyingOnly; localStorage.setItem("patternStudyingOnly", patternStudyingOnly); renderPatternList(); }
function togglePatternMemorizedDetail() { const chk = document.getElementById("pattern-memorized-checkbox"); if (chk.checked) memorizedPatterns.add(currentPatternId); else memorizedPatterns.delete(currentPatternId); saveData('pattern'); updatePatternProgress(); }
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
function movePattern(o) { moveItemInList(currentPatternId, currentPatternList, o, openPattern); }

// --- 2. Words ---
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
      if (wordStudyingOnly) renderWordList(); else updateWordProgress();
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
function openWord(id) { currentWordId = id; localStorage.setItem("currentWordId", id); goTo("word-detail"); if (autoPlayEnabled) playWordExamples(); }
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
function toggleWordMemorizedDetail() { const chk = document.getElementById("word-memorized-checkbox"); if (chk.checked) memorizedWords.add(currentWordId); else memorizedWords.delete(currentWordId); saveData('word'); updateWordProgress(); }
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
function moveWord(o) { moveItemInList(currentWordId, currentWordList, o, openWord); }

// --- 3. Idioms ---
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
function setIdiomLevel(lvl) { selectedIdiomLevel = lvl; localStorage.setItem("selectedIdiomLevel", lvl); renderIdiomList(); }
function toggleIdiomStudying() { idiomStudyingOnly = !idiomStudyingOnly; localStorage.setItem("idiomStudyingOnly", idiomStudyingOnly); renderIdiomList(); }
function openIdiom(id) { currentIdiomId = id; localStorage.setItem("currentIdiomId", id); goTo("idiom-detail"); if (autoPlayEnabled) playIdiomExamples(); }
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
function toggleIdiomMemorizedDetail() { const chk = document.getElementById("idiom-memorized-checkbox"); if (chk.checked) memorizedIdioms.add(currentIdiomId); else memorizedIdioms.delete(currentIdiomId); saveData('idiom'); updateIdiomProgress(); }
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
function moveIdiom(o) { moveItemInList(currentIdiomId, currentIdiomList, o, openIdiom); }

// --- 4. Conversations ---
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
function openConversation(id) { currentConvId = id; localStorage.setItem("currentConvId", id); goTo("conv-detail"); if (autoPlayEnabled) playConversationAll(); }
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
function moveConv(o) { moveItemInList(currentConvId, currentConvList, o, openConversation); }

// --- 5. Shadowing ---
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
function startShadowingFromConv(id) {
  currentShadowingId = id;
  shadowingLineIndex = 0;
  goTo("shadowing");
  isBlindMode = true; isHideKr = false; updateShadowingOptionsUI();
  setTimeout(() => { updateShadowingUI(); playShadowingCurrent(); }, 100);
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

// --- 6. Blog (Print View) ---
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
function renderBlogDetail() {
  const contentBox = document.getElementById('paper-content'); contentBox.innerHTML = "";
  const chunkSize = 50; const startIndex = currentBlogIndex * chunkSize;
  let targetData = []; let titlePrefix = "";
  if (currentBlogType === 'pattern') { targetData = patternData; titlePrefix = "Pattern Note"; }
  else if (currentBlogType === 'idiom') { targetData = idiomData; titlePrefix = "Idiom Note"; }
  else if (currentBlogType === 'word') { targetData = wordData; titlePrefix = "Vocabulary"; }
  const dataSlice = targetData.slice(startIndex, startIndex + chunkSize);
  
  const itemsPerPage = 50;
  const totalPages = Math.ceil(dataSlice.length / itemsPerPage);

  for (let p = 0; p < totalPages; p++) {
    const pageStart = p * itemsPerPage;
    const pageEnd = Math.min((p + 1) * itemsPerPage, dataSlice.length);
    const pageItems = dataSlice.slice(pageStart, pageEnd);
    
    const pageDiv = document.createElement('div');
    pageDiv.className = 'print-page';
    const headerHtml = `<div class="paper-header-area"><div class="paper-title">${titlePrefix} Vol.${currentBlogIndex + 1}</div><div class="paper-page-num">(No. ${startIndex + 1} - ${startIndex + pageEnd})</div></div>`;
    let listHtml = '<div class="paper-list-grid">';
    pageItems.forEach((item, idx) => {
      let mainText = ""; let subText = "";
      if (currentBlogType === 'pattern') { mainText = item.title; subText = item.desc; }
      else if (currentBlogType === 'idiom') { mainText = item.idiom; subText = item.meaning; }
      else if (currentBlogType === 'word') { mainText = item.word; subText = item.meaning; }
      
      listHtml += `<div class="paper-item-compact"><div class="pi-content"><div class="pi-main">${mainText}</div><div class="pi-sub">${subText}</div></div></div>`;
    });
    listHtml += '</div>';
    pageDiv.innerHTML = headerHtml + listHtml;
    contentBox.appendChild(pageDiv);
  }
}
function printPaperContent() { window.print(); }