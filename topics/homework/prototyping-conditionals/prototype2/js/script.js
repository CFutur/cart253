/**
 * very cutesie prototype (now with some conditionals on it)
 * Clara Fioramore
 * 
 * this project is a very cute face not creepy at all that can BLINK
 */

"use strict";
// this is variable for the middle of the flower
const middle = {
    x: 500,
    y: 500,
    size: 250,
    fill: "#ede54a"
}
//variable for petal #1 to 5
const petal1 = {
    x: 500,
    y: 320,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6",
        green: "#368641",
    }
}

const petal2 = {
    x: 350,
    y: 450,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6",
        green: "#368641",
    }
}


const petal3 = {
    x: 400,
    y: 640,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6",
        green: "#368641",
    }
}

const petal4 = {
    x: 600,
    y: 640,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6",
        green: "#368641",
    }
}


const petal5 = {
    x: 650,
    y: 450,
    size: 200,
    fill: "#ffffff",
    fills: {
        white: "#ffffff",
        pink: "#f7c0e6",
        green: "#368641",
    }
}
//this tells our code that the x and y of user is our cursor
const user = {
    x: undefined, //will be mouse X
    y: undefined, //will be mouse Y
}


/**
 * this is to create my beautiful canvas
 */
function setup() {
    createCanvas(1000, 1000)

}


/**
 * this will draw my background, my 5 petals, the middle of the flower, a thing to move our user, the circle of our user, and all the check input that allows us to make the petal turn pink when hovering over them and disappear when clicking them
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
    checkInput2();
    checkInput3();
    checkInput4();
    checkInput5();
}


// sets the mouse cursor on the user position

function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}
//draws our "circle" (i didnt want one, i just needed our mouse to have a body to alter the petals)
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}
//this is simply drawing all of the petals 1-5
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
//drawing the yellow middle
function drawMiddle() {
    push();
    noStroke();
    fill(middle.fill);
    ellipse(middle.x, middle.y, middle.size);
    pop();
}

//check input 1-5 allows each petal to 1- turn pink when hovering, 2- disappear when clicking them, 3- have different indivual messages for each of them
function checkInput() {
    //this tells us the two bodies for the overlap
    const distance = dist(mouseX, mouseY, petal1.x, petal1.y)
        ``//this tells us the distance needed for overlap
    const mouseIsOverlapping = (distance < petal1.size / 2)
    //this is for the movement ontop of petals: if the x or y doesnt equal 0, then its moving
    const mouseIsMoving = (movedX !== 0 || movedY !== 0);
    //if the mouse is ontop of the petal and moving, then petal turns pink
    if (mouseIsOverlapping && mouseIsMoving) {
        petal1.fill = petal1.fills.pink
    }
    //else if the mouse is pressed and the mouse is ontop of our petal, turn the petal green and give us a message ontop
    else if (mouseIsPressed && mouseIsOverlapping) {
        petal1.fill = petal1.fills.green, text('They love me <3', 190, 150), textSize(80), fill("#59bcfa");
    }
    //the rest of the time the petal stays white.
    //rinse and repeat for the other checkinput. 
    else {
        petal1.fill = petal1.fills.white;
    }
}
function checkInput2() {
    const distance = dist(mouseX, mouseY, petal2.x, petal2.y)

    const mouseIsOverlapping = (distance < petal2.size / 2)

    const mouseIsMoving = (movedX !== 0 || movedY !== 0);

    if (mouseIsOverlapping && mouseIsMoving) {
        petal2.fill = petal2.fills.pink
    }

    else if (mouseIsPressed && mouseIsOverlapping) {
        petal2.fill = petal2.fills.green, text('They love me not </3', 170, 150), textSize(80), fill("#822020");
    }

    else {
        petal2.fill = petal2.fills.white;
    }
}

function checkInput3() {
    const distance = dist(mouseX, mouseY, petal3.x, petal3.y)

    const mouseIsOverlapping = (distance < petal3.size / 2)

    const mouseIsMoving = (movedX !== 0 || movedY !== 0);

    if (mouseIsOverlapping && mouseIsMoving) {
        petal3.fill = petal3.fills.pink
    }

    else if (mouseIsPressed && mouseIsOverlapping) {
        petal3.fill = petal3.fills.green, text('They love me infinitely <3', 70, 150), textSize(80), fill("#fa8dd0");
    }

    else {
        petal3.fill = petal3.fills.white;
    }
}

function checkInput4() {
    const distance = dist(mouseX, mouseY, petal4.x, petal4.y)

    const mouseIsOverlapping = (distance < petal4.size / 2)

    const mouseIsMoving = (movedX !== 0 || movedY !== 0);

    if (mouseIsOverlapping && mouseIsMoving) {
        petal4.fill = petal4.fills.pink
    }

    else if (mouseIsPressed && mouseIsOverlapping) {
        petal4.fill = petal4.fills.green, text('They despise me...', 170, 150), textSize(80), fill("#022803");
    }

    else {
        petal4.fill = petal4.fills.white;
    }
}
function checkInput5() {
    const distance = dist(mouseX, mouseY, petal5.x, petal5.y)

    const mouseIsOverlapping = (distance < petal5.size / 2)

    const mouseIsMoving = (movedX !== 0 || movedY !== 0);

    if (mouseIsOverlapping && mouseIsMoving) {
        petal5.fill = petal5.fills.pink
    }

    else if (mouseIsPressed && mouseIsOverlapping) {
        petal5.fill = petal5.fills.green, text('They love me, perhaps?', 100, 150), textSize(80), fill("#faa836");
    }

    else {
        petal5.fill = petal5.fills.white;
    }
}