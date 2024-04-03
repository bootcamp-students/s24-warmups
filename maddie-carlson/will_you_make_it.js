const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // parameters are distance, mpg, and fuel, all of which should be numbers
  // return value should be true or false, whether or not the car can cover the distance with the given fuel
  // function can fail if inputs are the wrong type or have the wrong units
  
  // assume false by default
  let can_make_it = false;
  
  // function to solve is distanceToPump <= mpg * fuelLeft (aka, miles < (miles/gallon) * gallons)
  if (distanceToPump <= mpg * fuelLeft) {
    can_make_it = true;
  }
  
  return can_make_it
};
