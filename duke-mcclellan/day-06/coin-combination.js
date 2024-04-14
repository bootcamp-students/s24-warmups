//return an array

function coinCombo (cents) {
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
