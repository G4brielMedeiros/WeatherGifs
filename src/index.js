import { getGIFData } from "./giphy";
import { getCoords, getWeatherData, logWeatherData } from "./openWeather";
import {
    getElement as $get,
    setText as $setText,
    getValue as $getValue,
    listen as $setListen,
    log,
    normalize,
} from "./utility";

function renderWeatherData(weather) {
    log(weather);

    $setText("city", weather.place);
    $setText("date", weather.date);
    $setText("weather-temp", weather.temp);
    $setText("weather-desc", weather.description);
    $setText("min", weather.min);
    $setText("max", weather.max);
    $setText("weather-feel", weather.feels);

    $setText("min-1", weather.future[0].min);
    $setText("min-2", weather.future[1].min);
    $setText("min-3", weather.future[2].min);

    $setText("max-1", weather.future[0].max);
    $setText("max-2", weather.future[1].max);
    $setText("max-3", weather.future[2].max);

    $setText("weather-future-1-weekday", weather.future[0].dt);
    $setText("weather-future-2-weekday", weather.future[1].dt);
    $setText("weather-future-3-weekday", weather.future[2].dt);
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
    const coords = await getCoords(city);
    const weather = await getWeatherData(coords, units);
    //const gif = await getGIFData(weather.title);
    //renderGIFData(gif);
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

let city = localStorage.getItem("city") || "brasilia";
let units = localStorage.getItem("units") || "imperial";

$setListen($get("search-form"), "submit", () =>
    fetchAndRender($getValue("search-input"))
);
