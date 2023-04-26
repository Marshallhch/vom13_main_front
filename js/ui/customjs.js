/*-------- HEADER HIDE AND SHOW --------*/
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 150) {
    if (prevScrollpos > currentScrollPos) {
      header.style.top = 0;
    } else {
      header.style.top = -100 + "%";
    }
    prevScrollpos = currentScrollPos; // 마우스 이동 후 스크롤 위치값 재할당
  }
});

/*-------- BEST ITEMS SLIDE --------*/
const bestArtSwiper = new Swiper(".best-image-wrapper .swiper", {
  slidesPerView: 4,
  spaceBetween: 15,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
