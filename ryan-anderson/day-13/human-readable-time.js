'use strict'
function humanReadable (seconds) {
  let sec = seconds % 60;
  let minutes = ((seconds - sec) / 60) % 60;
  let hours = (seconds - (sec + (minutes * 60))) / 3600;
  
  let strSec = sec.toString();
  if (sec < 10) {               // these if statements ensure time strings are always 2 digits
    strSec = '0' + strSec;
  }
  let strMin = minutes.toString();
  if (minutes < 10) {
    strMin = '0' + strMin;
  }
  let strHou = hours.toString();
  if (hours < 10) {
    strHou = '0' + strHou;
  }
  
  return strHou + ':' + strMin + ':' + strSec
}

// use % to find seconds, then divide by 60
// use % on new number to find minutes, then divide by 3600 to find hours
// return time as string