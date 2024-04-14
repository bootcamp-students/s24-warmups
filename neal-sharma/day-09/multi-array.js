/* precept
parameters- return element from multidimensional array by the specified indices.
return- return the associated array specified by the indices
example- (arr[0][0]) returns 1
concerns- how to plug in indexes
explain- first find the array we want given the indexes first parameter then find the the indexes
inside that array. so for [0][0] we find array 0 which is the first one then we find the first
element inside that array which is 1. we return 1.
positive self talk- gonna get there
translate- see explain.
*/

function getElement(array, indexes) {
  let result = array;
  for (let i = 0; i < indexes.length; i++) {
    result = result[indexes[i]];
  }
  return result;
}

/*
  Ember's Feedback:
  - Good job!
*/
