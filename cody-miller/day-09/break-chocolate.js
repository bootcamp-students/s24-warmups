function breakChocolate(n,m) {
  let breaks = 0;
  if ( n * m > 1) {
    breaks = n * m - 1
  }
  return breaks;
}

/*
n * m = some number
ex. 2 * 3 = 6
One less square is the numbers of minimum breaks.

n * m -1 = some number
Condition needs to be met to prevent numbers
  from going negative.
*/
