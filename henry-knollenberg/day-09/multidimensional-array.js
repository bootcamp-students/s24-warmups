/* Parameters - multidimensional array, array of indexes of multidimensional array
  Return - element of multidimensional array
  Use a for/of loop to dive into the multi-dimensional array.
*/

function getElement(array, indexes) {
  let currentIndex = array;
  for (const index of indexes) {
    currentIndex = currentIndex[index];
  }
  return currentIndex;
}

/*
  Ember's Feedback:
  - Great job!
*/
