/*
Instructions: In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.
Params: given string of numbers
Return: string of the highest and lowest numbers
Example: highAndLow("1 2 3 4 5");  // return "5 1"
Solution:

Given Code: 
function highAndLow(numbers){
  // ...
}
*/

function highAndLow(numbers){
    "use strict"
    let order = numbers.split(' ').map(Number)
    console.log(order)
    
    let orderHigh = order.reduce((max, cur) => max > cur ? max : cur)
  
    console.log(orderHigh)
    
    let orderLow = order.reduce((min, cur) => min < cur ? min : cur)
   
    console.log(orderLow)
    
    let fullOrder = orderLow + orderHigh
    return fullOrder 
  }

