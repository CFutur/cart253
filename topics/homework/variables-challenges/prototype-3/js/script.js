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

const Dot = {
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
    //Draw the mouse and all its elements
    Dot();
    mouseLeftEar();
    mouseHead();
    mouseWhiskers();
    mouseNose();
    mouseRightEar();
}