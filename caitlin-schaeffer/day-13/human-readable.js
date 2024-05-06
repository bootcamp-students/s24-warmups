/*
Instructions: Write a function, which takes a non-negative integer (seconds) as input
and returns the time in a human-readable format (HH:MM:SS)
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59

Params: it will give an integer (seconds)
Return: we will return the input formatted
Example:  doTest(  3599, '00:59:59');
Solution: Run a bunch of if statements after establishing math ceiling and floor,
going through hours, minutes, and seconds.

Given Code:
function humanReadable (seconds) {
  return '';
}
*/

/* Thinking:
Basically, it has to run through secs, mins, and hours in order and add the iterations
together as it advances.
If secs = 0-59, no change, if 60, add 1 to mins and reset to zero
If mins = 0-59, no change, if 60, add 1 to hrs and reset to zero
If hrs = anything, just keep counting here
Oh! It's like the coin thing!
More like always modulo the number by 60, and take whatever that value is and
then keep track of seconds, and then mins and then hours
*/
function humanReadable(seconds) {
  // Set the bottom first, write an if for the floor and ceiling
  if (seconds < 0 || seconds > 360000) {
    return null;
  }
  // Run an if statement to establish hours
  let hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  if (hours < 10) {
    hours = '0' + hours;
  }
  // Run an if statement to establish minutes
  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  // Run an if statement to establish seconds
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  // Return all of the variables with the colons
  return hours + ':' + minutes + ':' + seconds;
}
/*
  Ember's Feedback:
  - Great job!
  - The maximum number of seconds is actually 359999 not 360000
  - Really proud of you :D
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

/*
Code work out:
function humanReadable (seconds) {

// we need to set something that takes care of 0 seconds
  if (seconds < 0 || seconds > 359999) {
    return null
  }
  if (seconds === 0) {
    return '00:00:00'
  }
// now do the math for time
    let secs = seconds / 60
    if (secs <= 9) {
        return '0' + secs
    }
    let mins = Math.floor(secs % 60);
    let hrs = Math.floor(mins % 60);
    let time = [ hrs + ':' + mins + ':' + secs].padStart(2, '0');
    return time;
  }

//     let secs = seconds.filter(x => x >= 0 && x >= 59)
//   if (x <= 59) {
//     return x
//   } else if (x === 60) {
//     y + 1 &&& x = 0 ?
//     // would need to run through this for all of the elements?
//   } else if (y <= 59) {
//     return y
//   } else if (y === 60) {
//     z + 1 &&& x = 0
//   }

  // orrrrr do this for all things as a stack?
  */
