const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // check if gallons * mpg >= distance
  //return true if it is
  if (mpg * fuelLeft >= distanceToPump) {
    return true
  } else {
    return false
  }
};

/*
  Ember's Feedback:
  - Good job!
  - This is another example of the operator returning a boolean for you. >= will resolve to true or false,
  so if you write your logic correctly you can get away with just return that expression.
*/
// Alternate Solution
function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump
}
