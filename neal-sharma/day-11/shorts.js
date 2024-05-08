/* precept
parameters- find shortest word in a string
return- a number that equals the shortest words length
example- bitcoin take over shortest word = 4
concerns - finding the shortest string and returning a number
explain- start by defining s into words with split and a space so its goes by words instead
of each letter. length of word = the length of the first word.

positive self talk- Can do
translate-
*/

function findShort(s) {
  let words = s.split(' ');// split string into an array or words with split(' ') must use space
  let lengthOfWords = words[0].length; // lengthOfWord = length of first word


  for (let i = 0; i < words.length; i++) { // loop through each word in array

    if (words[i].length < lengthOfWords) { // check if current word is shorter than lengthOfWord
      lengthOfWords = words[i].length // if yes update lengthOfWord with current word
    }

  }
  return lengthOfWords; // return length of word with the number of the shortest word found.
}



/*
s.split splits the string into words so the array is now ['This', 'is', 'Neal'] or whatever the
test string is. .map(s => s.length) maps each element of the array to its length. example [4, 2, 4],
Math.min calculates the minimum value of the elements in the array. spread is needed here because it
makes it so that Math.min checks each number in the array. without the spread it would return
NaN not a number.
This uses Math.min to find
*/

function findShort(s) {
  return Math.min(...s.split(' ').map(s => s.length));
}

/*
  Ember's Feedback:
  - Great job!
  - You are really getting it :D
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
