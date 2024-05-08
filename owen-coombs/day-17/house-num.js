function houseNumbersSum(inputArray) {
  let sum = 0 
    for (let i = 0; i < inputArray.length; i++){
      if(inputArray[i] !==0){
        sum += inputArray[i]
        
      } else{
        break;
      }
    }
  
  return sum
}

// LOOP OVER ARRAY IF THE NUMBER IS NOT ZERO
// ADD SUM TO VARIABLE
