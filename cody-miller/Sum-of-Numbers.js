function getSum(a, b) {
  let sum = 0;
  if (a == b) {
    return b;
  
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      sum = i;
    }

  } else (a < b) {
    for (let i = a; i <= b; i++) {
      sum = i;
    }
  }
      return sum;
}
//Given two integers a and b, which can be positive or negative,
  //a and b can be infinity, so using a loop is necessary
//find the sum of all the integers between and including them and return it.
  //finding all numbers between other numbers means subtraction is involved when greater than
  //and addition is involved when less than.
//If the two numbers are = return a or b.
  //when the numbers are identical, return the value of one of the variables