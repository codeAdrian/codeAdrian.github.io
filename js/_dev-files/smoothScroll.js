var codeAdrianSmoothScroll = (function($) {
    var $smoothScrollLinks, $header, $activeElement;
    var scrollTime = 1000;
    var offset = 100;
    var activeClass = codeAdrianScrollPosition.navActiveClass;
    var scrollActive = false;

    $(function() {
        _cacheDom();
        $smoothScrollLinks.click(_handleClick);
    });

    window.onbeforeunload = _scrollToTop;

    function _scrollToTop(){
        window.scrollTo(0, 0);
    }

    function _cacheDom() {
        $smoothScrollLinks = $('a[href*="#"]');
        $header = $('header');
        offset = $header.height() -1;
        $htmlBody = $('html, body');
    }

    function _clickCallback() {
        $activeElement.removeClass("navigation__link--scrolling");
        scrollActive = false;
    }

    function _handleClick(event) {
        var target = $(this.hash);
        $activeElement = $(this);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length && !scrollActive) {
            if(!$activeElement.hasClass(activeClass)){
                $activeElement.addClass("navigation__link--scrolling");
            }
            scrollActive = true;
            event.preventDefault();
            $htmlBody.animate({
                scrollTop: target.offset().top - offset
            }, scrollTime, _clickCallback);
        }
    }
})(jQuery);