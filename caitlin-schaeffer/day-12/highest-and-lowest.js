/*
Instructions: In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.
Params: given string of numbers
Return: string of the highest and lowest numbers
Example: highAndLow("1 2 3 4 5");  // return "5 1"
Solution: use map(Number) to split the string into integer values, then use reduce with a max
function and reduce with a min function to produce the highest and lowest integers
then use string interpolation to return the two values together

Given Code:
function highAndLow(numbers){
  // ...
}
*/

function highAndLow(numbers) {
  "use strict"
  let order = numbers.split(' ').map(Number)
  console.log(order)

  let orderHigh = order.reduce((max, cur) => max > cur ? max : cur)

  console.log(orderHigh)

  let orderLow = order.reduce((min, cur) => min < cur ? min : cur)

  console.log(orderLow)

  let answer = `${orderHigh} ${orderLow}`
  return answer
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
    if(cur > acc[0]) {
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
function highAndLow(numbers){
  let numArr = numbers.split(' ')
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}
