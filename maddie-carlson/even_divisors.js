function isDivisible(n, x, y) {
  // parameters are n and its divisors x and y
  // return value should be true if x/y can both divide n evenly, false otherwise
  // function can fail if any parameters are the wrong type
  
  // assume false by default
  let is_divisible = false;
  
  // check divisibility with Number.isInteger()
  if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
    is_divisible = true;
  }
  
  return is_divisible
}
