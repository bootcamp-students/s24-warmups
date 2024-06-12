var maxSequence = function (arr) {
  //function takes an array of integers, needs to return the maximum possible sum of elements in the array
  //this "maximum sum" can include all, some, or (if everything is negative) none of the elements
  //to solve, loop over the array, checking the sums with Math.max()

  if (arr.length < 1) {
    //check for empty array
    return 0;
  } //otherwise, proceed

  let maxSum = -10000; //start with a very small sum
  let curSum = 0; //track the current sum

  //loop over the array, use Math.max() to help find the maximum sum
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    curSum = Math.max(num, curSum + num);
    maxSum = Math.max(maxSum, curSum);
  }

  if (maxSum < 0) {
    //can't be less than 0
    return 0;
  }

  return maxSum;
};

/*
  Ember's Feedback:
  - Good work!
  - You can forgo the length check for this specific kata, because the i < arr.length happens before the loop runs. No harm in it though.
  - if you truly want to start with an arbitrarily small number, use Number.NEGATIVE_INFINITY instead. It conveys that the value is arbitrary.
  - that being said, this kata works the same if maxSum is initialized as 0 ¯\_(ツ)_/¯
  - Great work getting the O(n) linear solution!! :D
*/
