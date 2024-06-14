var maxSequence = function (arr) {
  if (arr.length === 0) {
    return 0; // returns 0 for empty array
  }
  let sum = 0;
  let sums = [];
  for (let i = 0; i < arr.length; i++) {
    // for each item in array, checks sum of every sequence beginning at that number
    sum = 0; // resets sum iterator at the beginning of checks for each item
    for (let j = i; j < arr.length; j++) {
      sum += arr[j]; // calculates sum from arr[i] to each subsequent item
      sums.push(sum); // adds each sum to sums array
    }
  }
  let max_sum = sums[0]; // finds highest sum, since Math.max doesn't work on an array
  for (let k = 1; k < sums.length; k++) {
    if (sums[k] > max_sum) {
      max_sum = sums[k];
    }
  }
  if (max_sum < 0) {
    return 0; //returns 0 for array of all negative numbers
  } else {
    return max_sum;
  }
};

// find the sequence in the array with the highest sum
// do a for loop starting at each positive integer, checking sums of every sequence beginning there
// add each sum to an array, then return the max of that array
// don't need to check sequences starting at negative numbers since higher sum would be achieved by excluding them

/*
  Ember's Feedback:
  - great job
  - it is industry convention to use camel case for your variables when writing JS, not snake case.
  - you can reuse i as it is block scoped, just FYI. let k wasn't strictly necessary. It is fine as written just letting you know.
  - You don't need that 3rd for loop if you just use your sum variable better. Refactor below
  - This solution is big O of n squared. You can get this to linear time complexity if you use kadane's algorithm.
  - This code would error if arr is undefined, just FYI. That is fine for a kata, but it is something to think about on the job.
*/

// Refactor
var maxSequence = function (arr) {
  let maxSum = 0;
  // i < arr.length already excludes empty arrays. That check runs before the 1st iteration of the loop
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      // no need to store the sums in an array, just do this check
      // this check also excludes sums for an array of all negative numbers
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
};

// Alternative Solution
// https://www.youtube.com/watch?v=2MmGzdiKR9Y
// This guy does a slightly better job of explaining Kadane's algorithm in spacial terms: https://www.youtube.com/watch?v=GrNSGC8Z2T0

// O(n^3)
var maxSequence = function (arr) {
  let maxSum = 0;
  // left bound
  for (let i = 0; i < arr.length; i++) {
    // right bound
    for (let j = 0; j < arr.length; j++) {
      let sumBetweenBounds = 0;
      // get sum of elements between bounds
      for (let h = i; h <= j; h++) {
        sumBetweenBounds += arr[h];
      }
      // keep track of the largest sum of any subarray
      if (sumBetweenBounds > maxSum) maxSum = sumBetweenBounds;
    }
  }

  return maxSum;
};

// O(n^2)
var maxSequence = function (arr) {
  let maxSum = 0;
  // left bound
  for (let i = 0; i < arr.length; i++) {
    let sumBetweenBounds = 0;
    // right bound
    for (let j = i; j < arr.length; j++) {
      // sumBetweenBounds is the result of the last subarray sum, so by adding the current value -
      // to it we are preventing the duplicate work of summing the entire subarray from left to right bounds
      sumBetweenBounds += arr[j];
      // keep track of the largest sum of any subarray
      if (sumBetweenBounds > maxSum) maxSum = sumBetweenBounds;
    }
  }

  return maxSum;
};

// O(n)
var maxSequence = function (arr) {
  // variable to store the maximum sum of all sub arrays
  // this kata doesn't want negative results so that is why we use 0 instead of Number.NEGATIVE_INFINITY
  let maxSum = 0;
  // variable to store the max value of all subarrays that occurred to the left of the current index
  let runningMax = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    // the current value is it's own subarray
    // the logic here is that by evaluating the max value as we move through the list, -
    // we are calculating the maximum possible value of all subarray that occurred to the left of this index.
    runningMax = Math.max(currentValue, runningMax + currentValue);
    // because the above is calculating the maximum of a subArrays until that point in the list, -
    // we want to store the maximum that could have occurred before this index.
    maxSum = Math.max(maxSum, runningMax);
  }

  return maxSum;
};
