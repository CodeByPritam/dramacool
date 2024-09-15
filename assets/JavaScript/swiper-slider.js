// Swiper Slider
const progressCircle = document.querySelector(".autoplay-progress svg");

var swiper = new Swiper(".swiperContainer", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".bullet-pagination",
        clickable: true
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
        }
    }
});