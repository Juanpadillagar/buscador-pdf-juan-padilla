self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('buscador-pdf-cache-v1').then(function(cache) {
      return cache.addAll([
        './buscador_pdf_juan_padilla_pwa.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});