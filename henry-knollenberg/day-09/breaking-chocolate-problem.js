/* Parameters - dimensions(n and m), 
  find the area, minus 1
   --because the number of breaks is always 1 less than the area
    
  Added the if statement due to the possibility of no chocolate
*/

function breakChocolate(n,m) {
    if (n > 0 && m > 0) {
      let area = n * m;
      let breaks = area - 1;
      return breaks;
    } else {
      return 0;
    }
  }