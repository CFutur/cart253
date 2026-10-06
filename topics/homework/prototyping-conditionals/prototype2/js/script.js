/**
 * very cutesie prototype (now with some conditionals on it)
 * Clara Fioramore
 * 
 * this project is a very cute face not creepy at all that can BLINK
 */

"use strict";



const eyesOpen = {
    fill: "#fafafa",
    x: 300,
    y: 400,
    size: 100,
    x: 300,
    y: 400,
    size: 100,
    fill: "#fafafa"
}
const eyesClosed = {
    x: 300,
    y: 400,
    size: 100,
    x: 300,
    y: 400,
    size: 100,
}
/**
 * this is to create my beautiful canvas
*/
function setup() {
    createCanvas(1000, 1000)
}


/**
 * this will draw two eyes within a dark canvas 
*/
function draw() {
    //black background.
    background("#aaaaaa")

    if (mouseIsPressed) {
        eyesClosed = eyesClosed.fill;
    }
    else {
        eyesOpen = eyesOpen.fill;
    }

}
/**
function drawEyesOpen() {
    //draw the size of them and colour (white and black pupil)
    push();
    fill(255, 255, 255);
    ellipse(300, 25, 150, 60)
    ellipse(700, 25, 150, 60)
    /**fill(0);
    ellipse(300, 25, 100, 40)
    ellipse(700, 25, 100, 40)
    pop();
}

function drawEyesClosed() {
    push();
    fill(0, 0, 0);
    ellipse(300, 25, 150, 60);
    ellipse(700, 25, 150, 60);
    //line(225, 25, 375, 25);
    //line(625, 25, 775, 25);
    pop();
}
*/
