/* precept
parameters- debug the code to make it functional
return- return the corrected function so it works correctly
example- (multi([5,1,5]), 25) 5*1*5 = 25
concerns- not sure how to fix it but will figure it out.
explain- looping through numbers with for loop. need to go to mdn for syntax etc.
positive self talk- I can figure it out. hint was to look at day one katas
translate- see below.
*/

function multi(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) { // for loop going through each number in the array using
    //arr.length

    result *= arr[i]; // return the result of multiplying all the numbers in the array.
  }

  return result;
}

function add(arr) {
  let result = 0; // was getting 23 instead of 22 so start the loop at 0

  for (let i = 0; i < arr.length; i++) { // for loop going through each number in the array using
    // arr.length

    result += arr[i];
  }

  return result; // return the result of add all the numbers in the array.
}

function reverse(str) {
  let result = ''; // had to change result to string

  for (let i = str.length - 1; i >= 0; i--) { // for loop starting at -1 means it is starting at the end of
    // the array. let i = -1 starts at the last value in the array and i-- works backwards through
    // it. i >= 0 means the array is back at the beginning of the array. Had to take out >= 0 in
    // for loop.
    result += str[i];
  }

  return result;
}


/*
  Ember's Feedback:
  - Good job!
  - Great work and great pseudocode
  - The code comments are good, those are some good aha moments and it gives me confidence you could
    reproduce this in an interview (looping from the end of an array to the start of an array) and that you could
    communicate it to the interviewer.
*/
// Alternative solutions
function multi(arr) {
  return arr.reduce((accum, curr) => accum * curr);
}
function add(arr) {
  return arr.reduce((accum, curr) => accum + curr);
}
function reverse(str) {
  return str.split('').reverse().join('');
}
