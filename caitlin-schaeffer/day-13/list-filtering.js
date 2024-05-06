/*
Instructions: In this kata you will create a function that takes a list of non-negative
integers and strings and returns a new list with the strings filtered out.
Params: given array that contains integers and strings
Return: integer only array
Example: filter_list([1,2,'a','b']) == [1,2]
Solution: filter out the strings (!=  = is not)

Given Code:
function filter_list(l) {
  // Return a new array with the strings filtered out
}
*/

// Okay I couldn't get the other fun methods to work, so instead I'm just going to filter out strings.

function filter_list(l) {
  return l.filter( str => typeof str != 'string' && str >= 0);
}
/*
  Ember's Feedback:
  - Good job!
  - filter expects you to return a value from your test function that it will use to determine
    if it should keep the current element in the array. If you don't return a boolean value it will
    try and coerce the value you return into being a boolean value, see the truthy/falsy table to see how
    that pans out. Zero is falsy. That is why .filter(Number) was leaving out zeros.
*/
// Alternative Solution
function filter_list(l) {
  return l.filter(Number.isInteger);
}



// Broken Code

// function filter_list(l) {
//     // console.log(l)
//     //   console.log(l.map(Number))
//       let filteredList = l.filter((Number)
//         (Number.isNaN(l)))
//       console.log(filteredList)
//       return filteredList
//     }
// this returns numbers but it doesn't return 0


// // maybe this instead?
// function filter_list(l) {

//     function zeroCheck(element){
//       if (element === 0){
//         return 0
//       } else if (element) {
//         return element.filter(Number)
//       }
//     }
//     //   console.log(l)
//     // console.log(l.map(Number))
//     // let filteredList = l.filter(Number)
//     // console.log(filteredList)

//     // return filteredList

//   }



