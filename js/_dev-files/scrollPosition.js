var codeAdrianScrollPosition;

codeAdrianScrollPosition = (function ($) {
    var $mainNavigation,
        $navigationLinks,
        $header,
        $window,
        $sections;
    var sectionIdTonavigationLink = {};
    var offset = 100;
    var scrollInterval = 100;

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
                // if we are inside the interval we wait
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    lastCall = now;
                    fn.call();
                }, interval - (now - lastCall));
            } else {
                // otherwise, we directly call the function
                lastCall = now;
                fn.call();
            }
        };
    }

    function _highlightNavigation() {
        // get the current vertical position of the scroll bar
        var scrollPosition = $(window).scrollTop();

        // iterate the sections
        $sections.each(function () {
            var currentSection = $(this);
            // get the position of the section
            var sectionTop = currentSection.offset().top;

            // if the user has scrolled over the top of the section
            if (scrollPosition >= sectionTop - offset) {
                // get the section id
                var id = currentSection.attr('id');
                // get the corresponding navigation link
                var $navigationLink = sectionIdTonavigationLink[id];
                // if the link is not active
                if (!$navigationLink.hasClass(navActiveClass)) {
                    // remove .active class from all the links
                    $navigationLinks.removeClass(navActiveClass);
                    // add .active class to the current link
                    $navigationLink.addClass(navActiveClass);
                }
                // we have found our section, so we return false to exit the each loop
                return false;
            }
        });
    }
})(jQuery);