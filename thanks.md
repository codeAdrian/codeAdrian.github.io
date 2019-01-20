---
title: Thanks!
indexing: false
sitemap: false
layout: default
---

<main class="contact">
    <section class="contact__wrapper">
            <h1 class="hero__title hero__title--default contact__title">
            Contact
        </h1>
    <p>
        Thank you for contacting me. I will get back to you as soon as possible.
    </p>
    <p>
       Feel free to read some articles from the blog to pass the time.
    </p>
    <p class="padding--clear"><strong>Latest Articles</strong></p>
        <ul class="contact__list">
        {% for post in site.posts limit:3 %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
        {% endfor %}
    </ul>
    <div class="contact__actions">
     <a class="button button--cta" href="/">Return to homepage</a>
    </div>
    </section>
</main>
