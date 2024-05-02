function filter_list(l) {
  return l.filter(item => typeof item === "number");
}
/*
  Ember's Feedback:
  - Great job!
  - Good use of typeof, that is a super common operator so knowing it
    will be really useful.
*/
// Alternative Solution
function filter_list(l) {
  return l.filter(Number.isInteger);
}
