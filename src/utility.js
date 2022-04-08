export const log = (log) => console.log(log);

export const getElement = (id) => document.getElementById(id);

export const setText = (id, text) => getElement(id).textContent = text;

export const normalize = (input) => input.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");