function generateRange(min, max, step) {
  let sum = [];
  if (max - min < step) {
    sum.push(min);
  } else {
    for (let i = min; i <= max; i += step) {
      sum.push(i);
    }
  }
  return sum;
}
// Create an empty array to store the generated numbers
// Check if the difference between max and min is less than the step
// If yes, add only the min value to the array
// If the difference is equal to or greater than the step, start a loop from min to max with step increments
// Add each value within the range to the array
// Return the generated array

/*
  Ember's Feedback:
  Great job! :D
  This will show up in Python later as a range function
*/
