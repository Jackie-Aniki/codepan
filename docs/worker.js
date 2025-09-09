// Establish a cache name
const hostname = self.location.hostname.replace('.', '_')
const cacheName = hostname + '_cache'

self.addEventListener('install', (event) => {
  // Activate new version of the Worker instantly
  self.skipWaiting()
  event.waitUntil(
    caches.open(cacheName).then(
      (cache) => cache.addAll(['']) // Homepage pre-cache
    )
  )
})

self.addEventListener('activate', (event) => {
  clients.claim()
})

// Helpers
function fromCache(request) {
  return caches
    .open(cacheName)
    .then((cache) => cache.match(request, { ignoreSearch: true }))
}

function updateCache(request, response) {
  if (request.method.toLowerCase() !== 'get') return
  return caches
    .open(cacheName)
    .then((cache) => cache.put(request, response.clone()))
}

// Fetch handler
self.addEventListener('fetch', (event) => {
  const { request } = event
  const { url } = request

  // Filter out requests you don't want to cache
  if (!url.match(/^https:\/\/?/) || url.match(/\/socket\.io\//)) {
    return
  }

  const mode = url.startsWith(self.location.origin) ? 'same-origin' : 'cors'
  const credentials = mode === 'cors' ? 'omit' : 'same-origin'

  event.respondWith(
    new Promise((resolve) => {
      fetch(url, { mode, credentials })
        .then((freshResponse) => {
          if (freshResponse.status === 200) {
            // If response is OK, save it to cache and return it
            updateCache(request, freshResponse)
            resolve(freshResponse)
          } else {
            // If status != 200, try getting it from cache
            fromCache(request).then((cached) => {
              if (cached) {
                // If found in cache, return it
                resolve(cached)
              } else {
                // If not in cache, return the original network response
                resolve(freshResponse)
              }
            })
          }
        })
        .catch(() => {
          // When fetch throws (e.g. offline), try getting it from cache
          fromCache(request).then((cached) => {
            if (cached) {
              resolve(cached)
            } else {
              // If also not in cache – return a simple 503 Response
              resolve(
                new Response('Offline and not cached', {
                  status: 503,
                  headers: { 'Content-Type': 'text/plain' }
                })
              )
            }
          })
        })
    })
  )
})
