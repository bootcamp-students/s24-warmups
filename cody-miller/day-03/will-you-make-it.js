const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let canIMakeIt = ((mpg * fuelLeft) >= distanceToPump) ? true : false;
  return canIMakeIt;
};
//seems like there should be an IF statement
//should return a boolean
//division should be used, possible?
//good ole' physics thought process of using the labels to get to an answer
  //(m/g)*g=m
