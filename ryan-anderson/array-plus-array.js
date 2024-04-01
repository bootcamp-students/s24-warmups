function arrayPlusArray(arr1, arr2) {
    let sum1 = 0; //initialize variable for sum of entries in array 1
    let sum2 = 0; //initialize variable for sum of entries in array 1
    for (i = 0; i < arr1.length; i++) { //add entries of array 1 together
      sum1 += arr1[i];
    }
    for (i = 0; i < arr2.length; i++) { //add entries of array 2 together
      sum2 += arr2[i];
    }
    return sum1 + sum2 //add the two array sums
  }