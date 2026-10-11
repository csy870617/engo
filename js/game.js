// ==========================================
// 문장 퍼즐 게임 로직
// ==========================================
// 한 손으로 쓰기 쉽게: 낱말을 순서대로 누르면 빈칸이 채워지고, 다 채우면 저절로 확인한다.
//  맞으면 🎉 + 문장을 읽어 주고 [다음 문제] · 틀리면 자리가 틀린 낱말을 빨갛게 (누르면 빠진다)
//  💡 힌트: 처음 틀린 자리부터 고치고 맞는 낱말 하나를 놓아 준다 · 👀 정답: 문장을 다 채워 보여 준다
//  아래 낱말 칸은 쓴 낱말 자리를 비워 두기만 해서(흐린 테두리) 낱말들이 움직이지 않는다

let puzzleList = []; let currentPuzzleIndex = 0; let currentPuzzleAnswer = ""; let puzzleTargetTokens = []; let puzzleShuffledTokens = [];
let puzzleState = "solving";      // solving(푸는 중) · wrong(다 놓았는데 틀림) · solved(맞힘) · revealed(정답 봄) · empty(이 단계 모두 완료)
let pzJustPlaced = -1;            // 방금 놓은 낱말 (그 낱말만 튀어나오듯 보이게)
let puzzleStreak = 0; try { puzzleStreak = parseInt(localStorage.getItem("puzzleStreak") || "0", 10) || 0; } catch (e) {}

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
  puzzleLevelButtons();
  puzzleList = []; currentPuzzleIndex = 0; currentPuzzleAnswer = "";
  initPuzzle();
}
function puzzleLevelButtons() {
  document.querySelectorAll("[data-puzzle-level-btn]").forEach(b => {
    const on = parseInt(b.dataset.puzzleLevelBtn) === selectedPuzzleLevel;
    b.classList.toggle("active", on); b.setAttribute("aria-pressed", String(on));
  });
}

/** 퍼즐로 낼 문장 모으기: 실전 회화(대화·패턴)와 단어·숙어 예문을 따로 (level: 0 전체, 1~3 단계 · withDone: 완료한 문장도) */
function puzzleLevelOk(en, level) {
  const len = en.split(" ").length;
  if (len < 5) return false;                       // 5단어 미만은 제외
  if (level === 1) return len <= 6;                // 5~6단어
  if (level === 2) return len >= 7 && len <= 8;    // 7~8단어
  if (level === 3) return len >= 9;                // 9단어 이상
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
  puzzleLevelButtons();
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
  if (!currentPuzzleAnswer) nextPuzzle(); else renderPuzzle();
}
const puzzleItem = () => puzzleList[currentPuzzleIndex - 1] || null;
const puzzleWords = () => (currentPuzzleAnswer ? currentPuzzleAnswer.split(" ") : []);

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
  puzzleState = "solving";
  puzzleTargetTokens = [];
  // 중복 단어를 안전하게 다루기 위해 각 토큰에 고유 id 부여 (섞은 순서가 정답과 같으면 다시 섞는다)
  const words = puzzleWords();
  puzzleShuffledTokens = shuffleArray(words.map((w, i) => ({ id: i, text: w })));
  for (let k = 0; k < 8 && puzzleShuffledTokens.map(t => t.text).join(" ") === currentPuzzleAnswer && new Set(words).size > 1; k++) shuffleArray(puzzleShuffledTokens);
  renderPuzzle();
}

