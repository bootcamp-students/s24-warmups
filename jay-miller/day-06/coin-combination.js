function coinCombo(cents) {
    let coins = [1, 5, 10, 25];
    let combo = [0, 0, 0, 0];
    for (let i = 3; i >= 0; i--) {
        combo[i] = Math.floor(cents / coins[i]);
        cents -= combo[i] * coins[i];
    }
    return combo;
}
/*
    Ember's Feedback:
    - very interesting approach!
    - Good job, add some pseudo code for the practice
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
