function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
    let months = 0 // begins incrementing months
    let totalSavings = 0 // beings incrementing savings
    let totalMoney = startPriceOld // tracks total money, starting with no savings
    
    while (totalMoney < startPriceNew) {  // iterates until the man can afford to sell his old car to buy the new one
      
      months += 1   // checks if the man can afford the new car after each month
      
      if (months % 2 === 0) {
        percentLossByMonth += 0.5  // percent deprecation increases by 0.5% every 2 months
      }
      
      startPriceOld -= (startPriceOld * (percentLossByMonth / 100)) // car values deprecate each month
      startPriceNew -= (startPriceNew * (percentLossByMonth / 100)) // by current amount of percentage loss
      
      totalSavings += savingperMonth  // adds 1000 dollars a month in savings
      totalMoney = startPriceOld + totalSavings // combines savings and current price of old car
                                                // while loop condition checks if this sum is >= price of new car
    }
    
    return [months, Math.round(totalMoney - startPriceNew)] // rounds remaining money to nearest dollar
    
  }
  
  // initial car prices deprecate by a percentage each month
    // percent loss = 1.5 + 0.5 * 2-month blocks
  // savings increases by 1000 per month
  // find number of months until price of old car + savings >- price of new car