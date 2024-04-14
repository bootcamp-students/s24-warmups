function isDivisible(n, x, y) {
    if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
        return true;
    }
    return false;
}
// divide by number and get integer

/* Ember's Feedback:
    Good job!
    You could flesh out your pseudocode a little more. You could include a line explaining that if the result of the division is
    a decimal then that means it does not cleaning divide and therefore is not divisible.

    Logical and (&&) is an operator that already resolves to a boolean value, so if statement is unnecessary
*/
// Could be written as
function isDivisible(n, x, y) {
    return Number.isInteger(n / x) && Number.isInteger(n / y)
}

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