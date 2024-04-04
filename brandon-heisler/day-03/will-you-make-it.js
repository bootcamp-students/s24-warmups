const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let n = mpg * fuelLeft;
  if (n < distanceToPump){ 
    return false;
  }
  else{
    return true;
  }
};
