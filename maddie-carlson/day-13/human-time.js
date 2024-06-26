function humanReadable(seconds) {
  //function takes a non-negative integer that will never exceed 359999 (99:59:59)
  //returns the time as a string in hours:minutes:seconds

  //to solve, start by calculating hours, then minutes, then seconds

  //hours can be found by dividing seconds by 3600, round that DOWN and store that
  let hours = Math.floor(seconds / 3600)

  //afterwards, grab the remainder to see how many seconds (minutes) we have left over
  let remainder = seconds % 3600

  //calculate minutes, dividing remaining seconds by 60, store it, round DOWN
  let minutes = Math.floor(remainder / 60)

  //likewise as above, and then grab the remainder, which is our seconds
  let rem_seconds = remainder % 60

  //combine the stored results into a string in the required format
  //note that if any of them are less than 10 then they will need a leading zero
  let array = [hours, minutes, rem_seconds]
  array = array.map((input) => {
    if (input < 10) {
      return "0" + String(input)
    } else {
      return String(input)
    }
  })

  //afterwards, return the string
  return array.join(":");
}
/*
  Ember's Feedback:
  - Great job!
  - I like your solution, that is a great approach :D
*/
// Alternative Solution
// You could do this in the .map
(input) => String(input).padStart(2, '0')

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
