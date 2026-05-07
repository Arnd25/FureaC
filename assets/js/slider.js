"use strict";

// 1. Hero Slider
const heroSwiper = new Swiper(".hero", {
  slidesPerView: 1,
  loop: true,
  clickable: true,
  effect: "fade",
  speed: 500,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const instagramSwiper = new Swiper(".instagram", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    clickable: true,
    breakpoints: {
        600: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 6
        },
        1200: {
            slidesPerView: 7
        },
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

