function getElement(array, indexes) {
  let returnIndex = 0;
  for (let i = 0; i < indexes.length; i++) {
    returnIndex = indexes[i];
    array = array[returnIndex];
  }
  return array
}
// find specified element in array
// isolate it (or delete rest of array)
// for loop to build array of indexes

/*
  Ember's Feedback:
  - never delete the rest of the array lol
    I have never needed to do that or read code that does that in the last 5+ years
  - Good job!
  - returnIndex as written is misleading. It looks like a return value but it is actually just needed inside the for loop
    It would be more readable to remove line 2 and put let position = indexes[i] as the first line in the for loop.
    Overwriting the value of array is technically ok, but I personally treat my parameter variables as const.
  - come back and add your pseudocode for this submission to count as keeping you in good standing for the program.
*/
// Alternative solution
function getElement(array, indexes) {
  let returnValue = array;
  for (let i = 0; i < indexes.length; i++) {
    returnValue = returnValue[indexes[i]];
  }
  return returnValue;
}
