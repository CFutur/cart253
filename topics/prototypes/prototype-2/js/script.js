/**
 * A dog and his collar
 * Clara Fioramore
 * 
 * This project is about a small dog in the background and how you can move his collar aorund to place it correctly on the puppy
 * 
 */

"use strict";

/**
 * This serves to create a canvas!!
*/
function setup() {
    createcanvas(1000, 600);


}


/**
 * my draw will be adding a puppy from the neck up
*/
function draw() {
    //blue background for cute puppy
    background(196, 231, 247)
    //no strokes allowed again cause we love smooth
    noStroke();

    drawDog();

     // Draw a long thin circle as a collar for the cursor
    push();
    // No line around the shape
    noStroke();
    // Make it red
    fill(210, 43, 43);
    // Draw a 110x10
    ellipse(mouseX, mouseY, 110, 10);
    //make another planet on x axis dark blue
    fill(28,37,60)
    ellipse(mouseX, mouseX, 150, 150)
    //make a last planet on y axis red
    fill(60,28,49)
    ellipse(mouseY, mouseY, 80, 80)
    pop();

}