/* 
if n divided by x is an integer and n divided by y is an integer then return true
else return false
*/

function isDivisible(n, x, y) {
    if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
      return true;
    } else {
      return false;
    }
  }