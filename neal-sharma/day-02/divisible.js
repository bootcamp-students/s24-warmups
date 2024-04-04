/* precept
parameters- check if a number is divisible by 2 numbers.
return- true or false
example- n = 3, x = 1, y = 3 => true (3 is divisible by 1 and 3)
concerns- math..
explain- if n is divisible by both x and y return true else return false
positive self talk- I can figure it out with patience
translate-
*/

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0){
      return true
    } else {
      return false
    }
    
   }