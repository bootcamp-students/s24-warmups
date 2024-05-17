function humanReadable(seconds) {
  'use strict'
  let hours = Math.floor(seconds / 3600)
  let remSeconds = seconds % 3600
  let minutes = Math.floor(remSeconds / 60)
  let newSeconds = remSeconds % 60

  if (hours < 10) {
    hours = `0${hours}`
  }

  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  if (newSeconds < 10) {
    newSeconds = `0${newSeconds}`
  }


  return `${hours}:${minutes}:${newSeconds}`;
}

/*
i need to take the given seconds and divide them appropriately into hours, minutes and remaining
seconds.

then i need to plug them into a string and return it into the format 00:00:00

the trick with that is to use a template literal to plug my results into the format with
0s in front. so if less than 10 add '0'
*/
/*
  Ember's Feedback:
  - Excellent job!!
  - This is similar to the coin problem, so you can solve it in similar ways.
    soup/coin-combo.js if you want to see the different ways.
*/
// Alternative Solution
function humanReadable(seconds) {
  // greater than or equal to 24 hours
  if (seconds >= 86400) {
    let numberOfDays = Math.floor(seconds / 86400);
    let hourMinSec = new Date((seconds % 86400) * 1000).toLocaleTimeString('en-GB'); // 'en-GB' returns hh:mm:ss
    return (numberOfDays * 24) + parseInt(hourMinSec.slice(0, 2)) + hourMinSec.slice(2)
  } else {
    return new Date(seconds * 1000).toLocaleTimeString('en-GB');
  }
}
