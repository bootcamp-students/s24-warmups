const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};

// P distance to the pump in miles, miles per gallon, and amount of fuel gallons left. All of the parameters are whole integers
// R Expecting a boolean
// E 50 miles, 25 per gallon, 2 gallons left, equals true
// C I could mess up the parameter types. I could have an issue with the arithmetic
// E Take the distance to pump divided by the mpg and if this is equal to or less
// than the gallons left return true
// P I can do this first try I think!

/*
  Ember's Feedback:
  Great job!
  This is another example of some nested expressions that will ultimately resolve to a boolean value.
*/
