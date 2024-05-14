function solution(number) {
  let theNumber = number;
  let finalString = '';
  let values = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (let i = theNumber; i > 0; i--) {
    for (let number in values) {
      if (Math.floor(theNumber / values[number]) > 0) {
        let string = number;
        let stringToAdd = string.repeat(Math.floor(theNumber / values[number]));
        theNumber -= Math.floor(theNumber / values[number]) * values[number];
        finalString += stringToAdd;
      }
    }
  }

  return finalString;
}

// parameter is a number between 1 and 3999

// expects us to return the equivalent roman numeral

// (1990), 'MCMXC'

// I have to make sure to only include the necessary smaller roman numerals not a bunch of I's

// have an object that represents the symbol and value. take the number first divide it by the highest numbers
// value

/*
  Ember's Feedback:
  - Good job!
  - the naming of things here got a little iffy, you could tighten that up by changing "values" to be "numerals", etc...
  - that outer loop and some of that other code is just not necessary I think, working refactor below
*/
// Refactor
function solution(number) {
  let theNumber = number;
  let finalString = '';
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (let numeral in romanNumerals) {
    if (theNumber === 0) {
      return finalString;
    }
    finalString += numeral.repeat(Math.floor(theNumber / romanNumerals[numeral]));
    theNumber -= Math.floor(theNumber / romanNumerals[numeral]) * romanNumerals[numeral];
  }

  return finalString;
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
