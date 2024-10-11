// JavaScript部分
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);  // 3秒ごとにスライド
