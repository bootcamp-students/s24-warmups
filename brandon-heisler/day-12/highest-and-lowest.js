function highAndLow(numbers){
  "use strict";
  
  let numbersArray = numbers.split(" ");
  
  let max = Math.max(...numbersArray)
  console.log(max)
  
  let min = Math.min(...numbersArray)
  console.log(min)
  
  let result = `${max} ${min}`
  return result
}

/*
find the highest and lowest numbers and return them. 
i want to turn the str into an array so i can manipulate it.
take the array and find the min and max of each using math.min, max respectively
return them in the correct format. 
