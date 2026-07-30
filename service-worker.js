const cacheName = "life-saving-v1";

const files = [
"index.html",
"manifest.json"
];

self.addEventListener("install", e=>{
 e.waitUntil(
  caches.open(cacheName)
  .then(cache=>cache.addAll(files))
 );
});


self.addEventListener("fetch", e=>{
 e.respondWith(
  caches.match(e.request)
  .then(response=>response || fetch(e.request))
 );
});
