//take an integer and return the time in a readable format
//return value should be time string
//HH:MM:SS should not exceed 359999(99:59:59)
//choosing the wrong method or syntax issues
//I need to be able to define the math of what seconds, minutes and hours will be
// then I'll need to list out how I want the string to be returned

"use strict";
function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds % 3600 / 60);
  let remainingSeconds = seconds % 60;

  let hoursString = hours < 10 ? '0' + hours : '' + hours;
  let minutesString = minutes < 10 ? '0' + minutes : '' + minutes;
  let secondsString = remainingSeconds < 10 ? '0' + remainingSeconds : '' + remainingSeconds;

  return hoursString + ':' + minutesString + ':' + secondsString;
}
/*
  Ember's Feedback:
  - Great job!!! This looks so good :D
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
