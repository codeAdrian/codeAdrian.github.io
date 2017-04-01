function toggleContainerClassAndHideButton(a, b) {
    toggleContainerClass(a), hideButton(b)
}
function toggleContainerClass(a) {
    var b = document.getElementById(a);
    b.className += " active";

    var lazyLoad = new Blazy({
        selector: 'img',
        offset: 0
    });
}

function hideButton(a) {
    var b = a.parentNode;
    b.className += " hidden"
}
!function (a, b) {
    "function" == typeof define && define.amd ? define([], b()) : "object" == typeof module && module.exports ? module.exports = b() : !function c() {
        document && document.body ? a.zenscroll = b() : setTimeout(c, 9)
    }()
}(this, function () {
    "use strict";
    var a = function (a) {
        return "getComputedStyle" in window && "smooth" === window.getComputedStyle(a)["scroll-behavior"]
    };
    if ("undefined" == typeof window || !("document" in window))return {};
    var b = function (b, c, d) {
        c = c || 999, d || 0 === d || (d = 9);
        var e, f = function (a) {
            e = a
        }, g = function () {
            clearTimeout(e), f(0)
        }, h = function (a) {
            return Math.max(0, b.getTopOf(a) - d)
        }, i = function (d, e, h) {
            if (g(), 0 === e || e && e < 0 || a(b.body))b.toY(d), h && h(); else {
                var i = b.getY(), j = Math.max(0, d) - i, k = (new Date).getTime();
                e = e || Math.min(Math.abs(j), c), function a() {
                    f(setTimeout(function () {
                        var c = Math.min(1, ((new Date).getTime() - k) / e), d = Math.max(0, Math.floor(i + j * (c < .5 ? 2 * c * c : c * (4 - 2 * c) - 1)));
                        b.toY(d), c < 1 && b.getHeight() + d < b.body.scrollHeight ? a() : (setTimeout(g, 99), h && h())
                    }, 9))
                }()
            }
        }, j = function (a, b, c) {
            i(h(a), b, c)
        }, k = function (a, c, e) {
            var f = a.getBoundingClientRect().height, g = b.getTopOf(a) + f, k = b.getHeight(), l = b.getY(), m = l + k;
            h(a) < l || f + d > k ? j(a, c, e) : g + d > m ? i(g - k + d, c, e) : e && e()
        }, l = function (a, c, d, e) {
            i(Math.max(0, b.getTopOf(a) - b.getHeight() / 2 + (d || a.getBoundingClientRect().height / 2)), c, e)
        }, m = function (a, b) {
            return (0 === a || a) && (c = a), (0 === b || b) && (d = b), {defaultDuration: c, edgeOffset: d}
        };
        return {
            setup: m, to: j, toY: i, intoView: k, center: l, stop: g, moving: function () {
                return !!e
            }, getY: b.getY, getTopOf: b.getTopOf
        }
    }, c = document.documentElement, d = function () {
        return window.scrollY || c.scrollTop
    }, e = b({
        body: document.scrollingElement || document.body, toY: function (a) {
            window.scrollTo(0, a)
        }, getY: d, getHeight: function () {
            return window.innerHeight || c.clientHeight
        }, getTopOf: function (a) {
            return a.getBoundingClientRect().top + d() - c.offsetTop
        }
    });
    if (e.createScroller = function (a, d, e) {
            return b({
                body: a, toY: function (b) {
                    a.scrollTop = b
                }, getY: function () {
                    return a.scrollTop
                }, getHeight: function () {
                    return Math.min(a.clientHeight, window.innerHeight || c.clientHeight)
                }, getTopOf: function (a) {
                    return a.offsetTop
                }
            }, d, e)
        }, "addEventListener" in window && !window.noZensmooth && !a(document.body)) {
        var f = "scrollRestoration" in history;
        f && (history.scrollRestoration = "auto"), window.addEventListener("load", function () {
            f && (setTimeout(function () {
                history.scrollRestoration = "manual"
            }, 9), window.addEventListener("popstate", function (a) {
                a.state && "zenscrollY" in a.state && e.toY(a.state.zenscrollY)
            }, !1)), window.location.hash && setTimeout(function () {
                var a = e.setup().edgeOffset;
                if (a) {
                    var b = document.getElementById(window.location.href.split("#")[1]);
                    if (b) {
                        var c = Math.max(0, e.getTopOf(b) - a), d = e.getY() - c;
                        0 <= d && d < 9 && window.scrollTo(0, c)
                    }
                }
            }, 9)
        }, !1);
        var g = new RegExp("(^|\\s)noZensmooth(\\s|$)");
        window.addEventListener("click", function (a) {
            for (var b = a.target; b && "A" !== b.tagName;)b = b.parentNode;
            if (!(!b || 1 !== a.which || a.shiftKey || a.metaKey || a.ctrlKey || a.altKey)) {
                if (f)try {
                    history.replaceState({zenscrollY: e.getY()}, "")
                } catch (a) {
                }
                var c = b.getAttribute("href") || "";
                if (0 === c.indexOf("#") && !g.test(b.className)) {
                    var d = 0, h = document.getElementById(c.substring(1));
                    if ("#" !== c) {
                        if (!h)return;
                        d = e.getTopOf(h)
                    }
                    a.preventDefault();
                    var i = function () {
                        window.location = c
                    }, j = e.setup().edgeOffset;
                    j && (d = Math.max(0, d - j), i = function () {
                        history.pushState(null, "", c)
                    }), e.toY(d, null, i)
                }
            }
        }, !1)
    }
    return e
});
var defaultDuration = 600, edgeOffset = 30;
zenscroll.setup(defaultDuration, edgeOffset);