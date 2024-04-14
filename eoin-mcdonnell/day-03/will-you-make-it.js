const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true
  } else {
    return false
  }
};

// 50 miles distance is distanceToPump
// 25 miles per gallon is mpg
// 2 gallons is fuelLeft
// if mpg *  fuel left >= distance to pump true else false

/* Ember's Feedback:
  The if statement is unneeded, you could just return the value resolved by the >= operator as that is a boolean.
  Include actually logic in your pseudocode. Write it out in plain English so I can see that you know how to communicate
  these concepts in a way that demonstrates you will do well in a technical interview.
*/
// Alternative solution
function willYouMakeIt(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump
}