/** 화면 전체를 지금 상태대로 그린다: 문제(뜻) · 내가 만든 문장(빈칸) · 낱말 · 안내 · 아래 버튼 */
function renderPuzzle() {
  const card = document.getElementById("pz-card");
  if (!card) return;
  card.dataset.state = puzzleState;
  const empty = puzzleState === "empty";
  const item = puzzleItem();
  document.getElementById("puzzle-question").textContent = empty
    ? "🎉 이 단계의 문장을 모두 완료했어요!" : (item ? item.kr : "");
  // 내가 만든 문장: 놓은 낱말 + 남은 빈칸
  const target = document.getElementById("puzzle-target");
  target.innerHTML = "";
  const words = puzzleWords();
  const done = puzzleState === "solved" || puzzleState === "revealed";
  puzzleTargetTokens.forEach((t, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pz-token placed";
    if (puzzleState === "wrong" && t.text !== words[i]) b.classList.add("bad");   // 자리가 틀린 낱말
    if (puzzleState === "solved") b.classList.add("good");
    if (puzzleState === "revealed") b.classList.add("shown");
    if (t.id === pzJustPlaced && i === puzzleTargetTokens.length - 1) b.classList.add("pop");
    b.textContent = t.text;
    b.disabled = done;
    b.setAttribute("aria-label", `${t.text} 빼기`);
    b.onclick = () => pzRemove(i);
    target.appendChild(b);
  });
  for (let i = puzzleTargetTokens.length; i < words.length; i++) {   // 남은 낱말 수만큼 밑줄
    const s = document.createElement("span"); s.className = "pz-blank"; s.setAttribute("aria-hidden", "true");
    target.appendChild(s);
  }
  pzJustPlaced = -1;
  // 낱말: 쓴 낱말은 자리만 남긴다 (나머지 낱말이 움직이지 않게)
  const bank = document.getElementById("puzzle-bank");
  bank.innerHTML = "";
  bank.classList.toggle("hidden", empty || done);
  const used = new Set(puzzleTargetTokens.map(t => t.id));
  puzzleShuffledTokens.forEach(t => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pz-token" + (used.has(t.id) ? " used" : "");
    b.textContent = t.text;
    b.disabled = used.has(t.id) || done;
    if (used.has(t.id)) b.setAttribute("aria-hidden", "true");
    b.onclick = () => pzPlace(t);
    bank.appendChild(b);
  });
  // 하나 빼기·처음부터 (놓은 낱말이 있고 아직 푸는 중일 때만)
  const tools = document.getElementById("pz-tools");
  if (tools) tools.classList.toggle("hidden", empty || done || !puzzleTargetTokens.length);
  // 안내
  const fb = document.getElementById("puzzle-feedback");
  const msg = {
    solving: puzzleTargetTokens.length ? `${puzzleTargetTokens.length} / ${words.length}` : "",
    wrong: "빨간 낱말을 눌러 빼 보세요",
    solved: "🎉 정답!" + (puzzleStreak >= 2 ? ` 🔥 ${puzzleStreak}연속` : "") + " · 곧 다음 문제",
    revealed: "정답을 확인했어요 · 다음엔 맞혀 봐요",
    empty: "다른 길이를 고르거나, 완료한 문장에서 체크를 풀면 다시 나와요"
  }[puzzleState] || "";
  fb.textContent = msg;
  fb.className = "pz-feedback " + puzzleState;
  // 아래 버튼
  const act = document.getElementById("pz-actions");
  act.innerHTML = "";
  const btn = (label, cls, fn, aria) => { const b = document.createElement("button"); b.type = "button"; b.className = cls; b.innerHTML = label; b.onclick = fn; if (aria) b.setAttribute("aria-label", aria); act.appendChild(b); return b; };
  if (empty) btn("✅ 완료한 문장 보기", "btn-main pz-wide", openPuzzleDoneSheet);
  else if (done) {
    btn('<span aria-hidden="true">🔊</span> 다시 듣기', "btn-sub", () => speakText(currentPuzzleAnswer));
    btn("다음 문제 ❯", "btn-main pz-wide", () => nextPuzzle());
  } else {
    btn('<span aria-hidden="true">💡</span> 힌트', "btn-sub", pzHint, "힌트: 낱말 하나 놓기");
    btn('<span aria-hidden="true">👀</span> 정답', "btn-sub", pzReveal, "정답 보기");
    btn("건너뛰기 ❯", "btn-sub", pzSkip, "이 문제 건너뛰기");
  }
  updatePuzzleDoneNote();
}
/** 낱말 놓기 · 빼기 · 하나 빼기 · 처음부터 */
function pzPlace(t) {
  if (puzzleState !== "solving" && puzzleState !== "wrong") return;
  if (puzzleTargetTokens.some(x => x.id === t.id)) return;
  puzzleTargetTokens.push(t);
  pzJustPlaced = t.id;
  puzzleState = "solving";
  pzCheckIfComplete();
}
function pzRemove(i) {
  if (puzzleState !== "solving" && puzzleState !== "wrong") return;
  puzzleTargetTokens.splice(i, 1);
  puzzleState = "solving";
  renderPuzzle();
}
function pzUndo() { if (puzzleTargetTokens.length) pzRemove(puzzleTargetTokens.length - 1); }
function resetPuzzle() {
  if (puzzleState !== "solving" && puzzleState !== "wrong") return;
  puzzleTargetTokens = []; puzzleState = "solving"; renderPuzzle();
}
/** 다 놓았으면 저절로 확인: 맞으면 🎉 + 읽어 주기, 틀리면 틀린 자리를 빨갛게 */
function pzCheckIfComplete() {
  if (puzzleTargetTokens.length < puzzleWords().length) { renderPuzzle(); return; }
  const user = puzzleTargetTokens.map(t => t.text).join(" ");
  if (isPuzzleCorrect(user)) {
    // 두 문장의 순서만 바뀐 것도 정답: 정답 순서로 다시 놓아 초록으로 보여 준다
    if (user !== currentPuzzleAnswer) puzzleTargetTokens = pzOrderedTokens();
    puzzleState = "solved";
    puzzleStreak++; pzSaveStreak();
    renderPuzzle();
    pzAutoNext();
  } else {
    puzzleState = "wrong";
    renderPuzzle();
    const wrap = document.querySelector(".pz-answer-wrap");
    wrap.classList.remove("shake"); void wrap.offsetWidth; wrap.classList.add("shake");
  }
}
/** 맞히면 문장을 끝까지 읽어 준 뒤 저절로 다음 문제로 (그사이 [다음 문제]를 누르거나 화면을 떠나면 그대로) */
function pzAutoNext() {
  const ans = currentPuzzleAnswer;
  stopAudio();
  const spoken = Promise.resolve(speakWithPromise(ans)).catch(() => {});
  Promise.race([spoken, new Promise(r => setTimeout(r, 8000))]).then(() => setTimeout(() => {
    if (puzzleState === "solved" && currentPuzzleAnswer === ans && currentPageName === "puzzle" && !document.querySelector(".modal:not(.hidden)")) nextPuzzle();
  }, 700));
}
/** 정답 순서대로 놓인 낱말들 (같은 낱말이 여럿이어도 하나씩 짝지어) */
function pzOrderedTokens() {
  const left = puzzleShuffledTokens.slice();
  return puzzleWords().map(w => { const k = left.findIndex(t => t.text === w); return left.splice(k, 1)[0]; });
}
/** 💡 힌트: 처음 틀린 자리부터 거두고, 맞는 낱말 하나를 놓아 준다 */
function pzHint() {
  if (puzzleState !== "solving" && puzzleState !== "wrong") return;
  const words = puzzleWords();
  let k = 0;
  while (k < puzzleTargetTokens.length && puzzleTargetTokens[k].text === words[k]) k++;
  puzzleTargetTokens = puzzleTargetTokens.slice(0, k);
  const used = new Set(puzzleTargetTokens.map(t => t.id));
  const next = puzzleShuffledTokens.find(t => !used.has(t.id) && t.text === words[k]);
  if (next) { puzzleTargetTokens.push(next); pzJustPlaced = next.id; }
  puzzleState = "solving";
  pzCheckIfComplete();
}
/** 👀 정답: 문장을 다 채워 보여 주고 읽어 준다 (연속 기록은 처음부터) */
function pzReveal() {
  if (puzzleState !== "solving" && puzzleState !== "wrong") return;
  puzzleTargetTokens = pzOrderedTokens();
  puzzleState = "revealed";
  puzzleStreak = 0; pzSaveStreak();
  renderPuzzle();
  speakText(currentPuzzleAnswer);
}
function pzSkip() { puzzleStreak = 0; pzSaveStreak(); nextPuzzle(); }
function pzSaveStreak() {
  try { localStorage.setItem("puzzleStreak", String(puzzleStreak)); } catch (e) {}
}
// (예전 이름: 다른 곳에서 부르던 확인·정답·이전/다음)
function checkPuzzle() { if (puzzleState === "solving" || puzzleState === "wrong") pzCheckIfComplete(); }
function showPuzzleAnswer() { pzReveal(); }
function movePuzzle(offset) {
  if (!puzzleList.length) return;   // 모두 완료한 단계
  if (offset === 1) { nextPuzzle(); return; }
  if (currentPuzzleIndex <= 1) { showToast("첫 문제예요"); return; }
  currentPuzzleIndex -= 2;   // 지금 문제는 currentPuzzleIndex-1번째: 그 앞 문제를 다시 낸다
  nextPuzzle(true);
}

