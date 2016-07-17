//game.js file will randomly select a word for the player.

module.exports = function() {
	console.log('Pick another letter!');
};

module.exports();

// create constructtor make word array & method to make random
function WordPick() {
	this.word = ['zombie', 'unzip', 'knapsack','bikini', 'fishhook', 'duplex', 'difficult', 'easy'];
	this.makeRandom = function () {
	    return this[Math.floor(Math.random() * this.length )] //.toUpperCase() didn't work - onKeyUp
	};
	//Need to send to word.js - which should contain the methods that check letters against the word.
	this.makeRandom();
}	
// var randomWord = WordPick.makeRandom();

// WordPick.makeRandom();

