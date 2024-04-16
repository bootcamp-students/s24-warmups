//precept
//parameters-array,indexes(array of numbers number [])
//return-an element from array parameter
//example-([[1,2],[3,4]]),[0,0])
//concerns-improper paramater data type
//explain-I want the function to return the element
//positive self talk
//translate

function getElement(array, indexes){
  let currentIndex = array
  for (const index of indexes) {
    currentIndex = currentIndex[index];
  }
  return currentIndex;
}
