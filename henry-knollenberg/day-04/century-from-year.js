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

/* Ember's Feedback:
  Good job!
  This works, but you could also write it like this.
*/

function century(year) {
  return Math.ceil(year / 100)
}

// 1601 / 100 will return 16.01
// Math.ceil on that will round up to the nearest whole number, so 17, which is the correct century
// 1600 / 100 will return 16
// Because that is already a whole number, Math.ceil just returns 16, which is the correct century
