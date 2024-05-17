//create a result
//create two arrays, one for roman numerals the other for decimals
//after that we need to iterate over the numerals array
//you will need to subtract the value from the number until th
//the list of the general number is not enough, we need a more exhaustive list of decimals and romans
//
function solution(number) {
  // convert the number to a roman numeral
  var results = '',
    decimals = [1000, 900, 500, 400, 100, 90, 50, 10, 9, 5, 4, 1],
    roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'X', 'IX', 'V', 'IV', 'I'];

  decimals.map(function (value, index) {
    while (number >= value) {
      results += roman[index];
      number -= value;
    }
  })
  return results
}

/*
  Ember's Feedback:
  - Removed the duplicate function
  - This is an anti-pattern use of .map
    If you are not using the resulting array from .map -
    just use a .forEach() because that is the method -
    specifically for iterating on an array to create side effects.
    Best practice for readability and as an optimization
*/
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
