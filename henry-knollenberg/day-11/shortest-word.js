/* Parameters - Shortest Value, String, Array, Index of Array
  Return - Shortest Value

  Split the string into an array.
  Set the Shortest Value to the length of the first index of the array.

  Iterate over the array =>
    Compare the Shortest Value to each index's length.
    If the index's length is shorter, then reset the Shortest Value to that length.

  Return the final Shortest Value.
*/

function findShort(s) {
  let arr = s.split(" ");
  let shortestValue = arr[0].length;

  for (let index of arr) {
    if (shortestValue > arr[arr.indexOf(index)].length) {
      shortestValue = arr[arr.indexOf(index)].length;
    }
  }

  return shortestValue;
}
/*
  Ember's Feedback:
  - Ah ok so this one is a bit goofy. You can just say index.length,
    because it is already the value from the array.
  - Great job!
*/
// Alternative Solution
function findShort(s) {
  return Math.min(...s.split(" ").map(word => word.length));
}
/*
  The above can be a little confusing because of the order in which the expressions are resolved.
  1) calling Math.min, but we need to pass it a value or values as arguments
  2) spread operator (...), we are going to give many values as arguments and will get them by unpacking
    something. In this instance we will eventually unpack the elements from an array.
  3) s - the parameter variable that stores the argument value when the function is called
  4) .split - exists if the value in s is of datatype string. Returns an array of string elements
  5) .map - we immediately call the map array method on the array returned from .split. We give
    map a function we defined. This function will be called on every element in the array returned
    from .split. That array contains strings and those strings should be the words from the starting
    sentence "s" because words are separated by spaces in English. Strings have a length property so
    this map will return an array where every element from the starting array is now instead a number value
    which corresponds to its length. ['hi', 'Bob'] -> [2, 3]
  If you look back at 2, we take the array returned from 5 and unpack it. So we end up giving Math.min a
  bunch of number values. It will return to us the lowest number value from those arguments.
  6) We return from our function the value given to us from the Math.min function call.
*/
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;
