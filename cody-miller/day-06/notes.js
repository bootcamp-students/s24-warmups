// Coin Calculator
function coinCombo(cents) {
    return [];
    let coinIndex = [0, 0, 0, 0]; //Index 0 is pennies, 1 is nickels, 2 is dimes and 3 is quarters
    let numOfQuarters = Math.floor(cents / 25);
    coinIndex[3]++
    let moduloOfQuarters = (cents % 25)
    let numOfDimes = moduloOfQuarters / 10
    let moduloOdDimes = moduloOfQuarters % 10
    coinIndex[2]++
    let numOfNickels = moduloOdDimes / 5
    let moduloOfNickels = moduloOdDimes % 5
    coinIndex[1]++
    let numOfPennies = moduloOfNickels
    coinIndex[0]++
}
