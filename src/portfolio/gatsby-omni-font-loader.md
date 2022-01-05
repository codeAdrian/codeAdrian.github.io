---
layout: portfolio
title: Gatsby omni font loader
description: Open-source font loading plugin for Gatsby, a popular React-based framework, with over 76,000 downloads in the first year and a massive community support. Gatsby team has praised the plugin and even assisted with maintaining it and bringing it to the next major version of Gatsby.
image: gatsby-font-loader-1.jpg
featured_image: gatsby-font-loader-1-768w.png
type: Personal project
tech: React, Gatsby
tags: ['featured', 'portfolio']
url: https://github.com/codeAdrian/gatsby-omni-font-loader
date: 2022-01-04
---

Fonts and typography in general are an important aspect of any website. However, loading font files can be an expensive operation as the website content is not displayed until all font files are downloaded, parsed and applied by the browser. This can cause a noticeable delay in the loading of the website if user is browsing the site on a slower Internet connection.

To combat that, many font loading techiques were developed by the web dev community. Gatsby is a popular React-based framework for building performant sites that is extensible via official and community-built plugins. As I was doing research on Gatsby for work and making notes on must-have plugins, I noticed a severe lack of performant font loading plugins.

Most popular plugin was deprecated and out-of-date, so after discovering this gap in the massive plugin market, I decided to create my own font loading plugin. It uses <a href="https://csswizardry.com/2020/05/the-fastest-google-fonts/" target="_blank" rel="noopener noreferrer">Harry Roberts' font loading snippet</a> to defer font loading. I've came up with the really simple and effective method to detect when font has finished loading using Web Font API. With these two methods combined, switching between the fallback font and the main font can be less noticeable.

"Gatsby Omni Font Loader" has been launched October 31st 2020. It received more than 1,500 downloads in the first month and it has been endorsed by the community. Roboto studio, development agency from the UK, reached out to me with their thoughts on the plugin.

<blockquote>
We saw your original reddit post for this particular Gatsby plugin and read your blog post. We're blown away with the functionality and plan to use it in nearly every one of our sites.

<div>
<p>Roboto Studio</p>
<small>Web development company from UK</small>
</div>
</blockquote>

Even Gatsby team has noticed the success and reached out to me on Twitter. Also, one of the Gatsby team members contributed a bugfix for the plugin.

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">🙌🏾 Massive kudos to you, Adrian!</p>&mdash; Gatsby (@GatsbyJS) <a href="https://twitter.com/GatsbyJS/status/1453479054401839108?ref_src=twsrc%5Etfw">October 27, 2021</a></blockquote>


I've also writen an article on font loading topic for <a href="https://css-tricks.com/how-to-load-fonts-in-a-way-that-fights-fout-and-makes-lighthouse-happy/" target="_blank" rel="noopener noreferrer">CSS-Tricks</a> where I've featured my plugin and how it works. I am continuing to work on the plugin, continuously improving and fixing bugs with the generous help and support from Gatsby team and Gatsby community.

<aside>
<h2>Notable results &amp; achievements</h2>
<ul>
<li>My very first open-source Gatsby plugin.</li>
<li>Over 76,000 installs over 2,000 projects and over 80 stars on GitHub.</li>
<li>Supported by Gatsby team and Gatsby community.</li>
</ul>
</aside>