'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e1de0f69c24b1b2e9adbb0dd297e3f62",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/city_background.png": "baa3ba00e2b3d24fe7b2e986e3dbfed9",
"assets/images/location_background.png": "2abe6ba8825c581413cdbdd921c216a8",
"assets/LICENSE": "345bb77c8bbf64c73d57683c9fd4b03f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cb3a7e600e5966c3e0f843686f4c7dfc",
"/": "cb3a7e600e5966c3e0f843686f4c7dfc",
"main.dart.js": "b50375def1d1486d47cca1bb1818c97b",
"manifest.json": "6c7bac8a31b938f7fa2176d00c10638a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
