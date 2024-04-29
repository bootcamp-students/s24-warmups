function breakChocolate(n, m) {
  if (n == 0 || m == 0) {
    return 0;
  }
  return n * m - 1;
}

// P create a function where it will return the number of breaks needed for the candy bar.
// R the data needed is taking n * m and subtracting 1 to get the number of breaks.
// an Example (5, 5), 24. or (1, 1), 0
// C i could mess up if i don't do the math correctly or if i don't understand the problem to my best ability.
// Explain I would take 5 * 5 which will give me 25. i would subtract 1 from 25 to get 24.
// Explain I would take 1 * 1 which will give me 1. i would subtract 1 from 1 to get 0.

/*
  Ember's Feedback:
  - Great job!!
  - I am putting some stuff below to show how it could be taken to the next level
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
// The above code comments are good for the bootcamp and for interviews especially, but you would leave those
// kinds of comments out of your code when you commit code on the job. Comments on the job primarily do two things:
// They explain by summary what a particularly confusing piece of code is doing and/ or
// They explain why a decision was made, ideally linking to the work ticket or to some other kind of documentation.
// e.g. "we are excluding this objective type here because FaceBook changed their API - {link to the documentation}"
