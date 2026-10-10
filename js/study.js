// ==========================================
// 학습 관련 기능 (패턴, 단어, 숙어, 회화, 블로그)
// ==========================================

// --- Helper Functions ---
function moveItemInList(currentId, list, offset, openFunc, order) {
  if (!list || list.length === 0) { showToast("목록이 비어 있어요"); return; }
  const idx = list.findIndex(item => item.id === currentId);
  if (idx === -1) {
    // 지금 항목이 필터(미암기만·미완료만)로 목록에서 빠졌으면: 원래 순서에서 그 방향으로 가장 가까운 항목으로 (맨 앞으로 튀지 않게)
    const bi = (order || []).findIndex(item => item.id === currentId);
    if (bi === -1) { openFunc(list[0].id); return; }
    const inList = new Set(list.map(x => x.id));
    for (let i = bi + offset; i >= 0 && i < order.length; i += offset) if (inList.has(order[i].id)) { openFunc(order[i].id); return; }
    showToast(offset > 0 ? "마지막 항목이에요" : "첫 항목이에요");
    return;
  }
  const nextIdx = idx + offset;
  if (nextIdx >= 0 && nextIdx < list.length) openFunc(list[nextIdx].id);
  else showToast(offset > 0 ? "마지막 항목이에요" : "첫 항목이에요");
}

