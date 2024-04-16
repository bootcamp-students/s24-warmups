const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let canIMakeIt = ((mpg * fuelLeft) >= distanceToPump) ? true : false;
  return canIMakeIt;
};
// seems like there should be an IF statement
// should return a boolean
// division should be used, possible?
// good ole' physics thought process of using the labels to get to an answer
// (m/g)*g=m

/* Ember's Feedback:
  Good job!
  You can simplify this function by just returning the value given by the >= operation.
    mpg * fuel just gives you a number.
    That number is used at the left side of the greater than or equal operation, using the operand >=
    That operand can only return a value of true or false, so feeding that to a ternary expression is unnecessary.
    Also, storing the result in a variable is unnecessary. You can just return the output from the function.
*/
// Alternative solution
function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return (mpg * fuelLeft) >= distanceToPump
}
