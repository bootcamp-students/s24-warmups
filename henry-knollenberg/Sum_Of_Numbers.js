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