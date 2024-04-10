function getSum(a, b) {
  //first check if the numbers are equal, if they are, return a
  if (a === b) {
    return a
  }

  //if they ARE NOT equal, determine which one is less than the other
  let lesser;
  let greater;

  if (a < b) {
    lesser = a;
    greater = b;
  } else {
    greater = a;
    lesser = b;
  }

  //afterwards, enter a for loop
  //in the loop, iterate and sum each integer from the lesser to the greater number
  let sum = 0;
  for (let i = lesser; i <= greater; i++) {
    sum += i;
  }

  //then, return the sum
  return sum
}
/* Ember's Feedback:
    Great job!
    That is basically the same solution I came up with.
*/
