//we need to test a subset of the arr 
//find the high

const maxSequence = arr => {
    let maxSoFar = 0
    let maxEndingHere = 0
  
    for (let i = 0; i < arr.length; i++) {
      maxEndingHere += arr[i]
  
      if (maxEndingHere < 0) maxEndingHere = 0
  
      if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere
    }
  
    return maxSoFar
  }