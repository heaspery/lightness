"use strict"

import {generatePalette, isHexColor, displayShadow} from "./modules/utils.js";
import {Color} from "./modules/Color.js";
import * as convert from "color-convert";


const form = document.querySelector("form");
const input = document.querySelector("input");
const main = document.querySelector("main");
const header = document.querySelector("header");
const body = document.querySelector("body");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    if(isHexColor(input.value)){
        console.log("valid");
        const palette = generatePalette(input.value);
        displayColors(palette);

    } else {
        throw new Error(`${input.value} is not a valid Hexadecimal color`);
    }


})


main.addEventListener("click", async (e)=> {

    if(e.target.localName == 'div') {

        await navigator.clipboard.writeText(e.target.dataset.color);

    } 
   
})

function displayColors(palette) {
    main.innerHTML = "";

    palette.forEach(element => {
        const color = new Color (element);
        color.display();
    });

    header.classList.add("minimized");


    let color1 = palette[0];
    let color2 = palette[4];
    let color3 = palette[9];

    color1 = convert.hsl.hex(color1);
    color2 = convert.hsl.hex(color2);
    color3 = convert.hsl.hex(color3);

    const gradient = `linear-gradient(-45deg, #${color1}, #${color2}, #${color3})`;
    body.style.background = gradient;
    document.body.style.backgroundSize = `400% 400%`

    console.log(palette);
    console.log(palette[0]);
    console.log(palette[4]);
    console.log(palette[9]);

    console.log(gradient);

    displayShadow(input.value);
}
