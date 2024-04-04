function isDivisible(n, x, y) {
    if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
      return true;
    } else {
      return false;
    }
  }