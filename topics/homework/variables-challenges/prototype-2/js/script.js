/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

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
    fill(ovalone.r, ovalone.g, ovalone.b);
    ellipse(ovalone.x, ovalone.y, ovalone.w, ovalone.h);

    pop();
}