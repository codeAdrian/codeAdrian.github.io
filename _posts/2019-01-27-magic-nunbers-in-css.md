---
author: Adrian Bece
authorUrl: https://twitter.com/AdrianBDesigns
title: "Magic Numbers in CSS"
categories:
    - blog
    - development
tags: development css
image: "https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:low/v1547309683/articles/number.svg"
image_fallback: https://res.cloudinary.com/dazdt97d3/image/upload/q_auto:best/v1547309683/articles/number.jpg
excerpt: Magic numbers can be seen as very benign on smaller projects, examples and individual cases, but they can really make our jobs difficult when adding new features, fixing issues and maintaining the website. Soon you'll find yourself adding magic numbers to fix issues caused by other magic numbers, but also potentially causing new issues down the line.
---

<article class="block block--text">

<p>We've all seen magic numbers in code, didn't we? The magical <code class="code--inline">padding-top: 2px;</code> and <code class="code--inline">top: 136px;</code> - like randomly-spread pieces of bubblegum holding the house of cards together. Code should be easily read, self-explanitory and have a logical structure.</p>

<p>Magic numbers can be seen as very benign on smaller projects, examples and individual cases, but they can really make our jobs difficult when adding new features, fixing issues and maintaining the website. Soon you'll find yourself adding magic numbers to fix issues caused by other magic numbers, but also potentially causing new issues down the line.</p>

<h2 class="heading">Solution starts with the design</h2>

<p>
When a project has a design phase which results with a design file with style guide, component, modules, pages, etc. we usually have all the information about color, typography, horizontal grids, and media query variables, but those are just a few of many variables that can repeat throughout the website. What about horizontal and vertical spacing (<a target="_blank" rel="noreferrer nofollow" href="/blog/development/mastering-css-vertical-rhythm.html">vertical rhythm</a>), or borders, or shadows, container widths, image aspect ratios, z-indices, etc.
</p>

<p class="padding--clear">The more variables are defined in the design phase and the more design is constrained within those variables, the less we rely on magic numbers since we can see the connection between all design elements. For example, Defining a rhythm unit can add a better context of vertical spacing. Now if we see that header is at <code class="code--inline">96px</code> height, and if we know that our base line height is <code class="code--inline">32px</code>, we can see that all elements in header container follow the <a target="_blank" rel="noreferrer nofollow" href="/blog/development/mastering-css-vertical-rhythm.html">rules of vertical rhythm</a>. This allows us to establish a better connection between a style guide variable (rhythm unit) and a complex module (header).</p>

</article>

<article class="block block--text">
<h2 class="heading">Discipline makes strong developers</h2>
<p>
For better or worse, nothing stops us from using Magic numbers in CSS. The code will work the same if we write a value or a variable that contains the value. No linter or preprocessor will throw an error. It's up to a developer to learn the best practices, go beyond the call of duty and make quality long-term decisions. When starting a new project, outlining and defining CSS variables is very important. Quality, readability and maintainability of your code will depend on how well you define those variables: giving them a meaningful name, grouping the variables properly, defining a clear dependency between the variables, etc.
</p>
<p class="padding--clear">Let's demonstrate this with the following code. Please note that, in this example, I'm using PostCSS and modern CSS syntax. But this philosophy also applies to CSS Preprocessors like SASS and LESS.</p>
</article>

```css
:root {
    /* px definitions for easier calculations */
    /* These variables are only used for calculation */
    --typography__fontSize--px: 16px;
    --typography__lineHeight--px: 27px;

    --browser__fontSize--default: 16px;

    /* Basic typography setup, establishing rhythm unit */
    /* These variables should be assigned to the CSS attributes */
    --typography__fontSize: calc(
        (var(--typography__fontSize--px) / var(--browser__fontSize--default)) * 1rem
    );
    --typography__lineHeight: calc(
        (var(--typography__lineHeight--px) / var(--typography__fontSize--px)) * 1rem
    );

    /* Calculating vertical rhythm variables */
    /* Can be located in separate file if using Preprocessors or PostCSS import */
    --spacing__vertical--1: var(--typography__lineHeight);
    --spacing__vertical--2: calc(2 * var(--spacing__vertical--1));
    --spacing__vertical--3: calc(3 * var(--spacing__vertical--1));

    /* Defining custom variables for modules */
    /* Can be located in separate file if using Preprocessors or PostCSS import */
    --header__height: var(--spacing__vertical--3);
}
```

<article class="block block--text">

<p>Notice how we used only two numbers and how the rest of the variables are linked to those two numbers. I've used my way of naming the variables, with the BEM-like structure <code class="code--inline">group__attributeName--variation</code>. The connection between the variables is clear: base rhythm unit is equal to the base line height which <code class="code--inline">rem</code> value is calculated using <code class="code--inline">px</code> values of font size and line height. Similarly, header has a fixed height which equals rhythm unit multiplier of 3, whih is calculated along with the rest rhythm unit multipliers (vertical spacings).</p>

<p>With variables being organized this way, we can easily add more complexity to our code and avoid repeating values or variables, and avoid using magic numbers alltogether. But...</p>

<h2 class="heading">Sometimes, using Magic Numbers is unavoidable</h2>
<p>Due to the hacky nature of CSS and varying browser support, sometimes the only solution is to use Magic Numbers. Even in that case, Magic number should be saved and documented in a variable in the same file it's used. Magic number that apply to a single element should not be defined along the global variables. That way, any developer will understand the scope and role of the variable and may want to remove it in the future, if needed.</p>
</article>

```css
/* element.css */

:root {
    /* Browser-specific bug, expected to be fixed in the future */
    --element__spacing--magic: -1px;
}

.element {
    margin-top: var(--element__spacing--magic);
}
```
