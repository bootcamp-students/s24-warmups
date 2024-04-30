/*
P - numbers, highestNumber, lowestNumber
R - highestNumber + " " + lowestNumber

  Split into an array and then...
  Iterate through the array to find the largest number.
  Iterate through the array to find the lowest number.
  Return highestNumber + " " + lowestNumber

*/

"use strict";

function highAndLow(numbers) {
  let stringArray = numbers.split(" ");
  let numberArray = stringArray.map(Number);
  let highestNumber = numberArray.reduce((acc, curr) => acc > curr ? acc : curr);
  let lowestNumber = numberArray.reduce((acc, curr) => acc < curr ? acc : curr);
  return highestNumber + " " + lowestNumber;
}
/*
  Ember's Feedback:
  - Great job!
  - A more efficient solution would be to sort the list and then take the first and last element
*/
// Alternative Solution
// Sort
function highAndLow(numbers) {
  "use strict"
  let order = numbers.split(' ').map(Number)
  order.sort((a, b) => a - b)
  let answer = `${order.at(-1)} ${order.at(0)}`
  return answer
}

// Slightly different reduce where you run it just once
function highAndLow(numbers) {
  "use strict"
  let numbersList = numbers.split(' ').map(Number)
  let [highestNumber, lowestNumber] = numbersList.reduce((acc, cur) => {
    if (cur > acc[0]) {
      acc[0] = cur
    }
    if (cur < acc[1]) {
      acc[1] = cur
    }
    return acc
  }, [-Infinity, Infinity])
  return `${highestNumber} ${lowestNumber}`
}

// Min Max
function highAndLow(numbers) {
  let numArr = numbers.split(' ')
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}
