/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let poles = [
    {
        x1: 50,
        y1: 580,
        x2: 300,
        y2: 580,
        size: 10,
        colour: "#000000",
    },
    {
        x1: 150,
        y1: 580,
        x2: 150,
        y2: 225,
        size: 9,
        colour: "#000000",
    },
    {
        x1: 150,
        y1: 225,
        x2: 300,
        y2: 200,
        size: 9,
        colour: "#000000",
    },
    {
        x1: 300,
        y1: 200,
        x2: 300,
        y2: 250,
        size: 9,
        colour: "#000000",
    }
];
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(900, 600);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#192191")

    for (let lines of poles) {
        drawHangmanPole(lines);
    }
}


function drawHangmanPole(lines) {
    push();
    stroke(lines.colour);
    strokeWeight(lines.size)
    line(lines.x1, lines.y1, lines.x2, lines.y2);
    pop();
}
