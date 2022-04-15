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

// FETCH AND ACTIVATE CACHE
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.fetch).then(function (response) {
        // check if we receive valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
        }

        var responseToCatch = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCatch);
        });
        return response;
      });
    })
  );
});

// ACTIVATE
self.addEventListener('activate', function (event) {
  var cacheWaitList = CACHE_NAME;
  event.waitUntil(
    caches.keys.then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWaitList.indexOf(cacheName) == -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
