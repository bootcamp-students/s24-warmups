//get the numbers format
//replace the x with number
//return the format

function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}

/*
  Ember's Feedback:
  - Great job! I did something similar just using .map
  - Use let instead of var, var lifts that i variable up into the function scope.
    If you were to have a 2nd for loop and you wanted to use i again, it would have a value.
    Could potentially lead to bugs. Just best to use let so you don't need to worry about var and its
    scope behaviors
*/
// Alternative Solution
function createPhoneNumber(numbers) {
  return numbers.reduce((a, c) => a.replace('#', c), '(###) ###-####');
}
