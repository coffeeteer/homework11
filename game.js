//game.js file will randomly select a word for the player.
var inquirer = require('inquirer');

module.exports = function() {
	console.log('Pick another letter!');
};

module.exports();

// create constructtor make word array & method to make random
function WordPick() {
	this.word = ['zombie', 'unzip', 'knapsack','bikini', 'fishhook', 'duplex', 'difficult', 'easy'];
	this.makeRandom = function () {
	    return this[Math.floor(Math.random() * this.length)]
	}
}	
var randomWord = WordPick.makeRandom();


inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
    // Use user feedback for... whatever!! 
});

