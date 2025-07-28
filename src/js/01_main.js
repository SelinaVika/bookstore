const stickyWrap = document.querySelector('.header-sticky');

window.addEventListener('scroll', () => {
  stickyWrap.classList.toggle('fix', window.scrollY  > 120);
});

  
// var swiper = new Swiper(".js-main-banner", {
//   autoplay: {
//     delay: 5000,
//   },
//   loop: true,
//   autoHeight: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-arrow-next",
//     prevEl: ".swiper-arrow-prev",
//   }
// });

var reviewsSlider = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 2,
      },
      1300: {
          slidesPerView: 3,
      },
  },
});

var productsSlider = new Swiper(".js-products-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 4,
      },
      1300: {
          slidesPerView: 6,
      },
  },
});

// document.querySelector('.main-menu-toggle-btn').addEventListener('click', function(e) {
//   e.preventDefault();
//   document.querySelector('.main-sidebar').classList.toggle('active');
// });

var reviewsSlider = new Swiper(".js-news-slider", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 2.5,
      },
      1300: {
          slidesPerView: 3.5,
      },
  },
});