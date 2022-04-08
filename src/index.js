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
const weatherFuture1MinDOM = $("min-1");
const weatherFuture1MaxDOM = $("max-1");
const weatherFuture1Weekday = $("weather-future-1-weekday");

const weatherFuture2IconDOM = $("weather-future-icon-3");
const weatherFuture2MinDOM = $("min-2");
const weatherFuture2MaxDOM = $("max-2");
const weatherFuture2Weekday = $("weather-future-2-weekday");

const weatherFuture3IconDOM = $("weather-future-icon-3");
const weatherFuture3MinDOM = $("min-3");
const weatherFuture3MaxDOM = $("max-3");
const weatherFuture3Weekday = $("weather-future-3-weekday");

function renderWeatherData(weather) {
    log(weather);

    cityDOM.textContent = weather.place;
    dateDOM.textContent = weather.date;
    temperatureTodayDOM.textContent = weather.temp;
    weatherDescriptionDOM.textContent = weather.description;
    temperatureMinDOM.textContent = weather.min;
    temperatureMaxDOM.textContent = weather.max;
    temperatureFeelDOM.textContent = weather.feels;

    weatherFuture1MinDOM.textContent = weather.future[0].min;
    weatherFuture2MinDOM.textContent = weather.future[1].min;
    weatherFuture3MinDOM.textContent = weather.future[2].min;

    weatherFuture1MaxDOM.textContent = weather.future[0].max;
    weatherFuture2MaxDOM.textContent = weather.future[1].max;
    weatherFuture3MaxDOM.textContent = weather.future[2].max;

    weatherFuture1Weekday.textContent = weather.future[0].dt;
    weatherFuture2Weekday.textContent = weather.future[1].dt;
    weatherFuture3Weekday.textContent = weather.future[2].dt;
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
