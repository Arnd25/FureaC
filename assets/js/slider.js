"use strict";

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

const blogSwiper = new Swiper(".blog__swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})

const testimonial = new Swiper(".testimonial__swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    
})

