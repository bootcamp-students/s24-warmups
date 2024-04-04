/* currentCentury
    year
    IF year % 100 == 0                    If year is divisible by 100 then current year divided by 100 equals current century.
      THEN currentCentury = year / 100
    ELSE                                  Else then current century equals the current year divided by 100 rounded down plus one.
      THEN currentCentury = Math.floor(year/100) + 1
    */


function century(year) {
    if (year % 100 === 0) {
      return year / 100;
    } else {
      return Math.floor(year / 100) + 1;
    }
}