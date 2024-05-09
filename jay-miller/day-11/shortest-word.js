function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}
//use .split
//Find shortest word with .length
//Use currentWord to see if it's greater than shortestWord
//Then return shortestWord
//used .map on .split
/*
    Ember's Feedback:
    - Good job!
    - Great use of the spread operator to unpack the array you return from the .map
*/
// Alternative Solution
const findShort = (s) => s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop()
    .length;
