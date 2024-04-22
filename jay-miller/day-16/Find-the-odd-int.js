function findOdd(A) {
  //Already given an array (A)
  //use .find and .filter to find the odd integers
  "use strict"
  //Use .length to get length of current value
  //Will only be 1 integer that appears odd numbers
  //Return odd integers
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
  //happy coding!
}
