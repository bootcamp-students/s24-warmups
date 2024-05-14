function solution(number) {
  let romanNumeral = '';

  let ones = number % 10;
  let tens = ((number - ones) % 100) / 10;
  let hundreds = ((number - tens * 10 - ones) % 1000) / 100;
  let thousands = ((number - hundreds * 100 - tens * 10 - ones) % 10000) / 1000;

  switch (thousands) {
    case 0:
      romanNumeral += ''
      break
    case 1:
      romanNumeral += 'M'
      break
    case 2:
      romanNumeral += 'MM'
      break
    case 3:
      romanNumeral += 'MMM'
      break
    default:
      break
  }

  switch (hundreds) {
    case 0:
      romanNumeral += ''
      break
    case 1:
      romanNumeral += 'C'
      break
    case 2:
      romanNumeral += 'CC'
      break
    case 3:
      romanNumeral += 'CCC'
      break
    case 4:
      romanNumeral += 'CD'
      break
    case 5:
      romanNumeral += 'D'
      break
    case 6:
      romanNumeral += 'DC'
      break
    case 7:
      romanNumeral += 'DCC'
      break
    case 8:
      romanNumeral += 'DCCC'
      break
    case 9:
      romanNumeral += 'CM'
      break
    default:
      break
  }

  switch (tens) {
    case 0:
      romanNumeral += ''
      break
    case 1:
      romanNumeral += 'X'
      break
    case 2:
      romanNumeral += 'XX'
      break
    case 3:
      romanNumeral += 'XXX'
      break
    case 4:
      romanNumeral += 'XL'
      break
    case 5:
      romanNumeral += 'L'
      break
    case 6:
      romanNumeral += 'LX'
      break
    case 7:
      romanNumeral += 'LXX'
      break
    case 8:
      romanNumeral += 'LXXX'
      break
    case 9:
      romanNumeral += 'XC'
      break
    default:
      break
  }

  switch (ones) {
    case 0:
      romanNumeral += ''
      break
    case 1:
      romanNumeral += 'I'
      break
    case 2:
      romanNumeral += 'II'
      break
    case 3:
      romanNumeral += 'III'
      break
    case 4:
      romanNumeral += 'IV'
      break
    case 5:
      romanNumeral += 'V'
      break
    case 6:
      romanNumeral += 'VI'
      break
    case 7:
      romanNumeral += 'VII'
      break
    case 8:
      romanNumeral += 'VIII'
      break
    case 9:
      romanNumeral += 'IX'
      break
    default:
      break
  }

  return romanNumeral
}
// use % to create variables for each position in number
// switch statements to add corresponding Roman numerals

/*
  Ember's Feedback:
  - Good job! You got to a solution
  - This is pretty verbose but getting to green is the first step :D
*/
// Refactor of the number logic, I feel like this is easier to follow for me personally
let thousands = Math.floor(number / 1000);
let hundreds = Math.floor(number % 1000 / 100);
let tens = Math.floor(number % 100 / 10);
let ones = number % 10;

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
