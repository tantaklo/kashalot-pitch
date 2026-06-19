const CACHE = 'kashalot-pitch-v1';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './thumbs/slide-01.jpg',
  './thumbs/slide-02.jpg',
  './thumbs/slide-03.jpg',
  './thumbs/slide-04.jpg',
  './thumbs/slide-05.jpg',
  './thumbs/slide-06.jpg',
  './thumbs/slide-07.jpg',
  './thumbs/slide-08.jpg',
  './thumbs/slide-09.jpg',
  './thumbs/slide-10.jpg',
  './thumbs/slide-11.jpg',
  './thumbs/slide-12.jpg',
  './thumbs/slide-13.jpg',
  './thumbs/slide-14.jpg',
  './thumbs/slide-15.jpg',
  './thumbs/slide-16.jpg',
  './thumbs/slide-17.jpg',
  './thumbs/slide-18.jpg',
  './thumbs/slide-19.jpg',
  './thumbs/slide-20.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
