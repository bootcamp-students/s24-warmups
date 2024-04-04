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
