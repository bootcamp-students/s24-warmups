/* For loop to iterate through array.
   If the number is 0, return.
   Otherwise, add the number to the count.
   */


function houseNumbersSum(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      return count;
    } else {
      count += inputArray[i];
    }
  }
  return count;
}
/*
  Ember's Feedback:
  - Excellent job!
*/
// Alternative Solution
function houseNumbersSum(inputArray) {
  let indexOf0 = inputArray.indexOf(0);
  return inputArray.slice(0, indexOf0 + 1).reduce((a, c) => a + c);
}
