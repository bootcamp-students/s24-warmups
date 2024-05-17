function humanReadable(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

//P create a function that takes an integer as seconds and returns a human readable time
// in format (HH:MM:SS)
//R my function should return 2 digits for the hour, the minutes and the seconds.
//Example ( 60, '00:01:00'), (3599, '00:59:59')
// concerns converting my math correctly
//Explain. Create a variable for each Hours, minutes, and seconds. use padstart to give the two digits
// to find seconds, s % 3600, to find minutes, m ((seconds% 3600) /60), to find the hours use seconds / 3600.
// use Math.floor to round down to the nearest whole number.
/*
  Ember's Feedback:
  - Lets gooooo!!!! Best solution right here!
  - Great job :D
  - I always prefer to write full names for variables but for this problem is probably fine.
*/
// Alternative Solution
// You can always rename the parameter value to whatever you want
function humanReadable(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map(num => String(num).padStart(2, '0')).join(':')
}

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
