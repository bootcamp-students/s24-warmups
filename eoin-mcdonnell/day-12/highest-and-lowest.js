'use strict'
//map is going to iterateo over the array
//math .min and math .max are goingto find the smallest and largest numbers  
  
function highAndLow(numbers) {
  let newNum = numbers.split(' ').map(Number);
  console.log(newNum)
  const max = Math.max(...newNum);
  console.log(max)
  const min = Math.min(...newNum);
  console.log(min)
  return `${max} ${min}`;
}

