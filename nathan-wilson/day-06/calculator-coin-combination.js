function coinCombo(cents) {
  let currentTotal = cents;
  let finalArray = [0, 0, 0, 0];
  if (currentTotal >= 25) {
    finalArray[3] = Math.floor(currentTotal / 25);
    currentTotal = currentTotal - 25 * Math.floor(currentTotal / 25);
  }
  if (currentTotal >= 10) {
    finalArray[2] = Math.floor(currentTotal / 10);
    currentTotal = currentTotal - 10 * Math.floor(currentTotal / 10);
  }
  if (currentTotal >= 5) {
    finalArray[1] = Math.floor(currentTotal / 5);
    currentTotal = currentTotal - 5 * Math.floor(currentTotal / 5);
  }
  if (currentTotal >= 1) {
    finalArray[0] = currentTotal;
  }

  return finalArray;
}

// The only parameter is an integer representing the amount of cents

// The return value is an array breaking down from index 0-3 the amount of pennies, nickels, dimes, and quarters

// 36, [1, 0, 1, 1]

// biggest challenge will be the algorithm to make sure its the minimum amount of coins

// I will take the number of cents, first see if its greater than 25 if so i add the ammount its divisible by to the
// third index of the return value. Then I do the same pattern with the remaining cents all the way down to pennies and
// return that array.

// I think this will take a few tried but I'm confident I can find the solution.
