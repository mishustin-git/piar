const swiper1 = new Swiper('.cases-group-name .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:7,
    freeMode: true,
    autoplay:{
        delay:1500,
        // Проконсультироваться У Сережи по поводу скорости
    }
  });
  const swiper2 = new Swiper('.cases-content .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:2,
    // freeMode: true,
    // autoplay:{
    //     delay:1500,
    //     // Проконсультироваться У Сережи по поводу скорости
    // }
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
  });
  swiper3 = new Swiper('.our-reviews .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView:2,
    spaceBetween: 21,
    // centeredSlides:true,
    // centeredSlidesBounds:true,
    freeMode:true,
    // virtualTranslate:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // swiper3.translate = 420;
  // swiper3.setTranslate("420px");
