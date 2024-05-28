//Parameters - number
//Return - number 
//Example - maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
//Concern - wrong method or over complicating it
//Explain - I want to be able to iterate over the array logging each value
//and return a single value which should be 1

var maxSequence = function(arr){
    let maxSum = 0;
    
    for(let i = 0; i < arr.length; i++){
        let currentSum = 0;
      
      for(let j = i; j < arr.length; j++){
        currentSum += arr[j];
        
        if (currentSum > maxSum) {
          maxSum = currentSum;
        }
      }
    }
      return maxSum
  }