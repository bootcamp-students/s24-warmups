function multi(arr) {
  let value = 1; // This is the identity principle in multiplication
  for (let num of arr) {
    value *= num;
  }
  return value;
}

function add(arr) {
  let value = 0; // This is the identity principle in addition
  for (let num of arr) {
    value += num;
  }
  return value;
}

function reverse(str) {
  return str.split("").reverse().join(""); // Split the string into an array, reverse it, and join it back into a string
}
/*
Variables need to be declared.
The arrays need to be iterated through.
We can use operator and = to save lines
strings cant be reversed, only arrays can.
Convert string to array, reverse, then convert again.
*/

/*
  Ember's Feedback:
  - Good job!
  - Great pseudocode and comments
*/
// Alternative solutions
function multi(arr) {
  return arr.reduce((accum, curr) => accum * curr); // would throw an error if arr.length < 2 though
}
function add(arr) {
  return arr.reduce((accum, curr) => accum + curr);
}
function reverse(str) {
  return str.split('').reverse().join('');
}
