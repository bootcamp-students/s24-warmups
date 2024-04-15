/*
Params: Debug the functions: Should be easy, begin by looking at the code. Debug the code and the functions should work.
There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
Return: a number (whatever each equation results)
Solutions: right a for loop to perform each function, you're not just adjusting the given code

Given Code:
function multi(arr) {
  return arr * arr;
}
function add(arr) {
  return arr + arr;
}
function reverse(str) {
  return str.reverse();
}
*/

function multi(arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  }
  return sum;

}
function add(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;

}
function reverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString
}


/*
  Ember's Feedback:
  - Good job!
  - Great pseudo code
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



/*
Broken Code:

function reverse(str) {
  let reversedString = 0;
  while (str !=0) {
    reversedString*=10;
    str-=str%10;
    str/=10;
  }
  return reversedString;

}

*/
