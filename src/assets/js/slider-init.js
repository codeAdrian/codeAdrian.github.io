var featuredImages = new Swiper("#js-featured-images", {
  direction: "vertical",
  slidesPerView: 1.5,
  spaceBetween: 0,
  centeredSlides: true,
  touchRatio: 0.8,
  longSwipes: false,
  loop: true,
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

    if (canMovePrevious) {
      document
        .getElementById("js-featured-control-prev")
        .classList.remove("featured-projects__control--disabled");
    } else {
      document
        .getElementById("js-featured-control-prev")
        .classList.add("featured-projects__control--disabled");
    }

    if (canMoveNext) {
      document
        .getElementById("js-featured-control-next")
        .classList.remove("featured-projects__control--disabled");
    } else {
      document
        .getElementById("js-featured-control-next")
        .classList.add("featured-projects__control--disabled");
    }
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
