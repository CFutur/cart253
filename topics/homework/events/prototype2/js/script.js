/**
 * Party in the house
 * Clara Fioramore
 * 
 * This is a project utilizing intervals to create a flashing party in a house through the window
 * 
 * 
 * help from pippin's code with the traffic light
 */

"use strict";

//const for all of my different windows

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
    delay: 150
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
    delay: 100
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
    delay: 100
};

function drawWindow(theWindow) {
    push();
    noStroke();
    fill(theWindow.fill)
    square(theWindow.x, theWindow.y, theWindow.size, theWindow.radius);
    pop();
}

/**
 * this creates a different interval for all my lights and also adds my changeLightWindow(do not think it is necessary)
*/
function setup() {
    createCanvas(400, 400);

    setInterval(changeLightWindow1, window1.delay)
    setInterval(changeLightWindow2, window2.delay)
    setInterval(changeLightWindow3, window3.delay)
    setTimeout(changeLightWindow4, window4.delay)
    changeLightWindow1();
    changeLightWindow2();
    changeLightWindow3();
    changeLightWindow4();
}


/**
 * draws background, the entire house and the windows.
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
}
// function drawCloud() {
//     push();
//     noStroke();
//     fill("#2d4d30")
//     ellipse(55, 390, 90);
//     fill("#4a7a4d")
//     ellipse(90, 390, 70);
//     fill("#1f5222")
//     ellipse(380, 390, 70);
//     pop();
// }
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





function changeLightWindow1() {
    // yellow to green, then if green, go back to yellow. loop. exact for the rest of them except pink who stays the same
    if (window1.fill === window1.fills.normal) {
        console.log("win1")
        window1.fill = window1.fills.green;
    }
    else if (window1.fill === window1.fills.green) {
        console.log("win2")
        window1.fill = window1.fills.normal;
    }
}
function changeLightWindow2() {
    if (window2.fill === window2.fills.normal) {
        console.log("win1")
        window2.fill = window2.fills.pink;
    }
    else if (window2.fill === window2.fills.pink) {
        console.log("win2")
        window2.fill = window2.fills.normal;
    }
}
function changeLightWindow3() {
    if (window3.fill === window3.fills.normal) {
        console.log("win1")
        window3.fill = window3.fills.blue;
    }
    else if (window3.fill === window3.fills.blue) {
        console.log("win2")
        window3.fill = window3.fills.normal;
    }
}
function changeLightWindow4() {
    if (window4.fill === window4.fills.normal) {
        console.log("win1")
        window4.fill = window4.fills.red;
    }

}