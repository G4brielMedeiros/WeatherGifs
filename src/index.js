import { format, fromUnixTime } from "date-fns";
import { getGIFData } from "./giphy";
import { convertUnit, getCoords, getWeatherData } from "./openWeather";
import { $, $text, $valueOf, normalize } from "./utility";

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let weather;
let city = localStorage.getItem("city") || "egypt";
let units = localStorage.getItem("units") || "metric";

const getWeekDay = (date) => weekdays[fromUnixTime(date).getDay()];

const formatDate = (date) => format(fromUnixTime(date), "PPPPp");

const renderGIFData = (url) => $("gif").src = url;

function save() {
    localStorage.setItem("city", city);
    localStorage.setItem("units", units);
}

function loading() {
    $("search-input").value = ""
    $text("weather-temp", "loading...");
    $text("city", "loading...");
    $text("future-1-min-max", "loading...");
    $text("future-2-min-max", "loading...");
    $text("future-3-min-max", "loading...");
    $("gif").src = "images/loading.gif";
}

function renderWeatherData() {

    if (weather.temp > 300) {
        $("body").classList.remove("cold");
        $("body").classList.add("warm");
    } else {
        $("body").classList.remove("warm");
        $("body").classList.add("cold");
    }

    $text("units", units == "metric" ? "°C" : "°F");
    $text("city", weather.place);
    $text("date", formatDate(weather.date));
    $text("weather-temp", convertUnit(weather.temp, units));
    $text("weather-desc", weather.description);
    $text("weather-feel", `Feels like ${convertUnit(weather.feels, units)}`);

    $text("weather-min-max",
        `${convertUnit(weather.min, units)} / ${convertUnit(weather.max, units)}`);

    $text("future-1-min-max",
        `${convertUnit(weather.future[0].min, units)} / ${convertUnit(weather.future[0].max,units)}`);

    $text("future-2-min-max",
        `${convertUnit(weather.future[1].min, units)}  / ${convertUnit(weather.future[1].max,units)}`);

    $text("future-3-min-max",
        `${convertUnit(weather.future[2].min, units)}  / ${convertUnit(weather.future[2].max,units)}`);

    $text("future-1-weekday", getWeekDay(weather.future[0].dt));
    $text("future-2-weekday", getWeekDay(weather.future[1].dt));
    $text("future-3-weekday", getWeekDay(weather.future[2].dt));
}

async function fetchAndRender(city) {
    try {
        const coords = await getCoords(city);
        weather = await getWeatherData(coords);
        const gif = await getGIFData(weather.description);
        renderGIFData(gif);
        renderWeatherData();
    } catch (error) {
        handleError();
    }
}

function search(search) {
    loading();
    fetchAndRender(search);
    save();
}

$("search-form").addEventListener("submit", () => search(normalize($valueOf("search-input"))));

$("units").addEventListener("click", (e) => {
    if (e.target.textContent == "°F") {
        e.target.textContent = "°C";
        units = "metric";
    } else {
        e.target.textContent = "°F";
        units = "imperial";
    }

    save();
    renderWeatherData();
});


fetchAndRender(city);


function handleError() {
    $text("city", "What?");
    $text("weather-temp", "I can't find this city.")
    $text("units", "---");
    $text("date", "---");
    $text("weather-desc", "---");
    $text("weather-feel", "---");
    $text("weather-min-max", "---");
    $text("future-1-min-max", "---");
    $text("future-2-min-max", "---");
    $text("future-3-min-max", "---");
    $text("future-1-weekday", "---");
    $text("future-2-weekday", "---");
    $text("future-3-weekday", "---");
}