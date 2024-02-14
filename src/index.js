import '../styles/index.css';

// const slider = document.getElementById("slider");
// const slides = document.querySelectorAll(".player__container");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// // устанавливаем начальные значения
// let currentslide = 0;
// const slidestoshow = 3;
// const slidescount = slides.length;

// const showslides = () => {
//     // скрываем все слайды
//     slides.forEach((slide) => {
//       slide.style.display = "none";
//     });
    
//     // отображаем нужное количество слайдов
//     for (let i = currentslide; i < currentslide + slidestoshow; i++) {
//       if (slides[i]) {
//         slides[i].style.display = "";
//       }
//     }
    
//     // блокируем или разблокируем кнопку prevbtn
//     if (currentslide === 0) {
//       prevBtn.disabled = true;
//     } else {
//       prevBtn.disabled = false;
//     }
    
//     // блокируем или разблокируем кнопку nextbtn
//     if (currentslide + slidestoshow >= slidescount) {
//       nextBtn.disabled = true;
//     } else {
//       nextBtn.disabled = false;
//     }
//   };

// // инициализация слайдера

// showslides();

// // обработчик для кнопки "previous"
// prevBtn.addEventListener("click", () => {
//     currentslide -= slidestoshow;
//     if (currentslide < 0) {
//       currentslide = 0;
//     }
//     showslides();
//     document.querySelector(".players__count").textContent = "3";
//   });

// // обработчик для кнопки "next"
// nextBtn.addEventListener("click", () => {
//     currentslide += slidestoshow;
//     if (currentslide >= slidescount) {
//       currentslide = slidescount - slidestoshow;
//     }
//     showslides();
//     document.querySelector(".players__count").textContent = "6";
//   });

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

  // обработчики событий для кнопок "вперед" и "назад"
  nextbtn.addEventListener("click", nextslide);
  prevbtn.addEventListener("click", prevslide);
});
