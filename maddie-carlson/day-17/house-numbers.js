function houseNumbersSum(inputArray) {
  //function takes an array of numbers
  //needs to return the sum of all numbers BEFORE a zero is encountered in the array

  //to solve, loop over the array, summing elements, and returning when encountering a zero
  let sum = 0

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== 0) {
      sum += inputArray[i]
    } else {
      return sum
    }
  }
}
/*
  Ember's Feedback:
  - Great job! :D
*/
// Alternative Solution (less efficient than your solution though)
function houseNumbersSum(inputArray) {
  let indexOf0 = inputArray.indexOf(0);
  return inputArray.slice(0, indexOf0).reduce((a, c) => a + c, 0);
}
