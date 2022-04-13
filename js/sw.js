var CACHE_NAME = 'savelink-cache-v1';
var urlsTocache = ['/', '/index.html, /css/style.css'];

self.addEventListener('install', function (event) {
  // perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('opened caches');
      return cache.addAll(urlsTocache);
    })
  );
});
