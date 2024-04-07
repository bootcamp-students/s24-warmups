function generateRange(start, stop, step) {

  let range = [];

  for (let i = start; i <= stop; i += step) {
    range.push(i);
  }

  return range;
}

// Implement the function generateRange
// Create a range.
// which takes three arguments(start, stop, step)
// set i to these 3 parameters somehow.
// and returns the range of integers from start to stop
// (inclusive) in increments of step.
// make sure to use = sign with either < or >

/* Ember's Feedback:
  Great job!
  This is literally the JS implementation of range from Python
*/
