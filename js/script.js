const foodImages = [
  '🍕', '🍔', '🍟', '🌭', '🍿', '🧂', '🥓', '🥚'
  // 원하는 만큼 음식 추가
]

const foodImageElement = document.getElementById('food-image');
const likeFoodsElement = document.getElementById('like-foods');
const dislikeFoodsElement = document.getElementById('dislike-foods');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no-button');

let currentIndex = 0;

function randomFood() {
  const randomIndex = Math.floor(Math.random() * foodImages.length);
  const randomFoodImage = foodImages[randomIndex];
  foodImageElement.innerHTML = randomFoodImage;
  currentIndex = randomIndex;
}

randomFood();

yesButton.addEventListener('click', () => {
  const currentImage = foodImages[currentIndex];
  likeFoodsElement.innerHTML += currentImage;
  randomFood();
});