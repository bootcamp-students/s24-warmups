function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let currentCount = 0;
    for (element of A) {
      if (A[i] === element) {
        currentCount++;
      }
    }
    if (currentCount % 2 != 0) {
      currentCount = 0;
      return A[i];
    }
  }
}



// An array of integers

// Wants me to return 1 integer that appears an odd amount of times

// [7], 7

// I could return an integer that isn't odd. I could throw a type error

// Take the array and filter out things that appear an even amount of times, return the only integer
// left in the array

// I can do this!

/*
  Ember's Feedback:
  - Great job!
  - The nest loops are good, here is what that would more or less look like but with array methods instead.
*/
// Alternative Solution
function findOdd(A) {
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
}
