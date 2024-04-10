/*
  Goal: return the range of integers from min to max in increments of step.
  Create an array of integers. This is what will be returned.
*/

function generateRange(min, max, step) {
  let arrayPosition = 0;
  let arrayValues = [min];    // Initializes the array with the first value.

  for (let i = min + step; i <= max; i += step) {
    arrayPosition++;          // Moves to the next position in the array.
    arrayValues[arrayPosition] = i;  // Places the stepped value into that position.
  }                           // Loops while less than or equal to the max.

  return arrayValues;         // Return the array of values.
}

/* Ember's Feedback:
  Great job!
  Instead of incrementing a position variable, you can just use .push() to add elements to the end of an array.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
*/
