const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // let distanceToPump = 50;
  // let mpg = 25;
  // let fuelLeft = 2;
  // Receiving number and will return boolean
  // miles per gallon multiplied by how much fuel is left
  // if how far is >= how far you need to go you will make it

  return (distanceToPump <= mpg * fuelLeft ? true : false)
};

/*
  Ember's Feedback:
  Great job with the pseudocode!
  Here as well, <= is an operator that resolves to a boolean value so the ternary expression is unneeded.
*/
// Alternative solution
function canMakeIt(distanceToPump, mpg, fuelLeft) {
  return distanceToPump <= mpg * fuelLeft
}
