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

    drawPrairie();

}


/*
*Draws mountains and flowers using functions
* */

function drawPrairie() {
    drawSunset();
    drawMountains();
    drawFlowers();

}

/**
 * Draw the mountains with different colours of green for depth
 */

function drawMountains() {
    push();
    fill(36, 60, 36);
    ellipse(360, 400, 700, 400);
    fill(48, 80, 48);
    ellipse(200, 400, 700, 400);
    fill(84, 140, 84);
    ellipse(650, 400, 700, 400);
    pop();

}

/**
 * Draw the sunset with different colours of orange for depth and a sun
 */

function drawSunset() {
    push();
    fill(255, 127, 80);
    ellipse(400, 200, 1000, 300);
    fill(248, 131, 121);
    ellipse(400, 300, 1000, 300);
    fill(253, 218, 13);
    ellipse(400, 300, 400);
    pop();

}

/**
 * Draw the flowers with variety
 */

function drawFlowers() {

    push();
    fill(255)
    ellipse(200, 300, 30, 20)
    ellipse(160, 300, 30, 20)
    ellipse(160, 300, 30, 20)
    ellipse(160, 300, 30, 20)


}