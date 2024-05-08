/*precept
parameters- take a number in seconds and make it into readable time format
return- human readable format (hh:mm:ss)
example- The maximum time never exceeds 359999 (99:59:59)
concerns- math is tough for me. I was doing my math wrong on seconds and was stuck for a while.
I would get the first two tests right but then the 60 seconds part wasnt going to the minutes
section. but we got there.
explain- first i declare hours minutes and the seconds remaining with math.(was doing my minutes
math wrong and was stuck) then i had to adjust the minutes because i was getting 60 seconds
instead of 1 minute. im not sure this is needed now as i figured out my math was wrong on my
minutes section in the part above it. commented it out and fixed my variables in the strings
section and it worked so it wasnt needed after all. just did the math wrong. But got there.
finally in the strings section i format the math i did into how its supposed to look using
? : ternary to add a 0 or not. then returned the string with : separating them. PHEW!
*/
"use strict";
function humanReadable (seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds % 3600 / 60);
  let remainingSeconds = seconds % 60;

  //const adjustedMinutes = minutes + Math.floor(remainingSeconds / 60);
    //const adjustedRemainingSeconds = remainingSeconds % 60;

  let hoursString = hours < 10 ? '0' + hours : '' + hours;
  let minutesString = minutes < 10 ? '0' + minutes : '' + minutes;
  let secondsString = remainingSeconds < 10 ? '0' + remainingSeconds : '' + remainingSeconds;


  return hoursString + ':' + minutesString + ':' + secondsString;
}
/*
  Ember's Feedback:
  - Great job!
  - This is similar to the coin combo problem, so I am glad you got it :D
  - You can use the padStart function on strings to get around what you did with the ternary
*/
String(hours).padStart(2, '0') // etc...

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
