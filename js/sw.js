const CACHE_NAME = 'squad-cache-v1';
const urlsToCache = [
    '/offline.html',
    '/',
    // '/pwa/index.html',
    // '/pwa/css/main.css',
    // '/pwa/js/script.js',
    // '/pwa/images/logo.png',
    // '/pwa/images/icon.png',
];

const offlinePage = '/offline.html';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            // .then(cache => cache.addAll(urlsToCache))
            .then(cache => cache.addAll([offlinePage]))
            
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone the request to make it reusable
                let fetchRequest = event.request.clone();

                return fetch(fetchRequest)
                    .then(response => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response to make it reusable
                        let responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(() => {
                        return caches.match(offlinePage);
                    })
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    // Delete old cache versions
                    return cacheName.startsWith('my-pwa-cache-') && cacheName !== CACHE_NAME;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});


self.addEventListener('push', function (event) {
    const options = {
        body: event.data.text(),
        icon: '/images/logo.png',
        badge: '/images/logo.pngg'
    };

    event.waitUntil(self.registration.showNotification('Push Notification', options));
})