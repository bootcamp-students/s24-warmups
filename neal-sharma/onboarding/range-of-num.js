/* 
Implement the function generateRange
-function generateRange(min, max, step)
which takes 3 arguments (start, stop, step)
-start at start value, step increments until getting to the stop value.
and returns the range of integers from start to stop(inclusive) in increments of step.
-return the result in increments

function generateRange(min, max, step)
let result = [] create an empty array to store the result
let current value = start start at the start value
while current value <= stop loop until the current value is <= the max value
push result of current value loop to result array
current value += step increment current value by step value
return result array

*/

function generateRange(min, max, step){
    let result = []
    let currentValue = min;
    
    while (currentValue <= max) {
      result.push(currentValue);
      
      currentValue += step;
    }
    return result;
  }
  
  console.log(1, 10, 1);
  console.log(-10, 1, 1);
  console.log(1, 15, 20);