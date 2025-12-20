// ==========================================
// 문장 퍼즐 게임 로직
// ==========================================

let puzzleList = []; let currentPuzzleIndex = 0; let currentPuzzleAnswer = ""; let puzzleTargetTokens = []; let puzzleShuffledTokens = [];

function setPuzzleLevel(lvl) {
  selectedPuzzleLevel = parseInt(lvl);
  localStorage.setItem("selectedPuzzleLevel", selectedPuzzleLevel);
  document.querySelectorAll("[data-puzzle-level-btn]").forEach(b => {
    b.classList.toggle("active", parseInt(b.dataset.puzzleLevelBtn) === selectedPuzzleLevel);
  });
  puzzleList = []; currentPuzzleIndex = 0; currentPuzzleAnswer = "";
  initPuzzle();
}

function initPuzzle() {
  if (puzzleList.length === 0) {
    let pool = [];
    const addIfValid = (en, kr) => { 
      if (!en) return; 
      const cleanEn = en.trim();
      const len = cleanEn.split(/\s+/).length;
      if (len < 5) return; // 5단어 미만은 제외

      // 레벨별 필터링
      if (selectedPuzzleLevel === 1) { if (len > 6) return; } // Lv.1: 5~6단어만
      else if (selectedPuzzleLevel === 2) { if (len < 7 || len > 8) return; } // Lv.2: 7~8단어만
      else if (selectedPuzzleLevel === 3) { if (len < 9) return; } // Lv.3: 9단어 이상만

      pool.push({ en: cleanEn, kr: kr });
    };

    if (typeof conversationData !== "undefined") conversationData.forEach(c => c.lines.forEach(l => addIfValid(l.en, l.kr)));
    if (typeof patternData !== "undefined") patternData.forEach(p => p.examples.forEach(ex => addIfValid(ex.en, ex.kr)));
    if (typeof wordData !== "undefined") wordData.forEach(w => { const idStr = w.id || ""; if (idStr.startsWith("L1") || idStr.startsWith("L2") || idStr.startsWith("L3")) if (w.examples) w.examples.forEach(ex => addIfValid(ex.en, ex.kr)); });
    if (typeof idiomData !== "undefined") idiomData.forEach(i => { if (i.level && i.level <= 3) if (i.examples) i.examples.forEach(ex => addIfValid(ex.en, ex.kr)); });
    
    if (pool.length === 0) {
       pool.push({ en: "Welcome to the English puzzle game.", kr: "영어 퍼즐 게임에 오신 것을 환영합니다." });
    }
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