/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let randomWord;
let theWord;
let allLimbs = 6;
let noLimbs = allLimbs;
// let pressedLetters = "______";
let pressedLetters = [];

let poles = [
    {
        x1: 50,
        y1: 580,
        x2: 300,
        y2: 580,
        size: 10,
        colour: "#000000",
    },
    {
        x1: 150,
        y1: 580,
        x2: 150,
        y2: 225,
        size: 9,
        colour: "#000000",
    },
    {
        x1: 150,
        y1: 225,
        x2: 300,
        y2: 200,
        size: 9,
        colour: "#000000",
    },
    {
        x1: 300,
        y1: 200,
        x2: 300,
        y2: 250,
        size: 9,
        colour: "#000000",
    }
];

let bonhomme = [
    { //Head
        x: 300,
        y: 280,
        size: 50,
        colour: "#000000",
        // x1: 300,
        // y1: 330,
        // x2: 300,
        // y2: 450,
        // size: 9,
        // colour: "#000000"
    },
    { //torso
        x1: 300,
        y1: 330,
        x2: 300,
        y2: 450,
        size: 9,
        colour: "#000000",
    },
    { // left arm
        x1: 300,
        y1: 350,
        x2: 250,
        y2: 320,
        size: 9,
        colour: "#000000",
    },
    { //right arm
        x1: 300,
        y1: 350,
        x2: 350,
        y2: 320,
        size: 9,
        colour: "#000000",
    },
    { // left leg
        x1: 300,
        y1: 450,
        x2: 250,
        y2: 500,
        size: 9,
        colour: "#000000",
    },
    { // right leg
        x1: 300,
        y1: 450,
        x2: 350,
        y2: 500,
        size: 9,
        colour: "#000000",
    }
];

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(900, 600);
    newGame();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#192191")

    for (let lines of poles) {
        drawHangmanPole(lines);
    }

    // push();
    textSize(50)
    text(theWord.join(' '), 400, 480)
    textSize(30)
    text(`${pressedLetters.join(', ')}`, 350, 550);
    // pop();

    // for (let y = 0; y < 6; y++) {
    //     if (stupidArray[y] == true) {
    //         drawHangman(bonhomme[y]);
    //     }
    // }
    if (allLimbs == 6 || theWord.indexOf('_') == -1) {
        endGame();
    }

}
function newGame() {
    let words = ["piano", "store", "water", "ideas", "mario", "boo", "headphones", "sandstone"]

    // choose a word on random and splice it up already
    randomWord = random(words).split('');
    //the word chosen is getting taken and depending on its length, theres _ getting drawn where the letters will appear
    theWord = Array(randomWord.length).fill('_');
    console.log(theWord)


    noLimbs = allLimbs;

    pressedLetters = [];
}

function drawHangmanPole(lines) {
    push();
    stroke(lines.colour);
    strokeWeight(lines.size)
    line(lines.x1, lines.y1, lines.x2, lines.y2);
    pop();
}

function checkGuessedWord(letter) {
    pressedLetters.push(letter)

    let correctGuess = false;
    for (let i = 0; i < theWord.length; i++) {
        if (theWord[i] == letter) {
            rightGuess[i] = letter;
            correctGuess = true;
        }
    }
}

function keyPressed(event) {
    if (event.keyCode === 13) {
        newGame();
    }
    else if (event.keyCode >= 65 && event.keyCode <= 90 && !pressedLetters.includes(key)) {
        checkGuessedWord(key);
    }
}


function endGame() {
    if ()
}