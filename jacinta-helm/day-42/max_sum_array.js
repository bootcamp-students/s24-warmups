var maxSequence = function(arr){
  console.log(arr)

  acc = 0 
  bigValue = 0
  
  for (let a of arr) {
    for (let i = 0; i <= arr.length -1; i++){
      for (let n = i; n <= arr.length -1; n++) {
        acc = acc + arr[n]
        if (acc > bigValue) {
          bigValue = acc 
      }
    }
    acc = 0 
  }
}
if (bigValue  < 0) {
  return 0
} else if (bigValue >= 0){
  return bigValue 
} else {
  return 0
}
}

/*
  Ember's Feedback:
  - go see the notes and refactor I gave to Henry
*/

// Parameters- number array 
//Return- My function should return a number 
// Example- -2, 1, -3, 4, -1, 2, 1, -5, 4]), 6
// Concerns- undefined sum, only negative numbers in array 
//Explain- if number is a negative, then it will have a zero. if the number is positive, then I will add it to the array
// what could be the highest sum value.
//Positive self talk- This is easy peasy 
//


// accumlator = 0 
// bigValue = 0
// iterate through array (index)
// for loop (i=0; i <= length of array -1, n++)
//   for loop (n=i, n <=length of array -1 , n++)
//     accumulator = accumaltor +[n]
// if accum

