function findOdd(A) {
  return A.find((int) => A.filter((el) => el === int).length % 2 !== 0);
}
/*
We are given an array of integers, which means we should use array methods.
By using module 2, we will know if there will be a leftover, that is means it is
odd.
We can filter out based on if theres module 2 =0
*/
// function findOdd(A) {
//   console.log("A: ", A);

//   let lengthOfInput = A.length;
//   console.log("lengthOfInput: ", lengthOfInput);

//   let oddArrayOnly = lengthOfInput.filter((param) => param % 2);
//   console.log("oddArrayOnly: ", oddArrayOnly);

//   return oddArrayOnly;
/*
I need a way to count the amount of times an integer appears in an array
*/

// const itemCounter = (value, index) => {
//   return value.filter((x) => x == index).length;
// };

// console.log(itemCounter(arr, "geeks"));

// let count = arr.reduce(function (value, value2) {
//   return value[value2] ? ++value[value2] : (value[value2] = 1), value;
// }, {});

// console.log(count);

/*
  Ember's Feedback:
  - Good job!
*/
// Alternative Solution
// This uses XOR (^), which is a bitwise operator :D
function findOdd(A) {
  return A.reduce((a, c) => a ^ c, 0);
}
