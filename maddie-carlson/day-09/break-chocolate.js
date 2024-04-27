function breakChocolate(n, m) {
  //takes two numbers describing the width and length of a chocolate bar
  //returns how many times the chocolate to reduce it into 1x1 chunks
  //needs to return zero if anything weird is sent in

  if (!n || !m) { //falsey vars return 0
    return 0;
  }

  if (n == 1 && m == 1) { //single unit chocolate already
    return 0;
  }

  //should be able to solve the problem by multiplying n * m - 1 to get the breaks
  return (n * m) - 1;
}

/*
  Ember's Feedback:
  - Good job!
*/
// Params - n: number, m: number
// Return - number
// Example - (2, 2) => 3; (0, 4) => 0
// Concern - If n or m are NaN, will my code return NaN? If n or m are not number data type, what will happen? If n or m are zero, I need to return zero and not -1.
// Explain - If I am given a chocolate bar of n by m units in size, how many breaks for the chocolate bar to be broken into 1 unit square pieces?
//            Because I wouldn't break the last square, this looks like it is just the area of the bar minus the last square.

/* Some example cases to spot the pattern:

 2 x 1  2 x 2   2 x 3     2 x 4       2 x 5         2 x 6           2 x 7
   _     _ _    _ _ _    _ _ _ _    _ _ _ _ _    _ _ _ _ _ _    _ _ _ _ _ _ _
  |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|
  |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|

   1      3       5         7           9             11              13

Minimum breaks = ( rows x columns ) - 1
   */

// Pos Self Talk: :)
// Translate:
function breakChocolate(n, m) {
  // guard against input that isn't a number
  if (typeof n !== 'number' || typeof m !== 'number') return 0;
  // because NaN is of type 'number', specifically check for NaN
  // (technically NaN > 0 will evaluate to false but it is best to be explicit)
  if (Number.isNaN(n) || Number.isNaN(m)) return 0;
  // If n or m are zero, I need to return zero and not -1.
  if (n > 0 && m > 0) {
    // number of breaks is the area of the bar minus the last square
    return (n * m - 1);
  } else {
    return 0
  }
}
