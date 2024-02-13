import '../styles/index.css';

const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".player__container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// устанавливаем начальные значения
let currentslide = 0;
const slidestoshow = 3;
const slidescount = slides.length;

const showslides = () => {
    // скрываем все слайды
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    
    // отображаем нужное количество слайдов
    for (let i = currentslide; i < currentslide + slidestoshow; i++) {
      if (slides[i]) {
        slides[i].style.display = "block";
      }
    }
    
    // блокируем или разблокируем кнопку prevbtn
    if (currentslide === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
    
    // блокируем или разблокируем кнопку nextbtn
    if (currentslide + slidestoshow >= slidescount) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
  };

// инициализация слайдера
showslides();

// обработчик для кнопки "previous"
prevBtn.addEventListener("click", () => {
    currentslide -= slidestoshow;
    if (currentslide < 0) {
      currentslide = 0;
    }
    showslides();
    document.querySelector(".players__count").textContent = "3";
  });

// обработчик для кнопки "next"
nextBtn.addEventListener("click", () => {
    currentslide += slidestoshow;
    if (currentslide >= slidescount) {
      currentslide = slidescount - slidestoshow;
    }
    showslides();
    document.querySelector(".players__count").textContent = "6";
  });
