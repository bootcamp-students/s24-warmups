/* For loop to iterate through array.
   If the number is 0, return.
   Otherwise, add the number to the count. 
   */


   function houseNumbersSum(inputArray) {
    let count = 0;
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === 0) {
        return count;
      } else {
        count += inputArray[i];
      }
    }
    return count;
  }