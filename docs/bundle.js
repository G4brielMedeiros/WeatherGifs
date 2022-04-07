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

/***/ "./src/giphy.js":
/*!**********************!*\
  !*** ./src/giphy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGIFData\": () => (/* binding */ getGIFData)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nfunction getAPIcall(query) {\n    const API_KEY = \"Ra4lvnhwQLsoP0eFieNVyRWwQn2QhROf\";\n    const API = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${query}`;\n    return API;\n}\n\nasync function getGIFData(query) {\n    const response = await fetch(getAPIcall(query), { mode: \"cors\" });\n    const data = await response.json();\n\n    return data.data.images.original.url;\n}\n\n\n//# sourceURL=webpack:///./src/giphy.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _giphy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./giphy */ \"./src/giphy.js\");\n/* harmony import */ var _openWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openWeather */ \"./src/openWeather.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\n\n\nconst searchInputElement = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"search-input\");\nconst searchInputMetricElement = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"metric\");\nconst weatherStatusElement = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-description\");\nconst weatherImgElement = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-gif\");\nconst searchButtonElement = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"search-button\");\nconst weatherTemperatureElement = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-temperature\");\n\nfunction renderWeatherData(data, units) {\n    weatherStatusElement.innerText = data.description;\n\n    const degree = units == \"metric\" ? \" °C\" : \" °F\";\n\n    weatherTemperatureElement.innerText = data.temp + degree;\n    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.log)(data);\n}\n\nfunction renderGIFData(url) {\n    weatherImgElement.src = url;\n    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.log)(url);\n}\n\nasync function search() {\n    weatherStatusElement.innerText = \"loading...\";\n    weatherImgElement.src = \"images/loading.gif\";\n\n    const units = searchInputMetricElement.checked ? \"metric\" : \"imperial\";\n    const city = searchInputElement.value;\n\n    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.log)(units);\n\n    const weather = await (0,_openWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(city, units);\n    const gif = await (0,_giphy__WEBPACK_IMPORTED_MODULE_0__.getGIFData)(weather.title);\n\n    renderGIFData(gif);\n    renderWeatherData(weather, units);\n}\n\nsearchButtonElement.addEventListener(\"click\", search);\n\n(0,_openWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(\"egypt\", \"metric\").then((weather) => {\n    renderWeatherData(weather);\n    (0,_giphy__WEBPACK_IMPORTED_MODULE_0__.getGIFData)(weather.place).then((data) => {\n        renderGIFData(data);\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/openWeather.js":
/*!****************************!*\
  !*** ./src/openWeather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertUnit\": () => (/* binding */ convertUnit),\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData),\n/* harmony export */   \"kelvinToCelsius\": () => (/* binding */ kelvinToCelsius),\n/* harmony export */   \"kelvinToFahrenheit\": () => (/* binding */ kelvinToFahrenheit)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nfunction getAPIcall(city, units) {\n    const API_KEY = \"ca659f3e8873be553c03fadf808cffe3\";\n    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=${units}`;\n    return API;\n}\n\nasync function getWeatherData(city, units = \"standard\") {\n    const response = await fetch(getAPIcall(city, units), { mode: \"cors\" });\n\n    const data = await response.json();\n\n    const formattedData = {\n        place: data.name,\n        temp: data.main.temp,\n        min: data.main.temp_min,\n        max: data.main.temp_max,\n        humidity: data.main.humidity,\n        description: data.weather[0].description,\n        title: data.weather[0].main,\n    };\n    return formattedData;\n}\n\nconst kelvinToCelsius = (temp) => temp - 273.15;\n\nconst kelvinToFahrenheit = (temp) => temp * 1.8 - 459.67;\n\nconst convertUnit = (temp, celsius) =>\n    celsius ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);\n\n\n//# sourceURL=webpack:///./src/openWeather.js?");

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