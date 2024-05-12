function solution(number) {
  //function takes a number between 1 and 3999 inclusive
  //needs to return that same number as a roman numeral string

  //to solve, divide our number in steps, rounding down, and keeping the remainder
  //this is 1000, 500, 100, 50, 10, 5, and 1
  //corresponding to M, D, C, L, X, V, I
  //more of a given magnitude = more of a numeral

  //the only complications are our many exceptions caused by 9s and 4s, as no symbol can appear more than 3 times in a row
  //9 being IX
  //4 being IV
  //etc
  //these exceptions should be handled between steps

  //first form an array to store our numerals
  let array = []

  //function to quickly add our numerals
  function add_numerals(num, str) {
    for (let i = 0; i < num; i++) {
      array.push(str)
    }
  }

  let thousands = Math.floor(number / 1000)
  add_numerals(thousands, "M")
  number = number % 1000

  if (number >= 900) {
    array.push("CM")
    number -= 900
  }

  let five_hundreds = Math.floor(number / 500)
  add_numerals(five_hundreds, "D")
  number = number % 500

  if (number >= 400) {
    array.push("CD")
    number -= 400
  }

  let hundreds = Math.floor(number / 100)
  add_numerals(hundreds, "C")
  number = number % 100

  if (number >= 90) {
    array.push("XC")
    number -= 90
  }

  let fiftys = Math.floor(number / 50)
  add_numerals(fiftys, "L")
  number = number % 50

  if (number >= 40) {
    array.push("XL")
    number -= 40
  }

  let tens = Math.floor(number / 10)
  add_numerals(tens, "X")
  number = number % 10

  if (number === 9) {
    array.push("IX")
    number -= 9
  }

  let fives = Math.floor(number / 5)
  add_numerals(fives, "V")

  if (number === 4) {
    array.push("IV")
    number -= 4
  }

  //remainder is our ones
  let ones = number % 5
  add_numerals(ones, "I")

  //when we're done, return our array joined together
  return array.join("")
}
/*
  Ember's Feedback:
  - Good job!
  - JS naming convention is to use camelCase not snake case
  - .repeat is a function that exists if you want to replace the add_numerals for loop
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
