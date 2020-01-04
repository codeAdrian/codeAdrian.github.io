const version = '20200104170058';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/portfolio/adrians-music-collection.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803175/work/adrians-music-collection-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803175/work/adrians-music-collection-1.jpg","/portfolio/luthien.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800658/work/luthien-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800658/work/luthien-1.jpg","/portfolio/magento-pwa-studio.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803150/work/pwa-studio-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803150/work/pwa-studio-1.jpg","/portfolio/recipe-magic.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546804900/work/recipe-magic-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546804900/work/recipe-magic-1.jpg","/portfolio/slinky-fontend-toolbox.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800659/work/slinky-toolbox-1.webp","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v15468800659/work/slinky-toolbox-1.jpg","/tag/accessibility.html","/tag/css.html","/tag/development.html","/contact/","/blog/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546681004/devstar/hero-blog.svg", "https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546681004/devstar/hero-blog.png","/portfolio/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546680674/devstar/hero-portfolio.svg", "https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546680674/devstar/hero-portfolio.png","/skills/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546681002/devstar/hero-services.svg", "https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546681002/devstar/hero-services.png","/","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:eco/v1546171888/devstar/hero-homepage.webp", "https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:eco/v1546171888/devstar/hero-homepage.png","/manifest.json","/offline.html","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547300792/devstar/hero-404.svg", "https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547300792/devstar/hero-404.png","/thanks.html","/redirects.json","/sitemap.xml","/robots.txt","https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547983560/codeAdrian/codeAdrian.svg","/assets/styles.css","/assets/default-offline-image.png","/assets/scripts/glide.js","/assets/scripts/lazyload.js","/assets/fonts/devstar.woff?r9c57c","/assets/fonts/devstar.ttf?r9c57c","/assets/favicons/favicon-32x32.png","/assets/favicons/android-chrome-512x512.png","https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Oswald"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }


  // Default url returned if page isn't cached
  let offlineAsset = "/offline.html";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
