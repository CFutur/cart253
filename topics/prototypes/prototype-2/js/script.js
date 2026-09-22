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

    
     //* Draw multiple small seed shaped and coloured differently
    push();
    // No line around the shape
    noStroke();
    // Make the main one beige
    fill(199, 177, 143);
    // Draw a 10x10
    ellipse(mouseX, mouseY, 20, 20);
    //make the x axis one black
    fill(41, 38, 34)
    ellipse(mouseX, mouseX, 20, 20)
    //make the last seed on the y axis red brown
    fill(115, 53, 24);
    ellipse(mouseY, mouseY, 20, 20)
    pop();

}

//Draw a dogs face, eyes, ears and snoot using functions

function drawDog(){
    drawBody();
    drawWings();
    drawFace();
    drawEye();
    drawBeak();
    

}

//Drawing the birdies eyes

//Starting with the two white eyeballs
function drawEye(){
    push();
    //Left white eyeball
    fill(255);
    ellipse(350, 300, 150, 150)
    ellipse(650, 300, 150, 150)
    fill(0);
    ellipse(350, 300, 100, 100)
    ellipse(650, 300, 100, 100)
    pop();


}

//Just drawing the simple circle for the bird's face

function drawFace(){

push();
//fill with golden colour
fill(215, 148, 46);
ellipse(500, 300, 400, 400);
pop();

}

//time to do the birds beak, in the middle

function drawBeak(){
 push();
  fill(28, 1, 0);
  triangle(445, 380, 500, 440, 555, 380);
  ellipse(500, 355, 120, 120)
  pop();

}

//drawing the bird's body

function drawBody(){
push();
fill(215, 148, 46);
ellipse(500, 450, 400, 350)
pop();


}

// Draw both wings for bird with lighter colour

function drawWings(){

push();
fill(168, 116, 35);
ellipse(350, 500, 150, 300);
ellipse(650, 500, 150, 300);




}