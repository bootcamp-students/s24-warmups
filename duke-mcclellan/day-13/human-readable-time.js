//take an integer and return the time in a readable format
//return value should be time 
//HH:MM:SS should not exceed 359999(99:59:59)
//choosing the wrong method or syntax issues
//I need to be able to define the math of what seconds, minutes and hours will be
// then I'll need to list out how I want the string to be returned 


"use strict";
function humanReadable (seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds % 3600 / 60);
  let remainingSeconds = seconds % 60;
  
  let hoursString = hours < 10 ? '0' + hours : '' + hours;
  let minutesString = minutes < 10 ? '0' + minutes : '' + minutes;
  let secondsString = remainingSeconds < 10 ? '0' + remainingSeconds : '' + remainingSeconds;
  
  
  return hoursString + ':' + minutesString + ':' + secondsString;
}
