import { getGIFData } from "./giphy";
import { getCoords, getWeatherData, logWeatherData } from "./openWeather";
import { getElement as $, log, normalize } from "./utility";

const unitsButtonDOM = $("units");
const searchFormDOM = $("search-form");
const searchInputDOM = $("search-input");
const languageButtonDOM = $("language");
const cityDOM = $("city");
const dateDOM = $("date");
const temperatureTodayDOM = $("weather-temp");
const weatherDescriptionDOM = $("weather-desc");
const temperatureMinDOM = $("min");
const temperatureMaxDOM = $("max");
const temperatureFeelDOM = $("weather-feel");
const gifDOM = $("gif");

const weatherFuture1IconDOM = $("weather-future-icon-1");
const weatherFuture1MinMaxDOM = $("weather-future-1-min-max");
const weatherFuture1Weekday = $("weather-future-1-weekday");

const weatherFuture2IconDOM = $("weather-future-icon-3");
const weatherFuture2MinMaxDOM = $("weather-future-3-min-max");
const weatherFuture2Weekday = $("weather-future-3-weekday");

const weatherFuture3IconDOM = $("weather-future-icon-3");
const weatherFuture3MinMaxDOM = $("weather-future-3-min-max");
const weatherFuture3Weekday = $("weather-future-3-weekday");

function renderWeatherData(weather, units) {
    weatherStatusElement.innerText = weather.description;
    searchInputElement.placeholder = weather.place;
    const degree = units == "metric" ? " °C" : " °F";

    weatherTemperatureElement.innerText = weather.temp + degree;
    log(weather);
}

function renderGIFData(url) {
    weatherImgElement.src = url;
    log(url);
}

async function fetchAndRender(city, units) {
    const weather = await getWeatherData(city, units);
    const gif = await getGIFData(weather.title);
    renderGIFData(gif);
    renderWeatherData(weather, units);
}

function search() {
    weatherStatusElement.innerText = "loading...";
    weatherTemperatureElement.innerText = "loading...";
    weatherImgElement.src = "images/loading.gif";

    const units = searchInputMetricElement.checked ? "metric" : "imperial";
    const city = normalize(searchInputElement.value);

    localStorage.setItem("city", city);
    localStorage.setItem("units", units);

    log(units);

    fetchAndRender(city, units);
}

// searchButtonElement.addEventListener("click", search);

let city = localStorage.getItem("city") || "brasilia";
let units = localStorage.getItem("units") || "imperial";

//fetchAndRender(city, units);


getCoords('recife').then(coords => {
    log(coords)
    getWeatherData(coords, 'metric').then(weather => log(weather))
})