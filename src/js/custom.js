$("#travel-slider").owlCarousel({
  loop: true,
  margin: 25,
  autoplay: true,
  autoplayTimeout: 4000,
  nav: true,
  dots: false,
  items: 3.3,

  responsive: {
    0: {
      items: 1.3,
    },
    700: {
      items: 2.3,
    },
    1000: {
      items: 3.3,
    },
  },
});
$("#review-slider").owlCarousel({
  loop: true,
  margin: 25,
  autoplay: true,
  autoplayTimeout: 4000,
  nav: false,
  dots: true,
  items: 1,

});

$("#voice-slider").owlCarousel({
  loop: true,
  margin: 25,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause:true,
  nav: true,
  dots: false,
  items: 2,
  navText: [
    "<i class='far fa-chevron-left'></i>",
    "<i class='far fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
  },
});

const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
