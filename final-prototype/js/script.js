/**
 * Hangman game
 * Clara Fioramore
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let stupidArray = [false, false, false, false, false, false]
let stringOfLetters = "abcdefghijklmnopqrstuvwxyz";
let theWord = "_____";
let word;
// A global variable to store our fortune in
let threeLetterWord;
const fiveRandomWords = ["piano", "store", "water", "ideas", "mario"]
let randomWord;
let limb = 0;
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



async function preload() {
    word = await loadJSON("assets/hangmanWords.json");
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(900, 600);
    background("#acced4")

    await preload();

    randomWord = random(fiveRandomWords)
    console.log(randomWord)

    push();
    textSize(25);

    pop();
    // // choose a random word
    // let randomWord = fiveRandomWords[random([1, 5])];
    // console.log(randomWord);
    // // choose a random 3 letter word
    // threeLetterWord = random(randomWord.three);

    // let btn = createButton('Refresh page to draw!'); //create the button and the text on it
    // btn.position(500, 450); //position the button under the canvas
    // //when clicking on the button with mouse, reload the entire window to create new abstract art
    // btn.mousePressed(() => {
    //     window.location.reload();
    // });

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // clear();
    background("#b8edf7")
    // for (let outlines of bonhomme) {
    //     drawHangman(outlines);
    // }
    // drawHangman(bonhomme[0])
    // // this display is just to test if my data works, the word will not appear like that during hangman.
    // push();
    // textSize(18);
    // textAlign(CENTER, CENTER);
    // fill(255, 255, 0);
    // text(threeLetterWord, width / 2, height / 2);
    // pop();
    push();
    textSize(25)
    text(theWord, 400, 450, 100, 100)
    pop();
    for (let lines of poles) {
        drawHangmanPole(lines);
    }
    // let theLetter = keyPressed;
    push();
    textSize(25)
    text(stringOfLetters, 100, 100)
    pop();


    for (let y = 0; y < 6; y++) {
        if (stupidArray[y] == true) {
            drawHangman(bonhomme[y]);
        }
    }
    // if (limb == 6) { alert("LOSER!") }
}

function drawHangmanPole(lines) {
    push();
    stroke(lines.colour);
    strokeWeight(lines.size)
    line(lines.x1, lines.y1, lines.x2, lines.y2);
    pop();
}


function drawHangman(bodyPart) {
    push();
    stroke(bodyPart.colour);
    strokeWeight(bodyPart.size)
    line(bodyPart.x1, bodyPart.y1, bodyPart.x2, bodyPart.y2);
    ellipse(bodyPart.x, bodyPart.y, bodyPart.size)
    fill(bodyPart.colour);
    pop();
}

function keyPressed() {
    let chosenWord = stringOfLetters.split('');
    let underscore = theWord.split('');

    //this one loops the 26 letter of our string
    for (let y = 0; y < (chosenWord.length); y++) {
        console.log("Alphabetical");
        //if a key is pressed, the letter pressed in the string of letters gets replaced by a "_"
        if (key == chosenWord[y]) {
            console.log("underscore");
            // console.log(chosenWord);
            chosenWord[y] = "_";
            // console.log(chosenWord);
            stringOfLetters = chosenWord.join('');
        }

    }

    //this for let loops registers "oh, you clicked a key that the random word contained, so remove the letter from the whole alphabetical string and put a "_" instead."
    for (let z = 0; z < (underscore.length); z++) {
        if (key == randomWord[z]) {
            // console.log(underscore);
            underscore[z] = key;
            // console.log(underscore);
            theWord = underscore.join('');
            console.log("writtenWord");
        }


    }






    let zozo = false;

    console.log(randomWord);

    for (let x = 0; x < (randomWord.length); x++) {
        console.log("for");
        if (key == randomWord[x]) {
            console.log("true");
            zozo = true
        }

        // else {
        //     console.log("drawHangMan");
        //     // drawHangman(bonhomme[limb])
        //     // limb++;

        // }

    }


    if (!zozo) {
        console.log("ooga booga");
        drawHangman(bonhomme[limb])
        stupidArray[limb] = true;
        limb++;
    }



    // //this "for" loop will loop the lenght of the word to find
    // for (let i = 0; i < (randomWord.length); i++) {
    //     console.log("wordLength");


    //     
    // }
}

// stringOfLetters
