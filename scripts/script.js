
let mediaQuery = window.matchMedia('(max-width: 480px)');
let swiper;

function checkWidth() {
  if (mediaQuery.matches) {
    if (!swiper) {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        effect: 'slide',
        transition: {
          speed: 2000, // Время в миллисекундах
          ease: 'ease', // Кривая скорости
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
  }
}

checkWidth(); // Запускаем функцию при загрузке страницы
setInterval(checkWidth, 2000); // Проверяем ширину каждые 500 миллисекунд