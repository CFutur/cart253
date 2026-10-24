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
let shape6 = undefined; //quad
let shape7 = undefined;//circle
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
    shape6 = createQuadShape(); //make a quad shape
    shape7 = createCircleShape();


    let btn = createButton('Refresh page'); //create the button and the text on it
    btn.position(500, 450); //position the button under the canvas
    //when clicking on the button with mouse, reload the entire window to create new abstract art
    btn.mousePressed(() => {
        window.location.reload();
    });
}


// this function holds the placement (x,y) and the size (w,h) of all my rectangular shapes
function createRectShape() {
    let rectShape = {
        //random x and y position of our rectangular shapes at each refresh
        x: random(0, width),
        y: random(0, height),
        // random width and height of our rectangular shapes
        w: random(1, 200),
        h: random(1, 200),
    }
    return rectShape;
}

function createCircleShape() {
    let circleShape = {
        //random x and y position of our circle shapes at each refresh
        x: random(0, width),
        y: random(0, height),
        // random size of our circle shapes
        size: random(1, 100),
    }
    return circleShape;
}
function createQuadShape() {
    let quadShape = {
        //random x and y position of our quad shapes at each refresh
        x: random(0, width),
        y: random(0, height),
        x2: random(0, width),
        y2: random(0, height),
        x3: random(0, width),
        y3: random(0, height),
        x4: random(0, width),
        y4: random(0, height),
    }
    return quadShape;
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
    drawQuadShape(shape6)
    drawCircleShape(shape7)
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
function drawQuadShape(quadShape) {
    push();
    noStroke();
    fill("#b0fa8e")
    quad(quadShape.x, quadShape.y, quadShape.x2, quadShape.y2, quadShape.x3, quadShape.y3, quadShape.x4, quadShape.y4)
}

