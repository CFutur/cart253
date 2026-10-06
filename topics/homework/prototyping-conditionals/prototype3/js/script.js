/**
 * Ready, set, go!
 * Clara Fioramore
 * 
 * This is a project about traffic lights and how interesting they are woahhh
 * 
 * Controls include LEFT arrow, UP arrow and RIGHT arrow!
 */

"use strict";

//this is my first light on the left that is black but will turn red
const light1 = {
    x: 200,
    y: 300,
    size: 100,
    fill: "#000000",
    fills: {
        black: "#000000",
        red: "#ff0000",

    }
}
//this is my second light in the middle that is black but will turn yellow
const light2 = {
    x: 400,
    y: 300,
    size: 100,
    fill: "#000000",
    fills: {
        black: "#000000",
        yellow: "#ffff00"

    }
}
//this is my third light on the right that is black but will turn green
const light3 = {
    x: 600,
    y: 300,
    size: 100,
    fill: "#000000",
    fills: {
        fill: "#000000",
        green: "#00ff00"
    }
}

//this is simply to draw my pole
const pole = {
    x: 100,
    y: 200,
    w: 30,
    h: 650,
    fill: "#000000"
}

// this is to draw the box containing the lights
const box = {
    x: 100,
    y: 200,
    w: 600,
    h: 200,
    fill: "#000000"
}

/**
 * This sets up my canvas
*/
function setup() {
    createCanvas(900, 900);
}


/**
 * my draw has my pole, box, lights and all the controller inputs 
*/
function draw() {
    background("#20335a");

    drawPole();
    drawBox();
    drawLights();
    checkInput1();
    checkInput2();
    checkInput3();

}


//if player presses left arrow, black left light will turn red
function checkInput1() {
    if (keyIsDown(LEFT_ARROW)) {
        light1.fill = light1.fills.red;
    }

    else {
        light1.fill = light1.fills.black;
    }
}
//if player presses up arrow, black middle light will turn yellow
function checkInput2() {

    if (keyIsDown(UP_ARROW)) {
        light2.fill = light2.fills.yellow;
    }
    else {
        light2.fill = light2.fills.black;
    }
}

//if player presses up right, black right light will turn green
function checkInput3() {

    if (keyIsDown(RIGHT_ARROW)) {
        light3.fill = light3.fills.green;
    }
    else {
        light3.fill = light3.fills.black;
    }
}


function drawLights() {
    push();
    fill(light1.fill);
    ellipse(light1.x, light1.y, light1.size);
    pop();

    push();
    fill(light2.fill);
    ellipse(light2.x, light2.y, light2.size);
    pop();

    push();
    fill(light3.fill);
    ellipse(light3.x, light3.y, light3.size);
    pop();
}


function drawPole() {
    push();
    fill(pole.fill);
    rect(pole.x, pole.y, pole.w, pole.h);
    pop();
}

function drawBox() {
    push();
    fill(box.fill);
    rect(box.x, box.y, box.w, box.h);
    pop();
}
