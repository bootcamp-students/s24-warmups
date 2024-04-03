function getSum(a, b)
{
   const min = Math.min(a,b);
    const max = Math.max(a,b);
  
  let sum = 0
  for (n = min; n <= max; n++){
        sum = sum + n;  
  }
  return sum;
}
