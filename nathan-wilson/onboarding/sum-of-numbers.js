function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = null;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// Figure out which int is smaller a || b
// Make the smaller int the start of a loop
// Make the larger one the end of a loop
// Add each number in the loop to a sum variable
// return the sum

/*
  Ember's Feedback:
  - wonderful job!
*/
