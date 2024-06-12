var maxSequence = function (arr) {
  let largestSum = 0;

  if (arr.length < 1) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let currentSum = null;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum > largestSum) {
        largestSum = currentSum;
      }
    }
  }
  return largestSum;
};

// array of integers

// an integer

// [-2, 1, -3, 4, -1, 2, 1, -5, 4], 6

// I could have a type or logic error

// have a variable to hold the largest sum so far
// compare all of the following values with the current iterator in a loop
// if the sum is greater than largest sum replace largest sum.
// return the maximum sum
