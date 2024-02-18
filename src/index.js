import '../styles/index.css';

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("slider"); // получаем элемент слайдера
  const prevbtn = document.getElementById("prevBtn"); // получаем кнопку "назад"
  const nextbtn = document.getElementById("nextBtn"); // получаем кнопку "вперед"
  const playercount = document.getElementsByClassName("players__count")[0]; // получаем элемент счетчика участников

  let currentindex = 0; // индекс текущей позиции слайдера

  // функция для обновления счетчика участников
  function updateplayercount() {
    playercount.innerText = currentindex + 3;
  }

  // функция для переключения слайдов вперед
  function nextslide() {
    if (currentindex < slider.children.length - 3) {
      slider.children[currentindex].classList.add("hide-slide");
      currentindex++;
      slider.children[currentindex + 2].classList.remove("hide-slide");
      updateplayercount();
    }
  }

  // функция для переключения слайдов назад
  function prevslide() {
    if (currentindex > 0) {
      slider.children[currentindex + 2].classList.add("hide-slide");
      currentindex--;
      slider.children[currentindex].classList.remove("hide-slide");
      updateplayercount();
    }
  }

  nextbtn.addEventListener("click", nextslide);
  prevbtn.addEventListener("click", prevslide);
});

const stagescontainer = document.querySelector('.stages__container375');
const stageelements = document.querySelectorAll('.stage375');
const prevbutton = document.getElementById("prevBtn375");
const nextbutton = document.getElementById("nextBtn375");
const dots = document.querySelectorAll('.dot');

let currentindex = 0;
stageelements.forEach((stage, index) => {
  if (index !== currentindex) {
    stage.classList.add('hide__stages');
  }
});

nextbutton.addEventListener('click', () => {
  if (currentindex === stageelements.length - 1) {
    return;
  }

  stageelements[currentindex].classList.add('hide__stages');
  dots[currentindex].classList.add('dot__gray');
  currentindex++;
  stageelements[currentindex].classList.remove('hide__stages');
  dots[currentindex].classList.remove('dot__gray');
});

prevbutton.addEventListener('click', () => {
  if (currentindex === 0) {
    return;
  }

  stageelements[currentindex].classList.add('hide__stages');
  dots[currentindex].classList.add('dot__gray');
  currentindex--;
  stageelements[currentindex].classList.remove('hide__stages');
  dots[currentindex].classList.remove('dot__gray');
});



document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("slider375"); // получаем элемент слайдера
  const prevBtn = document.getElementById("prevBtn375P"); // получаем кнопку "назад"
  const nextBtn = document.getElementById("nextBtn375P"); // получаем кнопку "вперед"
  const playerCount = document.getElementsByClassName("players__count375")[0]; // получаем элемент счетчика участников

  let currentIndex = 0; // индекс текущей позиции слайдера

  // функция для обновления счетчика участников
  function updatePlayerCount() {
    playerCount.innerText = currentIndex + 1;
  }

  // функция для переключения слайдов вперед
  function nextSlide() {
    if (currentIndex < slider.children.length - 1) {
      slider.children[currentIndex].classList.add("hide-slide375");
      currentIndex++;
      slider.children[currentIndex].classList.remove("hide-slide375");
      updatePlayerCount();
    }
  }

  // функция для переключения слайдов назад
  function prevSlide() {
    if (currentIndex > 0) {
      slider.children[currentIndex].classList.add("hide-slide375");
      currentIndex--;
      slider.children[currentIndex].classList.remove("hide-slide375");
      updatePlayerCount();
    }
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});