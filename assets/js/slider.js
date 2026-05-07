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

// 2. Product Swiper Column 3
const productColumn3Swiper = new Swiper(".product__swiper--column3", {
  slidesPerView: 3,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    280: { slidesPerView: 2, spaceBetween: 20 },
    0: { slidesPerView: 1 },
  },
  grid: {
    fill: "row",
    rows: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 3. Product Swiper Column 4
const productColumn4Swiper = new Swiper(".product__swiper--column4", {
  slidesPerView: 4,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    280: { slidesPerView: 2, spaceBetween: 20 },
    0: { slidesPerView: 1 },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 4. Product Swiper Column 5
const productColumn5Swiper = new Swiper(".product__swiper--column5", {
  slidesPerView: 5,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: { slidesPerView: 5 },
    992: { slidesPerView: 4 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    280: { slidesPerView: 2, spaceBetween: 20 },
    0: { slidesPerView: 1 },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 5. Product List Column 3
const productListColumn3Swiper = new Swiper(".product__list--column3", {
  slidesPerView: 3,
  clickable: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    450: { slidesPerView: 3, spaceBetween: 20 },
    280: { slidesPerView: 2, spaceBetween: 20 },
    0: { slidesPerView: 1 },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 6. Testimonial Swiper Activation
const testimonialActivationSwiper = new Swiper(".testimonial__swiper--activation", {
  slidesPerView: 2,
  loop: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {
    768: { spaceBetween: 30, slidesPerView: 2 },
    576: { slidesPerView: 1, spaceBetween: 20 },
    0: { slidesPerView: 1 },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


