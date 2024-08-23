var swiper = new Swiper('.my-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  
  breakpoints: {
    // when window width is >= 834px
    834: {
      slidesPerView: 2,
      spaceBetween: 10,
      enabled: true,
      
    },
     
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
