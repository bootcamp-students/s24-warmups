/*
  P - seconds, hours, minutes, newSeconds, stringHours, stringMinutes, stringNewSeconds
  R - HH:MM:SS

  If under 60 then
    return 00:00:seconds
  If under 3600 then
    seconds/ 60 -- rounded down = minutes
    seconds % 60 = seconds, return 00:minutes:seconds
  If under 360000 then
    seconds / 3600 -- rounded down = hours
    seconds % 3600 = seconds w/o hours
    seconds w/o hours / 60 -- rounded down = minutes
    seconds w/o hours % 60 = seconds
    return hours:minutes:seconds

  Convert each to two places.
*/

"use strict"

function humanReadable(seconds) {
  let newSeconds = 0;
  let stringNewSeconds = "";
  let minutes = 0;
  let stringMinutes = "";
  let hours = 0;
  let stringHours = "";
  let secondsWOHours = 0;

  if (seconds < 60) {
    if (seconds < 10) {
      stringNewSeconds = `0${seconds}`;
    } else {
      stringNewSeconds = `${seconds}`
    }
    return `00:00:${stringNewSeconds}`;
  } else if (seconds < 3600) {
    minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
      stringMinutes = `0${minutes}`;
    } else {
      stringMinutes = `${minutes}`;
    }
    newSeconds = (seconds % 60);
    console.log(90 % 60);
    if (newSeconds < 10) {
      stringNewSeconds = `0${newSeconds}`;
    } else {
      stringNewSeconds = `${newSeconds}`;
    }
    return `00:${stringMinutes}:${stringNewSeconds}`;
  } else if (seconds < 360000) {
    hours = Math.floor(seconds / 3600);
    if (hours < 10) {
      stringHours = `0${hours}`;
    } else {
      stringHours = `${hours}`;
    }
    secondsWOHours = (seconds % 3600);
    minutes = Math.floor(secondsWOHours / 60)
    if (minutes < 10) {
      stringMinutes = `0${minutes}`;
    } else {
      stringMinutes = `${minutes}`;
    }
    newSeconds = (secondsWOHours % 60);
    if (newSeconds < 10) {
      stringNewSeconds = `0${newSeconds}`;
    } else {
      stringNewSeconds = `${newSeconds}`;
    }
    return `${stringHours}:${stringMinutes}:${stringNewSeconds}`
  }
}
/*
  Ember's Feedback:
  - Good job!
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
