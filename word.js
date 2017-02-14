var Letter = require('./letter.js');

function Word(word) {
    this.word = word;
    this.letters = [];
    this.makeAndPushLettersIntoWord = function () {
        for (var i = 0; i < this.word.length; i++) {
            var lett = new Letter(this.word[i]);
            this.letters.push(lett);
        }
    },
        this.display = function () {
            var str = "";
            for (var i = 0; i < this.letters.length; i++) {
                str = str + this.letters[i].display();
            }

            return str;
        }
    this.updateLetter = function (guess) {
        //check all of the letter objects and see if the guess matches
        //if it does update that letter's found to true


        //one way
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].letter == guess) this.letters[i].found = true;
        }
    }
}

//Check if win (loop through letters, if every one is true, then you win)

// var dog = new Word('dog');
// dog.makeAndPushLettersIntoWord();
// console.log(dog.letters)
// console.log(dog.display())
// dog.updateLetter('z');
// dog.updateLetter('o');
// dog.updateLetter('y');
// console.log(dog.display())

module.exports = Word;