var codeAdrianMain;
codeAdrianMain = (function($) {
    var $containerFeatures, $containerWork, $containerAbout, $window;
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

    /**
     * @param arrow
     * @param enable
     *
     * Enables or disables alick arrow
     *
     */

    function _toggleArrow(arrow, enable){
        if(enable){
            arrow.removeClass("slick-disabled");
            arrow.removeAttr("disabled");
        } else {
            arrow.addClass("slick-disabled");
            arrow.attr("disabled","disabled");
        }
    }

    /**
     * @param currentSlideImg
     * @param dataSrc
     *
     * Lazy loads slick images and adds loaded class after delay
     */

    function _slickLazyLoadCustom(currentSlideImg, dataSrc) {
        currentSlideImg.attr("src", dataSrc).delay(1000).queue(function(){
            $(this).addClass("loaded");
        });
    }

    /**
     * Handles Work Slider initialization event
     */

    function _handleWorkSlickInit() {
        var currentSlideImg = $(this).find(".slick-cloned").find("img");
        var dataSrc = currentSlideImg.data("src");

        _toggleArrow(workSlickArrowPrev, false);

        _slickLazyLoadCustom(currentSlideImg, dataSrc);
    }

    /**
     * Handles Work Slider after change event
     */

    function _handleWorkSlickAfterChange(event, slick) {
        var currentSlideImg = $(this).find(".slick-slide.slick-current.slick-active").find("img");
        var dataSrc = currentSlideImg.data("src");

        myLazyLoad.update();

        _toggleArrow(workSlickArrowPrev, true);
        _toggleArrow(workSlickArrowPrev, true);

        _slickLazyLoadCustom(currentSlideImg, dataSrc);

        if(slick.currentSlide===0) {
            _toggleArrow(workSlickArrowPrev, false);

        } else if(slick.currentSlide+1===slick.slideCount) {
            _toggleArrow(workSlickArrowNext, false);
        }
    }

    /**
     * On document ready initializations
     */

    $(function() {
        _cacheDom();

        $window.on('resize orientationchange', _refreshSlickAndSelectArrows);

        _initializeSlick($containerFeatures, containerFeaturesSlick);
        _initializeSlick($containerAbout, containerAboutSlick);

        $containerWork.on("init reInit", _handleWorkSlickInit);

        _initializeSlick($containerWork, containerWorkSlick);

        $containerWork.on("afterChange", _handleWorkSlickAfterChange);

        myLazyLoad = new LazyLoad();
    });

    /**
     * Refreshes sliders and reselects arrows in work slider
     */

    function _refreshSlickAndSelectArrows() {
        $($containerFeatures).slick('resize');
        $($containerWork).slick('resize');

        workSlickArrowNext = $containerWork.find(".slick-next");
        workSlickArrowPrev = $containerWork.find(".slick-prev");
    }

    /**
     * @param $slickContainer
     * @param slickOptions
     *
     * Initializes a slider with options
     */

    function _initializeSlick($slickContainer, slickOptions) {
        $slickContainer.slick(slickOptions);
    }

    /**
     * Caches DOM and JQuery selects elements (performance heavy tasks)
     */

    function _cacheDom(){
        $window = $(window);
        $containerFeatures = $("#containerFeatures");
        $containerWork = $("#containerWork");
        $containerAbout = $("#aboutImageContainer");
        workSlickArrowNext = $containerWork.find(".slick-next");
        workSlickArrowPrev = $containerWork.find(".slick-prev");
    }
})(jQuery);