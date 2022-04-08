import { getGIFData } from "./giphy";
import { getCoords, getWeatherData, logWeatherData } from "./openWeather";
import { getElement as $, log, normalize } from "./utility";

function renderWeatherData(weather) {
    log(weather);

    $("city").textContent = weather.place;
    $("date").textContent = weather.date;
    $("weather-temp").textContent = weather.temp;
    $("weather-desc").textContent = weather.description;
    $("min").textContent = weather.min;
    $("max").textContent = weather.max;
    $("weather-feel").textContent = weather.feels;

    $("min-1").textContent = weather.future[0].min;
    $("min-2").textContent = weather.future[1].min;
    $("min-3").textContent = weather.future[2].min;

    $("max-1").textContent = weather.future[0].max;
    $("max-2").textContent = weather.future[1].max;
    $("max-3").textContent = weather.future[2].max;

    $("weather-future-1-weekday").textContent = weather.future[0].dt;
    $("weather-future-2-weekday").textContent = weather.future[1].dt;
    $("weather-future-3-weekday").textContent = weather.future[2].dt;
}

// place
// date
// temp
// min
// max
// feels
// description
// future[]: {dt,min,max,}

function renderGIFData(url) {
    weatherImgElement.src = url;
    log(url);
}

async function fetchAndRender(city, units) {
    const weather = await getWeatherData(city, units);
    const gif = await getGIFData(weather.title);
    renderGIFData(gif);
    renderWeatherData(weather);
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

getCoords("recife").then((coords) => {
    log(coords);
    getWeatherData(coords, "metric").then((weather) => renderWeatherData(weather));
});
