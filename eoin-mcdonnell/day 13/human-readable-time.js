/*
Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
    let sec = 0,
        min = 0,
        hour = 0;
    //divid the seconds appropriately
    sec = seconds % 60
    min = Math.floor(seconds/60) % 60;
    hour = Math.floor(seconds/3600);
    
    return padNum(hour) + ":" + padNum(min) + ":" + padNum(sec);
  }
  

  //add a pad number function to the return and return a strng
  let padNum = (num) => {
    if(num < 10){
      return "0" + num
    }
    return String(num)
  }