function multi(arr) {
  let multi1 = 1;
  for (let i = 0; i < arr.length; i++) {
    multi1 *= arr[i];
  }
  return multi1;
}

function add(arr) {
  let add1 = 0;
  for (let i = 0; i < arr.length; i++) {
    add1 += arr[i];
  }
  return add1;
}

function reverse(str) {
  let reverse1 = str.length - 1;
  let str1 = []; // this is bad! This only worked because of quirky array casting to string behavior. You should have written = ''
  for (let i = 0; i <= reverse1; i++) {
    str1 += str[reverse1 - i];
  }
  return str1;
}

/*
  Ember's Feedback:
  - Good job!
  - You really need to remember to do "let i" instead of just i, but "use strict"; will help with that :)
  - Your str1 = [] line is wonky. When you + an array, JavaScript will call .toString() on the array. This worked in your loop -
    because the empty array becomes an empty string and every subsequent loop str1 is just a string. But, if the array was not -
    empty, it would look something like this: [1,2,3] + 'b' => '1,2,3b'
  - You should return to this and put in pseudo code for this submission to count as good standing
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
// or
function reverse(str) {
  let returnStr = '';
  // here I am looping from the end of the string to the start of the string
  for (let i = str.length - 1; i >= 0; i--) {
    returnStr += str[i];
  }
  return returnStr;
}
