function houseNumbersSum(inputArray) {
  let houseSum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      break;
    }
    houseSum += inputArray[i];
  }
  return houseSum;
}
/*
  Ember's Feedback:
  - Good job!
  - For this problem, a regular for loop is better than an array method
*/
// Alternative Solution
// I solved this the same except I simply returned with the sum when encountering zero.
function houseNumbersSum(inputArray) {
  // iterate over the array, producing a sum, until I encounter a zero
  let sum = 0;
  for (let int of inputArray) {
    if (int === 0) return sum;
    sum += int
  }
  return sum;
}
/*
  PRECEPT
  params: number[]
  return: number
  example: [5, 2, 0, 3] => 7
  concern: undefined input, empty array input, input has no 0; the description implies these will never happen
  positive: I have summed an array before, this is just that with a stop condition :D
  translate: I will iterate over the array and produce an element summation. If I encounter a zero, -
    I will return from the function as a whole or break the iteration in some way.
*/
// Another solution
function houseNumbersSum(inputArray) {
  let indexOf0 = inputArray.indexOf(0);
  return inputArray.slice(0, indexOf0 + 1).reduce((a, c) => a + c);
}
