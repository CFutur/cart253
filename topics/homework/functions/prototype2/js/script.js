/**
 * Frame for webcam!
 * Clara Fioramore
 * 
 * This is kind of a photobooth project, pose in front of the camera and say cheese!! Then you can screenshot it and keep it as a little pfp of you
 * 
 * controls : key S (83)
 * 
 * 
 * GETTING LOTS OF HELP FROM P5JS CODE OF "IMPPORTED MEDIA VIDEO CAPTURE"
 * https://p5js.org/examples/Imported-Media-Video-Capture/
 * 
 * ill also be commenting more what i understood and what it does so i can use the code with full understanding 
 *  uses: 
 p5.js
 https://p5js.org/
 * 
 */

"use strict";
//var of my rgba
var r;
var g;
var b;
var a;

let capture;

//undefined cause we are defining all of them later
// let petal1 = undefined;
// let petal2 = undefined;
// let petal3 = undefined;
// let petal4 = undefined;
// let petal5 = undefined;
// let petal6 = undefined;
// let petal7 = undefined;
// let petal8 = undefined;
// let petal9 = undefined;
// let petal10 = undefined;

/**
 * creating our canvas size + background and associating our capture variable with function createCapture + capture size + hiding capture 
*/
function setup() {
    createCanvas(700, 550);
    background("#bef394")

    //the create capture function will allow us to use the device's webcam to capture the video. 
    //the VIDEO seem to be case sensitive, since it is always in all caps in every website i look at. 
    capture = createCapture(VIDEO);
    //make the capture size smaller than the canvas and in the middle to allow for a cute frame around it :) (yes the smile is important)
    capture.size(800, 800);
    //then we use capture.hide() for WHAT I UNDERSTOOD to remove the html element? because apparenrly when there is a createCapture, it creates two webcam, one ontop of the other, but we only wanna keep one and turn it into a draw image. i think. 
    capture.hide()

}


/**
 * my draw makes the image capture and all my draw petals, draw middle, draw oval, drawtext and a noloop
*/
function draw() {
    //background("#bef394")

    //draw the video capture, as i said earlier, in the draw function. so we can draw on it and around it :)
    //i also think this image() will be to help me center my image, instead of the capture.size above, which im afraid will not help me.
    //              x,   y,   width,  height
    image(capture, 130, 100, 450, 350);

    drawPetal(200, 100, 50);//these are for the left top flower
    drawPetal(235, 75, 50);//these are for the left top flower
    drawPetal(165, 75, 50);//these are for the left top flower
    drawPetal(180, 30, 50);//these are for the left top flower
    drawPetal(220, 30, 50);//these are for the left top flower
    drawPetal(520, 420, 50);//these are the bottom right flower
    drawPetal(550, 385, 50);//these are the bottom right flower
    drawPetal(535, 460, 50);//these are the bottom right flower
    drawPetal(585, 415, 50);//these are the bottom right flower
    drawPetal(580, 460, 50);//these are the bottom right flower
    drawMiddle(200, 60, 50);// this one is for the top left middle
    drawMiddle(550, 430, 50);// this one is for the bottom right flower
    drawOval(100, 300, 100, 50);//left ovals
    drawOval(140, 350, 70, 30);//left ovals
    drawOval(50, 400, 120, 90);//left ovals
    drawOval(500, 100, 70, 30);//right ovals
    drawOval(570, 140, 50, 90);//right ovals
    drawText(); // text at the bottom
    noLoop(); //make sure it doesnt keep running every second
}

//when pressing s, let one version of the whole draw play, press again and again for different outcomes
function keyPressed(event) {
    if (event.keyCode === 83) {
        loop();
    }
}
//function to draw my 5 ovals
function drawOval(x, y, w, h) {
    let colour2 = calculateColour2(r, g, b, a) //rgba as in the colour RGBA(red, green,blue and then opacity?)
    push();
    noStroke();
    fill(colour2)
    //fill("#f8e590")
    ellipse(x, y, w, h)
    pop();
}
//drawing two of my middles
function drawMiddle(x, y, size) {
    push();
    noStroke();
    fill("#ffffff")
    ellipse(x, y, size)
    pop();
}
//drawing all 10 of my petals with this
function drawPetal(x, y, size) {
    let colour = calculateColour(r, g, b, a);

    push();
    noStroke();
    fill(colour)
    //fill("#f8e590")
    ellipse(x, y, size)
    pop();
}

//this function and the one underneath randomize the colour for the flowers and oval
function calculateColour(r, g, b, a) {
    //the RGBA here stays in the yellow, orange.
    r = random(255, 255);
    g = random(200, 245);
    b = random(209);
    a = random(255, 255);

    let result = color(r, g, b, a)

    return result;
}
function calculateColour2(r, g, b, a) {
    //the RGBA here stays in the blue, purple.
    r = random(0, 209);
    g = random(123, 231);
    b = random(255, 255);
    a = random(255, 255);
    let result = color(r, g, b, a)
    return result;
}



//this is to draw my text at the bottom indicating to the user what to do
function drawText() {
    push();
    fill("#ff5d5d")
    textSize(50)
    text("Pose & Press on the S key", 60, 540)
}