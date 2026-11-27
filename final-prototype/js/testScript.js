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
        colour: "#5b5d81",
    },
    {
        x1: 150,
        y1: 580,
        x2: 150,
        y2: 225,
        size: 9,
        colour: "#5b5d81",
    },
    {
        x1: 150,
        y1: 225,
        x2: 300,
        y2: 200,
        size: 9,
        colour: "#5b5d81",
    },
    {
        x1: 300,
        y1: 200,
        x2: 300,
        y2: 250,
        size: 9,
        colour: "#5b5d81",
    }
];

let bonhomme = [
    { //Head
        x: 300,
        y: 280,
        size: 50,
        colour: "#000000",
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
    textFont('Berlin Sans Fb')
    newEasyGame();
    // newMediumGame();
    // newHardGame();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#d4eff5")
    push();
    textSize(50)
    textStyle(BOLD)
    fill("#f6f885")
    textFont('Courier New')
    text('Hangman game', 502, 102)
    textSize(50)
    textStyle(BOLD)
    fill("#496399")
    textFont('Courier New')
    text('Hangman game', 500, 100)
    pop();

    drawHangman();

    for (let lines of poles) {
        drawHangmanPole(lines);
    }

    drawHangman();

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

    // for (let y = 0; y < 6; y++) {
    //     if (correctGuess[y] = false; == true) {
    //         drawHangman(bonhomme[y]);
    //     }
    // }

    if (noLimbs == 0 || theWord.indexOf('_') == -1) {
        endGame();
    }

}
function newEasyGame() {
    // let words = ["piano", "store", "water", "ideas", "mario", "boo", "headphones", "sandstone"]
    let words = ['balloon', 'banana', 'bear', 'boat', 'boots', 'brother', 'butter', 'carrot', 'cheese', 'coat', 'cookie', 'door', 'grass', 'horse', 'house', 'kite', 'easy', 'kitten', 'lion', 'moon', 'mouse', 'orange', 'potato', 'present', ' rabbit', 'rain', 'robot', 'sand', 'sheep', ' shirt', 'shoes', 'sister', 'snake', 'soap', ' star', 'story', 'sweets', 'teacher', 'tiger', ' train', 'tree', 'water']

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
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] == letter) {
            theWord[i] = letter;
            correctGuess = true;
        }
    }
    if (!correctGuess) {
        noLimbs--;
    }
}

function keyPressed(event) {
    if (event.keyCode === 49) {
        newEasyGame();
    }
    else if (event.keyCode === 50) {
        newMediumGame();
    }
    else if (event.keyCode === 51) {
        newHardGame();
    }
    else if (event.keyCode >= 65 && event.keyCode <= 90 && !pressedLetters.includes(key)) {
        checkGuessedWord(key);
    }
}


function endGame() {
    if (theWord.indexOf('_') === -1) {
        text("Yay! You won :)", 400, 300)
    }
    else {
        text("You lost... better luck next time! \nThe word was " + randomWord.join(''), 400, 300)

    }
}

function drawHangman() {
    //this draws the head when one wrong
    if (noLimbs < allLimbs) {
        fill("#000000")
        ellipse(300, 280, 100)
    }
    //this draws the torso
    if (noLimbs + 1 < allLimbs) {
        push();
        stroke("#000000")
        strokeWeight(9)
        line(300, 330, 300, 450)
        pop();
    }
    //left arm
    if (noLimbs + 2 < allLimbs) {
        push();
        stroke("#000000")
        strokeWeight(9)
        line(300, 350, 250, 320)
        pop();
    }
    //right arm
    if (noLimbs + 3 < allLimbs) {
        push();
        stroke("#000000")
        strokeWeight(9)
        line(300, 350, 350, 320)
        pop();
    }
    //left leg
    if (noLimbs + 4 < allLimbs) {
        push();
        stroke("#000000")
        strokeWeight(9)
        line(300, 450, 250, 500)
        pop();
    }
    if (noLimbs + 5 < allLimbs) {
        push();
        stroke("#000000")
        strokeWeight(9)
        line(300, 450, 350, 500)
        pop();
    }
}