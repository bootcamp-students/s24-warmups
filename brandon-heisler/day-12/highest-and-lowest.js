function highAndLow(numbers) {
  "use strict";

  let numbersArray = numbers.split(" ");

  let max = Math.max(...numbersArray)

  let min = Math.min(...numbersArray)

  let result = `${max} ${min}`
  return result
}

/*
find the highest and lowest numbers and return them.
i want to turn the str into an array so i can manipulate it.
take the array and find the min and max of each using math.min, max respectively
return them in the correct format.
*/
/*
  Ember's Feedback:
  - great job! Love the template string and using the spread operator :D
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
