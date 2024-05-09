function humanReadable(seconds) {
  // check seconds to max q
  if (seconds < 0 || seconds > 360000) {
    return null;
  }
  // return in human-readable format
  let hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  if (hours < 10) {
    hours = '0' + hours;
  }
  // Declare HH, MM, SS 0-59
  var minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return hours + ':' + minutes + ':' + seconds;
  //Use Math.floor to check others
}
/*
  Ember's Feedback:
  - Great job!
  - The maximum value from the prompt is actually 359999 not 360000
  - The last comment below the return doesn't make sense
  - I recommend never using var
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
