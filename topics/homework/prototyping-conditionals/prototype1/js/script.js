/**
 * Confusion
 * Clara Fioramore
 * 
 * This website is made to make you go mad. No escape. Only buttons
 */

"use strict";

let eyesOpen = {
    x: 300,
    y: 400,
    size: 100,
    fill: "#fafafa"
}

let btn;


/**
 * This is simply to create our startup canvas.
*/
async function setup() {
    createCanvas(800, 800);

    if (mouseIsPressed) {
        eyesOpen();
    }

    btn = createButton('no');

    btn.size(100, 50);
}

/**
 * This draw will simply be to have our buttons in it. 
*/
function draw() {
    background("#92b5ff")

    drawTriangle();
    drawEyesOpen();
}


//function 

function drawTriangle() {
    push();
    fill("#c5b48f")
    triangle(400, 150, 100, 700, 700, 700);
    pop();
}

