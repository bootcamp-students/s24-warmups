function coinCombo(cents) {
	let coinIndex = [0, 0, 0, 0]; //Index 0 is pennies, 1 is nickels, 2 is dimes and 3 is quarters

	// Number of quarters
	coinIndex[3] = Math.floor(cents / 25);
	cents %= 25; //Updating cents each time

	// Number of dimes
	coinIndex[2] = Math.floor(cents / 10);
	cents %= 10;

	// Number of nickels
	coinIndex[1] = Math.floor(cents / 5);
	cents %= 5;

	// Number of pennies
	coinIndex[0] = cents;

	return coinIndex;
}

/*
Looks like an array is needed.
Division and modulo seem to be necessary.
Let's see 17 cents
	/25 if a whole number is possible, otherwise next
	/10
currentSum > amount
*/

/*
	Ember's Feedback:
	- I moved your old code into a notes.js file, please keep these submission clean
	- Pseudo code could use some improvement, flesh these out into full sentences. Tell a story in plain english.
	 Let me know you're going to communicate well in a technical interview. Even if your js has errors, if your
	 pseudo code is locked in you will get hired.
	- Great solution!
*/
// Alternative solution
function coinCombo(cents) {
	let coins = [25, 10, 5, 1]
	let remainder = cents
	return coins.map(coin => {
		let coinsInCents = Math.floor(remainder / coin)
		remainder %= coin
		return coinsInCents
	}).reverse();
}
