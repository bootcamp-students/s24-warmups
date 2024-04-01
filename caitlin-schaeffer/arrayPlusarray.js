// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// Basically you need to define two arrays and identify their integers, and then add them together
// Adding the two arrays together will return a sum, then outside of the function you should be able to just return arrayPlusarray
// Original code given it this:
/* function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
} */ 

function arrayPlusArray(arr1, arr2)
{
  let bothArray =arr1.concat(arr2)
  let returnValue = 0
  for (let value of bothArray) {
    returnValue += value
  }
  return returnValue;
}

//OR
// for (let counter = 0; counter < arr.length; counter++) {
// returnValue += arr1(counter)
// }
/*
Precepts
- params -arr1, arr2 (these are arrays)
- the arrays can be anything, but we want to write logic that can handle anything being in the array
- so here we want to return a number 
- example [1, 2] [3, 4]
*/
