// ----------------Blogs Section----------------
const swiper = document.querySelector('.swiper');
const swipes = document.querySelectorAll('.swipe');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentswipe = 0;

function updateswiper() {
  swiper.style.transform = `translateX(-${currentswipe * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentswipe = (currentswipe + 1) % swipes.length;
  updateswiper();
});

prevBtn.addEventListener('click', () => {
  currentswipe = (currentswipe - 1 + swipes.length) % swipes.length;
  updateswiper();
});
// ----------------Blogs Section----------------
