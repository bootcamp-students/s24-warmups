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
