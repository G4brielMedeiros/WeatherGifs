import { log } from "./utility";

function getAPIcall(city) {
    const API_KEY = "ca659f3e8873be553c03fadf808cffe3";
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
    return API;
}

export async function getWeatherData(city) {
    const response = await fetch(getAPIcall(city), { mode: "cors" });

    const weatherData = await response.json();

    return weatherData;
}

export async function logWeatherData(city) {
    const data = await getWeatherData(city);
    log(data);

    log(data.name);

    log(data.weather[0].main)
}


