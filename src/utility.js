export const log = (log) => console.log(log);

export const $ = (id) => document.getElementById(id);

export const $text = (id, text) => ($(id).textContent = text);

export const $valueOf = (id) => $(id).value;

export const normalize = (input) =>
    input
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");
