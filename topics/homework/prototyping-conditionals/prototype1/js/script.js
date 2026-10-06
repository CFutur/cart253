/**
 * Confusion
 * Clara Fioramore
 * 
 * This website is made to make you go mad. No escape. Only buttons
 */

"use strict";

const puck = {
    x: 200,
    y: 200,
    size: 50,
    fill: "#000000"
};


const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 100,
    fill: "#102b96"
};


/**
 * This is simply to create our startup canvas.
*/
function setup() {
    createCanvas(1500, 700);

}


/**
 * This draw will simply be to have our buttons in it. 
*/
function draw() {
    background("#aec3f2");
    drawGoalLeft();
    drawGoalRight();
    // Move user circle
    moveUser();
    // Draw the user and puck
    drawUser();
    drawPuck();
    movePuck();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}



function movePuck() {
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size / 2 + puck.size / 2);
    if (overlap) {

        if (user.x >= overlap && user.x <= puck.x) { puck.x += 1; }
        else if (user.x >= puck.x) { puck.x -= 1; }

        if (user.y >= overlap && user.y <= puck.y) { puck.y += 1; }
        else if (user.y >= puck.y) { puck.y -= 1; }

    }
}


function drawGoalLeft() {
    push();
    fill("#ffffffb5")
    ellipse(2, 350, 450)
    //the rgb of the stroke, thickness and positions of both
    stroke(223, 17, 17)
    strokeWeight(9)
    line(55, 100, 75, 150)
    line(55, 600, 75, 550)
    //added the no stroke under so my rect wouldnt have a black border
    noStroke();
    fill("#df1111")
    //position, widght and height of all of my bars to make a net
    rect(50, 100, 10, 500)
    rect(70, 150, 10, 400)
    pop();
}

function drawGoalRight() {
    push();
    fill("#ffffffb5")
    ellipse(1498, 350, 450)
    //the rgb of the stroke, thickness and positions of both
    stroke(223, 17, 17)
    strokeWeight(9)
    line(1455, 100, 1435, 150)
    line(1455, 600, 1435, 550)
    //added the no stroke under so my rect wouldnt have a black border
    noStroke();
    fill("#df1111")
    //position, widght and height of all of my bars to make a net
    rect(1450, 100, 10, 500)
    rect(1430, 150, 10, 400)
    pop();
}