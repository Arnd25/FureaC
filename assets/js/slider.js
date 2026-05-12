
export function sliders() {
  
  const heroSwiper = new Swiper(".hero", {
    slidesPerView: 1,
    loop: true,
    clickable: true,
    effect: "fade",
    speed: 500,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
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
        1440.98: {
          slidesPerView: 8,
        },
        1140.98: {
          slidesPerView: 8,
        },
        768.98: {
          slidesPerView: 5,
        },
        520.98: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  })

  const blogSwiper = new Swiper(".blog__swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1140.98: {
          slidesPerView: 3,
        },
        768.98: {
          slidesPerView: 2,
        },
      },
  })

  const testimonial = new Swiper(".testimonial__swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768.98: { slidesPerView: 2},
      },
  })
}
