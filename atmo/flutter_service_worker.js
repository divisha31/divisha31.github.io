'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7437e0acec29bde78b38680a6e0452e0",
".git/config": "81087f112be92162dab6f17cb729e87b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "1ed2fd1bf25aecac93103bb99b323aaf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91874831aa8642200c5153040a9edb13",
".git/logs/refs/heads/master": "91874831aa8642200c5153040a9edb13",
".git/objects/0c/9604bc1fb1b230ca40f24c323dae1bc965fdee": "174564553d9a57b3ef756ba7d2dff822",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/780926244dee6bde8426358c9fae06cc23f4b0": "07492d0df556b1f5d30105983d09ede4",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/9e56af0f267eb9b7b242638ec9b8750f497bbc": "90a3d4d52989e067d6ffc05e11302f06",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/36/5eb71afce29fbcd49322d5f147985e76357acd": "add3dfb7406c92e3e97af5f97ce413ae",
".git/objects/5b/a9589c07577cae53cb23f682ebb0c50babb7e3": "30ef6060707d6a16898eaca5279fdf15",
".git/objects/6a/caa37429400a86eaaf2ec96cce6615afed38d9": "5e34a25ac376b77d903e29a39be35212",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/58cf467859c4766ac835371116bc685b9fbe42": "82df4b72042bb4d6ef08ebb4af013f13",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9b/21e8e7cb14976dbfe9808e4455b7c102535655": "7c83a6d9122bdd807c513c0b2f82985a",
".git/objects/a5/482511de34a600201af1f1a8e24d2bd57ce92e": "f73b80ae5e21e55fa922bfe0527b33a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/d01ea93cee741b06cd6ab394f40cd04a2c1690": "0442ae97baf98b266ee7bede79b735a9",
".git/objects/c4/ec66137e339ded43acbd4fc50f8e1b6f9c1471": "45b1740d75c2a09ddb73128f6fcf38b2",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ec/35a2bca5a466553f22cc427908e82aa19c42be": "79580860e77a03c643f779ff12dd8c31",
".git/objects/ee/10c1989e7ebc40e8dfb25a1bba18e9479e08f2": "614e9563133a3d014a5c01466fa94ae7",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "e5688e77dd4785d3efd1b8bc22cca43b",
"assets/AssetManifest.json": "df028b09661d91148f7ba5bd86560b55",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/city_background.jpg": "aa7ee9227bb6666a9bc42efaf423c9a3",
"assets/images/location_background.jpg": "44521995eb4ce1d0aa3d4d571fa1cb6b",
"assets/LICENSE": "345bb77c8bbf64c73d57683c9fd4b03f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "82fbd591cf27721a13c98165d490b9be",
"icons/Icon-192.png": "8f4cc30f4be940f7014daa133bd99326",
"icons/Icon-512.png": "3a4c52cbf2f8da79fa201718cfa99014",
"index.html": "07e4e680810269002b39e6b942f9917c",
"/": "07e4e680810269002b39e6b942f9917c",
"main.dart.js": "5cf31741eda276a65ec8348feca14a21",
"manifest.json": "119d0fc86302980349712638c2b6386d"
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
