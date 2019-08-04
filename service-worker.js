/* global workbox */

workbox.core.setCacheNameDetails({
  prefix: 'mrvs',
  suffix: 'v1.1',
  precache: 'precache',
  runtime: 'runcache'
})

workbox.skipWaiting()
workbox.clientsClaim()

workbox.precaching.precacheAndRoute(self.__precacheManifest)

workbox.routing.registerRoute(
  /\.html$/,
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
    /assets\/images/,
    workbox.strategies.cacheFirst()
)

workbox.routing.registerRoute(
    /^https?:\/\/cdn./,
    workbox.strategies.staleWhileRevalidate()
)