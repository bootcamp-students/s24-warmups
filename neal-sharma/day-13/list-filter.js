/*precept
parameters- take a list of non integers and strings and filter out strings
return- numbers only
example- ([1,2,'a','b']) == [1,2]
concerns- first i forgot to declare numbers. then i tried to filter something other than l.
first issue was learning about typeof operator.
explain- use filter method on l array. then use type of operator to give the filter a criterion
to check if each element in the array is equal to 'number' if it is then the item passes the
test and is included in the array. if not it is filtered out.
*/
"use strict";
function filter_list(l) {

  let numbers = l.filter((e) => typeof e === 'number');
  return numbers
}
/*
  Ember's Feedback:
  - Great job!
  - typeof is a really useful operator, I hope you got a good feel for it
*/
// Alternative Solution
function filter_list(l) {
  return l.filter(Number.isInteger);
}
