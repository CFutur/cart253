/**
 * Prototype 1
 * Clara Fioramore
 * 
 * This first prototype will have a space theme playing around with the object ontop of the cursor
 */

"use strict";

/**
 * Creating the canvas
*/
function setup() {
    createCanvas(1000, 600)

}


/**
 * my draw will be adding some planets on the canvas, planets floating around the cursor, some stars and a moon. 
*/
function draw() {
    //black background for space
    background(0) 
    //no strokes ALLOWED on my space scene
    noStroke();

    drawSpace();

    // Draw a small green planet at mouse position
    push();
    // No line around the shape
    noStroke();
    // Make it green
    fill(20,80,81);
    // Draw a 110x110 planet mouse position
    ellipse(mouseX, mouseY, 110, 110);
    //make another planet on x axis dark blue
    fill(28,37,60)
    ellipse(mouseX, mouseX, 150, 150)
    //make a last planet on y axis red
    fill(60,28,49)
    ellipse(mouseY, mouseY, 80, 80)
    pop();
}

//Draw stars, planets and a moon using functions
function drawSpace() {
    drawStars();
    drawPlanets();
    drawMoon();
}

//Drawing some white and yellowish stars on the background... (they might just be circle)
function drawStars() {
push();
//Yellow stars up right corner
fill(255, 253, 208);
ellipse(850, 60, 50, 50);
//cold white star thats a more squished vertically middle left bottom corner
fill(227, 228, 237);
ellipse(250, 400, 40, 60)
//warm white star behind the moon around same size as moon
fill(253, 244, 220);
ellipse(750,380,250, 250)
pop();
}

//Now drawing some planets that will not move on the background
function drawPlanets() {
    push();
    //purple planet bottom right corner
    fill(40,28,60);
    ellipse(900, 220, 150, 150);
    //blue bigger planet middle up
    fill (31,62,90);
    ellipse(500, 150, 200, 200);
    pop();
}

/*Now I'll be adding a moon that is shadowing a star (the sun) to create an eclipse
*
*the star (sun) will be created in the star function. 
*/
function drawMoon() {
    push();
    //Adding big moon light grey bottom right
    fill(200, 200, 200);
    ellipse(820, 400, 300, 300);
    //now adding the smaller darker grey circles for craters
    //small top left crater
    fill(150, 150, 150);
    ellipse(760, 330, 50, 50);
    //less small crater bottom left
    fill(150, 150, 150);
    ellipse(740, 450, 70, 70);
    //smallest crater middle right
    fill(150, 150, 150);
    ellipse(870, 400, 50, 50);
    pop();
}