/*
Instructions: Add up the numbers in an integer array, stopping at the number 0. 
Example: Test.assertEquals( houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]),11)
Params: given integer array
Return: single value
Solution: an if else statement

Given Code: 
function houseNumbersSum(inputArray) {
  //coding and coding..
  
  
}
*/

// the best way to stop a reduce is with a boolean 
/* 
Have to set the initial value to 0 so that it really takes the current value as the first integer to add
Acc = running total
Reduce takes two arguments: the function definition and the initial value
*/

function houseNumbersSum(inputArray) {
    let stopAdding = false 
    let sum = inputArray.reduce(
      (acc, cur) => {
//         console.log(stopAdding)
        if(stopAdding) return acc;
      
        if (cur != 0) {
//           console.log('acc + cur:', acc + cur)
            return acc + cur
        } else if (cur === 0) {
//           console.log('cur:', cur)
           stopAdding = true
//            console.log('acc', acc)
           return acc
        }
        
       }, 0
    )
    
    
    
    
       console.log('sum: ', sum)
        return sum
  }

/* Code work out:

let sum = numbers.reduce((acc, cur) => {
    return acc + cur
   })
   console.log('sum: ', sum)

function houseNumbersSum(inputArray) {
    let output = {
        if (number != 0) {
        number + nextNumber
    } else if (number === 0) {
        break 
    }
    }
    
    return output 
  }

  */ 