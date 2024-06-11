function nbMonths(
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) {
  // function takes an old car price, a new car price, savings per month, and percent loss by month, all numbers
  // needs to return a list of two numbers,
  //  the first being a count of months and the second being the money left over

  // to solve, loop over each "month" until we have enough money to buy the new car
  let totalSavings = 0;
  let months = 0;

  while (totalSavings + startPriceOld < startPriceNew) {
    months += 1; // increase month count

    if (months % 2 === 0) {
      // on even months, percent loss increases
      percentLossByMonth += 0.5;
    }

    let oldLoss = startPriceOld * (percentLossByMonth / 100); // calculate losses
    let newLoss = startPriceNew * (percentLossByMonth / 100);

    startPriceOld -= oldLoss;
    startPriceNew -= newLoss;

    totalSavings += savingPerMonth; // increase savings
  }

  // once we're out of the loop, we can calculate the remaining money after the car exchange
  let remainder = totalSavings + startPriceOld - startPriceNew;
  remainder = Math.round(remainder); // round to nearest int

  return [months, remainder];
}

/*
  Ember's Feedback:
  - Great work!
  - This is practice for deciphering business logic in work tickets :P
*/
