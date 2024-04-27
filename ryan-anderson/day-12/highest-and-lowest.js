'use strict'
function highAndLow(numbers){
  let newNumbers = numbers.split(' ');
    console.log(newNumbers)
  let numberNumbers = newNumbers.map(Number);
    console.log(numberNumbers)
  const maxNumber = numberNumbers.reduce((max, cur) => max > cur ? max : cur);
    console.log(maxNumber)
  const minNumber = numberNumbers.reduce((min, cur) => min < cur ? min : cur);
    console.log(minNumber)
  return (maxNumber + ' ' + minNumber)
}

// reduce to return highest number
// another reduce to return lowest number