function highAndLow(numbers) {
  //function takes a string of numbers, separated by spaces
  //needs to return the highest and lowest number, also in a string separated by spaces (highest first)

  //to solve, store highest/lowest vars and split the string into an array by spaces
  let highest = -1000000
  let lowest = 1000000 //exceedingly small/large placeholders
  let array = numbers.split(" ")

  //then iterate over the array, checking each number (as an actual number) against the currently stored numbers
  //adjusting where appropriate

  for (let i = 0; i < array.length; i++) {
    let num = Number(array[i])

    if (num > highest) {
      highest = num
    }
    if (num < lowest) {
      lowest = num
    }
  }

  //once done, store the highest/lowest numbers back into a string, then return it
  return String(highest) + " " + String(lowest)
}
// Alternative Solution
// Sort
function highAndLow(numbers) {
  "use strict"
  let order = numbers.split(' ').map(Number).sort((a, b) => a - b)
  return `${order.at(-1)} ${order.at(0)}`
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
