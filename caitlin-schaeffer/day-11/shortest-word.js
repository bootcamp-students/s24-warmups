/*
Instructions: Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
Params: given string
Return: length of shortest word in string 
Solution: 

Given Code: 
function findShort(s){
}
*/

function findShort(s){
    // identify string in function
  console.log({s})
    // split the string into individual words inside of an array
    let newArray = s.split(' ')
    // use built in sort function to take form minimum to max
   console.log(newArray)
   // The ES6 arrow function is a way to write a function inline
   // Wrote this function so that the sort function is not ordering by alphabet but by length of the word.
    newArray.sort((a, b) => a.length - b.length)
  console.log(newArray)
    // then return the length of the first word of the array! 
     return newArray[0].length
} 
