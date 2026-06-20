// 캐시 버전 - 정적 자산을 변경했을 때 숫자를 올리세요.
const CACHE_NAME = 'engo-cache-v97';

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
  './pattern.js',
  './word.js',
  './idiom.js',
  './conversation.js',
  './manifest.json',
  './icon.png'
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
      return cache.addAll(ASSETS_TO_CACHE).then(() =>
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
        if (key !== CACHE_NAME) {
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

  const isNavigation = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isNavigation) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
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
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});




