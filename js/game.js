// ==========================================
// 문장 퍼즐 게임 로직
// ==========================================

let puzzleList = []; let currentPuzzleIndex = 0; let currentPuzzleAnswer = ""; let puzzleTargetTokens = []; let puzzleShuffledTokens = [];

// '완료'한 문장은 다시 내지 않는다: 문장마다 짧은 이름(문장 글자로 만든 번호)으로 기억한다 (동기화로 다른 기기와도 합쳐진다)
function puzzleKey(en) {
  let h = 0x811c9dc5;
  const t = String(en || "").trim().replace(/\s+/g, " ");
  for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return "pz" + h.toString(36);
}

function setPuzzleLevel(lvl) {
  selectedPuzzleLevel = parseInt(lvl);
  localStorage.setItem("selectedPuzzleLevel", selectedPuzzleLevel);
  if (typeof touchSettings === "function") touchSettings();
  document.querySelectorAll("[data-puzzle-level-btn]").forEach(b => {
    b.classList.toggle("active", parseInt(b.dataset.puzzleLevelBtn) === selectedPuzzleLevel);
  });
  puzzleList = []; currentPuzzleIndex = 0; currentPuzzleAnswer = "";
  initPuzzle();
}

/** 퍼즐로 낼 문장 모으기: 실전 회화(대화·패턴)와 단어·숙어 예문을 따로 (level: 0 전체, 1~3 단계 · withDone: 완료한 문장도) */
function puzzleLevelOk(en, level) {
  const len = en.split(" ").length;
  if (len < 5) return false;                       // 5단어 미만은 제외
  if (level === 1) return len <= 6;                // Lv.1: 5~6단어
  if (level === 2) return len >= 7 && len <= 8;    // Lv.2: 7~8단어
  if (level === 3) return len >= 9;                // Lv.3: 9단어 이상
  return true;
}
function puzzleCollect(level, withDone) {
  const convPool = [], examplePool = [], seen = new Set();
  let hidden = 0;
  const add = (pool, en, kr) => {
    if (!en) return;
    const cleanEn = en.trim().replace(/\s+/g, " ");
    if (/ - /.test(cleanEn) || !puzzleLevelOk(cleanEn, level)) return;
    if (seen.has(cleanEn)) return;                 // 여러 데이터에 같은 문장이 있으면 한 번만
    seen.add(cleanEn);
    const key = puzzleKey(cleanEn);
    if (!withDone && donePuzzles.has(key)) { hidden++; return; }   // 완료한 문장은 다시 내지 않는다
    pool.push({ en: cleanEn, kr, key });
  };
  if (typeof conversationData !== "undefined") conversationData.forEach(c => c.lines.forEach(l => add(convPool, l.en, l.kr)));
  if (typeof patternData !== "undefined") patternData.forEach(p => p.examples.forEach(ex => add(convPool, ex.en, ex.kr)));
  if (typeof wordData !== "undefined") wordData.forEach(w => { const idStr = w.id || ""; if (idStr.startsWith("L1") || idStr.startsWith("L2") || idStr.startsWith("L3")) if (w.examples) w.examples.forEach(ex => add(examplePool, ex.en, ex.kr)); });
  if (typeof idiomData !== "undefined") idiomData.forEach(i => { if (i.level && i.level <= 3) if (i.examples) i.examples.forEach(ex => add(examplePool, ex.en, ex.kr)); });
  return { convPool, examplePool, hidden };
}
function initPuzzle() {
  if (puzzleList.length === 0) {
    // 회화 문장이 두 문제에 한 번은 나오도록 섞는다
    const { convPool, examplePool, hidden } = puzzleCollect(selectedPuzzleLevel, false);
    shuffleArray(convPool); shuffleArray(examplePool);
    const pool = [];
    for (let i = 0; i < Math.max(convPool.length, examplePool.length); i++) {
      if (i < convPool.length) pool.push(convPool[i]);
      if (i < examplePool.length) pool.push(examplePool[i]);
    }
    if (pool.length === 0) {
      if (hidden) { puzzleAllDone(); return; }     // 이 단계 문장을 모두 완료했다
      pool.push({ en: "Welcome to the English puzzle game.", kr: "영어 퍼즐 게임에 오신 것을 환영합니다.", key: "" });
    }
    puzzleList = pool;
    currentPuzzleIndex = 0;
  }
  updatePuzzleDoneNote();
  if (!currentPuzzleAnswer) nextPuzzle(); else renderPuzzle();
}
/** 지금 문제의 완료 체크와 '완료한 문장 N개' */
function updatePuzzleDoneNote() {
  const t = document.getElementById("puzzle-done-toggle");
  if (t) t.textContent = `✅ 완료한 문장 ${donePuzzles.size}개 ${document.getElementById("puzzle-done-list").classList.contains("hidden") ? "보기" : "닫기"}`;
  const chk = document.getElementById("puzzle-done-check"), item = puzzleList[currentPuzzleIndex - 1];
  if (chk) { chk.checked = !!(item && item.key && donePuzzles.has(item.key)); chk.disabled = !(currentPuzzleAnswer && item && item.key); }
}
/** 이 단계의 문장을 모두 완료했을 때 */
function puzzleAllDone() {
  puzzleList = []; currentPuzzleIndex = 0; currentPuzzleAnswer = ""; puzzleTargetTokens = []; puzzleShuffledTokens = [];
  document.getElementById("puzzle-counter").textContent = "0 / 0";
  document.getElementById("puzzle-question").textContent = "🎉 이 단계의 문장을 모두 완료했어요! 다른 단계를 고르거나, 아래 '완료한 문장'에서 체크를 풀면 다시 나와요.";
  const fb = document.getElementById("puzzle-feedback"); fb.textContent = ""; fb.className = "feedback-msg"; fb.style.color = "";
  renderPuzzle();
  updatePuzzleDoneNote();
}
/** 완료 체크: 체크하면 다음부터 안 나오고, 풀면 다시 나온다 (지금 문제는 그대로 둔다) */
function togglePuzzleDoneCheck() {
  const chk = document.getElementById("puzzle-done-check"), item = puzzleList[currentPuzzleIndex - 1];
  if (!item || !item.key || !currentPuzzleAnswer) { chk.checked = false; return; }
  markMemorized('puzzle', item.key, chk.checked);
  if (chk.checked) showToast("✅ 완료! 다음부터 이 문장은 안 나와요");
  updatePuzzleDoneNote();
  renderPuzzleDoneList();
}
/** 완료한 문장 목록 열기·닫기 */
function togglePuzzleDoneList() {
  const box = document.getElementById("puzzle-done-list"), t = document.getElementById("puzzle-done-toggle");
  const open = box.classList.contains("hidden");
  box.classList.toggle("hidden", !open);
  t.setAttribute("aria-expanded", String(open));
  if (open) renderPuzzleDoneList(true);
  updatePuzzleDoneNote();
}
let puzzleDoneShown = [];   // 목록을 연 동안 보여 줄 문장 (체크를 풀어도 바로 사라지지 않게 — 다시 체크할 수 있게)
function renderPuzzleDoneList(fresh) {
  const box = document.getElementById("puzzle-done-list");
  if (!box || box.classList.contains("hidden")) return;
  if (fresh || !puzzleDoneShown.length) {
    const all = puzzleCollect(0, true);
    puzzleDoneShown = [...all.convPool, ...all.examplePool].filter(x => donePuzzles.has(x.key));
  }
  box.innerHTML = "";
  if (!puzzleDoneShown.length) { box.innerHTML = '<div class="puzzle-done-empty">완료한 문장이 없어요. 문제 아래 \'완료\'를 체크하면 여기 모여요.</div>'; return; }
  const note = document.createElement("div"); note.className = "puzzle-done-empty"; note.textContent = "체크를 풀면 그 문장이 다시 문제로 나와요";
  box.appendChild(note);
  puzzleDoneShown.forEach(x => {
    const row = document.createElement("label"); row.className = "puzzle-done-item";
    const on = donePuzzles.has(x.key);
    row.classList.toggle("restored", !on);
    const c = document.createElement("input"); c.type = "checkbox"; c.checked = on;
    c.onchange = () => {
      markMemorized('puzzle', x.key, c.checked);
      row.classList.toggle("restored", !c.checked);
      if (!c.checked && puzzleLevelOk(x.en, selectedPuzzleLevel) && !puzzleList.some(p => p.key === x.key)) {
        if (puzzleList.length) puzzleList.push({ en: x.en, kr: x.kr, key: x.key });   // 이번 문제 목록 뒤에 다시 넣는다
        else { currentPuzzleAnswer = ""; initPuzzle(); }   // 모두 완료였던 단계면 다시 시작
      }
      updatePuzzleDoneNote();
    };
    const txt = document.createElement("div");
    const en = document.createElement("div"); en.className = "en"; en.textContent = x.en;
    const kr = document.createElement("div"); kr.className = "kr"; kr.textContent = x.kr;
    txt.appendChild(en); txt.appendChild(kr);
    row.appendChild(c); row.appendChild(txt);
    box.appendChild(row);
  });
}

