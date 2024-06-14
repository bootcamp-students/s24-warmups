/* Parameters
    - oldcar - worth 2000
    - newcar - worth 8000
    - saving per month - 1000
    - price decrease by - .015
      - after every 2 months, add .005 to price decrease
  Return 
    - number of months
    
    while total value (savings + old car) is less than new car value
      month++
      if month % 2 === 0
        add .05 to percent decrease in value
      old car = old car * (1 - percent decrease)
      new car = new car * (1 - percent decrease)
      savings = savings + 1000
    return month  
*/

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let oldCar = startPriceOld
    let newCar = startPriceNew
    let savings = 0
    let percentDecrease = percentLossByMonth / 100
    let totalValue = oldCar + savings
    let month = 0
    let leftOver = 0
    
    while (totalValue < newCar) {
      month++
      if (month % 2 === 0) {
        percentDecrease = percentDecrease + 0.005
      }
      oldCar = oldCar * (1 - percentDecrease)
      newCar = newCar * (1 - percentDecrease)
      savings = savings + savingperMonth
      totalValue = oldCar + savings
    }
    leftOver = totalValue - newCar
    return [month, Math.round(leftOver)]
  }