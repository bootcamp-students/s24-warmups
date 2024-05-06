function houseNumbersSum(arr) {
  // Make a new Array
  let Max = [];
  // For if loop using .length
  for (let i = 0; i < arr.length; i++)
    // using .push
    if (arr[i] === 0) { Max.push(arr.splice(0, i)); break }
  // using .map and .reduce
  return Max.map(v => v.reduce((a, b) => a + b, 0)) * 1;
}
/*
  Ember's Feedback:
  - Don't write code like this
  - Don't write comments like this, it just restates what the code is doing.
    On the job, comments explain why a decision was made. In these katas, the line comments
    can explain the logic of the problem. The comments you wrote here don't add anything.
  - This is code is hard to read because it isn't formatted correctly.
  - This code doesn't follow the JavaScript naming convention of camel case variables.
  - It is needlessly complex. Why store a sub array nested in an array and then map over the one element nested array?
*/
// Refactor
function houseNumbersSum(arr) {
  // iterate through the input array until a zero is found
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // return the sum all elements before the zero in the input array
      return arr.splice(0, i).reduce((a, b) => a + b, 0);
    }
  }
}
// Alternative Solution
function houseNumbersSum(inputArray) {
  return inputArray.slice(0, inputArray.indexOf(0)).reduce((sum, value) => sum + value, 0);
}
