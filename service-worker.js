// 캐시 버전 - 정적 자산을 변경했을 때 숫자를 올리세요. (index.html의 ?v= 숫자도 같이 올린다)
const CACHE_NAME = 'engo-cache-v177';
// 예전 음성 모델 저장소 이름(튜터 인사 음성 저장소도 이 이름으로 시작) - 정리·가로채기 대상에서 제외
const VOICE_CACHE_PREFIX = 'faith-voice';
const VOICE_HOST_PATH = 'https://csy870617.github.io/faith-voice/';
// 튜터의 자연스러운 음성(Kokoro) 모델 저장소 — 지우거나 가로채지 않는다 (수백 MB라 앱 캐시에 또 넣지 않게)
const KEEP_CACHES = ['transformers-cache', 'kokoro-voices'];
const MODEL_HOSTS = /^https:\/\/([a-z0-9-]+\.)*(huggingface\.co|hf\.co|xethub\.hf\.co)\/|^https:\/\/cdn\.jsdelivr\.net\/npm\/(@huggingface|onnxruntime|kokoro-js)/;

// 캐싱할 파일 목록 (같은 출처의 핵심 자산)
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './js/core.js',
  './js/storage.js',
  './js/media.js',
  './js/study.js',
  './js/game.js',
  './js/neural-tts.js',
  './js/talk-plan.js',
  './js/tutor-live.js',
  './js/tutor.js',
  './js/kokoro-tts.js',
  './js/kokoro-worker.js',
  './pattern.js',
  './word.js',
  './idiom.js',
  './conversation.js',
  './manifest.json',
  './icon.png',
  './logo.png' // 파비콘·앱 아이콘(manifest) - 오프라인에서도 표시되도록 캐시
];

// 외부 CDN 자산 - 일시 장애로 받지 못해도 설치 자체는 실패하지 않도록 분리
const EXTERNAL_ASSETS = [
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
];

// 1. 설치 (Install) - 새 파일 다운로드
self.addEventListener('install', (event) => {
  // 대기하지 않고 즉시 활성화 단계로 넘어가도록 설정 (빠른 업데이트)
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all assets');
      // 브라우저 HTTP 캐시에 남은 옛 파일 대신 서버의 새 파일을 받는다
      return cache.addAll(ASSETS_TO_CACHE.map((u) => new Request(u, { cache: 'reload' }))).then(() =>
        Promise.allSettled(EXTERNAL_ASSETS.map((url) => cache.add(url)))
      );
    })
  );
});

// 2. 활성화 (Activate) - 구버전 캐시 정리
self.addEventListener('activate', (event) => {
  // 즉시 모든 페이지(클라이언트)를 제어하도록 설정
  event.waitUntil(self.clients.claim());

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        // 받아 둔 음성 모델 캐시는 지우지 않는다 (지우면 수백 MB를 다시 받아야 함)
        // (예전 기기 안 AI 튜터 모델 캐시 webllm·tvmjs도 여기서 함께 지워진다. 튜터 음성 모델 캐시는 남긴다)
        if (key !== CACHE_NAME && !key.startsWith(VOICE_CACHE_PREFIX) && !KEEP_CACHES.includes(key)) {
          console.log('[Service Worker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

// 3. 요청 가로채기 (Fetch)
// - HTML(navigation): network-first (새 버전 즉시 반영, 오프라인은 캐시 fallback)
// - 정적 자산: stale-while-revalidate (캐시 즉시 반환 + 백그라운드 업데이트)
// - GET 만 캐시, 외부 API(POST 등)는 패스
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (!req.url.startsWith('http')) return;
  if (req.method !== 'GET') return;
  // 음성 모델 내려받기는 가로채지 않는다 (앱 캐시에 수백 MB가 한 번 더 저장되는 것 방지)
  if (req.url.startsWith(VOICE_HOST_PATH)) return;
  if (MODEL_HOSTS.test(req.url)) return;
  // 튜터 영상은 브라우저가 나눠 받기(Range)로 틀어서 가로채지 않는다 (아이폰은 가로채면 영상이 안 나오기도 함)
  if (/\.(mp4|webm)(\?|$)/.test(req.url)) return;

  const isNavigation = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isNavigation) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // 404/500 같은 오류 페이지가 캐시되면 오프라인 시 오류 화면이 뜨므로 정상 응답만 저장
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req).then((res) => {
        if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached || caches.match(req, { ignoreSearch: true }));   // 오프라인: ?v= 없이 저장된 파일로
      return cached || fetchPromise;
    })
  );
});




