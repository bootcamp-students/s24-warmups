function solution(number) {
  let symbols = {
    1 : 'I',
    4 : 'IV',
    5 : 'V',
    9 : 'IX',
    10 : 'X',
    40 : 'XL',
    50 : 'L',
    90 : 'XC',
    100 : 'C',
    400 : 'CD',
    500 : 'D',
    900 : 'CM',
    1000 : 'M'
  }

  let romanNumeral = "";
  let keys = Object.keys(symbols).map(Number).sort((a, b) => b - a); // Sort keys in descending order
  for (let i = 0; i < keys.length; i++) {
    while (number >= keys[i]) {
      romanNumeral += symbols[keys[i]];
      number -= keys[i];
    }
  }
  return romanNumeral;
}

//Parameters create a function that takes a positive integer between 1 and 3999 to make a string of roman numerals.
//Return my function should return an integer into a roman Numeral.
//Example 11 should return "XI"'.... 1990 should return, "MCMXC"')
//Concern I don't understand how to convert to roman numerals or do the wrong method on this problem
//Explain I start by setting a variable for each roman numeral symbol. object literals with keys and pair each symbol with its own number
//Then I will need to sort through the array for the order, increase/decrease the number/symbol value
//Positive talk, I feel like I've done something similar to this when had to convert the time in a previous kata and
//using the dna complementary. I'm learning the coding "vocab" Even though it's taking me a little longer, I will get there with understanding everything.

/*
  Ember's Feedback:
  - <3 Great job!!!! :D
  - You got it, wonderful job
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

//   let symbols = {
//     1 : 'I',
//     5 : 'V',
//     10 : 'X',
//     50 : 'L',
//     100 : 'C',
//     500 : 'D',
//     1000 : 'M'
//   }
//   console.log(Object.keys(symbols))
//   let romanNumeral = "";

//   for ( let i in symbols) {
//     while (number >= parseInt(i)) {
//       romanNumeral += symbols[i];
//       number -= parseInt(i);
//     }
//   }
//   return romanNumeral;

// //   for (let i = 0; i < symbols.length; i++ ) {
// }


