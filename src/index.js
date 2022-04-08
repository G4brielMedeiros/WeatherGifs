import { getGIFData } from "./giphy";
import { getCoords, getWeatherData, logWeatherData } from "./openWeather";
import { getElement as $, log, normalize, setText as $t } from "./utility";

function renderWeatherData(weather) {
    log(weather);

    $t("city" , weather.place );
    $t("date" , weather.date );
    $t("weather-temp" , weather.temp );
    $t("weather-desc" , weather.description );
    $t("min" , weather.min );
    $t("max" , weather.max );
    $t("weather-feel" , weather.feels );

    $t("min-1" , weather.future[0].min );
    $t("min-2" , weather.future[1].min );
    $t("min-3" , weather.future[2].min );

    $t("max-1" , weather.future[0].max );
    $t("max-2" , weather.future[1].max );
    $t("max-3" , weather.future[2].max );

    $t("weather-future-1-weekday" , weather.future[0].dt );
    $t("weather-future-2-weekday" , weather.future[1].dt );
    $t("weather-future-3-weekday" , weather.future[2].dt );
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
