!function () {
    function m() {
        b.keyboardSupport && F("keydown", u)
    }

    function n() {
        if (!f && document.body) {
            f = !0;
            var a = document.body, e = document.documentElement, j = window.innerHeight, k = a.scrollHeight;
            if (g = document.compatMode.indexOf("CSS") >= 0 ? e : a, h = a, m(), top != self) d = !0; else if (k > j && (a.offsetHeight <= j || e.offsetHeight <= j)) {
                var l = !1, n = function () {
                    l || e.scrollHeight == document.height || (l = !0, setTimeout(function () {
                        e.style.height = document.height + "px", l = !1
                    }, 500))
                };
                e.style.oldHeight = e.style.height, e.style.height = "auto", setTimeout(n, 10);
                var o = {attributes: !0, childList: !0, characterData: !1};
                if (i = new P(n), i.observe(a, o), g.offsetHeight <= j) {
                    var p = document.createElement("div");
                    p.style.clear = "both", a.appendChild(p)
                }
            }
            b.fixedBackground || c || (a.style.backgroundAttachment = "scroll", e.style.backgroundAttachment = "scroll")
        }
    }

    function s(a, c, d, e) {
        if (e || (e = 1e3), I(c, d), 1 != b.accelerationMax) {
            var f = Date.now(), g = f - r;
            if (g < b.accelerationDelta) {
                var h = (1 + 50 / g) / 2;
                h > 1 && (h = Math.min(h, b.accelerationMax), c *= h, d *= h)
            }
            r = Date.now()
        }
        if (p.push({x: c, y: d, lastX: 0 > c ? .99 : -.99, lastY: 0 > d ? .99 : -.99, start: Date.now()}), !q) {
            var i = a === document.body, j = function () {
                for (var g = Date.now(), h = 0, k = 0, l = 0; l < p.length; l++) {
                    var m = p[l], n = g - m.start, o = n >= b.animationTime, r = o ? 1 : n / b.animationTime;
                    b.pulseAlgorithm && (r = S(r));
                    var s = m.x * r - m.lastX >> 0, t = m.y * r - m.lastY >> 0;
                    h += s, k += t, m.lastX += s, m.lastY += t, o && (p.splice(l, 1), l--)
                }
                i ? window.scrollBy(h, k) : (h && (a.scrollLeft += h), k && (a.scrollTop += k)), c || d || (p = []), p.length ? O(j, a, e / b.frameRate + 1) : q = !1
            };
            O(j, a, 0), q = !0
        }
    }

    function t(a) {
        f || n();
        var c = a.target, d = B(c);
        if (!d || a.defaultPrevented || a.ctrlKey) return !0;
        if (H(h, "embed") || H(c, "embed") && /\.pdf/i.test(c.src) || H(h, "object")) return !0;
        var e = -a.wheelDeltaX || a.deltaX || 0, g = -a.wheelDeltaY || a.deltaY || 0;
        return k && (a.wheelDeltaX && L(a.wheelDeltaX, 120) && (e = -120 * (a.wheelDeltaX / Math.abs(a.wheelDeltaX))), a.wheelDeltaY && L(a.wheelDeltaY, 120) && (g = -120 * (a.wheelDeltaY / Math.abs(a.wheelDeltaY)))), e || g || (g = -a.wheelDelta || 0), 1 === a.deltaMode && (e *= 40, g *= 40), !b.touchpadSupport && K(g) ? !0 : (Math.abs(e) > 1.2 && (e *= b.stepSize / 120), Math.abs(g) > 1.2 && (g *= b.stepSize / 120), s(d, e, g), a.preventDefault(), z(), void 0)
    }

    function u(a) {
        var c = a.target, d = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== l.spacebar;
        if (/input|textarea|select|embed|object/i.test(c.nodeName) || H(h, "video") || N(a) || c.isContentEditable || a.defaultPrevented || d) return !0;
        if (H(c, "button") && a.keyCode === l.spacebar) return !0;
        var e, f = 0, g = 0, i = B(h), j = i.clientHeight;
        switch (i == document.body && (j = window.innerHeight), a.keyCode) {
            case l.up:
                g = -b.arrowScroll;
                break;
            case l.down:
                g = b.arrowScroll;
                break;
            case l.spacebar:
                e = a.shiftKey ? 1 : -1, g = .9 * -e * j;
                break;
            case l.pageup:
                g = .9 * -j;
                break;
            case l.pagedown:
                g = .9 * j;
                break;
            case l.home:
                g = -i.scrollTop;
                break;
            case l.end:
                var k = i.scrollHeight - i.scrollTop - j;
                g = k > 0 ? k + 10 : 0;
                break;
            case l.left:
                f = -b.arrowScroll;
                break;
            case l.right:
                f = b.arrowScroll;
                break;
            default:
                return !0
        }
        s(i, f, g), a.preventDefault(), z()
    }

    function v(a) {
        h = a.target
    }

    function z() {
        clearTimeout(y), y = setInterval(function () {
            x = {}
        }, 1e3)
    }

    function A(a, b) {
        for (var c = a.length; c--;) x[w(a[c])] = b;
        return b
    }

    function B(a) {
        var b = [], c = document.body, e = g.scrollHeight;
        do {
            var f = x[w(a)];
            if (f) return A(b, f);
            if (b.push(a), e === a.scrollHeight) {
                var h = D(g) && D(c), i = h || E(g);
                if (d && C(g) || !d && i) return A(b, Q())
            } else if (C(a) && E(a)) return A(b, a)
        } while (a = a.parentElement)
    }

    function C(a) {
        return a.clientHeight + 10 < a.scrollHeight
    }

    function D(a) {
        var b = getComputedStyle(a, "").getPropertyValue("overflow-y");
        return "hidden" !== b
    }

    function E(a) {
        var b = getComputedStyle(a, "").getPropertyValue("overflow-y");
        return "scroll" === b || "auto" === b
    }

    function F(a, b, c) {
        window.addEventListener(a, b, c || !1)
    }

    function H(a, b) {
        return (a.nodeName || "").toLowerCase() === b.toLowerCase()
    }

    function I(a, b) {
        a = a > 0 ? 1 : -1, b = b > 0 ? 1 : -1, (e.x !== a || e.y !== b) && (e.x = a, e.y = b, p = [], r = 0)
    }

    function K(a) {
        return a ? (j.length || (j = [a, a, a]), a = Math.abs(a), j.push(a), j.shift(), clearTimeout(J), J = setTimeout(function () {
            window.localStorage && (localStorage.SS_deltaBuffer = j.join(","))
        }, 1e3), !M(120) && !M(100)) : void 0
    }

    function L(a, b) {
        return Math.floor(a / b) == a / b
    }

    function M(a) {
        return L(j[0], a) && L(j[1], a) && L(j[2], a)
    }

    function N(a) {
        var b = a.target, c = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch")) do if (c = b.classList && b.classList.contains("html5-video-controls")) break; while (b = b.parentNode);
        return c
    }

    function R(a) {
        var c, d, e;
        return a *= b.pulseScale, 1 > a ? c = a - (1 - Math.exp(-a)) : (d = Math.exp(-1), a -= 1, e = 1 - Math.exp(-a), c = d + e * (1 - d)), c * b.pulseNormalize
    }

    function S(a) {
        return a >= 1 ? 1 : 0 >= a ? 0 : (1 == b.pulseNormalize && (b.pulseNormalize /= R(1)), R(a))
    }

    var h, i, y, J, a = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 120,
            pulseAlgorithm: !0,
            pulseScale: 8,
            pulseNormalize: 1,
            accelerationDelta: 20,
            accelerationMax: 1,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !0,
            fixedBackground: !0,
            excluded: ""
        }, b = a, c = !1, d = !1, e = {x: 0, y: 0}, f = !1, g = document.documentElement, j = [],
        k = /^Mac/.test(navigator.platform),
        l = {left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36}, b = a,
        p = [], q = !1, r = Date.now(), w = function () {
            var a = 0;
            return function (b) {
                return b.uniqueID || (b.uniqueID = a++)
            }
        }(), x = {};
    window.localStorage && localStorage.SS_deltaBuffer && (j = localStorage.SS_deltaBuffer.split(","));
    var T, O = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a, b, c) {
            window.setTimeout(a, c || 1e3 / 60)
        }
    }(), P = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, Q = function () {
        var a;
        return function () {
            if (!a) {
                var b = document.createElement("div");
                b.style.cssText = "height:10000px;width:1px;", document.body.appendChild(b);
                var c = document.body.scrollTop;
                document.documentElement.scrollTop, window.scrollBy(0, 1), a = document.body.scrollTop != c ? document.body : document.documentElement, window.scrollBy(0, -1), document.body.removeChild(b)
            }
            return a
        }
    }();
    "onwheel" in document.createElement("div") ? T = "wheel" : "onmousewheel" in document.createElement("div") && (T = "mousewheel"), T && (F(T, t), F("mousedown", v), F("load", n))
}();
