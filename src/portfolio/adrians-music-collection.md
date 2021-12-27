---
layout: portfolio
title: Adrian's music collection
description: I wanted to keep track of my music collection with a detailed info for each album, so  I've created this simple Svelte app to do just that. It uses Discogs API for album data. Each album page has meta data generated on the fly. This was also the first project where I implemented a light/dark theme switcher.
image: adrians-music-collection-1.jpg
featured_image: adrians-music-collection-1-1280w.jpeg
type: Personal project
tech: React, Discogs API
tags: ['featured', 'portfolio']
url: https://adrians-music-collection.vercel.app/
---


I'm passionate about music, especially rock and metal genres. I started collecting music CDs when I was a teenager, buying CDs from an antique shops and pawn shops with the little money I had at the time. Later on I was able to buy CDs on a regular basis and find some rare releases. When my collection grew over 60 CDs, I was thinking about creating a website to keep track and show off my collection. Today, I have more than 240 CDs and over 30 vinyl records in my collection.


I've initally built this site in React and it used three data sources for a single item. The app fetched the collection list from Firebase, album data from Discogs API and the album cover image from Cloudinary. After some time, it became difficult to maintain and cumbersome to update everything for each new record. After I learned Svelte, I decided to rewrite this app and streamline it.

<figure>
{% image "portfolio/adrians-music-collection-3.jpg", "Music collection items list" %}
<figcaption>
Album listing page with pagination and sorting controls. Collection can be sorted by artist, title, release date, format, and label.
</figcaption>
</figure>

I was happy with the streamlined app and I think that I've managed to improve the UX and add some small quality-of-life features to it. It's lot more focused and easier to use. Album details page shows a lot more information and it features rich meta data so whenever I share the link to a specific item, it shows the metadata for that particular album.

<figure>
{% image "portfolio/adrians-music-collection-2.jpg", "Album details page with image, video and basic info" %}
<figcaption>
Album details page shows much more information than previous version. I really like the full width layout and how image is placed next to a video and it scales accordingly.
</figcaption>
</figure>

I also remembered that I never worked on a project that had a light/dark theme switche, so I've added it to the app. Since the app uses a simple theme and CSS custom properties, it was easy to add a dark mode just by switching the CSS color variables and fine-tuning a few items.

<figure>
{% image "portfolio/adrians-music-collection-4.jpg", "Album items list page, dark theme" %}
<figcaption>Dark theme fits in perfectly with the design.
</figcaption>
</figure>


<aside>
<h2>Notable results &amp; achievements</h2>
<ul>
<li>Completely rewrote a React project in Svelte.</li>
<li>Streamlined the design and app structure and improved performance.</li>
<li>App is easier to update and maintain. </li>
<li>Album details page features unique metadata foe each album.</li>
</ul>
</aside>