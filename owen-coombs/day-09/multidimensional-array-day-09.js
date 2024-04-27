// parameters-array,indexes(array of numbers number [])
// return-an element from array parameter
// example-([[1,2],[3,4]]),[0,0])
// concerns-improper parameter data type
// return index
function getElement(array, indexes) {
  let currentIndex = array
  for (const index of indexes) {
    currentIndex = currentIndex[index];
  }
  return currentIndex;
}
/*
  Ember's Feedback:
  - We went over this in class just LMK if it is still confusing
  - indexes is a list of positions, so we iterate on that list and drill into the input
    array to find the thing located by the position values in the indexes input. This kata is
    predicated on the assumption that the content of array will always match the positions provided by indexes.
*/
