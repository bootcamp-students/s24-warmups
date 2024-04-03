function arrayPlusArray(arr1, arr2) {
  //   Loop through each array adding each number to a sum variable.
  //   Add each sum variable to a final sum variable add each respective.
  let sum1 = arr1.reduce((acc, cur) => {
    return (acc += cur);
  });
  let sum2 = arr2.reduce((acc, cur) => {
    return (acc += cur);
  });
  //   Returm the final sum variable.
  return sum1 + sum2;
}

// P
// The parameters are two arrays full of numbers

// R
// Return value data type is a number

// E
// Example: [1, 2, 3] and [4, 7, 3] return 20

// C
//  I could return the wrong data type, I could return the incorrect sum

// E
// Loop through each array adding each number to a sum variable.
// Add each sum variable to a final sum variable add each respective.
// Returm the final sum variable.

// P
// This is tough, its okay not to get it on the first try

