/*!
 * Glide.js v3.2.4
 * (c) 2013-2018 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */
!(function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define(e)
        : (t.Glide = e());
})(this, function() {
    'use strict';
    var i = {
        type: 'slider',
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perTouch: !1,
        touchRatio: 0.5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',
        throttle: 10,
        direction: 'ltr',
        peek: 0,
        breakpoints: {},
        classes: {
            direction: { ltr: 'glide--ltr', rtl: 'glide--rtl' },
            slider: 'glide--slider',
            carousel: 'glide--carousel',
            swipeable: 'glide--swipeable',
            dragging: 'glide--dragging',
            cloneSlide: 'glide__slide--clone',
            activeNav: 'glide__bullet--active',
            activeSlide: 'glide__slide--active',
            disabledArrow: 'glide__arrow--disabled'
        }
    };
    var n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(t) {
                      return typeof t;
                  }
                : function(t) {
                      return t &&
                          'function' == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  },
        r = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
        },
        o = (function() {
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                }
            }
            return function(t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t;
            };
        })(),
        a =
            Object.assign ||
            function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                            (t[i] = n[i]);
                }
                return t;
            };
    function b(t) {
        return parseInt(t);
    }
    function s(t) {
        return 'string' == typeof t;
    }
    function u(t) {
        var e = void 0 === t ? 'undefined' : n(t);
        return 'function' === e || ('object' === e && !!t);
    }
    function c(t) {
        return 'function' == typeof t;
    }
    function l(t) {
        return void 0 === t;
    }
    function f(t) {
        return t.constructor === Array;
    }
    function d(t, e, n) {
        Object.defineProperty(t, e, n);
    }
    function h(t, e) {
        var n = a({}, t, e);
        return (
            e.hasOwnProperty('classes') &&
                ((n.classes = a({}, t.classes, e.classes)),
                e.classes.hasOwnProperty('direction') &&
                    (n.classes.direction = a(
                        {},
                        t.classes.direction,
                        e.classes.direction
                    ))),
            e.hasOwnProperty('breakpoints') &&
                (n.breakpoints = a({}, t.breakpoints, e.breakpoints)),
            n
        );
    }
    var v = (function() {
            function e() {
                var t =
                    0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                r(this, e), (this.events = t), (this.hop = t.hasOwnProperty);
            }
            return (
                o(e, [
                    {
                        key: 'on',
                        value: function(t, e) {
                            if (f(t))
                                for (var n = 0; n < t.length; n++)
                                    this.on(t[n], e);
                            this.hop.call(this.events, t) ||
                                (this.events[t] = []);
                            var i = this.events[t].push(e) - 1;
                            return {
                                remove: function() {
                                    delete this.events[t][i];
                                }
                            };
                        }
                    },
                    {
                        key: 'emit',
                        value: function(t, e) {
                            if (f(t))
                                for (var n = 0; n < t.length; n++)
                                    this.emit(t[n], e);
                            this.hop.call(this.events, t) &&
                                this.events[t].forEach(function(t) {
                                    t(e || {});
                                });
                        }
                    }
                ]),
                e
            );
        })(),
        p = (function() {
            function n(t) {
                var e =
                    1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                r(this, n),
                    (this._c = {}),
                    (this._t = []),
                    (this._e = new v()),
                    (this.disabled = !1),
                    (this.selector = t),
                    (this.settings = h(i, e)),
                    (this.index = this.settings.startAt);
            }
            return (
                o(n, [
                    {
                        key: 'mount',
                        value: function() {
                            var t =
                                0 < arguments.length && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {};
                            return (
                                this._e.emit('mount.before'),
                                u(t) &&
                                    (this._c = (function(t, e, n) {
                                        var i = {};
                                        for (var r in e)
                                            c(e[r]) && (i[r] = e[r](t, i, n));
                                        for (var o in i)
                                            c(i[o].mount) && i[o].mount();
                                        return i;
                                    })(this, t, this._e)),
                                this._e.emit('mount.after'),
                                this
                            );
                        }
                    },
                    {
                        key: 'mutate',
                        value: function() {
                            var t =
                                0 < arguments.length && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [];
                            return f(t) && (this._t = t), this;
                        }
                    },
                    {
                        key: 'update',
                        value: function() {
                            var t =
                                0 < arguments.length && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {};
                            return (
                                (this.settings = h(this.settings, t)),
                                t.hasOwnProperty('startAt') &&
                                    (this.index = t.startAt),
                                this._e.emit('update'),
                                this
                            );
                        }
                    },
                    {
                        key: 'go',
                        value: function(t) {
                            return this._c.Run.make(t), this;
                        }
                    },
                    {
                        key: 'move',
                        value: function(t) {
                            return (
                                this._c.Transition.disable(),
                                this._c.Move.make(t),
                                this
                            );
                        }
                    },
                    {
                        key: 'destroy',
                        value: function() {
                            return this._e.emit('destroy'), this;
                        }
                    },
                    {
                        key: 'play',
                        value: function() {
                            var t =
                                0 < arguments.length &&
                                void 0 !== arguments[0] &&
                                arguments[0];
                            return (
                                t && (this.settings.autoplay = t),
                                this._e.emit('play'),
                                this
                            );
                        }
                    },
                    {
                        key: 'pause',
                        value: function() {
                            return this._e.emit('pause'), this;
                        }
                    },
                    {
                        key: 'disable',
                        value: function() {
                            return (this.disabled = !0), this;
                        }
                    },
                    {
                        key: 'enable',
                        value: function() {
                            return (this.disabled = !1), this;
                        }
                    },
                    {
                        key: 'on',
                        value: function(t, e) {
                            return this._e.on(t, e), this;
                        }
                    },
                    {
                        key: 'isType',
                        value: function(t) {
                            return this.settings.type === t;
                        }
                    },
                    {
                        key: 'settings',
                        get: function() {
                            return this._o;
                        },
                        set: function(t) {
                            u(t) && (this._o = t);
                        }
                    },
                    {
                        key: 'index',
                        get: function() {
                            return this._i;
                        },
                        set: function(t) {
                            this._i = b(t);
                        }
                    },
                    {
                        key: 'type',
                        get: function() {
                            return this.settings.type;
                        }
                    },
                    {
                        key: 'disabled',
                        get: function() {
                            return this._d;
                        },
                        set: function(t) {
                            this._d = !!t;
                        }
                    }
                ]),
                n
            );
        })();
    function m() {
        return new Date().getTime();
    }
    function w(n, i, r) {
        var o = void 0,
            s = void 0,
            u = void 0,
            a = void 0,
            c = 0;
        r || (r = {});
        var l = function() {
                (c = !1 === r.leading ? 0 : m()),
                    (o = null),
                    (a = n.apply(s, u)),
                    o || (s = u = null);
            },
            t = function() {
                var t = m();
                c || !1 !== r.leading || (c = t);
                var e = i - (t - c);
                return (
                    (s = this),
                    (u = arguments),
                    e <= 0 || i < e
                        ? (o && (clearTimeout(o), (o = null)),
                          (c = t),
                          (a = n.apply(s, u)),
                          o || (s = u = null))
                        : o || !1 === r.trailing || (o = setTimeout(l, e)),
                    a
                );
            };
        return (
            (t.cancel = function() {
                clearTimeout(o), (c = 0), (o = s = u = null);
            }),
            t
        );
    }
    var g = {
        ltr: ['marginLeft', 'marginRight'],
        rtl: ['marginRight', 'marginLeft']
    };
    function y(t) {
        if (t && t.parentNode) {
            for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
        return [];
    }
    function _(t) {
        return !!(t && t instanceof window.HTMLElement);
    }
    var k = '[data-glide-el="track"]';
    var S = (function() {
        function e() {
            var t =
                0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
            r(this, e), (this.listeners = t);
        }
        return (
            o(e, [
                {
                    key: 'on',
                    value: function(t, e, n) {
                        var i =
                            3 < arguments.length &&
                            void 0 !== arguments[3] &&
                            arguments[3];
                        s(t) && (t = [t]);
                        for (var r = 0; r < t.length; r++)
                            (this.listeners[t[r]] = n),
                                e.addEventListener(
                                    t[r],
                                    this.listeners[t[r]],
                                    i
                                );
                    }
                },
                {
                    key: 'off',
                    value: function(t, e) {
                        s(t) && (t = [t]);
                        for (var n = 0; n < t.length; n++)
                            e.removeEventListener(
                                t[n],
                                this.listeners[t[n]],
                                !1
                            );
                    }
                },
                {
                    key: 'destroy',
                    value: function() {
                        delete this.listeners;
                    }
                }
            ]),
            e
        );
    })();
    var H = ['ltr', 'rtl'],
        T = { '>': '<', '<': '>', '=': '=' };
    function t(t, e) {
        return {
            modify: function(t) {
                return e.Direction.is('rtl') ? -t : t;
            }
        };
    }
    function x(i, r, o) {
        var s = [
            function(e, n) {
                return {
                    modify: function(t) {
                        return t + n.Gaps.value * e.index;
                    }
                };
            },
            function(t, e) {
                return {
                    modify: function(t) {
                        return t + e.Clones.grow / 2;
                    }
                };
            },
            function(n, i) {
                return {
                    modify: function(t) {
                        if (0 <= n.settings.focusAt) {
                            var e = i.Peek.value;
                            return u(e) ? t - e.before : t - e;
                        }
                        return t;
                    }
                };
            },
            function(o, s) {
                return {
                    modify: function(t) {
                        var e = s.Gaps.value,
                            n = s.Sizes.width,
                            i = o.settings.focusAt,
                            r = s.Sizes.slideWidth;
                        return 'center' === i
                            ? t - (n / 2 - r / 2)
                            : t - r * i - e * i;
                    }
                };
            }
        ].concat(i._t, [t]);
        return {
            mutate: function(t) {
                for (var e = 0; e < s.length; e++) {
                    var n = s[e];
                    c(n) && c(n().modify) && (t = n(i, r, o).modify(t));
                }
                return t;
            }
        };
    }
    var e = !1;
    try {
        var O = Object.defineProperty({}, 'passive', {
            get: function() {
                e = !0;
            }
        });
        window.addEventListener('testPassive', null, O),
            window.removeEventListener('testPassive', null, O);
    } catch (t) {}
    var A = e,
        M = ['touchstart', 'mousedown'],
        C = ['touchmove', 'mousemove'],
        P = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'],
        L = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
    function z(t) {
        return u(t)
            ? ((n = t),
              Object.keys(n)
                  .sort()
                  .reduce(function(t, e) {
                      return (t[e] = n[e]), t[e], t;
                  }, {}))
            : {};
        var n;
    }
    var j = {
        Html: function(e, t) {
            var n = {
                mount: function() {
                    (this.root = e.selector),
                        (this.track = this.root.querySelector(k)),
                        (this.slides = Array.prototype.slice
                            .call(this.wrapper.children)
                            .filter(function(t) {
                                return !t.classList.contains(
                                    e.settings.classes.cloneSlide
                                );
                            }));
                }
            };
            return (
                d(n, 'root', {
                    get: function() {
                        return n._r;
                    },
                    set: function(t) {
                        s(t) && (t = document.querySelector(t)),
                            _(t) && (n._r = t);
                    }
                }),
                d(n, 'track', {
                    get: function() {
                        return n._t;
                    },
                    set: function(t) {
                        _(t) && (n._t = t);
                    }
                }),
                d(n, 'wrapper', {
                    get: function() {
                        return n.track.children[0];
                    }
                }),
                n
            );
        },
        Translate: function(r, o, s) {
            var u = {
                set: function(t) {
                    var e = x(r, o).mutate(t);
                    o.Html.wrapper.style.transform =
                        'translate3d(' + -1 * e + 'px, 0px, 0px)';
                },
                remove: function() {
                    o.Html.wrapper.style.transform = '';
                }
            };
            return (
                s.on('move', function(t) {
                    var e = o.Gaps.value,
                        n = o.Sizes.length,
                        i = o.Sizes.slideWidth;
                    return r.isType('carousel') && o.Run.isOffset('<')
                        ? (o.Transition.after(function() {
                              s.emit('translate.jump'), u.set(i * (n - 1));
                          }),
                          u.set(-i - e * n))
                        : r.isType('carousel') && o.Run.isOffset('>')
                        ? (o.Transition.after(function() {
                              s.emit('translate.jump'), u.set(0);
                          }),
                          u.set(i * n + e * n))
                        : u.set(t.movement);
                }),
                s.on('destroy', function() {
                    u.remove();
                }),
                u
            );
        },
        Transition: function(n, e, t) {
            var i = !1,
                r = {
                    compose: function(t) {
                        var e = n.settings;
                        return i
                            ? t + ' 0ms ' + e.animationTimingFunc
                            : t +
                                  ' ' +
                                  this.duration +
                                  'ms ' +
                                  e.animationTimingFunc;
                    },
                    set: function() {
                        var t =
                            0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : 'transform';
                        e.Html.wrapper.style.transition = this.compose(t);
                    },
                    remove: function() {
                        e.Html.wrapper.style.transition = '';
                    },
                    after: function(t) {
                        setTimeout(function() {
                            t();
                        }, this.duration);
                    },
                    enable: function() {
                        (i = !1), this.set();
                    },
                    disable: function() {
                        (i = !0), this.set();
                    }
                };
            return (
                d(r, 'duration', {
                    get: function() {
                        var t = n.settings;
                        return n.isType('slider') && e.Run.offset
                            ? t.rewindDuration
                            : t.animationDuration;
                    }
                }),
                t.on('move', function() {
                    r.set();
                }),
                t.on(['build.before', 'resize', 'translate.jump'], function() {
                    r.disable();
                }),
                t.on('run', function() {
                    r.enable();
                }),
                t.on('destroy', function() {
                    r.remove();
                }),
                r
            );
        },
        Direction: function(t, e, n) {
            var i = {
                mount: function() {
                    this.value = t.settings.direction;
                },
                resolve: function(t) {
                    var e = t.slice(0, 1);
                    return this.is('rtl') ? t.split(e).join(T[e]) : t;
                },
                is: function(t) {
                    return this.value === t;
                },
                addClass: function() {
                    e.Html.root.classList.add(
                        t.settings.classes.direction[this.value]
                    );
                },
                removeClass: function() {
                    e.Html.root.classList.remove(
                        t.settings.classes.direction[this.value]
                    );
                }
            };
            return (
                d(i, 'value', {
                    get: function() {
                        return i._v;
                    },
                    set: function(t) {
                        -1 < H.indexOf(t) && (i._v = t);
                    }
                }),
                n.on(['destroy', 'update'], function() {
                    i.removeClass();
                }),
                n.on('update', function() {
                    i.mount();
                }),
                n.on(['build.before', 'update'], function() {
                    i.addClass();
                }),
                i
            );
        },
        Peek: function(n, t, e) {
            var i = {
                mount: function() {
                    this.value = n.settings.peek;
                }
            };
            return (
                d(i, 'value', {
                    get: function() {
                        return i._v;
                    },
                    set: function(t) {
                        u(t)
                            ? ((t.before = b(t.before)), (t.after = b(t.after)))
                            : (t = b(t)),
                            (i._v = t);
                    }
                }),
                d(i, 'reductor', {
                    get: function() {
                        var t = i.value,
                            e = n.settings.perView;
                        return u(t) ? t.before / e + t.after / e : (2 * t) / e;
                    }
                }),
                e.on(['resize', 'update'], function() {
                    i.mount();
                }),
                i
            );
        },
        Sizes: function(t, n, e) {
            var i = {
                setupSlides: function() {
                    for (var t = n.Html.slides, e = 0; e < t.length; e++)
                        t[e].style.width = this.slideWidth + 'px';
                },
                setupWrapper: function(t) {
                    n.Html.wrapper.style.width = this.wrapperSize + 'px';
                },
                remove: function() {
                    for (var t = n.Html.slides, e = 0; e < t.length; e++)
                        t[e].style.width = '';
                    n.Html.wrapper.style.width = '';
                }
            };
            return (
                d(i, 'length', {
                    get: function() {
                        return n.Html.slides.length;
                    }
                }),
                d(i, 'width', {
                    get: function() {
                        return n.Html.root.offsetWidth;
                    }
                }),
                d(i, 'wrapperSize', {
                    get: function() {
                        return (
                            i.slideWidth * i.length +
                            n.Gaps.grow +
                            n.Clones.grow
                        );
                    }
                }),
                d(i, 'slideWidth', {
                    get: function() {
                        return (
                            i.width / t.settings.perView -
                            n.Peek.reductor -
                            n.Gaps.reductor
                        );
                    }
                }),
                e.on(['build.before', 'resize', 'update'], function() {
                    i.setupSlides(), i.setupWrapper();
                }),
                e.on('destroy', function() {
                    i.remove();
                }),
                i
            );
        },
        Gaps: function(e, o, t) {
            var n = {
                apply: function(t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = t[e].style,
                            r = o.Direction.value;
                        (i[g[r][0]] = 0 !== e ? this.value / 2 + 'px' : ''),
                            e !== t.length - 1
                                ? (i[g[r][1]] = this.value / 2 + 'px')
                                : (i[g[r][1]] = '');
                    }
                },
                remove: function(t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = t[e].style;
                        (i.marginLeft = ''), (i.marginRight = '');
                    }
                }
            };
            return (
                d(n, 'value', {
                    get: function() {
                        return b(e.settings.gap);
                    }
                }),
                d(n, 'grow', {
                    get: function() {
                        return n.value * (o.Sizes.length - 1);
                    }
                }),
                d(n, 'reductor', {
                    get: function() {
                        var t = e.settings.perView;
                        return (n.value * (t - 1)) / t;
                    }
                }),
                t.on(
                    ['build.after', 'update'],
                    w(function() {
                        n.apply(o.Html.wrapper.children);
                    }, 30)
                ),
                t.on('destroy', function() {
                    n.remove(o.Html.wrapper.children);
                }),
                n
            );
        },
        Move: function(t, n, i) {
            var e = {
                mount: function() {
                    this._o = 0;
                },
                make: function() {
                    var t = this,
                        e =
                            0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0;
                    (this.offset = e),
                        i.emit('move', { movement: this.value }),
                        n.Transition.after(function() {
                            i.emit('move.after', { movement: t.value });
                        });
                }
            };
            return (
                d(e, 'offset', {
                    get: function() {
                        return e._o;
                    },
                    set: function(t) {
                        e._o = l(t) ? 0 : b(t);
                    }
                }),
                d(e, 'translate', {
                    get: function() {
                        return n.Sizes.slideWidth * t.index;
                    }
                }),
                d(e, 'value', {
                    get: function() {
                        var t = this.offset,
                            e = this.translate;
                        return n.Direction.is('rtl') ? e + t : e - t;
                    }
                }),
                i.on(['build.before', 'run'], function() {
                    e.make();
                }),
                e
            );
        },
        Clones: function(h, v, t) {
            var e = {
                mount: function() {
                    (this.items = []),
                        h.isType('carousel') && (this.items = this.collect());
                },
                collect: function() {
                    for (
                        var t =
                                0 < arguments.length && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [],
                            e = v.Html.slides,
                            n = h.settings,
                            i = n.perView,
                            r = n.classes,
                            o = i + +!!h.settings.peek,
                            s = e.slice(0, o),
                            u = e.slice(-o),
                            a = 0;
                        a < Math.max(1, Math.floor(i / e.length));
                        a++
                    ) {
                        for (var c = 0; c < s.length; c++) {
                            var l = s[c].cloneNode(!0);
                            l.classList.add(r.cloneSlide), t.push(l);
                        }
                        for (var f = 0; f < u.length; f++) {
                            var d = u[f].cloneNode(!0);
                            d.classList.add(r.cloneSlide), t.unshift(d);
                        }
                    }
                    return t;
                },
                append: function() {
                    for (
                        var t = this.items,
                            e = v.Html,
                            n = e.wrapper,
                            i = e.slides,
                            r = Math.floor(t.length / 2),
                            o = t.slice(0, r).reverse(),
                            s = t.slice(r, t.length),
                            u = 0;
                        u < s.length;
                        u++
                    )
                        n.appendChild(s[u]);
                    for (var a = 0; a < o.length; a++)
                        n.insertBefore(o[a], i[0]);
                    for (var c = 0; c < t.length; c++)
                        t[c].style.width = v.Sizes.slideWidth + 'px';
                },
                remove: function() {
                    for (var t = this.items, e = 0; e < t.length; e++)
                        v.Html.wrapper.removeChild(t[e]);
                }
            };
            return (
                d(e, 'grow', {
                    get: function() {
                        return (
                            (v.Sizes.slideWidth + v.Gaps.value) * e.items.length
                        );
                    }
                }),
                t.on('update', function() {
                    e.remove(), e.mount(), e.append();
                }),
                t.on('build.before', function() {
                    h.isType('carousel') && e.append();
                }),
                t.on('destroy', function() {
                    e.remove();
                }),
                e
            );
        },
        Resize: function(t, e, n) {
            var i = new S(),
                r = {
                    mount: function() {
                        this.bind();
                    },
                    bind: function() {
                        i.on(
                            'resize',
                            window,
                            w(function() {
                                n.emit('resize');
                            }, t.settings.throttle)
                        );
                    },
                    unbind: function() {
                        i.off('resize', window);
                    }
                };
            return (
                n.on('destroy', function() {
                    r.unbind(), i.destroy();
                }),
                r
            );
        },
        Build: function(n, i, t) {
            var e = {
                mount: function() {
                    t.emit('build.before'),
                        this.typeClass(),
                        this.activeClass(),
                        t.emit('build.after');
                },
                typeClass: function() {
                    i.Html.root.classList.add(
                        n.settings.classes[n.settings.type]
                    );
                },
                activeClass: function() {
                    var e = n.settings.classes,
                        t = i.Html.slides[n.index];
                    t &&
                        (t.classList.add(e.activeSlide),
                        y(t).forEach(function(t) {
                            t.classList.remove(e.activeSlide);
                        }));
                },
                removeClasses: function() {
                    var e = n.settings.classes;
                    i.Html.root.classList.remove(e[n.settings.type]),
                        i.Html.slides.forEach(function(t) {
                            t.classList.remove(e.activeSlide);
                        });
                }
            };
            return (
                t.on(['destroy', 'update'], function() {
                    e.removeClasses();
                }),
                t.on(['resize', 'update'], function() {
                    e.mount();
                }),
                t.on('move.after', function() {
                    e.activeClass();
                }),
                e
            );
        },
        Run: function(o, n, s) {
            var t = {
                mount: function() {
                    this._o = !1;
                },
                make: function(t) {
                    var e = this;
                    o.disabled ||
                        (o.disable(),
                        (this.move = t),
                        s.emit('run.before', this.move),
                        this.calculate(),
                        s.emit('run', this.move),
                        n.Transition.after(function() {
                            (e.isOffset('<') || e.isOffset('>')) &&
                                ((e._o = !1), s.emit('run.offset', e.move)),
                                s.emit('run.after', e.move),
                                o.enable();
                        }));
                },
                calculate: function() {
                    var t = this.move,
                        e = this.length,
                        n = t.steps,
                        i = t.direction,
                        r = 'number' == typeof b(n) && 0 !== b(n);
                    switch (i) {
                        case '>':
                            '>' === n
                                ? (o.index = e)
                                : this.isEnd()
                                ? ((o.isType('slider') && !o.settings.rewind) ||
                                      ((this._o = !0), (o.index = 0)),
                                  s.emit('run.end', t))
                                : r
                                ? (o.index += Math.min(e - o.index, -b(n)))
                                : o.index++;
                            break;
                        case '<':
                            '<' === n
                                ? (o.index = 0)
                                : this.isStart()
                                ? ((o.isType('slider') && !o.settings.rewind) ||
                                      ((this._o = !0), (o.index = e)),
                                  s.emit('run.start', t))
                                : r
                                ? (o.index -= Math.min(o.index, b(n)))
                                : o.index--;
                            break;
                        case '=':
                            o.index = n;
                    }
                },
                isStart: function() {
                    return 0 === o.index;
                },
                isEnd: function() {
                    return o.index === this.length;
                },
                isOffset: function(t) {
                    return this._o && this.move.direction === t;
                }
            };
            return (
                d(t, 'move', {
                    get: function() {
                        return this._m;
                    },
                    set: function(t) {
                        this._m = {
                            direction: t.substr(0, 1),
                            steps: t.substr(1) ? t.substr(1) : 0
                        };
                    }
                }),
                d(t, 'length', {
                    get: function() {
                        var t = o.settings,
                            e = n.Html.slides.length;
                        return o.isType('slider') &&
                            'center' !== t.focusAt &&
                            t.bound
                            ? e - 1 - (b(t.perView) - 1) + b(t.focusAt)
                            : e - 1;
                    }
                }),
                d(t, 'offset', {
                    get: function() {
                        return this._o;
                    }
                }),
                t
            );
        },
        Swipe: function(d, h, v) {
            var n = new S(),
                p = 0,
                m = 0,
                g = 0,
                i = !1,
                y = !0,
                r = !!A && { passive: !0 },
                t = {
                    mount: function() {
                        this.bindSwipeStart();
                    },
                    start: function(t) {
                        if (!i && !d.disabled) {
                            this.disable();
                            var e = this.touches(t);
                            (y = !0),
                                (p = null),
                                (m = b(e.pageX)),
                                (g = b(e.pageY)),
                                this.bindSwipeMove(),
                                this.bindSwipeEnd(),
                                v.emit('swipe.start');
                        }
                    },
                    move: function(t) {
                        if (!d.disabled) {
                            var e = d.settings,
                                n = e.touchAngle,
                                i = e.touchRatio,
                                r = e.classes,
                                o = this.touches(t),
                                s = b(o.pageX) - m,
                                u = b(o.pageY) - g,
                                a = Math.abs(s << 2),
                                c = Math.abs(u << 2),
                                l = Math.sqrt(a + c),
                                f = Math.sqrt(c);
                            if (
                                ((p = Math.asin(f / l)),
                                !(y && (180 * p) / Math.PI < n))
                            )
                                return (y = !1);
                            t.stopPropagation(),
                                h.Move.make(s * parseFloat(i)),
                                h.Html.root.classList.add(r.dragging),
                                v.emit('swipe.move');
                        }
                    },
                    end: function(t) {
                        if (!d.disabled) {
                            var e = d.settings,
                                n = this.touches(t),
                                i = this.threshold(t),
                                r = n.pageX - m,
                                o = (180 * p) / Math.PI,
                                s = Math.round(r / h.Sizes.slideWidth);
                            this.enable(),
                                y &&
                                    (i < r && o < e.touchAngle
                                        ? (e.perTouch &&
                                              (s = Math.min(s, b(e.perTouch))),
                                          h.Direction.is('rtl') && (s = -s),
                                          h.Run.make(
                                              h.Direction.resolve('<' + s)
                                          ))
                                        : r < -i && o < e.touchAngle
                                        ? (e.perTouch &&
                                              (s = Math.max(s, -b(e.perTouch))),
                                          h.Direction.is('rtl') && (s = -s),
                                          h.Run.make(
                                              h.Direction.resolve('>' + s)
                                          ))
                                        : h.Move.make()),
                                h.Html.root.classList.remove(
                                    e.classes.dragging
                                ),
                                this.unbindSwipeMove(),
                                this.unbindSwipeEnd(),
                                v.emit('swipe.end');
                        }
                    },
                    bindSwipeStart: function() {
                        var e = this,
                            t = d.settings;
                        t.swipeThreshold &&
                            n.on(
                                M[0],
                                h.Html.wrapper,
                                function(t) {
                                    e.start(t);
                                },
                                r
                            ),
                            t.dragThreshold &&
                                n.on(
                                    M[1],
                                    h.Html.wrapper,
                                    function(t) {
                                        e.start(t);
                                    },
                                    r
                                );
                    },
                    unbindSwipeStart: function() {
                        n.off(M[0], h.Html.wrapper),
                            n.off(M[1], h.Html.wrapper);
                    },
                    bindSwipeMove: function() {
                        var e = this;
                        n.on(
                            C,
                            h.Html.wrapper,
                            w(function(t) {
                                e.move(t);
                            }, d.settings.throttle),
                            r
                        );
                    },
                    unbindSwipeMove: function() {
                        n.off(C, h.Html.wrapper);
                    },
                    bindSwipeEnd: function() {
                        var e = this;
                        n.on(P, h.Html.wrapper, function(t) {
                            e.end(t);
                        });
                    },
                    unbindSwipeEnd: function() {
                        n.off(P, h.Html.wrapper);
                    },
                    touches: function(t) {
                        return -1 < L.indexOf(t.type)
                            ? t
                            : t.touches[0] || t.changedTouches[0];
                    },
                    threshold: function(t) {
                        var e = d.settings;
                        return -1 < L.indexOf(t.type)
                            ? e.dragThreshold
                            : e.swipeThreshold;
                    },
                    enable: function() {
                        return (i = !1), h.Transition.enable(), this;
                    },
                    disable: function() {
                        return (i = !0), h.Transition.disable(), this;
                    }
                };
            return (
                v.on('build.after', function() {
                    h.Html.root.classList.add(d.settings.classes.swipeable);
                }),
                v.on('destroy', function() {
                    t.unbindSwipeStart(),
                        t.unbindSwipeMove(),
                        t.unbindSwipeEnd(),
                        n.destroy();
                }),
                t
            );
        },
        Images: function(t, e, n) {
            var i = new S(),
                r = {
                    mount: function() {
                        this.bind();
                    },
                    bind: function() {
                        i.on('dragstart', e.Html.wrapper, this.dragstart);
                    },
                    unbind: function() {
                        i.off('dragstart', e.Html.wrapper);
                    },
                    dragstart: function(t) {
                        t.preventDefault();
                    }
                };
            return (
                n.on('destroy', function() {
                    r.unbind(), i.destroy();
                }),
                r
            );
        },
        Anchors: function(t, e, n) {
            var i = new S(),
                r = !1,
                o = !1,
                s = {
                    mount: function() {
                        (this._a = e.Html.wrapper.querySelectorAll('a')),
                            this.bind();
                    },
                    bind: function() {
                        i.on('click', e.Html.wrapper, this.click);
                    },
                    unbind: function() {
                        i.off('click', e.Html.wrapper);
                    },
                    click: function(t) {
                        t.stopPropagation(), o && t.preventDefault();
                    },
                    detach: function() {
                        if (((o = !0), !r)) {
                            for (var t = 0; t < this.items.length; t++)
                                (this.items[t].draggable = !1),
                                    this.items[t].setAttribute(
                                        'data-href',
                                        this.items[t].getAttribute('href')
                                    ),
                                    this.items[t].removeAttribute('href');
                            r = !0;
                        }
                        return this;
                    },
                    attach: function() {
                        if (((o = !1), r)) {
                            for (var t = 0; t < this.items.length; t++)
                                (this.items[t].draggable = !0),
                                    this.items[t].setAttribute(
                                        'href',
                                        this.items[t].getAttribute('data-href')
                                    );
                            r = !1;
                        }
                        return this;
                    }
                };
            return (
                d(s, 'items', {
                    get: function() {
                        return s._a;
                    }
                }),
                n.on('swipe.move', function() {
                    s.detach();
                }),
                n.on('swipe.end', function() {
                    e.Transition.after(function() {
                        s.attach();
                    });
                }),
                n.on('destroy', function() {
                    s.attach(), s.unbind(), i.destroy();
                }),
                s
            );
        },
        Controls: function(i, e, t) {
            var n = new S(),
                r = {
                    mount: function() {
                        (this._n = e.Html.root.querySelectorAll(
                            '[data-glide-el="controls[nav]"]'
                        )),
                            (this._c = e.Html.root.querySelectorAll(
                                '[data-glide-el^="controls"]'
                            )),
                            this.addBindings();
                    },
                    setActive: function() {
                        for (var t = 0; t < this._n.length; t++)
                            this.addClass(this._n[t].children);
                    },
                    removeActive: function() {
                        for (var t = 0; t < this._n.length; t++)
                            this.removeClass(this._n[t].children);
                    },
                    addClass: function(t) {
                        var e = i.settings,
                            n = t[i.index];
                        n.classList.add(e.classes.activeNav),
                            y(n).forEach(function(t) {
                                t.classList.remove(e.classes.activeNav);
                            });
                    },
                    removeClass: function(t) {
                        t[i.index].classList.remove(
                            i.settings.classes.activeNav
                        );
                    },
                    addBindings: function() {
                        for (var t = 0; t < this._c.length; t++)
                            this.bind(this._c[t].children);
                    },
                    removeBindings: function() {
                        for (var t = 0; t < this._c.length; t++)
                            this.unbind(this._c[t].children);
                    },
                    bind: function(t) {
                        for (var e = 0; e < t.length; e++)
                            n.on(['click', 'touchstart'], t[e], this.click);
                    },
                    unbind: function(t) {
                        for (var e = 0; e < t.length; e++)
                            n.off(['click', 'touchstart'], t[e]);
                    },
                    click: function(t) {
                        t.preventDefault(),
                            e.Run.make(
                                e.Direction.resolve(
                                    t.currentTarget.getAttribute(
                                        'data-glide-dir'
                                    )
                                )
                            );
                    }
                };
            return (
                d(r, 'items', {
                    get: function() {
                        return r._c;
                    }
                }),
                t.on(['mount.after', 'move.after'], function() {
                    r.setActive();
                }),
                t.on('destroy', function() {
                    r.removeBindings(), r.removeActive(), n.destroy();
                }),
                r
            );
        },
        Keyboard: function(t, e, n) {
            var i = new S(),
                r = {
                    mount: function() {
                        t.settings.keyboard && this.bind();
                    },
                    bind: function() {
                        i.on('keyup', document, this.press);
                    },
                    unbind: function() {
                        i.off('keyup', document);
                    },
                    press: function(t) {
                        39 === t.keyCode &&
                            e.Run.make(e.Direction.resolve('>')),
                            37 === t.keyCode &&
                                e.Run.make(e.Direction.resolve('<'));
                    }
                };
            return (
                n.on(['destroy', 'update'], function() {
                    r.unbind();
                }),
                n.on('update', function() {
                    r.mount();
                }),
                n.on('destroy', function() {
                    i.destroy();
                }),
                r
            );
        },
        Autoplay: function(e, n, t) {
            var i = new S(),
                r = {
                    mount: function() {
                        this.start(), e.settings.hoverpause && this.bind();
                    },
                    start: function() {
                        var t = this;
                        e.settings.autoplay &&
                            l(this._i) &&
                            (this._i = setInterval(function() {
                                t.stop(), n.Run.make('>'), t.start();
                            }, this.time));
                    },
                    stop: function() {
                        this._i = clearInterval(this._i);
                    },
                    bind: function() {
                        var t = this;
                        i.on('mouseover', n.Html.root, function() {
                            t.stop();
                        }),
                            i.on('mouseout', n.Html.root, function() {
                                t.start();
                            });
                    },
                    unbind: function() {
                        i.off(['mouseover', 'mouseout'], n.Html.root);
                    }
                };
            return (
                d(r, 'time', {
                    get: function() {
                        var t = n.Html.slides[e.index].getAttribute(
                            'data-glide-autoplay'
                        );
                        return b(t || e.settings.autoplay);
                    }
                }),
                t.on(['destroy', 'update'], function() {
                    r.unbind();
                }),
                t.on(
                    ['run.before', 'pause', 'destroy', 'swipe.start', 'update'],
                    function() {
                        r.stop();
                    }
                ),
                t.on(['run.after', 'play', 'swipe.end'], function() {
                    r.start();
                }),
                t.on('update', function() {
                    r.mount();
                }),
                t.on('destroy', function() {
                    i.destroy();
                }),
                r
            );
        },
        Breakpoints: function(t, e, n) {
            var i = new S(),
                r = t.settings,
                o = z(r.breakpoints),
                s = a({}, r),
                u = {
                    match: function(t) {
                        if (void 0 !== window.matchMedia)
                            for (var e in t)
                                if (
                                    t.hasOwnProperty(e) &&
                                    window.matchMedia(
                                        '(max-width: ' + e + 'px)'
                                    ).matches
                                )
                                    return t[e];
                        return s;
                    }
                };
            return (
                a(r, u.match(o)),
                i.on(
                    'resize',
                    window,
                    w(function() {
                        t.settings = h(r, u.match(o));
                    }, t.settings.throttle)
                ),
                n.on('update', function() {
                    (o = z(o)), (s = a({}, r));
                }),
                n.on('destroy', function() {
                    i.off('resize', window);
                }),
                u
            );
        }
    };
    return (function(t) {
        function e() {
            return (
                r(this, e),
                (function(t, e) {
                    if (!t)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return !e ||
                        ('object' != typeof e && 'function' != typeof e)
                        ? t
                        : e;
                })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).apply(
                        this,
                        arguments
                    )
                )
            );
        }
        return (
            (function(t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function, not ' +
                            typeof e
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    e &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
            })(e, p),
            o(e, [
                {
                    key: 'mount',
                    value: function() {
                        var t =
                            0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                        return (function t(e, n, i) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var o = Object.getPrototypeOf(e);
                                return null === o ? void 0 : t(o, n, i);
                            }
                            if ('value' in r) return r.value;
                            var s = r.get;
                            return void 0 !== s ? s.call(i) : void 0;
                        })(
                            e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                            'mount',
                            this
                        ).call(this, a({}, j, t));
                    }
                }
            ]),
            e
        );
    })();
});
