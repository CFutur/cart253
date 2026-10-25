/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * 
 * GETTING LOTS OF HELP FROM P5JS CODE OF "IMPPORTED MEDIA VIDEO CAPTURE"
 * https://p5js.org/examples/Imported-Media-Video-Capture/
 * 
 * ill also be commenting more what i understood and what it does so i can use a code without understanding it
 */

"use strict";
let capture;
/**
 * creating our canvas size and 
*/
function setup() {
    createCanvas(500, 100);

    //the create capture function will allow us to use the device's webcam to capture the video. 
    //the VIDEO seem to be case sensitive, since it is always in all caps in every website i look at. 
    capture = createCapture(VIDEO);
    //make the capture size smaller than the canvas and in the middle to allow for a cute frame around it :) (yes the smile is important)
    capture.size(100, 100);
    //then we use capture.hide() for WHAT I UNDERSTOOD to remove the html element? because apparenrly when there is a createCapture, it creates two webcam, one ontop of the other, but we only wanna keep one and turn it into a draw image. i think. 
    capture.hide();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#a9f16ebb")

    //draw the video capture, as i said earlier, in the draw function. so we can draw on it and around it :)
    image(capture, 0, 0, 360, 400);

}