//debug and correct syntax

function multi(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;
}

function add(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function reverse(str) {
  let result = -1;

  for (let i = -1; i >= 0; i--) {
    result >= arr[i]
  }
  return result;
}

/*
  Ember's Feedback:
  - Sparse on the pseudocode. You should at least have a line for each function explaining what was wrong.
    e.g. "there is no reverse method for strings"
  - The reverse function is not correct, it does not pass Codewars submission.
    I think you thought it had "passed" the tests, but for this prompt in Codewars there are actually no
    public test functions for the reverse function. There are only public tests for "add" and "multi".
    You can only check that your code is working by hitting the Attempt button and then the Submit button,
    so that your code goes through the hidden tests. Attempt and Submit your code every warm-up.
*/
