
function houseNumbersSum(inputArray) {
  //coding and coding..
  let sum = 0;
  
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      // If 0 is encountered, it marks the end of house numbers
      break;
    }
    sum += inputArray[i];
  }
  
  return sum;
}
  
//P I need to create a function that stops adding the numbers together after it comes across a zero.
//R my function should return a function that stops adding the sums after it comes to a zero in the string. 
//Example [5, 1, 2, 3, 0, 1, 5, 0, 2]),11
//C there are no zeros in the string. 
//Explain. I will iterate over the string and if the index is equal to a 0 then stop adding the numbers in the array.
