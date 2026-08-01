// amn portal service worker — deliberately does NOT cache the app.
// Its only job is to make the app installable; every load fetches the
// current amn_pmp.html from GitHub Pages, so there are never stale copies.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => {}); // network passthrough
