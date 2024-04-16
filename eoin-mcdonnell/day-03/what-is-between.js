function between(a, b) {
  arr = []
  let i = a;
  while (b >= i) {
    arr.push(i)
    i++,
    console.log(arr)
  }
  return arr;

}

// array length is b-a + 1
// iterate for array length for numbers between a and b
// 4- 1 = 3 + 1
// 10, 15 would be 10 11 12 13 14 15  15-10=5 + 1 = 6
// a

/* Ember's Feedback:
  Spend a little more time cleaning up your pseudocode, that isn't very readable.
  Remove the console logs when you push up your submissions. You won't commit console logs at work.
  You forgot to include a variable declaration in for arr on line 3, make sure you are using let or const.
*/
