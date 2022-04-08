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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _giphy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./giphy */ \"./src/giphy.js\");\n/* harmony import */ var _openWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openWeather */ \"./src/openWeather.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\n\n\nconst unitsButtonDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"units\");\nconst searchFormDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"search-form\");\nconst searchInputDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"search-input\");\nconst languageButtonDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"language\");\n\nconst cityDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"city\");\nconst dateDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"date\");\nconst temperatureTodayDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-temp\");\nconst weatherDescriptionDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-desc\");\nconst temperatureMinDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"min\");\nconst temperatureMaxDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"max\");\nconst temperatureFeelDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-feel\");\nconst gifDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"gif\");\n\nconst weatherFuture1IconDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-future-icon-1\");\nconst weatherFuture1MinDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"min-1\");\nconst weatherFuture1MaxDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)('max-1')\nconst weatherFuture1Weekday = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-future-1-weekday\");\n\nconst weatherFuture2IconDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-future-icon-3\");\nconst weatherFuture2MinDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"min-2\");\nconst weatherFuture2MaxDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)('max-2')\nconst weatherFuture2Weekday = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-future-2-weekday\");\n\nconst weatherFuture3IconDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-future-icon-3\");\nconst weatherFuture3MinDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"min-3\");\nconst weatherFuture3MaxDOM = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)('max-3')\nconst weatherFuture3Weekday = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getElement)(\"weather-future-3-weekday\");\n\nfunction renderWeatherData(weather) {\n    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.log)(weather);\n    \n    cityDOM.textContent = weather.place;\n    temperatureTodayDOM.textContent = weather.temp;\n    weatherDescriptionDOM.textContent = weather.description;\n    temperatureMinDOM.textContent = weather.min;\n    temperatureMaxDOM.textContent = weather.max;\n    temperatureFeelDOM.textContent = weather.feels;\n\n    weatherFuture1MinDOM.textContent = weather.future[0].min;\n    weatherFuture2MinDOM.textContent = weather.future[1].min;\n    weatherFuture3MinDOM.textContent = weather.future[2].min;\n\n    weatherFuture1MaxDOM.textContent = weather.future[0].max;\n    weatherFuture2MaxDOM.textContent = weather.future[1].max;\n    weatherFuture3MaxDOM.textContent = weather.future[2].max;\n\n    weatherFuture1Weekday.textContent = weather.future[0].dt;\n    weatherFuture2Weekday.textContent = weather.future[1].dt;\n    weatherFuture3Weekday.textContent = weather.future[2].dt;\n}\n\n// place\n// temp\n// min \n// max\n// feels\n// description\n// future[]: {dt,min,max,}\n\nfunction renderGIFData(url) {\n    weatherImgElement.src = url;\n    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.log)(url);\n}\n\nasync function fetchAndRender(city, units) {\n    const weather = await (0,_openWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(city, units);\n    const gif = await (0,_giphy__WEBPACK_IMPORTED_MODULE_0__.getGIFData)(weather.title);\n    renderGIFData(gif);\n    renderWeatherData(weather);\n}\n\nfunction search() {\n    weatherStatusElement.innerText = \"loading...\";\n    weatherTemperatureElement.innerText = \"loading...\";\n    weatherImgElement.src = \"images/loading.gif\";\n\n    const units = searchInputMetricElement.checked ? \"metric\" : \"imperial\";\n    const city = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.normalize)(searchInputElement.value);\n\n    localStorage.setItem(\"city\", city);\n    localStorage.setItem(\"units\", units);\n\n    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.log)(units);\n\n    fetchAndRender(city, units);\n}\n\n// searchButtonElement.addEventListener(\"click\", search);\n\nlet city = localStorage.getItem(\"city\") || \"brasilia\";\nlet units = localStorage.getItem(\"units\") || \"imperial\";\n\n//fetchAndRender(city, units);\n\n\n(0,_openWeather__WEBPACK_IMPORTED_MODULE_1__.getCoords)('recife').then(coords => {\n    (0,_utility__WEBPACK_IMPORTED_MODULE_2__.log)(coords)\n    ;(0,_openWeather__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(coords, 'metric').then(weather => renderWeatherData(weather))\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/openWeather.js":
/*!****************************!*\
  !*** ./src/openWeather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertUnit\": () => (/* binding */ convertUnit),\n/* harmony export */   \"getCoords\": () => (/* binding */ getCoords),\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData),\n/* harmony export */   \"kelvinToCelsius\": () => (/* binding */ kelvinToCelsius),\n/* harmony export */   \"kelvinToFahrenheit\": () => (/* binding */ kelvinToFahrenheit)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\nconst API_KEY = \"ca659f3e8873be553c03fadf808cffe3\";\n\nfunction getAPIcall(coords, units) {\n    const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=${units}&exclude=hourly,minutely`;\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.log)(API)\n    return API;\n}\n\nasync function getWeatherData(coords, units = \"standard\") {\n    const response = await fetch(getAPIcall(coords, units), { mode: \"cors\" });\n\n    const data = await response.json();\n\n    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.log)(data);\n    const formattedData = {\n        place: coords.city,\n        temp: data.current.temp,\n        min: data.daily[0].temp.min,\n        max: data.daily[0].temp.max,\n        feels: data.current.feels_like,\n        description: data.current.weather[0].description,\n        future: [\n            {\n                dt: data.daily[1].dt,\n                min: data.daily[1].temp.min,\n                max: data.daily[1].temp.max,\n            },\n            {\n                dt: data.daily[2].dt,\n                min: data.daily[2].temp.min,\n                max: data.daily[2].temp.max,\n            },\n            {\n                dt: data.daily[3].dt,\n                min: data.daily[3].temp.min,\n                max: data.daily[3].temp.max,\n            },\n        ]\n    };\n    return formattedData;\n}\n\nasync function getCoords(city) {\n    const response = await fetch(\n        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`\n    );\n    const data = await response.json();\n    return {lat: data[0].lat, lon: data[0].lon, city: data[0].name};\n}\n\nconst kelvinToCelsius = (temp) => temp - 273.15;\n\nconst kelvinToFahrenheit = (temp) => temp * 1.8 - 459.67;\n\nconst convertUnit = (temp, celsius) =>\n    celsius ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);\n\n\n//# sourceURL=webpack:///./src/openWeather.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElement\": () => (/* binding */ getElement),\n/* harmony export */   \"log\": () => (/* binding */ log),\n/* harmony export */   \"normalize\": () => (/* binding */ normalize)\n/* harmony export */ });\nconst log = (log) => console.log(log);\n\nconst getElement = (id) => document.getElementById(id);\n\nconst normalize = (input) => input.toLowerCase().normalize(\"NFD\").replace(/\\p{Diacritic}/gu, \"\");\n\n//# sourceURL=webpack:///./src/utility.js?");

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