// an array needs to be returned
// comment beside loops to understand later

function coinCombo(cents) {
  const coinValues = [25, 10, 5, 1];

  const coins = Array(coinValues.length).fill(0);
  let currentCents = cents
  for (const coin of coinValues) {
    // if there are some coins left
    while (currentCents >= coin) {
      // how many cents are left
      // how many times the current coins fit into the current cents
      const remainder = currentCents % coin;
      const increaseBy = (currentCents - remainder) / coin;
      currentCents = currentCents % coin;
      const index = coinValues.length - 1 - coinValues.indexOf(coin);
      coins[index] += increaseBy;
    }
  }
  return coins;
}

/*
  Ember's Feedback:
  - I am just going to copy paste the feedback I gave Duke

  - Great job! You got a solution and that is awesome. :D
  - Going forward we are going to put a heavy focus on pseudocode (it is what will get you hired!)
  - Some quick notes on your function. Technically, your while loop will always only run once.
    currentCents = currentCents % coin; <- this line means currentCents is now less than coin
    A while loop that runs once is the same thing as it not existing so you could remove it.
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
