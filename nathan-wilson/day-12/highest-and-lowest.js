function highAndLow(numbers) {
  let maxMin = numbers.split(' ').reduce(
    (acc, cur) => {
      console.log('accumulator, ', acc, 'current, ', cur);
      cur = Number(cur);
      if (cur < acc.min) {
        acc.min = cur;
      }
      if (cur > acc.max) {
        acc.max = cur;
      }
      return acc;
    },
    { max: -Infinity, min: Infinity }
  );
  return `${maxMin.max} ${maxMin.min}`;
}

// Expecting a string of space seperated numbers

// Expecting me to return a string of two space seperated numbers, first the highest number, second
// the lowest number from the original string

// ("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9"

// I could have a type error because its giving a string and wanting a string in return

// Convert the string to an array of integers. reduce the max and then the min into an array.
// convert that array into a space seperated string. return that value

// I can do this! I believe in myself!
