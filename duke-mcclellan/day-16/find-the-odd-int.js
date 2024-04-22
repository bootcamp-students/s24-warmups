//integer that apears an odd number of times
//return an integer that appears an odd number of times
//I need to return an integer that appears an odd number of times.
//adding the functionality that it can't be divided by two. Possibly use .reduce? XOR?
//Key value pairs
//We can narrow down our search using the reduce function. the XOR (^) function
//compares values and will remove pairs when working together with reduce.  
//The 0 is the initial value that is set for A. 

function findOdd(A) {
  
  return A.reduce((a,c)=> a ^ c, 0);
}
