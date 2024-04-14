function getElement(array, indexes) {
  //function takes two arrays, one being a (possibly) multidimensional array, and the other being an array of indices
  //needs to return the correct element from the array

  //first start by storing the outermost array
  let current = array

  //solve by using a for loop based on the size of the indexes array
  //access and store the next-accessed value by index, able to nest arbitrarily deep

  for (let i = 0; i < indexes.length; i++) {
    current = current[indexes[i]]
  }

  //once we arrive at the end, return current
  return current
}
/*
  Ember's Feedback:
  - Great job!
  - Great pseudo code and solution
*/
