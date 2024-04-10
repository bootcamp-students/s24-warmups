/* Introduction
The first century spans from the year 1 up to and including the year 100, the second century -
from the year 101 up to and including the year 200, etc.

Params: Given a year, return the century it is in.
Return: integer (what century a year falls in)
Concerns: for the life of me I have never figured out centuries
Solution: century can be calculated by dividing the year by 100 and rounding up. Use the Math.ceil function.
*/

function century(year) {
  let century = Math.ceil(year / 100)
  return century
}

/* Ember's Feedback:
  Good job.
  A "concern" in precepts is more like
    - How could this lead to unexpected behavior and cause a bug?
      Usually this stems from side effects, modifying arrays in place, or returning NaN
    - How could this throw an error? (unhandled errors cause your program to crash)
      Usually this happens when you try to access a property that doesn't exist.
      e.g. calling .toLowerCase() on something that you cannot grantee will be a string at runtime.
    - Will this be so inefficient that it causes a bottleneck in my program?
      You don't have to worry about this too much but nesting three for loops to iterate over an unknown length array would do that.
    - Is what I am doing a security concern?
      This is usually handled for you by a library but the short answer is to never give user input to the eval() function.
*/
