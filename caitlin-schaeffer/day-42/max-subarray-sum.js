/*
Instructions: The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
Example: 
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
             should be 6: [4, -1, 2, 1]
Params: Given an array or integers
Return: the greatest possible sum
Concerns: accessing subsequences 
Solution: iterate through the array, maybe use for each, then find the sum of every possible iteration (first, first plus second, sum plus third, etc)
Given code:
var maxSequence = function(arr){
  // ...
}
*/

//The crux is that you're given an array of values, and you want to find the largest continuous sum of the original list
// You basically want to remove negative values but not really because you need to respect the order
// The positive numbers are valid subsequences

/*
Kadane's Algorithm: https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm
*/

var maxSequence = function (arr) {
  //establish current sum and keep track, this is basically tracking the subarray sum
  let currentSum = 0;
  //look at max sum, which is basically in tandem with currentSum
  let maxSum = 0;

  //this for loop will add the currentNum to the currentSum for each iteration
  for (let i = 0; i < arr.length; i++) {
    //pull current number as the index i of the array
    let currentNum = arr[i];

    //factor that into currentSum
    currentSum = Math.max(currentSum + currentNum, 0);

    //adjust maxSum
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

/*
  Ember's Feedback:
  - Excellent work!!!
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
