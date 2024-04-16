function getSum(a, b) {
  let sum = 0;
  if (a === b) {  //if a equals b, then "sum" equals a, return sum
    sum = a;
  } else if (a > b) {  //if a greater than b, add each integer (a, a-1, a-2...b), then return sum
    for (let i = a; i >= b; i--) {
      sum += i;
    }
  } else {  //if b greater than a, add each integer (b, b-1, b-2...a), then return sum
    for (let i = b; i >= a; i--) {
      sum += i;
    }
  }
  return sum;
}

/* Ember's Feedback:
  Great job!
*/
// Alternative solution
function getSum(a, b) {
  if (a === b) {
    return a
  }
  let start, stop;
  if (a < b) {
    start = a;
    stop = b;
  } else {
    start = b;
    stop = a;
  }
  let sum = 0;
  for (let counter = start; counter <= stop; counter++) {
    sum += counter;
  }
  return sum;
}
