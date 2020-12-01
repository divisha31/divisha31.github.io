'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "46488887a78501184a8420249fe6fb12",
"assets/assets/images/atmo_chat.png": "eae775a6b7d2d5421fc6bec478e0c8b2",
"assets/assets/images/atmo_chat1.png": "15ea899d90222da0a4d1017ec9e65849",
"assets/assets/images/Big_data_developer.png": "32a359ddb59047042971f27dd109ac61",
"assets/assets/images/big_data_developer1.png": "49c71a18ea2e7becfd9e810307d4a6e0",
"assets/assets/images/chat.jpeg": "51ce2c2d8808a40b19e2d31a3225755e",
"assets/assets/images/circular.gif": "8ca654696b2a7a748da1186c799f0587",
"assets/assets/images/city_page.gif": "205837644f2d609422c6716b0b91a65c",
"assets/assets/images/combined.png": "82896ec37385c75ab899339dd94786c5",
"assets/assets/images/flash_chat.png": "412117c4a9511bdc379e9d19fd0727f8",
"assets/assets/images/flash_chat1.png": "e478a01cbeaab246ee6b2ca04a855836",
"assets/assets/images/flash_chat1.png.svg": "e20e1cf8452ed3e8fe238be38e9228b3",
"assets/assets/images/flutter_divi.png": "565aa042255810b3caa4a3df2b1350e1",
"assets/assets/images/flutter_divi1.png": "ae113d07efb66843384749055d5e5997",
"assets/assets/images/flutter_divi2.png": "5cb0939b1f1367bf8f752a1af551d746",
"assets/assets/images/insta_icon.png": "6d124464671720dc6b0aef767e23c6ed",
"assets/assets/images/insta_icon1.png": "fda6d1cef4254c76d3f2e775139de0f3",
"assets/assets/images/login.jpeg": "2344d289d82291a9339bf262479e0adf",
"assets/assets/images/login_reg.jpeg": "8aac6526420799befc6e2e9ae785e0b0",
"assets/assets/images/logo.png": "837c4288713dbe56af119bf799ccedee",
"assets/assets/images/medium_icon.png": "1e82f6b4ffd6a2c0c26e076545219e3d",
"assets/assets/images/medium_icon1.png": "4dbe67104e1efa6ce49c5e9f2ce3a1d3",
"assets/assets/images/menu.gif": "948fe234878619b6d03e37b316dec664",
"assets/assets/images/splash.png": "ed4237846120cd9e266846d94666575a",
"assets/assets/images/temp_page.gif": "0745f2aabc18e6f0ea9e5917617500f8",
"assets/assets/images/turn.gif": "8e8515d6f7eccd2140ebed862c297f10",
"assets/assets/images/turn_chat.png": "24176982d396b988765862cf7385afb8",
"assets/assets/images/turn_chat1.png": "3236d758ce52a054f700c985a8f5c884",
"assets/assets/images/video.gif": "5581afb0d29f25b8980de117f407ea59",
"assets/assets/images/weather.gif": "3a3c6844245bfd8cbe11afaeb59996f2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "63caf2764da594ada589fe48f9d91003",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "28abf18b86acac6350e657ca1b0c480f",
"icons/Icon-192.png": "0ad4a3c5d786c5991fc142c19ada5065",
"icons/Icon-512.png": "1aced899efb597aaac6368d16848c797",
"index.html": "1a5668426dbb91bcaff7266e8d645890",
"/": "1a5668426dbb91bcaff7266e8d645890",
"main.dart.js": "92370456da7a2bd5dae1ffbcff851e5a",
"manifest.json": "4c81c6929ca7bef481e89484f7fe395c",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
