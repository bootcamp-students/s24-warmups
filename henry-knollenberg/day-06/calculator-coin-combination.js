/*
let coins = [0, 0, 0, 0] - pennies, nickels, dimes, quarters
While i > 0, i=int, { go as long as i is greater than 0
  if i >=25
    THEN coins[3] =  coins[3] + 1
    i = i - 25, remainder
  else if i >= 10
    THEN coins[2] = coins[2] + 1
    i = i - 10, remainder
  else if i>= 5
    THEN coins[1] = coins[1] + 1
    i = i - 5, remainder
  else if i >= 1
    then coins[0] = coins[0] + 1
    i = i - 1, remainder
} */
function coinCombo(cents) {
  let coins = [0, 0, 0, 0];
  while (cents > 0) {
    if (cents >= 25) {
      coins[3] = coins[3] + 1;
      cents = cents - 25;
    } else if (cents >= 10) {
      coins[2] = coins[2] + 1;
      cents = cents - 10;
    } else if (cents >= 5) {
      coins[1] = coins[1] + 1;
      cents = cents - 5;
    } else if (cents >= 1) {
      coins[0] = coins[0] + 1;
      cents = cents - 1;
    }
  }
  return coins;
}
/*
  Ember's Feedback:
  - Great solution!
  - Your pseudo code is good, personally I would like to see it written in more plain English,
    but this is sufficient. I believe in your ability to communicate these concepts to an interviewer.
    Though as we begin practicing mock interviews soon, we may adjust.
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
