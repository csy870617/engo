// ==========================================
// AI 튜터 실시간 대화 (구글 Gemini Live)
// ==========================================
// 듣기 → 생각 → 말하기를 구글 서버가 한 번에 한다 (사람처럼 바로 대답). 내 Gemini 키로 구글에 바로 연결한다.
//  - 마이크 소리: 16kHz 16비트로 바꿔 0.1초마다 보낸다
//  - 튜터 목소리: 24kHz 16비트 조각이 오는 대로 바로 튼다
//  - 내 말·튜터 말 글자(받아쓰기)도 함께 온다 → 말풍선·교정·힌트·피드백에 쓴다
// 이 파일은 연결·마이크·소리만 맡고, 대화 흐름은 tutor.js가 맡는다.

const TutorLive = (() => {
  const MODEL = "models/gemini-3.8-live";
  const WS_URL = "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent";
  const supported = () => typeof WebSocket !== "undefined" && !!(window.AudioContext || window.webkitAudioContext) &&
    !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

  function b64(buf) {
    const bytes = new Uint8Array(buf);
    let bin = ""; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  }
  function pcm16ToFloat(base64) {
    const bin = atob(base64), n = bin.length >> 1, out = new Float32Array(n);
    for (let i = 0; i < n; i++) { let v = bin.charCodeAt(2 * i) | (bin.charCodeAt(2 * i + 1) << 8); if (v >= 32768) v -= 65536; out[i] = v / 32768; }
    return out;
  }

  /** 연결: o = { key, system, voice, handle, minimal, onReady, onAudio(float32, rate), onIn(text), onOut(text), onTurnDone(), onInterrupted(), onHandle(h), onGoAway(), onClose({ready, code, reason}) } */
  function connect(o) {
    let ws, ready = false, closed = false;
    try { ws = new WebSocket(WS_URL + "?key=" + encodeURIComponent(o.key)); } catch (e) { setTimeout(() => o.onClose && o.onClose({ ready: false, code: 0, reason: String(e && e.message || e) }), 0); return null; }
    ws.binaryType = "arraybuffer";
    const dec = new TextDecoder();
    const send = obj => { if (ws.readyState === 1) ws.send(JSON.stringify(obj)); };
    ws.onopen = () => {
      const setup = {
        model: MODEL,
        generationConfig: { responseModalities: ["AUDIO"], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: o.voice } } } },
        systemInstruction: { parts: [{ text: o.system }] },
        inputAudioTranscription: {},
        outputAudioTranscription: {}
      };
      if (!o.minimal) {
        // 말이 끝난 걸 빨리 알아채되 (사람처럼 바로 대답), 생각하느라 잠깐 멈춘 건 기다린다
        setup.realtimeInputConfig = { automaticActivityDetection: { endOfSpeechSensitivity: "END_SENSITIVITY_HIGH", silenceDurationMs: 600, prefixPaddingMs: 200 } };
        setup.sessionResumption = o.handle ? { handle: o.handle } : {};     // 연결이 끊겨도 대화를 이어 갈 수 있게
        setup.contextWindowCompression = { slidingWindow: {} };            // 15분이 넘어도 오래 대화할 수 있게
      }
      send({ setup });
    };
    ws.onmessage = ev => {
      let m;
      try { m = JSON.parse(typeof ev.data === "string" ? ev.data : dec.decode(ev.data)); } catch (e) { return; }
      if (m.setupComplete) { ready = true; o.onReady && o.onReady(); return; }
      if (m.sessionResumptionUpdate && m.sessionResumptionUpdate.resumable && m.sessionResumptionUpdate.newHandle) { o.onHandle && o.onHandle(m.sessionResumptionUpdate.newHandle); }
      if (m.goAway) { o.onGoAway && o.onGoAway(); }
      const sc = m.serverContent;
      if (!sc) return;
      if (sc.interrupted) o.onInterrupted && o.onInterrupted();
      if (sc.inputTranscription && sc.inputTranscription.text) o.onIn && o.onIn(sc.inputTranscription.text);
      const parts = (sc.modelTurn && sc.modelTurn.parts) || [];
      for (const p of parts) {
        const d = p.inlineData;
        if (d && d.data && /audio/.test(d.mimeType || "audio")) {
          const rate = +((/rate=(\d+)/.exec(d.mimeType || "") || [])[1]) || 24000;
          o.onAudio && o.onAudio(pcm16ToFloat(d.data), rate);
        }
      }
      if (sc.outputTranscription && sc.outputTranscription.text) o.onOut && o.onOut(sc.outputTranscription.text);
      if (sc.turnComplete) o.onTurnDone && o.onTurnDone();
    };
    ws.onerror = () => {};
    ws.onclose = ev => { if (closed) return; closed = true; o.onClose && o.onClose({ ready, code: ev.code, reason: ev.reason || "" }); };
    return {
      get ready() { return ready; },
      /** 마이크 소리 (16kHz 16비트) */
      sendAudio(int16) { send({ realtimeInput: { audio: { data: b64(int16.buffer), mimeType: "audio/pcm;rate=16000" } } }); },
      /** 글로 말하기 (complete면 바로 대답한다) */
      sendText(text, complete = true) { send({ clientContent: { turns: [{ role: "user", parts: [{ text }] }], turnComplete: complete } }); },
      /** 앞의 대화 넣기 (새로 연결했을 때) */
      sendHistory(turns) { if (turns.length) send({ clientContent: { turns: turns.map(t => ({ role: t.role === "assistant" ? "model" : "user", parts: [{ text: t.content }] })), turnComplete: false } }); },
      /** 마이크 소리를 한동안 안 보낸다 (튜터가 말하는 동안 등) — 서버가 말 끝을 바로 알게 */
      audioPause() { send({ realtimeInput: { audioStreamEnd: true } }); },
      close() { closed = true; try { ws.close(); } catch (e) {} }
    };
  }

  /** 마이크: 0.1초마다 onChunk(Int16Array 16kHz, rms). 같은 소리 장치(ctx)를 쓴다 (아이폰은 소리 장치가 여럿이면 문제가 생긴다) */
  async function mic(ctx, onChunk) {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
    if (ctx.state === "suspended") await ctx.resume().catch(() => {});
    const src = ctx.createMediaStreamSource(stream);
    const proc = ctx.createScriptProcessor(2048, 1, 1);
    const ratio = ctx.sampleRate / 16000, block = 1600;
    let pos = 0, acc = new Int16Array(block), n = 0, sq = 0;
    proc.onaudioprocess = e => {
      const d = e.inputBuffer.getChannelData(0);
      // 구간 평균으로 16kHz로 줄인다 (간단한 저역 통과 겸)
      while (pos < d.length) {
        const a = Math.floor(pos), b = Math.min(d.length, Math.floor(pos + ratio));
        let s = 0; for (let i = a; i < b; i++) s += d[i];
        const v = Math.max(-1, Math.min(1, s / Math.max(1, b - a)));
        acc[n++] = v < 0 ? v * 0x8000 : v * 0x7fff; sq += v * v;
        if (n === block) { onChunk(acc, Math.sqrt(sq / block)); acc = new Int16Array(block); n = 0; sq = 0; }
        pos += ratio;
      }
      pos -= d.length;
    };
    src.connect(proc); proc.connect(ctx.destination);   // (출력은 0이라 들리지 않는다)
    return {
      stop() {
        proc.onaudioprocess = null;
        try { src.disconnect(); proc.disconnect(); } catch (e) {}
        stream.getTracks().forEach(t => t.stop());
      }
    };
  }

  return { MODEL, supported, connect, mic };
})();
