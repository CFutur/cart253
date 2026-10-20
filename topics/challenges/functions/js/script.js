/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
let ball1 = undefined;
let ball2 = undefined;


// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);

    ball1 = createBall();
    ball2 = createBall();
    ball3 = createBall();
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    moveBall(ball);
    moveBall(ball2);

    handleBounce(ball, paddle);

    drawPaddle(paddle);
    drawBall(ball1);
    drawBall(ball2);
}

function createBall() {
    let ball = {
        x: 300,
        y: 20,
        width: 10,
        height: 10,
        velocity: {
            x: 0,
            y: 10
        }
    };
    return ball;
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    paddle.x = mouseX
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    // ball.velocity.y += ball.y
    ball.y += ball.velocity.y

}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {

    const overlap = checkOverlap(ball, paddle)
    if (overlap) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {

    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}