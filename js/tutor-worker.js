// AI 튜터의 언어 모델(WebLLM)을 화면과 따로 돌리는 작업자
// - 화면(js/tutor.js)이 보내는 요청을 그대로 처리한다. 모델 계산 중에도 화면이 멈추지 않도록 분리
import { WebWorkerMLCEngineHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.85/+esm";

// 안드로이드 휴대폰의 GPU는 한 번에 오래 걸리는 작업을 강제로 끊는다(GPU 워치독).
// WebLLM 0.2.83부터는 계산을 한꺼번에 모아 보내서, 첫 답(질문 전체를 읽는 단계)에서 GPU가 끊기고
// "mapAsync ... Buffer was unmapped" 오류가 난다. 안드로이드에서는 계산을 하나씩 바로 보내게 한다
// (실행기에 원래 있는 '하나씩 보내기' 설정을 켠다. 그 설정이 남기는 완료 기록은 출력하지 않는다)
if (/Android/i.test(navigator.userAgent)) {
  Object.defineProperty(Object.prototype, "debugLogFinish", { get() { return true; }, set() {}, configurable: true });
  const log = console.log.bind(console);
  console.log = (...a) => { if (typeof a[0] === "string" && a[0].includes("][Debug] finish shader")) return; log(...a); };
}

const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg) => handler.onmessage(msg);
