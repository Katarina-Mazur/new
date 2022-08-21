const btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', function() {

  document.body.classList.toggle('dark-theme');  
});


//слайдер
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
  