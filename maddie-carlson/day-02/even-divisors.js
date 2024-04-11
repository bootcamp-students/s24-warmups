function isDivisible(n, x, y) {
  // parameters are n and its divisors x and y
  // return value should be true if x/y can both divide n evenly, false otherwise
  // function can fail if any parameters are the wrong type

  // assume false by default
  let is_Divisible = false;

  // check divisibility with Number.isInteger()
  if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
    is_Divisible = true;
  }

  return is_Divisible
}
/* Ember's Feedback:
  Great job!
  You will want to use camel case instead of snake case
*/
// Alternative solution
function isDivisible(n, x, y) {
  return Number.isInteger(n / x) && Number.isInteger(n / y)
}
