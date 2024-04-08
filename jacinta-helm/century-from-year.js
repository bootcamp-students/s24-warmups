function century(year) {
    // Finish this :)
    let century = Math.ceil(year/100);
    return century;
  }
  
  //P- find the year of a century
  //R- take the year subtract 1 divide it by 100 years and add 1 to get the correct century
  //E- year 1705 -1 = 1704 / 100 = 17 + 1 = 18. 18 is the century OR
  //- take 1705 / 100 and use Math.ceil method to round up. 
  //C- not calculating correctly, not using Math.ceil to round up to whole number. 
  //confused on why I don't need to add or subtract 1
