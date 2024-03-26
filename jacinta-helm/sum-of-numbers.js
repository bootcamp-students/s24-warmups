function GetSum = (a, b) {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

/* S = n(a + l)/2 (sum of integers formula)

S = sum of the consecutive integers
n = number of integers
a = first term
l = last term

Math.min is the lowest value
Math.max is the highest value
Add 1 to Math.min value and Math.max value to include into the sum
*/
