/*
Instructions: Make the double() function return a new array with each value twice as large as the corresponding value in the 
passed in array. Your solution must use the map() function of the built-in javascript Array object. 
Example: 
var test1 = [1,2,3,4,5];
var test2 = [71,-548,12.3,31415];

Test.assertSimilar(double(test1), [2,4,6,8,10]);
Test.assertSimilar(double(test2), [142,-1096,24.6,62830]);
Params: given array
Return: array (doubled values of given array)
Solution: 

Given Code:
function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
}
*/

function double(array) {
    const doubleNumbers = array.map(num => num * 2)
    return doubleNumbers
}