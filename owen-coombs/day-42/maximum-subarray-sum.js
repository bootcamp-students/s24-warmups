var maxSequence = function(arr) {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = Math.max(arr[i], sum + arr[i]);
      sum2 = Math.max(sum, sum2);
    }
    
    return sum2;
  }
  
  // if else loop
  // create to vars sum, sum2
  // current value and ending value 
  // math max finds the largest number in array 

/*
  Ember's Feedback:
  - Great job! This is the most efficient solution, Kadane's algorithm
*/

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