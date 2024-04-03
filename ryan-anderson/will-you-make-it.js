const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // check if gallons * mpg >= distance
    //return true if it is
    if (mpg * fuelLeft >= distanceToPump) {
      return true 
    } else {
      return false
    }
  };