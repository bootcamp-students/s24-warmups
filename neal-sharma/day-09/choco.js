/*precept
parameters- split chocolate bar given dimensions n*m into small squares.
return- return minimum number of breaks needed. if invalid return 0.
example- (1, 1) return 0
concerns- i think the wording is slightly confusing but im sure i can figure it out.
explain- check if dimensions are invalid, if so return 0. n * m -1
positive self talk- There is no try
translate- see comments
*/

function breakChocolate(n, m) {
    // Check if either dimension is invalid (less than or equal to 0)
    if (n <= 0 || m <= 0) {
        // If so, return 0 as no breaks are needed
        return 0;
    }
    // Calculate the total number of squares in the chocolate bar
    // and subtract 1 from it, as each break creates one additional square
    return n * m - 1;
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
