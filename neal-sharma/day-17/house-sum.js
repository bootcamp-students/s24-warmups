/*precept
parameters- add up the numbers in the array if you encounter a 0 stop the calculation
return- return the sum once you encounter a 0
example- [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11
concerns- how to stop the loop when encountering a 0
explain- I was close on this one and realized i just had a syntax error with a curly brace.
see comments
positive self talk- "Embrace the glorious mess that you are" Elizabeth Gilbert
*/
function houseNumbersSum(inputArray) {
  let sum = 0; // init sum to 0
  for (let num of inputArray) { // iterate over each num in inputArray
    if (num === 0) { // if num = 0
      break; // stop adding numbers and exit loop
    }
    sum += num // add current number to sum
  }
  return sum; // return sum of numbers
}
/*
  Ember's Feedback:
  - Great job!
  - Very efficient solution where you stop the loop once you have reached your
    exit condition.
*/
// Alternative Solution
function houseNumbersSum(inputArray) {
  let indexOf0 = inputArray.indexOf(0);
  return inputArray.slice(0, indexOf0 + 1).reduce((a, c) => a + c);
}

// let stop = false Caitlin's example
// let sum = inputArray.reduce((acc, curr) => {
//     if(stop) return acc;
//     if (curr != 0) {
//       return acc + curr;
//     } else if (curr === 0) {
//       stop = true
//       return acc;
//     }
//    }, 0);
// return sum
// }
