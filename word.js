//word.js should contain all of the methods which will 
//check the letters guessed versus the random word selected.
var inquirer = require('inquirer');

module.exports = function() {
	//console.log('Pick yet another letter');
	//var splitWord = word.split('');

	inquirer.prompt([/* Pass your questions in here */

			{	
				type: 'input',
				name: 'letterPicking',
				//validator: /^[a-zA-Z\s\-]+$/, /* Create validation to  give only a alphabet character input only*/
				message: 'Please choose a letter to play the game.'
			}
			//make letter all Caps
		]).then(function (answers) {
	    // Use user feedback for... whatever!! 
	    // if() {
	    // 	//picked letter uses onKeyUp make letter all caps
	    // }else{
	    	//picks a number or character
	    	console.log('Sorry you chose the wrong character, please choose again.');
	    //}
	});
};

module.exports();



// function GuessWord(word) {
// 	this.word = word;
// 	// this.runWord = function(){
// 	// 	console.log(zombie);
// 	// }
// };

// var zombie = new GuessWord('zombie');
// var unzip = new GuessWord('unzip');
// var knapsack = new GuessWord('knapsack');
// var bikini = new GuessWord('bikini');
// var fishhook = new GuessWord('fishhook');
// var duplex = new GuessWord('duplex');
// var difficult = new GuessWord('difficult');

// console.log(zombie instanceof GuessWord);
// console.log(zombie instanceof String);

// var word = ['zombie', 'unzip', 'knapsack','bikini', 'fishhook', 'duplex', 'difficult'];
