/*
Instructions: Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each other and 
preserving the original order of elements.
Example: 
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
Params: given a string or an array
Return: an array
Solution: Combine filter and call! Using call handles the fact that the provided params can be
strings OR arrays. 

Given Code:
var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
}
*/

var uniqueInOrder=function(iterable){
  
    // used call, which is a function that calls this function with a given this value and 
    // arguments provided individually.
      let filteredNumbers = Array.prototype.filter.call(iterable, 
      (value, index, array) => value !== array[index - 1])
      console.log(filteredNumbers)
      return filteredNumbers
      }




/* This is the code I was working through:

var uniqueInOrder=function(iterable){
    // this shows the original value of iterable
    console.log('original value:', iterable)
    // this splits iterable into an array of individual letters
    let newArray = iterable.split('')
    // this shows the value of the split array
    console.log('newArray:', newArray)
    //this will filter the newArray to check if the current values is equal to the previous value 
    // and will keep elements unless it is the same as the value behind it
    // that keeps all of the elements unless its the same in a row
  let filteredArray = newArray.filter((value, index) =>
  value !== newArray[index - 1])
  console.log('filteredArray:', filteredArray)
  return filteredArray
  // this all works but doesn't handle the array of integers so we used call
  }

*/