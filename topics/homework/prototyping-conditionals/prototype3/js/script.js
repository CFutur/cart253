/**
 * Ready, set, go!
 * Clara Fioramore
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
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

const pole = {
    x: 100,
    y: 200,
    w: 30,
    h: 650,
    fill: "#000000"
}

const box = {
    x: 100,
    y: 200,
    w: 600,
    h: 200,
    fill: "#000000"
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(900, 900);
}

function checkInput() {
    if (mouseIsPressed) {
        light1.fill = light1.fill.red;
    }

    else {
        light1.fill = light1.fill.black;
    }
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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



function checkInput1() {
    if (keyIsDown(LEFT_ARROW)) {
        light1.fill = light1.fills.red;
    }

    else {
        light1.fill = light1.fills.black;
    }
}

function checkInput2() {

    if (keyIsDown(UP_ARROW)) {
        light2.fill = light2.fills.yellow;
    }
    else {
        light2.fill = light2.fills.black;
    }
}

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
