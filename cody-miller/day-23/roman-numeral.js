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
