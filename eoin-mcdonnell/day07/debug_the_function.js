// iterate through the array add to the result
// sam for add
function multi(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }

  return result;
}

function add(arr) {

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }

  return result;
}

//split into an array, reverse array, join
function reverse(str) {
  let arr = str.split("")
  arr = arr.reverse()
  str = arr.join("")

  return str;
}


/*
  Ember's Feedback:
  - Great job!
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
