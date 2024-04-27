function arrayPlusArray(arr1, arr2) {
  let answer = arr1.concat(arr2);
  let returnValue = 0;
  for (let value of answer) {
    returnValue += value;
  }
  return returnValue; //something went wrong
}

//Loop through each of the arrays indices
//Target each indices in each array
//Add the indices together
//Output array 3

/* PRECEPTS
  -PARAMS -arr1, arr2
  -RETURN number
  -
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
