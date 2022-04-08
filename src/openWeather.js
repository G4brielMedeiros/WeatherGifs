import { log } from "./utility";

const API_KEY = "ca659f3e8873be553c03fadf808cffe3";

function getAPIcall(coords, units) {
    const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=${units}&exclude=hourly,minutely`;
    log(API)
    return API;
}

export async function getWeatherData(coords, units = "standard") {
    const response = await fetch(getAPIcall(coords, units), { mode: "cors" });

    const data = await response.json();

    log(data);
    const formattedData = {
        place: coords.city,
        temp: data.current.temp,
        min: data.daily[0].temp.min,
        max: data.daily[0].temp.max,
        feels: data.current.feels_like,
        description: data.current.weather[0].description,
        future: [
            {
                dt: data.daily[1].dt,
                min: data.daily[1].temp.min,
                max: data.daily[1].temp.max,
            },
            {
                dt: data.daily[2].dt,
                min: data.daily[2].temp.min,
                max: data.daily[2].temp.max,
            },
            {
                dt: data.daily[3].dt,
                min: data.daily[3].temp.min,
                max: data.daily[3].temp.max,
            },
        ]
    };
    return formattedData;
}

export async function getCoords(city) {
    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    );
    const data = await response.json();
    return {lat: data[0].lat, lon: data[0].lon, city: data[0].name};
}

export const kelvinToCelsius = (temp) => temp - 273.15;

export const kelvinToFahrenheit = (temp) => temp * 1.8 - 459.67;

export const convertUnit = (temp, celsius) =>
    celsius ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
