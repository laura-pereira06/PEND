import { gatos } from "./gatos.js";

console.log("Lista de gatos:");

gatos.forEach((gato, index) => {
    console.log(`${index + 1}. ${gato}`);
});