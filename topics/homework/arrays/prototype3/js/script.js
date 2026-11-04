/**
 * Prototype 1 (Ugh, i was so boring back then.)
 * 
 * Galactic experience! (Reworked)
 * Clara Fioramore
 * 
 * This first prototype will have a space theme playing around with the object ontop of the cursor
 * 
 * ANDDD since this is the last prototype as homework, I thought it would almost be nostalgic to go back and make this code way shorter and cleaner!
 */

"use strict";
let stars = [
    {
        x: 850,
        y: 50,
        size: 50,
        colour: "#fffdd0"
    },
    {
        x: 250,
        y: 400,
        size: (40),
        colour: "#e3e4ed"
    },
    {
        x: 750,
        y: 380,
        size: 250,
        colour: "#fdf4dc"
    }
]
let planets = [
    {
        x: 900,
        y: 220,
        size: 150,
        colour: "#281c3c"
    },
    {
        x: 500,
        y: 150,
        size: 200,
        colour: "#1f3e5a"
    }
]
let moons = [
    {
        x: 820,
        y: 400,
        size: 300,
        colour: "#c8c8c8"
    },
    {
        x: 760,
        y: 330,
        size: 50,
        colour: "#969696"
    },
    {
        x: 740,
        y: 450,
        size: 70,
        colour: "#969696"
    },
    {
        x: 870,
        y: 400,
        size: 50,
        colour: "#969696"
    }
]

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
    for (let star of stars) {
        drawStars(star);
    }
    for (let planet of planets) {
        drawPlanets(planet);
    }
    for (let moons of moon) {
        drawMoons(moon);
    }
}
}
drawMoon();



function drawStars(star) {
    push();
    fill(star.colour)
    ellipse(star.x, star.y, star.size);
    pop();
}
function createStars() {
    let star = {
        x: stars.x,
        y: stars.y,
        size: stars.size,
        fill: stars.colour,
    }
    return star;
}
function drawPlanets(planet) {
    push();
    fill(planet.colour)
    ellipse(planet.x, planet.y, planet.size);
    pop();
}
function createPlanets() {
    let planet = {
        x: planets.x,
        y: planets.y,
        size: planets.size,
        fill: planets.colour,
    }
    return planet;
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