/**
 * Flies flies flies!
 * Pippin Barr
 * 
 * A project 
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size
let flies = [];

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(300, 300);
}

/**
 * Moves and displays the flies
 */
function draw() {
    background("#87ceeb");

    // Go through all the flies
    for (let fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }
}

function keyPressed() {
    console.log("hi")
    let fly = createFly();
    flies.push(fly);
}
/**
 * Moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draws the fly parameter to canvas
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

function createFly() {
    // Generate the random fly
    let fly = {
        x: random(0, width),
        y: random(0, 0),
        size: random(10, 20),
        buzziness: random(2, 8)
    };
    // Return the random fly
    return fly;
}