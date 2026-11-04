/**
 * Selfie in a snow storm
 * Clara Fioramore
 * 
 * With the christmas time approaching, I thought it would be fun to take a photo of yourself in a snowstorm... in the comfort of your own home!
 * 
 * Simply press the mouse or hold it down to start the snowstorm!
 * 
 * 
 * imageMode() from p5js
 * flies flies flies from pippin barr in learning material
 * snowflakes exemple on p5js
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
 * draws background, my webcam capture and my snowflakes in the loop, also checks for mouse input. 
*/
function draw() {
    background("#1081de")
    //imageMode(CENTER) uses the second and third parameters of the image as a center point, if two additional parameters are added, they're used to set the image's width and height
    imageMode(CENTER)
    image(capture, 630, 270, 600, 400);
    //let the all the individual snowflake in the snowflakes array be drawn and also be moved downwards.
    for (let snowflake of snowflakes) {
        moveSnowflake(snowflake);
        drawSnowflake(snowflake);
    }
    //checks mouse for input as function. 
    checkMouse();
}
function checkMouse() {
    console.log("hi") //checking if it was working. 
    //if user is pressing down, then let the snowflake get created and push them out on canvas (into index.), if not, then nothing happens. 
    if (mouseIsPressed === true) {
        let snowflake = createSnowflake();
        snowflakes.push(snowflake);
    }
    else { let snowflake = 0; } // i could have kept my {} empty but i felt this was more easy to understand visually. 
}

function moveSnowflake(snowflake) {
    //let the y speed of my snowflake be dependable off of their size. the bigger ones are slower. 
    let ySpeed = 200 / snowflake.size;
    //the position of my snowflake on the y axis increases (goes down, cause of stupid weird y axis, higher number = lower.)
    snowflake.y += ySpeed;

}

function drawSnowflake(snowflake) {
    push();
    noStroke();
    fill(255);
    // ellipse(200, 200, 300)
    //snowflake parameters found in createSnowflake.
    ellipse(snowflake.x, snowflake.y, snowflake.size)
    pop();
}


function createSnowflake() {
    let snowflake = {
        //appear between 50 and the width of canvas.
        x: random(50, width),
        y: random(0, -height), //i... cant figure out the minus, i just know it appears botchy without it... woops?
        size: random(5, 20), //make snowflake bigger or smaller between 5 of diameters and 20
    };
    // return the snowflake
    return snowflake;
}