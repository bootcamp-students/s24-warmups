function generateRange(min, max, step){
 const numArray=[] 
  for (let n = min; n <= max; n += step){
//     n += min; this was the stupid problem i had -_-
     numArray.push(n);
  }
  return(numArray);
 }
 
/*
i need to generate a range of numbers incrementing by a step.
ill use a for loop for the incrementing and push each result to an array.

*/
