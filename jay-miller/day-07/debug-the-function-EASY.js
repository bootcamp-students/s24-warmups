function multi(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
}

function add(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function reverse(str) {
  return str.split("").reverse().join("");
}

/*
  Ember's Feedback:
  - Great job!
  - Good use of .reduce, that is a tricky one
  - Add pseudo code
*/

