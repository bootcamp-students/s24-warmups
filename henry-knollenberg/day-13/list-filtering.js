/*
P - l, newList, el

newList = type of (number) filtered out
return newList */

function filter_list(l) {
  let newList = l.filter(el => (typeof el === "number"));
  return newList;
}
/*
  Ember's Feedback:
  - Great job!
  - Good use of typeof
*/
// Alternative Solution
function filter_list(l) {
  return l.filter(Number.isInteger);
}
