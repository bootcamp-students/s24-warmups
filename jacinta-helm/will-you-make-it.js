const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  let myDistance = (mpg * fuelLeft);
//calculates my distance
  
  if (myDistance >= distanceToPump) {
    return true;
  }  else if (myDistance <= distanceToPump){
    return false
      }
    
  };


//P- create a function to see if it's true or false. 
//R -fuelLeft *  mpg to distanceToPump. fuelleft * mpg is our distance. 
//E -distance of 50 miles, 25mpg, and 2 gallons of fuel left. 
// 2 * 25 = 50 miles true 
//distance of 100 miles, 5ompg, and 1 gallon of fuel left.
// 1 * 50 = 50, false, will not make it 100 miles away 
// Concerns-
