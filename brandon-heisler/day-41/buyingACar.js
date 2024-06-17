function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let resultArray = [];
    let month = 0;
    let savings = 0;
    let oldCarWorth = startPriceOld;
    let newCarWorth = startPriceNew;
    let plbm = 1 - (percentLossByMonth / 100);

    if (oldCarWorth >= newCarWorth) {
        resultArray.push(month, oldCarWorth - newCarWorth);
        return resultArray;
    } else {
        while (oldCarWorth + savings < newCarWorth) {
            month++;
            if (month % 2 === 0) {
                plbm -= 0.005;
            }
            oldCarWorth *= plbm;
            newCarWorth *= plbm;
            savings += savingperMonth;
        }
    }

    resultArray.push(month, Math.round(oldCarWorth + savings - newCarWorth));
    return resultArray;
}