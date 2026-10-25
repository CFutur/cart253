var capture;
var canvasStatus = true;
var button;

function setup() {
    createCanvas(390, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide();
    button = createButton("freeze/unfreeze");
    button.mousePressed(toggle);
}

function draw() {
    background(255);
    image(capture, 0, 0, 320, 240);
}

function toggle() {
    if (canvasStatus === true) {
        canvasStatus = false;
        noLoop();
    } else {
        canvasStatus = true;
        loop();
    }
}