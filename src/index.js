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
    return format(fromUnixTime(date), "PPPPp");
};

function renderWeatherData(weather) {
    log(weather);

    $text("city", weather.place);
    $text("date", formatDate(weather.date));
    $text("weather-temp", weather.temp + "°C");
    $text("weather-desc", weather.description);
    $text("weather-min-max", `${weather.min}°C / ${weather.max}°C`)
    $text("weather-feel", `Feels like ${weather.feels}°C`);
    
    $text("weather-future-1-min-max", 
    `${weather.future[0].min} °C / ${weather.future[0].max} °C`)
    
    $text("weather-future-2-min-max", 
    `${weather.future[1].min} °C / ${weather.future[1].max} °C`)

    $text("weather-future-3-min-max", 
    `${weather.future[2].min} °C / ${weather.future[2].max} °C`)

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

function search(search) {
    $("weather-temp").innerText = "loading...";
    $("city").innerText = "loading...";
    $("gif").src = "images/loading.gif";

    //const units = searchInputMetricElement.checked ? "metric" : "imperial";
    const city = normalize($("search-input").value);

    localStorage.setItem("city", city);
    localStorage.setItem("units", units);

    log(units);

    fetchAndRender(city, units);
}



$setListen($("search-form"), "submit", () => search($valueOf("search-input")));


let city = localStorage.getItem("city") || "egypt";
let units = localStorage.getItem("units") || "metric";
fetchAndRender(city);
