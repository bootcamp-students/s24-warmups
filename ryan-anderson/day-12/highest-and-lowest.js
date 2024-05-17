'use strict'
function highAndLow(numbers){
  let newNumbers = numbers.split(' ');
  let numberNumbers = newNumbers.map(Number);
  const maxNumber = numberNumbers.reduce((max, cur) => max > cur ? max : cur);
  const minNumber = numberNumbers.reduce((min, cur) => min < cur ? min : cur);
  return (maxNumber + ' ' + minNumber)
}

// reduce to return highest number
// another reduce to return lowest number

/*
  Ember's Feedback:
  - Good job!
  - reduce is a hard one, I hope you got a good feeling for it
  - the parenthesis are unnecessary on the return line but they don't hurt
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
