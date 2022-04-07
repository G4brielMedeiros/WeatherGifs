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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openWeather */ \"./src/openWeather.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\n\nasync function renderWeatherData(city) {\n    const data = await (0,_openWeather__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(city);\n\n    weatherStatusElement.innerText = data.weather[0].main;\n    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.log)(data.weather[0].main);\n}\n\nconst searchElement = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.getElement)(\"search-form\");\nconst searchInputElement = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.getElement)(\"search-input\");\nconst weatherStatusElement = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.getElement)(\"weather-status\");\n\nsearchElement.addEventListener(\"submit\", () => {\n    renderWeatherData(searchInputElement.value);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/openWeather.js":
/*!****************************!*\
  !*** ./src/openWeather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData),\n/* harmony export */   \"logWeatherData\": () => (/* binding */ logWeatherData)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nfunction getAPIcall(city) {\n    const API_KEY = \"ca659f3e8873be553c03fadf808cffe3\";\n    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;\n    return API;\n}\n\nasync function getWeatherData(city) {\n    const response = await fetch(getAPIcall(city), { mode: \"cors\" });\n\n    const weatherData = await response.json();\n\n    return weatherData;\n}\n\nasync function logWeatherData(city) {\n    const data = await getWeatherData(city);\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.log)(data);\n\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.log)(data.name);\n\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.log)(data.weather[0].main)\n}\n\n\n\n\n//# sourceURL=webpack:///./src/openWeather.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElement\": () => (/* binding */ getElement),\n/* harmony export */   \"log\": () => (/* binding */ log)\n/* harmony export */ });\nconst log = (log) => console.log(log);\n\nconst getElement = (id) => document.getElementById(id);\n\n\n//# sourceURL=webpack:///./src/utility.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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