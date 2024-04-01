function generateRange(min, max, step) {
  let sum = [];
  if (max - min < step) {
    sum.push(min);
  } else {
    for (let i = min; i <= max; i += step) {
      sum.push(i);
    }
  }
  return sum;
}

// create an empty array
// if max - min is less than step
// return array with only min
// else
// create a loop that starts at min and pushes it to an array
// the loop will iterate i += step
// return the array
