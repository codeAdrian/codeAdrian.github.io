var codeAdrianMain;
codeAdrianMain = (function($) {
    var $containerFeatures, $containerWork, $containerAbout;
    var workSlickArrowNext,workSlickArrowPrev;
    var myLazyLoad;

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
                breakpoint: 767,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "0",
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
        autoplaySpeed: 10000,
        fade: true,
        cssEase: 'linear'
    };

    $(function() {
        _cacheDom();
        initializeSlick($containerFeatures, containerFeaturesSlick);
        initializeSlick($containerAbout, containerAboutSlick);

        $containerWork.on("init", function() {
            workSlickArrowNext = $containerWork.find(".slick-next");
            workSlickArrowPrev = $containerWork.find(".slick-prev");
            workSlickArrowPrev.addClass("slick-disabled");
            workSlickArrowPrev.attr("disabled","disabled");
        });

        initializeSlick($containerWork, containerWorkSlick);

        $containerWork.on("afterChange", function (event, slick) {
            myLazyLoad.update();
            workSlickArrowNext.removeClass("slick-disabled");
            workSlickArrowNext.removeAttr("disabled");
            workSlickArrowPrev.removeClass("slick-disabled");
            workSlickArrowPrev.removeAttr("disabled");
            var currentSlideImg = $(this).find(".slick-slide.slick-current.slick-active").find("img");
            var dataSrc = currentSlideImg.data("src");
            currentSlideImg.attr("src", dataSrc);
            currentSlideImg.addClass("loaded");

            if(slick.currentSlide===0) {
                workSlickArrowPrev.addClass("slick-disabled");
                workSlickArrowPrev.attr("disabled","disabled");

            } else if(slick.currentSlide+1===slick.slideCount) {
                workSlickArrowNext.addClass("slick-disabled");
                workSlickArrowNext.attr("disabled","disabled");

            }
        });

        myLazyLoad = new LazyLoad();
    });

    $(window).on('resize orientationchange', function() {
        $($containerFeatures).slick('resize');
        $($containerWork).slick('resize');
        workSlickArrowNext = $containerWork.find(".slick-next");
        workSlickArrowPrev = $containerWork.find(".slick-prev");
    });

    function initializeSlick($slickContainer, slickOptions) {
        $slickContainer.slick(slickOptions);
    }

    function _cacheDom(){
        $containerFeatures = $("#containerFeatures");
        $containerWork = $("#containerWork");
        $containerAbout = $("#aboutImageContainer");
        workSlickArrowNext = $containerWork.find(".slick-next");
        workSlickArrowPrev = $containerWork.find(".slick-prev");
    }
})(jQuery);