// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// --The app should end when a player guesses the correct word or runs out of guesses.
var letter = require('./letter');
var word = require('./word');
var game = require('./game.js');

letter();
word();
game();
