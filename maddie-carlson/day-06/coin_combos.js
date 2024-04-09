function coinCombo (cents) {
  let coins = [0, 0, 0, 0];
  
  //quarters
  while (cents >= 25) {
    coins[3] += 1
    cents -= 25
  }
  
  //dimes
  while (cents >= 10) {
    coins[2] += 1
    cents -= 10
  }
  
  //nickels
  while (cents >= 5) {
    coins[1] += 1
    cents -= 5
  }
  
  //pennies
  coins[0] = cents //cover the remainder
  
	return coins;
}
