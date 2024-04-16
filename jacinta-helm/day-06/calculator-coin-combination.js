
function coinCombo (cents) {
  let currentTotal = cents;
  
  let coinArray = [0, 0, 0, 0];
  if (currentTotal >= 25) {
    coinArray[3] = Math.floor(currentTotal / 25);
    currentTotal = currentTotal - 25 * Math.floor(currentTotal / 25);
  }
  
  if (currentTotal >= 10) {
    coinArray[2] = Math.floor(currentTotal / 10);
    currentTotal = currentTotal - 10 * Math.floor(currentTotal / 10);
  }
  
  if (currentTotal >= 5) {
    coinArray[1] = Math.floor(currentTotal / 5);
    currentTotal = currentTotal - 5 * Math.floor(currentTotal / 5);
  }
  
  if (currentTotal >= 1) {
    coinArray[0] = currentTotal;
  }

  return coinArray;
}

//p find a function that will return the coin combination of coins used in that amount
// R The total amount should divide the amount of each coin starting with the largest 
//amount to see how many more coins of different value can go into the coin amount.
//E (1, [0,0,0,1]), (15, [0,1,1,0])
