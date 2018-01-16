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

    /**
     * Enables or disables Slick Work Container Carousel arrow
     *
     * @param arrow
     * @param enabled
     *
     */

    function _toggleSlickArrow(arrow, enabled) {
        if(enabled){
            arrow.removeClass("slick-disabled");
            arrow.removeAttr("disabled");
        } else {
            arrow.addClass("slick-disabled");
            arrow.attr("disabled","disabled");
        }
    }

    /**
     * Selects Slick Arrows in Work Container
     */

    function _reselectSlickArrows(){
        workSlickArrowNext = $containerWork.find(".slick-next");
        workSlickArrowPrev = $containerWork.find(".slick-prev");
    }

    /**
     * Handles Work container Slick Init (image loads and preparing slick arrows)
     */

    function _handleWorkSlickInit() {
        _reselectSlickArrows();
        _toggleSlickArrow(workSlickArrowPrev, false);

        var currentSlideImg = $(this).find(".slick-cloned").find("img");
        var dataSrc = currentSlideImg.data("src");

        currentSlideImg
            .attr("src", dataSrc)
            .delay(1000)
            .queue(function(){
            $(this).addClass("loaded");
        });
    }

    /**
     * Handles work container slick change event (loads images, handles arrows)
     *
     * @param event
     * @param slick
     *
     */

    function _handleWorkSlickChange(event, slick){
        myLazyLoad.update();

        var currentSlideImg = $(this).find(".slick-slide.slick-current.slick-active").find("img");
        var dataSrc = currentSlideImg.data("src");

        currentSlideImg.attr("src", dataSrc).delay(1000).queue(function(){
            $(this).addClass("loaded");
        });

        if(slick.currentSlide===0) {
            _toggleSlickArrow(workSlickArrowPrev, false);
            _toggleSlickArrow(workSlickArrowNext, true);

        } else if(slick.currentSlide+1===slick.slideCount) {
            _toggleSlickArrow(workSlickArrowPrev, true);
            _toggleSlickArrow(workSlickArrowNext, false);
        } else {
            _toggleSlickArrow(workSlickArrowPrev, true);
            _toggleSlickArrow(workSlickArrowNext, true);
        }
    }

    /**
     * Refreshes Slick Sliders and reselects slick arrows
     */

    function _refreshSlickSliders(){
        $($containerFeatures).slick('resize');
        $($containerWork).slick('resize');
        _reselectSlickArrows();
    }

    /**
     * On document ready function calls and initializations
     */

    $(function() {
        _cacheDom();

        _initializeSlick($containerFeatures, containerFeaturesSlick);
        _initializeSlick($containerAbout, containerAboutSlick);

        $containerWork.on("init reInit", _handleWorkSlickInit);

        _initializeSlick($containerWork, containerWorkSlick);

        $containerWork.on("afterChange", _handleWorkSlickChange);
        myLazyLoad = new LazyLoad();
    });

    /**
     * Initializes slick with options
     *
     * @param $slickContainer
     * @param slickOptions
     */

    function _initializeSlick($slickContainer, slickOptions) {
        $slickContainer.slick(slickOptions);
    }

    /**
     * Caches DOM - resource-heavy functions
     */

    function _cacheDom(){
        $window = $(window);
        $containerFeatures = $("#containerFeatures");
        $containerWork = $("#containerWork");
        $containerAbout = $("#aboutImageContainer");
        _reselectSlickArrows();
        $window.on('resize orientationchange', _refreshSlickSliders);
    }
})(jQuery);