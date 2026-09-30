/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let bonhomme = false;
const snowMan = {
    //position and size
    //x: 
}

const snowflake = {
    //position and size
    x: 0,
    y: 0,
    size: 5,
    //colour
    fill: "#ffffff"
}


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
    noStroke();
    background("#2e6f8d")


    let x = random(100);
    let y = random(100);

    snowMountain();
    snowflakes();
    if ((mouseIsPressed)) {

        snowman();
        bonhomme = true
    }
    else if (bonhomme) {
        snowman();
    };

}

function snowman() {

    push();
    noStroke();
    fill("#ffffff")
    ellipse(350, 800, 150, 150);
    ellipse(350, 700, 100, 100);
    ellipse(350, 630, 70, 70);
    pop();


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


    // Sending a simple text message
    console.log("Application started successfully.");



    // Sending a debug-specific level log
    console.debug("User session data fetched.");
    pop();
}

function snowflakes() {
    push();
    noStroke();
    fill("#ffffff");
    ellipse(random(1, 1000), random(1, 1000), 30, 30);
    ellipse(random(1, 1000), random(1, 1000), 30, 30);
    ellipse(random(1, 1000), random(1, 1000), 30, 30);
    ellipse(random(1, 1000), random(1, 1000), 30, 30);
    ellipse(random(1, 1000), random(1, 1000), 30, 30);
    ellipse(random(1, 1000), random(1, 1000), 30, 30);
    ellipse(random(1, 1000), random(1, 1000), 30, 30);
    dodo(250);
    // await new Promise(r => settimeout(r, 2000));
    //velocity -= snowflake.x, snowflake.y;
    pop();
}

function dodo(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) { }
}

