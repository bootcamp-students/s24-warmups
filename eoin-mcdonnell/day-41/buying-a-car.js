//parameter (positive int or float, guaranteed) start_price_old (Old car price)
//parameter (positive int or float, guaranteed) start_price_new (New car price)
//parameter (positive int or float, guaranteed) saving_per_month 
//parameter (positive float or int, guaranteed) percent_loss_by_month

//nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    if (startPriceOld>=startPriceNew) return [0,startPriceOld-startPriceNew] 
    var count=0;
    var money=startPriceOld;
    for (let i=1;money<=startPriceNew;i++){
    if (i%2==0){percentLossByMonth+=0.5}
      count++;
      startPriceOld = startPriceOld - (startPriceOld*(percentLossByMonth/100));
          startPriceNew = startPriceNew - ((startPriceNew*percentLossByMonth)/100);
          money = startPriceOld + (savingperMonth*count);
      };
     return [count,Math.round(money-startPriceNew)];
    
  }