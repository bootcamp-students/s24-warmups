/*precept
parameters- take a positive integer and convert it to a string of roman numerals
return- roman numerals from a number
example- (1) returns I
concerns- converting and then stringifying. Ill get there
explain- add a key for each numeral, add a value to match, let result = an empty string. loop over and check
if the number is greater than or equal to the value of the current index in the value array. if condition is true append the roman symbol at the index from the key array to the result string and subtract the value from the number that we are converting. continue looping until the number becomes less than the current value. return result.
positive self talk- you are killing it
translate-
*/


function solution(number) {
  let key = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = '';

  for (let i = 0; i < key.length; i++) {
    while (number >= value[i]) {
      result += key[i];
      number -= value[i];
    }
  }

  return result;
}

/*
  Ember's Feedback:
  - Great job!
  - An object is a better way to keep key value pairs, and you can iterate over an object using a for-in loop.
    Nothing wrong with your solution, just letting you know of a different way.
*/
// Refactor
function solution(number) {
  let romanNumerals = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 };
  let result = '';

  for (let numeral in romanNumerals) {
    while (number >= romanNumerals[numeral]) {
      result += numeral;
      number -= romanNumerals[numeral];
    }
  }

  return result;
}
// Alternative Solution
function solution(number) {
  if (number < 1 || number > 3999) {
    return "Number out of range (1-3999)";
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let result = '';

  for (const numeral of romanNumerals) {
    while (number >= numeral.value) {
      result += numeral.numeral;
      number -= numeral.value;
    }
  }

  return result;
}
