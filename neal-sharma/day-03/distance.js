/* Precept
parameters- Can you make it 50 miles with 2 gallons of gas and 25mpg car
return value- true or false. true if you can false if you cant
example- 100 miles, 25mpg, 1 gallon left return false
concerns- seems like math.
explain- if your fuel * mpg of car is greater than or equal to distance to pump return true
otherwise return false.
positive self talk- I can figure this out. Make sure your syntax is correct. seems to be my
main issue.
translate- if else loop.

*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

/*
  Ember's Feedback:
  Great job!
  This is another example of an operator returning a boolean for you.
*/
// Alternative solution
function zeroFuel(distanceToPump, mpg, fuelLeft) {
   return fuelLeft * mpg >= distanceToPump
};
