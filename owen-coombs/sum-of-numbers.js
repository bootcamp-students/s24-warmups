function getSum(a, b) {
  /* Find the smaller and larger number */
    
  /*  Calculate the sum of integers from min to max */
  let min = Math.min(a, b), /* Total count of numbers from min to max, inclusive */
        max = Math.max(a, b); /* # Using the formula for sum of an arithmetic series */
    return (max - min + 1) * (min + max) / 2;

  }
