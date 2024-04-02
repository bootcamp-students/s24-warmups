function arrayPlusArray(arr1, arr2) {
    //get the content of the arr1 and arr2 
    // iterate through the values in the array
    // add the values in the aray to a new variable
    // aadd the variable in each array
    let sum1 = arr1.reduce((add, cur) => {
      return add + cur;
    })
    let sum2 = arr2.reduce((add, cur) => {
      return add + cur;
    })
  return (sum1 + sum2);
  }
  
  //reduce method