/**
 * Ominous voice...
 * Clara Fioramore
 * 
 * This prototype is to get used to using arrays in a code of my own, by having an ominous voice speak to the user a they click on their mouse. 
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
    "St4y $4f3 0ut th^er3..."
];
let voiceIndex = 0;
/**
 * 
*/
function setup() {
    createCanvas(400, 400);
    background("#5b1313")
    drawVoiceLine();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}
function mousePressed() {
    voiceIndex = voiceIndex + 1;
    // Or: speechIndex += 1;
    // Or: speechIndex++;
}

const currentLine = voice[voiceIndex]
function drawVoiceLine() {
    let x = random(1, 100)
    let y = random(1, 300)
    console.log(x)
    push();
    fill("#1a1515")
    textSize(20);
    //textAlign(CENTER, CENTER);
    //textAlign(x, y);
    //text(currentLine, random(1, 100), random(1, 400));
    text(currentLine, x, y);
    pop();

}