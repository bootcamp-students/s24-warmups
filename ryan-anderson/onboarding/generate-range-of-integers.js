function generateRange(min, max, step) {
  let s = min; //Creates a variable for adding the step value over each iteration

  let a = [min]; //Initializes the output array with the first value

  for (let i = 1; i < (((max - min) / step) + 1); i++) { //Through testing, I arrived at this formula to generate the correct amount of numbers in the array

    s += step; //Adds the step to the previous array entry to create the next one

    if (s <= max) { //Ensures that the array stops before exceeding the max value
      a[i] = s; //Adds the next value to the array, starting at the second position because min is already in the first position
    }
  }

  return a
}

/*
  Ember's Feedback:
  I spread this out so I could read the comments easier.
  This is good but a little more complicated than it needs to be.
  You can just use the step instead of i++, go for(let i = min; i < max; i += step)
*/
