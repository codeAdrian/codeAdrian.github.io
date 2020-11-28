---
title: Gatsby Omni font loader
layout: portfolio-item
platform: Gatsby, React
contribution: Open-source project
image: https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1606582324/work/gatsby-font-loader-1.webp
image_fallback: https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1606582324/work/gatsby-font-loader-1.jpg
link: https://stylestage.dev/styles/crawling-chaos/
description: Crawling Chaos is a Lovecraftian theme that I've contributed to Style Stage - a website that showcases the best and most creative frontend themes designed by the developer community.
---

<article class="block block--text">
<div class="project__headingWrapper">
<h2 class="title--secondary project__heading">About The Project</h2>
</div>

<p>Gatsby is a popular static site generator, based on React. It is a very flexible framework due to the extension options using plugins. While researching Gatsby and taking notes of must-have plugins, I've noticed that all font loading plugins are either deprecated or not maintained anymore.</p>

<p>After noticing the gap in the market, I've decided to develop the plugin myself using modern async font loading and FOUT handling methods.</p>
</article>

<article class="block block--text">
<div class="project__headingWrapper">
<h2 class="title--secondary project__heading">Development</h2>
</div>

<p>I've used <a href="https://csswizardry.com/2020/05/the-fastest-google-fonts/" target="_blank" rel="noopener noreferrer">Harry Roberts' fast font loading</a> method to load fonts asynchronously, and I've came up with the really simple and effective method to detect when font has finished loading using Web Font API. With these two combined, fonts can be loaded after the website has finished loading and the change between the fallback font and main font will be barely noticeable.</p>

<p>I've also wrote an<a href="https://css-tricks.com/how-to-load-fonts-in-a-way-that-fights-fout-and-makes-lighthouse-happy/" target="_blank" rel="noopener noreferrer">article for CSS-Tricks</a> where I've explained in detail what is going on under the hood.</p>
</article>

<article class="block block--text">
<div class="project__headingWrapper">
<h2 class="title--secondary project__heading">Open-source success</h2>
</div>

<p>"Gatsby Omni Font Loader" has been launched October 31st 2020 and it has been a success. It received more than 1,500 downloads in the first month and it has been endorsed by the community. Even Gatsby team has noticed the success and reached out to me on Twitter.</p>


</article>

<blockquote class="blockquote--default blockquote block">
<div class="blockquote__wrapper">
<div class="blockquote__text blockquote__text--default">That's a lot of downloads - Congrats, Adrian! </div>
<div class="blockquote__author blockquote__author--default">- <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/GatsbyJS/status/1332323668538626051">Gatsby team</a> (on Twitter)</div>
</div>
</blockquote>

<article class="block block--text">
<div class="project__headingWrapper">
</div>

<p>I am continuing to actively work on the plugin, continuously improving and optimizing it. Community contribution and bug reports are very much welcome!</p>


</article>