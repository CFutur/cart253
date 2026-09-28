/**
 * Oh no..! I think I'm going to puke...
 * Clara Fioramore
 * 
 * This project is the first prototype to dip my toes in the water of colour gradation, 
 * movement and rotation while using variables
 */

"use strict";

//our guy is going to turn from him to green, hopefully maybe only the top half of his face 



let face = {
    //position and size
    x: 900,
    y: 375,
    size: 500,
    //colour
    fill: {
        r: 64,
        g: 40,
        b: 27
    }
};


let lefteye = {
    //position and size
    x: 750,
    y: 375,
    size: 250,
    //colour
    fill: {
        r: 255,
        g: 255,
        b: 255
    }
};

let righteye = {
    //position and size
    x: 1050,
    y: 375,
    size: 250,
    //colour
    fill: {
        r: 255,
        g: 255,
        b: 255
    }
};


let rotationZ = 0;
/** 
let bottomface = {
    //position and size
    x: 900,
    y: 425,
    size: 400,
    //colour
    fill: {
        r: 64,
        g: 40,
        b: 27
    }
};
*/

let sky = {
    //colour
    fill: {
        r: 66,
        g: 41,
        b: 89
    }
}
//let the mouth turn from smile to frown
//let mouth = {
//position and size.... i wanna add a line.
//line(30, 20, 85, 75);

//colour mouth
//fill: {
//  r: 0,
//  g: 0,
// b: 0
// },




/**
 * This is to create my canvas
*/
function setup() {
    createCanvas(1800, 750, WEBGL);
}


/**
 * Draw mister sick guy
*/
function draw() {
    background(sky.fill.r, sky.fill.g, sky.fill.b);


    face.fill.g += 0.05;
    // face.fill.g = constrain(mrFurious.fill.g, 0, 100);
    face.fill.r -= 0.05;
    // face.fill.r = constrain(mrFurious.fill.r, 0, 100);


    lefteye.rotation.x += 0.05;





    //Draw the face of our sick guy
    push();
    noStroke();
    fill(face.fill.r, face.fill.g, face.fill.b);
    ellipse(face.x, face.y, face.size);
    pop();

    //Draw the left eye of the man
    push();
    fill(lefteye.fill.r, lefteye.fill.g, lefteye.fill.b);
    ellipse(lefteye.x, lefteye.y, lefteye.size);
    pop();

    //Draw the right eye of the man
    push();
    fill(righteye.fill.r, righteye.fill.g, righteye.fill.b);
    ellipse(righteye.x, righteye.y, righteye.size);
    pop();


    /** 
    * draw the bottom of the mans face
    *push();
    noStroke();
    fill(bottomface.fill.r, bottomface.fill.g, bottomface.fill.b);
    ellipse(bottomface.x, bottomface.y, bottomface.size);
    pop();
*/
}