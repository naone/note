/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "Linuxisekai"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/css/custom.css",
    "revision": "97555d296d7daf4f2ff9bbced474c21c"
  },
  {
    "url": "/css/highlight.css",
    "revision": "8ed9b6c1b5514f73ad40caa6f207e0d8"
  },
  {
    "url": "/css/lightmode.css",
    "revision": "aeb3593b988b739a0682087caf5fa4c2"
  },
  {
    "url": "/css/style.css",
    "revision": "e21efe292b6a58c520f125f0aae04587"
  },
  {
    "url": "/css/style.old.css",
    "revision": "c8d99dad1938fd71ea93854bdd396881"
  },
  {
    "url": "/font/GlacialIndifferenceRegular.otf",
    "revision": "13dc531a2ffd9ca7eeb500515774fa74"
  },
  {
    "url": "/js/all.min.js",
    "revision": "2f0211b6e82d5d5728023ae9ce4555a6"
  },
  {
    "url": "/js/core.js",
    "revision": "7e7145004ad0b30cf6234b9d7003ca14"
  },
  {
    "url": "/js/highlight.pack.js",
    "revision": "0c675cebad7b4fce6bfb948a274a940f"
  },
  {
    "url": "/js/masonry.js",
    "revision": "c39480835cf00844e6407f24d8aaba2e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "ignoreURLParametersMatching": [/./]
});

workbox.routing.registerRoute(/(?:\/)$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"html", plugins: [new workbox.expiration.Plugin({ maxAgeSeconds: 604800, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:mp3|wav|m4a)$/, new workbox.strategies.CacheFirst({ "cacheName":"audio", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.(?:m4v|mpg|avi)$/, new workbox.strategies.CacheFirst({ "cacheName":"videos", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');

workbox.googleAnalytics.initialize({});
