function isDivisible(n, x, y) {
    if ((n % x == 0) && (n % y == 0)) { //check if n cleanly divides both x and y
      return true
  } else {
    return false
  }
    }