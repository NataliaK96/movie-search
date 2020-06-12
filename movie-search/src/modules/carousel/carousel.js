import { response } from '../API/response';
import API_DATA from '../API/API_DATA';
import addSlides from './addSlides';

export const swiper = new Swiper('.swiper-container', {
  loopedSlides: 0,
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 1,
  simulateTouch: true,
  loop: false,
  preloadImages: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  on: {
    reachEnd: () => {
      const sliderWrapper = document.querySelector('.swiper-wrapper');
      let page = API_DATA.loadingPage;
      page += 1;
      if (sliderWrapper.children.length === 0 || page >= API_DATA.maxPage) {
        return;
      }
      response(API_DATA.searchKey, page).then((data) => {
        addSlides(data);
      });
    },
  },
});
