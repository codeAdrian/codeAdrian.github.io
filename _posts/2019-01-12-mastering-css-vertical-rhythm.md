---
author: Adrian Bece
authorUrl: https://twitter.com/AdrianBDesigns
title: "Mastering CSS: Vertical Rhythm"
categories:
    - blog
    - development
tags: development CSS
image: "https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547398311/articles/orchestra.svg"
image_fallback: https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:best/v1547398311/articles/orchestra.jpg
excerpt: Vertical rhythm is a very simple concept in web design and web development. It makes the page feel consistent and visually plesant. Maintaining the rhythm accross the site, especially on larger collaborative projects, can be quite a challenge. With SASS, LESS and now the CSS variables, configuring and maintaining the vertical rhythm has never been easier. In this article, we are going to cover the very basics of vertical rhythm and how to implement it using CSS variables.
---

<article class="block block--text">

<p>Vertical rhythm is an important concept in web design and development. It makes the page and typography feel consistent and visually pleasant. Maintaining the rhythm accross the site, especially on larger collaborative projects, can be quite a challenge. With SASS, LESS and now the CSS variables, configuring and maintaining the vertical rhythm has never been easier. In this article, we are going to cover the very basics of vertical rhythm and how to implement it using CSS variables and CSS <code class="code--inline">calc</code> function.</p>

<h2 class="heading">Vertical rhythm basics</h2>

<p>Vertical rhythm is usually used on following CSS properties:</p>
<ul>
<li>Typography -  <code class="code--inline">line-height</code></li>
<li>Spacing - <code class="code--inline">padding</code> (top and bottom), <code class="code--inline">margin</code> (top and bottom)</li>
<li>Offsets - <code class="code--inline">top</code>, <code class="code--inline">bottom</code></li>
<li>Size - <code class="code--inline">height</code>, <code class="code--inline">min-height</code>,  <code class="code--inline">max-height</code> </li>
</ul>
<p>Notice how we don't use vertical rhythm for <code class="code--inline">font-size</code>. Modular scale is usually used for font sizes in typography. Vertical rhythm is only used for spacing and vertical size.</p>
<p class="padding--clear">
First off, we need to determine the <strong>rhythm unit</strong>. This will act as a base for multiplication for calculating vertical ryhthm. Since vertical rhythm is tied with repetition, and the most repetitive spacing on any website is a <code class="code--inline">line-height</code> of <code class="code--inline">body</code> element, the base line-height of a page. We'll use this base line-height as rhythm-unit.
</p>

</article>

```css
html {
    /* Set parent font size */
    font-size: 18px;
}

body {
    /* Set base line-height */
    line-height: 1.778rem;
}
```

<article class="block block--text">
<p class="padding--clear">Note that we are using <code class="code--inline">px</code> value for easier calculation, it's recommended to use relative values wherever you can. From this configuration, we can calculate rhythm unit value: <code class="code--inline">Rhythm unit = 18px * 1.778rem = 32px</code>. Alternatively, we can check the <code class="code--inline">line-height</code> of the <code class="code--inline">body</code> element in element inspector.</p>
</article>

<figure class="block block--text">
<img alt="" 
src="https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1546683551/devstar/placeholder.png" data-src="https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:good/v1547380832/articles/content/vertical-rhythm.jpg">
<figcaption>Vertical rhythm example with 32px rhythm unit from this article (very meta!)</figcaption>
</figure>

<article class="block block--text">
<p class="padding--clear">On the image, we can see the baseline grid of 32px (1 rhythm unit) and how text fits nicely into it. Notice how the heading's line-height is exactly 2 times the base rhythm unit. That means that heading's line height has rhythm unit multiplier of 2 (with bottom margin of 1 rhythm unit).</p>
</article>

<article class="block block--text">
<h2 class="heading">Rhythm unit multipliers</h2>
<p class="padding--clear">Of course, we can't have only one spacing value. This is where rhythm unit multipliers come in.</p>
</article>

