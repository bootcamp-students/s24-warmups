/*
Params: Create a function that checks if a number n is divisible by two numbers x AND y.
All inputs are positive, non-zero numbers.
Return value: should return true or false
Example: n = 10; x = 5; y = 2; true (10 is divisible by both x and y)
Ideas: I think a good code could be something that checks if the product
of n/x and n/y is a decimal. If it's a decimal return false, if it isn't it's true
*/

function isDivisible(n, x, y) {
  let isXWholeNumber = Number.isInteger((n / x))
  let isYWholeNumber = Number.isInteger((n / y))
  return (isXWholeNumber && isYWholeNumber)
}

/*
  Ember's Feedback:
  Great job!
  Very good job with the descriptive variable names.
  Industry standard naming convention for JS is to use camelCase.
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
