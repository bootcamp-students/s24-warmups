/* Introduction
The first century spans from the year 1 up to and including the year 100, the second century - 
from the year 101 up to and including the year 200, etc.

Params: Given a year, return the century it is in. 
Return: integer (what century a year falls in)
Concerns: for the life of me I have never figured out centuries
Solution: century can be calculated by dividing the year by 100 and rounding up. Use the Math.ceil function.

Original provided code:
function century(year) {
  // Finish this :)
  return;
}

*/


function century(year) {
    let century = Math.ceil(year/100)
     return century
   }
 