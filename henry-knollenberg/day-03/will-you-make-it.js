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