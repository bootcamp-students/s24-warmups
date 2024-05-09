function createPhoneNumber(numbers) {
  // Make format = xxx-xxx-xxx
  let format = "(xxx) xxx-xxxx";
  // Loop through a for if using .length
  // Using .replace after to replace 'x' with numbers[i]
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }
  // Return format to get (123) 456-7890
  return format;
}
/*
  Ember's Feedback:
  - interesting solution!
  - file name does not conform to our class standard.
  - just say for loop. Don't say "for if", that isn't anything and coworkers will be confused
*/
// Alternative Solution
function createPhoneNumber(numbers) {
  return numbers.reduce((a, c) => a.replace('#', c), '(###) ###-####');
}
