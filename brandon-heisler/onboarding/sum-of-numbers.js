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


/*  
i need to recieve 2 numbers in any order and return a sum of all the numbers in between.
my idea is to use Math.min and Math.max to sort the starting and ending
numbers into the correct order. run things through a for loop and increment, adding as i go.
*/
