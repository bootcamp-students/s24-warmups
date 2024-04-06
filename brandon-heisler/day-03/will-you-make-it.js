const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let n = mpg * fuelLeft;
  if (n < distanceToPump){
    return false;
  }
  else{
    return true;
  }
};

/*
i need to find out my total miles to travel and compare it to miles in tank. if miles left in tank is
less than miles to travel, return false, else return true
*/

/* Ember's Feedback:
  Good job!
  Instead of "n", name your variables something more meaningful. -
  e.g. "distanceCanTravel"
  That way, you can write if(distanceCanTravel < distanceToPump) ...
*/
// Alternative solution
function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump
}