function nextPuzzle(back) {
  if (!back) {   // 앞으로 갈 때: 완료로 체크한 문장은 목록에서 빼고 건너뛴다
    for (let i = puzzleList.length - 1; i >= 0; i--) {
      if (puzzleList[i].key && donePuzzles.has(puzzleList[i].key)) {
        puzzleList.splice(i, 1);
        if (i < currentPuzzleIndex) currentPuzzleIndex--;
      }
    }
    if (puzzleList.length === 0) { currentPuzzleAnswer = ""; initPuzzle(); return; }
  }
  if (puzzleList.length === 0) { initPuzzle(); return; }
  if (currentPuzzleIndex >= puzzleList.length) { currentPuzzleIndex = 0; shuffleArray(puzzleList); }
  const target = puzzleList[currentPuzzleIndex];
  currentPuzzleIndex++;
  // 연속 공백이 있으면 빈 토큰이 생기고 정답 판정이 불가능해지므로 공백 정규화
  currentPuzzleAnswer = target.en.trim().replace(/\s+/g, " ");
  document.getElementById("puzzle-counter").textContent = `${currentPuzzleIndex} / ${puzzleList.length}`;
  document.getElementById("puzzle-question").textContent = target.kr;
  document.getElementById("puzzle-feedback").textContent = "";
  document.getElementById("puzzle-feedback").className = "feedback-msg";
  document.getElementById("puzzle-feedback").style.color = "";
  puzzleTargetTokens = [];
  // 중복 단어를 안전하게 다루기 위해 각 토큰에 고유 id 부여
  const words = currentPuzzleAnswer.split(" ");
  puzzleShuffledTokens = shuffleArray(words.map((w, i) => ({ id: i, text: w })));
  for (let k = 0; k < 8 && puzzleShuffledTokens.map(t => t.text).join(" ") === currentPuzzleAnswer && new Set(words).size > 1; k++) shuffleArray(puzzleShuffledTokens);
  renderPuzzle();
  updatePuzzleDoneNote();
}
function renderPuzzle() {
  const bank = document.getElementById("puzzle-bank"); const target = document.getElementById("puzzle-target");
  bank.innerHTML = ""; target.innerHTML = "";
  const usedIds = new Set(puzzleTargetTokens.map(t => t.id));
  const currentBank = puzzleShuffledTokens.filter(t => !usedIds.has(t.id));
  currentBank.forEach(t => {
    const span = document.createElement("span");
    span.className = "token";
    span.textContent = t.text;
    span.onclick = () => { puzzleTargetTokens.push(t); renderPuzzle(); };
    bank.appendChild(span);
  });
  puzzleTargetTokens.forEach((t, i) => {
    const span = document.createElement("span");
    span.className = "token";
    span.textContent = t.text;
    span.onclick = () => { puzzleTargetTokens.splice(i, 1); renderPuzzle(); };
    target.appendChild(span);
  });
}
// 두 문장 이상인 문제("Nice to meet you. I just started...")는 문장 순서만 바뀌어도 어순은 맞으므로 정답 처리
function splitSentences(text) {
  const out = []; let cur = [];
  const toks = text.split(" ");
  toks.forEach((tok, i) => {
    cur.push(tok);
    const next = toks[i + 1];
    if (/[.!?]["”']?$/.test(tok) && !/^(Mr|Mrs|Ms|Dr|St|vs|a\.m|p\.m|U\.S|U\.K|e\.g|i\.e)\.$/i.test(tok) && (!next || /^["“']?[A-Z0-9]/.test(next))) { out.push(cur.join(" ")); cur = []; }
  });
  if (cur.length) out.push(cur.join(" "));
  return out;
}
function isPuzzleCorrect(user) {
  if (user === currentPuzzleAnswer) return true;
  const a = splitSentences(currentPuzzleAnswer), u = splitSentences(user);
  return a.length > 1 && a.length === u.length && [...a].sort().join("\n") === [...u].sort().join("\n");
}
function checkPuzzle() {
  if (!currentPuzzleAnswer) return;
  const user = puzzleTargetTokens.map(t => t.text).join(" ");
  const fb = document.getElementById("puzzle-feedback");
  fb.style.color = "";
  if (isPuzzleCorrect(user)) { fb.textContent = "정답입니다! 🎉"; fb.className = "feedback-msg ok"; speakText(currentPuzzleAnswer); }
  else { fb.textContent = "오답입니다."; fb.className = "feedback-msg error"; }
}
function resetPuzzle() { puzzleTargetTokens = []; const fb = document.getElementById("puzzle-feedback"); fb.textContent = ""; fb.style.color = ""; renderPuzzle(); }
function showPuzzleAnswer() { if (!currentPuzzleAnswer) return; const fb = document.getElementById("puzzle-feedback"); fb.textContent = `정답: ${currentPuzzleAnswer}`; fb.className = "feedback-msg"; fb.style.color = "#38bdf8"; }
function movePuzzle(offset) {
  if (!puzzleList.length) return;   // 모두 완료한 단계
  if (offset === 1) { nextPuzzle(); return; }
  if (currentPuzzleIndex <= 1) { showToast("첫 문제예요"); return; }
  currentPuzzleIndex -= 2;   // 지금 문제는 currentPuzzleIndex-1번째: 그 앞 문제를 다시 낸다 (완료 체크한 문제여도 보여 준다 — 체크를 풀 수 있게)
  nextPuzzle(true);
}