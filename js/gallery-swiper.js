
const swiper = new Swiper('.swiper__box', {
    // Optional parameters
    grabCursor: true,
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
   
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 834px
      834: {
        slidesPerView: 2,
        spaceBetween: 40,
        // enabled: false,
      },
      // when window width is >= 1440px
      1440: {
        slidesPerView: 2,
        spaceBetween: 0,
        enabled: false,
      },
    },
  });
  