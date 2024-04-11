function century(year) {
    let centuryNum = 0
        if (Number.isInteger(year/100)){
            centuryNum = (year/100);
        } else (
            centuryNum = Math.ceil(year/100)
        )
    
    // Finish this :)
    return centuryNum;
  }
  
    //year divided bcenturyy 10 1785  1700 +1 except 1800 / 10
    //if year / 1000 isInteger return centuryNum (century Num is year /100)
  
  //else  Math.ceil(year /100) 
  //so if the number is an integer if /1000 then we're good, if not round up 