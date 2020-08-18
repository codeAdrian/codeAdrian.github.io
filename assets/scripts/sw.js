---
permalink: "/sw.js"
layout: none
---
const version = '{{ site.time | date: '%Y%m%d%H%M%S' }}';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return [
    {%- for item in site.portfolio limit: 5 -%}
    "{{ item.url }}",
    {%- if item.image -%}"{{ item.image }}","{{ item.image_fallback }}",{%- endif -%}
    {%- endfor -%}
    {%- for page in site.pages -%}
      {%- unless page.url contains 'sw.js' or page.url contains '404.html' -%}
        "{{ page.url }}",
        {%- if page.hero_image -%}"{{ page.hero_image }}", "{{ page.hero_image_fallback }}",{%- endif -%}
      {%- endunless -%}
    {%- endfor -%}
      "{{ site.logo }}","https://dev.to/api/articles?username=adrianbdesigns", "/assets/styles.css","/assets/default-offline-image.png","/assets/scripts/glide.js","/assets/scripts/lazyload.js","/assets/fonts/devstar.woff?ytkptp","/assets/fonts/devstar.ttf?ytkptp","/assets/favicons/favicon-32x32.png","/assets/favicons/android-chrome-512x512.png","https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Oswald&display=swap"
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
