/* 
P - numbers, highestNumber, lowestNumber
R - highestNumber + " " + lowestNumber

  Split into an array and then...
  Iterate through the array to find the largest number.
  Iterate through the array to find the lowest number.
  Return highestNumber + " " + lowestNumber

*/

"use strict";

function highAndLow(numbers){
  let stringArray = numbers.split(" ");
  let numberArray = stringArray.map(Number);
  let highestNumber = numberArray.reduce((acc, curr) => acc > curr ? acc : curr);                                        
  let lowestNumber = numberArray.reduce((acc, curr) => acc < curr ? acc : curr);
  return highestNumber + " " + lowestNumber;
}