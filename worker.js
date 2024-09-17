self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('teleprompter-app').then((cache) => cache.addAll([
      '/teleprompter/',
      '/teleprompter/favicon.ico',
      '/teleprompter/apple-touch-icon.png',
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
