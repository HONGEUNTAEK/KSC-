// 메인 배너용 Swiper
var swiperMain = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mySwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper .swiper-button-prev",
  },
});

// 제품 카드용 Swiper
var swiperProduct = new Swiper(".productSwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".productSwiper .swiper-button-next",
    prevEl: ".productSwiper .swiper-button-prev",
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
});