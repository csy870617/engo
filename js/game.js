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

function initPuzzle() {
  if (puzzleList.length === 0) {
    // 실전 회화(대화·패턴) 문장과 단어·숙어 예문을 따로 모아, 회화 문장이 두 문제에 한 번은 나오도록 섞는다
    const convPool = [], examplePool = [], seen = new Set();
    const addIfValid = (pool, en, kr) => {
      if (!en) return;
      const cleanEn = en.trim().replace(/\s+/g, " ");
      if (/ - /.test(cleanEn)) return;
      const len = cleanEn.split(" ").length;
      if (len < 5) return; // 5단어 미만은 제외

      // 레벨별 필터링
      if (selectedPuzzleLevel === 1) { if (len > 6) return; } // Lv.1: 5~6단어만
      else if (selectedPuzzleLevel === 2) { if (len < 7 || len > 8) return; } // Lv.2: 7~8단어만
      else if (selectedPuzzleLevel === 3) { if (len < 9) return; } // Lv.3: 9단어 이상만

      if (seen.has(cleanEn)) return; // 여러 데이터에 같은 문장이 있으면 한 번만
      seen.add(cleanEn);
      if (donePuzzles.has(puzzleKey(cleanEn))) return; // 완료한 문장은 다시 내지 않는다
      pool.push({ en: cleanEn, kr: kr });
    };

    if (typeof conversationData !== "undefined") conversationData.forEach(c => c.lines.forEach(l => addIfValid(convPool, l.en, l.kr)));
    if (typeof patternData !== "undefined") patternData.forEach(p => p.examples.forEach(ex => addIfValid(convPool, ex.en, ex.kr)));
    if (typeof wordData !== "undefined") wordData.forEach(w => { const idStr = w.id || ""; if (idStr.startsWith("L1") || idStr.startsWith("L2") || idStr.startsWith("L3")) if (w.examples) w.examples.forEach(ex => addIfValid(examplePool, ex.en, ex.kr)); });
    if (typeof idiomData !== "undefined") idiomData.forEach(i => { if (i.level && i.level <= 3) if (i.examples) i.examples.forEach(ex => addIfValid(examplePool, ex.en, ex.kr)); });

    shuffleArray(convPool); shuffleArray(examplePool);
    const pool = [];
    for (let i = 0; i < Math.max(convPool.length, examplePool.length); i++) {
      if (i < convPool.length) pool.push(convPool[i]);
      if (i < examplePool.length) pool.push(examplePool[i]);
    }
    if (pool.length === 0) {
      if (seen.size) { puzzleAllDone(); return; }   // 이 단계 문장을 모두 완료했다
      pool.push({ en: "Welcome to the English puzzle game.", kr: "영어 퍼즐 게임에 오신 것을 환영합니다." });
    }
    puzzleList = pool;
    currentPuzzleIndex = 0;
  }
  updatePuzzleDoneNote();
  if (!currentPuzzleAnswer) nextPuzzle(); else renderPuzzle();
}
/** 완료해서 숨긴 문장 수와 '모두 다시 보기' */
function updatePuzzleDoneNote() {
  const box = document.getElementById("puzzle-done-note"), cnt = document.getElementById("puzzle-done-count");
  if (!box || !cnt) return;
  box.classList.toggle("hidden", !donePuzzles.size);
  cnt.textContent = `완료해서 숨긴 문장 ${donePuzzles.size}개 ·`;
}
/** 이 단계의 문장을 모두 완료했을 때 */
function puzzleAllDone() {
  puzzleList = []; currentPuzzleIndex = 0; currentPuzzleAnswer = ""; puzzleTargetTokens = []; puzzleShuffledTokens = [];
  document.getElementById("puzzle-counter").textContent = "0 / 0";
  document.getElementById("puzzle-question").textContent = "🎉 이 단계의 문장을 모두 완료했어요! 다른 단계를 고르거나 '모두 다시 보기'를 눌러 주세요.";
  const fb = document.getElementById("puzzle-feedback"); fb.textContent = ""; fb.className = "feedback-msg"; fb.style.color = "";
  renderPuzzle();
  updatePuzzleDoneNote();
}
/** ✅ 완료: 지금 문장은 다시 내지 않고 다음 문제로 */
function markPuzzleDone() {
  const i = currentPuzzleIndex - 1, item = puzzleList[i];
  if (!item || !currentPuzzleAnswer) return;
  markMemorized('puzzle', puzzleKey(item.en), true);
  puzzleList.splice(i, 1);
  currentPuzzleIndex = i;
  currentPuzzleAnswer = "";
  showToast("✅ 완료! 이 문장은 다시 나오지 않아요");
  if (!puzzleList.length) { puzzleAllDone(); return; }
  nextPuzzle();
}
/** 완료해서 숨긴 문장을 모두 다시 낸다 */
function restorePuzzles() {
  const n = donePuzzles.size;
  if (!n || !confirm(`완료해서 숨긴 문장 ${n}개를 다시 문제로 낼까요?`)) return;
  markMemorizedMany('puzzle', [...donePuzzles], false);
  puzzleList = []; currentPuzzleAnswer = "";
  initPuzzle();
  showToast("숨긴 문장을 다시 문제로 내요");
}

function nextPuzzle() {
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
  currentPuzzleIndex -= 2;   // 지금 문제는 currentPuzzleIndex-1번째: 그 앞 문제를 다시 낸다
  nextPuzzle();
}