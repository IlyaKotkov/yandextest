/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var slider = document.getElementById(\"slider\"); // получаем элемент слайдера\n  var prevbtn = document.getElementById(\"prevBtn\"); // получаем кнопку \"назад\"\n  var nextbtn = document.getElementById(\"nextBtn\"); // получаем кнопку \"вперед\"\n  var playercount = document.getElementsByClassName(\"players__count\")[0]; // получаем элемент счетчика участников\n\n  var currentindex = 0; // индекс текущей позиции слайдера\n\n  // функция для обновления счетчика участников\n  function updateplayercount() {\n    playercount.innerText = currentindex + 3;\n  }\n\n  // функция для переключения слайдов вперед\n  function nextslide() {\n    if (currentindex < slider.children.length - 3) {\n      slider.children[currentindex].classList.add(\"hide-slide\");\n      currentindex++;\n      slider.children[currentindex + 2].classList.remove(\"hide-slide\");\n      updateplayercount();\n    }\n  }\n\n  // функция для переключения слайдов назад\n  function prevslide() {\n    if (currentindex > 0) {\n      slider.children[currentindex + 2].classList.add(\"hide-slide\");\n      currentindex--;\n      slider.children[currentindex].classList.remove(\"hide-slide\");\n      updateplayercount();\n    }\n  }\n  nextbtn.addEventListener(\"click\", nextslide);\n  prevbtn.addEventListener(\"click\", prevslide);\n});\nvar stagescontainer = document.querySelector('.stages__container375');\nvar stageelements = document.querySelectorAll('.stage375');\nvar prevbutton = document.getElementById(\"prevBtn375\");\nvar nextbutton = document.getElementById(\"nextBtn375\");\nvar dots = document.querySelectorAll('.dot');\nvar currentindex = 0;\nstageelements.forEach(function (stage, index) {\n  if (index !== currentindex) {\n    stage.classList.add('hide__stages');\n  }\n});\nnextbutton.addEventListener('click', function () {\n  if (currentindex === stageelements.length - 1) {\n    return;\n  }\n  stageelements[currentindex].classList.add('hide__stages');\n  dots[currentindex].classList.add('dot__gray');\n  currentindex++;\n  stageelements[currentindex].classList.remove('hide__stages');\n  dots[currentindex].classList.remove('dot__gray');\n});\nprevbutton.addEventListener('click', function () {\n  if (currentindex === 0) {\n    return;\n  }\n  stageelements[currentindex].classList.add('hide__stages');\n  dots[currentindex].classList.add('dot__gray');\n  currentindex--;\n  stageelements[currentindex].classList.remove('hide__stages');\n  dots[currentindex].classList.remove('dot__gray');\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var slider = document.getElementById(\"slider375\"); // получаем элемент слайдера\n  var prevBtn = document.getElementById(\"prevBtn375P\"); // получаем кнопку \"назад\"\n  var nextBtn = document.getElementById(\"nextBtn375P\"); // получаем кнопку \"вперед\"\n  var playerCount = document.getElementsByClassName(\"players__count375\")[0]; // получаем элемент счетчика участников\n\n  var currentIndex = 0; // индекс текущей позиции слайдера\n\n  // функция для обновления счетчика участников\n  function updatePlayerCount() {\n    playerCount.innerText = currentIndex + 1;\n  }\n\n  // функция для переключения слайдов вперед\n  function nextSlide() {\n    if (currentIndex < slider.children.length - 1) {\n      slider.children[currentIndex].classList.add(\"hide-slide375\");\n      currentIndex++;\n      slider.children[currentIndex].classList.remove(\"hide-slide375\");\n      updatePlayerCount();\n    }\n  }\n\n  // функция для переключения слайдов назад\n  function prevSlide() {\n    if (currentIndex > 0) {\n      slider.children[currentIndex].classList.add(\"hide-slide375\");\n      currentIndex--;\n      slider.children[currentIndex].classList.remove(\"hide-slide375\");\n      updatePlayerCount();\n    }\n  }\n  nextBtn.addEventListener(\"click\", nextSlide);\n  prevBtn.addEventListener(\"click\", prevSlide);\n});\n\n//# sourceURL=webpack://yandextest/./src/index.js?");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandextest/./styles/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;