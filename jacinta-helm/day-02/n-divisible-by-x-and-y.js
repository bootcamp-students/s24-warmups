function isDivisible(n, x, y) {
  if (n % x == 0 & n % y == 0) {
    return true;
  }
  else {
    return false;
  }
}
//P- n= input, x and y checks
//R- checks to see if remainder is 0
//E- (12, 3, 4)true); (15, 3, 4), false);

/* Ember's Feedback:
  Great job!

  You left out the double && though so this is not actually "logical and (&&)",
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
  it is a "bitwise and (&)" :D
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
  Turns out that for this problem, it ends up behaving the same way. True in javascript is actually -
  represented by a 1 and false is represented by 0. In binary, that means the first place numbers are evaluated for the bitwise operation.
  I can explain that better later if you would like.

  It is best practice to use triple equals (strict equality), as it prevents bugs from weird JS type casting behavior.
  I can explain that in more detail if you like, just grab me on slack.

  Remember that for this problem, this you have nested some expressions together.
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

// Alternative solution
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}
