/**
 * Playing Hockey
 * Clara Fioramore
 * 
 * This website is meant for funsies, nothing else :)
 * 
 * IMPORTANT!!!
 * might need to unzoom to see the full thing, I made my canvas too big....woops
 */


"use strict";
//this is the goalLeft variable
const goalLeft = {
    x: 2,
    y: 350,
    size: 450,
    fill: "#ffffffb5",
}

//this is the variable of the goal on the right
const goalRight = {
    x: 1498,
    y: 350,
    size: 450,
    fill: "#ffffffb5",
}
//this is the variable of the puck thats getting moved around
const puck = {
    x: 200,
    y: 200,
    size: 50,
    fill: "#000000"
};
//this is the variable of the user and the different colours it will get depending on if the puck is scored in its own goal or the opposites team goal
const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 100,
    fill: "#102b96",
    fills: {
        sad: "#102b96", // blue for sadness cause no goal
        happy: "#f4e329", // joy for happiness cause goal!!
        angry: "#e50909", // angry cause he scored in his own goal
    }
};


/**
 * This is simply to create our startup canvas.
*/
function setup() {
    createCanvas(1500, 700);

}


/**
 * This draw will simply have the two goals drawn, the user movemenent, the circle that is on our mouse, the drawing of the puck and its movement, and the overlap check for the left and right goal (different emotions = different check goal) 
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
    if (puck.x >= width / 3) {
        checkGoalRight();
    }
    else { checkGoalLeft(); }

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

// move the puck around with the help of our user
function movePuck() {
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size / 2 + puck.size / 4);
    if (overlap) {

        if (user.x >= overlap && user.x <= puck.x) { puck.x += 4; }
        else if (user.x >= puck.x) { puck.x -= 4; }

        if (user.y >= overlap && user.y <= puck.y) { puck.y += 4; }
        else if (user.y >= puck.y) { puck.y -= 4; }

    }
}

// this is for the overlaping of our left goal with our puck (supposed to turn our user red from anger)
function checkGoalLeft() {
    const d = dist(puck.x, puck.y, goalLeft.x, goalLeft.y);
    const overlap = (d < puck.size / 2 + goalLeft.size / 2);
    if (overlap) {
        user.fill = user.fills.angry;
    }
    else {
        user.fill = user.fills.sad;
    }

}
//  this is to check the overlap puck and goal and is supposed to turn the user yellow from happiness
function checkGoalRight() {
    const d = dist(puck.x, puck.y, goalRight.x, goalRight.y);
    const overlap = (d < puck.size / 2 + goalRight.size / 2);
    if (overlap) {
        user.fill = user.fills.happy;
    }
    else {
        user.fill = user.fills.sad;
    }

}
//  this is all of our drawing for our goal but only the circle is in the variables upstairs but the rest is drawn here
function drawGoalLeft() {
    push();
    fill(goalLeft.fill);
    ellipse(goalLeft.x, goalLeft.y, goalLeft.size);
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
//this is to draw the right goal and again, the circle is the only variables drawn up there while the rest is drawn here
function drawGoalRight() {
    push();
    fill(goalRight.fill);
    ellipse(goalRight.x, goalRight.y, goalRight.size);
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