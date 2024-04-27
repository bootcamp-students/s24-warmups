function findOdd(A) {
  //takes an array of integers where exactly one number occurs an odd number of times
  //returns the number that occurs an odd number of times
  
  //to solve, first start by sorting the array (to ensure the same numbers are adjacent)
  A.sort()
  
  //keep a counter that counts up for each occurrence of a given element and a tracker matching prior elements
  let count = 0
  let tracker = A[0]
    
  //then loop over the array, counting up for each integer that matches the prior integer,
  //checking the counter if a new (non-matching element occurs)
  for (let i = 0; i < A.length; i++) {
    if (tracker === A[i]) {
      count += 1
    } else {
      //otherwise, reset the counter and keep going
      if (count % 2 === 1) { //if the counter is odd, return the prior element as the number we're looking for
        return tracker
      } else {
        tracker = A[i]
        count = 1
      }
    }
  }
  
  //once we're out of the loop, check it again
  if (count % 2 === 1) { //if the counter is odd, return the prior element as the number we're looking for
    return tracker
  }
  
  //if for some reason we didn't find a number, just return 0
  return 0;
}
