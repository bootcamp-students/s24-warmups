/*
Params: (the guven arrat wukk akways be longer than 0)
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