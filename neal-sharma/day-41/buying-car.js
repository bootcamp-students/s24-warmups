// parameters - man can save 1000 per month, his car is worth 2000 but the worth of the car
// decreases 1.5% per month and every 2 months the percentage it decreases adds .5% to the total
// decrease. new car is worth 8000 and has the same decrease as the old car.
// return - how many months it took and the money left over after buying the car.

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) {
  let months = 0;
  let savings = 0;
  let plm = percentLossByMonth;

  while (startPriceOld + savings < startPriceNew) {
    months++;

    if (months % 2 === 0) {
      plm = plm + 0.5;
    }

    startPriceOld = startPriceOld * (1 - plm / 100);
    startPriceNew = startPriceNew * (1 - plm / 100);
    savings = savings + savingPerMonth;
  }

  let left = savings + startPriceOld - startPriceNew;
  return [months, Math.round(left)];
}

/*
  Ember's Feedback:
  - Good work!
  - Nothing to say about this one, the hard part was understanding the prompt. Which is good practice for on the job lol
*/
