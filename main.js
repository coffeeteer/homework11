// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// --The app should end when a player guesses the correct word or runs out of guesses.
var letter = require('./letter'); //Methods that show _ or letters
var word = require('./word');  //Checks letters against the random words
var game = require('./game.js'); //selects random word for player

letter();
word();
game();
