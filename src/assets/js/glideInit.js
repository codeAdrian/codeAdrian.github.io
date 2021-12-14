const carouselAbout = new Glide("#js-about", {
  perView: 3,
  bound: true,
  gap: 0,
  touchRatio: 0,
  type: "slider",
  rewind: false,
  breakpoints: {
    1280: {
      touchRatio: 0.5,
      perView: 1,
    },
  },
});

carouselAbout.mount();
