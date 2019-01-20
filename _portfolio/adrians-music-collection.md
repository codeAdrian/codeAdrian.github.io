---
title: Adrian's Music Collection
layout: portfolio-item
description: I'm really passionate about music, especially Rock and Metal. I started collecting music CDs when I was a teenager, buying CDs from an antique shops and pawn shops with the little money I had at the time. Later on, I was able to buy CDs more regularly and find some rare releases. When my collection grew over 60 CDs, I was thinking about creating a website to keep track and show off my collection. Today, I have around 100 CDs in my collection.
platform: React, Firebase
contribution: Personal Project
image: https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803175/work/adrians-music-collection-1.webp
image_fallback: https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803175/work/adrians-music-collection-1.jpg
link: https://adrians-music-collection.netlify.com/
---

<article class="block block--text">

<div class="project__headingWrapper">
<h2 class="title--secondary project__heading">About The Project</h2>
</div>

<p>I'm really passionate about music, especially Rock and Metal. I started collecting music CDs when I was a teenager, buying CDs from an antique shops and pawn shops with the little money I had at the time. Later on, I was able to buy CDs more regularly and find some rare releases. When my collection grew over 60 CDs, I was thinking about creating a website to keep track and show off my collection. Today, I have around 100 CDs in my collection.</p>

</article>

<article class="block block--text">

<div class="project__headingWrapper">
<h2 class="title--secondary project__heading">Development</h2>
</div>

<p>At the time, I was starting out with React and it was a perfect tool for creating this project. For database, I went with Firebase, due to the simplicity and project not requiring anything more than a simple database.</p>

<p>Since this project means lot to me and is connected to my hobby, I wanted it also to look really cool and I was thinking about the content and info I wanted to show. I decided to have a simple structure without any fluff text pages since the website title is all the explanation user needs. Website consists of 2 page types, first is the homepage with full collection listing and second one is the detail page for each item in collection.</p>

</article>

<article class="block block--image">
<figure class="imageContainer">
<div class="image--default imageContainer image--1024x643">
<div class="icon icon__image image--placeholder"></div>
</div>
        <picture>
            <source data-srcset="https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803152/work/adrians-music-collection-2.webp" type="image/webp" />
            <source data-srcset="https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803152/work/adrians-music-collection-2.jpg" />
            <img
                class="image--lazyLoaded"
                src="https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546683551/devstar/placeholder.png"
                data-src="https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1546803152/work/adrians-music-collection-2.jpg"
                alt=""
            />
        </picture>

<figcaption>Album detail page</figcaption>
</figure>
</article>

<article class="block block--text">

<p>Firebase only contains basic info about the items in collection: artist, title, image, youtube video and Discogs id. Detailed info about the album is pulled from Discogs API using the id key stored in Firebase. Once user opens the album detail page, tracklist, album release date, release type, genre, and other data is being pulled from Discogs.</p>

<p>Project uses lazy loading for images which ensures optimal performance and load times by deffering loading of images which are not in user's viewport.</p>

</article>

<article class="block block--text">
<div class="project__headingWrapper">
<h2 class="title--secondary project__heading">Conclusion</h2>
</div>
<p>I'm happy with the final result. It's simple, it looks great and performs nicely. I'm really proud of the design of the website, especially how I managed to incorporate a YouTube video and make it as an integral part of the presentation. Hardest part of adding new content is picking out the video, because I want to make it look really cool when displaying next to the album cover.</p>
</article>
