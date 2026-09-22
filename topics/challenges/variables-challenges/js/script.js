/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};
//let the sky turn from blue to black
let sky = {
  //colour background
  fill: {
    r: 160,
    g: 180,
    b: 200

  }

}







/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
*/
function draw() {
  background(sky.fill.r, sky.fill.g, sky.fill.b);

  //make the little dude more red and angryyyy

  mrFurious.fill.g -= 1;
  mrFurious.fill.b -= 1;
  //Sky goes from blue to black from ANGGERER
  sky.fill.r -= 1;
  sky.fill.g -= 1;
  sky.fill.b -= 1;

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}