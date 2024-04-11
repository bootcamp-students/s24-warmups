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

/* function coinCombo (cents) {
	return [];
	let coinIndex = [0, 0, 0, 0]; //Index 0 is pennies, 1 is nickels, 2 is dimes and 3 is quarters
	let numOfQuarters = Math.floor(cents / 25);
		coinIndex[3] ++
	let moduloOfQuarters = (cents % 25)
	let numOfDimes = moduloOfQuarters / 10
	let moduloOdDimes = moduloOfQuarters % 10
		coinIndex[2]++
	let numOfNickels = moduloOdDimes / 5
	let moduloOfNickels = moduloOdDimes % 5
		coinIndex[1]++
	let numOfPennies = moduloOfNickels
		coinIndex[0]++ 
} */