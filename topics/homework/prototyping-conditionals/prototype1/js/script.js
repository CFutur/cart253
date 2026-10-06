/**
 * Confusion
 * Clara Fioramore
 * 
 * This website is made to make you go mad. No escape. Only buttons
 */

"use strict";

const target = {
    x: 300,
    y: 300,
    size: 50.5,
    fill: "#6aff41",
};

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#000000"
};


const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};


/**
 * This is simply to create our startup canvas.
*/
function setup() {
    createCanvas(1500, 700);
}


/**
 * This draw will simply be to have our buttons in it. 
*/
function draw() {
    background("#aec3f2")

    drawGoalLeft();
    drawGoalRight();
}


function drawGoalLeft() {
    push();
    fill("#ffffffb5")
    ellipse(2, 350, 450)
    //the rgb of the stroke, thickness and positions of both
    stroke(223, 17, 17)
    strokeWeight(9)
    line(55, 100, 75, 150)
    line(55, 600, 75, 550)
    //added the no stroke under so my rect wouldnt have a black border
    noStroke();
    fill("#df1111")
    //position, widght and height of all of my bars to make a net
    rect(50, 100, 10, 500)
    rect(70, 150, 10, 400)
    pop();
}

function drawGoalRight() {
    push();
    fill("#ffffffb5")
    ellipse(1498, 350, 450)
    //the rgb of the stroke, thickness and positions of both
    stroke(223, 17, 17)
    strokeWeight(9)
    line(1455, 100, 1435, 150)
    line(1455, 600, 1435, 550)
    //added the no stroke under so my rect wouldnt have a black border
    noStroke();
    fill("#df1111")
    //position, widght and height of all of my bars to make a net
    rect(1450, 100, 10, 500)
    rect(1430, 150, 10, 400)
    pop();
}