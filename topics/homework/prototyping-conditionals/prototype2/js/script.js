/**
 * very cutesie prototype (now with some conditionals on it)
 * Clara Fioramore
 * 
 * this project is a very cute face not creepy at all that can BLINK
 */

"use strict";

const middle = {
    x: 500,
    y: 500,
    size: 250,
    fill: "#ede54a"
}

const petal1 = {
    x: 500,
    y: 320,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6"
    }
}

const petal2 = {
    x: 350,
    y: 450,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6"
    }
}


const petal3 = {
    x: 400,
    y: 640,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6"
    }
}

const petal4 = {
    x: 600,
    y: 640,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6"
    }
}


const petal5 = {
    x: 650,
    y: 450,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6"
    }
}

const user = {
    x: undefined, //will be mouse X
    y: undefined, //will be mouse Y
    size: 10,
    fill: "#ff0623"
}


/**
 * this is to create my beautiful canvas
 */
function setup() {
    createCanvas(1000, 1000)
}


/**
 * this will draw two eyes within a dark canvas 
*/
function draw() {
    background("#368641")
    //drawing all of the petals individually
    drawPetal1();
    drawPetal2();
    drawPetal3();
    drawPetal4();
    drawPetal5();
    drawMiddle();
    //this is to move the ball on the cursor
    moveUser();
    //this is to draw the circle on the cursor
    drawUser();
    checkInput();

}

// sets the mouse cursor on the user position

function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

function drawPetal1() {
    push();
    noStroke();
    fill(petal1.fill)
    ellipse(petal1.x, petal1.y, petal1.size)
    pop();
}

function drawPetal2() {
    push();
    noStroke();
    fill(petal2.fill)
    ellipse(petal2.x, petal2.y, petal2.size)
    pop();
}

function drawPetal3() {
    push();
    noStroke();
    fill(petal3.fill)
    ellipse(petal3.x, petal3.y, petal3.size)
    pop();
}

function drawPetal4() {
    push();
    noStroke();
    fill(petal4.fill)
    ellipse(petal4.x, petal4.y, petal4.size)
    pop();
}

function drawPetal5() {
    push();
    noStroke();
    fill(petal5.fill)
    ellipse(petal5.x, petal5.y, petal5.size)
    pop();
}

function drawMiddle() {
    push();
    noStroke();
    fill(middle.fill);
    ellipse(middle.x, middle.y, middle.size);
    pop();
}

function checkInput() {
    const distance = dist(mouseX, mouseY, petal1.x, petal1.y)

    const mouseIsOverlapping = (distance < petal1.size / 2)

    const mouseIsMoving = (movedX !== 0 || movedY !== 0);

    if (mouseIsOverlapping && mouseIsMoving) {
        petal1.fill = petal1.
    }
}