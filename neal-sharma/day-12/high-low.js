/*precept
parameters- take a string of numbers and return the highest and lowers. in that order
return- highest and lowest in string.
example- '1 2 3 4 5' return '5 1'
concerns- turning my pseudocode into real code. fully understanding math.min and math.max etc.
explain- biggest issue was syntax. using string interpolation i plugged in math.min and math.max
positive self talk- practice puts brains in your muscles

*/
"use strict";
function highAndLow(numbers){
  //let num = str.split(' ');
  //return Math.max(...numbers.split(' '), Math.min(...numbers.split(' ')))
  return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`

}