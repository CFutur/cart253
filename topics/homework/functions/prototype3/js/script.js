/**
 * Skyscraper
 * 
 * Clara Fioramore
 * 
 * This project is simply to pratice parameters, a very simple skyscraper landscape. nothing more. simplicity is sometimes beautiful
 */

"use strict";

/**
 * creating my canvas and made my background sky colour (blue)
*/

function setup() {
    createCanvas(400, 600);
    background("#9bc6ff")
}


/**
 * 
*/
function draw() {
    //building on the left
    drawBuilding1();
    //draw the big darker building on the right
    drawBuilding2();
    //had to put these window here so they would be behind the other building
    drawWindowBuilding3(230, 60, 50, 90);
    drawWindowBuilding3(320, 60, 50, 90);
    drawWindowBuilding3(230, 180, 50, 90);
    drawWindowBuilding3(320, 180, 50, 90);
    //draw the small pale grey building on the right
    drawBuilding3();
    //                       x,  y,   w,  h
    drawWindowBuilding1(35, 170, 40, 40);
    drawWindowBuilding1(95, 170, 40, 40);
    drawWindowBuilding1(35, 240, 40, 40);
    drawWindowBuilding1(95, 240, 40, 40);
    drawWindowBuilding1(35, 330, 40, 40);
    drawWindowBuilding1(95, 330, 40, 40);
    drawWindowBuilding1(35, 420, 40, 40);
    drawWindowBuilding1(95, 420, 40, 40);
    drawWindowBuilding1(35, 510, 40, 40);
    drawWindowBuilding1(95, 510, 40, 40);

    drawWindowBuilding2(200, 300, 70, 40);
    drawWindowBuilding2(300, 300, 70, 40);
    drawWindowBuilding2(200, 400, 70, 40);
    drawWindowBuilding2(300, 400, 70, 40);
    drawWindowBuilding2(200, 500, 70, 40);
    drawWindowBuilding2(300, 500, 70, 40);

}
/**
 * these window functions are all mostly the same except the colour, going darker the further we go back
*/
function drawWindowBuilding3(x, y, w, h) {


    push();
    strokeWeight(1);
    stroke("#010233")
    fill("#3f4a68")
    rect(x, y, w, h)
}
function drawWindowBuilding2(x, y, w, h) {


    push();
    strokeWeight(1);
    stroke("#010233")
    fill("#9aaad6")
    rect(x, y, w, h)
}




function drawWindowBuilding1(x, y, w, h) {


    push();
    strokeWeight(1);
    stroke("#010233")
    fill("#6779aa")
    rect(x, y, w, h)
}
/**
 * these three buildings are all different, easily differentiable with the colour of them. they're all written in quad, but one of them is a rectangle
*/
function drawBuilding1() {
    push();
    noStroke();
    fill("#707070")
    //    top left corner, top right corner, bottom right corner, bottom left corner
    quad(20, 150, 150, 70, 150, 600, 20, 600);
    pop();
}
function drawBuilding2() {
    push();
    noStroke();
    fill("#383838")
    //    top left corner, top right corner, bottom right corner, bottom left corner
    quad(200, 30, 400, 30, 400, 600, 200, 600);
    pop();
}

function drawBuilding3() {
    push();
    noStroke();
    fill("#cac9c9")
    //    top left corner, top right corner, bottom right corner, bottom left corner
    quad(170, 200, 400, 250, 400, 600, 170, 600);
    pop();
}