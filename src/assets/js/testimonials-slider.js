new Swiper("#js-testimonials", {
  slidesPerView: 1,
  spaceBetween: 0,
  touchRatio: 0,
  touch: false,
  longSwipes: false,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: "#js-testimonials-control-next",
    prevEl: "#js-testimonials-control-prev",
  },
});
