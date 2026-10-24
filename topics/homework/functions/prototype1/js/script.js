/**
 * 
 * ASMR pressing buttons
 * 
 * Clara Fioramore
 * 
 * This is like those videos of people pressing buttons or keyboard keys for asmr. except there is no noise, just clicks. and they don't do anything. they're just pratice for functions. but hey, free asmr.
 */

"use strict";


let button1 = undefined;
let button2 = undefined;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(300, 300);
    button1 = createRectButton();
    button2 = createRectButton();
}


function createRectButton() {
    let button = {
        x: random(0, width),
        y: random(0, height),
        w: 50,
        h: 30,
    }
    return button;
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#fdf2507a")


    drawButton(button1)
    drawButton(button2)
}



function drawButton(button) {
    push();
    noStroke();
    fill("#a7c6e9")
    rect(button.x, button.y, button.w, button.h);
    pop();
}