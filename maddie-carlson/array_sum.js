function arrayPlusArray(arr1, arr2) {
  // arr1 and arr2 are the parameters, both should be arrays
  // function should return a number
  // ex: ([1, 2, 3], [4, 5, 6]), returns 21
  // function can fail if one array is unexpectedly larger than the other
  
  
  let sum = 0
  let larger_array
  let smaller_array
  
  if (arr1.length < arr2.length) {
    larger_array = arr2
    smaller_array = arr1
  } else {
    larger_array = arr1
    smaller_array = arr2
  }
  
  // to solve, sum each array element individually in a loop
  // each loop, double check to avoid an out of bounds error
  
  for (let i = 0; i < larger_array.length; i++) { 
    if (i < smaller_array.length) {
      sum = sum + arr1[i] + arr2[i]
    }
  }
  
  return sum;
}
