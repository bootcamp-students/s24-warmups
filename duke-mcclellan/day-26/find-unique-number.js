//parameters - array of numbers
//return - find the unique number
//example - findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//concerns- wrong method
//explain - I created an empty object for the number count and looped through the array index
//I let the number equal the array index and incremented the count to strictly equal one to find the unique number that's only counted one time.

function findUniq(arr) {
  // empty object to store counts of each number
  let counts = {};

  // Iterate through the array and count occurrences of numbers
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    counts[num] = (counts[num] || 0) + 1; // Increment count for a number
  }

  // loop through counts to find the unique number
  for (key in counts) {
    if (counts[key] === 1) {
      return parseFloat(key); // Return the unique number
    }
  }
}

/*
  Ember's Feedback:
  - Great job!
  - don't forget to use let!
  - I believe for this you could get away with just using Number() instead of parseFloat,
    which is more accurate to what you are doing in that you are casting it to number from string
*/

// Alternative Solution
function findUniq(arr) {
  let uniqueNum = {};

  // count the occurrences of each number in the array
  for (let current of arr) {
    uniqueNum[current] = (uniqueNum[current] || 0) + 1;
  }
  // find the unique number in the array
  for (let current of arr) {
    if (uniqueNum[current] === 1) {
      return current
    }
  }
}
