var maxSequence = function(arr) {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = Math.max(arr[i], sum + arr[i]);
      sum2 = Math.max(sum, sum2);
    }
    
    console.log(sum2);
    return sum2;
  }
  
  
  
  
  // if else loop
  // create to vars sum, sum2
  // current value and ending value 
  // math max finds the largest number in array 