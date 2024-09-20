var swiper = new Swiper('.my-swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,

  breakpoints: {
    // when window width is >= 834px
    834: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



