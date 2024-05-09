function findShort(s) {
  const words = s.split(' ');
  let shortestWord = words.reduce((acc, cur) => {
    return cur.length < acc.length ? cur : acc;
  });

  return shortestWord.length;
}
//P find the shortest word
// R my function should return the length of the shortest word.
//Example ['I eat bananas'], 1;
//Concerns use the wrong function and confuse the computer
//Explain, I will split the entire string to break up every word. and then reduce the string, iterating over each word
//using acc and cur as values. if the current value is less than acc then it tracks that length of the word until it reaches the end of the string.
/*
  Ember's Feedback:
  - Great work!! Reduce is a hard method to use :D
  - Nice ternary operator too! :)
*/
// Alternative Solution
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

function findShort(s) {
  return Math.min(...s.split(" ").map(word => word.length));
}
/*
  The above can be a little confusing because of the order in which the expressions are resolved.
  1) calling Math.min, but we need to pass it a value (or many values) as arguments
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

// function findShort(s){
//   console.log('s', s);
//   const words = s.split(' ')
//   console.log('words', words);
//   const shortestWord = words.reduce((acc, cur) => {
//     console.log('acc, cur', acc, cur)
//     return acc < cur.length ? acc : cur.length
//   }, 30000)
//     console.log('shortestWord: ', shortestWord);
//   return shortestWord
// }

//P find a function that finds the shortest word in a string.
//R my function should include the shortest word.
//Example- (['I eat bananas'], 1)
// Concerns - I could get confused on which function to use.
//Explain- I'm going to split the string so that I can separate each word. I will set the initial value to a big number so that I can pass the reduce method
// into the first string of the array. Using the accumulator and then passing onto the current word to see which of the two are the shortest word and working
// its way through the entire string.
