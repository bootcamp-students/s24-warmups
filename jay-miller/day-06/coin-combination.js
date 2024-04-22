function coinCombo(cents) {
    let coins = [1,5,10,25];
    let combo = [0,0,0,0];
    for (let i = 3; i >= 0; i--) {
        combo[i] = Math.floor(cents / coins[i]);
        cents -= combo[i] * coins[i];
    }
    return combo;
}
