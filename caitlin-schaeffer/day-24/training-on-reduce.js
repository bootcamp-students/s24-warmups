/*
Instructions: 
Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() 
function of the built-in javascript Array object.
Example: 
var someNumbers = [1,2,3,4,5,6,7,8,9,10];
sum(someNumbers); // should return 55
Params: given array
Return: return sum of array 
Solution: just run a reduce where we add the current item to the one before

Given Code: 
function sum(array) {
  // Use array.reduce() to calculate and return the
  // sum of the values in array.
}
*/

function sum(array) {
    let sum = array.reduce((accumulator, currentItem) =>
    accumulator + currentItem
  )
  console.log('sum: ', sum)
    return sum
  }