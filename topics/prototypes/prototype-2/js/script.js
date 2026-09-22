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
    createCanvas(1000, 600);


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

     //* Draw a long thin circle as a collar for the cursor
   // push();
    // No line around the shape
    //noStroke();
    // Make it red
   // fill(210, 43, 43);
    // Draw a 110x10
   // ellipse(mouseX, mouseY, 110, 110);
    //add a small golden circle acting as a bell in the middle and a bit lowered
   // fill(255, 224, 46)
    //ellipse(mouseX, mouseY, 150, 150)
   // pop();

}

//Draw a dogs face, eyes, ears and snoot using functions

function drawDog(){
    drawEye();
    drawSnoot();
    drawFace();
    drawEars();

}

//Drawing the doggies eyes

//Starting with the two white eyeballs
function drawEye(){
    push();
    //Left white eyeball
    fill(255);
    ellipse(300, 300, 100, 100)
    pop();


}

//Just drawing the simple circle for the dog's face

function drawFace(){

push();
//fill with golden retriever golden colour
fill(215, 148, 46);
ellipse(500, 300, 250, 250);
pop();

}