const CACHE_NAME = 'paid2say-v1';
const ASSETS = [
  '/paid2say-mockups/social-feed.html',
  '/paid2say-mockups/affiliate-dashboard.html',
  '/paid2say-mockups/affiliate-profile.html',
  '/paid2say-mockups/business-commission-setup.html',
  '/paid2say-mockups/business-wallet.html',
  '/paid2say-mockups/business-onboarding.html',
  '/paid2say-mockups/secure-login.html',
  '/paid2say-mockups/paid2say-complete.html',
  '/paid2say-mockups/voice-equity.html',
  '/paid2say-mockups/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
