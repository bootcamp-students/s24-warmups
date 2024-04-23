function houseNumbersSum(inputArray) {
  let houseSum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      break;
    }
    houseSum += inputArray[i];
  }
  return houseSum;
}