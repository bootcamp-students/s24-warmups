function findShort(s) {
  const length = s.split(" ").map(word => word.length);

  const smallestLength = Math.min(...length);

  return smallestLength
}

//use .min method
// use .length
// create const for length
// use (s).split
// create const for smallestLength
// return smallestLength
//
/*
  Ember's Feedback:
  - Good job!
  - Great use of some really complicated array methods :D
*/
// Alternative Solution
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;
