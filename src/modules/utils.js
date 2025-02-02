import * as convert from "color-convert";

function generatePalette(codehexa) {
    const colors = [];
    
    let hslConvert = convert.hex.hsl(codehexa);
    let baseHSL = hslConvert.slice(0, 2); 
    let luminosity = 0;

    for (let i = 0; i < 10; i++) {
        let color = baseHSL.slice(); 
        color.push(luminosity);
        colors.push(color);

        luminosity += 10;
    }

    return colors;
}

function isHexColor(input) {
const validity = /^#[0-9A-F]{6}$/i.test(input);
return validity;

}


function displayShadow(input) {

    const color = convert.hex.hsl(input);

    const h = color[0];
    const s = color[1];
    const l = color[2];

    const value = `${h}deg ${s}% ${l}%`;

    let root = document.documentElement;
    root.style.setProperty("--shadow-color", value);
}

export { generatePalette, isHexColor, displayShadow};