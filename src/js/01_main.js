
// window.addEventListener('scroll', function() {
//   const stickyWrap = document.querySelector('.header-stiky-wrap');
//   const catalogRight = document.querySelector('.main-mnu-catalog-right');
//   const sticky = document.querySelector('.header-stiky');
//   const scroll = window.pageYOffset || document.documentElement.scrollTop;
//   console.log(stickyWrap.offsetTop);
//   if (scroll >= stickyWrap.offsetTop) {
//     sticky.classList.add('fixed');
//     catalogRight.classList.add('use-fix');
//   } else {
//     sticky.classList.remove('fixed');
//     catalogRight.classList.remove('use-fix');
//   }
// });


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

document.querySelector('.main-menu-toggle-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.main-sidebar').classList.toggle('active');
});