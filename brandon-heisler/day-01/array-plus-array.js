
function arrayPlusArray(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  let sum = 0
  for (const value of arr3) {
    sum = sum + value;

  }
  return sum;
}

// need the sum of 2 arrays.
// function establishes 2 arrays.
// arr1 + arr2 = sum
// find sum of 1 array, find sum of 2nd array and add sums.
// use array.concat

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
