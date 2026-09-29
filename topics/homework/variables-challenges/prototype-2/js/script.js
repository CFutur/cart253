/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let rectoneSpeed = frameCount * 0.2;

let ovalone = {
    //position and size
    x: 200,
    y: 600,
    w: 200,
    h: 600,
    //colour
    r: 149,
    g: 229,
    b: 245
}

let ovaltwo = {
    //position and size
    x: 800,
    y: 200,
    w: 600,
    h: 200,
    //colour
    r: 149,
    g: 229,
    b: 245
}

let ovalthree = {
    //position and size
    x: 400,
    y: 400,
    w: 50,
    h: 120,
    //colour
    r: 149,
    g: 229,
    b: 245
}

let ovalfour = {
    //position and size
    x: 850,
    y: 900,
    w: 150,
    h: 10,
    //colour
    r: 149,
    g: 229,
    b: 245
}

let rectangleone = {
    //position and size
    x: 750,
    y: 500,
    w: 300,
    h: 250,
    //colour
    r: 255,
    g: 189,
    b: 230
}

let rectangletwo = {
    //position and size
    x: 150,
    y: 850,
    w: 500,
    h: 50,
    //colour
    r: 255,
    g: 189,
    b: 230
}

let rectanglethree = {
    //position and size
    x: 300,
    y: 950,
    w: 300,
    h: 20,
    //colour
    r: 255,
    g: 189,
    b: 230
}


let sky = {
    //colour background
    r: 240,
    g: 216,
    b: 110
}
/**
 * this setup is just to create my canvas
*/
function setup() {
    createCanvas(1000, 1000);
}


/**
 * idk whatmy draw will be yet sad;y
*/
function draw() {
    background(sky.r, sky.g, sky.b);

    //draw the first oval
    push();
    noStroke();
    //I want to make this oval translate towards the right
    //ovalone += 0.5; // Increase the speed of the translation of the 1 oval
    // Translate the origin.
    // translate(100, ovalone);
    fill(ovalone.r, ovalone.g, ovalone.b);
    ellipse(ovalone.x, ovalone.y, ovalone.w, ovalone.h);
    //translate(ovalone.x, ovalone.y, [speed])
    pop();

    push();
    noStroke();
    fill(ovaltwo.r, ovaltwo.g, ovaltwo.b);
    ellipse(ovaltwo.x, ovaltwo.y, ovaltwo.w, ovaltwo.h);
    pop();

    push();
    noStroke();
    fill(ovalthree.r, ovalthree.g, ovalthree.b);
    ellipse(ovalthree.x, ovalthree.y, ovalthree.w, ovalthree.h);
    pop();

    push();
    noStroke();
    fill(ovalfour.r, ovalfour.g, ovalfour.b);
    ellipse(ovalfour.x, ovalfour.y, ovalfour.w, ovalfour.h);
    //translate(ellipsex, 50);
    pop();

    push();
    noStroke();
    fill(rectangleone.r, rectangleone.g, rectangleone.b);
    rect(rectangleone.x, rectangleone.y, rectangleone.w, rectangleone.h)
    rectoneSpeed += 0.5;
    translate(rectoneSpeed, 0);
    pop();

    push();
    noStroke();
    fill(rectangletwo.r, rectangletwo.g, rectangletwo.b);
    rect(rectangletwo.x, rectangletwo.y, rectangletwo.w, rectangletwo.h)
    pop();

    push();
    noStroke();
    fill(rectanglethree.r, rectanglethree.g, rectanglethree.b);
    rect(rectanglethree.x, rectanglethree.y, rectanglethree.w, rectanglethree.h)
    pop();
}
