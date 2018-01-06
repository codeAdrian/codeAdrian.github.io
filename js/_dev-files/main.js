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

    var containerWorkSlick = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        mobileFirst: true,
        onBeforeChange: function() {
            console.log("ding");
            if (slick.currentSlide >= slick.slideCount - slick.options.slidesToShow) {
                $('.slick-next').addClass("slick-disabled");
            }
        },
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
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "2%",
                    centerMode: true,
                    dots: true,
                }
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
        $containerWork.on("afterChange", function (event, slick) {
            if(slick.currentSlide==0) {
                console.log("FIRST");
            } else if(slick.currentSlide+1==slick.slideCount) {
                console.log("LAST");
            }
            console.log(slick.currentSlide);
        });
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