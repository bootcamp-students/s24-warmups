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

//P an array of numbers
//R my function should return the integer that appears odd times.
//E [1, 1, 2], (2)
//C there are no integers that appear an odd number of times. (.find returns undefined if it doesn't find it)
//E I can use the find array method that returns the first element in the array that satisfies a test.
//  As well will use the filter method which will loop over the array to find the integer we want to check.
//  I will check the length of the array returned by filter to determine if the current integer occurs an odd number of times.

//   let appearOdd = A.sort().reduce((acc, cur) => acc + cur)
//   console.log('appearOdd', appearOdd);




//   for (let i = 0; i < A.length; i++) {
//     if (A[i].length % 2 !== 0)

/*
  Ember's Feedback:
  - Great job!
*/
// Alternative Solution
function findOdd(A) {
  "use strict"

  const counter = {};

  A.forEach(ele => {
    if (counter[ele]) {
      counter[ele] += 1;
    } else {
      counter[ele] = 1
    }
  })

  for (let x in counter) {
    if (counter[x] % 2 !== 0) return Number(x)
  };

}
