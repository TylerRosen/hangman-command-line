function Letter(letter){
    this.letter = letter;
    this.found = false;
    this.display = function() {
        if (this.found) return this.letter;
        else return '_';
    }
}

module.exports = Letter;

// var Letter = function(let) {

//     this.charac =
//         let;

//     this.appear = false;

//     this.letterRender = function() {
//         //if appear is false then show the _
//         //else appear is true then show character
//         return !(this.appear) ? " _ " : this.charac;
//     };
// };