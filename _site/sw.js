const version="20200818195410",cacheName=`static::${version}`,buildContentBlob=()=>["/portfolio/adrians-music-collection.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803175/work/adrians-music-collection-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803175/work/adrians-music-collection-1.jpg","/portfolio/crawling-chaos.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803150/work/crawling-chaos-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803150/work/crawling-chaos-1.jpg","/portfolio/homebound.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800658/work/homebound-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800658/work/homebound-1.jpg","/portfolio/magento-pwa-studio.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803150/work/pwa-studio-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803150/work/pwa-studio-1.jpg","/portfolio/recipe-magic.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1578231531/work/recipe-magic-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1578231531/work/recipe-magic-1.jpg","/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:eco/v1546171888/devstar/hero-homepage.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:eco/v1546171888/devstar/hero-homepage.png","/blog/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546681004/devstar/hero-blog.svg","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546681004/devstar/hero-blog.png","/portfolio/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546680674/devstar/hero-portfolio.svg","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546680674/devstar/hero-portfolio.png","/skills/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546681002/devstar/hero-services.svg","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546681002/devstar/hero-services.png","/contact/","/manifest.json","/offline.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547300792/devstar/hero-404.svg","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547300792/devstar/hero-404.png","/thanks.html","/redirects.json","/sitemap.xml","/robots.txt","/assets/bmc-new-btn-logo.svg","https://dev.to/api/articles?username=adrianbdesigns","/assets/styles.css","/assets/default-offline-image.png","/assets/scripts/glide.js","/assets/scripts/lazysizes.js","/assets/fonts/devstar.woff?ytkptp","/assets/fonts/devstar.ttf?ytkptp","/assets/favicons/favicon-32x32.png","/assets/favicons/android-chrome-512x512.png","https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Oswald&display=swap"],updateStaticCache=()=>caches.open(cacheName).then(o=>o.addAll(buildContentBlob())),clearOldCache=()=>caches.keys().then(o=>Promise.all(o.filter(o=>o!==cacheName).map(o=>(console.log(`Service Worker: removing cache ${o}`),caches["delete"](o)))));self.addEventListener("install",o=>{o.waitUntil(updateStaticCache().then(()=>{console.log(`Service Worker: cache updated to version: ${cacheName}`)}))}),self.addEventListener("activate",o=>{o.waitUntil(clearOldCache())}),self.addEventListener("fetch",o=>{let a=o.request;if(new URL(a.url).origin!==location.origin)return;if("GET"!==a.method)return void o.respondWith(fetch(a));let t="/offline.html";a.url.match(/\.(jpe?g|png|gif|svg)$/)&&(t="/assets/default-offline-image.png"),o.respondWith(fetch(a)["catch"](async()=>await caches.match(a)||caches.match(t)))});