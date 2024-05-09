function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join('');
  const firstPart = numbers.slice(3, 6).join('');
  const secondPart = numbers.slice(6, 10).join('');
  return '(' + areaCode + ')' + ' ' + firstPart + '-' + secondPart
}

// will use .join
// create vars for areacode,firstpart,secondpart
// use .slice to grab numbers
//use .join to combine
// slice to grab numbers up to what i set the second number to

/*
  Ember's Feedback:
  - Great job!
  - The slice array method produces a shallow copy so it is safe to use here.
  - Come back to this and rename the file using the class convention. All lowercase separated by dashes
*/
// Alternative Solution
function createPhoneNumber(numbers) {
  return numbers.reduce((a, c) => a.replace('#', c), '(###) ###-####');
}
