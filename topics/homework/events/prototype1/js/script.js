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



/**
 * this is to create my canvas, once again.
/** */
function setup() {
    createCanvas(1000, 1000)
}

//idk yet whta this draw will do, but prob a lot

function draw() {

    background("#b31bf9")

    //keyK();
}




function keyPressed(event) {
    if (event.keyCode === 75) {
        console.log("lol")
        text("APPEAR PLEASEEE", 500, 500), fill("#0dfd15"), textSize(800);
        // keyK.fill = keyK.fills.blue;
    }
}