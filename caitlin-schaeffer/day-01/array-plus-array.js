// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// Basically you need to define two arrays and identify their integers, and then add them together
// Adding the two arrays together will return a sum, then outside of the function you should be able to just return arrayPlusarray
// Original code given it this:
/* function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
} */

function arrayPlusArray(arr1, arr2) {
  let bothArray = arr1.concat(arr2)
  let returnValue = 0
  for (let value of bothArray) {
    returnValue += value
  }
  return returnValue;
}

/*
Precepts
- params -arr1, arr2 (these are arrays)
- the arrays can be anything, but we want to write logic that can handle anything being in the array
- so here we want to return a number
- example [1, 2] [3, 4]
*/

/* Ember's Feedback:
  You did a good job! Very proud :D
  Some example pseudocode below so you get a feel for it.
  PRECEPT
  params - arr1: array of number; arr2: array of numbers
  return - number
  example - ([1,2,3], [4,5]) => 15
  concerns - I do not want to modify-in-place the parameter arrays because-
              in JS arrays are passed by reference and modifying my input could lead to -
              bugs in my code elsewhere. (side effects)
  explain - I want to access each number in the given arrays and sum them.
            I will combine both arrays into a new array with all the numbers inside it.
            I wll iterate over the combined array and -
            I will individually add each number in the array to my total sum.
            I will return the total sum from my function.
  pos self talk - This is hard, but I got good sleep last night and I can always ask for help :)
  translate - I will copy my lines from explain into my function body and implement them with JS code.
*/
// Alternative solution
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
