function coinCombo(cents) {
    // all coin values
    const coinValues = [25, 10, 5, 1];
  
    // array for the output, filled with zeros
    const coins = Array(coinValues.length).fill(0);
  
    let currentCents = cents;
    
    // iterate over the coins
    for(const coin of coinValues){
      // only do this if there are some coins left
      while(currentCents >= coin){
        // find out how many cents are left
        // and how many times the current coins fit into the current cents
        const remainder = currentCents % coin;
        const increaseBy = (currentCents - remainder) / coin;
        currentCents = currentCents % coin;
        const index = coinValues.length - 1 - coinValues.indexOf(coin);
        coins[index] += increaseBy;
      }
    } 
    
    return coins;
  }
  
  //how many 25c
  //how man 10 cents
  //how many 5
  //how man 1
  //Return them to an array