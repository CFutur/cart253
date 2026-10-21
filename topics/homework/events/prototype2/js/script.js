/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
// // The traffic light
// const trafficLight = {
//     // Position and size
//     x: 200,
//     y: 200,
//     size: 100,
//     fill: "#00ff00", // Starts green
//     fills: {
//         stop: "#ff0000", // Red
//         slow: "#ffbb00", // Orange
//         go: "#00ff00" // Green
//     },
//     delay: 1000// How long between lights
// };
// drawWindow(130, 190, 70, 10);
// drawWindow(130, 290, 70, 10);
// drawWindow(230, 290, 70, 10);
// drawWindow(230, 190, 70, 10);
const window1 = {
    x: 130,
    y: 190,
    size: 70,
    radius: 10,
    fill: "#f4f80d",
    fills: {
        normal: "#f4f80d",
        green: "#83e26b",
    },
    delay: 1000
};
const window2 = {
    x: 130,
    y: 290,
    size: 70,
    radius: 10,
    fill: "#f4f80d",
    fills: {
        normal: "#f4f80d",
        pink: "#db7df8",
    },
    delay: 1000000000
};
const window3 = {
    x: 230,
    y: 290,
    size: 70,
    radius: 10,
    fill: "#f4f80d",
    fills: {
        normal: "#f4f80d",
        blue: "#85aedd",
    },
    delay: 1000000000
};
const window4 = {
    x: 230,
    y: 190,
    size: 70,
    radius: 10,
    fill: "#f4f80d",
    fills: {
        normal: "#f4f80d",
        red: "#f81561",
    },
    delay: 1000000000000
};

function drawWindow(theWindow) {
    push();
    noStroke();
    fill(theWindow.fill)
    square(theWindow.x, theWindow.y, theWindow.size, theWindow.radius);
    pop();
    delay: 1000000000
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);
    //changeLightWindow();
    // Start the traffic light cycle
    //setInterval(changeLight, trafficLight.delay);
    //setInterval(window1, window1.delay);
    setInterval(changeLightWindow, 150)

}


/**
 * Display the traffic light
 */
function draw() {
    background("#192449");


    drawChimney();
    drawHouse();
    drawRoof();
    drawBush();
    // drawCloud();
    // drawCloud();
    drawWindow(window1);
    drawWindow(window2);
    drawWindow(window3);
    drawWindow(window4);

    // drawWindow(130, 290, 70, 10, "#f15feac5", 100000);
    // drawWindow(230, 290, 70, 10);
    // drawWindow(230, 190, 70, 10);
    // changeLightWindow();

    // Traffic light
    // push();
    // noStroke();
    // fill(trafficLight.fill);
    // ellipse(trafficLight.x, trafficLight.y, trafficLight.size);
    // pop();
}

function drawBush() {
    push();
    noStroke();
    fill("#2d4d30")
    ellipse(55, 390, 90);
    fill("#4a7a4d")
    ellipse(90, 390, 70);
    fill("#1f5222")
    ellipse(380, 390, 70);
    pop();
}

function drawChimney() {
    push();
    noStroke();
    fill("#271d07")
    rect(250, 70, 70, 250)
    pop();
}

function drawRoof() {
    push();
    noStroke();
    fill("#251a02")
    triangle(210, 90, 30, 170, 390, 170)
}


function drawHouse() {
    push();
    noStroke();
    fill("#3d2c06")
    square(90, 150, 250)
    pop();
}





function changeLightWindow() {
    // Green goes to orange
    if (window1.fill === window1.fills.normal) {
        console.log("win1")
        window1.fill = window1.fills.green;
    }
    else if (window1.fill === window1.fills.green) {
        console.log("win2")
        window1.fill = window1.fills.normal;
    }
    // // Orange goes to red
    // if (window2.fill === window2.fills.normal) {
    //     console.log("win2")
    //     window2.fill = window2.fills.pink;
    // }
    // // Red goes to green
    // if (window3.fill === window3.fills.normal) {
    //     console.log("win3")
    //     window3.fill = window3.fills.blue;
    // }
    // if (window4.fill === window4.fills.normal) {
    //     console.log("win4")
    //     window4.fill = window4.fills.red;
    // }

}