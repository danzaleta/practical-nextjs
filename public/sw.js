if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Q48DIeg_jlDRDTC4rPPGC/_buildManifest.js",revision:"0bc181656afbdd6270a89cc73d9d4b62"},{url:"/_next/static/Q48DIeg_jlDRDTC4rPPGC/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Q48DIeg_jlDRDTC4rPPGC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/647-a74c75161136ebca.js",revision:"a74c75161136ebca"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-6fcdf396a6c5c4ca.js",revision:"6fcdf396a6c5c4ca"},{url:"/_next/static/chunks/pages/_app-1dd1408a741e3b7b.js",revision:"1dd1408a741e3b7b"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/account-25a532218db1cdbf.js",revision:"25a532218db1cdbf"},{url:"/_next/static/chunks/pages/checkout-3997ad90954c32bf.js",revision:"3997ad90954c32bf"},{url:"/_next/static/chunks/pages/index-fd4e5ac8eee94eda.js",revision:"fd4e5ac8eee94eda"},{url:"/_next/static/chunks/pages/login-2497dd71f2704c33.js",revision:"2497dd71f2704c33"},{url:"/_next/static/chunks/pages/new-password-38bb4478f5a5f36e.js",revision:"38bb4478f5a5f36e"},{url:"/_next/static/chunks/pages/orders-ada7d25e47e85d18.js",revision:"ada7d25e47e85d18"},{url:"/_next/static/chunks/pages/password-recovery-4d8655c6add21e80.js",revision:"4d8655c6add21e80"},{url:"/_next/static/chunks/pages/send-email-04477a92e62961e6.js",revision:"04477a92e62961e6"},{url:"/_next/static/chunks/pages/signup-b05e5f653f54ffce.js",revision:"b05e5f653f54ffce"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/0e6a2b7c3607834a.css",revision:"0e6a2b7c3607834a"},{url:"/_next/static/css/1f7862d069062715.css",revision:"1f7862d069062715"},{url:"/_next/static/css/28e8270972d6cda4.css",revision:"28e8270972d6cda4"},{url:"/_next/static/css/74fb420ec42cdf06.css",revision:"74fb420ec42cdf06"},{url:"/_next/static/css/795ff8480f8d774a.css",revision:"795ff8480f8d774a"},{url:"/_next/static/css/8f17087e0ac9ac37.css",revision:"8f17087e0ac9ac37"},{url:"/_next/static/css/9e6325c66f8060e8.css",revision:"9e6325c66f8060e8"},{url:"/_next/static/css/bed090c9261b046f.css",revision:"bed090c9261b046f"},{url:"/_next/static/css/c1e73e4d01e85adb.css",revision:"c1e73e4d01e85adb"},{url:"/_next/static/css/deb122e5000061e5.css",revision:"deb122e5000061e5"},{url:"/_next/static/media/bt_add_to_cart.fb1463ea.svg",revision:"71145515323e376971e1802aa000b90e"},{url:"/_next/static/media/bt_added_to_cart.45632f53.svg",revision:"63405dfb04c4269ecfcc8dfd667cc12f"},{url:"/_next/static/media/email.d46af11e.svg",revision:"1a348c2540a98537a3257bdc67bd5667"},{url:"/_next/static/media/flechita.1c152575.svg",revision:"5d3b853e10a449f36ca6a3f9e8ea95a6"},{url:"/_next/static/media/icon_close.e791344b.png",revision:"e9796d47eb72b46bcaa1f27a41a0ff4b"},{url:"/_next/static/media/icon_menu.b70fc14a.svg",revision:"23ae2bbff5a3a0e37d238045dd321760"},{url:"/_next/static/media/icon_shopping_cart.665a6046.svg",revision:"cd2cb126a70d30fd14c927571fd1920e"},{url:"/_next/static/media/logo_yard_sale.ab5a49e4.svg",revision:"4db98c8925bc0ef833d3a32307652a83"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"1bee2cf9d2fd8631994858dcc688fdc5"},{url:"/icon-256x256.png",revision:"ef3beb4ec2d258a50e526912ed4c9be1"},{url:"/icon-384x384.png",revision:"251c6aadde64c2dde36e91f3cdd70a26"},{url:"/icon-512x512.png",revision:"6d57b3522d829f214f820b5ee73d9b22"},{url:"/manifest.json",revision:"00a2dd0042f500369b7a00e94a452f32"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
