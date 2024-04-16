/* create a function
have your 3 arguments
set equations for i to each arguments with correct operations.
push array to perform function */

function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}
