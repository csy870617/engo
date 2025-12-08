// 버전을 v5로 올렸습니다. (수정 시마다 숫자 올리기)
const CACHE_NAME = 'engo-cache-v85';

// 캐싱할 파일 목록
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './pattern.js',
  './word.js',
  './idiom.js',
  './conversation.js',
  './manifest.json',
  './icon.png',
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
];

// 1. 설치 (Install) - 새 파일 다운로드
self.addEventListener('install', (event) => {
  // 대기하지 않고 즉시 활성화 단계로 넘어가도록 설정 (빠른 업데이트)
  self.skipWaiting(); 
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all assets');
      return cache.addAll(ASSETS_TO_CACHE);
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

// 3. 요청 가로채기 (Fetch) - 오프라인 지원
self.addEventListener('fetch', (event) => {
  // http, https 요청만 처리 (chrome-extension 등 제외)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      // 캐시에 있으면 반환, 없으면 네트워크 요청
      return response || fetch(event.request).catch(() => {
          // 오프라인이고 캐시에도 없으면 아무것도 안 함 (또는 오프라인 페이지 반환 가능)
      });
    })
  );
});