var Letter = require("./letter");

var Word = function(tobeguessed){
    this.arrayword = tobeguessed.split("");
    this.letters = [];
    this.create = function(){
        for (let i = 0; i < this.arrayword.length; i++) {
            var temp = new Letter.Letter(this.arrayword[i]);
            this.letters.push(temp);
        }
    }
    this.process = function(){
        this.display = [];
        var string = "";
        for (let i = 0; i < this.letters.length; i++) {
            var temp = this.letters[i].display();
            this.display.push(temp);
        }
    }
    this.display = [];
    this.guess = function(letra){
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].choice(letra);
        }
    }
    this.check = function(){
        for (let i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guessed == false){
                return false;
            }
        }
        return true;
    }
}

module.exports.Word = Word;


// console.log(tobeguessed);
// var blah = new Word(tobeguessed);
// console.log(blah.letters);
// console.log(blah.display);
// blah.create();
// blah.process();
// console.log(blah.letters);
// console.log(blah.display);
// blah.guess("A");
// blah.process();
// console.log(blah.letters);
// console.log(blah.display);

// var blah = new Word("WOLVERINE");
// blah.create();
// blah.process();
// console.log(blah.check());

