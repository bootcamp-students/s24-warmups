'use strict'
//map is going to iterate over the array
//math .min and math .max are going to find the smallest and largest numbers

function highAndLow(numbers) {
  let newNum = numbers.split(' ').map(Number);
  const max = Math.max(...newNum);
  const min = Math.min(...newNum);
  return `${max} ${min}`;
}
/*
  Ember's Feedback:
  - Hey! Good job! :D
  - Love the use of the rest operator to unpack the array and
    using the template to turn those number values into a string :D
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
