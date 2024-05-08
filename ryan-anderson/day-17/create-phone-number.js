function createPhoneNumber(numbers) {
  let numStr = numbers.map(num => num.toString())
  return '(' + numStr[0] + numStr[1] + numStr[2] + ') ' + numStr[3] + numStr[4] + numStr[5] + '-' + numStr[6] + numStr[7] + numStr[8] + numStr[9]
}
// turn numbers into string(s)
// return phone number string

/*
  Ember's Feedback:
  - Great job!
  - You can actually get away with leaving out the cast of all elements to strings,
    JS will make it a string for you when you use the + operator with a string as an operand
*/
// Alternative Solution
function createPhoneNumber(numbers) {
  return numbers.reduce((a, c) => a.replace('#', c), '(###) ###-####');
}
