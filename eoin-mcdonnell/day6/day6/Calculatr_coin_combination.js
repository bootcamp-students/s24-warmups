var coinCombo = function(cents) {
    let pennies = 0, nickels = 0, dimes = 0, quarters = 0;
  
    while (cents >= 25) {
      cents -= 25;
      quarters += 1;
    };
    while (cents >= 10) {
      cents -= 10;
      dimes += 1;
    }
    while (cents >= 5) {
      cents -= 5;
      nickels += 1
    }
    while (cents > 0) {
      cents -= 1;
      pennies += 1;
    }
    return [pennies, nickels, dimes, quarters]
  }
  
  //how many 25c
  //how man 10 cents
  //how many 5
  //how man 1
  //Return them to an array