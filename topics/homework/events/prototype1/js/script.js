/**
 * Pressing keys on keyboard... no, literally. 
 * Clara Fioramore
 * 
 * This prototype is to press your keys on a keyboard and see what happens.
 * 
 * 
 * this is to help me visualize my code:
 * 
 * if (any key) is pressed, then diff image appears for all of them
 *  
 */

"use strict";

const keyK = {
    x: 350,
    y: 350,
    size: 200,
    fill: "#8f0000",
    fills: {
        blue: "#001df6"
    }
}

keys: {

}

/**
 * this is to create my canvas, once again.
/** */
async function setup() {
    createCanvas(500, 500)
}

//idk yet whta this draw will do, but prob a lot

function draw() {

    background("#b31bf9")
}




function keyPressed(event) {
    if (event.key === "r") {
        console.log("lol")
        keyK.fill = keyK.fills.blue;
    }
}