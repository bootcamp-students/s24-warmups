function generateRange(start, stop, step) {
  //create range array
  let range = [];

  //enter for loop, increment by step until greater than or equal to stop
  for (let i = start; i <= stop; i += step) {
    //push each new increment to range array
    range.push(i);
  }

  //return range
  return range
}
/* Ember's Feedback:
  Nice! Great job. This is basically just implementing the range function from python.
*/
