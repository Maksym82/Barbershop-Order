
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
      // when window width is >= 768px
      834: {
        slidesPerView: 6,
        // enabled: false,
      },
      // when window width is >= 1280px
      // 1280: {
      //   slidesPerView: 6,
      //   spaceBetween: 32,
      // },
    },
  });
  