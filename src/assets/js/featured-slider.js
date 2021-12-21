var featuredImages = new Swiper("#js-featured-images", {
  slidesPerView: 1.01,
  spaceBetween: 0,
  centeredSlides: true,
  touchRatio: 0.4,
  longSwipes: false,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    1360: {
      slidesPerView: 1.5,
      direction: "vertical",
    },
  },
  on: {
    init: function afterInit() {
      document.getElementById("js-featured-control-prev").disabled = true;
    },
  },
  navigation: {
    nextEl: "#js-featured-control-next",
    prevEl: "#js-featured-control-prev",
  },
});

featuredImages.on(
  "activeIndexChange click touchStart",
  function (currentSwiper) {
    const { activeIndex, slides } = currentSwiper;
    const canMovePrevious = activeIndex > 2;
    const canMoveNext = slides.length - 3 > activeIndex;

    currentSwiper.allowSlidePrev = canMovePrevious;
    currentSwiper.allowSlideNext = canMoveNext;

    document.getElementById("js-featured-control-prev").disabled =
      !canMovePrevious;
    document.getElementById("js-featured-control-next").disabled = !canMoveNext;
  }
);

featuredImages.on("activeIndexChange", function ({ activeIndex }) {
  const index = activeIndex - 1;
  document
    .querySelector(".featured-projects .project-card.project-card--active")
    .classList.remove("project-card--active");
  document
    .getElementById("js-featured-content-" + index)
    .classList.add("project-card--active");
});
