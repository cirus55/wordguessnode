var Letter = function (letter){
    this.letter = letter;
    this.guessed = false;
    this.display = function(){
        if (this.guessed){
            return this.letter;
        }
        else{
            return "_";
        }

    }
}

Letter.prototype.choice = function(choice){
    if (choice == this.letter){
        this.guessed = true;
    }
}

module.exports.Letter = Letter;