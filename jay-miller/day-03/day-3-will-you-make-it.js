const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO-Multiply mpg by fuelLeft to get distanceToPump
 return mpg * fuelLeft >= distanceToPump ? true : false;
};

/*
  Ember's Feedback:
  Good job
  The ternary is unnecessary, >= as an operator will return a boolean value already
*/
