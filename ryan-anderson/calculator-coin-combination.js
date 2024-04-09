function coinCombo (cents) {
  
    let quarters = (cents - (cents % 25)) / 25; //uses modulo to find highest number of quarters
    let afterQuarters = cents - (quarters * 25); //finds amount of cents remaining after removing quarters
    
    let dimes = (afterQuarters - (afterQuarters % 10)) / 10; //uses modulo to find highest number of dimes
    let afterDimes = afterQuarters - (dimes * 10); //finds amount of cents remaining after removing dimes
    
    let nickels = (afterDimes - (afterDimes % 5)) / 5; //uses modulo to find highest number of nickels
    let pennies = afterDimes - (nickels * 5); //finds amount of pennies remaining
    
    return [pennies, nickels, dimes, quarters]
    }