/*
Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  let sec = 0,
    min = 0,
    hour = 0;
  //divide the seconds appropriately
  sec = seconds % 60
  min = Math.floor(seconds / 60) % 60;
  hour = Math.floor(seconds / 3600);

  return padNum(hour) + ":" + padNum(min) + ":" + padNum(sec);
}


//add a pad number function to the return and return a string
let padNum = (num) => {
  if (num < 10) {
    return "0" + num
  }
  return String(num)
}
/*
  Ember's Feedback:
  - Great job!
  - I like hte use of the helper function to pad. You can also use String(input).padStart(2, '0') to accomplish the same thing
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
