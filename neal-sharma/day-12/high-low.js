/*precept
parameters- take a string of numbers and return the highest and lowers. in that order
return- highest and lowest in string.
example- '1 2 3 4 5' return '5 1'
concerns- turning my pseudocode into real code. fully understanding math.min and math.max etc.
explain- biggest issue was syntax. using string interpolation i plugged in math.min and math.max
positive self talk- practice puts brains in your muscles

*/
"use strict";
function highAndLow(numbers){
  //let num = str.split(' ');
  //return Math.max(...numbers.split(' '), Math.min(...numbers.split(' ')))
  return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`
}
/*
  Ember's Feedback:
  - Great job!!
  - That is some pretty complicated syntax so great job! :D
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
