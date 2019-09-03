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
    "url": "/bulma.min.css",
    "revision": "a6bbc38bc700e01c0ef510c4ca235379"
  },
  {
    "url": "/css/custom.css",
    "revision": "12a9a6eda7efdd6529f0b7bdb028fbc3"
  },
  {
    "url": "/css/highlight-dark.css",
    "revision": "b6e0821389d1ac7868445784d6281e2d"
  },
  {
    "url": "/css/highlight-light.css",
    "revision": "45444462eccd11cd1aff9571fde41373"
  },
  {
    "url": "/css/lightmode.css",
    "revision": "40287ed9ec5faec80296d6cce322503a"
  },
  {
    "url": "/css/style.css",
    "revision": "192bda55cdb631945db8251420c7a35d"
  },
  {
    "url": "/css/style.old.css",
    "revision": "c8d99dad1938fd71ea93854bdd396881"
  },
  {
    "url": "/drac.css",
    "revision": "9d0c19a6c698f62c349ec03d451dc994"
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
    "revision": "361f41190967b6a5e6118e543028a2d2"
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
