var codeAdrianMain;
codeAdrianMain = (function($) {
    var $containerFeatures, $containerWork, $containerAbout;
    var containerFeaturesSlick = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        mobileFirst: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1023,
                settings: "unslick"
            }
        ]
    };

    var containerWorkSlick = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1023,
                settings: "unslick"
            }
        ]
    };

    var containerAboutSlick = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        mobileFirst: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 20000,
        fade: true,
        cssEase: 'linear'
    };

    $(function() {
        _cacheDom();
        initializeSlick($containerFeatures, containerFeaturesSlick);
        initializeSlick($containerWork, containerWorkSlick);
        initializeSlick($containerAbout, containerAboutSlick);
    });

    $(window).on('resize orientationchange', function() {
        $($containerFeatures).slick('resize');
        $($containerWork).slick('resize');
    });

    function initializeSlick($slickContainer, slickOptions) {
        $slickContainer.slick(slickOptions);
    }

    function _cacheDom(){
        $containerFeatures = $("#containerFeatures");
        $containerWork = $("#containerWork");
        $containerAbout = $("#aboutImageContainer");
    }

})(jQuery);