/**
 * Ominous voice...
 * Clara Fioramore
 * 
 * This prototype is to get used to using arrays in a code of my own, by having an ominous voice speak to the user as they click on their mouse. 
 * helped by code of Pippin Barr on notes of "Sequential arrays in pratice" and also by "Array" in p5js
 */

"use strict";
let voice = [
    "Good evening subject 2418",
    "Welcome to test 25.",
    "We have been waiting for you",
    "OH? Are you not subject 2418?",
    "such a shame...",
    "you...You must not remember this.",
    "we must erase your memory.",
    "Goodbye...",
    "...",
    "...",
    "how...",
    "How are you still here?",
    "Were you... meant t=o be?",
    "0h- w3l|...",
    "St4y $4f3 0ut th^er3...",
    "...",
    "...",
    "...",
    "..."
];
// lets the first index in my array appear on screen 0 =  "Good evening subject 2418"
let voiceIndex = 0;

//this is to add some random squares glitching in colour if I have time to expand on this prototype.
let glitchSquares = [

]
/**
 * This sets up my canvas, and also my frame rate of my voice lines "glitching out"
*/
function setup() {
    createCanvas(400, 400);
    //this slows down the framr rate so that the user is able to read the text on screen, since it was going too fast before.
    frameRate(7);
}


/**
 * this draws my background in a dark red colour, and also draws my voice line(s) by inserting a function named drawVoiceLine();
*/
function draw() {
    background("#5b1313")
    drawVoiceLine();
}

function drawVoiceLine() {
    //telling the code that the line appearing on screen is the 0 (aka first line) in the index of voice lines. 
    let currentLine = voice[voiceIndex]
    //lets the position of my x and y be randomized and placed between 100 and 300 on my canvas. (these numbers allow the voice lines to be always be fully readable and actually appear on canvas, not off canvas.)
    let x = random(100, 200)
    let y = random(100, 200)
    push();
    fill("#1a1515") //makes my voice lines almost fully black.
    textSize(20); //makes the voice lines small enough to always fully show on canvas but big enough to read
    textAlign(CENTER, CENTER); //centers it in the middle so it doesnt go off the side and user cant read text
    text(currentLine, x, y); // text currentline = whichever number in my array (0 to start), random x and random y
    pop();

}
function mousePressed() {
    // add one more to my index everytime i click, so start from 0 +1 = 1+1 =2, etc to go through the entire array
    voiceIndex++;
    //if the number in my index is past the lenght of my array (19), then make the voice line in the middle go back to 0 (so the first voice line)
    if (voiceIndex >= voice.length) {
        voiceIndex = 0;
    }
}