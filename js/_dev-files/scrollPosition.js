var codeAdrianScrollPosition;

codeAdrianScrollPosition = (function ($) {
    var $mainNavigation,
        $navigationLinks,
        $header,
        $window,
        $sections;

    var sectionIdTonavigationLink = {};

    var offset = 100;
    var scrollInterval = 10;

    var navActiveClass = 'navigation__link--active';

    function _cacheDom() {
        $mainNavigation = $('#mainNavigation');
        $navigationLinks = $mainNavigation.find(".navigation__link");
        $header = $("#header");
        $sections = $($(".section").get().reverse());
        $window = $(window);
    }

    $(function () {
        _cacheDom();
        offset = $header.height();
        $sections.each(_mapSectionsToLinks);
        $window.scroll(_throttle(_highlightNavigation, scrollInterval));
    });

    function _mapSectionsToLinks() {
        var id = $(this).attr('id');
        sectionIdTonavigationLink[id] = $mainNavigation.find('a[href="#' + id + '"]');
    }

    function _throttle(fn, interval) {
        var lastCall, timeoutId;
        return function () {
            var now = new Date().getTime();
            if (lastCall && now < (lastCall + interval)) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    lastCall = now;
                    fn.call();
                }, interval - (now - lastCall));
            } else {
                lastCall = now;
                fn.call();
            }
        };
    }

    function _highlightNavigation() {
        var scrollPosition = $(window).scrollTop();
        $sections.each(function () {
            var currentSection = $(this);
            var sectionTop = currentSection.offset().top;

            if (scrollPosition >= sectionTop - offset) {
                var id = currentSection.attr('id');
                var $navigationLink = sectionIdTonavigationLink[id];
                if (!$navigationLink.hasClass(navActiveClass)) {
                    $navigationLinks.removeClass(navActiveClass);
                    $navigationLink.addClass(navActiveClass);
                }
                return false;
            }
        });
    }

    return {
        navActiveClass : navActiveClass
    }
})(jQuery);