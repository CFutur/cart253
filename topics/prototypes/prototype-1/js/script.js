/**
 * Prototype 1
 * Clara Fioramore
 * 
 * This first prototype will have a space theme playing around with the object ontop of the cursor
 */

"use strict";

/**
 * Creating the canvas
*/
function setup() {
    createCanvas(1000, 600)

}


/**
 * my draw will be adding some planets on the canvas, planets floating around the cursor, some stars and a moon. 
*/
function draw() {
    //black background for space
    background(0) 
    //no strokes ALLOWED on my space scene
    noStroke();

    drawSpace();
}

//Draw stars, planets and a moon using functions
function drawSpace() {
    drawStars();
    drawPlanets();
    drawMoon();
}

//Drawing some white and yelloish stars on the background... (they might just be circle)
function drawStars() {
push();
//Yellow stars up right corner
fill(255, 253, 208);
ellipse(850, 60, 50, 50);
//cold white star thats a more squished vertically middle left bottom corner
fill(227, 228, 237);
ellipse(250, 400, 40, 60)
pop();
}

//Now drawing some planets that will not move on the background
function drawPlanets() {
    push();
    //puple planet bottom right corner
    fill(40,28,60);
    ellipse(900, 220, 150, 150);
    pop();
}