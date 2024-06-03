function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let savings = 0
    let months = 0
    
    while((savings + startPriceOld) < startPriceNew) {
      startPriceOld -= (startPriceOld *(percentLossByMonth/100))
      startPriceNew -= (startPriceNew * (percentLossByMonth/100))
      months ++
      savings += savingperMonth
      months%2 === 1 ? percentLossByMonth += .5 : null 
      //this conditional ternary operator is used to keep track of the months? 
    }
    return [months, Math.round((startPriceOld + savings) -startPriceNew)]
  }
  
  
  // Parameters- buying a car. 
  //Return- my function should return how many months and how much money he can save until he can purchase his new car
  // example- (2000, 8000, 1000, 1.5), [6, 766]
  //Concerns- I don't know how to do basic math
  //Explain, im starting at 0 for the month and my savings amount because this is the beginning of the journey, 
  //use a while loop that will generate the my savings and the price of my old car until it is more than the new car that I want
  // inside the loop, months need to increment by one as time goes on. and i need to add my savings per month
  
  