//created array for the possible answers 
var wrestlersStored = ["john cena", 
    "batista", 
    "triple h", 
    "kane", 
    "edge", 
    "randy orton",
     "kurt angle", 
     "rob van dam", 
     "booker t", 
     "jeff hardy"];

//create a variable that stores the results of the game and how many guesses they have left
var wins = 0;
var startGuesses = 20;
var pressSomething = document.getElementById("pressSomething");
var guessesRemaining  = document.getElementById("guessesRamaining");
var alreadyGuessed = document.getElementById("alreadyGuessed");
var results = document.getElementById("results");

var penis = 
//have a key press start the game

document.onkeyup = function (event) {
var userGuess = event.key;

var wrestler = wrestlersStored[Math.floor(Math.random() * wrestlersStored.length)];


if ((userGuess === wrestlersStored[0,1,2,3,4,5,6,7,8,9])) {

}


};

//create variables that references the html

//display the word on the screen

//check to see if the user input matches what is in the answer

//decrease from the number of guesses remaining

//display the letters that are already guessed

//add a win to the "wins" column if the user guesses correctly 