// ---------- 완료 (다음부터 안 나오기) ----------
/** 지금 문제의 완료 체크 · 연속 기록 · '완료 N' */
function updatePuzzleDoneNote() {
  const chip = document.getElementById("pz-done-chip");
  if (chip) { chip.textContent = `✅ 완료한 문장 ${donePuzzles.size}개 보기`; chip.classList.toggle("hidden", !donePuzzles.size || puzzleState === "empty"); }
  const streak = document.getElementById("pz-streak");
  if (streak) { streak.textContent = `🔥 ${puzzleStreak}`; streak.classList.toggle("hidden", puzzleStreak < 2); }
  const chk = document.getElementById("puzzle-done-check"), item = puzzleItem();
  const ok = !!(currentPuzzleAnswer && item && item.key && puzzleState !== "empty");
  if (chk) {
    chk.checked = ok && donePuzzles.has(item.key);
    chk.disabled = !ok;
    const row = chk.closest(".pz-done");
    if (row) { row.classList.toggle("on", chk.checked); row.classList.toggle("invisible", !ok); }
  }
}
/** 이 단계의 문장을 모두 완료했을 때 */
function puzzleAllDone() {
  puzzleList = []; currentPuzzleIndex = 0; currentPuzzleAnswer = ""; puzzleTargetTokens = []; puzzleShuffledTokens = [];
  puzzleState = "empty";
  renderPuzzle();
}
/** 완료 체크: 체크하면 다음부터 안 나오고, 풀면 다시 나온다 (지금 문제는 그대로 둔다) */
function togglePuzzleDoneCheck() {
  const chk = document.getElementById("puzzle-done-check"), item = puzzleItem();
  if (!item || !item.key || !currentPuzzleAnswer) { chk.checked = false; return; }
  markMemorized('puzzle', item.key, chk.checked);
  if (chk.checked) showToast("✅ 완료! 다음부터 이 문장은 안 나와요");
  updatePuzzleDoneNote();
}
/** 완료한 문장 목록 (창): 체크를 푼 문장만 다시 문제로 */
let puzzleDoneShown = [];   // 창을 연 동안 보여 줄 문장 (체크를 풀어도 바로 사라지지 않게 — 다시 체크할 수 있게)
function openPuzzleDoneSheet() {
  const all = puzzleCollect(0, true);
  puzzleDoneShown = [...all.convPool, ...all.examplePool].filter(x => donePuzzles.has(x.key));
  renderPuzzleDoneList();
  document.getElementById("puzzle-done-sheet").classList.remove("hidden");
  history.pushState({ page: "puzzle", modal: "puzzle-done" }, "", "#puzzle");   // 뒤로 가기는 창만 닫는다
}
function closePuzzleDoneSheet() {
  if (history.state && history.state.modal === "puzzle-done") history.back();
  else document.getElementById("puzzle-done-sheet").classList.add("hidden");
}
function renderPuzzleDoneList() {
  const box = document.getElementById("puzzle-done-list");
  if (!box) return;
  document.getElementById("pz-sheet-title").textContent = `✅ 완료한 문장 ${donePuzzles.size}개`;
  box.innerHTML = "";
  if (!puzzleDoneShown.length) { box.innerHTML = '<div class="puzzle-done-empty">완료한 문장이 없어요. 문제 위의 ☐ 완료를 체크하면 여기 모여요.</div>'; return; }
  puzzleDoneShown.forEach(x => {
    const row = document.createElement("label"); row.className = "puzzle-done-item";
    const on = donePuzzles.has(x.key);
    row.classList.toggle("restored", !on);
    const c = document.createElement("input"); c.type = "checkbox"; c.checked = on;
    c.onchange = () => {
      markMemorized('puzzle', x.key, c.checked);
      row.classList.toggle("restored", !c.checked);
      document.getElementById("pz-sheet-title").textContent = `✅ 완료한 문장 ${donePuzzles.size}개`;
      if (!c.checked && puzzleLevelOk(x.en, selectedPuzzleLevel) && !puzzleList.some(p => p.key === x.key)) {
        if (puzzleList.length) puzzleList.push({ en: x.en, kr: x.kr, key: x.key });   // 이번 문제 목록 뒤에 다시 넣는다
        else { currentPuzzleAnswer = ""; puzzleState = "solving"; initPuzzle(); }     // 모두 완료였던 단계면 다시 시작
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

// 컴퓨터 자판: ⌫ 하나 빼기 · Enter 다음 문제(맞힌 뒤)
document.addEventListener("keydown", e => {
  if (typeof currentPageName === "undefined" || currentPageName !== "puzzle" || e.altKey || e.ctrlKey || e.metaKey) return;
  const ae = document.activeElement || {};
  const typing = /^(TEXTAREA|SELECT)$/.test(ae.tagName || "") || ae.isContentEditable || (ae.tagName === "INPUT" && !/^(checkbox|radio|button)$/.test(ae.type));
  if (document.querySelector(".modal:not(.hidden)") || typing) return;   // 글을 쓰는 칸에서는 자판을 가로채지 않는다
  if (e.key === "Backspace") { e.preventDefault(); pzUndo(); }
  else if (e.key === "Enter" && (puzzleState === "solved" || puzzleState === "revealed")) { e.preventDefault(); nextPuzzle(); }
});
