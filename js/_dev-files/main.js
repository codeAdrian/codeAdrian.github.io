var codeAdrianMain;
codeAdrianMain = (function($) {
    var $containerFeatures, $containerWork, $containerAbout;
    var workSlickArrowNext,workSlickArrowPrev;

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
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "2%",
                    centerMode: true,
                    dots: true,
                    draggable: false
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
        initializeSlick($containerAbout, containerAboutSlick);
        $containerWork.on("init", function() {
            console.log("INIT");
            workSlickArrowNext = $containerWork.find(".slick-next");
            workSlickArrowPrev = $containerWork.find(".slick-prev");
            workSlickArrowPrev.addClass("slick-disabled");
            workSlickArrowPrev.attr("disabled","disabled");
        });
        initializeSlick($containerWork, containerWorkSlick);
        $containerWork.on("afterChange", function (event, slick) {
            if(slick.currentSlide===0) {
                workSlickArrowPrev.addClass("slick-disabled");
                workSlickArrowPrev.attr("disabled","disabled");
            } else if(slick.currentSlide+1===slick.slideCount) {
                workSlickArrowNext.addClass("slick-disabled");
                workSlickArrowNext.attr("disabled","disabled");

            } else {
                workSlickArrowNext.removeClass("slick-disabled");
                workSlickArrowPrev.removeAttr("disabled");

                workSlickArrowPrev.removeClass("slick-disabled");
                workSlickArrowNext.removeAttr("disabled");
            }
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