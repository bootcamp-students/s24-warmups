function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds % 3600) / 60)
  let timeSeconds = Math.floor(seconds % 60)

  let formattedHours = String(hours).padStart(2, '0')
  let formattedMinutes = String(minutes).padStart(2, '0')
  let formattedSeconds = String(timeSeconds).padStart(2, '0')

  let formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  return formattedTime;
}
//Unix time
/*
  Ember's Feedback:
  - good job using padStart!
  - Great job :D
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
