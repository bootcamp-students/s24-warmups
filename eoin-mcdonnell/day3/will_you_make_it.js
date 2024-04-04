const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft >= distanceToPump){
      return true
    } else {
      return false
    }
      // TODO
    };
    
    //50 miles distance is distanceToPump
    //25 miles per gallon is mpg
    // 2 gallons is fuelLeft
    //if mpg *  fuelleft >= distance to punp true else false 