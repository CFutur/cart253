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

let qMessage = 'this is a q...';
let wMessage = 'this is a WWWWWWW!!!';
let eMessage = "evaaa, walll-eee, disney don't sue me please";
let rMessage = 'this is the letter r, i dislike it';
let tMessage = 't pose';
let yMessage = 'and it was all YELLOOWWWW';
let uMessage = 'u are.... my fireee, the one...desire. Believe- blocked for copyright reasons.';
let iMessage = 'I have been really into song lyrics, I shall stop now.';
let oMessage = 'this is the letter O!';
let pMessage = 'papyrus';
let aMessage = 'AAAAAAAAAAAAAAAA';
let sMessage = 'thi i the letter  (haha, no s)';
let dMessage = "don't worry, be happy!";
let fMessage = 'hey this is my second initial!';
let gMessage = 'this is a g!!';
let hMessage = 'this is old boring H';
let jMessage = 'j, that is the letter.';
let kMessage = 'Hi, please work!';
let lMessage = 'L';
let zMessage = 'zebra!!!';
let xMessage = 'xylophone?';
let cMessage = 'hey this is my initial';
let vMessage = 'v? or not to v';
let bMessage = 'BBBBZZZZZZZZZ';
let nMessage = 'this is an m';
let mMessage = 'this is an n';
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
    createCanvas(200, 200)
    background("#b31bf9")
}

//idk yet whta this draw will do, but prob a lot

function draw() {



    //keyK();
    // push();
    // noStroke();
    // fill(ball.fill);
    // ellipse(ball.x, ball.y, ball.size);
    // pop();


}




function keyPressed(event) {
    /*
    if (event.keyCode === ball.keys.redKey) {
        ball.fill = ball.fills.red;
    }
    else if (event.keyCode === ball.keys.blueKey) {
        ball.fill = ball.fills.blue;
    }
    */

    if (event.keyCode === 75) {
        push();
        console.log("hi")

        fill("#0486ff")
        textSize(10)
        text("Hi, please work!", 100, 100)
        pop();
    }
    else if (event.keyCode === 69) {
        push();
        console.log("69lol")

        fill("#b3fa0f")
        textSize(10)
        text("Hi, please work!", 100, 100)
        pop();

    }

    // keyK.fill = keyK.fills.blue;
}


function keyReleased(event) {
    if (event.keyCode === 75) {
        push();
        console.log("bye bye")

        fill("#b31bf9")
        textSize(10)
        text("Hi, please work!", 100, 100)
        pop();
    }
    else if (event.keyCode === 69) {
        push();
        console.log("bye bye69lol")

        fill("#b31bf9")
        textSize(10)
        text("Hi, please work!", 100, 100)
        pop();
    }
}
