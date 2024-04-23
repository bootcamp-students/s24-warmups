function findOdd(A) {
  
    let times = [];
    let counter = 0;
    
  let numberOfTimes = A.forEach(num => { // Adds odd occurences of each number to counter, and subtracts even ones
    if (times.includes(num) === false) { // i.e. if 5 appears 3 times, this function will add 5 then subtract 5 then add 5
      times.push(num);                   // Counter will thus end up being equal to the number that appears an odd number of times
      counter += num;
      } else {
      let evenIndex = times.indexOf(num);
      times.splice(evenIndex, 1)
      counter -= num;
      }
  })
  return counter
  }