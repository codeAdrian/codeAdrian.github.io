!function(){function e(e){return e.json()}function t(e){var t=document.createElement("span");t.className="blog__tag tags__item tags__item--default";var n=document.createElement("small");return n.textContent=e,t.appendChild(n),t}function n(e){var n=document.createElement("div");n.className="blog__metaWrapper";var a=document.createElement("div");a.className="blog__meta blog__meta--tags tags";for(var r=0;r<e.tag_list.length;r++)a.appendChild(t(e.tag_list[r]));return n.appendChild(a),n}function a(e){var t=document.createElement("a");return t.className="blog__link",t.href=e.url,t.target="_blank",t.rel="noopener noreferrer",t.textContent=e.title,t}function r(e){var t=a(e),n=document.createElement("h2");return n.className="blog__title",n.appendChild(t),n}function l(){return document.createElement("div")}function i(e){var t=document.createElement("div");t.className="blog__actions";var n=document.createElement("a");return n.className="button button--cta",n.href=e.url,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Read article on DEV",t.appendChild(n),t}function c(e){var t=r(e),a=document.createElement("article"),c=n(e),o=l(e),d=i(e),s=new Date(e.published_at).toLocaleDateString("hr-HR");a.className="article  article--post",a.textContent=s,a.appendChild(t),a.appendChild(c),a.appendChild(o);var m=document.createElement("p");m.textContent=e.description,a.appendChild(m),a.appendChild(d);var u=document.createElement("li");return u.className="blog__item",u.appendChild(a),u}function o(e){var t=document.createElement("li");t.className="discussion__item";var n=document.createElement("a");return n.className="discussion__link",n.target="_blank",n.rel="noopener noreferrer",n.textContent=e.title,n.href=e.url,t.appendChild(n),t}function d(e){var t=document.getElementById("js-blog__list"),n=document.getElementById("js-discussion__list");localStorage.setItem("blogPosts",JSON.stringify(e));var a=e.filter(function(e){return!e.tag_list.indexOf("discuss")>=0}),r=e.filter(function(e){return e.tag_list.indexOf("discuss")>=0});r.length>8&&(r.length=8),a.length=10;for(var l=0;l<a.length;l++)t.appendChild(c(a[l]));for(var i=0;i<r.length;i++)n.appendChild(o(r[i]))}function s(){d(JSON.parse(localStorage.getItem("blogPosts")))}function m(e){return e.ok||s(),e}if(!!window.MSInputMethodContext&&!!document.documentMode){var u=document.createElement("script");u.type="text/javascript",u.src="https://cdn.jsdelivr.net/npm/promise-polyfill@8.1.3/dist/polyfill.min.js";var p=document.createElement("script");p.type="text/javascript",p.src="https://cdn.jsdelivr.net/npm/whatwg-fetch@3.4.0/dist/fetch.umd.min.js",document.head.appendChild(u),document.head.appendChild(p),setTimeout(function(){window.fetch("https://dev.to/api/articles?username=adrianbdesigns").then(m).then(e).then(d)["catch"](s)},4e3)}else fetch("https://dev.to/api/articles?username=adrianbdesigns").then(m).then(e).then(d)["catch"](s)}();