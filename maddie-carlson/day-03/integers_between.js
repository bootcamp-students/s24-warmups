function between(a, b) {
  // parameters are a and b, and a should be less than b
  // function should return an array of all integers between a and b, including b

  // start with an input array
  let array = [];

  // increment through each integer, beginning with a and ending with b
  for (let i = a; i <= b; i++) {
    array.push(i);
  }

  // return the array
  return array
}

/*
  Ember's Feedback:
  Great job!
  This is pretty much the best way to do it
*/
