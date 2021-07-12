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
    spaceBetween: 25,
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
  const swiper3 = new Swiper('.our-reviews .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView:2,
    spaceBetween: 21,
    allowTouchMove:false,
    // centeredSlides:true,
    // centeredSlidesBounds:true,
    freeMode:true,
    // virtualTranslate:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const swiper4 = new Swiper('.gallery .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView:1,
    observer: true,
    observeParents: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });