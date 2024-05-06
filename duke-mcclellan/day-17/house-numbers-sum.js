//parameters- an array for the input
//return - an integer
//example - possibly using .reduce method for sum?
//concern - choosing the wrong method, incorrect syntax or over complicating the problem.
//I want to be able to determine the sum of the houses but looks like I need to remove pairs and zeros.

function houseNumbersSum(inputArray) {
  let sum = 0; // init sum to 0
  for (let num of inputArray) {
    if (num === 0) {
      break;
    }
    sum += num
  }
  return sum;
}
/*
  Ember's Feedback:
  - Good job!
  - Looks like you got a little confused with the prompt, but good solution!
  - Knowing the break keyword is handy
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



