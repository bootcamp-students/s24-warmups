'use strict'
function filter_list(l) {
  return l.filter(item => typeof(item) != 'string')
}

// array filter to remove items whose type is not string

/*
  Ember's Feedback:
  - Good job!
  - The parenthesis are not necessary but don't hurt. typeof is an operator not a function
  - typeof is a really common, useful operator. I hope you got a good feel for it
*/
// Alternative Solution
function filter_list(l) {
  return l.filter(Number.isInteger);
}
