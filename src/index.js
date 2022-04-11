import { format, fromUnixTime, getDate, getDay, getMonth, getWeek } from "date-fns";
import { getGIFData } from "./giphy";
import { getCoords, getWeatherData, logWeatherData } from "./openWeather";
import {
    getElement as $,
    setText as $text,
    getValue as $valueOf,
    listen as $setListen,
    log,
    normalize,
} from "./utility";

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const getWeekDay = (date) => {return weekdays[fromUnixTime(date).getDay()]}

const formatDate = (date) => {
    const string = format(fromUnixTime(date), "PPPPpppp");
    return string.slice(0, string.indexOf(" at"));
};
function renderWeatherData(weather) {
    log(weather);

    $text("city", weather.place);
    $text("date", formatDate(weather.date));
    $text("weather-temp", weather.temp + "°C");
    $text("weather-desc", weather.description);
    $text("min", weather.min);
    $text("max", weather.max);
    $text("weather-feel", `Feels like ${weather.feels}°C`);

    $text("min-1", weather.future[0].min);
    $text("min-2", weather.future[1].min);
    $text("min-3", weather.future[2].min);

    $text("max-1", weather.future[0].max);
    $text("max-2", weather.future[1].max);
    $text("max-3", weather.future[2].max);

    $text("weather-future-1-weekday", getWeekDay(weather.future[0].dt));
    $text("weather-future-2-weekday", getWeekDay(weather.future[1].dt));
    $text("weather-future-3-weekday", getWeekDay(weather.future[2].dt));
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

$setListen($("search-form"), "submit", () => fetchAndRender($valueOf("search-input")));

fetchAndRender(city);
