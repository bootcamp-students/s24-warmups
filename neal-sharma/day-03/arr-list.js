/* Precept
parameters-complete the function with two integers and return an array of all integers
between the input parameters including them.
return- an array of numbers starting with a and ending with b
example- 1-4 = [1,2,3,4]
concept- use an array list and a counter to list numbers between two numbers including the numbers
themselves. 
explain- list numbers in an array from a-b using a counter
positive self talk- I can figure this out. find the math that can solve this. 
translate- a++ until a=b
*/


function between(a, b) {
    let numbers = []; // array to list numbers
    for (i = a; i <= b; i++) { // i = a, i <= b, as long as i is less than b count i plus 1 
      // until = to b, loop ends when i = b
    numbers.push(i); } // push numbers to list
    return numbers; // return numbers
  }