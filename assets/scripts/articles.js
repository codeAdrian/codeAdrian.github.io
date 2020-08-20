(function () {
    function handleJSON(r) {
        return r.json();
    }

    function generateTag(t) {
        var tag = document.createElement("span");
        tag.className = "blog__tag tags__item tags__item--default";

        var tagText = document.createElement("small");
        tagText.textContent = t;

        tag.appendChild(tagText);

        return tag;
    }

    function generateMeta(a) {
        var meta = document.createElement("div");
        meta.className = "blog__metaWrapper";

        var tags = document.createElement("div");
        tags.className = "blog__meta blog__meta--tags tags";

        for (var i = 0; i < a["tag_list"].length; i++) {
            tags.appendChild(generateTag(a["tag_list"][i]));
        }

        meta.appendChild(tags);

        return meta;
    }

    function generateLink(a) {
        var link = document.createElement("a");
        link.className = "blog__link";
        link.href = a.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = a.title;
        return link;
    }

    function generateTitle(a) {
        var link = generateLink(a);
        var title = document.createElement("h2");
        title.className = "blog__title";
        title.appendChild(link);
        return title;
    }

    function generateImage(a) {
        var imageContainer = document.createElement("div");
        return imageContainer;

        /*
        imageContainer.className = "blog__imageWrapper";
        var image = document.createElement("img");
        image.src = a["cover_image"];
        image.className = "blog__image";

        imageContainer.appendChild(image);

        return image;
        */
    }

    function generateActions(a) {
        var actions = document.createElement("div");
        actions.className = "blog__actions";

        var link = document.createElement("a");
        link.className = "button button--cta";
        link.href = a.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Read article on DEV";

        actions.appendChild(link);
        return actions;
    }

    function generateArticle(a) {
        var title = generateTitle(a);
        var article = document.createElement("article");
        var meta = generateMeta(a);
        var image = generateImage(a);
        var actions = generateActions(a);
        var date = new Date(a["published_at"]).toLocaleDateString("hr-HR");
        article.className = "article  article--post";
        article.textContent = date;
        article.appendChild(title);
        article.appendChild(meta);
        article.appendChild(image);

        var excerpt = document.createElement("p");
        excerpt.textContent = a.description;

        article.appendChild(excerpt);
        article.appendChild(actions);

        var listItem = document.createElement("li");
        listItem.className = "blog__item";
        listItem.appendChild(article);

        return listItem;
    }

    function generateDiscussion(r) {
        var listItem = document.createElement("li");
        listItem.className = "discussion__item";
        var link = document.createElement("a");
        link.className = "discussion__link";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = r.title;
        link.href = r.url;

        listItem.appendChild(link);

        return listItem;
    }

    function handleResponse(r) {
        var blogList = document.getElementById("js-blog__list");
        var blogDiscussions = document.getElementById("js-discussion__list");
        localStorage.setItem("blogPosts", JSON.stringify(r));

        var filtered = r.filter(function (r) {
            return !r.tag_list.includes("discuss");
        });

        var discussions = r.filter(function (r) {
            return r.tag_list.includes("discuss");
        });

        if (discussions.length > 8) discussions.length = 8;

        filtered.length = 10;

        for (var i = 0; i < filtered.length; i++) {
            blogList.appendChild(generateArticle(filtered[i]));
        }

        for (var j = 0; j < discussions.length; j++) {
            blogDiscussions.appendChild(generateDiscussion(discussions[j]));
        }
    }

    function handleFallback() {
        var r = JSON.parse(localStorage.getItem("blogPosts"));
        handleResponse(r);
    }

    function handleErrors(r) {
        if (!r.ok) {
            handleFallback();
        }
        return r;
    }

    var isIE = !!window.MSInputMethodContext && !!document.documentMode;

    if (isIE) {
        var promiseScript = document.createElement("script");
        promiseScript.type = "text/javascript";
        promiseScript.src =
            "https://cdn.jsdelivr.net/npm/promise-polyfill@8.1.3/dist/polyfill.min.js";

        var fetchScript = document.createElement("script");
        fetchScript.type = "text/javascript";
        fetchScript.src =
            "https://cdn.jsdelivr.net/npm/whatwg-fetch@3.4.0/dist/fetch.umd.min.js";

        document.head.appendChild(promiseScript);
        document.head.appendChild(fetchScript);

        setTimeout(function () {
            console.log(window.fetch);
            window
                .fetch("https://dev.to/api/articles?username=adrianbdesigns")
                .then(handleErrors)
                .then(handleJSON)
                .then(handleResponse)
                .catch(handleFallback);
        }, 4000);
    } else {
        fetch("https://dev.to/api/articles?username=adrianbdesigns")
            .then(handleErrors)
            .then(handleJSON)
            .then(handleResponse)
            .catch(handleFallback);
    }
})();
