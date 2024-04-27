function findOdd(A) {
//   console.log('A', A);
//   let count = 0; 
//   console.log('count', count);
  
//   let appearOdd = A.forEach(function(A, index, array) {
//     for (let i = 0; i < A.length; i++) {
//     if (A[i].length % 2 !== 0) 
//     A[index] = A % 2 != 0;
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
}


// const findOdd = (xs) => xs.reduce((a, b) => a ^  b);

//P create a function that appears an odd number of times. 
//R my function should return the integer that appears odd times. 
//E [1, 1, 2], (2)
//C there are no integers that appear an odd number of times. 
//E I can use the find array method that returns the first element in the array. as well as the filter method which will loop over the array to find the interger that occurs 
//an odd number of times. 

//   let appearOdd = A.sort().reduce((acc, cur) => acc + cur)
//   console.log('appearOdd', appearOdd);
  
  
  
  
//   for (let i = 0; i < A.length; i++) {
//     if (A[i].length % 2 !== 0) 
