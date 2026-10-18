/**
 * Pressing keys on keyboard... no, literally. 
 * Clara Fioramore
 * 
 * This prototype is to press your keys on a keyboard and see what happens.
 * 
 * 
 * this is to help me visualize my code:
 * 
 * if (any key) is pressed, then diff image appears for all of them
 *  
 */

"use strict";

const ball = {
    // Position
    x: 200,
    y: 200,
    // Size
    size: 50,
    // fill
    fill: "#ffffff",
    // fills
    fills: {
        white: "#ffffff",
        red: "#ff0000",
        blue: "#0000ff"
    },
    // Keys that control the ball's colour
    keys: {
        redKey: 82, // R
        blueKey: 66 // B
    }
}

let kMessage = 'Hi, please work!';

/**const keyK = {
    x: 350,
    y: 350,
    size: 200,
    fill: "#8f0000",
    fills: {
        blue: "#001df6"
    }
}
*/


/**
 * this is to create my canvas, once again.
/** */
function setup() {
    createCanvas(1000, 1000)
}

//idk yet whta this draw will do, but prob a lot

function draw() {

    background("#b31bf9")

    /**keyK();
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
*/

}




function keyPressed(event) {
    /**if (event.keyCode === ball.keys.redKey) {
        ball.fill = ball.fills.red;
    }
    else if (event.keyCode === ball.keys.blueKey) {
        ball.fill = ball.fills.blue;
    }*/
    if (event.keyCode === 75) {
        console.log("hi")
        text(kMessage, 500, 500), fill("#0dfd15"), textSize(8000);
    }
    // keyK.fill = keyK.fills.blue;
}
