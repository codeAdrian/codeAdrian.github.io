---
author: Adrian Bece
authorUrl: https://twitter.com/AdrianBDesigns
title: "Hiding content for accesibility"
categories:
    - blog
    - development
tags: development accessibility
image: "https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547297762/articles/glasses.svg"
image_fallback: https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:best/v1547297762/articles/glasses.jpg
excerpt: In web development, it's safe to assume that it's unavoidable to hide some elements or part of the content. Using only a single way of hiding content can harm accessibility, because users using assistive technologies won't get the full context of the page the way the regular screen users do. In this article we are going to cover several ways of hiding elements, depending on accessibility.
---

<article class="block block--text">

<p>In web development, it's safe to assume that it's unavoidable to hide some elements or part of the content. Using only a single way of hiding content can harm accessibility, because users using assistive technologies won't get the full context of the page the way the regular screen users do. In this article we are going to cover several ways of hiding elements, depending on accessibility.</p>

<h2 class="heading">Hiding content from all devices</h2>

<p>Using CSS rules like<code class="code--inline">display: none;</code> or <code class="code--inline">visibility: hidden;</code>, or HTML <code class="code--inline">hidden</code> attribute is the first thing that comes to mind when hiding elements or part of the content. Using these two CSS attributes will make both display devices and assistive technologies (like screen readers) to completely ignore the element and not present it to users.</p>

<p class="padding--clear">
Of course, there are cases where we want to hide content from all devices. For example, we can use these CSS rules on elements in an accordion, tabs or other toggleable elements.
</p>

</article>

<article class="block block--text">
<h2 class="heading">Hiding content from screen devices</h2>
<p>
In some cases, we want to hide some elements from displays, but we want to let assistive technologies present the visually hidden content to users. An example of that case, off the top of my head, are label-less inputs. Labels are usually hidden with <code class="code--inline">display: none;</code> but we would prefer if labels were accessible to the assistive technologies in order to provide more context to users.
</p>
<p class="padding--clear">This solution is a bit hacky, but very effective solution if we want to hide content from screen devices only. We can use the following CSS rule:</p>
</article>

```css
.hidden--visually {
    border: 0;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
```

<article class="block block--text">
<h2 class="heading">Hiding content from assistive devices</h2>
<p>There are cases where we would like to hide the content from screen readers and other assistive technologies. For example, if we have an image carousel, with "previous" button on the beginning, carousel images in the middle and "next" button on the end, we don't want the screen reader to read it out in that order. We can provide a separate, more accessible controls which are visually hidden, but hide the "previous" and "next" buttons from assistive devices.</p>
<p>
In cases where we want to hide content from the assistive devices, we can use the <code class="code--inline">aria-hidden="true"</code> HTML attribute.</p>

<h2 class="heading">Override quirk</h2>
<p>It's important to note that CSS rules like <code class="code--inline">display: none;</code> will override the <code class="code--inline">aria-hidden="false"</code> and the content will be ignored by assistive technologies. </p>
</article>
