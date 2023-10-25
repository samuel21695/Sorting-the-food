const foodImages = [
  '🍕', '🍔', '🍟', '🌭', '🍿', '🧂', '🥓', '🥚', '🍳', '🧇', '🥞', '🧈', '🍞', '🥐', '🥨', '🥯'
  // 원하는 만큼 음식 추가
]

const foodImageElement = document.getElementById('food-image');
const likeFoodsElement = document.getElementById('like-foods');
const dislikeFoodsElement = document.getElementById('dislike-foods');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

let currentIndex = 0;

function randomFood() {
  if (foodImages.length === 0) {
    foodImageElement.innerHTML = "끝"; // 더 이상 출력할 것이 없는 경우 "끝" 출력
    yesButton.disabled = true; // "YES" 버튼 비활성화
    noButton.disabled = true; // "no" 버튼 비활성화
    return;
  }
  
  const randomIndex = Math.floor(Math.random() * foodImages.length);
  const randomFoodImage = foodImages[randomIndex];
  foodImageElement.innerHTML = randomFoodImage;
  currentIndex = randomIndex;
}

randomFood();

// yesㅠuttonClick과 noButtonClick의 기능 하나로 합침
function buttonClick(button) {
  if (foodImage.length === 0) {
    return;
  }
  const currentImage = foodImages[currentIndex];

  if (button) {
    likeFoodsElement.innerHTML += currentImage;
  } else {
    dislikeFoodsElement.innerHTML += currentImage;
  }

  foodImages.splice(currentIndex, 1);
  randomFood();
}

function yesbuttonClick () {
  if (foodImages.length === 0) {
    return;
  }
  const currentImage = foodImages[currentIndex];
  likeFoodsElement.innerHTML += currentImage;

  // 이미 처리한 이미지 배열에서 제거
  foodImages.splice(currentIndex, 1);
  randomFood();
};

function noButtonClick () {
  if (foodImages.length === 0) {
    return;
  }
  const currentImage = foodImages[currentIndex];
  dislikeFoodsElement.innerHTML += currentImage;

  // 이미 처리한 이미지 배열에서 제거
  foodImages.splice(currentImage, 1);
  randomFood();
}

// "YES" 버튼 클릭 이벤트 리스너 등록
yesButton.addEventListener('click', yesbuttonClick);

// "NO" 버튼 클릭 이벤트 리스너 등록
noButton.addEventListener('click', noButtonClick);