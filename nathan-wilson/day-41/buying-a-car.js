function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;
  let perentLoss = percentLossByMonth;
  let differenceInPrice = newCarPrice - oldCarPrice;
  let deprecationPercentage = 1 - percentLossByMonth / 100;
  let savings = 0;
  let monthsPast = 1;

  if (oldCarPrice >= newCarPrice) {
    return [0, oldCarPrice - newCarPrice];
  }

  while (oldCarPrice + savings < newCarPrice) {
    if (monthsPast % 2 === 0) {
      deprecationPercentage -= 0.005;
    }
    console.log(deprecationPercentage);
    savings += savingperMonth;
    oldCarPrice *= deprecationPercentage;
    newCarPrice *= deprecationPercentage;
    differenceInPrice = newCarPrice - oldCarPrice;
    differenceInPrice -= savings;
    monthsPast++;
  }

  return [monthsPast - 1, Math.round(Math.abs(differenceInPrice))];
}

// 4 integers

// an array of 2 integers one representing the amount of months it will take him to save
// up for his new car, and how much he will have left over

// (2000, 8000, 1000, 1.5), [6, 766]

// I could return the wrong type or do the math wrong

// if the startpricenew is less than startpriceold then ill need to find the difference and store that in
// a variable. ill subtract that variable by the savingpermonth each month. then i will
// multiply each car price by .985. After 2 months that percent will be itself - 0.005.
// Once the oldcarprice + savings are greater than or equal to new car price then return the months
// it took and the amount left over.

// theres a lot of steps but if i console log a lot ill get it done!
