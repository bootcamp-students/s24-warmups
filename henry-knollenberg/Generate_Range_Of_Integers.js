/* Goal: return the range of integers from min to max in increments of step.
  
  Create an array of integers. This is what will be returned.
  
  arrayPosition = 0
  array[arrayPosition] = min;
  
  for (let i = min + step; i <= max; i += step) {
    arrayPosition++;
    array[arrayPosition] = i;
  }
  return array[];
*/


function generateRange(min, max, step){
    let arrayPosition = 0;
    let arrayValues = [min];
    
    for (let i = min + step; i <= max; i += step) {
      arrayPosition++;
      arrayValues[arrayPosition] = i;
    }
    
    return arrayValues;
  }