// --- 1. Patterns ---
let patternCategory = "";
function setPatternCategory(cat) { patternCategory = cat; renderPatternList(); }
function renderPatternList() {
  const container = document.getElementById("pattern-list");
  if (!container || typeof patternData === "undefined") return;
  const filterBtn = document.getElementById("pattern-studying-btn");
  if (filterBtn) filterBtn.classList.toggle("active", patternStudyingOnly);
  
  const keyword = (document.getElementById("pattern-search")?.value || "").toLowerCase();
  container.innerHTML = "";
  
  renderCategoryChips("pattern-cats", patternData, patternCategory, setPatternCategory);
  const matched = patternData.filter((p) => {
    const matchCat = !patternCategory || categoryOf(p) === patternCategory;
    const matchText = (categoryOf(p) + p.title + p.desc).toLowerCase().includes(keyword);
    const matchStudy = !patternStudyingOnly || !memorizedPatterns.has(p.id);
    return matchCat && matchText && matchStudy;
  });
  // 화면에 보이는 순서(상황별) 그대로 전체 듣기·이전/다음 패턴이 진행되도록
  const filtered = categoriesOf(patternData).flatMap(cat => matched.filter(p => categoryOf(p) === cat));
  currentPatternList = filtered;

  filtered.forEach((p, i) => {
    if (i === 0 || categoryOf(filtered[i - 1]) !== categoryOf(p)) appendGroupTitle(container, categoryOf(p), filtered.filter(x => categoryOf(x) === categoryOf(p)).length);
    const div = document.createElement("div");
    div.className = "list-item";
    div.dataset.id = p.id;
    if (memorizedPatterns.has(p.id)) div.classList.add("memorized");
    div.onclick = () => openPattern(p.id);
    div.innerHTML = `<div><div class="list-item-title">${p.title}</div><div class="list-item-sub">${p.desc}</div></div>`;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "pattern-check";
    check.checked = memorizedPatterns.has(p.id);
    check.onclick = (e) => {
      e.stopPropagation();
      markMemorized('pattern', p.id, check.checked);
      div.classList.toggle("memorized", check.checked);
      if (patternStudyingOnly) renderPatternList(); else updatePatternProgress();
    };
    div.appendChild(check);
    container.appendChild(div);
  });
  if (filtered.length === 0) container.innerHTML = keyword || !patternStudyingOnly ? '<div class="list-item"><div>검색 결과가 없습니다.</div></div>'
    : '<div class="list-item"><div>🎉 모두 완료했어요! \'미완료만 보기\'를 끄면 전체 목록이 보여요.</div></div>';
  afterListRender('pattern');
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
function togglePatternStudying() { patternStudyingOnly = !patternStudyingOnly; localStorage.setItem("patternStudyingOnly", patternStudyingOnly); if (typeof touchSettings === "function") touchSettings(); renderPatternList(); }
function togglePatternMemorizedDetail() { const chk = document.getElementById("pattern-memorized-checkbox"); markMemorized('pattern', currentPatternId, chk.checked); updatePatternProgress(); }
async function playPatternExamples() {
  stopAudio();
  currentAudioSessionId++;
  const mySessionId = currentAudioSessionId;
  isConversationPlaying = true;
  const p = patternData.find(x => x.id === currentPatternId);
  if (!p) { isConversationPlaying = false; return; }
  // 자연스러운 음성: 지금 문장을 요청한 뒤 다음 문장을 미리 만들어 둔다 (작업자는 요청 순서대로 처리)
  const firstDone = speakWithPromise(p.title);
  prefetchAhead(p.examples.slice(0, 2).map(ex => [ex.en]));
  await firstDone;
  if (currentAudioSessionId !== mySessionId || !isConversationPlaying) return;
  await new Promise(resolve => setTimeout(resolve, 800));
  for (let i = 0; i < p.examples.length; i++) {
    const ex = p.examples[i];
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    const done = speakWithPromise(ex.en);
    prefetchAhead(p.examples.slice(i + 1, i + 3).map(e => [e.en]));
    await done;
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  if (currentAudioSessionId === mySessionId) isConversationPlaying = false;
}
function movePattern(o) { moveItemInList(currentPatternId, currentPatternList, o, openPattern, categoriesOf(patternData).flatMap(cat => patternData.filter(p => categoryOf(p) === cat))); }

// --- 2. Words ---
let wordSearchTimer = null;
function renderWordListSoon() { clearTimeout(wordSearchTimer); wordSearchTimer = setTimeout(renderWordList, 150); }
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
    div.dataset.id = w.id;
    if (memorizedWords.has(w.id)) div.classList.add("memorized");
    div.onclick = () => openWord(w.id);
    div.innerHTML = `<div><div class="list-item-title">${w.word} - ${w.meaning}</div><div class="list-item-sub">${w.examples?.[0]?.kr || ""}</div></div>`;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "word-check";
    check.checked = memorizedWords.has(w.id);
    check.onclick = (e) => {
      e.stopPropagation();
      markMemorized('word', w.id, check.checked);
      div.classList.toggle("memorized", check.checked);
      if (wordStudyingOnly) renderWordList(); else updateWordProgress();
    };
    div.appendChild(check);
    container.appendChild(div);
  });
  if (filtered.length === 0) container.innerHTML = keyword || !wordStudyingOnly ? '<div class="list-item"><div>검색 결과가 없습니다.</div></div>'
    : `<div class="list-item"><div>🎉 ${selectedWordLevel ? '이 레벨 ' : ''}단어를 모두 외웠어요! '미암기만'을 끄면 전체가 보여요.</div></div>`;
  afterListRender('word');
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
function setWordLevel(lvl) { selectedWordLevel = lvl; localStorage.setItem("selectedWordLevel", lvl); if (typeof touchSettings === "function") touchSettings(); renderWordList(); }
function toggleWordStudying() { wordStudyingOnly = !wordStudyingOnly; localStorage.setItem("wordStudyingOnly", wordStudyingOnly); if (typeof touchSettings === "function") touchSettings(); renderWordList(); }
function openWord(id) { currentWordId = id; localStorage.setItem("currentWordId", id); goTo("word-detail"); if (autoPlayEnabled) playWordExamples(); }
function renderWordDetail() {
  const w = wordData.find(x => x.id === currentWordId);
  if (!w) return;
  document.getElementById("word-title").textContent = `${w.word} - ${w.meaning}`;
  document.getElementById("word-desc").textContent = w.examples?.[0]?.kr || w.meaning;
  document.getElementById("word-memorized-checkbox").checked = memorizedWords.has(currentWordId);
  renderWordExamples();
}
function renderWordExamples() {
  const w = wordData.find(x => x.id === currentWordId);
  if (!w) return;
  const showKr = document.getElementById("word-toggle-kr").checked;
  const desc = document.getElementById("word-desc"); if (desc) desc.style.visibility = showKr ? "" : "hidden";
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
function toggleWordMemorizedDetail() { const chk = document.getElementById("word-memorized-checkbox"); markMemorized('word', currentWordId, chk.checked); updateWordProgress(); }
async function playWordExamples() {
  stopAudio();
  currentAudioSessionId++;
  const mySessionId = currentAudioSessionId;
  isConversationPlaying = true;
  const w = wordData.find(x => x.id === currentWordId);
  if (!w) { isConversationPlaying = false; return; }
  // 자연스러운 음성: 지금 문장을 요청한 뒤 다음 문장을 미리 만들어 둔다 (작업자는 요청 순서대로 처리)
  const firstDone = speakWithPromise(w.word);
  prefetchAhead(w.examples.slice(0, 2).map(ex => [ex.en]));
  await firstDone;
  if (currentAudioSessionId !== mySessionId || !isConversationPlaying) return;
  await new Promise(resolve => setTimeout(resolve, 800));
  for (let i = 0; i < w.examples.length; i++) {
    const ex = w.examples[i];
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    const done = speakWithPromise(ex.en);
    prefetchAhead(w.examples.slice(i + 1, i + 3).map(e => [e.en]));
    await done;
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  if (currentAudioSessionId === mySessionId) isConversationPlaying = false;
}
function moveWord(o) { moveItemInList(currentWordId, currentWordList, o, openWord, wordData); }

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
    div.dataset.id = i.id;
    if (memorizedIdioms.has(i.id)) div.classList.add("memorized");
    div.onclick = () => openIdiom(i.id);
    div.innerHTML = `<div><div class="list-item-title">${i.idiom} - ${i.meaning}</div><div class="list-item-sub">${i.desc}</div></div>`;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "idiom-check";
    check.checked = memorizedIdioms.has(i.id);
    check.onclick = (e) => {
      e.stopPropagation();
      markMemorized('idiom', i.id, check.checked);
      div.classList.toggle("memorized", check.checked);
      if (idiomStudyingOnly) renderIdiomList();
    };
    div.appendChild(check);
    container.appendChild(div);
  });
  if (filtered.length === 0) container.innerHTML = keyword || !idiomStudyingOnly ? '<div class="list-item"><div>검색 결과가 없습니다.</div></div>'
    : `<div class="list-item"><div>🎉 ${selectedIdiomLevel ? '이 레벨 ' : ''}숙어를 모두 외웠어요! '미암기만'을 끄면 전체가 보여요.</div></div>`;
  afterListRender('idiom');
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
function setIdiomLevel(lvl) { selectedIdiomLevel = lvl; localStorage.setItem("selectedIdiomLevel", lvl); if (typeof touchSettings === "function") touchSettings(); renderIdiomList(); }
function toggleIdiomStudying() { idiomStudyingOnly = !idiomStudyingOnly; localStorage.setItem("idiomStudyingOnly", idiomStudyingOnly); if (typeof touchSettings === "function") touchSettings(); renderIdiomList(); }
function openIdiom(id) { currentIdiomId = id; localStorage.setItem("currentIdiomId", id); goTo("idiom-detail"); if (autoPlayEnabled) playIdiomExamples(); }
function renderIdiomDetail() {
  const item = idiomData.find(x => x.id === currentIdiomId);
  if (!item) return;
  document.getElementById("idiom-title").textContent = `${item.idiom} - ${item.meaning}`;
  document.getElementById("idiom-desc").textContent = item.desc;
  document.getElementById("idiom-memorized-checkbox").checked = memorizedIdioms.has(currentIdiomId);
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
function toggleIdiomMemorizedDetail() { const chk = document.getElementById("idiom-memorized-checkbox"); markMemorized('idiom', currentIdiomId, chk.checked); updateIdiomProgress(); }
async function playIdiomExamples() {
  stopAudio();
  currentAudioSessionId++;
  const mySessionId = currentAudioSessionId;
  isConversationPlaying = true;
  const item = idiomData.find(x => x.id === currentIdiomId);
  if (!item) { isConversationPlaying = false; return; }
  // 자연스러운 음성: 지금 문장을 요청한 뒤 다음 문장을 미리 만들어 둔다 (작업자는 요청 순서대로 처리)
  const firstDone = speakWithPromise(item.idiom);
  prefetchAhead(item.examples.slice(0, 2).map(ex => [ex.en]));
  await firstDone;
  if (currentAudioSessionId !== mySessionId || !isConversationPlaying) return;
  await new Promise(resolve => setTimeout(resolve, 800));
  for (let i = 0; i < item.examples.length; i++) {
    const ex = item.examples[i];
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    const done = speakWithPromise(ex.en);
    prefetchAhead(item.examples.slice(i + 1, i + 3).map(e => [e.en]));
    await done;
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  if (currentAudioSessionId === mySessionId) isConversationPlaying = false;
}
function moveIdiom(o) { moveItemInList(currentIdiomId, currentIdiomList, o, openIdiom, idiomData); }

// --- 4. Conversations ---
// 패턴·회화·쉐도잉 목록 공용: 상황(category) 칩과 상황별 머리글
function categoryOf(x) { return x.category || "기타"; }
function categoriesOf(items) { return [...new Set(items.map(categoryOf))]; }
function convCategoryOf(c) { return categoryOf(c); }
function convCategories() { return categoriesOf(conversationData); }
function renderCategoryChips(boxId, items, current, onPick) {
  const box = document.getElementById(boxId);
  if (!box) return;
  box.innerHTML = "";
  ["", ...categoriesOf(items)].forEach(cat => {
    const b = document.createElement("button");
    b.className = "chip-btn" + (cat === current ? " active" : "");
    const n = cat ? items.filter(x => categoryOf(x) === cat).length : items.length;
    b.innerHTML = `${cat || "전체"}<span class="cnt">${n}</span>`;
    b.onclick = () => onPick(cat);
    box.appendChild(b);
  });
}
function renderConvCategoryChips(boxId, current, onPick) { renderCategoryChips(boxId, conversationData, current, onPick); }
function appendGroupTitle(container, cat, n) {
  const head = document.createElement("div");
  head.className = "list-group-title";
  head.innerHTML = `${cat}<span class="cnt">${n}개</span>`;
  container.appendChild(head);
}
let convCategory = "";
function setConvCategory(cat) { convCategory = cat; renderConversationList(); }
function renderConversationList() {
  const container = document.getElementById("conv-list");
  if (!container || typeof conversationData === "undefined") return;
  const filterBtn = document.getElementById("conv-studying-btn");
  if (filterBtn) filterBtn.classList.toggle("active", convStudyingOnly);
  const keyword = (document.getElementById("conv-search")?.value || "").toLowerCase();
  renderConvCategoryChips("conv-cats", convCategory, setConvCategory);
  container.innerHTML = "";
  const matched = conversationData.filter(c => (!convCategory || convCategoryOf(c) === convCategory) &&
    (!convStudyingOnly || !doneConvs.has(c.id)) &&
    (convCategoryOf(c) + c.title + c.lines.map(l => l.en).join(" ") + c.lines.map(l => l.kr).join(" ")).toLowerCase().includes(keyword));
  // 화면에 보이는 순서(상황별) 그대로 전체 듣기·이전/다음 대화가 진행되도록
  currentConvList = convCategories().flatMap(cat => matched.filter(c => convCategoryOf(c) === cat));
  convCategories().forEach(cat => {
    const group = currentConvList.filter(c => convCategoryOf(c) === cat);
    if (group.length === 0) return;
    appendGroupTitle(container, cat, group.length);
    group.forEach(c => {
      const div = document.createElement("div");
      div.className = "list-item";
      div.dataset.id = c.id;
      if (doneConvs.has(c.id)) div.classList.add("memorized");
      div.onclick = () => openConversation(c.id);
      div.innerHTML = `<div><div class="list-item-title">${c.title}</div><div class="list-item-sub">${c.lines[0]?.en || ""}</div></div>`;
      // 완료 체크: 다 익힌 대화는 '미완료만 보기'에서 빠진다
      const check = document.createElement("input");
      check.type = "checkbox";
      check.className = "conv-check";
      check.checked = doneConvs.has(c.id);
      check.setAttribute("aria-label", `${c.title} 완료`);
      check.onclick = (e) => {
        e.stopPropagation();
        markMemorized('conv', c.id, check.checked);
        div.classList.toggle("memorized", check.checked);
        if (convStudyingOnly && check.checked) { showToast("✅ 완료! 목록에서 숨겼어요"); renderConversationList(); }
        else updateConvProgress();
      };
      div.appendChild(check);
      container.appendChild(div);
    });
  });
  if (currentConvList.length === 0) container.innerHTML = keyword || !convStudyingOnly || !doneConvs.size ? '<div class="list-item"><div>검색 결과가 없습니다.</div></div>'
    : '<div class="list-item"><div>🎉 모두 완료했어요! \'미완료만 보기\'를 끄면 전체 목록이 보여요.</div></div>';
  afterListRender('conv');
  updateConvProgress();
}
function updateConvProgress() {
  if (typeof conversationData === "undefined") return;
  const el = document.getElementById("conv-progress"), bar = document.getElementById("conv-progress-bar");
  if (!el || !bar) return;
  const done = conversationData.filter(c => doneConvs.has(c.id)).length, total = conversationData.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  el.textContent = `대화 완료 ${done} / ${total}개 (${percent}%)`;
  bar.style.width = `${percent}%`;
}
function toggleConvStudying() { convStudyingOnly = !convStudyingOnly; localStorage.setItem("convStudyingOnly", convStudyingOnly); if (typeof touchSettings === "function") touchSettings(); renderConversationList(); }
function toggleConvDoneDetail() {
  const chk = document.getElementById("conv-done-checkbox");
  markMemorized('conv', currentConvId, chk.checked);
  if (chk.checked) showToast(convStudyingOnly ? "✅ 완료! 대화 목록에서 숨겨요" : "✅ 완료로 표시했어요");
  updateConvProgress();
}
function openConversation(id) { currentConvId = id; localStorage.setItem("currentConvId", id); goTo("conv-detail"); if (autoPlayEnabled) playConversationAll(); }
function renderConversationDetail() {
  const conv = conversationData.find(c => c.id === currentConvId);
  if (!conv) return;
  document.getElementById("conv-title").textContent = conv.title;
  const doneChk = document.getElementById("conv-done-checkbox");
  if (doneChk) doneChk.checked = doneConvs.has(conv.id);
  // 해석 보기는 사용자가 고른 대로 둔다 (이전/다음 대화로 넘어가도 유지)
  renderConversationLines();
}
// 토글 onchange가 호출 - 현재 체크박스 상태를 그대로 읽어 라인만 다시 그림
// (이전: onchange가 renderConversationDetail을 호출해 매번 checked=true로 강제 → 해석 숨김이 동작하지 않던 버그)
function renderConversationLines() {
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
  if (!conv) { isConversationPlaying = false; return; }
  for (let i = 0; i < conv.lines.length; i++) {
    const line = conv.lines[i];
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break; 
    const done = speakWithPromise(line.en, line.speaker);
    // 자연스러운 음성: 다음 대사 2개를 미리 만들어 둔다 (느린 기기·빠른 속도에서도 끊김 방지)
    prefetchAhead(conv.lines.slice(i + 1, i + 3).map(l => [l.en, l.speaker]));
    await done;
    if (currentAudioSessionId !== mySessionId || !isConversationPlaying) break;
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  if (currentAudioSessionId === mySessionId) isConversationPlaying = false;
}
function moveConv(o) { moveItemInList(currentConvId, currentConvList, o, openConversation, convCategories().flatMap(cat => conversationData.filter(c => convCategoryOf(c) === cat))); }

// --- 4-1. 목록 전체 듣기 (패턴·단어·숙어·대화) ---
// 지금 화면의 목록(검색·레벨·미암기 필터가 적용된 그대로)을 처음부터 순서대로 읽는다.
const LIST_PLAY = {
  pattern: { label: '패턴', list: () => currentPatternList, container: 'pattern-list',
             title: x => x.title, utterances: x => [[x.title], ...(x.examples || []).map(e => [e.en])] },
  word:    { label: '단어', list: () => currentWordList, container: 'word-list',
             title: x => `${x.word} - ${x.meaning}`, utterances: x => [[x.word], ...(x.examples || []).map(e => [e.en])] },
  idiom:   { label: '숙어', list: () => currentIdiomList, container: 'idiom-list',
             title: x => `${x.idiom} - ${x.meaning}`, utterances: x => [[x.idiom], ...(x.examples || []).map(e => [e.en])] },
  conv:    { label: '대화', list: () => currentConvList, container: 'conv-list',
             title: x => x.title, utterances: x => (x.lines || []).map(l => [l.en, l.speaker]) }
};
let listPlayer = null;   // { type, items, index, session, skip }

function toggleListPlay(type) {
  if (listPlayer && listPlayer.type === type) stopAudio();
  else playListAll(type);
}

async function playListAll(type) {
  const cfg = LIST_PLAY[type];
  const items = (cfg.list() || []).slice();
  if (items.length === 0) { showToast("재생할 항목이 없어요"); return; }
  stopAudio();
  currentAudioSessionId++;
  const mySessionId = currentAudioSessionId;
  isConversationPlaying = true;
  const player = { type, items, index: 0, session: mySessionId, skip: false };
  listPlayer = player;
  const alive = () => currentAudioSessionId === mySessionId && isConversationPlaying;
  updateListPlayerUI();

  // 다음에 읽을 문장 n개 (항목이 바뀌는 지점까지 이어서) - 자연스러운 음성 미리 만들기용
  const upcoming = (i, j, n) => {
    const out = [];
    for (let a = i; a < items.length && out.length < n; a++) {
      const u = cfg.utterances(items[a]);
      for (let b = (a === i ? j + 1 : 0); b < u.length && out.length < n; b++) out.push(u[b]);
    }
    return out;
  };

  for (let i = 0; i < items.length && alive(); i++) {
    player.index = i;
    player.skip = false;
    updateListPlayerUI(true);
    const utts = cfg.utterances(items[i]);
    for (let j = 0; j < utts.length; j++) {
      if (!alive() || player.skip) break;
      const done = speakWithPromise(utts[j][0], utts[j][1]);
      prefetchAhead(upcoming(i, j, 2));
      await done;
      if (!alive() || player.skip) break;
      // 문장 사이 0.8초, 항목 사이 1.2초 쉼
      await new Promise(resolve => setTimeout(resolve, j < utts.length - 1 ? 800 : 1200));
    }
  }
  if (currentAudioSessionId === mySessionId) isConversationPlaying = false;
  if (listPlayer === player) { listPlayer = null; updateListPlayerUI(); }
}

/** 지금 항목을 건너뛰고 다음 항목으로 */
function skipListItem() {
  if (!listPlayer) return;
  listPlayer.skip = true;
  if (typeof skipCurrentSpeech === 'function') skipCurrentSpeech();
}

/** stopAudio()에서 호출: 재생이 멈추면 플레이어 표시도 바로 정리 */
function endListPlayback() {
  if (!listPlayer) return;
  listPlayer = null;
  updateListPlayerUI();
}

// scroll: 항목이 바뀔 때만 화면을 따라가게 한다 (검색·체크로 목록이 다시 그려질 땐 스크롤하지 않음)
function updateListPlayerUI(scroll) {
  const bar = document.getElementById('list-player');
  const playing = !!listPlayer;
  document.body.classList.toggle('list-playing', playing);
  if (bar) bar.classList.toggle('hidden', !playing);
  // 목록 화면의 버튼: 재생 중인 목록이면 '중지'로
  document.querySelectorAll('[data-list-play]').forEach(btn => {
    const on = playing && listPlayer.type === btn.dataset.listPlay;
    btn.textContent = on ? '■ 듣기 중지' : '🔊 전체 듣기';
    btn.classList.toggle('active', on);
  });
  // 지금 읽는 항목 강조
  document.querySelectorAll('.list-item.playing').forEach(el => el.classList.remove('playing'));
  if (!playing) return;
  const cfg = LIST_PLAY[listPlayer.type];
  const item = listPlayer.items[listPlayer.index];
  const pos = document.getElementById('list-player-pos');
  const title = document.getElementById('list-player-title');
  if (pos) pos.textContent = `${cfg.label} ${listPlayer.index + 1} / ${listPlayer.items.length}`;
  if (title) title.textContent = cfg.title(item);
  const container = document.getElementById(cfg.container);
  const el = container && [...container.children].find(c => c.dataset && c.dataset.id === item.id);
  if (el) {
    el.classList.add('playing');
    if (scroll && container.offsetParent !== null) el.scrollIntoView({ block: 'center', behavior: 'smooth' });   // 아래 재생 막대에 가리지 않게 가운데로
  }
}

/** 목록을 다시 그린 뒤: 개수 표시 + (재생 중이면) 강조 다시 적용 */
function afterListRender(type) {
  const cfg = LIST_PLAY[type];
  const count = document.getElementById(cfg.container + '-count');
  if (count) count.textContent = `${(cfg.list() || []).length}개`;
  if (listPlayer) updateListPlayerUI();
}

// --- 5. Shadowing ---
// 세 가지 연습
//  🎤 따라 말하기: 문장을 듣고 따라 말하면(마이크) 낱말마다 맞았는지 색으로 보여 준다. 잘 말하면 저절로 다음 문장,
//     아니면 다시 들려주고 한 번 더 (최대 3번). 음성 인식이 없는 브라우저·마이크를 끈 경우는 따라 말할 시간을 주고 한 번 더 들려준 뒤 다음 문장
//  🎧 동시에 말하기: 원어민 목소리와 동시에(살짝 뒤따라) 소리 내어 말한다 · 문장마다 3번씩 저절로 끝까지
//  🎭 역할극(내가 A): 상대(B) 말을 듣고, 내 차례엔 한국어를 보고 영어로 말한다 → 정답과 비교해 보여 주고 들려준 뒤 한 번 따라 말한다
const SHADOW_MODES = {
  repeat: "문장을 듣고 따라 말하면, 맞게 말한 낱말을 색으로 보여 줘요",
  shadow: "원어민 목소리와 동시에(살짝 뒤따라) 소리 내어 말해요 · 문장마다 3번",
  roleplay: "상대(B) 말을 듣고, 내 차례(A)엔 한국어를 보고 영어로 말해요"
};
const SHADOW_PASS = 85;          // 이 점수 넘게 말하면 잘 말한 것 (다음 문장으로)
const SHADOW_SLOW = 0.8;         // 🐢 천천히
const SHADOW_REPS = 3;           // 동시에 말하기: 문장마다 몇 번
let shadowMode = (() => {
  try { const m = localStorage.getItem("shadowingMode"); if (SHADOW_MODES[m]) return m; return localStorage.getItem("shadowingRolePlay") === "true" ? "roleplay" : "repeat"; }
  catch (e) { return "repeat"; }
})();
const shadowPref = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : v === "1"; } catch (e) { return d; } };
let shadowSlow = shadowPref("shadowingSlow", false);
let shadowUseMic = shadowPref("shadowingMic", true);
let isBlindMode = false; let isHideKr = false;
let shadowRun = 0;               // 지금 흐름 (멈추거나 옮기면 늘려서 앞 흐름이 저절로 끝나게)
let shadowState = "idle";        // idle | playing | listening | wait
let shadowScores = {};           // 이번 대화에서 문장별 점수 { 문장 번호: 0~100 }
let shadowResult = null;         // 지금 문장의 결과 { idx, marks, score }
let shadowMic = null;            // 듣는 중 { stop, abort }
let shadowReveal = -1;           // 역할극 내 차례: 정답을 보여 준 문장
let shadowNoMic = "";            // 마이크·음성 인식을 쓸 수 없는 까닭 (있으면 시간으로 기다리는 방식)
let shadowDone = false;          // 동시에 말하기로 끝까지 했는지 (결과 화면용)
const SHADOW_SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const shadowCanListen = () => !!SHADOW_SR && shadowUseMic && !shadowNoMic;
const shadowConv = () => (typeof conversationData !== "undefined" ? conversationData.find(c => c.id === currentShadowingId) : null);
const shadowRate = () => (shadowSlow ? SHADOW_SLOW : 1);
const shadowSleep = ms => new Promise(r => setTimeout(r, ms));
const shadowEl = id => document.getElementById(id);

// 쉐도잉 목록: 실제 상황(category)별로 묶어 보여 주고, 위쪽 칩으로 한 상황만 골라 볼 수 있다 (끝까지 연습한 대화는 가장 좋은 점수)
let shadowingCategory = "";
function shadowBestLoad() { try { const d = JSON.parse(localStorage.getItem("shadowingBest") || "{}"); return d && typeof d === "object" && !Array.isArray(d) ? d : {}; } catch (e) { return {}; } }
function setShadowingCategory(cat) { shadowingCategory = cat; renderShadowingList(); }
function renderShadowingList() {
  const container = document.getElementById("shadowing-list-container");
  if (!container || typeof conversationData === "undefined") return;
  const keyword = (document.getElementById("shadowing-search")?.value || "").toLowerCase();
  const cats = convCategories(), best = shadowBestLoad();
  renderConvCategoryChips("shadowing-cats", shadowingCategory, setShadowingCategory);
  container.innerHTML = "";
  const filtered = conversationData.filter(c => (!shadowingCategory || convCategoryOf(c) === shadowingCategory) &&
    (convCategoryOf(c) + c.title + c.lines.map(l => l.en).join(" ") + c.lines.map(l => l.kr).join(" ")).toLowerCase().includes(keyword));
  cats.forEach(cat => {
    const group = filtered.filter(c => convCategoryOf(c) === cat);
    if (group.length === 0) return;
    appendGroupTitle(container, cat, group.length);
    group.forEach(c => {
      const div = document.createElement("div");
      div.className = "list-item";
      div.onclick = () => startShadowingFromConv(c.id);
      const b = best[c.id];
      const badge = typeof b === "number" ? `<span class="shadow-best">✓ ${b}점</span>` : b ? `<span class="shadow-best">✓ 완료</span>` : "Start ▶";
      div.innerHTML = `<div><div class="list-item-title">🗣️ ${c.title}</div><div class="list-item-sub">${c.lines[0]?.en || ""}</div></div><div style="color:var(--accent); font-size:0.9rem; white-space:nowrap; margin-left:10px;">${badge}</div>`;
      container.appendChild(div);
    });
  });
  if (filtered.length === 0) container.innerHTML = '<div class="list-item"><div>검색 결과가 없습니다.</div></div>';
}

function startShadowingFromConv(id) {
  shadowStop();
  currentShadowingId = id;
  shadowingLineIndex = 0; shadowScores = {}; shadowResult = null; shadowReveal = -1; shadowDone = false;
  if (shadowNoMic === "network") shadowNoMic = "";   // 연결 문제는 다시 들어오면 다시 해 본다
  goTo("shadowing");
  isBlindMode = shadowMode === "repeat"; isHideKr = false;
  updateShadowingOptionsUI(); updateShadowingUI(); shadowShowScore(null); shadowShowHeard("");
  shadowSetState("idle", "");
  if (autoPlayEnabled || shadowMode === "roleplay") setTimeout(() => { if (currentShadowingId === id && currentPageName === "shadowing") shadowStart(); }, 150);
}
function setShadowingMode(m) {
  if (!SHADOW_MODES[m]) m = m === true ? "roleplay" : "repeat";
  shadowStop();
  shadowMode = m;
  try { localStorage.setItem("shadowingMode", m); } catch (e) {}
  isBlindMode = m === "repeat";
  shadowResult = null; shadowReveal = -1; shadowScores = {}; shadowDone = false;
  shadowEl("shadowing-summary").classList.add("hidden");
  updateShadowingOptionsUI(); updateShadowingUI(); shadowShowScore(null); shadowShowHeard("");
  shadowSetState("idle", "▶를 누르면 시작해요");
}
function toggleShadowingOption(type) {
  if (type === 'blind') isBlindMode = !isBlindMode;
  if (type === 'hideKr') isHideKr = !isHideKr;
  if (type === 'slow') { shadowSlow = !shadowSlow; try { localStorage.setItem("shadowingSlow", shadowSlow ? "1" : "0"); } catch (e) {} }
  if (type === 'mic') {
    shadowUseMic = !shadowUseMic; shadowNoMic = "";
    try { localStorage.setItem("shadowingMic", shadowUseMic ? "1" : "0"); } catch (e) {}
    if (shadowState !== "idle") { shadowStop(); shadowSetState("idle", "▶를 누르면 이어서 해요"); }
  }
  updateShadowingOptionsUI(); updateShadowingUI();
}
function updateShadowingOptionsUI() {
  const set = (id, on) => { const b = shadowEl(id); if (b) { b.classList.toggle("active", on); b.setAttribute("aria-pressed", String(on)); } };
  set("btn-blind-mode", isBlindMode); set("btn-hide-kr", isHideKr); set("btn-shadow-slow", shadowSlow); set("btn-shadow-mic", shadowCanListen());
  const mic = shadowEl("btn-shadow-mic");
  if (mic) mic.classList.toggle("hidden", !SHADOW_SR || shadowMode === "shadow");
  document.querySelectorAll("[data-shadow-mode]").forEach(b => { const on = b.dataset.shadowMode === shadowMode; b.classList.toggle("active", on); b.setAttribute("aria-pressed", String(on)); });
  const tip = shadowEl("shadowing-mode-tip");
  if (tip) {
    let t = SHADOW_MODES[shadowMode];
    if (shadowMode !== "shadow" && !shadowCanListen()) {
      const why = shadowNoMic === "denied" ? "마이크가 막혀 있어서 " : shadowNoMic ? "음성 인식을 쓸 수 없어서 " : !SHADOW_SR ? "이 브라우저는 음성 인식이 안 돼서 " : "";
      t = shadowMode === "roleplay" ? `${why}내 차례엔 영어로 말해 본 뒤 터치해서 정답을 확인해요` : `${why}문장을 듣고, 쉬는 동안 따라 말해요`;
    }
    tip.textContent = t;
  }
}
function updateShadowingUI() {
  const conv = shadowConv();
  if (!conv) return;
  const idx = shadowingLineIndex, line = conv.lines[idx];
  shadowEl("shadowing-counter").textContent = `${idx + 1} / ${conv.lines.length}`;
  const bar = shadowEl("shadowing-progress-bar"); if (bar) bar.style.width = `${Math.round(((idx + 1) / conv.lines.length) * 100)}%`;
  const enText = shadowEl("shadowing-text"), krText = shadowEl("shadowing-kr"), hint = shadowEl("shadowing-hint");
  const res = shadowResult && shadowResult.idx === idx ? shadowResult : null;
  const myTurn = shadowMode === "roleplay" && line.speaker === "A";
  shadowEl("shadowing-speaker").textContent = shadowMode === "roleplay" ? (myTurn ? "🙋 내 차례 (A)" : "💬 상대 (B)") : `Speaker ${line.speaker}`;
  enText.classList.remove("roleplay-prompt", "blind-text", "revealed");
  hint.classList.add("hidden");
  if (res) shadowRenderMarks(enText, res.marks);                  // 말한 결과: 맞힌 낱말은 초록, 빠뜨린 낱말은 빨강
  else if (myTurn && shadowReveal !== idx) {
    enText.textContent = "🎤 영어로 말해 보세요";
    enText.classList.add("roleplay-prompt");
    hint.textContent = shadowCanListen() ? "(말하면 정답과 비교해 줘요 · 터치하면 정답 보기)" : "(말해 본 뒤 터치하면 정답 확인)";
    hint.classList.remove("hidden");
  } else {
    enText.textContent = line.en;
    if (isBlindMode && !myTurn) { enText.classList.add("blind-text"); hint.textContent = "(문장을 터치하면 잠시 보입니다)"; hint.classList.remove("hidden"); }
  }
  krText.textContent = line.kr;
  krText.style.visibility = isHideKr && !myTurn ? "hidden" : "visible";
  if (shadowState === "idle") shadowSetState("idle");
}
function shadowRenderMarks(el, marks) {
  el.textContent = "";
  marks.forEach((m, i) => {
    const s = document.createElement("span");
    s.className = "sw " + (m.ok ? "ok" : "miss");
    s.textContent = m.text;
    el.appendChild(s);
    if (i < marks.length - 1) el.appendChild(document.createTextNode(" "));
  });
}
/** 상태 줄과 큰 버튼 (▶ 시작 · ■ 멈추기 · 🎤 다 말했어요) */
function shadowSetState(state, status) {
  shadowState = state;
  const st = shadowEl("shadowing-status"); if (st && status != null) st.textContent = status;
  const btn = shadowEl("shadowing-play-btn"), icon = shadowEl("shadowing-play-icon"), label = shadowEl("shadowing-play-label");
  if (!btn || !icon || !label) return;
  btn.classList.toggle("listening", state === "listening");
  btn.classList.toggle("busy", state === "playing" || state === "wait");
  const again = shadowResult && shadowResult.idx === shadowingLineIndex;
  const L = { idle: ["▶", again ? "다시 하기" : "시작"], playing: ["■", "멈추기"], wait: ["■", "멈추기"], listening: ["🎤", "다 말했으면 누르세요"] }[state] || ["▶", "시작"];
  icon.textContent = L[0]; label.textContent = L[1]; btn.setAttribute("aria-label", L[1]);
  if (state !== "wait") shadowGapBar(0);
}
function shadowShowHeard(text, done) {
  const el = shadowEl("shadowing-heard"); if (!el) return;
  el.textContent = text ? (done ? "들린 말: " : "🎤 ") + text : "";
}
function shadowShowScore(res) {
  const el = shadowEl("shadowing-score"); if (!el) return;
  if (!res) { el.classList.add("hidden"); el.textContent = ""; return; }
  const sc = res.score, role = shadowMode === "roleplay" && !res.repeat;
  el.className = "shadow-score " + (sc >= SHADOW_PASS ? "good" : sc >= 60 ? "ok" : "low");
  el.textContent = `${sc}점 · ` + (role
    ? (sc >= SHADOW_PASS ? "정답과 거의 같아요! 🎉" : sc >= 60 ? "좋아요! 정답과 비교해 보세요" : "정답을 듣고 따라 해 봐요")
    : (sc >= 95 ? "완벽해요! 🎉" : sc >= SHADOW_PASS ? "아주 좋아요! 👍" : sc >= 60 ? "거의 다 왔어요 · 빨간 낱말을 다시" : "다시 들어 보고 따라 해 봐요"));
}
/** 마이크 없이 따라 말할 시간 (남은 시간 막대) */
function shadowGapBar(ms) {
  const box = shadowEl("shadowing-gap"); if (!box || !box.firstElementChild) return;
  const bar = box.firstElementChild;
  bar.style.transition = "none";
  if (!ms) { box.classList.add("hidden"); bar.style.width = "0%"; return; }
  box.classList.remove("hidden");
  bar.style.width = "100%";
  void bar.offsetWidth;
  bar.style.transition = `width ${ms}ms linear`;
  bar.style.width = "0%";
}
const shadowGapMs = text => Math.round(Math.min(9000, Math.max(2200, (900 + text.trim().split(/\s+/).length * 420) / shadowRate())));
function shadowSpeak(line) { return Promise.resolve(speakWithPromise(line.en, line.speaker, shadowRate())); }
function shadowPrefetch(conv, from) { prefetchAhead(conv.lines.slice(from, from + 2).map(l => [l.en, l.speaker, shadowRate()])); }
/** 아이폰: 마이크를 쓰는 동안에도 소리가 작아지거나 무음 스위치에 막히지 않게 (iOS 17+) */
function shadowAudioSession(on) { try { if (navigator.audioSession) navigator.audioSession.type = on ? "play-and-record" : "auto"; } catch (e) {} }

// ---------- 말한 문장 확인 (음성 인식) ----------
const SHADOW_CONTRACT = { "i'm": "i am", "you're": "you are", "it's": "it is", "that's": "that is", "what's": "what is", "let's": "let us", "can't": "can not", "cannot": "can not",
  "won't": "will not", "don't": "do not", "doesn't": "does not", "didn't": "did not", "isn't": "is not", "wasn't": "was not", "aren't": "are not", "weren't": "were not",
  "haven't": "have not", "hasn't": "has not", "hadn't": "had not", "wouldn't": "would not", "couldn't": "could not", "shouldn't": "should not",
  "gonna": "going to", "wanna": "want to", "gotta": "got to", "ok": "okay", "alright": "all right", "its": "it is", "im": "i am", "dont": "do not", "cant": "can not" };
const SHADOW_S_IS = new Set(["he", "she", "it", "that", "there", "here", "what", "who", "where", "how", "when", "why"]);
// 소리가 같은 낱말은 맞게 말한 것으로 (음성 인식이 철자를 고르는 것이지 발음 실수가 아니다)
const SHADOW_SAME = {};
[["to", "too", "two"], ["for", "four"], ["there", "their"], ["right", "write"], ["here", "hear"], ["know", "no"], ["buy", "by", "bye"], ["new", "knew"],
 ["see", "sea"], ["one", "won"], ["hour", "our"], ["weather", "whether"], ["wear", "where"], ["ate", "eight"], ["meet", "meat"], ["week", "weak"],
 ["whole", "hole"], ["peace", "piece"], ["son", "sun"], ["wait", "weight"], ["way", "weigh"], ["wood", "would"], ["be", "bee"], ["i", "eye"],
 ["mr", "mister"], ["mrs", "missus"], ["dr", "doctor"], ["till", "until"], ["cause", "because"], ["yeah", "yes", "yep"], ["bucks", "dollars"]].forEach(g => g.forEach(w => { SHADOW_SAME[w] = g[0]; }));
const SHADOW_FILLERS = new Set(["um", "uh", "umm", "uhh", "hmm", "er", "erm", "ah", "eh", "mm"]);
const SHADOW_ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const SHADOW_TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const SHADOW_ORD = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5, sixth: 6, seventh: 7, eighth: 8, ninth: 9, tenth: 10 };
function shadowNumWords(n) {
  if (n < 20) return SHADOW_ONES[n];
  if (n < 100) return SHADOW_TENS[Math.floor(n / 10)] + (n % 10 ? " " + SHADOW_ONES[n % 10] : "");
  if (n < 1000) return SHADOW_ONES[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + shadowNumWords(n % 100) : "");
  if (n < 10000) return shadowNumWords(Math.floor(n / 1000)) + " thousand" + (n % 1000 ? " " + shadowNumWords(n % 1000) : "");
  return String(n);
}
/** 화면의 낱말 하나 → 비교용 낱말들 ("I'm" → i am, "$6.25" → six twenty five, "7:30" → seven thirty) */
function shadowTokenWords(tok) {
  let w = String(tok).toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”"]/g, "");
  w = w.replace(/\$/g, "").replace(/(\d)[.:](\d)/g, "$1 $2").replace(/(\d),(\d{3})/g, "$1$2").replace(/%/g, " percent");
  return w.split(/[\s\-–—\/]+/).flatMap(x => {
    x = x.replace(/^[^a-z0-9]+|[^a-z0-9]+$/g, "");
    if (!x) return [];
    let m;
    if (/^\d+$/.test(x)) return shadowNumWords(+x).split(" ");
    if ((m = x.match(/^(\d+)(st|nd|rd|th)$/))) { const n = +m[1], o = Object.keys(SHADOW_ORD).find(k => SHADOW_ORD[k] === n); return o ? [o] : shadowNumWords(n).split(" "); }
    if (SHADOW_CONTRACT[x]) return SHADOW_CONTRACT[x].split(" ");
    if ((m = x.match(/^(\w+)n't$/))) return [m[1], "not"];
    if ((m = x.match(/^(\w+)'(re|ve|ll|m|d)$/))) return [m[1], { re: "are", ve: "have", ll: "will", m: "am", d: "would" }[m[2]]];
    if ((m = x.match(/^(\w+)'s$/)) && SHADOW_S_IS.has(m[1])) return [m[1], "is"];
    return [x.replace(/'/g, "")];
  }).map(x => SHADOW_SAME[x] || x);
}
const shadowWordsOf = text => String(text || "").split(/\s+/).filter(Boolean).flatMap(shadowTokenWords);
/** 철자가 한 글자만 다른 긴 낱말 (realize·realise, color·colour 등)도 맞은 것으로 */
function shadowNear(a, b) {
  if (a === b) return true;
  if (a.length < 5 || b.length < 5 || Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, diff = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++diff > 1) return false;
    if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; }
  }
  return diff + (a.length - i) + (b.length - j) <= 1;
}
/** 목표 문장(target)을 들린 말(heard)과 견준다: 같은 순서로 맞힌 낱말 → 점수(0~100)와 화면 낱말마다 맞았는지 */
function shadowScore(target, heard) {
  const toks = String(target || "").split(/\s+/).filter(Boolean);
  const T = [], owner = [];
  toks.forEach((tok, i) => shadowTokenWords(tok).forEach(w => { T.push(w); owner.push(i); }));
  const H = shadowWordsOf(heard).filter(w => !SHADOW_FILLERS.has(w));
  const n = T.length, m = H.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++)
    dp[i][j] = shadowNear(T[i - 1], H[j - 1]) ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  const hit = new Set();
  for (let i = n, j = m; i > 0 && j > 0;) {
    if (shadowNear(T[i - 1], H[j - 1]) && dp[i][j] === dp[i - 1][j - 1] + 1) { hit.add(i - 1); i--; j--; }
    else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
  }
  const marks = toks.map((text, k) => {
    const mine = owner.map((o, idx) => (o === k ? idx : -1)).filter(x => x >= 0);
    return { text, ok: mine.every(x => hit.has(x)) };
  });
  return { score: n ? Math.round((100 * hit.size) / n) : 0, marks, lastHit: n > 0 && hit.has(n - 1) };
}
/** 안드로이드처럼 누적 문장을 여러 번 보내도 한 번만 */
function shadowJoinResults(results) {
  let acc = "";
  for (let i = 0; i < results.length; i++) {
    const t = ((results[i][0] && results[i][0].transcript) || "").trim();
    if (!t) continue;
    const a = acc.toLowerCase(), b = t.toLowerCase();
    if (b.startsWith(a)) acc = t;
    else if (!a.startsWith(b) && !a.endsWith(b)) acc = (acc + " " + t).trim();
  }
  return acc.replace(/\s+/g, " ").trim();
}
function shadowMicProblem(err) {
  shadowNoMic = err === "not-allowed" || err === "service-not-allowed" ? "denied" : err === "audio-capture" ? "nomic" : "network";
  showToast(shadowNoMic === "denied" ? "마이크가 막혀 있어요 · 따라 말할 시간만 드릴게요" : "음성 인식을 쓸 수 없어요 · 따라 말할 시간만 드릴게요");
  updateShadowingOptionsUI();
}
/** 한 문장 듣기: 말이 끝나면(잠깐 조용하면) 들은 말을 돌려준다. 목표 문장을 끝까지 말했으면 더 빨리 끝낸다 */
function shadowListen(target, onWords) {
  return new Promise(resolve => {
    let rec;
    try { rec = new SHADOW_SR(); } catch (e) { shadowMicProblem("unsupported"); resolve({ text: "", error: "unsupported" }); return; }
    rec.lang = "en-US"; rec.interimResults = true; rec.continuous = true; rec.maxAlternatives = 1;
    // 안드로이드: 재생 장치가 켜져 있으면 음성 인식이 소리를 못 받는 기기가 있어 잠시 쉬게 한다 (다음 재생 때 다시 깨운다)
    if (/Android/i.test(navigator.userAgent) && typeof NeuralTTS !== "undefined" && NeuralTTS.suspendAudio) NeuralTTS.suspendAudio();
    let heard = "", committed = "", done = false, spoke = false, restarts = 0, silence = null;
    const timers = [];
    const finish = error => {
      if (done) return;
      done = true;
      clearTimeout(silence); timers.forEach(clearTimeout);
      rec.onresult = rec.onerror = rec.onend = null;
      try { rec.abort(); } catch (e) {}
      if (shadowMic === h) shadowMic = null;
      resolve({ text: heard.trim(), error: error || "" });
    };
    const h = { stop: () => finish(), abort: () => { heard = ""; finish("aborted"); } };
    shadowMic = h;
    timers.push(setTimeout(() => finish(), 15000));                                 // 길어도 15초
    timers.push(setTimeout(() => { if (!spoke) finish("no-speech"); }, 8000));     // 8초 동안 아무 말이 없으면
    rec.onresult = e => {
      const t = (committed + " " + shadowJoinResults(e.results)).replace(/\s+/g, " ").trim();
      if (!t) return;
      spoke = true;
      const changed = shadowWordsOf(t).join(" ") !== shadowWordsOf(heard).join(" ");   // 대문자·문장부호만 바뀐 최종 결과는 새 말이 아니다
      heard = t;
      if (onWords) onWords(heard);
      if (!changed) return;
      clearTimeout(silence);
      const r = shadowScore(target, heard);
      silence = setTimeout(() => finish(), r.score >= 95 && r.lastHit ? 500 : 1400);   // 다 말했으면 바로, 말하다 멈춘 건 넉넉히
    };
    rec.onerror = e => {
      if (e.error === "no-speech" || e.error === "aborted") return;                  // 끝 처리는 onend에서
      if (["not-allowed", "service-not-allowed", "audio-capture", "network", "language-not-supported"].includes(e.error)) { shadowMicProblem(e.error); finish(e.error); }
    };
    rec.onend = () => {
      if (done) return;
      // 브라우저가 먼저 듣기를 끝냈다 (안드로이드는 잠깐 멈추면 끝내기도 한다): 이어서 다시 듣는다 (기다리는 시간은 계속 흐른다)
      if (restarts < 4) { restarts++; committed = heard; try { rec.start(); return; } catch (e) {} }
      finish();
    };
    try { rec.start(); } catch (e) { finish("start"); }
  });
}

// ---------- 흐름 ----------
function shadowStart(fromIdx) {
  const conv = shadowConv();
  if (!conv) return;
  shadowStop(true);
  if (typeof fromIdx === "number") shadowingLineIndex = Math.max(0, Math.min(conv.lines.length - 1, fromIdx));
  shadowEl("shadowing-summary").classList.add("hidden");
  const run = ++shadowRun, idx = shadowingLineIndex;
  if (shadowResult && shadowResult.idx === idx) shadowResult = null;                // 다시 하기: 지난 결과는 지운다
  if (shadowMode === "roleplay" && shadowReveal === idx) shadowReveal = -1;
  updateShadowingUI(); shadowShowScore(null); shadowShowHeard("");
  if (shadowMode !== "shadow" && shadowCanListen()) shadowAudioSession(true);
  const flow = shadowMode === "shadow" ? shadowFlowShadow : shadowMode === "roleplay" ? shadowFlowRole : shadowFlowRepeat;
  flow(run, idx).catch(e => { console.warn("쉐도잉 흐름 오류", e); if (run === shadowRun) shadowSetState("idle", ""); });
}
function shadowStop(keepState) {
  shadowRun++;
  if (shadowMic) shadowMic.abort();
  stopAudio();
  shadowGapBar(0);
  if (!keepState) shadowSetState("idle", "");
}
/** 한 문장을 마쳤다: 다음 문장으로 (마지막이면 결과) */
function shadowAdvance(run, idx) {
  if (run !== shadowRun) return;
  const conv = shadowConv();
  if (!conv) return;
  if (idx >= conv.lines.length - 1) { shadowSetState("idle", ""); shadowShowSummary(); return; }
  shadowingLineIndex = idx + 1;
  shadowResult = null;
  shadowStart();
}
function shadowSaveResult(idx, res, heard, keepScore) {
  if (!keepScore) shadowScores[idx] = Math.max(shadowScores[idx] || 0, res.score);
  shadowResult = { idx, marks: res.marks, score: res.score };
  updateShadowingUI();
  shadowShowScore(Object.assign({ repeat: !!keepScore }, res));
  shadowShowHeard(heard, true);
}
async function shadowFlowRepeat(run, idx) {
  const conv = shadowConv(), line = conv.lines[idx];
  const alive = () => run === shadowRun;
  for (let attempt = 0; attempt < 3; attempt++) {
    shadowSetState("playing", attempt ? "🔊 한 번 더 들어 보세요" : "🔊 잘 들어 보세요");
    shadowPrefetch(conv, idx + 1);
    await shadowSpeak(line);
    if (!alive()) return;
    if (!shadowCanListen()) {
      // 마이크 없이: 따라 말할 시간을 주고 한 번 더 들려준 뒤 다음 문장
      const ms = shadowGapMs(line.en);
      shadowSetState("wait", attempt ? "🗣️ 한 번 더 따라 말해 보세요" : "🗣️ 이제 따라 말해 보세요");
      shadowGapBar(ms);
      await shadowSleep(ms);
      if (!alive()) return;
      if (attempt === 0) continue;
      return shadowAdvance(run, idx);
    }
    shadowSetState("listening", "🎤 따라 말해 보세요");
    const r = await shadowListen(line.en, w => shadowShowHeard(w));
    if (!alive()) return;
    if (!shadowCanListen()) { attempt--; continue; }    // 마이크를 못 쓰게 됐다: 시간으로 기다리는 방식으로 이어 간다
    if (!r.text) { shadowShowHeard(""); shadowSetState("idle", "소리가 들리지 않았어요 · ▶를 눌러 다시 해 보세요"); return; }
    const res = shadowScore(line.en, r.text);
    shadowSaveResult(idx, res, r.text);
    shadowSetState("wait", "");
    if (res.score >= SHADOW_PASS) { await shadowSleep(1500); if (!alive()) return; return shadowAdvance(run, idx); }
    if (attempt < 2) { await shadowSleep(1800); if (!alive()) return; }
  }
  shadowSetState("idle", "괜찮아요! ▶로 한 번 더 하거나 다음 문장으로 넘어가요");
}
async function shadowFlowShadow(run, idx) {
  const conv = shadowConv(), line = conv.lines[idx];
  for (let rep = 1; rep <= SHADOW_REPS; rep++) {
    shadowSetState("playing", `🎧 함께 소리 내어 말해요 · ${rep} / ${SHADOW_REPS}`);
    shadowPrefetch(conv, idx + 1);
    await shadowSpeak(line);
    if (run !== shadowRun) return;
    shadowSetState("wait", null);
    await shadowSleep(rep < SHADOW_REPS ? 600 : 900);
    if (run !== shadowRun) return;
  }
  if (idx >= conv.lines.length - 1) shadowDone = true;
  shadowAdvance(run, idx);
}
async function shadowFlowRole(run, idx) {
  const conv = shadowConv(), line = conv.lines[idx];
  const alive = () => run === shadowRun;
  if (line.speaker !== "A") {                       // 상대(B): 들려주고 내 차례로
    shadowSetState("playing", "💬 상대의 말을 들어 보세요");
    shadowPrefetch(conv, idx + 1);
    await shadowSpeak(line);
    if (!alive()) return;
    shadowSetState("wait", null);
    await shadowSleep(600);
    if (!alive()) return;
    return shadowAdvance(run, idx);
  }
  shadowPrefetch(conv, idx);                        // 정답 목소리와 다음 상대 말도 미리
  if (!shadowCanListen()) { shadowSetState("idle", "영어로 말해 본 뒤 문장을 터치하면 정답을 보여 줘요"); return; }
  shadowSetState("listening", "🎤 한국어를 보고 영어로 말해 보세요");
  const r = await shadowListen(line.en, w => shadowShowHeard(w));
  if (!alive()) return;
  if (!shadowCanListen()) { shadowSetState("idle", "영어로 말해 본 뒤 문장을 터치하면 정답을 보여 줘요"); updateShadowingUI(); return; }
  if (!r.text) { shadowShowHeard(""); shadowSetState("idle", "소리가 들리지 않았어요 · ▶로 다시 말하거나 문장을 터치해 정답 보기"); return; }
  const res = shadowScore(line.en, r.text);
  shadowSaveResult(idx, res, r.text);
  shadowSetState("playing", "🔊 정답 문장을 들어 보세요");
  await shadowSpeak(line);
  if (!alive()) return;
  if (res.score < SHADOW_PASS) {                    // 정답을 들은 뒤 한 번 따라 말해 본다
    shadowSetState("listening", "🎤 이번엔 정답을 따라 말해 보세요");
    const r2 = await shadowListen(line.en, w => shadowShowHeard(w));
    if (!alive()) return;
    if (r2.text) shadowSaveResult(idx, shadowScore(line.en, r2.text), r2.text, true);
  }
  shadowSetState("wait", "");
  await shadowSleep(1200);
  if (!alive()) return;
  shadowAdvance(run, idx);
}
/** 대화를 끝까지 하면: 평균 점수 · 다시 연습하면 좋은 문장 */
function shadowShowSummary() {
  const conv = shadowConv(), box = shadowEl("shadowing-summary");
  if (!conv || !box) return;
  const scored = Object.keys(shadowScores).map(Number).filter(i => typeof shadowScores[i] === "number").sort((a, b) => a - b);
  box.innerHTML = "";
  const add = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; box.appendChild(e); return e; };
  add("div", "shadow-sum-title", "🎉 대화를 끝까지 연습했어요!");
  const best = shadowBestLoad();
  if (scored.length) {
    const avg = Math.round(scored.reduce((a, i) => a + shadowScores[i], 0) / scored.length);
    const good = scored.filter(i => shadowScores[i] >= SHADOW_PASS).length;
    add("div", "shadow-sum-score", `평균 ${avg}점 · 잘 말한 문장 ${good} / ${scored.length}`);
    best[conv.id] = Math.max(typeof best[conv.id] === "number" ? best[conv.id] : 0, avg);
    const weak = scored.filter(i => shadowScores[i] < SHADOW_PASS);
    if (weak.length) {
      add("div", "shadow-sum-sub", "다시 연습하면 좋은 문장 (누르면 그 문장부터)");
      weak.forEach(i => {
        const b = add("button", "shadow-sum-line");
        b.type = "button";
        const sc = document.createElement("span"); sc.className = "shadow-sum-pt"; sc.textContent = `${shadowScores[i]}점`;
        b.appendChild(document.createTextNode(`${i + 1}. ${conv.lines[i].en} `)); b.appendChild(sc);
        b.onclick = () => shadowStart(i);
      });
    }
  } else {
    add("div", "shadow-sum-score", shadowMode === "shadow" ? `문장마다 ${SHADOW_REPS}번씩 함께 말했어요` : "다음 주제도 이어서 해 볼까요?");
    if (shadowMode === "shadow" && shadowDone && typeof best[conv.id] !== "number") best[conv.id] = "done";
  }
  try { localStorage.setItem("shadowingBest", JSON.stringify(best)); } catch (e) {}
  const row = add("div", "shadow-sum-actions");
  const again = document.createElement("button"); again.className = "btn-sub"; again.textContent = "🔁 처음부터";
  again.onclick = () => { shadowScores = {}; shadowDone = false; shadowStart(0); };
  const next = document.createElement("button"); next.className = "btn-main"; next.textContent = "🎲 새 주제";
  next.onclick = () => nextRandomShadowingTopic();
  row.appendChild(again); row.appendChild(next);
  box.classList.remove("hidden");
  shadowSetState("idle", "");
  shadowShowHeard("");
  try { box.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (e) {}
}
// 큰 버튼: 멈춰 있으면 시작 · 듣는 중이면 '다 말했어요' · 재생·대기 중이면 멈추기
function shadowMainButton() {
  if (shadowState === "listening" && shadowMic) { shadowMic.stop(); return; }
  if (shadowState === "playing" || shadowState === "wait") { shadowStop(); shadowSetState("idle", "멈췄어요 · ▶를 누르면 이어서 해요"); return; }
  shadowStart();
}
// (예전 이름: 다른 곳에서 부르던 '다시 듣기')
function playShadowingCurrent() { shadowStart(); }
/** 문장 터치: 가린 영어를 잠깐 보여 준다 · 역할극 내 차례면 정답을 보여 주고 들려준다 */
function revealTextTemp() {
  const conv = shadowConv();
  if (!conv) return;
  const idx = shadowingLineIndex, line = conv.lines[idx];
  if (shadowMode === "roleplay" && line.speaker === "A" && !(shadowResult && shadowResult.idx === idx)) {
    shadowStop(); shadowReveal = idx; updateShadowingUI(); shadowShowHeard("");
    const run = ++shadowRun;
    shadowSetState("playing", "🔊 정답 문장");
    shadowSpeak(line).then(() => { if (run === shadowRun) shadowSetState("idle", "다음 문장 ❯ 으로 이어 가요"); });
    return;
  }
  const enText = shadowEl("shadowing-text");
  if (enText.classList.contains("blind-text")) { enText.classList.add("revealed"); setTimeout(() => enText.classList.remove("revealed"), 2000); }
}
function shadowGo(idx) {
  const conv = shadowConv();
  if (!conv) return;
  shadowStop();
  shadowingLineIndex = idx; shadowResult = null; shadowReveal = -1;
  shadowEl("shadowing-summary").classList.add("hidden");
  updateShadowingUI(); shadowShowScore(null); shadowShowHeard("");
  if (autoPlayEnabled || shadowMode === "roleplay") shadowStart();
}
function nextShadowing() {
  const conv = shadowConv();
  if (!conv) return;
  if (shadowingLineIndex >= conv.lines.length - 1) { shadowStop(); shadowShowSummary(); return; }
  shadowGo(shadowingLineIndex + 1);
}
function prevShadowing() {
  if (shadowingLineIndex <= 0) { showToast("첫 문장이에요"); return; }
  shadowGo(shadowingLineIndex - 1);
}
function nextRandomShadowingTopic() {
  if (typeof conversationData === "undefined" || conversationData.length === 0) return;
  // 목록에서 상황을 골라 두었으면 같은 상황 안에서 다음 주제를 고른다
  const inCat = conversationData.filter(c => shadowingCategory && convCategoryOf(c) === shadowingCategory);
  const pool = inCat.length > 1 ? inCat : conversationData;
  let nextConv;
  if (pool.length > 1) { do { nextConv = pool[Math.floor(Math.random() * pool.length)]; } while (nextConv.id === currentShadowingId); }
  else nextConv = pool[0];
  shadowStop();
  currentShadowingId = nextConv.id; shadowingLineIndex = 0; shadowScores = {}; shadowResult = null; shadowReveal = -1; shadowDone = false;
  shadowEl("shadowing-summary").classList.add("hidden");
  updateShadowingUI(); shadowShowScore(null); shadowShowHeard("");
  if (autoPlayEnabled || shadowMode === "roleplay") setTimeout(() => shadowStart(), 100);
}
/** 쉐도잉 화면을 떠날 때 (core.js goTo): 듣기·재생을 멈추고 소리 설정을 되돌린다 */
function leaveShadowing() { shadowStop(); shadowAudioSession(false); }
// 앱을 내리면(다른 앱·잠금) 마이크와 연습을 멈춘다
document.addEventListener("visibilitychange", () => {
  if (document.hidden && shadowState !== "idle") { shadowStop(); shadowSetState("idle", "멈췄어요 · ▶를 누르면 이어서 해요"); }
});

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
  // renderBlogList과 동일하게 데이터 미정의(로드 실패 등) 상황을 방어
  if (currentBlogType === 'pattern') { targetData = (typeof patternData !== 'undefined') ? patternData : []; titlePrefix = "Pattern Note"; }
  else if (currentBlogType === 'idiom') { targetData = (typeof idiomData !== 'undefined') ? idiomData : []; titlePrefix = "Idiom Note"; }
  else if (currentBlogType === 'word') { targetData = (typeof wordData !== 'undefined') ? wordData : []; titlePrefix = "Vocabulary"; }
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