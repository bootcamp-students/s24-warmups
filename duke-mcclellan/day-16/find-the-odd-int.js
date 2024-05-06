//integer that appears an odd number of times
//return an integer that appears an odd number of times
//I need to return an integer that appears an odd number of times.
//adding the functionality that it can't be divided by two. Possibly use .reduce? XOR?
//Key value pairs
//We can narrow down our search using the reduce function. the XOR (^) operator
//compares values and will remove pairs when working together with reduce.
//The 0 is the initial value that is set for A.

function findOdd(A) {
  return A.reduce((a, c) => a ^ c, 0);
}
/*
  Ember's Feedback:
  - Great job!
  - This is really advanced stuff, good job digging into it and trying it out.
  - In the pseudo code it would be good if you explained what XOR is doing.
  - For this problem, you are keeping the result of flipping the binary representation of the numbers,
    at each binary spot where both numbers have a 1 it is flipped to a zero. So basically, because you
    are flipping things an even number of times it will cancel itself out. The only thing that will remain
    is the number XOR'ed once.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
*/
// Alternative Solution
function findOdd(A) {
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
}
