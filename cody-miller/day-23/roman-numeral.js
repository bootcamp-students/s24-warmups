function solution(number) {
  // Create an object to be referenced
  let roman = {
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

  // We need a string returned, so I create one here
  let string = "";
  // Mapping over the Roman numeral only
  for (let key of Object.keys(roman)) {
    // Rounding down to see how many times the given number is divisible by the roman numeral value
    let howMany = Math.floor(number / roman[key]);
    // Updating the number to be passed down to next roman numeral calculation
    number -= howMany * roman[key];
    // How ever many times it's divisible will then be turned into a string and concatenated together
    string += key.repeat(howMany);
  }

  return string;
}

/*
This should be very similar to our getCurrentTime Kata in that
we have to divide by a larger number, then pass it along to the next divisor.
*/

/*
  Ember's Feedback:
  - Great job!! :D
  - I am not sure what the differences are off the top of my head, but -
    you might have gotten away with using a for in loop instead of a for of -
    loop over Object.keys()
    For in loops already loop over the properties of an object
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
