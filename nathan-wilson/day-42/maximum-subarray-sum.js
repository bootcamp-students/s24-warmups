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

/*
  Ember's Feedback:
  - Great job :D
  - A concern here that you coded for but didn't capture in your pseudocode is: how do you handle an empty array?
    That being said, the check for length less than 1 is unnecessary. The outer for loop already checks if i (0) is -
    less than the length. So for an empty array, 0 < 0 is false.
  - For non array inputs, 0 < undefined is also false, so the for loops wouldn't run and you would return 0.
    As you read, write, and use code for longer you will form an opinion on if you like that behavior or not.
  - This code would error if null or undefined is given as the argument. (By default, you parameters are given -
    the value of undefined if your function is called with no arguments.)
  - This solution is big O time complexity of n squared (n^2), where n is the length of the input array. There is -
    a solution that is linear time complexity. It is called Kadane's algorithm. You can see the solution by going to the file below.
*/

// Alternative Solution
// ember\alternative-solutions\day-42-max-subarray-sum.js
