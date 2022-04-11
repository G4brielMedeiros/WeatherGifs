import { format, fromUnixTime, getDate, getDay, getMonth, getWeek } from "date-fns";
import { getGIFData } from "./giphy";
import { convertUnit, getCoords, getWeatherData, logWeatherData } from "./openWeather";
import {
    getElement as $,
    setText as $text,
    getValue as $valueOf,
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

const getWeekDay = (date) => {
    return weekdays[fromUnixTime(date).getDay()];
};

const formatDate = (date) => {
    return format(fromUnixTime(date), "PPPPp");
};

function renderWeatherData() {
    $text("units", units == "metric" ? "°C" : "°F");
    $text("city", weather.place);
    $text("date", formatDate(weather.date));
    $text("weather-temp", convertUnit(weather.temp, units));
    $text("weather-desc", weather.description);
    $text(
        "weather-min-max",
        `${convertUnit(weather.min, units)} / ${convertUnit(weather.max, units)}`
    );
    $text("weather-feel", `Feels like ${convertUnit(weather.feels, units)}`);

    $text(
        "weather-future-1-min-max",
        `${convertUnit(weather.future[0].min, units)} / ${convertUnit(
            weather.future[0].max,
            units
        )}`
    );

    $text(
        "weather-future-2-min-max",
        `${convertUnit(weather.future[1].min, units)}  / ${convertUnit(
            weather.future[1].max,
            units
        )}`
    );

    $text(
        "weather-future-3-min-max",
        `${convertUnit(weather.future[2].min, units)}  / ${convertUnit(
            weather.future[2].max,
            units
        )}`
    );

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

async function fetchAndRender(city) {
    const coords = await getCoords(city);
    const weatherData = await getWeatherData(coords);
    //const gif = await getGIFData(weather.title);
    //renderGIFData(gif);
    weather = weatherData;
    renderWeatherData();
}

let weather;

function search(search) {
    $("weather-temp").innerText = "loading...";
    $("city").innerText = "loading...";
    $("gif").src = "images/loading.gif";

    //const units = searchInputMetricElement.checked ? "metric" : "imperial";
    const city = normalize($("search-input").value);

    localStorage.setItem("city", city);
    localStorage.setItem("units", units);

    log(units);

    fetchAndRender(city);
}

$("search-form").addEventListener("submit", () => search($valueOf("search-input")));

let city = localStorage.getItem("city") || "egypt";
let units = localStorage.getItem("units") || "metric";
fetchAndRender(city);

$("units").addEventListener("click", (e) => {
    if (e.target.textContent == "°F") {
        e.target.textContent = "°C";
        units = "metric";
    } else {
        e.target.textContent = "°F";
        units = "imperial";
    }

    localStorage.setItem("units", units);
    renderWeatherData();
});
