// ==========================================
// 자연스러운 음성 (Kokoro) — 앱 전체 공용 창구 + 재생
// ==========================================
// 음성을 만드는 일은 js/kokoro-tts.js(KokoroVoice, 기기 안에서 만듦)가 맡고,
// 여기서는 앱의 다른 화면(패턴·단어·회화·쉐도잉)이 쓰던 이름 그대로 연결해 주고 소리를 재생한다.
// 모델은 처음 한 번 받아 두면(그래픽 가속 기기 약 330MB, 없는 기기 약 90MB) 인터넷 없이 쓴다.

const NeuralTTS = (() => {
  // pair: 대화에서 B 화자에게 쓸 반대 성별 목소리
  const VOICES = [
    { id: 'af_heart', label: '여성 1 · 따뜻하고 자연스러운 ★', pair: 'am_michael' },
    { id: 'af_bella', label: '여성 2 · 밝고 생기 있는', pair: 'am_puck' },
    { id: 'af_nicole', label: '여성 3 · 속삭이듯 부드러운', pair: 'am_fenrir' },
    { id: 'af_kore', label: '여성 4 · 차분하고 또렷한', pair: 'bm_george' },
    { id: 'af_sarah', label: '여성 5 · 상냥한', pair: 'am_michael' },
    { id: 'bf_emma', label: '여성 6 · 영국식', pair: 'bm_george' },
    { id: 'am_michael', label: '남성 1 · 다정하고 자연스러운 ★', pair: 'af_heart' },
    { id: 'am_puck', label: '남성 2 · 밝고 경쾌한', pair: 'af_bella' },
    { id: 'am_fenrir', label: '남성 3 · 깊고 힘 있는', pair: 'af_nicole' },
    { id: 'bm_george', label: '남성 4 · 영국식 차분한', pair: 'bf_emma' }
  ];
  const K = () => (typeof KokoroVoice !== 'undefined' ? KokoroVoice : null);

  // 예전 음성(Supertonic, 약 440MB)을 받아 두었으면 지워서 저장 공간을 돌려준다
  try {
    if (localStorage.getItem('faith_voice_ready') || localStorage.getItem('faith_voice_ready_manifest')) {
      localStorage.removeItem('faith_voice_ready'); localStorage.removeItem('faith_voice_ready_manifest');
      if (typeof caches !== 'undefined') caches.delete('faith-voice-v1').catch(() => {});
    }
  } catch (e) {}

  const isSupported = () => !!K() && K().supported();
  /** 받아 두었고 파일도 남아 있는가 */
  const isReady = async () => !!K() && K().verify();
  /** 이 기기에서 너무 느린가 (그러면 기본 음성으로 읽는다) */
  const tooSlow = () => !!K() && K().tooSlow();
  const downloadMB = () => (K() ? K().plan().mb : 0);
  const pairOf = id => (VOICES.find(v => v.id === id) || {}).pair || id;

  let cancelled = false;
  /** 모델 받기 (= 처음 불러오기). onProgress(받은 바이트, 전체 바이트) */
  async function download(onProgress) {
    if (!isSupported()) throw new Error('이 브라우저에서는 자연스러운 음성을 쓸 수 없습니다.');
    try { if (navigator.storage && navigator.storage.persist) await navigator.storage.persist(); } catch (e) {}
    cancelled = false;
    try { return await K().load(onProgress); }
    catch (e) {
      if (cancelled) { const err = new Error('받기를 멈췄습니다'); err.name = 'AbortError'; throw err; }
      throw e;
    }
  }
  function cancelDownload() { cancelled = true; if (K()) K().shutdown(); }
  async function remove() { if (K()) await K().remove(); stopAudio(); }

  const isLoaded = () => !!K() && K().isLoaded();
  const ensureLoaded = () => (K() ? K().load() : Promise.reject(new Error('음성 엔진이 없습니다')));
  let stopSeq = 0;
  function shutdown() { stopSeq++; if (K()) K().shutdown(); stopAudio(); }

  /** 문장 하나를 음성으로 만든다. 정지 등으로 버려진 세대면 null */
  let minGen = 0;
  async function synthesize(text, style, appSpeed, gen) {
    if (!K()) return null;
    if (gen != null && gen < minGen) return null;
    const my = stopSeq;
    const speed = Math.max(0.5, Math.min(2.0, appSpeed || 1));
    try {
      const r = await K().generate(text, style || 'af_heart', speed, gen);
      if (!r || (gen != null && gen < minGen)) return null;
      return r;
    } catch (e) {
      if (my !== stopSeq) return null;          // 일부러 멈춘 경우는 실패로 치지 않는다
      throw e;
    }
  }
  /** 정지·이동 시: 이 세대보다 오래된 대기 요청은 만들지 않게 한다 */
  function cancelBefore(gen) { minGen = Math.max(minGen, gen); if (K()) K().cancelBefore(gen); }

  // ─── 재생 (Web Audio) ────────────────────────────────────────────

  let audioCtx = null;
  let currentSource = null;
  // 입모양(AI 튜터)용 소리 크기 측정기: 재생 소리를 그대로 통과시키며 크기만 잰다
  let analyser = null, levelBuf = null;

  /** 사용자가 누른 순간(사용자 동작 안)에 불러야 아이폰에서 소리가 난다 */
  function unlockAudio() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    if (!audioCtx) audioCtx = new Ctx();
    if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
    return audioCtx;
  }

  /** 만든 음성을 재생하고, 끝나면 resolve(true). 중간에 멈추면 resolve(false) */
  function play(wav, sampleRate) {
    const ctx = unlockAudio();
    stopAudio();
    if (!ctx) return Promise.resolve(false);
    const buf = ctx.createBuffer(1, wav.length, sampleRate);
    buf.copyToChannel(wav, 0);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    if (!analyser && ctx.createAnalyser) {
      try {
        analyser = ctx.createAnalyser();
        analyser.fftSize = 512;
        analyser.connect(ctx.destination);
        levelBuf = new Float32Array(analyser.fftSize);
      } catch (e) { analyser = null; }
    }
    src.connect(analyser || ctx.destination);
    currentSource = src;
    return new Promise((resolve) => {
      src.onended = () => {
        const finished = currentSource === src;
        if (finished) currentSource = null;
        resolve(finished && !src._stopped);
      };
      src.start();
    });
  }

  /** 조각조각 도착하는 음성을 오는 대로 이어서 재생한다 (받는 중에도 첫 조각부터 바로 소리가 난다).
   *  push(Float32Array, sampleRate)로 조각을 넣고, 다 넣으면 end(). done은 끝까지 재생하면 true, 중간에 멈추면 false */
  function playStream() {
    const ctx = unlockAudio();
    stopAudio();
    if (!ctx) return { push() {}, end() {}, done: Promise.resolve(false) };
    if (!analyser && ctx.createAnalyser) {
      try {
        analyser = ctx.createAnalyser();
        analyser.fftSize = 512;
        analyser.connect(ctx.destination);
        levelBuf = new Float32Array(analyser.fftSize);
      } catch (e) { analyser = null; }
    }
    const LEAD = 0.06;                                   // 조각 사이가 끊기지 않게 살짝 앞서 예약
    const sources = new Set();
    let nextTime = 0, ended = false, stopped = false, resolveDone, guard = null;
    const done = new Promise(r => { resolveDone = r; });
    const handle = {
      _stopped: false,
      stop() {
        stopped = true;
        clearTimeout(guard);
        sources.forEach(s => { try { s.stop(); } catch (e) {} });
        sources.clear();
        resolveDone(false);
      }
    };
    currentSource = handle;
    const settle = () => {
      if (stopped || !ended || sources.size) return;
      clearTimeout(guard);
      if (currentSource === handle) currentSource = null;
      resolveDone(true);
    };
    return {
      push(samples, sampleRate) {
        if (stopped || !samples || !samples.length) return;
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});
        const buf = ctx.createBuffer(1, samples.length, sampleRate);
        buf.copyToChannel(samples, 0);
        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.connect(analyser || ctx.destination);
        const at = Math.max(nextTime, ctx.currentTime + LEAD);
        nextTime = at + buf.duration;
        sources.add(src);
        src.onended = () => { sources.delete(src); settle(); };
        src.start(at);
        return at;                                       // 이 조각이 시작하는 시각 (재생 장치 시계)
      },
      end() {
        if (ended) return;
        ended = true;
        // 끝 신호가 안 와도 멈추지 않게 (예약한 소리 길이 + 여유)
        guard = setTimeout(() => { sources.clear(); settle(); }, Math.max(0, nextTime - ctx.currentTime) * 1000 + 3000);
        settle();
      },
      done
    };
  }

  /** 마이크로 들을 때 잠시 재생 장치를 쉬게 한다 (안드로이드에서 켜져 있으면 음성 인식이 소리를 못 받는 경우가 있음).
   *  다음에 재생할 때 unlockAudio()가 다시 깨운다 */
  function suspendAudio() {
    if (audioCtx && audioCtx.state === 'running') audioCtx.suspend().catch(() => {});
  }

  /** 지금 재생 중인 소리의 크기(0~1 정도). 재생 중이 아니면 0 */
  function outputLevel() {
    if (!analyser || !currentSource || !analyser.getFloatTimeDomainData) return 0;
    analyser.getFloatTimeDomainData(levelBuf);
    let sum = 0;
    for (let i = 0; i < levelBuf.length; i++) sum += levelBuf[i] * levelBuf[i];
    return Math.sqrt(sum / levelBuf.length);
  }

  function stopAudio() {
    if (currentSource) {
      currentSource._stopped = true;
      try { currentSource.stop(); } catch (e) {}
      currentSource = null;
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
  }

  return {
    VOICES, isSupported, isReady, tooSlow, downloadMB, pairOf, download, cancelDownload, remove,
    isLoaded, ensureLoaded, shutdown, synthesize, cancelBefore, unlockAudio, play, playStream, stopAudio, outputLevel, suspendAudio,
    isPlaying: () => !!currentSource,   // 지금 실제로 소리를 내는 중인지 (튜터 말하는 영상용)
    // 재생 장치가 내보낸 소리가 실제로 귀에 들리기까지 걸리는 시간 (ms, 블루투스면 길다) — 입술 싱크를 여기에 맞춘다
    outputLatencyMs: () => audioCtx ? ((audioCtx.outputLatency || 0) + (audioCtx.baseLatency || 0)) * 1000 : 0,
    // 지금 귀에 들리는 소리의 시각 (재생 장치 시계 기준, push가 돌려준 시각과 비교한다)
    heardTime: () => audioCtx ? audioCtx.currentTime - Math.min(0.35, (audioCtx.outputLatency || 0) + (audioCtx.baseLatency || 0)) : 0
  };
})();
