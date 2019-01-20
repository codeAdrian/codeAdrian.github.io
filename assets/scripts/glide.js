/*!
 * Glide.js v3.2.4
 * (c) 2013-2018 J─Ödrzej Cha┼éubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Glide=e()}(this,function(){"use strict";function t(t){return parseInt(t)}function e(t){return"string"==typeof t}function n(t){var e=void 0===t?"undefined":m(t);return"function"===e||"object"===e&&!!t}function i(t){return"function"==typeof t}function r(t){return void 0===t}function o(t){return t.constructor===Array}function s(t,e,n){Object.defineProperty(t,e,n)}function u(t,e){var n=b({},t,e);return e.hasOwnProperty("classes")&&(n.classes=b({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=b({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=b({},t.breakpoints,e.breakpoints)),n}function a(){return(new Date).getTime()}function c(t,e,n){var i=void 0,r=void 0,o=void 0,s=void 0,u=0;n||(n={});var c=function(){u=!1===n.leading?0:a(),i=null,s=t.apply(r,o),i||(r=o=null)},l=function(){var l=a();u||!1!==n.leading||(u=l);var f=e-(l-u);return r=this,o=arguments,f<=0||e<f?(i&&(clearTimeout(i),i=null),u=l,s=t.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(c,f)),s};return l.cancel=function(){clearTimeout(i),u=0,i=r=o=null},l}function l(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function f(t){return!!(t&&t instanceof window.HTMLElement)}function d(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function h(t,e,r){var o=[function(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}},function(t,e){return{modify:function(t){return t+e.Clones.grow/2}}},function(t,e){return{modify:function(i){if(0<=t.settings.focusAt){var r=e.Peek.value;return n(r)?i-r.before:i-r}return i}}},function(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}].concat(t._t,[d]);return{mutate:function(n){for(var s=0;s<o.length;s++){var u=o[s];i(u)&&i(u().modify)&&(n=u(t,e,r).modify(n))}return n}}}function v(t){return n(t)?(e=t,Object.keys(e).sort().reduce(function(t,n){return t[n]=e[n],t[n],t},{})):{};var e}var p={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}},m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},w=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.events=e,this.hop=e.hasOwnProperty}return y(t,[{key:"on",value:function(t,e){if(o(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(o(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach(function(t){t(e||{})})}}]),t}(),_=function(){function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};g(this,e),this._c={},this._t=[],this._e=new w,this.disabled=!1,this.selector=t,this.settings=u(p,n),this.index=this.settings.startAt}return y(e,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),n(t)&&(this._c=function(t,e,n){var r={};for(var o in e)i(e[o])&&(r[o]=e[o](t,r,n));for(var s in r)i(r[s].mount)&&r[s].mount();return r}(this,t,this._e)),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return o(t)&&(this._t=t),this}},{key:"update",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.settings=u(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){n(t)&&(this._o=t)}},{key:"index",get:function(){return this._i},set:function(e){this._i=t(e)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),e}(),k={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]},S='[data-glide-el="track"]',H=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.listeners=e}return y(t,[{key:"on",value:function(t,n,i){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3];e(t)&&(t=[t]);for(var o=0;o<t.length;o++)this.listeners[t[o]]=i,n.addEventListener(t[o],this.listeners[t[o]],r)}},{key:"off",value:function(t,n){e(t)&&(t=[t]);for(var i=0;i<t.length;i++)n.removeEventListener(t[i],this.listeners[t[i]],!1)}},{key:"destroy",value:function(){delete this.listeners}}]),t}(),T=["ltr","rtl"],x={">":"<","<":">","=":"="},O=!1;try{var A=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("testPassive",null,A),window.removeEventListener("testPassive",null,A)}catch(d){}var M=O,C=["touchstart","mousedown"],P=["touchmove","mousemove"],L=["touchend","touchcancel","mouseup","mouseleave"],z=["mousedown","mousemove","mouseup","mouseleave"],j={Html:function(t){var n={mount:function(){this.root=t.selector,this.track=this.root.querySelector(S),this.slides=Array.prototype.slice.call(this.wrapper.children).filter(function(e){return!e.classList.contains(t.settings.classes.cloneSlide)})}};return s(n,"root",{get:function(){return n._r},set:function(t){e(t)&&(t=document.querySelector(t)),f(t)&&(n._r=t)}}),s(n,"track",{get:function(){return n._t},set:function(t){f(t)&&(n._t=t)}}),s(n,"wrapper",{get:function(){return n.track.children[0]}}),n},Translate:function(t,e,n){var i={set:function(n){var i=h(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*i+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",function(r){var o=e.Gaps.value,s=e.Sizes.length,u=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(u*(s-1))}),i.set(-u-o*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after(function(){n.emit("translate.jump"),i.set(0)}),i.set(u*s+o*s)):i.set(r.movement)}),n.on("destroy",function(){i.remove()}),i},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout(function(){t()},this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return s(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",function(){r.set()}),n.on(["build.before","resize","translate.jump"],function(){r.disable()}),n.on("run",function(){r.enable()}),n.on("destroy",function(){r.remove()}),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(x[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return s(i,"value",{get:function(){return i._v},set:function(t){-1<T.indexOf(t)&&(i._v=t)}}),n.on(["destroy","update"],function(){i.removeClass()}),n.on("update",function(){i.mount()}),n.on(["build.before","update"],function(){i.addClass()}),i},Peek:function(e,i,r){var o={mount:function(){this.value=e.settings.peek}};return s(o,"value",{get:function(){return o._v},set:function(e){n(e)?(e.before=t(e.before),e.after=t(e.after)):e=t(e),o._v=e}}),s(o,"reductor",{get:function(){var t=o.value,i=e.settings.perView;return n(t)?t.before/i+t.after/i:2*t/i}}),r.on(["resize","update"],function(){o.mount()}),o},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width=this.slideWidth+"px"},setupWrapper:function(){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return s(i,"length",{get:function(){return e.Html.slides.length}}),s(i,"width",{get:function(){return e.Html.root.offsetWidth}}),s(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),s(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],function(){i.setupSlides(),i.setupWrapper()}),n.on("destroy",function(){i.remove()}),i},Gaps:function(e,n,i){var r={apply:function(t){for(var e=0,i=t.length;e<i;e++){var r=t[e].style,o=n.Direction.value;r[k[o][0]]=0!==e?this.value/2+"px":"",e!==t.length-1?r[k[o][1]]=this.value/2+"px":r[k[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return s(r,"value",{get:function(){return t(e.settings.gap)}}),s(r,"grow",{get:function(){return r.value*(n.Sizes.length-1)}}),s(r,"reductor",{get:function(){var t=e.settings.perView;return r.value*(t-1)/t}}),i.on(["build.after","update"],c(function(){r.apply(n.Html.wrapper.children)},30)),i.on("destroy",function(){r.remove(n.Html.wrapper.children)}),r},Move:function(e,n,i){var o={mount:function(){this._o=0},make:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.offset=e,i.emit("move",{movement:this.value}),n.Transition.after(function(){i.emit("move.after",{movement:t.value})})}};return s(o,"offset",{get:function(){return o._o},set:function(e){o._o=r(e)?0:t(e)}}),s(o,"translate",{get:function(){return n.Sizes.slideWidth*e.index}}),s(o,"value",{get:function(){var t=this.offset,e=this.translate;return n.Direction.is("rtl")?e+t:e-t}}),i.on(["build.before","run"],function(){o.make()}),o},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,u=o+ +!!t.settings.peek,a=i.slice(0,u),c=i.slice(-u),l=0;l<Math.max(1,Math.floor(o/i.length));l++){for(var f=0;f<a.length;f++){var d=a[f].cloneNode(!0);d.classList.add(s.cloneSlide),n.push(d)}for(var h=0;h<c.length;h++){var v=c[h].cloneNode(!0);v.classList.add(s.cloneSlide),n.unshift(v)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),u=t.slice(o,t.length),a=0;a<u.length;a++)i.appendChild(u[a]);for(var c=0;c<s.length;c++)i.insertBefore(s[c],r[0]);for(var l=0;l<t.length;l++)t[l].style.width=e.Sizes.slideWidth+"px"},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return s(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",function(){i.remove(),i.mount(),i.append()}),n.on("build.before",function(){t.isType("carousel")&&i.append()}),n.on("destroy",function(){i.remove()}),i},Resize:function(t,e,n){var i=new H,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,c(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",function(){r.unbind(),i.destroy()}),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.activeSlide),l(i).forEach(function(t){t.classList.remove(n.activeSlide)}))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach(function(t){t.classList.remove(n.activeSlide)})}};return n.on(["destroy","update"],function(){i.removeClasses()}),n.on(["resize","update"],function(){i.mount()}),n.on("move.after",function(){i.activeClass()}),i},Run:function(e,n,i){var r={mount:function(){this._o=!1},make:function(t){var r=this;e.disabled||(e.disable(),this.move=t,i.emit("run.before",this.move),this.calculate(),i.emit("run",this.move),n.Transition.after(function(){(r.isOffset("<")||r.isOffset(">"))&&(r._o=!1,i.emit("run.offset",r.move)),i.emit("run.after",r.move),e.enable()}))},calculate:function(){var n=this.move,r=this.length,o=n.steps,s=n.direction,u="number"==typeof t(o)&&0!==t(o);switch(s){case">":">"===o?e.index=r:this.isEnd()?(e.isType("slider")&&!e.settings.rewind||(this._o=!0,e.index=0),i.emit("run.end",n)):u?e.index+=Math.min(r-e.index,-t(o)):e.index++;break;case"<":"<"===o?e.index=0:this.isStart()?(e.isType("slider")&&!e.settings.rewind||(this._o=!0,e.index=r),i.emit("run.start",n)):u?e.index-=Math.min(e.index,t(o)):e.index--;break;case"=":e.index=o}},isStart:function(){return 0===e.index},isEnd:function(){return e.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return s(r,"move",{get:function(){return this._m},set:function(t){this._m={direction:t.substr(0,1),steps:t.substr(1)?t.substr(1):0}}}),s(r,"length",{get:function(){var i=e.settings,r=n.Html.slides.length;return e.isType("slider")&&"center"!==i.focusAt&&i.bound?r-1-(t(i.perView)-1)+t(i.focusAt):r-1}}),s(r,"offset",{get:function(){return this._o}}),r},Swipe:function(e,n,i){var r=new H,o=0,s=0,u=0,a=!1,l=!0,f=!!M&&{passive:!0},d={mount:function(){this.bindSwipeStart()},start:function(n){if(!a&&!e.disabled){this.disable();var r=this.touches(n);l=!0,o=null,s=t(r.pageX),u=t(r.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),i.emit("swipe.start")}},move:function(r){if(!e.disabled){var a=e.settings,c=a.touchAngle,f=a.touchRatio,d=a.classes,h=this.touches(r),v=t(h.pageX)-s,p=t(h.pageY)-u,m=Math.abs(v<<2),g=Math.abs(p<<2),y=Math.sqrt(m+g),b=Math.sqrt(g);if(o=Math.asin(b/y),!(l&&180*o/Math.PI<c))return l=!1;r.stopPropagation(),n.Move.make(v*parseFloat(f)),n.Html.root.classList.add(d.dragging),i.emit("swipe.move")}},end:function(r){if(!e.disabled){var u=e.settings,a=this.touches(r),c=this.threshold(r),f=a.pageX-s,d=180*o/Math.PI,h=Math.round(f/n.Sizes.slideWidth);this.enable(),l&&(c<f&&d<u.touchAngle?(u.perTouch&&(h=Math.min(h,t(u.perTouch))),n.Direction.is("rtl")&&(h=-h),n.Run.make(n.Direction.resolve("<"+h))):f<-c&&d<u.touchAngle?(u.perTouch&&(h=Math.max(h,-t(u.perTouch))),n.Direction.is("rtl")&&(h=-h),n.Run.make(n.Direction.resolve(">"+h))):n.Move.make()),n.Html.root.classList.remove(u.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),i.emit("swipe.end")}},bindSwipeStart:function(){var t=this,i=e.settings;i.swipeThreshold&&r.on(C[0],n.Html.wrapper,function(e){t.start(e)},f),i.dragThreshold&&r.on(C[1],n.Html.wrapper,function(e){t.start(e)},f)},unbindSwipeStart:function(){r.off(C[0],n.Html.wrapper),r.off(C[1],n.Html.wrapper)},bindSwipeMove:function(){var t=this;r.on(P,n.Html.wrapper,c(function(e){t.move(e)},e.settings.throttle),f)},unbindSwipeMove:function(){r.off(P,n.Html.wrapper)},bindSwipeEnd:function(){var t=this;r.on(L,n.Html.wrapper,function(e){t.end(e)})},unbindSwipeEnd:function(){r.off(L,n.Html.wrapper)},touches:function(t){return-1<z.indexOf(t.type)?t:t.touches[0]||t.changedTouches[0]},threshold:function(t){var n=e.settings;return-1<z.indexOf(t.type)?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,n.Transition.enable(),this},disable:function(){return a=!0,n.Transition.disable(),this}};return i.on("build.after",function(){n.Html.root.classList.add(e.settings.classes.swipeable)}),i.on("destroy",function(){d.unbindSwipeStart(),d.unbindSwipeMove(),d.unbindSwipeEnd(),r.destroy()}),d},Images:function(t,e,n){var i=new H,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",function(){r.unbind(),i.destroy()}),r},Anchors:function(t,e,n){var i=new H,r=!1,o=!1,u={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){t.stopPropagation(),o&&t.preventDefault()},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));r=!1}return this}};return s(u,"items",{get:function(){return u._a}}),n.on("swipe.move",function(){u.detach()}),n.on("swipe.end",function(){e.Transition.after(function(){u.attach()})}),n.on("destroy",function(){u.attach(),u.unbind(),i.destroy()}),u},Controls:function(t,e,n){var i=new H,r={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i.classList.add(n.classes.activeNav),l(i).forEach(function(t){t.classList.remove(n.classes.activeNav)})},removeClass:function(e){e[t.index].classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on(["click","touchstart"],t[e],this.click)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return s(r,"items",{get:function(){return r._c}}),n.on(["mount.after","move.after"],function(){r.setActive()}),n.on("destroy",function(){r.removeBindings(),r.removeActive(),i.destroy()}),r},Keyboard:function(t,e,n){var i=new H,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],function(){r.unbind()}),n.on("update",function(){r.mount()}),n.on("destroy",function(){i.destroy()}),r},Autoplay:function(e,n,i){var o=new H,u={mount:function(){this.start(),e.settings.hoverpause&&this.bind()},start:function(){var t=this;e.settings.autoplay&&r(this._i)&&(this._i=setInterval(function(){t.stop(),n.Run.make(">"),t.start()},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;o.on("mouseover",n.Html.root,function(){t.stop()}),o.on("mouseout",n.Html.root,function(){t.start()})},unbind:function(){o.off(["mouseover","mouseout"],n.Html.root)}};return s(u,"time",{get:function(){return t(n.Html.slides[e.index].getAttribute("data-glide-autoplay")||e.settings.autoplay)}}),i.on(["destroy","update"],function(){u.unbind()}),i.on(["run.before","pause","destroy","swipe.start","update"],function(){u.stop()}),i.on(["run.after","play","swipe.end"],function(){u.start()}),i.on("update",function(){u.mount()}),i.on("destroy",function(){o.destroy()}),u},Breakpoints:function(t,e,n){var i=new H,r=t.settings,o=v(r.breakpoints),s=b({},r),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return b(r,a.match(o)),i.on("resize",window,c(function(){t.settings=u(r,a.match(o))},t.settings.throttle)),n.on("update",function(){o=v(o),s=b({},r)}),n.on("destroy",function(){i.off("resize",window)}),a}};return function(){function t(){return g(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,_),y(t,[{key:"mount",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function n(t,e,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:n(o,e,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"mount",this).call(this,b({},j,e))}}]),t}()});