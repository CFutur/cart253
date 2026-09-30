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
    size: 300,
    fill: "#3b3b3b",
}

const head = {
    x: 400,
    y: 550,
    size: 400,
    fill: "#3b3b3b",
}

const nose = {
    x: 400,
    y: 650,
    size: 70,
    fill: "#755a69",
}

const dot = {
    x: 600,
    y: 400,
    size: 300,
    fill: "#538f73",
}

const user = {
    x: undefined, // these two will be defined by my mouse
    y: undefined, //
    size: 300,
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
    background("#538f73");
    //move the mouse's ear on our user circle
    moveUser();
    //This is simply a dot the user has to touch for the ear to turn grey
    Dot();
    //Draw the mouse and all its elements
    mouseLeftEar();
    mouseHead();
    mouseWhiskers();
    mouseNose();
    drawUser();
    moveUser();
}

function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();

    const d = dist(user.x, user.y, dot.x, dot.y);
    const overlap = (d < user.size / 50 + dot.size / 50);
    if (overlap) {
        user.fill = user.fills.overlap;
    }
    else {
        user.fill = user.fills.noOverlap;
    }
}

// Display the mouse's left ear

function mouseLeftEar() {
    push();
    noStroke();
    fill(leftEar.fill);
    ellipse(leftEar.x, leftEar.y, leftEar.size);
    pop();
}

function mouseWhiskers() {
    push();
    line(400, 650, 500, 700);
    line(400, 650, 550, 650);
    line(400, 650, 500, 600);
    line(400, 650, 300, 700);
    line(400, 650, 250, 650);
    line(400, 650, 300, 600);
    stroke("#ffffff");
    strokeWeight(0.5);
    pop();
}

function mouseHead() {
    push();
    noStroke();
    fill(head.fill);
    ellipse(head.x, head.y, head.size);
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

function moveUser() {
    user.x = mouseX
    user.y = mouseY;
}