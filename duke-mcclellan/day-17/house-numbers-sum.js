//parameters- an array for the input
//return - an integer
//example - possibly using .reduce method for sum? 
//concern - choosing the wrong method, incorrect syntax or overcomplicating the problem. 
//I want to be able to determing the sum of the houses but looks like I need to remove pairs and zeros.

function houseNumbersSum(inputArray) {
    let sum = 0; // init sum to 0
    for (let num of inputArray){ 
      if (num === 0){  
        break; 
      }
      sum += num 
    }
    return sum; 
  }
  




