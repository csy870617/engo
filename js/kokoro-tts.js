// ==========================================
// 자연스러운 튜터 음성 (Kokoro, 기기 안에서 만듦)
// ==========================================
// 처음 한 번 모델을 받아 두면(그래픽 가속 있는 기기 약 330MB, 없는 기기 약 95MB) 그다음부터는
// 인터넷 사용량 없이 기기 안에서 사람처럼 자연스러운 영어 목소리를 만든다. 사용량 제한도 없다.
const KokoroVoice = (() => {
  const READY_KEY = "kokoroReady";            // 다 받은 설정 ("webgpu:fp32" 등) — 받은 뒤에만 기록
  const SPEED_KEY = "kokoroRtf";              // 이 기기에서 만드는 속도 (1초 소리를 만드는 데 걸리는 초)
  let worker = null, loading = null, loaded = false, info = null, reqId = 0;
  const pending = new Map();
  let progressCb = null, unloadTimer = null;

  const supported = () => typeof Worker !== "undefined" && typeof caches !== "undefined" && typeof WebAssembly !== "undefined" && !!(window.AudioContext || window.webkitAudioContext);
  // 그래픽 가속(WebGPU)을 실제로 쓸 수 있는지 미리 알아 둔다 (있다고 해도 장치를 못 받는 기기가 있다)
  let gpuOk = null;
  try {
    if (navigator.gpu && navigator.gpu.requestAdapter) navigator.gpu.requestAdapter().then(a => { gpuOk = !!a; }, () => { gpuOk = false; });
    else gpuOk = false;
  } catch (e) { gpuOk = false; }
  const plan = () => (gpuOk ? { device: "webgpu", dtype: "fp32", mb: 330 } : { device: "wasm", dtype: "q8", mb: 95 });
  function readyTag() { try { return localStorage.getItem(READY_KEY) || ""; } catch (e) { return ""; } }
  /** 받아 둔 적이 있는가 (실제 파일이 지워졌으면 불러올 때 다시 받는다) */
  const downloaded = () => !!readyTag();
  /** 이 기기에서 만드는 속도 (모르면 0) */
  function rtf() { try { return +localStorage.getItem(SPEED_KEY) || 0; } catch (e) { return 0; } }
  /** 실시간보다 많이 느린 기기 (그러면 기기 음성으로 읽는다) */
  const tooSlow = () => rtf() > 1.6;

  function ensureWorker() {
    if (worker) return worker;
    worker = new Worker("js/kokoro-worker.js?v=2", { type: "module" });
    worker.onmessage = (e) => {
      const m = e.data || {};
      if (m.type === "progress") { if (progressCb) progressCb(m); return; }
      if (m.type === "loaded") { if (loading && loading.resolve) loading.resolve(m); return; }
      const p = pending.get(m.id);
      if (m.type === "audio" && p) { pending.delete(m.id); p.resolve({ wav: m.audio, sampleRate: m.sampleRate }); }
      else if (m.type === "skipped" && p) { pending.delete(m.id); p.resolve(null); }
      else if (m.type === "error") {
        if (p) { pending.delete(m.id); p.reject(new Error(m.message)); }
        else if (loading && loading.reject) loading.reject(new Error(m.message));
      }
    };
    worker.onerror = (e) => {
      const err = new Error((e && e.message) || "음성 엔진 오류");
      if (loading && loading.reject) loading.reject(err);
      pending.forEach(p => p.reject(err)); pending.clear();
      shutdown();
    };
    return worker;
  }
  /** 모델을 불러온다 (처음이면 내려받기). onProgress(받은 바이트, 전체 바이트) */
  function load(onProgress, voice) {
    clearTimeout(unloadTimer);
    if (loaded) return Promise.resolve(info);
    if (loading) { if (onProgress) progressCb = mkProgress(onProgress); return loading.promise; }
    if (!supported()) return Promise.reject(new Error("이 브라우저에서는 자연스러운 음성을 쓸 수 없어요"));
    progressCb = onProgress ? mkProgress(onProgress) : null;
    loading = {};
    loading.promise = new Promise((resolve, reject) => { loading.resolve = resolve; loading.reject = reject; })
      .then(m => {
        loaded = true; info = m;
        try { localStorage.setItem(READY_KEY, m.device + ":" + m.dtype); localStorage.setItem(SPEED_KEY, String(Math.round(m.rtf * 100) / 100)); } catch (e) {}
        return m;
      })
      .finally(() => { loading = null; progressCb = null; });
    const waitGpu = gpuOk === null ? new Promise(r => setTimeout(r, 600)) : Promise.resolve();   // 그래픽 가속 확인이 끝나기를 잠깐 기다린다
    const my = loading;
    waitGpu.then(() => { if (loading !== my) return; const pl = plan(); ensureWorker().postMessage({ type: "load", device: pl.device, dtype: pl.dtype, voice }); });
    return loading.promise;
  }
  function mkProgress(cb) {
    const files = {};
    return (m) => {
      files[m.file] = [m.loaded, m.total];
      let a = 0, b = 0; Object.values(files).forEach(([x, y]) => { a += x; b += y; });
      cb(a, b);
    };
  }
  /** 문장 → 소리 { wav: Float32Array, sampleRate } */
  function generate(text, voice, speed, gen) {
    const id = ++reqId;
    const p = load(null, voice).then(() => new Promise((resolve, reject) => {
      if (skipped.delete(id)) { resolve(null); return; }   // 줄을 서기 전에 그만뒀다
      pending.set(id, { resolve, reject });
      worker.postMessage({ type: "gen", id, text, voice, speed, gen });
    }));
    p.reqId = id;                                    // skip(reqId)으로 그만둘 수 있게
    return p;
  }
  /** 이 요청은 아직 만들기 전이면 건너뛴다 (null로 끝남. 이미 만드는 중이면 그대로 끝까지) */
  const skipped = new Set();
  function skip(id) {
    if (!id) return;
    if (worker && pending.has(id)) worker.postMessage({ type: "skip", id });
    else skipped.add(id);
  }
  /** 이 세대보다 오래된(이미 멈춘) 요청은 만들지 않고 건너뛴다 (null로 끝남) */
  function cancelBefore(gen) { if (worker) worker.postMessage({ type: "cancelBefore", gen }); }
  /** 메모리에서 내린다 (튜터 화면을 떠나면 잠시 뒤) */
  function shutdown() {
    if (worker) { try { worker.terminate(); } catch (e) {} }
    worker = null; loaded = false; info = null;
    pending.forEach(p => p.reject(new Error("음성 엔진을 멈췄어요"))); pending.clear();
    if (loading && loading.reject) loading.reject(new Error("음성 엔진을 멈췄어요"));
  }
  function scheduleUnload(ms) { clearTimeout(unloadTimer); unloadTimer = setTimeout(shutdown, ms || 60000); }
  /** 받아 둔 모델 지우기 */
  async function remove() {
    shutdown();
    try { localStorage.removeItem(READY_KEY); localStorage.removeItem(SPEED_KEY); } catch (e) {}
    try {
      const c = await caches.open("transformers-cache");
      for (const k of await c.keys()) if (/Kokoro-82M/.test(k.url)) await c.delete(k);
      await caches.delete("kokoro-voices");
    } catch (e) {}
  }
  /** 받아 둔 모델 파일이 아직 저장소에 있는가 (아이폰은 오래 안 쓰면 비우기도 한다) → 없으면 '받음' 표시를 지운다 */
  async function verify() {
    if (!downloaded()) return false;
    try {
      const c = await caches.open("transformers-cache");
      const ok = (await c.keys()).some(k => /Kokoro-82M.*\/onnx\/model/.test(k.url));
      if (!ok) { localStorage.removeItem(READY_KEY); localStorage.removeItem(SPEED_KEY); }
      return ok;
    } catch (e) { return true; }
  }
  return { supported, verify, cancelBefore, skip, plan, downloaded, rtf, tooSlow, load, generate, shutdown, scheduleUnload, remove,
    isLoaded: () => loaded, isLoading: () => !!loading, info: () => info };
})();
