// 자연스러운 튜터 음성(Kokoro) 만드는 일꾼 — 화면이 멈추지 않게 따로 돈다.
// 모델은 처음 한 번 Hugging Face에서 받아 브라우저 저장소(transformers-cache)에 두고, 그다음부터는 그걸 쓴다.
import { KokoroTTS } from "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js";

const MODEL = "onnx-community/Kokoro-82M-v1.0-ONNX";
let tts = null, setup = null, minGen = 0;
let chain = Promise.resolve();     // 한 번에 하나씩 차례로 만든다

async function load(device, dtype) {
  const progress = p => {
    if (p && p.status === "progress" && p.file && typeof p.loaded === "number")
      self.postMessage({ type: "progress", file: p.file, loaded: p.loaded, total: p.total || 0 });
  };
  tts = await KokoroTTS.from_pretrained(MODEL, { device, dtype, progress_callback: progress });
  setup = { device, dtype };
}

self.onmessage = (e) => {
  const m = e.data || {};
  if (m.type === "cancelBefore") { minGen = Math.max(minGen, m.gen || 0); return; }
  chain = chain.then(() => handle(m));
};
async function handle(m) {
  try {
    if (m.type === "load") {
      if (!tts) {
        let device = m.device, dtype = m.dtype;
        if (device === "webgpu") {   // 일꾼 안에서도 그래픽 장치를 받을 수 있는지 확인
          let ok = false; try { ok = !!(self.navigator.gpu && await self.navigator.gpu.requestAdapter()); } catch (err) {}
          if (!ok) { device = "wasm"; dtype = "q8"; }
        }
        try { await load(device, dtype); }
        catch (err) {
          if (device !== "webgpu") throw err;
          await load("wasm", "q8");                 // 그래픽 가속을 못 쓰면 가벼운 모델로
        }
      }
      // 처음 한 번 만들어 보며 이 기기에서 얼마나 빠른지 잰다 (그래픽 가속은 이때 준비가 끝난다)
      await tts.generate("Hi!", { voice: m.voice || "af_bella" });          // 한 번은 준비 운동 (그래픽 가속은 처음에 느리다)
      const t0 = performance.now();
      const a = await tts.generate("Hi there, nice to meet you.", { voice: m.voice || "af_bella" });
      const sec = a.audio.length / a.sampling_rate;
      self.postMessage({ type: "loaded", device: setup.device, dtype: setup.dtype, rtf: (performance.now() - t0) / 1000 / Math.max(0.3, sec) });
    } else if (m.type === "gen") {
      if (m.gen != null && m.gen < minGen) { self.postMessage({ type: "skipped", id: m.id }); return; }
      const t0 = performance.now();
      const a = await tts.generate(m.text, { voice: m.voice, speed: m.speed || 1 });
      const audio = a.audio;
      self.postMessage({ type: "audio", id: m.id, audio, sampleRate: a.sampling_rate, ms: performance.now() - t0 }, [audio.buffer]);
    }
  } catch (err) {
    self.postMessage({ type: "error", id: m.id, message: String((err && err.message) || err) });
  }
}
