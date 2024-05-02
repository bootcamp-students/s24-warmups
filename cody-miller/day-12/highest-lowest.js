"use strict";

function highAndLow(numbers) {
    return `${Math.min(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`
}
/*
    Ember's Feedback:
    - Very good job!!! :D
    - Great job using the spread operator to unpack that array you get back from split
    - Great job using the template as well, putting expressions in templates is a really
        common coding pattern you will see on the job
*/
// Alternative Solution
// Sort
function highAndLow(numbers) {
    "use strict"
    let order = numbers.split(' ').map(Number)
    order.sort((a, b) => a - b)
    let answer = `${order.at(-1)} ${order.at(0)}`
    return answer
  }

  // Slightly different reduce where you run it just once
  function highAndLow(numbers) {
    "use strict"
    let numbersList = numbers.split(' ').map(Number)
    let [highestNumber, lowestNumber] = numbersList.reduce((acc, cur) => {
      if (cur > acc[0]) {
        acc[0] = cur
      }
      if (cur < acc[1]) {
        acc[1] = cur
      }
      return acc
    }, [-Infinity, Infinity])
    return `${highestNumber} ${lowestNumber}`
  }



//   let number = numbers.split(" ");
//     console.log(number);

//   let changeType = number.map(Number);
//     console.log(changeType);

//   let minimum = changeType.map();
//     console.log(minimum);

//   let maximum = Math.max(changeType);
//     console.log(maximum);

//   let formattedAnswer = `${minimum} + " " +  ${maximum}`;
//     console.log(formattedAnswer);
// }
