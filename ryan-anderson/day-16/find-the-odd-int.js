function findOdd(A) {
  let times = [];
  let counter = 0;

  A.forEach(num => { // Adds odd occurrences of each number to counter, and subtracts even ones
    if (times.includes(num) === false) { // i.e. if 5 appears 3 times, this function will add 5 then subtract 5 then add 5
      times.push(num);                   // Counter will thus end up being equal to the number that appears an odd number of times
      counter += num;
    } else {
      let evenIndex = times.indexOf(num);
      times.splice(evenIndex, 1)
      counter -= num;
    }
  })
  return counter
}
/*
  Ember's Feedback:
  - Good job getting to a solution!
  - This took me a moment to get what you were going for but I see, if you have seen a number before then
    that is your cue to reduce the counter by that numbers value.
*/
// This is doing something similar to what you are doing here, just with bit manipulation
function findOdd(A) {
  return A.reduce((a, c) => a ^ c, 0);
}
// Alternative Solution
function findOdd(A) {
  return A.find(int => A.filter(el => el === int).length % 2 !== 0);
}
