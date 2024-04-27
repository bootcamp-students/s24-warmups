// use .reduce()
// create vars for highest and lowest num
//use .split
// return will be highest and lowest number
// use map to map through array 

function highAndLow(numbers){
  let num = numbers.split(" ");
  let numArray = num.map(Number)
  let lowestNumber = numArray.reduce((max, cur) => max < cur ? max : cur)
  let highestNumber = numArray.reduce((max, cur) => max > cur ? max : cur)
  console.log(lowestNumber);
  console.log(highestNumber);
  
  
  return highestNumber + " " + lowestNumber

}
