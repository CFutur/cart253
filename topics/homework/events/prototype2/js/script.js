/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
// The traffic light
const trafficLight = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    fill: "#00ff00", // Starts green
    fills: {
        stop: "#ff0000", // Red
        slow: "#ffbb00", // Orange
        go: "#00ff00" // Green
    },
    delay: 100000 // How long between lights
};

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);

    // Start the traffic light cycle
    setInterval(changeLight, trafficLight.delay);
}


/**
 * Display the traffic light
 */
function draw() {
    background(0);

    // Traffic light
    push();
    noStroke();
    fill(trafficLight.fill);
    ellipse(trafficLight.x, trafficLight.y, trafficLight.size);
    pop();
}

function changeLight() {
    // Green goes to orange
    if (trafficLight.fill === trafficLight.fills.go) {
        trafficLight.fill = trafficLight.fills.slow;
    }
    // Orange goes to red
    else if (trafficLight.fill === trafficLight.fills.slow) {
        trafficLight.fill = trafficLight.fills.stop;
    }
    // Red goes to green
    else if (trafficLight.fill === trafficLight.fills.stop) {
        trafficLight.fill = trafficLight.fills.go;
    }
}