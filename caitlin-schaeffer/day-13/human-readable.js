/*
Instructions: Write a function, which takes a non-negative integer (seconds) as input 
and returns the time in a human-readable format (HH:MM:SS)
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59

Params: it will give an integer (seconds)
Return: we will return the input formatted
Example:  doTest(  3599, '00:59:59');
Solution: 

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

function humanReadable (seconds) {

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
