function coinCombo (cents) {
  let coinArray = [];
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  
  if (cents >= 25){
  quarters = cents / 25;
coinArray.unshift(Math.floor(quarters));
cents = cents - Math.floor(quarters) * 25;
}
  else{
    coinArray.unshift(0);
  }
  
  if (cents >= 10){
    dimes = cents / 10
coinArray.unshift(Math.floor(dimes));
cents = cents - Math.floor(dimes) * 10
    }
  else{
    coinArray.unshift(0)
  }
  
  if (cents >= 5){
    nickels = cents / 5
coinArray.unshift(Math.floor(nickels));
cents = cents - Math.floor(nickels) * 5
}
  else{
    coinArray.unshift(0)
  }
  
  if (cents >= 1){
    pennies = cents / 1
coinArray.unshift(Math.floor(pennies));
cents = cents - Math.floor(pennies) * 1
  }
 
  else{
    coinArray.unshift(0)
  }
  
  return coinArray
}

/*

i have an input of cents and an output of an array. array should be
["pennies", "nickels", "dimes", "quarters"]

if given 41 cents, i need to divide it by 25 which will = 1 and a remainder
move array.unshift to move quarters to front (so that it moves to the back)
then take remainder of 16 and repeat for dimes, nickels and pennies.

cents / 25 = quarters.
coinArray.unshift(Math.floor(quarters));
cents = cents - quarters * 25

*/
