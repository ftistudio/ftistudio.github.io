self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('offline-cache').then((cache) => {
      return cache.add('/offline.html');
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match('/offline.html');
    })
  );
});
