// AI 튜터의 언어 모델(WebLLM)을 화면과 따로 돌리는 작업자
// - 화면(js/tutor.js)이 보내는 요청을 그대로 처리한다. 모델 계산 중에도 화면이 멈추지 않도록 분리
import { WebWorkerMLCEngineHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.85/+esm";

const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg) => handler.onmessage(msg);
