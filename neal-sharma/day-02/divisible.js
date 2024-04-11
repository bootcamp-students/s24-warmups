/* precept
parameters- check if a number is divisible by 2 numbers.
return- true or false
example- n = 3, x = 1, y = 3 => true (3 is divisible by 1 and 3)
concerns- math..
explain- if n is divisible by both x and y return true else return false
positive self talk- I can figure it out with patience
translate-
*/

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true
  } else {
    return false
  }
}
/*
  Ember's Feedback:
  Great job!
*/

// Alternative solution
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}
/*
  The above solution is some expressions nested together.
  n is an expression, it is telling JS to resolve the value stored in n to perform an operation with it
  n % x is an expression. You are telling JS to perform a "remainder" operation because you have used the -
    reminder operator. The left hand operand and the right hand operand are the values in the n and x variables.
    This operation resolves to be a number data type value (a positive integer to be specific)
  n % x === 0; that is an expression where you take the numerical output from the remainder operation and use it as the -
    left operand of a comparison operation. You are telling JS to compare the output to the number 0. If the reminder is 0, it will -
    return true. If the remainder of n and x is something other than zero, the comparison operation (===) will resolve to false.
  Finally, we arrive at the && (logical and) operator. This take that comparison operator resolved value and uses it as the left operand -
    for the logical and. Logical and says "if my left hand side is true (or can be coerced to be true) AND if my right side is true, -
    then I will resolve to true. Otherwise, I will resolve to false if either side is false".
  So we have made an inverted pyramid of expressions here.
  (n)     (x)               (n)     (y)
  (    %    )               (    %    )
  (        === 0)     (0 ===          )
                  &&
*/
