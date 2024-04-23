function houseNumbersSum(inputArray) {
    let zero = inputArray.indexOf(0);
    let restOfArray = inputArray.length - zero;
    let newArray = inputArray.splice(0, zero);
    console.log(newArray)
    
    let sum = newArray.reduce((acc, num) => {
      return acc += num
      console.log(acc)
    }, 0)
    return sum
  }
  
  // use indexOf to find first 0
  // splice array at that index
  // reduce remaining array into sum