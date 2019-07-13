---
title: "Setup Pwa Hugo"
date: 2019-07-13T19:58:55+07:00
draft: false
---

berawal dari dari grub jamstackid lalu saya melihat websitenya @okitavera yang di build menggunakan sgg eleventy, nah dari situternyata okitavera.me bisa diakses secara offline. terus saya bertanya kok bisa ?
lalu saya melihat salah satu artikel di okitavera.me ternyata ia menggunakan yang namanya progresif web application ( PWA ), nah dari situ saya mencari tau bagaimana caranya mengimplementasikanya pada hugo, jarena di artikel okitavera.me hanya untuk eleventy saja. setelah saya browsing saya memenumakan artkel disini, disitu dijelaaskan step by step cara install pwa dan service worker, setelah saya coba service worker sudah teregistrasi tetapi kalau diakses secara offline tidak mau 😶, akhirnya saya bertanya ke @okitavera dan menyarankan menggunakan cara ini dan itu work thank nanda okitavera. terus apa gunanya artikel ini ? gak ada guanya sih, saya cuma mau nunjukin cara installnya, jarena jujur saya juga tidak paham dengan javascript.

setup hugo yang saya gunakan

    vscode
    github
    netlify 
    custom domain .site di idwebhost

### Siapkan favicon
    kamu bisa menggenerate disini -tinggal upload gambar yang kamu ingin jadikan icon
    gambar yang gunakan (128,144,152,196,310) gambar ini nantinya akan dijadikan icon saat kita menambkanya ke layar utama, kenapa ada banyak ? karena ntar service workernya nyesuain sendiri buat resolusi laya device kita. setelah didownload taruh di folder static project hugo kalian, kalau saya semdiri lebih memilih menaruhnya di themese/static/img biar folder root project hugo saye lebih bersih, ini sangat subjective.
### konfigurasi manifest.json
buat file manifest.json di static/manifest.json

    {
    "name": "Nolep Enthusisat.",
    "short_name": "Linuxisekai.",
    "icons": [
      {
      "src": "/img/icons/favicon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    }, {
      "src": "/img/icons/favicon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    }, {
      "src": "/img/icons/favicon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },{
      "src": "/img/icons/favicon-196x196.png",
      "sizes": "196x196",
      "type": "image/png"
    },{
      "src": "/img/icons/favicon-310x310.png",
      "sizes": "310x310",
      "type": "image/png"
    }
    ],
    "display": "standalone",
    "orientation" : "portrait",
    "background_color": "#002B36",
    "theme_color": "#073642",
    "start_url": "/"
    }


"name" dan "shortname" tinggal disesuaikan. untuk "name" disini akan tampil ketika app kita dibuka (kaya semacam splash screen )

"src", "size", dan "type tinggal disesuaikan dengan punya kamu
theme_color fungsinya sama seperti theme-color pada tag <meta>
background_color: background dari aplikasi saat loading
display:standalone membuat aplikasi webmenyembunyikan UI browser
orientation: orientasi tampilan

### emanggil manifest.json
    
     <link rel="manifest" href="/manifest.json">

taruh script diatas di antara tag <head>

### menginstall workbox dan gulp
pastikan sudah menginstall npm di os kamu. lalu jalankan perintah di bawah ini di directory root hugo

    npm init -y
    npm install gulp --save-dev
    npm install workbox-build --save-dev
    npm install gulp-clean --save-dev
    npm install gulp-shell --save-dev

perintah npm init -y diatas akan menghasilkan file package.json.
perintah selanjutnya untuk menginstall gulp, workbox, gulp-clean dan gulp-shell.

### Konfigurasi gulp

pada directory root hugo kamu buat file gulpfile.js lalu isi denagan

    const gulp = require("gulp");
    const clean = require("gulp-clean");
    const shell = require("gulp-shell");
    const workbox = require("workbox-build");

    gulp.task("clean", function () {
    return gulp.src("public", { read: false, allowEmpty: true })
    .pipe(clean());
    });

    gulp.task("hugo-build", shell.task(["hugo"]));

    gulp.task("generate-service-worker", () => {
    return workbox.generateSW({
      cacheId: "Linuxisekai",
      globDirectory: "./public",
      globPatterns: [
          "**/*.{css,js,eot,ttf,woff,woff2,otf}"
      ],
      swDest: "./public/sw.js",
      modifyUrlPrefix: {
          "": "/"
      },
      clientsClaim: true,
      skipWaiting: true,
      ignoreUrlParametersMatching: [/./],
      offlineGoogleAnalytics: true,
      maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
      runtimeCaching: [
          {
              urlPattern: /(?:\/)$/,
              handler: "staleWhileRevalidate",
              options: {
                  cacheName: "html",
                  expiration: {
                      maxAgeSeconds: 60 * 60 * 24 * 7,
                  },
              },
          },
          {
              urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
              handler: "cacheFirst",
              options: {
                  cacheName: "images",
                  expiration: {
                      maxEntries: 1000,
                      maxAgeSeconds: 60 * 60 * 24 * 365,
                  },
              },
          },
          {
              urlPattern: /\.(?:mp3|wav|m4a)$/,
              handler: "cacheFirst",
              options: {
                  cacheName: "audio",
                  expiration: {
                      maxEntries: 1000,
                      maxAgeSeconds: 60 * 60 * 24 * 365,
                  },
              },
          },
          {
              urlPattern: /\.(?:m4v|mpg|avi)$/,
              handler: "cacheFirst",
              options: {
                  cacheName: "videos",
                  expiration: {
                      maxEntries: 1000,
                      maxAgeSeconds: 60 * 60 * 24 * 365,
                  },
              },
          }
      ],
    });
    });

    gulp.task("build", gulp.series("clean", "hugo-build", "generate-service-worker"));


apa fungsi baris kode diatas ? silahkan tanya ke adminpoly.

### membuat script untuk memanggil service worker

    <script>
        if('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js', { scope: '/' })
                .then(function(registration) {
                    console.log('Service Worker Registered');
                });
    
            navigator.serviceWorker
                .ready
                .then(function(registration) {
                    console.log('Service Worker Ready');
                });
        }
    </script>

tauh kode diatas di bagian tepat diatas </body>

### run bulid task

buka vscode lalu tekan ctrl+shift+p lalu pilih Task : Run task lalu pilih gulp : build selanjutnya pilih continue without scanning the task output

perintah ini akan menghasilkan file sw.js di directory public ( silahkan cek terlebih dahulu )
contoh sw.js punya saya :

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
    "url": "/css/bs.css",
    "revision": "417f7a255065a91ee9ec2f44eb321a22"
    },
    {
    "url": "/css/bulma.css",
    "revision": "b15b1b1893809fc6c6a8d7268fd7d3fe"
    },
    {
    "url": "/css/custom.css",
    "revision": "84f1a3067b47c6240f071563f194e127"
    },
    {
    "url": "/css/solarized-dark.css",
    "revision": "09a127856dba4865a3429ea0c0f756fd"
    },
    {
    "url": "/js/core.js",
    "revision": "06f03a8cb3b8a7f3dd0feccf62afac66"
    },
    {
    "url": "/js/feather.min.js",
    "revision": "a6cd4b6cf83ee3b37fc6f4d59294619b"
    },
    {
    "url": "/js/highlight.pack.js",
    "revision": "0c675cebad7b4fce6bfb948a274a940f"
    },
    {
    "url": "/js/jquery.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
    },
    {
    "url": "/js/lazysizes.min.js",
    "revision": "149ff45fc6c2f13e892e438a58abb77f"
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



