import { getGIFData } from "./giphy";
import { getWeatherData, logWeatherData } from "./openWeather";
import { getElement, log, normalize } from "./utility";

// const searchInputElement = getElement("search-input");
// const searchInputMetricElement = getElement("metric");
// const weatherStatusElement = getElement("weather-description");
// const weatherImgElement = getElement("weather-gif");
// const searchButtonElement = getElement("search-button");
// const weatherTemperatureElement = getElement("weather-temperature");

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

    localStorage.setItem('city', city);
    localStorage.setItem('units', units);

    log(units);

    fetchAndRender(city, units);
}

// searchButtonElement.addEventListener("click", search);

let city = localStorage.getItem('city') || "brasilia";
let units = localStorage.getItem('units') || "imperial";

//fetchAndRender(city, units);

