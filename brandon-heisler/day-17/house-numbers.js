function houseNumbersSum(inputArray) {
  let sum = 0
  for (let i = 0; i <  inputArray.length; i++){
    if (inputArray[i] !== 0){
      sum += inputArray[i]
    }else{
      break;
    }
  }
  return sum
}
/*
im given an array of numbers. i need to add all the numbers up to the first zero in the array
im going to loop over the array. if the index isnt zero
then add the number to a sum variable.
*/
