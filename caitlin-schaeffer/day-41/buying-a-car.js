/*
Instructions: A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old 
car until he can buy the secondhand one. He thinks he can save $1000 each month but the prices of his old car and of the new one 
decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our 
man finds it difficult to make all these calculations.
How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?
Example: 
nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
Params: Return: 
parameter (positive int or float, guaranteed) start_price_old (Old car price)
parameter (positive int or float, guaranteed) start_price_new (New car price)
parameter (positive int or float, guaranteed) saving_per_month 
parameter (positive float or int, guaranteed) percent_loss_by_month
nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
Concerns: This is a lot of math
Solution: 
Given code:
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    return
}

*/

/*
Things to remember while coding:
-Remove console logs on submission
-Every two months the depreciation rate will grow by .5%
-Return the number of months to buy the car, and the savings we have after purchasing
*/

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) {
  let months = 0;
  let savings = 0;

  // make a while loop
  while (savings + startPriceOld < startPriceNew) {
    //update car prices
    startPriceOld -= startPriceOld * (percentLossByMonth / 100);
    startPriceNew -= startPriceNew * (percentLossByMonth / 100);
    //same as +1, incrementing months
    months++;

    // Increase the savings we have per month
    savings += savingPerMonth;

    // Increase the percentage loss
    months % 2 === 1 ? (percentLossByMonth += 0.5) : null;
  }
  // Calculate the remaining money after buying the new car
  return [months, Math.round(startPriceOld + savings - startPriceNew)];
}

/*
    Ember's Feedback:
    - good work!
    - you could write line 53 as: months % 2 === 1 && (percentLossByMonth += 0.5)
    - understanding this kind of convoluted logic ask is good practice for on the job LOL
*/
