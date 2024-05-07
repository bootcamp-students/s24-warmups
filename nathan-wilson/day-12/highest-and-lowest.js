function highAndLow(numbers) {
  let maxMin = numbers.split(' ').reduce(
    (acc, cur) => {
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

// Expecting a string of space separated numbers

// Expecting me to return a string of two space separated numbers, first the highest number, second
// the lowest number from the original string

// ("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9"

// I could have a type error because its giving a string and wanting a string in return

// Convert the string to an array of integers. reduce the max and then the min into an array.
// convert that array into a space separated string. return that value

// I can do this! I believe in myself!

/*
  Ember's Feedback:
  - Awesome job!!
  - I prefer yours to mine, yours is more readable with the object properties
*/
// Alternative Solution
// Sort
function highAndLow(numbers) {
  "use strict"
  let order = numbers.split(' ').map(Number)
  order.sort((a, b) => a - b)
  return `${order.at(-1)} ${order.at(0)}`
}

// Min Max
function highAndLow(numbers) {
  let numArr = numbers.split(' ')
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}
