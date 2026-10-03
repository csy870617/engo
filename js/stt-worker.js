// 기기 안 음성 인식(Whisper)을 화면과 따로 돌리는 작업자
// - 인앱 브라우저처럼 브라우저 음성 인식이 없는 곳에서 마이크 소리를 직접 받아 글자로 바꾼다
import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.0/+esm";

env.allowLocalModels = false;
let asr = null;

self.onmessage = async (e) => {
  const { type, id } = e.data;
  try {
    if (type === "load") {
      if (!asr) {
        // 모델·실행 장치는 화면 쪽(js/tutor.js)에서 정해 보낸다
        asr = await pipeline("automatic-speech-recognition", e.data.model, {
          dtype: e.data.dtype, device: e.data.device,
          progress_callback: p => self.postMessage({ type: "progress", id, status: p.status, file: p.file, progress: p.progress, loaded: p.loaded, total: p.total })
        });
      }
      self.postMessage({ type: "ready", id });
    } else if (type === "transcribe") {
      const out = await asr(e.data.audio);
      self.postMessage({ type: "result", id, text: (out && out.text) || "" });
    }
  } catch (err) {
    self.postMessage({ type: "error", id, message: String((err && err.message) || err) });
  }
};
