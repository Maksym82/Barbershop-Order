// ===== Мобильное меню =====
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-header-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    document.body.classList.toggle('open-menu');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  for (let index = 0; index < mobileMenuLinks.length; index++) {
    mobileMenuLinks[index].addEventListener('click', toggleMenu);
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// ===== Скрол вверх =====
const scrollToTopButton = document.getElementById('scrollToTop');

scrollToTopButton.addEventListener('click', () => {
  anime({
    targets: document.documentElement,
    scrollTop: 0,
    duration: 100,
    easing: 'easeInOutQuad',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// ===== Кнопка читать дальше =====
const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.about__text');

readMoreBtn.addEventListener('click', e => {
  text.classList.toggle('show-more');
  if (readMoreBtn.innerText === 'Читати далі') {
    readMoreBtn.innerText = 'Згорнути';
  } else {
    readMoreBtn.innerText = 'Читати далі';
  }
});

// ===== Табы в секции Service =====
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// ===== Свайпер в секции Advantages =====
var swiperAdvantages = new Swiper('.swiper-advantages', {
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

// ===== Свайпер в секции
var swiperBarber = new Swiper('.my-swiper-barber', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,

  breakpoints: {
    // when window width is >= 834px
    834: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next-barber',
    prevEl: '.swiper-button-prev-barber',
  },
});

// ===== Свайпер в секции Gallery =====
const swiperGallery = new Swiper('.swiper__box', {
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
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// ===== Свайпер в секции Blog =====
const swiperBlog = new Swiper('.swiper__blog', {
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
      spaceBetween: 99,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 67,
    },
  },
});
