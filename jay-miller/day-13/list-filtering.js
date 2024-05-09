function filter_list(l) {
  // Create a new array and filter out strings
  return l.filter(v => typeof v === "number");
  // .filter will return a new array
  // Give .filter test function
  // Test function should test each element
  // that it is not a string
  // Our test function will return true if not a string
}
/*
  Ember's Feedback:
  - Great job!
  - Good use of typeof
*/
// Alternative Solution
const filter_list = l => l.filter(Number.isFinite);
