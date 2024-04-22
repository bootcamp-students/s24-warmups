function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let currentCount = 0;
    for (element of A) {
      if (A[i] === element) {
        currentCount++;
      }
    }
    if (currentCount % 2 != 0) {
      console.log('current ', A[i]);
      currentCount = 0;
      return A[i];
    }
  }
}

// An array of integers

// Wants me to return 1 integer that appears an odd amount of times

// [7], 7

// I could return an integer that isnt odd, i could throw a type error

// Take the array and filter out things that appear an even amount of times, return the only integer
// left in the array

// I can do this!
