function nbMonths(
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) {
  let months = 0; // begins incrementing months
  let totalSavings = 0; // beings incrementing savings
  let totalMoney = startPriceOld; // tracks total money, starting with no savings

  while (totalMoney < startPriceNew) {
    // iterates until the man can afford to sell his old car to buy the new one

    months += 1; // checks if the man can afford the new car after each month

    if (months % 2 === 0) {
      percentLossByMonth += 0.5; // percent deprecation increases by 0.5% every 2 months
    }

    startPriceOld -= startPriceOld * (percentLossByMonth / 100); // car values deprecate each month
    startPriceNew -= startPriceNew * (percentLossByMonth / 100); // by current amount of percentage loss

    totalSavings += savingPerMonth; // adds 1000 dollars a month in savings
    totalMoney = startPriceOld + totalSavings; // combines savings and current price of old car
    // while loop condition checks if this sum is >= price of new car
  }

  return [months, Math.round(totalMoney - startPriceNew)]; // rounds remaining money to nearest dollar
}

// initial car prices deprecate by a percentage each month
// percent loss = 1.5 + 0.5 * 2-month blocks
// savings increases by 1000 per month
// find number of months until price of old car + savings >= price of new car

/*
  Ember's Feedback:
  - Good job!
  - I personally don't like overwriting parameter variables in the way you did here, especially because they are -
    still called "startingPrice" which is untrue once they are updated. That is subjective but just letting you know.
  - You pseudocode could be more abstract, you baked into your pseudocode values from the example. Practicing effective -
    written communication will be a recipe for success in your career.
*/

// Alternative Solution
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) {
  let monthsElapsed = 0;
  let depreciatedPriceOld = startPriceOld;
  let depreciatedPriceNew = startPriceNew;
  let depreciation = percentLossByMonth;
  let priceDifferenceBetweenCars = startPriceOld - startPriceNew;
  let savedMoney = 0;

  while (priceDifferenceBetweenCars < 0) {
    monthsElapsed++;
    if (monthsElapsed % 2 == 0) depreciation += 0.5;
    depreciatedPriceOld -= (depreciation / 100) * depreciatedPriceOld;
    depreciatedPriceNew -= (depreciation / 100) * depreciatedPriceNew;
    priceDifferenceBetweenCars = depreciatedPriceOld - depreciatedPriceNew;
    savedMoney += savingPerMonth;
    priceDifferenceBetweenCars += savedMoney;
  }

  return [monthsElapsed, Math.round(priceDifferenceBetweenCars)];
}
