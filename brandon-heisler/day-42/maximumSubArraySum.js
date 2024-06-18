var maxSequence = function(arr){
    if (arr.length === 0) {
      return 0
    }
    let global = 0
    let current = 0
    
    for (let i = 0; i < arr.length; i++){
      current = Math.max(arr[i], current + arr[i])
        if (current > global){
          global = current
        }
    } 
    return global
  }
  // today i learned about kadanes algorithm. which literally solves this problem
  // we need to iterate through the array while keeping track of the max sum and 
  // updating it as we go. 