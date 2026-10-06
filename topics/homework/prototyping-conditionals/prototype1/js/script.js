/**
 * Confusion
 * Clara Fioramore
 * 
 * This website is made to make you go mad. No escape. Only buttons
 */

"use strict";

let btn;

//let img;

let eyesOpen = {
    x: 300,
    y: 400,
    size: 100,
    fill: "#fafafa"
}

//let btn;


/**
 * This is simply to create our startup canvas.
*/
async function setup() {
    createCanvas(800, 800);
    btn = createButton('Click anywhere else but here');

    btn.position(350, 400);

    btn.mousePressed(explosion);

    //btn = createButton('no');

    //btn.size(100, 50);
}


/**
 * This draw will simply be to have our buttons in it. 
*/
function draw() {
    background("#92b5ff")

    // drawTriangle();
}

function explosion() {
    background("#050202")
}
/** 
function drawEyesOpen() {
    push();
    fill(eyesOpen.fill);
    ellipse(eyesOpen.x, eyesOpen.y, eyesOpen.size);
    pop();
}
*/
/** 
function drawTriangle() {
    push();
    fill("#c5b48f")
    triangle(400, 150, 100, 700, 700, 700);
    pop();
}
    */

