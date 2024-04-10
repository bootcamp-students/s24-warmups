function getSum(a, b) {
  /* Find the smaller and larger number */

  /*  Calculate the sum of integers from min to max */
  let min = Math.min(a, b), /* Total count of numbers from min to max, inclusive */
    max = Math.max(a, b); /* # Using the formula for sum of an arithmetic series */
  return (max - min + 1) * (min + max) / 2;

}

/*
  Ember's Feedback:
  - Great job!
  - This is a little advanced for this stage in the course so just
    make sure you study this so you can fully get what is going on syntactically.
  - Using Gauss sum is ok, this was kind of meant to help you get for loops under your belt.
  - I think you left in the python comment (#) from ChatGPT :P but good use of the tool to help you
    understand what this code is doing.
*/
