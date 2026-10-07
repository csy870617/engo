// ==========================================
// AI 튜터 입 모양 고르기 (말하는 영상의 입 조각 중에서)
// ==========================================
// 얼굴 영상은 1배속으로 그대로 흐르고, 입 부분만 장면마다 다른 장면의 입 조각으로 바꿔 그린다.
// 여기서는 '어느 입 조각을 언제 쓸지'를 정한다:
//  - targets: 문장 소리 → 장면(1/24초)마다 입을 얼마나 벌려야 하는지 (음절마다 열고, 음절 사이·쉼에서는 닫는다)
//  - plan: 그 목표에 가장 잘 맞으면서 입이 자연스럽게 이어지는 조각 순서 (동적 계획법)
//  - step: 소리를 미리 모를 때(기기 음성) 지금 크기에 맞춰 다음 조각 하나를 고른다
// 조각끼리는 원래 영상 순서(j → j+1)로 이어지는 것을 가장 좋아하고, 건너뛸 때는 입 모양이 비슷한 조각으로만 간다.

const MouthPlan = (() => {
  const P = {
    lead: 1,          // 입은 소리보다 이만큼(장면) 먼저 움직인다
    rangeDb: 28,      // 문장에서 큰 소리보다 이만큼 작으면 입을 닫는다
    floorDb: -55,     // 이보다 작은 소리는 (문장 전체가 조용해도) 무조건 닫는다
    contrast: 0.5,    // 음절 사이 소리가 잦아드는 곳을 더 또렷하게 (입이 열렸다 닫혔다)
    scale: 0.9,       // 가장 큰 소리일 때 입 벌림 (조각들의 95% 지점 = 1)
    wOpen: 1.0,       // 목표 입 벌림과 다를 때
    hold: 0.02,       // 같은 조각에 머물 때 (입이 굳어 보이지 않게)
    holdOpen: 0.25,   // 벌린 입으로 머물 때 더
    jump: 0.05,       // 원래 순서가 아닌 조각으로 건너뛸 때
    wShape: 0.06,     // 건너뛸 때 입 모양 차이(px)마다
    wSmile: 0.15,     // 얼굴(바탕 장면)과 웃는 정도가 다를 때
    self: 0.02,       // 바탕 장면 자기 입을 그대로 쓰면 조금 이득 (붙인 티가 전혀 없다)
    wBase: 0.5,       // 바탕 장면 입이 조각보다 훨씬 크게 벌어져 있으면 (아래로 내려간 원래 턱선이 비칠 수 있어) 조금 손해
    baseGap: 0.4      //   그 차이가 이만큼 넘을 때부터
  };

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

  /** 입 조각 자료(mouth.json)에 계산용 값을 붙인다 (빠르게 돌도록 이웃 목록을 한 줄 배열로) */
  function prepare(m) {
    if (m.openN) return m;
    const n = m.n, K = m.knn[0].length;
    m.K = K;
    m.openN = Float32Array.from(m.open, v => v / 100);
    m.smileN = Float32Array.from(m.smile, v => v / 100);
    m.knnF = new Int16Array(n * K); m.kdF = new Float32Array(n * K);
    for (let j = 0; j < n; j++) for (let q = 0; q < K; q++) { m.knnF[j * K + q] = m.knn[j][q]; m.kdF[j * K + q] = m.kd[j][q]; }
    return m;
  }

  /** 목표 tgt에 맞는 조각 순서. start: 지금 보이는 조각(없으면 -1), base0: 첫 장면에 보일 바탕 장면(모르면 -1) */
  function plan(m, tgt, start, base0) {
    prepare(m);
    const n = m.n, K = m.K, T = tgt.length, INF = 1e30, knn = m.knnF, kd = m.kdF, openN = m.openN, smileN = m.smileN;
    const hold = P.hold, holdOpen = P.holdOpen, jump = P.jump, wShape = P.wShape, wOpen = P.wOpen, wSmile = P.wSmile, self = P.self, wBase = P.wBase, baseGap = P.baseGap;
    let cur = new Float64Array(n), nxt = new Float64Array(n);
    const back = new Int16Array(T * n);
    const local = (k, tg, b) => {
      const d = openN[k] - tg; let c = wOpen * d * d;
      if (b >= 0) {
        const sd = smileN[k] - smileN[b]; c += wSmile * sd * sd; if (k === b) c -= self;
        const g = openN[b] - openN[k] - baseGap; if (g > 0) c += wBase * g * g;
      }
      return c;
    };
    const b0 = base0 >= 0 ? base0 % n : -1;
    // 첫 장면: 지금 조각에서 이어질 수 있는 곳만 (모르면 어디서든)
    if (start >= 0) {
      cur.fill(INF);
      const relax0 = (k, c) => { c += local(k, tgt[0], b0); if (c < cur[k]) { cur[k] = c; back[k] = start; } };
      const s = (start + 1) % n;
      relax0(s, 0); relax0(start, hold + holdOpen * openN[start]);
      for (let q = 0; q < K; q++) relax0(knn[s * K + q], jump + wShape * kd[s * K + q]);
    } else for (let k = 0; k < n; k++) cur[k] = local(k, tgt[0], b0);
    for (let t = 1; t < T; t++) {
      nxt.fill(INF);
      const b = base0 >= 0 ? (base0 + t) % n : -1, tg = tgt[t], row = t * n;
      for (let j = 0; j < n; j++) {
        const c0 = cur[j]; if (c0 >= INF) continue;
        const s = j + 1 === n ? 0 : j + 1;
        if (c0 < nxt[s]) { nxt[s] = c0; back[row + s] = j; }
        let c = c0 + hold + holdOpen * openN[j];
        if (c < nxt[j]) { nxt[j] = c; back[row + j] = j; }
        const o = s * K, cj = c0 + jump;
        for (let q = 0; q < K; q++) { const k = knn[o + q]; c = cj + wShape * kd[o + q]; if (c < nxt[k]) { nxt[k] = c; back[row + k] = j; } }
      }
      for (let k = 0; k < n; k++) if (nxt[k] < INF) nxt[k] += local(k, tg, b);
      const tmp = cur; cur = nxt; nxt = tmp;
    }
    let best = 0; for (let k = 1; k < n; k++) if (cur[k] < cur[best]) best = k;
    const out = new Int16Array(T);
    for (let t = T - 1; t >= 0; t--) { out[t] = best; if (t) best = back[t * n + best]; }
    return out;
  }

  /** 소리를 미리 모를 때: 지금 조각 cur에서 목표 target에 맞춰 다음 조각 하나.
   *  바로 다음 장면만 보면 비슷한 입 모양 사이를 맴돌 수 있어서 (예: 반쯤 벌린 채로 못 닫음), 몇 장면 앞까지 같은 목표로 내다보고 첫 걸음을 고른다 */
  function step(m, cur, target, base, horizon) {
    const H = horizon || 8, tg = new Float32Array(H).fill(target);
    return plan(m, tg, cur, base)[0];
  }

  // ---- 긴 문장 계산은 웹 워커에서 (화면 그리기를 멈추지 않게) ----
  const SRC = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : "";
  let worker = null, workerBroken = false, seqNo = 0;
  const waiting = new Map(), sent = new WeakSet();
  function getWorker() {
    if (worker || workerBroken || !SRC || typeof Worker === "undefined") return worker;
    try {
      worker = new Worker(SRC);
      worker.onmessage = e => { const w = waiting.get(e.data.id); if (!w) return; waiting.delete(e.data.id); if (e.data.seq) w.ok(e.data.seq); else w.no(new Error(e.data.error || "plan failed")); };
      worker.onerror = () => { workerBroken = true; worker = null; waiting.forEach(w => w.no(new Error("worker"))); waiting.clear(); };
    } catch (e) { workerBroken = true; worker = null; }
    return worker;
  }
  /** 워커를 미리 띄우고 자료를 보내 둔다 (첫 문장 계산이 늦지 않게) */
  function warm(m) {
    const w = getWorker(); if (!w) return;
    if (!m._key) m._key = "m" + (++seqNo) + "-" + m.n;
    if (!sent.has(m)) { w.postMessage({ type: "data", key: m._key, m: { n: m.n, open: m.open, smile: m.smile, knn: m.knn, kd: m.kd } }); sent.add(m); }
  }
  /** plan과 같지만 결과를 나중에 준다 (워커를 못 쓰면 여기서 계산) */
  function planAsync(m, tgt, start, base0) {
    const w = getWorker();
    if (!w) return new Promise(ok => setTimeout(() => ok(plan(m, tgt, start, base0)), 0));
    warm(m);
    const id = ++seqNo;
    return new Promise((ok, no) => {
      waiting.set(id, { ok, no });
      w.postMessage({ type: "plan", id, key: m._key, tgt, start, base0, P });
    }).catch(() => plan(m, tgt, start, base0));                       // 워커가 실패하면 여기서
  }

  return { P, targets, prepare, plan, step, planAsync, warm };
})();
if (typeof module !== "undefined" && module.exports) module.exports = MouthPlan;
// 웹 워커로 불렸을 때: 장면 순서 계산만 맡는다
if (typeof window === "undefined" && typeof importScripts === "function" && typeof self !== "undefined") {
  const datas = {};
  self.onmessage = e => {
    const d = e.data;
    if (d.type === "data") { datas[d.key] = MouthPlan.prepare(d.m); return; }
    if (d.type !== "plan") return;
    try {
      if (!datas[d.key]) throw new Error("no data");
      if (d.P) Object.assign(MouthPlan.P, d.P);
      const seq = MouthPlan.plan(datas[d.key], d.tgt, d.start, d.base0);
      self.postMessage({ id: d.id, seq }, [seq.buffer]);
    } catch (err) { self.postMessage({ id: d.id, error: String(err && err.message || err) }); }
  };
}
