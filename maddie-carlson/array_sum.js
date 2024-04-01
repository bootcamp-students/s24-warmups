function arrayPlusArray(arr1, arr2) {
  // arr1 and arr2 are the parameters, both should be arrays
  // function should return a number
  // ex: ([1, 2, 3], [4, 5, 6]), returns 21
  // function can fail if inputs are the wrong type
  
  let sum = 0;
  
  // add each array element sequentially
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i]
  }
  
  // return sum
  return sum;
}
