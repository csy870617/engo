// ==========================================
// AI 튜터 말하는 영상 재생 계획 (실제 영상 장면만 쓴다)
// ==========================================
// 말하는 영상은 늘 실제 장면 그대로 보여 준다 (잘라 붙이지 않아 얼굴이 찌그러지지 않는다).
// 멈추거나 장면을 건너뛰지 않고, 재생 속도만 0.5~1.5배 안에서 조금씩 바꿔 입이 벌어지는 때를 말소리에 맞춘다.
//  - targets: 문장 소리 → 장면(1/24초)마다 입을 얼마나 벌려야 하는지 (음절마다 열고, 음절 사이·쉼에서는 닫는다)
//  - warp: 시작 장면 후보들 중에서, 장면마다 재생 속도를 정해 입 벌림이 목표와 가장 비슷해지는 길 (동적 계획법)
// 계산은 웹 워커에서 한다 (화면 그리기를 멈추지 않게).

const TalkPlan = (() => {
  const P = {
    lead: 1,          // 입은 소리보다 이만큼(장면) 먼저 움직인다
    rangeDb: 28,      // 문장에서 큰 소리보다 이만큼 작으면 입을 닫는다
    floorDb: -55,     // 이보다 작은 소리는 (문장 전체가 조용해도) 무조건 닫는다
    contrast: 0.5,    // 음절 사이 소리가 잦아드는 곳을 더 또렷하게
    scale: 0.9,       // 가장 큰 소리일 때 입 벌림 (장면들의 95% 지점 = 1)
    steps: [2, 3, 4, 5, 6],   // 장면마다 나아가는 양 (1/4장면 단위) = 재생 속도 0.5·0.75·1·1.25·1.5배
    chg: 0.1,         // 재생 속도를 바꿀 때 (한 번에 한 칸씩만, 자주 바꾸지 않게)
    pref: 0.04,       // 1배에서 멀어질수록 (평소엔 거의 1배, 잠깐씩만 느리거나 빠르게 — 오래 슬로모션이 되지 않게)
    quietOpen: 0.15,  // 소리가 없는데 입을 벌리고 있으면
    quietAt: 0.25
  };
  const Q = 4;

  /** 소리 → 장면마다 입 벌림 목표 0~1 (lead만큼 앞당겨져 있다) */
  function targets(wav, sr, fps) {
    fps = fps || 24;
    const hop = sr / fps, T = Math.max(1, Math.ceil(wav.length / hop)), db = new Float32Array(T);
    for (let i = 0; i < T; i++) {
      const c = (i + 0.5) * hop, s = Math.max(0, Math.round(c - hop)), e = Math.min(wav.length, Math.round(c + hop));
      let q = 0; for (let k = s; k < e; k++) q += wav[k] * wav[k];
      db[i] = 10 * Math.log10((e > s ? q / (e - s) : 0) + 1e-10);
    }
    const sorted = Float32Array.from(db).sort(), peak = Math.max(sorted[Math.min(T - 1, Math.floor(T * 0.95))], P.floorDb + P.rangeDb);
    const o = new Float32Array(T);
    for (let i = 0; i < T; i++) o[i] = db[i] < P.floorDb ? 0 : Math.min(1, Math.max(0, (db[i] - (peak - P.rangeDb)) / P.rangeDb));
    // 음절 사이를 또렷하게: 둘레(±3장면) 평균보다 작으면 더 작게, 크면 더 크게
    const out = new Float32Array(T);
    for (let i = 0; i < T; i++) {
      let s = 0, n = 0; for (let k = Math.max(0, i - 3); k <= Math.min(T - 1, i + 3); k++) { s += o[k]; n++; }
      const v = o[i] + P.contrast * (o[i] - s / n);
      out[i] = o[i] === 0 ? 0 : Math.min(1, Math.max(0, v)) * P.scale;
    }
    const lead = Math.round(P.lead), led = new Float32Array(T);
    for (let i = 0; i < T; i++) led[i] = out[Math.min(T - 1, i + lead)] * (i + lead < T ? 1 : 0);
    return led;
  }

  /** open: 장면마다 입 벌림(0~1.3), tgt: 목표, starts: 시작 장면 후보(소수 가능), k0: 지금 재생 속도 칸(-1이면 아무 칸).
   *  돌려주는 값: { start, pos: 소리 장면마다 영상 장면(start 기준 펼친 값, 소수), rate: 장면마다 재생 속도 } */
  function warp(open, tgt, starts, k0) {
    const n = open.length, T = tgt.length, steps = P.steps, K = steps.length, INF = 1e30;
    const one = steps.indexOf(Q);
    const op = (s, q) => { const f = s + q / Q, i = Math.floor(f), fr = f - i; return open[((i % n) + n) % n] * (1 - fr) + open[(((i + 1) % n) + n) % n] * fr; };
    const loc = (s, q, tg) => { const o = op(s, q), d = o - tg; let c = d * d; if (tg === 0 && o > P.quietAt) c += P.quietOpen; return c; };
    const pref = k => P.pref * (steps[k] - Q) * (steps[k] - Q);
    const W = steps[K - 1] * (T - 1) + 1, minS = steps[0], maxS = steps[K - 1];
    let best = null;
    for (const s of starts) {
      let cur = new Float64Array(W * K).fill(INF), nxt = new Float64Array(W * K);
      const back = new Int8Array(T * W * K);
      for (let k = 0; k < K; k++) if (k0 < 0 || Math.abs(k - k0) <= 1) cur[k] = loc(s, 0, tgt[0]) + pref(k);
      for (let t = 1; t < T; t++) {
        nxt.fill(INF);
        const lo = minS * (t - 1), hi = Math.min(W - 1, maxS * (t - 1)), row = t * W;
        for (let p = lo; p <= hi; p++) for (let kl = 0; kl < K; kl++) {
          const c0 = cur[p * K + kl]; if (c0 >= INF) continue;
          for (let k = Math.max(0, kl - 1); k <= Math.min(K - 1, kl + 1); k++) {
            const p2 = p + steps[k], c = c0 + (k !== kl ? P.chg : 0) + pref(k);
            if (c < nxt[p2 * K + k]) { nxt[p2 * K + k] = c; back[(row + p2) * K + k] = kl; }
          }
        }
        const lo2 = minS * t, hi2 = Math.min(W - 1, maxS * t);
        for (let p = lo2; p <= hi2; p++) for (let k = 0; k < K; k++) if (nxt[p * K + k] < INF) nxt[p * K + k] += loc(s, p, tgt[t]);
        const tmp = cur; cur = nxt; nxt = tmp;
      }
      let bc = INF, bp = 0, bk = one;
      for (let p = 0; p < W; p++) for (let k = 0; k < K; k++) if (cur[p * K + k] < bc) { bc = cur[p * K + k]; bp = p; bk = k; }
      if (!best || bc < best.c) {
        const pos = new Float32Array(T), rate = new Float32Array(T);
        let p = bp, k = bk;
        for (let t = T - 1; t >= 0; t--) { pos[t] = s + p / Q; rate[t] = steps[k] / Q; if (t) { const kl = back[(t * W + p) * K + k]; p -= steps[k]; k = kl; } }
        best = { c: bc, start: s, pos, rate };
      }
    }
    return { start: best.start, pos: best.pos, rate: best.rate };
  }

  // ---- 계산은 웹 워커에서 ----
  const SRC = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : "";
  let worker = null, workerBroken = false, seqNo = 0;
  const waiting = new Map(), sent = new Set();
  function getWorker() {
    if (worker || workerBroken || !SRC || typeof Worker === "undefined") return worker;
    try {
      worker = new Worker(SRC);
      worker.onmessage = e => { const w = waiting.get(e.data.id); if (!w) return; waiting.delete(e.data.id); if (e.data.pos) w.ok(e.data); else w.no(new Error(e.data.error || "plan failed")); };
      worker.onerror = () => { workerBroken = true; worker = null; waiting.forEach(w => w.no(new Error("worker"))); waiting.clear(); };
    } catch (e) { workerBroken = true; worker = null; }
    return worker;
  }
  /** 장면별 입 벌림 자료를 워커에 미리 보내 둔다 */
  function warm(key, open) {
    const w = getWorker(); if (!w || sent.has(key)) return;
    w.postMessage({ type: "data", key, open: Array.from(open) }); sent.add(key);
  }
  /** 문장 소리 → { tgt, start, pos, rate } (워커를 못 쓰면 여기서) */
  function planAudio(key, open, wav, sr, fps, starts, k0) {
    const local = () => { const tgt = targets(wav, sr, fps); return Object.assign({ tgt }, warp(open, tgt, starts, k0)); };
    const w = getWorker();
    if (!w) return new Promise(ok => setTimeout(() => ok(local()), 0));
    warm(key, open);
    const id = ++seqNo;
    return new Promise((ok, no) => {
      waiting.set(id, { ok, no });
      w.postMessage({ type: "plan", id, key, wav, sr, fps, starts, k0, P });
    }).catch(() => local());
  }

  return { P, targets, warp, warm, planAudio };
})();
if (typeof module !== "undefined" && module.exports) module.exports = TalkPlan;
// 웹 워커로 불렸을 때: 계산만 맡는다
if (typeof window === "undefined" && typeof importScripts === "function" && typeof self !== "undefined") {
  const datas = {};
  self.onmessage = e => {
    const d = e.data;
    if (d.type === "data") { datas[d.key] = Float32Array.from(d.open); return; }
    if (d.type !== "plan") return;
    try {
      if (!datas[d.key]) throw new Error("no data");
      if (d.P) Object.assign(TalkPlan.P, d.P);
      const tgt = TalkPlan.targets(d.wav, d.sr, d.fps), r = TalkPlan.warp(datas[d.key], tgt, d.starts, d.k0);
      self.postMessage({ id: d.id, tgt, start: r.start, pos: r.pos, rate: r.rate }, [tgt.buffer, r.pos.buffer, r.rate.buffer]);
    } catch (err) { self.postMessage({ id: d.id, error: String(err && err.message || err) }); }
  };
}
