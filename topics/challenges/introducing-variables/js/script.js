/**
 * Introducing variables
 * Clara Fioramore
 * 
 * This is simply a project to learn how to use variables and what it does
 */

"use strict";

/**
 * Creating a canvas
*/
function setup() {
    createCanvas(1000, 480)

}


/**
 * Draws a circle in center of canvas
*/
function draw() {
    background(0);
    // Draw the circle
    push();
    fill(mouseX, mouseY, 0);
    noStroke();
    ellipse(width / 2, height / 2, mouseX, mouseY, 100, 100)
    pop();

}