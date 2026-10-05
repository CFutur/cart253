/**
 * Confusion
 * Clara Fioramore
 * 
 * This website is made to make you go mad. No escape. Only buttons
 */

"use strict";





/**
 * This is simply to create our startup canvas.
*/
function setup() {
    createCanvas(800, 800);
}


/**
 * This draw will simply be to have our buttons in it. 
*/
function draw() {
    background("#92b5ff")

    drawTriangle();
}





function drawTriangle() {
    push();
    fill("#c5b48f")
    triangle(400, 150, 100, 700, 700, 700);
    pop();
}

