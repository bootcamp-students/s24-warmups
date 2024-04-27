function coinCombo(cents) {

    let quarters = (cents - (cents % 25)) / 25; //uses modulo to find highest number of quarters
    let afterQuarters = cents - (quarters * 25); //finds amount of cents remaining after removing quarters

    let dimes = (afterQuarters - (afterQuarters % 10)) / 10; //uses modulo to find highest number of dimes
    let afterDimes = afterQuarters - (dimes * 10); //finds amount of cents remaining after removing dimes

    let nickels = (afterDimes - (afterDimes % 5)) / 5; //uses modulo to find highest number of nickels
    let pennies = afterDimes - (nickels * 5); //finds amount of pennies remaining

    return [pennies, nickels, dimes, quarters]
}
/*
    Ember's Feedback:
    - Good job!
    - As an alternative, you could just say the after quantities are cents % 25, for example
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
