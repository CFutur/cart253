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
    x: 500,
    y: 500,
    size: 200,
    //colour
    fill: {
        r: 64,
        g: 40,
        b: 27
    },
};

let sky = {
    //colour
    r: 66,
    g: 41,
    b: 89

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
    createCanvas(1000, 1000)


}


/**
 * Draw mister sick guy
*/
function draw() {
    backgorund(sky.fill.r, sky.fill.g, sky.fill.b);

}