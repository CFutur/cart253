/**
 * Skyscraper
 * 
 * Clara Fioramore
 * 
 * This project is just to 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

function setup() {
    createCanvas(400, 600);
    background("#9bc6ff")
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawBuilding1();
    drawBuilding2();
    drawBuilding3();

    drawWindowBuilding(35, 170, 40, 40);
    drawWindowBuilding(95, 170, 40, 40);
    drawWindowBuilding(35, 240, 40, 40);
    drawWindowBuilding(95, 240, 40, 40);
    drawWindowBuilding(35, 330, 40, 40);
    drawWindowBuilding(95, 330, 40, 40);
    drawWindowBuilding(35, 420, 40, 40);
    drawWindowBuilding(95, 420, 40, 40);
    drawWindowBuilding(35, 510, 40, 40);
    drawWindowBuilding(95, 510, 40, 40);

}

function drawWindowBuilding(x, y, w, h) {


    push();
    strokeWeight(1);
    stroke("#010233")
    fill("#6779aa")
    rect(x, y, w, h)
}
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