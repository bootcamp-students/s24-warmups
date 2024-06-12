function findUniq(arr) {
  const count = {};
  for (let ele of arr) {
    if (count[ele]) {
      count[ele] += 1
    } else {
      count[ele] = 1
    }
  }

  for (let key in count) {
    if (count[key] === 1) {
      return parseFloat(key)
    }
  }

}
/*
im given an array, i need to return the one unique number in the array.
i need a loop to go over each index
maybe i could set up 2 variables and count each time a number appears
and assign it to the variables.
the one with least is the one that i need to return

i have an object with each key representing the array number
and a value of how many times they appear
loop over each object index
if the value === 1 return the key
i kept ending up with key being the number in quotes
had to find parseInt, which eventually led me to parseFloat

*/

/*
  Ember's Feedback:
  - Great job :D
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
