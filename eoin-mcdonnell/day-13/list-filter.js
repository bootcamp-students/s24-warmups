//l . filter with iterate ove the array and the function with return variable v with a type of exactly equal to number

function filter_list(l) {
  return l.filter(function (v) { return typeof v === 'number' })
}
/*
  Ember's Feedback:
  - Great job!
  - Good use of filter and typeof, I hope you got a good feel
    for typeof because it is a very useful, common operator
*/
// Alternative Solution
function filter_list(l) {
  return l.filter(Number.isInteger);
}
