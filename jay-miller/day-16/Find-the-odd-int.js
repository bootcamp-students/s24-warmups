function findOdd(A) {
  //Already given an array (A)
  //use .find and .filter to find the odd integers
  "use strict"
  //Use .length to get length of current value
  //Will only be 1 integer that appears odd numbers
  //Return odd integer
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
  //happy coding!
}
/*
  Ember's Feedback:
  - Your pseudocode is pretty non-specific, what is written makes it sound like you
    are finding odd integers and not the integer that appears an odd number of times.
    I would work on tightening that up to prevent confusion when on the job.
  - file name does not conform to our class standard.
*/
