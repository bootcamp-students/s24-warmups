// parameters- sum the numbers in the array.
// if the numbers are all negative return 0 instead
// if the array is empty return 0
// return- sum of numbers in the array
// example- ([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
// got help because i wasnt understanding the question correctly. We dont just want the
// total sum of the array. we want the max number from sub array rather than the whole array.
// example max(1 + 1 -1) = 1, max(2 + 2 -1) = 3
// endMax would be endMax(1, 3)
// so endMax returned would be 3. chatGPT mentioned Kadane's algorithm which i dont really get
// but i know it exists now at least. haha

var maxSequence = function (arr) {
  if (arr.length === 0) {
    return 0; // if array length = 0 return 0
  }

  if (arr.every((num) => num < 0)) {
    return 0; // if every number in the array is less than 0 return 0
  }
  let max = 0;
  let endMax = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(0, max + arr[i]); // if max + arr[i] is negative reset count to 0
    endMax = Math.max(max, endMax); // ex- (0 + 0 + 1) = 1 (-1 + 1 -2) will = 0 because we want max
  } // endMax (1, 0) end max would be 1.

  return endMax;
};

/*
  Ember's Feedback:
  - Good work! This is O(n) solution. Kadane's algorithm (ish)
  - Because the for loop does the i < arr.length check before it runs, you don't need a guard
    statement for length === 0. Also, because of the nature of your Math.max check, you similarly don't 
    need the .every() call, because it will simply return zero at the end. Saves time and unnecessary compute.
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
