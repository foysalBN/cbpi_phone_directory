// src: https://www.youtube.com/watch?v=WbbAPfDVqfY
self.addEventListener("install", e => {
    console.log("Install!")

    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./style.css", "./Phone.js", './clicktocall21p.png'])
            // index , 
        })
    )
})
// if face any issue => application>Service Workers>status> Click "Stop waiting"


self.addEventListener("fetch", e => {
    console.log(`intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})