function highAndLow(numbers){
  const array1 = numbers.split(' ');
  const array2 = array1.map(Number);
  const highest = Math.max(...array2);
  const lowest = Math.min(...array2);
  
  return `${highest} ${lowest}`;
  }


//P create a function that returns the highest and lowest number 
//R my function should show the highest and lowest number
// Example- ("1 2 3"), "3 1";
//Concerns- Not knowing what function to use or having a syntax error as well as not paying attention to details in the data;
// Explain- I can split the string and show each integer as one item, then map over the new string, 
//create a variable for highNumber and lowNumber and 
//use Math.max and Math.min to find the high and low numbers of the array
