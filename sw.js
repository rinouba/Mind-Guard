const CACHE_NAME = 'mind-guard-v3';
const VERSION = '1.0.0';

const PRECACHE_FILES = [
  '/',
  '/index.html',
  '/mood-check.html',
  '/aspects.html',
  '/quote-display.html',
  '/questionnaire.html',
  '/results.html',
  '/breathing.html',
  '/relaxation.html',
  '/emotional-release.html',
  '/cbt.html',
  '/progress.html',
  '/profile.html',
  '/pricing.html',
  '/css/style.css',
  '/js/app.js',
  '/js/questions.js',
  '/js/recommendations.js',
  '/js/storage.js',
  '/js/i18n.js',
  '/js/pwa.js',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/logo.jpg',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          if (event.request.url.startsWith(self.location.origin) || event.request.url.startsWith('https://fonts.googleapis.com') || event.request.url.startsWith('https://cdnjs.cloudflare.com')) {
            cache.put(event.request, clone);
          }
        });
        return response;
      })
      .catch(() => caches.match(event.request).then((r) => r || new Response('Offline', { status: 503 })))
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
