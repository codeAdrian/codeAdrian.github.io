!function(){function e(e){return e.json()}function t(e){var t=document.createElement("span");t.className="blog__tag tags__item tags__item--default";var n=document.createElement("small");return n.textContent=e,t.appendChild(n),t}function n(e){var n=document.createElement("div");n.className="blog__metaWrapper";var a=document.createElement("div");a.className="blog__meta blog__meta--tags tags";for(var r=0;r<e.tag_list.length;r++)a.appendChild(t(e.tag_list[r]));return n.appendChild(a),n}function a(e){var t=document.createElement("a");return t.className="blog__link",t.href=e.url,t.target="_blank",t.rel="noopener noreferrer",t.textContent=e.title,t}function r(e){var t=a(e),n=document.createElement("h2");return n.className="blog__title",n.appendChild(t),n}function l(){return document.createElement("div")}function o(e){var t=document.createElement("div");t.className="blog__actions";var n=document.createElement("a");return n.className="button button--cta",n.href=e.url,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Read article on DEV",t.appendChild(n),t}function i(e){var t=r(e),a=document.createElement("article"),i=n(e),c=l(e),s=o(e),d=new Date(e.published_at).toLocaleDateString("hr-HR");a.className="article  article--post",a.textContent=d,a.appendChild(t),a.appendChild(i),a.appendChild(c);var u=document.createElement("p");u.textContent=e.description,a.appendChild(u),a.appendChild(s);var m=document.createElement("li");return m.className="blog__item",m.appendChild(a),m}function c(e){var t=document.createElement("li");t.className="discussion__item";var n=document.createElement("a");return n.className="discussion__link",n.target="_blank",n.rel="noopener noreferrer",n.textContent=e.title,n.href=e.url,t.appendChild(n),t}function s(e){var t=document.getElementById("js-blog__list"),n=document.getElementById("js-discussion__list");localStorage.setItem("blogPosts",JSON.stringify(e));var a=e.filter(function(e){return!e.tag_list.includes("discuss")}),r=e.filter(function(e){return e.tag_list.includes("discuss")});r.length>8&&(r.length=8),a.length=10;for(var l=0;l<a.length;l++)t.appendChild(i(a[l]));for(var o=0;o<r.length;o++)n.appendChild(c(r[o]))}function d(){s(JSON.parse(localStorage.getItem("blogPosts")))}function u(e){return e.ok||d(),e}!!window.MSInputMethodContext&&!!document.documentMode?setTimeout(function(){window.fetch("https://dev.to/api/articles?username=adrianbdesigns").then(u).then(e).then(s)["catch"](d)},1e4):fetch("https://dev.to/api/articles?username=adrianbdesigns").then(u).then(e).then(s)["catch"](d)}();