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

/*
array is where you want to retrieve elements
indexes refers to the position of the element in the array that you want to retrieve.
the reduce method iterates over each index in the indexes array. 
for the first iteration accumulator is initialized with the value of the test array [0] which is
the first array [1, 2]. then the second iteration is also 0 so it goes to the first value in the 
array which is 1. final result is 1. 
same thing for the other tests. the index is 2 so we count from 0 up to the correct string in
the array. which would be 'three.'.
the last test has 3 indexes. it goes 0 which is the first array [[1, 2, 3]]. the next is 0
which goes the next array [1, 2, 3]. the last is 1 so it goes to the second value in the 
the array which is 2. another way to look at this is [[[1, 2. 3]]][0] which is [[1, 2, 3]].
then [[1, 2, 3]][0] which is [1, 2, 3]. then the [1, 2, 3][1] which is 2. final result is 2. 
*/


function getElement(array, indexes) {
  return indexes.reduce((acc, index) => acc[index], array);
}