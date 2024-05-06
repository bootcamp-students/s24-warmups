function sum(array) {
  console.log(array)
  // Use array.reduce() to calculate and return the
  // sum of the values in array.
  let initialValue = 0
  const sum = array.reduce((acc, cur) => acc + cur);
  return sum;

      
}

/*
Parameters- create a function that uses reduce to find the sum of of the values
Return- my function should return the sum of the values using the array.reduce method.
Example- [1,2,3,4,5,6,7,8,9,10] = 55
Concern- I have a syntax error in my method.
Explain- I will use the reduce method and iterate over the acc and add each acc to the current value.

*/
