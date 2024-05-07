/*
  SPLICE -> O, O, "("
            4, 0, ")"
            5, 0, " "
            9, 0, "-"

  Join the array into a string.
  */

function createPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ")");
  numbers.splice(5, 0, " ");
  numbers.splice(9, 0, "-");

  return numbers.join("");
}
/*
  Ember's Feedback:
  - splice modifies the input array so you want to avoid calling in on the parameter
    if you make a copy of the parameter though you are good to go
*/
// Alternative Solution
function createPhoneNumber(numbers) {
  return numbers.reduce((a, c) => a.replace('#', c), '(###) ###-####');
}
