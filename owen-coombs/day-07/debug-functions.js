// debug
// and fix syntax
// ask ember for help

function multi(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

function add(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function reverse(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

/*
  Ember's Feedback:
  - Good job!
  - Sparse on the pseudocode. You should at least have a line for each function explaining what was wrong.
    e.g. "there is no reverse method for strings"
*/
// Alternative solutions
function multi(arr) {
  return arr.reduce((accum, curr) => accum * curr); // <- would throw an error if arr is 1 or 0 elements long
}
function add(arr) {
  return arr.reduce((accum, curr) => accum + curr);
}
function reverse(str) {
  return str.split('').reverse().join(''); // <- technically this will fail on emojis
}
