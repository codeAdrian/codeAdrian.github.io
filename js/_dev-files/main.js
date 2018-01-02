var codeAdrianMain;
codeAdrianMain = (function($) {
    var $containerFeatures, $containerWork;
    var containerFeaturesSlick = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
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
                breakpoint: 1024,
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
                breakpoint: 1024,
                settings: "unslick"
            }
        ]
    };

    $(function() {
        _cacheDom();
        initializeSlick($containerFeatures, containerFeaturesSlick);
        initializeSlick($containerWork, containerWorkSlick);
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
    }

})(jQuery);