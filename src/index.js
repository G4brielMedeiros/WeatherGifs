import { getWeatherData, logWeatherData } from "./openWeather";
import { getElement, log } from "./utility";

async function renderWeatherData(city) {
    const data = await getWeatherData(city);

    weatherStatusElement.innerText = data.weather[0].main;
    log(data.weather[0].main);
}

const searchElement = getElement("search-form");
const searchInputElement = getElement("search-input");
const weatherStatusElement = getElement("weather-status");

searchElement.addEventListener("submit", () => {
    renderWeatherData(searchInputElement.value);
});
