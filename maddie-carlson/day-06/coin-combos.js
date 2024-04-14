function coinCombo(cents) {
  // needs to return an array with the least amount of coins, going from pennies to nickels to dimes to quarters
  // to accomplish this, we need to count in reverse, largest coins first, then smallest coins
  // this can be done by using while loops and gradually subtracting from our cents until the current coin is too large
  let coins = [0, 0, 0, 0];

  // quarters
  while (cents >= 25) {
    coins[3] += 1
    cents -= 25
  }

  // dimes
  while (cents >= 10) {
    coins[2] += 1
    cents -= 10
  }

  // nickels
  while (cents >= 5) {
    coins[1] += 1
    cents -= 5
  }

  // pennies
  coins[0] = cents // cover the remainder

  return coins;
}
/*
  Ember's Feedback:
  - Great job! Wonderful pseudo code and great solution
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
