/* 
  accumulator = 0
  greatestValue = 0
  
 
  iterate through array (index)
    for loop (i=0; i <= length of array - 1, i++)
      for loop (n=i; n <= length of array - 1, n++)
        accumulator = accumulator + [n]
        if accumulator > greatestValue, 
          then greatestValue = accumulator
      accumulator = 0
  if greatestValue < 0
    return 0
  else
    return greatestValue
        
      
*/

var maxSequence = function(arr){
    acc = 0
    greatestValue = 0
    
    for (let a of arr) {
      for (let i = 0; i <= arr.length - 1; i++) {
        for (let n = i; n <= arr.length - 1; n++) {
          acc = acc + arr[n]
          if (acc > greatestValue) {
            greatestValue = acc
          }
        }
        acc = 0
      }
    }
    if (greatestValue < 0) {
      return 0
    } else if (greatestValue >= 0) {
      return greatestValue
    } else {
      return 0
    }
  }