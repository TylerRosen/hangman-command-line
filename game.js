var inquirer = require('inquirer')
var Word = require('./word.js');

//Available words

var words = ['table', 'hockey', 'computer'];

//Number of guesses left

var guessesLeft = "6";

//Stores number of correct guesses
var correctGuesses = 0;

//Chooses random word

var wordToPlay = words[Math.floor(Math.random() * words.length)];

// Creates the word
var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();

//Displays dasshes on page
console.log(wordObject.display());

//Displays # of guesses left
console.log("Guesses Left : " + guessesLeft);

function askLetter() {
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Pick a letter? If you are done then say no."
        },
    ]).then(function (data) {
        var doAgain = false;

        if (data.guess != 'no') {
            //if the guess is not in the word
            if (wordObject.word.indexOf(data.guess) == -1) {
                wordObject.updateLetter(data.guess);

                console.log("Wrong!");
                console.log(wordObject.display());
                guessesLeft--;
                console.log("Guesses Left : " + guessesLeft);

                doAgain = true;

            } else {
            // Display correct letter
                wordObject.updateLetter(data.guess);

                correctGuesses++;

                console.log(wordObject.display());

                console.log("Guesses Left : " + guessesLeft);

                doAgain = true;
            }

            if (guessesLeft == 0) {
                console.log("You lose!");
            
            //Restarts game
                function restart() {
                    correctGuesses = 0;
                    wordToPlay = words[Math.floor(Math.random() * words.length)];

                    wordObject = new Word(wordToPlay);
                    wordObject.makeAndPushLettersIntoWord()
                    guessesLeft = 6;
                    console.log(wordObject.display());
                    doAgain = true;

                }

                restart();

            
            //Checks if all correct letters are guessed
            } else if (correctGuesses == wordObject.display().length) {
                console.log("You Win!")

                restart();
            }

            if (doAgain) {
                doAgain = false;
                askLetter();
            }

        }

        else {
            console.log("Goodbye");
        }

    });
}

askLetter()