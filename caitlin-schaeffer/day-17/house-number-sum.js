/*
Instructions: Add up the numbers in an integer array, stopping at the number 0.
Example: Test.assertEquals( houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]),11)
Params: given integer array
Return: single value
Solution: an if else statement nested in a reduce

Given Code:
function houseNumbersSum(inputArray) {
  //coding and coding..


}
*/

// the best way to stop a reduce is with a boolean
/*
Have to set the initial value to 0 so that it really takes the current value as the first integer to add
Acc = running total
Reduce takes two arguments: the function definition and the initial value
*/

function houseNumbersSum(inputArray) {
  let stopAdding = false
  let sum = inputArray.reduce(
    (acc, cur) => {
      if (stopAdding) return acc;
      if (cur != 0) {
        return acc + cur
      } else if (cur === 0) {
        stopAdding = true
        return acc
      }
    }, 0
  )
  return sum
}
/*
  Ember's Feedback:
  - Great job!!
  - Because your if statements are the inverse of each other, you can just use an else
*/
// Refactor
function houseNumbersSum(inputArray) {
  let stopAdding = false
  let sum = inputArray.reduce(
    (acc, cur) => {
      if (stopAdding) return acc;
      if (cur === 0) {
        stopAdding = true
        return acc
      } else {
        return acc + cur
      }
    }, 0
  )
  return sum
}
// Alternative Solution
function houseNumbersSum(inputArray) {
  // iterate over the array, producing a sum, until I encounter a zero
  let sum = 0;
  for (let int of inputArray) {
    if (int === 0) return sum;
    sum += int
  }
  return sum;
}
/*
  PRECEPT
  params: number[]
  return: number
  example: [5, 2, 0, 3] => 7
  concern: undefined input, empty array input, input has no 0; the description implies these will never happen
  positive: I have summed an array before, this is just that with a stop condition :D
  translate: I will iterate over the array and produce an element summation. If I encounter a zero, -
    I will return from the function as a whole or break the iteration in some way.
*/

/* Code work out:

let sum = numbers.reduce((acc, cur) => {
    return acc + cur
   })
   console.log('sum: ', sum)

function houseNumbersSum(inputArray) {
    let output = {
        if (number != 0) {
        number + nextNumber
    } else if (number === 0) {
        break
    }
    }

    return output
  }

  */
