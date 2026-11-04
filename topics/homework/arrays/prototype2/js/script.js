/**
 * Title of Project
 * Clara Fioramore
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * 
 * imageMode() from p5js
 */

"use strict";
let capture;
//array of snowflakes with non in it yet because we will be adding them with push
let snowflakes = [];

/**
 * this creates my canvas, captures with webcam, hides it and also contains the "if the amount of snowflakes is less or equal than 2500, add one more with each click."
*/
function setup() {
    createCanvas(windowWidth, windowHeight)

    //the create capture function will allow us to use the device's webcam to capture the video. 
    //the VIDEO seem to be case sensitive, since it is always in all caps in every website i look at. 
    capture = createCapture(VIDEO);
    //make the capture size smaller than the canvas and in the middle to allow for a cute frame around it :) (yes the smile is important)
    // capture.size(400, 500);
    //then we use capture.hide() for WHAT I UNDERSTOOD to remove the html element? because apparenrly when there is a createCapture, it creates two webcam, one ontop of the other, but we only wanna keep one and turn it into a draw image. i think. 
    capture.hide()

    for (let i = 0; i <= 2500; i++) {
        snowflakes.push();
    }
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#1081de")
    //imageMode(CENTER) uses the second and third parameters of the image as a center point, if two additional parameters are added, they're used to set the image's width and height
    imageMode(CENTER)
    image(capture, 630, 270, 600, 400);

    for (let snowflake of snowflakes) {
        moveSnowflake(snowflake);
        drawSnowflake(snowflake);
    }
    checkMouse();
}
function checkMouse() {
    console.log("hi")
    if (mouseIsPressed === true) {
        let snowflake = createSnowflake();
        snowflakes.push(snowflake);
    }
    else { let snowflake = 0; }
}

function moveSnowflake(snowflake) {
    let ySpeed = 200 / snowflake.size;
    snowflake.y += ySpeed;

}

function drawSnowflake(snowflake) {
    push();
    noStroke();
    fill(255);
    // ellipse(200, 200, 300)
    ellipse(snowflake.x, snowflake.y, snowflake.size)
    pop();
}


function createSnowflake() {
    let snowflake = {
        x: random(50, width),
        y: random(-height, 0),
        size: random(5, 20),
    };
    // Return the random fly
    return snowflake;
}