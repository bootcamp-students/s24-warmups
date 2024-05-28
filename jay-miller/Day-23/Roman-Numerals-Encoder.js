function solution(number) {
  let result = '',
    // Make a decimal variable array
    decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    // Make a roman variable array
    roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  decimals.map(function (value, index) {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  return result;
}
/*
  Ember's Feedback:
  - file name wrong
  - looks identical to Eoin's submission
  - result is a string not an array (deleted the comment)
  - deleted comments that didn't add anything
  - use a for in loop or a .forEach if you are calling .map
    but aren't using the returned array.
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
