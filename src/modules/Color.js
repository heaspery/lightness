"use strict"

import * as convert from "color-convert";

class Color {
    #hsl = [];
    #hex;
    #element;

    constructor(hsl) {
        this.#hsl = hsl;
        this.#hex =  `#${convert.hsl.hex(hsl)}`;
        this.#element = this.#generateElement();
    }


    #generateElement() {

        let colorDiv = document.createElement("div");
        let colorP = document.createElement("p");

        colorDiv.classList.add("color");
        colorDiv.setAttribute("data-color", this.#hex);
        colorDiv.style.setProperty("background-color", this.#hex);

        const luminosity = this.#hsl[2];
        let fontColor;

        if(luminosity > 60) {
            fontColor = "#000000";
        } else {
            fontColor = "#ffffff";
        }

        colorP.style.setProperty("color", fontColor);
        colorP.textContent = `${this.#hex}`;

        colorDiv.appendChild(colorP);

        return colorDiv;
    }

    display() {
        const main = document.querySelector("main");
        main.appendChild(this.#element);
    }

    get hsl () {
        const hsl = this.#hsl;
        return hsl;
    }
    get hex () {
        const hex = this.#hex;
        return hex;
    }

    get element () {
        const element = this.#element;
        return element;
    }
}




export {Color}