function findOdd(A) {
  return A.reduce((a, c) => a ^ c, 0);
}

// will be a number that appears an odd amount of times
// key value pairs
// use .reduce (check mdn for help)


// ended up using example after time ran out (look more at it this weekend)

/*
  Ember's Feedback:
  - No worries, this is using a binary operator called XOR
  - XOR will flip the numerical representation of the numbers you give it, spitting out
    the resulting number from the XOR. So, for this problem that means even flips will result
    back to zero. Only the number with the odd number of flips will remain.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
*/
// Alternative Solution
function findOdd(A) {
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
}
