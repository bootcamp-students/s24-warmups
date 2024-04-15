/* Concatenate the strings and then add/multiply the values */

function multi(arr) {
  let returnValue = 1;
  for (let value of arr) {
    returnValue *= value;
  }
  return returnValue;
}

function add(arr) {
  let returnValue = 0;
  for (let value of arr) {
    returnValue += value;
  }
  return returnValue;
}

function reverse(str) {
  let splitString = str.split(""); //Split the string into an array
  let reverseArr = splitString.reverse(); //reverse the array
  let joinArr = reverseArr.join(""); //join the array into a string
  return joinArr;
}


/*
  Ember's Feedback:
  - Good job!
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
