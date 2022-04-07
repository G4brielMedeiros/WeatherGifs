import { log } from "./utility";

function getAPIcall(city, units) {
    const API_KEY = "ca659f3e8873be553c03fadf808cffe3";
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=${units}`;
    return API;
}

export async function getWeatherData(city, units = "standard") {
    const response = await fetch(getAPIcall(city, units), { mode: "cors" });

    const data = await response.json();

    const formattedData = {
        place: data.name,
        temp: data.main.temp,
        min: data.main.temp_min,
        max: data.main.temp_max,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        title: data.weather[0].main,
    };
    return formattedData;
}

export const kelvinToCelsius = (temp) => temp - 273.15;

export const kelvinToFahrenheit = (temp) => temp * 1.8 - 459.67;

export const convertUnit = (temp, celsius) =>
    celsius ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
