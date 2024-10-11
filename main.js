// JavaScript部分
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);  // 3秒ごとにスライド



// メニューボタンとメニューアイテムを取得
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');

// メニューボタンがクリックされたときの処理
menuBtn.addEventListener('click', () => {
  // メニューアイテムの表示・非表示を切り替える
  if (menuItems.style.display === 'block') {
    menuItems.style.display = 'none';
  } else {
    menuItems.style.display = 'block';
  }
});

// メニュー項目がクリックされたときにメニューを閉じる（オプション）
const menuLinks = document.querySelectorAll('.menu-items a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuItems.style.display = 'none';
  });
});
