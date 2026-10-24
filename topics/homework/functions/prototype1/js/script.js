/**
 * 
 * 
 * 
 * Clara Fioramore
 * 
 *So were creating abstract art with shapes placed randomly and filling up our canvas. 
 */

"use strict";

//These shapes are undefined for now, cause we define them both with one singular shape parameter
let shape1 = undefined; //rect
let shape2 = undefined; //rect
let shape3 = undefined;//circle
let shape4 = undefined;//rect
let shape5 = undefined;//circle
/**
 * This set up has my canvas size and also all of my shapes who will be randomly placed on my canvas
*/
function setup() {
    createCanvas(300, 300);
    shape1 = createRectShape(); //will make the shape 1 appear randomly on the screen once (it will not get covered by background)
    shape2 = createRectShape(); //samesies

    shape3 = createCircleShape(); //make circular shape appear!!

    shape4 = createRectShape();
    shape5 = createCircleShape();
}

// this function holds the placement (x,y) and the size (w,h) of all my rectangular shapes
function createRectShape() {
    let rectShape = {
        //random x and y position of our rectangular shapes at each refresh
        x: random(0, width),
        y: random(0, height),
        // randomwidth and height of our rectangular shapes
        w: random(1, 200),
        h: random(1, 200),
    }
    return rectShape;
}

function createCircleShape() {
    let circleShape = {
        x: random(0, width),
        y: random(0, height),
        size: random(1, 200),
    }
    return circleShape;
}

/**
 * draws my background and also all of my shapes, no matter the shape or size. 
*/
function draw() {
    background("#faf286")


    drawRectShape(shape1) //this is simply to give the appearance of my shapes in draw
    drawRectShape(shape2)
    drawCircleShape(shape3) //this is to give the appearance of my circular shape
    drawRectShape(shape4)
    drawCircleShape(shape5)
}


//this draws myshape shape, size, colour, no stroke. 
function drawRectShape(rectShape) {
    push();
    noStroke();
    fill("#a7c6e9")
    rect(rectShape.x, rectShape.y, rectShape.w, rectShape.h);
    pop();
}

//this draws my shape shape, size, colour, no stroke. 
function drawCircleShape(circleShape) {
    push();
    noStroke();
    fill("#fcb9f8")
    ellipse(circleShape.x, circleShape.y, circleShape.size);
    pop();
}