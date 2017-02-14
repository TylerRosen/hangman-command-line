var inquirer = require('inquirer')
var Word = require('./word.js');

var words = ['table', 'baseball', 'platypus'];

var guessesLeft = "6";

var wordToPlay = words[Math.floor(Math.random() * words.length)];

var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();

console.log(wordObject.display());

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
                wordObject.updateLetter(data.guess);

                console.log(wordObject.display());

                console.log("Guesses Left : " + guessesLeft);

                doAgain = true;
            }

            if (guessesLeft == 0) {
                console.log("You lose!");
                wordToPlay = words[Math.floor(Math.random() * words.length)];

                wordObject = new Word(wordToPlay);
                wordObject.makeAndPushLettersIntoWord()
                guessesLeft = 6;
                console.log(wordObject.display());
                doAgain = true;
            }

            else if (data.guess === wordToPlay) { //this will never happen
                console.log("You win!")
            }

            if (doAgain){
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