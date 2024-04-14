/*
Task: Your task is to split the chocolate bar of given dimension n x m into small squares.
Params: n & m (both integers/irreal measurements of chocolate)
Return: the number of breaks to make it 1
Example:  (breakChocolate(5, 5) , 24)
Concerns: 1,1 returns 0 because you can't break it down
Ideas: I think we could just divide by 1? or more so we need to minus 1 and return how many times that happens
Explain: Basically you can calculate area and subtract 1 but you need to establish an else statement for if they provide two '0's'

Given Function:
function breakChocolate(n,m) {
  return 0;
}
*/

// you're counting (returning) the *number of breaks*

function breakChocolate(n, m) {
  let answer = 0
  if (m > 0 && n > 0) {
    answer = ((n * m) - 1)
    console.log(answer)
    return answer
  } else (m <= 0 && n <= 0); {
    answer = 0
    console.log(answer)
    return answer
  }
}

function breakChocolate(n, m) {
  if (m > 0 && n > 0) {
     return (n * m) - 1

    // that wasn't an else if, so the parenthesis apparently just got totally ignored by JS
    // no clue how or why that didn't throw a syntax error, JS can be silly
    // You wouldn't want that logic though if it wasn't ignored, because you want to return zero -
    // if EITHER m or n are zero, not only if BOTH are zero. Since that is already the inverse
    // of your if statement, you are good.
  } else {
    return 0
  }
}


/*
  Ember's Feedback:
  - Good job!
  - remove console logs when you submit, you won't include console logs when you commit code at your job
  - you have have some errors so I refactored your code
*/

// Params - n: number, m: number
// Return - number
// Example - (2, 2) => 3; (0, 4) => 0
// Concern - If n or m are NaN, will my code return NaN?
//           If n or m are not number data type, what will happen?
//           If n or m are zero, I need to return zero and not -1.
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
