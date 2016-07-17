
//export to main.js
module.exports = function() {
	//console.log('Pick a letter!');
	
	//To make letter appear as a '_' or a letter
	function Letter(letters) {
		this.underScore = letters;
		for(var i = 0; i< letters.length; i++) {
			this.underScore[i] = '_ ';
		}
	this.underLined = function() {
		console.log(this.Letter);
	};	
	}

};

module.exports();


//Contains methods that checks letters against words

