const version="20190120132532",cacheName=`static::${version}`,buildContentBlob=()=>["/blog/development/mastering-css-vertical-rhythm.html","/blog/development/hiding-elements-accessibility.html","/portfolio/adrians-music-collection.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803175/work/adrians-music-collection-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803175/work/adrians-music-collection-1.jpg","/portfolio/luthien.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800658/work/luthien-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800658/work/luthien-1.jpg","/portfolio/magento-pwa-studio.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803150/work/pwa-studio-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803150/work/pwa-studio-1.jpg","/portfolio/recipe-magic.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546804900/work/recipe-magic-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546804900/work/recipe-magic-1.jpg","/portfolio/slinky-fontend-toolbox.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800659/work/slinky-toolbox-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800659/work/slinky-toolbox-1.jpg","/tag/accessibility.html","/tag/css.html","/tag/development.html","/portfolio/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546680674/devstar/hero-portfolio.svg","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546680674/devstar/hero-portfolio.png","/skills/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546681002/devstar/hero-services.svg","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546681002/devstar/hero-services.png","/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:eco/v1546171888/devstar/hero-homepage.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:eco/v1546171888/devstar/hero-homepage.png","/contact/","/blog/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546681004/devstar/hero-blog.svg","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546681004/devstar/hero-blog.png","/manifest.json","/offline.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547300792/devstar/hero-404.svg","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547300792/devstar/hero-404.png","/assets/search.json","/thanks.html","/redirects.json","/sitemap.xml","/robots.txt","/feed.xml","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547983560/codeAdrian/codeAdrian.svg","/assets/styles.css","/assets/default-offline-image.png","/assets/scripts/glide.js","/assets/scripts/lazyload.js","/assets/fonts/devstar.woff?r9c57c","/assets/fonts/devstar.ttf?r9c57c","/assets/favicons/favicon-32x32.png","/assets/favicons/devstar-icon.png"],updateStaticCache=()=>caches.open(cacheName).then(o=>o.addAll(buildContentBlob())),clearOldCache=()=>caches.keys().then(o=>Promise.all(o.filter(o=>o!==cacheName).map(o=>(console.log(`Service Worker: removing cache ${o}`),caches["delete"](o)))));self.addEventListener("install",o=>{o.waitUntil(updateStaticCache().then(()=>{console.log(`Service Worker: cache updated to version: ${cacheName}`)}))}),self.addEventListener("activate",o=>{o.waitUntil(clearOldCache())}),self.addEventListener("fetch",o=>{let t=o.request;if(new URL(t.url).origin!==location.origin)return;if("GET"!==t.method)return void o.respondWith(fetch(t));let e="/offline.html";t.url.match(/\.(jpe?g|png|gif|svg)$/)&&(e="/assets/default-offline-image.png"),o.respondWith(fetch(t)["catch"](async()=>await caches.match(t)||caches.match(e)))});