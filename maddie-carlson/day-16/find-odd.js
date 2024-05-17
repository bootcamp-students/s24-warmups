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
/*
  Ember's Feedback:
  - Great work! Wonderful pseudocode and solution :D
  - So .sort will modify the array it is called on "in place", which means whatever you pass to this function as an argument
    would then get modified outside of this function. That is bad practice. Demonstration for that is below.
    To get around that you can use .toSorted() if it is available, or you can simply make a copy of the input array let B = [...A].sort()
*/
// e.g. if your code was like so this would be the result
let myArray = [1, 2, 3, 4, 1, 2, 3];
let oddOccurringNumber = findOdd(myArray);
console.log(myArray) // Array [1, 1, 2, 2, 3, 3, 4]
// Ahh! I didn't expect that, that is buggy behavior!

// Alternative Solution
function findOdd(A) {
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
}
