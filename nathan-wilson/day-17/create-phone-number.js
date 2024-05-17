function createPhoneNumber(numbers) {
  let firstThreeNumbers = numbers.slice(0, 3).join('');
  let secondThreeNumbers = numbers.slice(3, 6).join('');
  let four = numbers.slice(6, 10).join('');

  return `(${firstThreeNumbers}) ${secondThreeNumbers}-${four}`;
}

// an array of integers

// return a string with those integers in the form of a string

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"

// I could format the string wrong, or have some type errors throughout it

// Take the array of numbers, break them up into array of 3, 3, and 4.
// Then join them all separately in a template literal

// I believe in myself
/*
  Ember's Feedback:
  - Great job!
  - Really good use of array methods and templates.
*/
// Alternative Solution
function createPhoneNumber(numbers) {
  return numbers.reduce((a, c) => a.replace('#', c), '(###) ###-####');
}
