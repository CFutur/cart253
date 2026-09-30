/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


const mountainOne = {
    //position and size
    x: 800,
    y: 900,
    w: 700,
    h: 400,
    //colour
    fill: "#b2e6ec",
}
const mountainTwo = {
    //position and size
    x: 200,
    y: 950,
    w: 900,
    h: 400,
    //colour
    fill: "#82c3ca",
}
const mountainThree = {
    //position and size
    x: 450,
    y: 800,
    w: 700,
    h: 250,
    //colour
    fill: "#38929c",
}


function setup() {
    createCanvas(1000, 1000);
}



//idk whatmy draw will be yet sad; y

function draw() {
    background("#2e6f8d")


    let x = random(100);
    let y = random(100);

    snowMountain();
    snowflakes();
    bottomSnowman();
    middleSnowman();
    topSnowman();
}


function snowMountain() {
    push();
    noStroke();
    fill("#38929c");
    ellipse(mountainThree.x, mountainThree.y, mountainThree.w, mountainThree.h);
    fill("#b2e6ec");
    ellipse(mountainOne.x, mountainOne.y, mountainOne.w, mountainOne.h);
    fill("#82c3ca");
    ellipse(mountainTwo.x, mountainTwo.y, mountainTwo.w, mountainTwo.h);
    pop();
}

function snowflakes() {
    strokeweight(5);
    point(x, y);
}