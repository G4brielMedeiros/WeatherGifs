import { getGIFData } from "./giphy";
import { getWeatherData, logWeatherData } from "./openWeather";
import { getElement, log } from "./utility";

const searchInputElement = getElement("search-input");
const searchInputMetricElement = getElement("metric");
const weatherStatusElement = getElement("weather-description");
const weatherImgElement = getElement("weather-gif");
const searchButtonElement = getElement("search-button");
const weatherTemperatureElement = getElement("weather-temperature");

function renderWeatherData(data, units) {
    weatherStatusElement.innerText = data.description;

    const degree = units == "metric" ? " °C" : " °F";

    weatherTemperatureElement.innerText = data.temp + degree;
    log(data);
}

function renderGIFData(url) {
    weatherImgElement.src = url;
    log(url);
}

async function search() {
    weatherStatusElement.innerText = "loading...";
    weatherImgElement.src = "images/loading.gif";

    const units = searchInputMetricElement.checked ? "metric" : "imperial";
    const city = searchInputElement.value;

    log(units);

    const weather = await getWeatherData(city, units);
    const gif = await getGIFData(weather.title);

    renderGIFData(gif);
    renderWeatherData(weather, units);
}

searchButtonElement.addEventListener("click", search);

getWeatherData("Egypt", "metric").then((weather) => {
    renderWeatherData(weather);
    getGIFData(weather.title).then((data) => {
        renderGIFData(data);
    });
});
