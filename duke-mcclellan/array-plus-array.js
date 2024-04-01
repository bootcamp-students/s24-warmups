function arrayPlusArray(arr1, arr2) {
  let bothArray = arr1.concat(arr2)
  let returnValue = 0
  for (let value of bothArray){
   returnValue += value 
  }
  return returnValue;
 }
