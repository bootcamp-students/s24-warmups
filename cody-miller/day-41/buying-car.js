function nbMonths(
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) {
  let months = 0;
  let savings = 0;
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;
  let percentLoss = percentLossByMonth;

  while (oldCarPrice + savings < newCarPrice) {
    months++;

    // Increase depreciation rate every 2 months
    if (months % 2 === 0) {
      percentLoss += 0.5;
    }

    // Depreciate car prices
    oldCarPrice *= 1 - percentLoss / 100;
    newCarPrice *= 1 - percentLoss / 100;

    // Add savings for the month
    savings += savingPerMonth;
  }

  // Calculate leftover money after buying the new car
  let leftoverMoney = Math.round(oldCarPrice + savings - newCarPrice);

  return [months, leftoverMoney];
}
