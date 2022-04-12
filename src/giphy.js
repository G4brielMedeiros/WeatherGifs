import { log } from "./utility";

function getAPIcall(query) {
    const API_KEY = "Ra4lvnhwQLsoP0eFieNVyRWwQn2QhROf";
    const API = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${query}`;
    return API;
}

export async function getGIFData(query) {
    const response = await fetch(getAPIcall(query), { mode: "cors" });
    const data = await response.json();
    return data.data.images.original.url;
}
