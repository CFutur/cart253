/**
 * Prototype 1 (Ugh, i was so boring back then.)
 * 
 * Galactic experience! (Reworked)
 * Clara Fioramore
 * 
 * This first prototype will have a space theme playing around with the object ontop of the cursor
 * 
 * ANDDD since this is the last prototype as homework, I thought it would almost be nostalgic to go back and make this code way shorter and cleaner!
 * 
 * Here's what I changed: 
 * put all of my repetive ellipse into arrays and then placed the planets that were drawn directly in draw, in an event and then only had to write the push and pop thing once. 
 */

"use strict";

let stars = [ //arrays for my 3 white and off white stars 
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
let planets = [ //array for my two big planet that dont move
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
let moons = [ //array for the big moon and its tiny craters. 
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
    for (let moon of moons) {
        drawMoons(moon);
    }
    // 3 different planets, following my mouse, their sizes and their colours.
    drawMousePlanets(mouseX, mouseY, 110, "#145051");
    drawMousePlanets(mouseX, mouseX, 150, "#1c253c");
    drawMousePlanets(mouseY, mouseY, 80, "#3c1c31");
}
//                         (this is the event with my parameters in them)
function drawMousePlanets(x, y, size, colour) {
    push();
    noStroke();
    fill(colour);
    ellipse(x, y, size);
    pop();
}
//this function takes the star, places it in my fill, ellipse, etc. then, brings it upstairs in the loop let star of stars, then takes the parameters of stars in my array and inserts it on canvas. 
function drawStars(star) {
    push();
    fill(star.colour)
    ellipse(star.x, star.y, star.size);
    pop();
}

// FOR ALL OF MY FUNCTIONS CREATE STARS, I REALIZED I DIDNT NEED THEM, SINCE MY OBJECTS ARE NOT MOVING. REALIZED IT TOO LATE SO IM JUST COMMENTING THEM, IN CASE I EVER WANNA MAKE MY PLANET MOVE
// function createStars() {
//     let star = {
//         x: stars.x,
//         y: stars.y,
//         size: stars.size,
//         fill: stars.colour,
//     }
//     return star;
// }

//same process as stars
function drawPlanets(planet) {
    push();
    fill(planet.colour)
    ellipse(planet.x, planet.y, planet.size);
    pop();
}
// function createPlanets() {
//     let planet = {
//         x: planets.x,
//         y: planets.y,
//         size: planets.size,
//         fill: planets.colour,
//     }
//     return planet;
// }

//same process as stars and planets. 
function drawMoons(moon) {
    push();
    fill(moon.colour)
    ellipse(moon.x, moon.y, moon.size);
    pop();
}
// function createMoons() {
//     let moon = {
//         x: moons.x,
//         y: moons.y,
//         size: moons.size,
//         fill: moons.colour,
//     }
//     return moon;
// }
