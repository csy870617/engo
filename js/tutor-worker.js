// AI 튜터의 언어 모델(WebLLM)을 화면과 따로 돌리는 작업자
// - 화면(js/tutor.js)이 보내는 요청을 그대로 처리한다. 모델 계산 중에도 화면이 멈추지 않도록 분리
import { WebWorkerMLCEngineHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.85/+esm";

// 안드로이드 휴대폰의 GPU는 한 번에 오래 걸리는 작업을 강제로 끊는다(GPU 워치독).
// WebLLM 0.2.83부터는 계산을 한꺼번에 모아 보내서, 대화를 처음 읽는 단계처럼 큰 계산에서 GPU가 끊기고
// "mapAsync ... Buffer was unmapped" 오류가 난다. 안드로이드에서는 계산을 32개씩 끊어 보낸다.
// (실행기는 계산 하나마다 debugLogFinish를 읽고, 참이면 지금까지 모은 것을 보낸다. 32번째마다만 참을 돌려준다.
//  하나씩 보내면 안전하지만 너무 느려서 묶음 크기로 타협. 이 설정이 남기는 완료 기록은 출력하지 않는다)
const FLUSH_EVERY = 32;
if (/Android/i.test(navigator.userAgent)) {
  const counts = new WeakMap();
  Object.defineProperty(Object.prototype, "debugLogFinish", {
    get() { const n = (counts.get(this) || 0) + 1; counts.set(this, n); return n % FLUSH_EVERY === 0; },
    set() {}, configurable: true
  });
  const log = console.log.bind(console);
  console.log = (...a) => { if (typeof a[0] === "string" && a[0].includes("][Debug] finish shader")) return; log(...a); };
}

const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg) => handler.onmessage(msg);
