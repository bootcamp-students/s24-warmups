//find a number that is odd so divisible by 2 with a remainder
// rather find the number of times the number is present in the array
//map
/*-
function findOdd(A) {
  //happy coding!
  let arr = []
  for (let odd in A){
    if (odd % 2 != 0){
         arr.push[odd]
    }
    console.log(odd)
  }
  return 0;
}

function findOdd(A) {
  //happy coding!
let acc = 0
A.forEach((i) => acc++)
  console.log(acc)
}-*/
function findOdd(A) {
  let count = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}
/*
  Ember's Feedback:
  - .sort modifies the array in place! Using it in this way causes bugs!
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
// e.g. if your code was like so this would be the result
let myArray = [1, 2, 3, 4, 1, 2, 3];
let oddOccurringNumber = findOdd(myArray);
console.log(myArray) // Array [1, 1, 2, 2, 3, 3, 4]
// Ahh! I didn't expect that, that is buggy behavior!

// Alternative Solution
function findOdd(A) {
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
}
