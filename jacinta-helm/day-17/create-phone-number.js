function createPhoneNumber(numbers) {

  let firstPart = "(";
  let secondPart = ") ";
  let thirdPart = "-";

  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      firstPart = firstPart.concat(numbers[i].toString());
    } else if (i >= 3 && i < 6) {
      secondPart = secondPart.concat(numbers[i].toString());
    } else if (i >= 6) {
      thirdPart = thirdPart.concat(numbers[i].toString());
    }
  }

  return `${firstPart}${secondPart}${thirdPart}`;
}

//P create a function that accepts an array of ten integers 0-9, that returns a string of those in a phone number
//R my function should return a 10 digit phone number
//Example ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// concerns there aren't 10 integers or there are numbers not between 0 and 9.
//Explain, create 3 parts of the numbers in an array, since there are three different sections.
// create an if else loop and divide each section up and set it to equal each variable with the concat method.
//then return the results with adding all three parts together.

/*
  Ember's Feedback:
  - Great job!!
  - Wonderful solution :D
*/
// Alternative Solution
function createPhoneNumber(numbers) {
  return numbers.reduce((a, c) => a.replace('#', c), '(###) ###-####');
}
