function breakChocolate(n, m) {
  return n * m < 1 ? 0 : n * m - 1;
}

// Takes the width and height of the chocolate bar

// Expecting an integer of the amount of breaks needed

// (5, 5) , 24

// I could use the wrong equation or get a type error

// Multiply n by m subtracted by 1. If not less than 1 Return that value


/*
  Ember's Feedback:
  - Good job!
  - Add in some pseudocode, even if it is just parameter data types, return value data type, example, and one line of logic.
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
