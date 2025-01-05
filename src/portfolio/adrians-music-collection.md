---
layout: portfolio
title: Adrian's music collection
description: I wanted to keep track of my music collection with detailed information for each album, so I created this simple Svelte app to do just that. It leverages the Discogs API to fetch album data, and each album page dynamically generates its metadata. This project also marked my first implementation of a light/dark theme switcher.
image: adrians-music-collection-1.jpg
featured_image: adrians-music-collection-1-768w.png
type: Personal project
tech: React, Discogs API
tags: ['featured', 'portfolio']
url: https://adrians-music-collection.vercel.app/
date: 2022-01-03
---

I’ve always had a passion for music, particularly rock and metal genres. My journey started in my teenage years when I began collecting music CDs, often buying them from antique shops and pawn shops with the little money I had. Over time, I was able to buy CDs more regularly and track down some rare releases. As my collection grew to over 60 CDs, I began thinking about creating a website to organize and showcase it. Today, my collection has expanded to over 250 CDs and more than 110 vinyl records.

I originally built this site using React, drawing data from three different sources: the collection list from Firebase, album data from the Discogs API, and album cover images from Cloudinary. However, as the collection grew, it became increasingly difficult to maintain and cumbersome to update everything with each new record. After learning Svelte, I decided to rewrite and streamline the app for better performance and easier maintenance.

<figure>
{% image "portfolio/adrians-music-collection-3.jpg", "Music collection items list" %}
<figcaption>
Album listing page with pagination and sorting controls. Collection can be sorted by artist, title, release date, format, and label.
</figcaption>
</figure>

I’m really pleased with the streamlined version of the app. I’ve successfully improved the UX and added several quality-of-life features that make it more focused and easier to use. The album details page now provides much more comprehensive information and includes rich metadata, ensuring that whenever I share a link to a specific album, the metadata for that album is displayed correctly.

<figure>
{% image "portfolio/adrians-music-collection-2.jpg", "Album details page with image, video and basic info" %}
<figcaption>
Album details page shows much more information than previous version. I really like the full width layout and how image is placed next to a video and it scales accordingly.
</figcaption>
</figure>

I also realized that I had never worked on a project with a light/dark theme switcher, so I decided to add one to the app. Since the app uses a simple theme with CSS custom properties, implementing dark mode was straightforward. I just had to toggle the CSS color variables and fine-tune a few elements to ensure everything looked great in both themes.

<figure>
{% image "portfolio/adrians-music-collection-4.jpg", "Album items list page, dark theme" %}
<figcaption>Dark theme fits in perfectly with the design.
</figcaption>
</figure>

<aside>
<h2>Notable Results &amp; Achievements</h2>
<ul>
  <li>Completely rewrote a React project in Svelte.</li>
  <li>Streamlined the design and app structure, significantly improving performance.</li>
  <li>Made the app easier to update and maintain.</li>
  <li>Enhanced the album details page with unique metadata for each album.</li>
</ul>
</aside>
