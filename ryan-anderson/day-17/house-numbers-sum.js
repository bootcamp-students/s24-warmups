function houseNumbersSum(inputArray) {
  let zero = inputArray.indexOf(0);
  let newArray = inputArray.splice(0, zero);

  let sum = newArray.reduce((acc, num) => {
    return acc + num
  }, 0)
  return sum
}

// use indexOf to find first 0
// splice array at that index
// reduce remaining array into sum

/*
  Ember's Feedback:
  - the assignment is not needed in the reduce function, it is unnecessary operation
  - Great job!
*/
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
