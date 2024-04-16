/*
Params: (the given array will always be longer than 0)
1. array  - array any[]
2. indexes - array of numbers number[]
Return: any - an element from array param
Example:  ( [[1, 2], [3, 4], [5, 6]], [0,0] )  => 1        (arr[0][0])
Concerns: improper param data type
Explain: We need to write a code that returns the value of the index of a given element in an array

Given Code:
function getElement(array, indexes) {
  // good luck
}
*/

//start with index array, loop over and then search the array
// array.findIndex() is not an accepted kata function, neither is indexOf()

function getElement(array, indexes) {
  let currentIndex = array
  // Current index is the index array, So index will be a number; So on my input go find whatever is at a given location in the array
  for (const index of indexes) {
    //And then whatever you find at the first pass then you need to find the value from that index
    currentIndex = currentIndex[index];
  }
  return currentIndex;
}

/*
  Ember's Feedback:
  - Great job!
  - indexOf() is very old, it has been in Node since Node 0.10.0 so it was available to use,
    you were probably getting an error because you tried calling it on something that does not have that
    as a method. Also though, you wouldn't use indexOf() because that is a method where you search for
    something inside an array. You ask "did I find this thing inside the array?" but you don't know what
    "thing" you are looking for, right? You only know a location. You are given a list of locations, so you
    must go get whatever is at each location. You get something out of an array at a location, by using the -
    brackets. (assuming you "location" is a number, because arrays have number indexes)
    If you ever try to get something out of an array that doesn't exist, like myArray[89] from an array shorter
    than that, this will simply resolve to the value undefined.
*/
