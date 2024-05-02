function findShort(sentence) {
  let words = sentence.split(" ");
  let answer = words.reduce((acc, curr) =>
    acc.length < curr.length ? acc : curr
  );
  return answer.length;
}
/*
We know it will be a string of words.
We know they will be strings.
Separate by " ",
Find the length of the array.
Return the shortest one.
*/
/*
  Ember's Feedback:
  - Good job :)
  - reduce is a hard one to use, good job!
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
