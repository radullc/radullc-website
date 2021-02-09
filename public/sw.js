self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open('static').then(cache=>{
            return cache.addAll(['/', '/repos', '/main.css', '/radullc.png', '/materialize/css/materializemin.css', '/jquery.js', '/index.js', '/manifest.json', '/repos.js', '/repo.js', '/request.js'])
        })
    )
})
self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})
