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

// P debug the function to fit the need of what its asking,
// R the function should multiply and add and reverse all the elements in the array
// E (multi([5,1,5]), 25)
// C i could do the math wrong or miss a syntax correction for this function to not work.

/*
  Ember's Feedback:
  - Good job!
  - If you have any questions about the reduce function, let me know
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
