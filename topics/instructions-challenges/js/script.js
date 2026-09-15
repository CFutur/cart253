/**
 * Mountainside Sunset
 * Clara Fioramore, Justine Cormier
 * 
 * A calm sunset washing over mountains with flowers in a prairie. 
 * 
 */

"use strict";


/**
 * Creating the canvas
*/
function setup() {
    createCanvas(800, 400)
}


/**
 * Draws our landscape with mountains 
*/
function draw() {
    // Orange background for sunset
    background(255, 172, 28)
    // No stroke on our beautiful landscape
    noStroke()

    drawPrairie()

}


/*
*Draws mountains and flowers using functions
* */

function DrawPrairie() {
    drawMountains();
    drawSunset();
    drawFlowers();
}

/**
 * Draw the mountains with different colours of green for depth
 */

function drawMountains() {
    push();
    fill(84, 140, 84);
    ellipse(200, 300, 200);
    pop();




}

/**
 * Draw the sunset with different colours of orange for depth
 */

function drawSunset() {



}

/**
 * Draw the flowers with variety
 */

function drawFlowers() {




}