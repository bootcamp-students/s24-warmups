function multi(arr) {
  return arr.reduce((acc, cur) => {
    return acc * cur;
  });
}
function add(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  });
}
function reverse(str) {
  return str.split('').reverse().join('');
}

// multi and add take arrays of numbers as parameters, reverse takes a string

// Expecting a number return value

// multi([5, 1, 5]), 25

// I could do the math wrong, I could mess up the value types

// take the array and operate on every operand inside of the array not the arrays against each other. Also use the
// correct string method to revers the string.

// I can do this, don't overcomplicate it!


/*
  Ember's Feedback:
  - Great job!
*/
// Alternative solutions
function multi(arr) {
  return arr.reduce((accum, curr) => accum * curr); // this would throw an error if arr.length < 2
}
function add(arr) {
  return arr.reduce((accum, curr) => accum + curr);
}
function reverse(str) {
  return str.split('').reverse().join('');
}
