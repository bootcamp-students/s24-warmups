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
  return sum
}
/*
    Ember's Feedback:
    - If you have a single element in your array, .reduce will return that element and never run your function.
    However; if you provide an initial value, it will run your function one time.
    .filter() and .map() are perfectly fine if you call them on an empty array.
    They will not run your function and will return to you a new, empty array.
    .reduce will however throw a fit (an error)
    If you give .reduce an initial value and you call it on an empty array it will not run your function and it will not throw an error.
    Instead it will simply return to you the initial value as the return from the function.
    image demonstrating the above behavior in the browser console:
    https://files.slack.com/files-tmb/T06MCB90BT9-F072X85HREC-57d64ceed0/image_720.png
*/
