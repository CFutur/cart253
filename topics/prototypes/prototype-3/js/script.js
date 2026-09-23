/**
 * very cutesie prototype
 * Clara Fioramore
 * 
 * this project is a very cute face not creepy at all
 */

"use strict";

/**
 * this is to create my beautiful canvas
*/
function setup() {
    createCanvas(1000, 50)
}


/**
 * this will draw two eyes within a dark canvas
*/
function draw() {
    //black background.
    background(0)

    drawFace();

}

function drawFace() {
    drawEyes();
    drawSmile();

}


function drawEyes() {
    //draw the size of them and colour (white and black pupil)
    push();
    fill(255, 255, 255);
    ellipse(300, 25, 150, 60)
    ellipse(700, 25, 150, 60)
    fill(0);
    ellipse(300, 25, 100, 40)
    ellipse(700, 25, 100, 40)


}