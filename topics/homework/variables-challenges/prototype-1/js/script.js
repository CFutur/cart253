/**
 * Oh no..! I think I'm going to puke...
    * Clara Fioramore
        *
 * This project is the first prototype to dip my toes in the water of colour gradation,
 * movement and rotation while using variables
    */

"use strict";

//our guy is going to turn from him to green, hopefully maybe only the top half of his face


/* VARIABLES */

let rotationZ = 0;
let isSick = false; // This is our "switch" (False = still, True = moving)
let vomitSpeed = 0; // We will increase this only when isSick is true
let btn;            // Variable to hold our button

/* OBJECTS */

/*                       RED    GREEN  BLUE */
let sky = { RGB: { r: 66, g: 41, b: 89 } }

/*Circles for the face, eyes and pupils of our sick guy*/
/*                 X axis   Y axis        Diameter   RED     GREEN   BLUE */
let face = { x: 900, y: 375, size: 500, RGB: { r: 64, g: 40, b: 27 } };
let lefteye = { x: 750, y: 375, size: 250, RGB: { r: 255, g: 255, b: 255 } };
let righteye = { x: 1050, y: 375, size: 250, RGB: { r: 255, g: 255, b: 255 } };
let leftpupil = { x: 750, y: 375, size: 100, RGB: { r: 75, g: 116, b: 250 } };
let rightpupil = { x: 1050, y: 375, size: 100, RGB: { r: 75, g: 116, b: 250 } };
let bottomface = { x: 900, y: 425, size: 400, RGB: { r: 64, g: 40, b: 27 } };

/*Rectangle for the vomit of our sick guy*/
/*                 X axis   Y axis  Width   Height        RED     GREEN   BLUE */
let vomit = { x: 850, y: 560, w: 100, h: 300, RGB: { r: 160, g: 255, b: 59 } }


/* FUNCTIONS */

/**
 * This is to create my canvas and also add a button that will only work when clicked on
 * 
 * 
*/
function setup() {
    createCanvas(1800, 750);

    // 1. Create the button
    btn = createButton('Make him sick!');
    // 2. Position the button next to the face
    btn.position(1200, 375);
    // 3. Tell the button what to do when clicked
    btn.mousePressed(goSick);
}

// This function runs ONLY when the button is clicked
function goSick() {
    isSick = true;
    btn.html('Oh no!'); // Change the button text
}

/**
 * Draw mister sick guy
 * 
 * DRAW() is called directly after setup(), and continuously executes 
 * the lines of code contained inside its block until the program is stopped or noLoop() is called.
*/
function draw() {

    /*Background*/
    background(sky.RGB.r, sky.RGB.g, sky.RGB.b);


    /* FACE */
    /* START */
    push(); // "Sub-section" for just the face of our sick guy.
    if (isSick) {
        face.RGB.g += 0.50;
        // face.RGB.g = constrain(mrFurious.RGB.g, 0, 100);
        face.RGB.r -= 0.50;
        // face.RGB.r = constrain(mrFurious.RGB.r, 0, 100);
    }
    //Draw the face of our sick guy
    fill(face.RGB.r, face.RGB.g, face.RGB.b);
    ellipse(face.x, face.y, face.size);
    pop();
    /* END */


    /* EYES */
    /* START */
    push(); // "Sub-section" for just the eyes of our sick guy.
    //Draw the left eye of the man
    fill(lefteye.RGB.r, lefteye.RGB.g, lefteye.RGB.b);
    ellipse(lefteye.x, lefteye.y, lefteye.size);
    //Draw the right eye of the man
    fill(righteye.RGB.r, righteye.RGB.g, righteye.RGB.b);
    ellipse(righteye.x, righteye.y, righteye.size);
    pop();
    /* END */


    /* PUPILS */
    /* START */
    push(); // "Sub-section" for just the pupils of our sick guy.
    noStroke();
    fill(leftpupil.RGB.r, leftpupil.RGB.g, leftpupil.RGB.b);
    fill(rightpupil.RGB.r, rightpupil.RGB.g, rightpupil.RGB.b);

    // --- LEFT PUPIL (ROTATING) ---
    push();
    translate(lefteye.x, lefteye.y);
    if (isSick) {
        rotate(rotationZ);
        rotationZ += 0.05;
        ellipse(40, 0, leftpupil.size); // Orbiting
    } else {
        ellipse(0, 0, leftpupil.size);  // Centered
    }
    pop();
    ellipse(rightpupil.x, rightpupil.y, rightpupil.size);
    pop();
    /* END */


    /* VOMIT */
    /* START */
    if (isSick) {
        push(); // "Sub-section" for just the vomit of our sick guy.
        noStroke();
        vomitSpeed += 0.5; // Increase the speed of the vomit
        // Translate the origin.
        translate(0, vomitSpeed);
        fill(vomit.RGB.r, vomit.RGB.g, vomit.RGB.b);
        rect(vomit.x, vomit.y, vomit.w, vomit.h);
        pop();
    }
    /* END */
}