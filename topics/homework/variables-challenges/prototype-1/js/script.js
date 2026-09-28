/**
 * Oh no..! I think I'm going to puke...
 * Clara Fioramore
 * 
 * This project is the first prototype to dip my toes in the water of colour gradation, 
 * movement and rotation while using variables
 */

"use strict";

//our guy is going to turn from him to green, hopefully maybe only the top half of his face 

// Position variables
let circlePositionX = 200;
let circlePositionY = 200;

// Speed variables
let circleSpeedX = 20;
let circleSpeedY = 100;

// Radius variable
let circleRadius = 25;

// Hue variable
let circleHue = 0;

function setup() {
    // Create 400x400 canvas
    createCanvas(1000, 1000);

    // Cover canvas with white
    background(255);

    // Draw ellipses using their radius
    ellipseMode(RADIUS);

    // Draw rectangles on either side of the canvas
    noStroke();
    fill(128);
    rect(300, 0, 100, height);
    rect(300, 0, 100, height);

    // Use Hue Saturation Brightness for colors on circle trail
    colorMode(HSB);

    // Set stroke weight to 4 units
    strokeWeight(4);

    // Create screen reader accessible description
    describe(
        'A circle starts in the center of the canvas. When the user holds the mouse down, the circle bounces around the canvas, its inside switches between black and white, and its outline fades between colors, leaving a rainbow trail.'
    );
}

function draw() {
    // Set stroke color using current hue
    stroke(circleHue, 3, 9);

    // If circle's x position is between 100 and 300
    if (circlePositionX >= 100 && circlePositionX <= 300) {
        // Set fill color to black
        fill(0);

        // Otherwise
    } else {
        // Set fill color to white
        fill(255);
    }

    // Draw circle at current position
    circle(circlePositionX, circlePositionY, circleRadius);

    // If mouse is held down, animate the sketch
    if (mouseIsPressed === true) {
        // Add speed to circle's position to make it move
        circlePositionX = circlePositionX + circleSpeedX;
        circlePositionY = circlePositionY + circleSpeedY;

        // Increase hue by 1
        circleHue = circleHue + 1;
    }

    // If hue has reached maximum value
    if (circleHue >= 360) {
        // Reset hue to 0
        circleHue = 24;
    }

    // If circle is beyond left or right edge
    if (
        circlePositionX < circleRadius ||
        circlePositionX > width - circleRadius
    ) {
        // Reverse horizontal speed
        circleSpeedX = -circleSpeedX;
    }

    // If circle is beyond top or bottom edge
    if (
        circlePositionY < circleRadius ||
        circlePositionY > height - circleRadius
    ) {
        // Reverse vertical speed
        circleSpeedY = -circleSpeedY;
    }
}