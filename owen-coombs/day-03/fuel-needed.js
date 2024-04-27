const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const fuelNeeded = distanceToPump / mpg;
  return fuelNeeded <= fuelLeft;
};

// Create a const and divide distanceToPump/mpg
// retrun distancetopump if fuelleft is greater then distance to pump = true

/*
  Ember's Feedback:
  Great job!
*/