```css
html {
    /* Set parent font size */
    font-size: 18px;
}

body {
    /* rhythmUnit = 32px */
    line-height: 1.778rem;
}

.spacing__vertical--1 {
    /* 1x rhythmUnit = 32px */
    padding-bottom: 1.778rem;
}

.spacing__vertical--2 {
    /* 2x rhythmUnit = 64px */
    padding-bottom: 3.556rem;
}

.spacing__vertical--3 {
    /* 3x rhythmUnit = 96px */
    padding-bottom: 5.334rem;
}
```

<article class="block block--text">
<p class="padding--clear" >We have our basic classes for spacing which are calculated by multiplying the rhythm unit by 2, 3, 4, etc. But these classes are not flexible enough and they won't cover all of the use-cases for vertical rhythm. That's why we will create CSS variables (also can be done in SASS and LESS) to store and dynamically calculate the vertical rhythm values.</p>
</article>

```css
:root {
    /* Base values */
    --typography__fontSize: 18px;
    --spacing__rhythmUnit: 1.778rem; /* 1.778rem * 18px = 32px */

    /* Calculations */
    --spacing__vertical--1: var(--spacing__rhythmUnit);
    --spacing__vertical--2: calc(2 * var(--spacing__rhythmUnit));
    --spacing__vertical--3: calc(3 * var(--spacing__rhythmUnit));
}

html {
    font-size: var(--typography__fontSize);
}

body {
    line-height: var(--spacing__vertical--1);
}

.spacing--default {
    padding-bottom: var(--spacing__vertical--1);
}

.button--default {
    height: var(--spacing__vertical--2);
}

.heading--primary {
    line-height: var(--spacing__vertical--3);
}
```

<article class="block block--text">
<p class="padding--clear">We have improved upon the previous example and created reusable variables that we can use for all mentioned use-cases (typography, spacing, offset, height, etc.). By using these variables, we can ensure the consistent vertical rhythm of all elements on the website. But we need to keep in mind when we add some CSS rules (like borders) that push the content down and don't have to adhere to rules of vertical rhythm.</p>
</article>

<article class="block block--text">
<h2 class="heading">Compensating for borders</h2>
<p class="padding--clear">When we add vertical (top or bottom) borders to an element, they add to the overall height of the element and push the content down. This also affects our vertical rhythm (if border width is not in vertical rhythm value) and we have to compensate for adding vertical borders by either reducing the rhythm value of vertical <code class="code--inline">padding</code>, <code class="code--inline">margin</code> or <code class="code--inline">line-height</code>(if element has no padding or margin).</p>
</article>

```css
:root {
    /* Base values */
    --typography__fontSize: 18px;
    --spacing__rhythmUnit: 1.778rem; /* 1.778rem * 18px = 32px */

    --border__width--default: 0.111rem; /* 2px */

    /* Calculations */
    --spacing__vertical--1: var(--spacing__rhythmUnit);
    --spacing__vertical--2: calc(2 * var(--spacing__rhythmUnit));
    --spacing__vertical--3: calc(3 * var(--spacing__rhythmUnit));
}

html {
    font-size: var(--typography__fontSize);
}

body {
    line-height: var(--spacing__vertical--1);
}

.heading--primary {
    border-bottom: var(--border__width--default) solid #aaa; /* 2px */
    padding-bottom: calc(
        var(--spacing__vertical--1) - var(--border__width--default)
    ); /* 32px - 2px */
    line-height: var(--spacing__vertical--3); /* 96px */
}
```

<article class="block block--text">
<p>Taking a look at the <code class="code--inline">.heading--primary</code> class, we can see that we have set a bottom border, padding and line-height. Since we have padding, we are going to compensate for added bottom border by reducing the width of the border from bottom padding.</p>

<p>If we assume that the heading takes one line of text, have the following calculation of the element's height: <code class="code--inline">2px + (32px - 2px) + 96px = 128px</code> which is equal to 4 times the vertical unit.</p>
</article>
