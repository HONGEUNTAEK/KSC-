    // 메인 배너 Swiper
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
        nextEl: ".main-next",
        prevEl: ".main-prev",
      },
    });

    // 제품 Swiper
    var swiperProduct = new Swiper(".productSwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".productSwiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".product-next",
        prevEl: ".product-prev",
      },
    });