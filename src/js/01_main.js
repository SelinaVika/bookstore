const stickyWrap = document.querySelector('.header-sticky');

window.addEventListener('scroll', () => {
  stickyWrap.classList.toggle('fix', window.scrollY  > 120);
});

const menu = document.querySelector('.main-menu-wrap'); 
const menuOverflow = document.querySelector('.menu-overflow'); 

document.querySelector('.header-menu-btn').addEventListener('click', () => {
  menu.classList.toggle('active');
  menuOverflow.classList.toggle('active');
});


document.querySelectorAll('.main-menu > .main-menu-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    if (!e.target.closest('.main-submenu-wrap')) {
    document.querySelectorAll('.main-menu > .main-menu-item').forEach(el => {
      if (el !== this) {
        el.classList.remove('active');
      }
    });


      this.classList.toggle('active');
  }
  
  });
});

const mobileSearch = document.querySelector('.header-search-wrap');
const mobileHeader = document.querySelector('.header');

menuOverflow.addEventListener('click', () => {
    document.querySelectorAll('.main-menu > .main-menu-item').forEach(el => {
      
      el.classList.remove('active');

  });
  menu.classList.remove('active');

  menuOverflow.classList.remove('active');
  mobileSearch.classList.remove('active');
  mobileHeader.classList.remove('search_show');
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
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      768: {
          slidesPerView: 2.2,
      },
      991: {
          slidesPerView: 2.2,
      },
      1300: {
          slidesPerView: 3.2,
      },
  },
});


var reviewsSlider = new Swiper(".js-compilations-slider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      600: {
          slidesPerView: 2.2,
      },
      991: {
          slidesPerView: 3.2,
      },
      1300: {
          slidesPerView: 4,
      },
  },
});


var productsSlider = new Swiper(".js-products-slider", {
  slidesPerView: 2.2,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      768: {
          slidesPerView: 3,
      },
      1024: {
          slidesPerView: 4,
      },
      1300: {
          slidesPerView: 5,
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
      600: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
      991: {
          slidesPerView: 3,
      },
      1300: {
          slidesPerView: 3.5,
      },
  },
});



document.querySelector('.mobile-search-toggle').addEventListener('click', (e) => {
  e.preventDefault();
  
  mobileHeader.classList.add('search_show')
  mobileSearch.classList.add('active');
  menuOverflow.classList.add('active');
});


document.querySelector('.header-search-close').addEventListener('click',(e) =>{
  e.preventDefault();
  
  mobileHeader.classList.remove('search_show')
  mobileSearch.classList.remove('active')
  menuOverflow.classList.remove('active');
});



document.querySelectorAll('.main-submenu-back').forEach(item => {
  item.addEventListener('click', function(e) {

    document.querySelector('.main-menu > .main-menu-item.active').classList.remove('active');

});
});

document.querySelectorAll('.footer-menu-title').forEach(title => {
  title.addEventListener('click', function() {
    const next = this.nextElementSibling;

    if (window.innerWidth > 600) return;
    
    if (!next) return;

    if (next.style.maxHeight) {
      // Скрыть
      next.style.maxHeight = null;
    } else {
      // Показать
      next.style.maxHeight = next.scrollHeight + "px";
    }
  });
});
