/* 50 miles away - distanceToPump
25 miles per gallon - mpg
2 gallons left - fuelLeft

mpg * fuelLeft <= distanceToPump */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  };
};

/* Ember's Feedback:
  Good job!
  Same thing here about your pseudocode being in plain English.
  Also, same thing here about just returning the boolean value from your expression instead of
  writing the return statements in an if else block
*/

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump
}
