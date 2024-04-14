function multi(arr) {
  if (arr.length === 0) return;

  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}


function add(arr) {
  if (arr.length === 0) return;

  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
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
i have 3 problems to solve. one is to multiply arrays, one is to add them, one is to reverse
a string.

to multiply an array i need the length of the array, i need to multiply each integer
as I iterate then update and return the result. i should use a loop and return.

i can do the same for the second function except add

for the last one its similar except i need to start at the end of the string and work
backwards and return the first letter first then update.

*/

/*
  Ember's Feedback:
  - Good job!
  - Great pseudo code! The last sentence lost me slightly, but yeah good job :D
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
