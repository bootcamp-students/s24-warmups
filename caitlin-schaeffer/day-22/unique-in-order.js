/*
Instructions: Implement the function unique_in_order which takes as argument a sequence and
returns a list of items without any elements with the same value next to each other and
preserving the original order of elements.
Example:
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
Params: given a string or an array
Return: an array
Solution: Combine filter and call! Using call handles the fact that the provided params can be
strings OR arrays.

Given Code:
var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
}
*/

var uniqueInOrder = function (iterable) {

  // used call, which is a function that calls this function with a given this value and
  // arguments provided individually.
  let filteredNumbers = Array.prototype.filter.call(iterable,
    (value, index, array) => value !== array[index - 1])
  return filteredNumbers
}

/*
  Ember's Feedback:
  - You can finish your code, you don't have to use the code I show you!
*/
// Alternative Solution
// Here is how you would tailor your approach based on the input type
var uniqueInOrder = function (iterable) {
  // I need to handle mixed input
  switch (typeof iterable) {
    case "string":
      // a solution from a previous kata, remove adjacent duplicates in a string
      return iterable.replace(/(.)\1+/g, "$1").split("");
    case "object":
      let uniqueList = [];
      // iterate over the input array
      return iterable.reduce((accumulator, currentValue, index, array) => {
        // remove adjacent duplicates, respecting case sensitivity
        if (currentValue !== array[index + 1]) {
          accumulator.push(currentValue);
        }
        return accumulator;
      }, uniqueList);
  }
};
/*
    PRECEPT
    Params - string | number[] | string[]
    Returns - string[] | number[]
    Example - 'AAAABBBCCDAABBB' => ['A','B','C','D','A','B']
    Concerns - using the wrong method on the wrong input
    Explain -
        I need to iterate over the input and remove adjacent duplicates, -
        respecting case sensitivity.
        Don't reorder the elements.
    Positive self talk - I have solved a similar katas before.
    Translate - I will put my logic lego pieces as inline comments.
*/
/*
  Regex explanation:
  (.)\1+
  1st Capturing Group (.)
    . matches any character (except for line terminators)
  \1 matches the same text as most recently matched by the 1st capturing group
  + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
  in .replace, you give the "$1" meaning replace everything in the match with what was in the first capture group
  aaaaaaaaaaaaaaaaaaaaaaa => a
  (a) is captured, so all the a's are replaced with just the 1st a :P
*/

/* This is the code I was working through:

var uniqueInOrder=function(iterable){
    // this shows the original value of iterable
    console.log('original value:', iterable)
    // this splits iterable into an array of individual letters
    let newArray = iterable.split('')
    // this shows the value of the split array
    console.log('newArray:', newArray)
    //this will filter the newArray to check if the current values is equal to the previous value
    // and will keep elements unless it is the same as the value behind it
    // that keeps all of the elements unless its the same in a row
  let filteredArray = newArray.filter((value, index) =>
  value !== newArray[index - 1])
  console.log('filteredArray:', filteredArray)
  return filteredArray
  // this all works but doesn't handle the array of integers so we used call
  }

*/
