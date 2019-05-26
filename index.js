var Word = require("./word");
var inquirer = require("inquirer");

function game() {

    var options = ["homer", "marge", "bart", "lisa", "leela", "bender", "wolverine", "storm","popeye","tweety","sylvestre","superman","batman","joker","snoopy","goofy","tigger","stewie","wilma","minnie","mickey"];
    var number = Math.floor(Math.random() * options.length);
    var tobeguessed = options[number];
    console.log("-----New Word-----")
    var gameWord = new Word.Word(tobeguessed);
    gameWord.create();
    guesses = 10;
    hangman(gameWord,guesses);

}

function hangman(gameWord,guesses) {
    console.log("You have " + guesses + " left...")
    gameWord.process();
    console.log(gameWord.display);
    inquirer.prompt([
        {
            name: "test",
            message: "Guess a letter"
        }
    ]).then(function (res) {
        gameWord.guess(res.test);
        if (gameWord.check()){
            console.log("You have won... restarting game...");
            game();
            return;
        }
        
        guesses -= 1;
        
        if (gameWord.check() == false & guesses<1){
            console.log("You have lost... restarting game...");
            game();
        }
        else {
            hangman(gameWord,guesses);
        }
    })
}

game();