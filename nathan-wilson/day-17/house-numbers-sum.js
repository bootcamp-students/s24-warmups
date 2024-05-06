function houseNumbersSum(inputArray) {
  let indexOf0 = inputArray.indexOf(0);
  return inputArray.slice(0, indexOf0 + 1).reduce((a, c) => a + c);
}

// an array of numbers

// return a single number that is the sum of all the numbers in the array

// [5, 1, 2, 3, 0, 1, 5, 0, 2]),11

// I could use the incorrect array method or get the math wrong

// find the index of the first 0, slice out the array before that,
//use reduce and just add the acc and cur together. Return the result

// I believe I can do this!!

/*
  Ember's Feedback:
  - Great job!
  - So the + 1 in your slice means you never get an empty array, preventing .reduce from throwing an error.
    An alternative to that would be to give your .reduce an initial value of 0.
*/
// Alternative Solution
function houseNumbersSum(inputArray) {
  // iterate over the array, producing a sum, until I encounter a zero
  let sum = 0;
  for (let int of inputArray) {
    if (int === 0) return sum;
    sum += int
  }
  return sum;
}
