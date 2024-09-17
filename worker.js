self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('teleprompter-app').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/path_to_your_icon/icon.png',
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});