/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * help from mousewheel() from p5js
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
/** 
let ballSize = 0;

function setup() {
    createCanvas(500, 500)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!

function draw() {
    background("#6479bdd0")

    circle(ballSize, 350, 350)
}

function mouseWheel() {
    ball.size += 0.5;
}*/

const square1 = {
    x: 450,
    y: 5,
    size: 50,
    fill: "#000000",
    fills: {
        opaque: "#000000",
        transparent: "#d81717fd"
    }
    //text: ("BOO!", 50, 50)
}


/** */
const circle = {
    x: 500,
    y: 250,
    size: 200,
    fill: "#ffdb10"
}
const spider = {
    x: 250,
    y: 150,
    size: 20,
    fill: "#000000",
    velocity: {
        x: undefined,
        y: undefined,
    },
    speed: 1
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background("#975d1b");

    // Draw the circle
    drawSpider();
    drawCircle();
    drawSquare1();
    checkOverlap();
}

// Increment circleSize when the user scrolls the mouse wheel.
function mouseWheel(event) {
    spider.velocity.x -= spider.delta
    spider.y += event.delta;
    spider.size += event.delta;
    spider.fill -= event.delta
}




function drawSpider() {
    push();
    fill(spider.fill);
    ellipse(spider.size, spider.x, spider.y,);
    pop();
}

function drawCircle() {
    push();
    noStroke();
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);
    pop();
}

function drawSquare1() {
    push();
    fill(square1.fill);
    square(square1.x, square1.y, square1.size);
    pop();
}

function checkOverlap() {
    const d = dist(spider.x, spider.y, circle.x, circle.y);
    const overlap = (d < spider.size / 1.6 + circle.size / 1.6);
    if (overlap) {
        console.log("hi!!!!!")
        square1.fill = square1.fills.transparent
    }
    else {
        square1.fill = square1.fills.opaque
    }
}