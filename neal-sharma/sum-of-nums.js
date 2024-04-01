/* Given two integers a and b, which can be positive or negative,
function getSum(a, b)
find the sum of all the integers between and including them
Need to find minimum number and max number of a and b. add all numbers in between including 
a and b. 
and return it. 
return sum of a and b plus all numbers in between. 

If the two numbers are equal return a or b. 
IF a === b return a or b(they are equal so return either one.) */

/* sum of integers formula: S = n(a + l) / 2 
S = sum
n = number of integers
a = first term
l = last term

Math.min returns lowest value passed to it
Math.max returns highest value passed to it
Math.max(value1, value2) same for Math.max

added + 1 to include a and b in the sum
*/


function getSum(a, b) {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }
  
  console.log(getSum(1, 0));
  console.log(getSum(1, 2));
  console.log(getSum(0, 1));
  console.log(getSum(1, 1));
  console.log(getSum(-1, 0));
  console.log(getSum(-1, 2));