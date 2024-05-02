// use .reduce()
// create vars for highest and lowest num
//use .split
// return will be highest and lowest number
// use map to map through array

function highAndLow(numbers) {
  let num = numbers.split(" ");
  let numArray = num.map(Number)
  let lowestNumber = numArray.reduce((max, cur) => max < cur ? max : cur)
  let highestNumber = numArray.reduce((max, cur) => max > cur ? max : cur)
  return highestNumber + " " + lowestNumber
}
/*
  Ember's Feedback:
  - Really great job with .reduce!
  - Good job mapping over the array with Number, to cast all of the elements to be number data types
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
