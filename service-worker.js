const CACHE_NAME = 'engo-cache-v25';
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
  'https://cdn-icons-png.flaticon.com/512/2909/2909996.png'
];

// 설치 (캐싱)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 요청 가로채기 (오프라인 대응)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 업데이트 (구버전 캐시 삭제)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );

});























