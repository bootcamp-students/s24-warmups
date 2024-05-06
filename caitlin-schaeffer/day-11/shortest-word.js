/*
Instructions: Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
Params: given string
Return: length of shortest word in string
Solution: split 's', identify length of substrings, return smallest length of substring

Given Code:
function findShort(s){
}
*/

function findShort(s) {
  // split the string into individual words inside of an array
  let newArray = s.split(' ')
  // use built in sort function to take from minimum to max
  // The ES6 arrow function is a way to write a function inline
  // Wrote this function so that the sort function is not ordering by alphabet but by length of the word.
  newArray.sort((a, b) => a.length - b.length)
  // then return the length of the first word of the array!
  return newArray[0].length
}
/*
  Ember's Feedback:
  - Great solution!!! :D
  - Remove the console.logs, you won't ship those in your code on the job
    so get the habit of removing them now!
  - Great job, you are really getting the feeling for it now. I feel like
    you are starting to get a feel for the syntax (different than math syntax you are used to!)
    and that you are getting a feeling for the rules of JavaScript so that you have a little more
    understanding of what it is doing and how it resolves the things you are writing.
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

