/**
 * 
 * ASMR pressing buttons
 * 
 * Clara Fioramore
 * 
 * This is like those videos of people pressing buttons or keyboard keys for asmr. except there is no noise, just clicks. and they don't do anything. they're just pratice for functions. but hey, free asmr.
 */

"use strict";

//These buttons are undefined for now, cause we define them both with one singular button parameter
let button1 = undefined;
let button2 = undefined;
/**
 * This set up has my canvas size and also all of my buttons who will be randomly placed on my canvas
*/
function setup() {
    createCanvas(300, 300);
    button1 = createRectButton(); //will make the button 1 appear randomly on the screen once (it will not get covered by background)
    button2 = createRectButton(); //samesies
}

// this function holds the placement (x,y) and the size (w,h) of all my rectangular buttons
function createRectButton() {
    let rectButton = {
        //random x and y position of our rectangular button at each refresh
        x: random(0, width),
        y: random(0, height),
        // width and height of our rectangular buttons
        w: 50,
        h: 30,
    }
    return rectButton;
}

function createCircleButton() {
    let circleButton = {
        x: random(0, width),
        y: random(0, height),

        size
    }
}

/**
 * draws my background and also all of my buttons, no matter the shape or size. 
*/
function draw() {
    background("#fdf2507a")


    drawButton(button1) //this is simply to give the appearance of my buttons in draw
    drawButton(button2)
}


//this draws my button shape, size, colour, no stroke. 
function drawButton(rectButton) {
    push();
    noStroke();
    fill("#a7c6e9")
    rect(rectButton.x, rectButton.y, rectButton.w, rectButton.h);
    pop();
}