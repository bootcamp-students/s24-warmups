function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// n is the number to test to see if it is divisible by x and y. All are integers
// return value is a boolean
// n3 x3 y4 is false because 3 is not divisible by 4
// I may return the wrong value. I may have a logic issue.
// Take 9 and test if it divided by x oe y has a remainder. If it does return false. If not return true.
// I can do this! Its okay if I don't get it first try

/*
  Ember's Feedback:
  Great job!
  Your solution is some expressions nested together.
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
