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
let kMessage = 'this is k.....pretty annoying';
let lMessage = 'L';
let zMessage = 'zebra!!!';
let xMessage = 'xylophone?';
let cMessage = 'hey this is my initial';
let vMessage = 'v? or not to v';
let bMessage = 'BBBBZZZZZZZZZ';
let nMessage = 'this is an m';
let mMessage = 'this is an n';

/**
 * this is to create my canvas, once again.
/** */
function setup() {
    createCanvas(200, 200)
    background("#b31bf9")
}

//idk yet whta this draw will do, but prob a lot

function draw() {
    drawLine();
}

function drawLine() {
    push();
    fill("#89f523")
    textAlign(CENTER)
    textSize(13)
    text("press the letters of your keyboard!", 100, 180)
    pop();
}


function keyPressed(event) {
    if (event.keyCode === 81) {
        push();
        console.log("lol")

        fill("#b3fa0f")
        textSize(10)
        text(qMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 87) {
        push();
        console.log("hi")

        fill("#0486ff")
        textSize(10)
        text(wMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 69) {
        push();
        console.log("69lol")

        fill("#b3fa0f")
        textSize(10)
        text(eMessage, 20, 100, 200, 200)
        pop();

    }
    else if (event.keyCode === 82) {
        push();
        console.log("lol")

        fill("#74ccfb")
        textSize(10)
        text(rMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 84) {
        push();
        console.log("t message")

        fill("#f4a3fc")
        textSize(10)
        text(tMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 89) {
        push();
        console.log("t message")

        fill("#fa0fb0")
        textSize(10)
        text(yMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 85) {
        push();
        console.log("u message")

        fill("#fa170f")
        textSize(10)
        text(uMessage, 20, 100, 200, 200)
        pop();

    }
    else if (event.keyCode === 73) {
        push();
        console.log("i message")

        fill("#fa550f")
        textSize(10)
        text(iMessage, 1, 100, 200, 200)
        pop();

    }
    else if (event.keyCode === 79) {
        push();
        console.log("o message")

        fill("#fac70f")
        textSize(10)
        text(oMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 80) {
        push();
        console.log("p message")

        fill("#0ffa1f")
        textSize(10)
        text(pMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 65) {
        push();
        console.log("a message")

        fill("#d7fa0f")
        textSize(10)
        text(aMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 83) {
        push();
        console.log("a message")

        fill("#0ffa98")
        textSize(10)
        text(sMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 68) {
        push();
        console.log("a message")

        fill("#0ffab7")
        textSize(10)
        text(dMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 70) {
        push();
        console.log("a message")

        fill("#0f52fa")
        textSize(10)
        text(fMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 71) {
        push();
        console.log("a message")

        fill("#420ffa")
        textSize(10)
        text(gMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 72) {
        push();
        console.log("a message")

        fill("#fa0ffa")
        textSize(10)
        text(hMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 74) {
        push();
        console.log("a message")

        fill("#fa0f0fa4")
        textSize(10)
        text(jMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 75) {
        push();
        console.log("a message")

        fill("#396d6f")
        textSize(10)
        text(kMessage, 20, 100)
        pop();

    }
    else if (event.keyCode === 76) {
        push();
        console.log("a message")

        fill("#69385c")
        textSize(10)
        text(lMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 90) {
        push();
        console.log("a message")

        fill("#b3fa0f")
        textSize(10)
        text(zMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 88) {
        push();
        console.log("a message")

        fill("#b3fa0f")
        textSize(10)
        text(xMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 67) {
        push();
        console.log("a message")

        fill("#b3fa0f")
        textSize(10)
        text(cMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 86) {
        push();
        console.log("a message")

        fill("#b3fa0f")
        textSize(10)
        text(vMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 66) {
        push();
        console.log("a message")

        fill("#90c1e0")
        textSize(10)
        text(bMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 78) {
        push();
        console.log("a message")

        fill("#b15c0c")
        textSize(10)
        text(nMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 77) {
        push();
        console.log("a message")

        fill("#b3fa0f")
        textSize(10)
        text(mMessage, 20, 100)
        pop();
    }
}









//"#b31bf9"


function keyReleased(event) {
    if (event.keyCode === 81) {
        push();
        console.log("bye bye")

        fill("#b31bf9")
        textSize(10)
        text(qMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 87) {
        push();
        console.log("bye bye")

        fill("#b31bf9")
        textSize(10)
        text(wMessage, 20, 100)
        pop();
    }

    else if (event.keyCode === 69) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(eMessage, 20, 100, 200, 200)
        pop();
    }
    else if (event.keyCode === 82) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(rMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 84) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(tMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 89) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(yMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 85) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(uMessage, 20, 100, 200, 200)
        pop();
    }
    else if (event.keyCode === 73) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(iMessage, 1, 100, 200, 200)
        pop();
    }
    else if (event.keyCode === 79) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(oMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 80) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(pMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 65) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(aMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 83) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(sMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 68) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(dMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 70) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(fMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 71) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(gMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 72) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(hMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 74) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(jMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 75) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(kMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 76) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(lMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 90) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(zMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 88) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(xMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 67) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(cMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 86) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(vMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 66) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(bMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 78) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(nMessage, 20, 100)
        pop();
    }
    else if (event.keyCode === 77) {
        push();
        console.log("bye byelol")

        fill("#b31bf9")
        textSize(10)
        text(mMessage, 20, 100)
        pop();
    }
}

