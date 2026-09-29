/**
 * Like a donkey's tail, but it's a mouse's ear
 * Clara Fioramore, duh
 * 
 * This project is basically the idea of the cursor having to place a circle the size of a mouse's ear where its missing and watching it change to the same colour as the mouse
 */

"use strict";

const leftEar = {
    x: 200,
    y: 400,
    size: 100,
    fill: "#3b3b3b",
}

const head = {
    x: 400,
    y: 600,
    size: 200,
    fill: "#3b3b3b",
}

const nose = {
    x: 400,
    y: 650,
    size: 50,
    fill: "#755a69",
}

const dot = {
    x: 600,
    y: 400,
    size: 100,
    fill: "#538f73",
}

const rightEarUser = {
    x: undefined, // these two will be defined by my mouse
    y: undefined, //
    size: 100,
    fill: "#ca050574",
    fills: {
        noOverlap: "#ca050574",
        overlap: "#3b3b3b",
    }
}
/**
 * This is to create my canvas!!
*/
function setup() {
    createCanvas(800, 800)

}


/**
 * this function contains all of my objet that will be drawn.
*/
function draw() {
    background(83, 143, 115);
    //move the mouse's ear on our user circle
    moveUser();
    //This is simply a dot the user has to touch for the ear to turn grey
    Dot();
    //Draw the mouse and all its elements
    mouseLeftEar();
    mouseHead();
    mouseWhiskers();
    mouseNose();
    mouseRightEar();
}

/*
Now setting the user to be the mouse (like cursor)
*/
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

// Display the mouse's left ear

function mouseLeftEar() {
    push();
    noStroke();
    fill(leftEar.fill);
    ellipse(leftEar.x, leftEar.y, leftEar.size);
    pop();
}

function mouseHead() {
    push();
    noStroke();
    fill(head.fill);
    ellipse(head.x, head.y, head.size);
    pop();
}

function mouseWhiskers() {
    push();
    line(400, 600, 500, 700);
    line(100, 100, 200, 200);
    stroke("#ffffff");
    strokeWeight(0.5);
    pop();
}

function mouseNose() {
    push();
    noStroke();
    fill(nose.fill);
    ellipse(nose.x, nose.y, nose.size);
    pop();
}

function Dot() {
    push();
    noStroke();
    fill(dot.fill);
    ellipse(dot.x, dot.y, dot.size);
    pop();
}