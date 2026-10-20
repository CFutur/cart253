/**
 * Spooky scary code
 * Clara Fioramore
 * 
 * This code is just a jumpscare. simple as that, scroll the wheel from your mouse and you get a jumpscare
 * 
 * help from mousewheel() from p5js
 */

"use strict";

const square1 = {
    x: 0,
    y: 0,
    size: 500,
    fill: "#ffffff00",
    fills: {
        opaque: "#000000",
        transparent: "#ffffff00"
    }
    //text: ("BOO!", 50, 50)
}
const circle = {
    x: 500,
    y: 250,
    size: 200,
    // fill: "#975d1b"
    fill: "#f1ee15"
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
// setting up my canvas
function setup() {
    createCanvas(500, 500);
}
//drawing my background and adding my circle, spider, square 1 and a function to check overlap between circle and spider.
function draw() {
    background("#975d1b");

    // Draw the circle
    drawCircle();
    drawSpider();
    drawSquare1();
    checkOverlap();
}

// make the circle bigger/smaller as we scroll plus also makes it go forward and backward.
function mouseWheel(event) {
    spider.velocity.x -= spider.delta
    spider.y += event.delta;
    spider.size += event.delta;
    spider.fill -= event.delta
}



//function for my spider
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
    noStroke();
    fill(square1.fill);
    square(square1.x, square1.y, square1.size);
    pop();
}
//this function checks overlap between circle and spider. And then a square and text pops up if they do overlap
function checkOverlap() {
    const d = dist(spider.x, spider.y, circle.x, circle.y);
    const overlap = (d < spider.size / 1 + circle.size / 1);
    if (overlap) {
        console.log("hi!!!!!")
        square1.fill = square1.fills.opaque, text("BOOOOOO!", 10, 250), textSize(90), fill("#ffffff"), textFont('Casterllar')
    }
    else {
        square1.fill = square1.fills.transparent
    }
}