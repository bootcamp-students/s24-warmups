function getElement(array, indexes) {
  let newArray = array
  for (const index of indexes) {
    newArray = newArray[index];

  }
  return newArray;
}

/*
  i need to return the array reference that matches what they're giving me
  they give me a multidimensional array and the index,
  i need to return the value in the array specified
  by indexes.
*/

/*
  Ember's Feedback:
  - wonderful job!
*/
