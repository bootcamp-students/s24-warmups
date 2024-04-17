function humanReadable(seconds) {
  let hours = `${Math.floor(seconds / 3600)}`;
  let minutes = `${Math.floor((seconds % 3600) / 60)}`;
  let theSeconds = `${Math.floor((seconds % 3600) % 60)}`;
  let finalArray = [
    hours.padStart(2, '0'),
    minutes.padStart(2, '0'),
    theSeconds.padStart(2, '0'),
  ];
  return finalArray.join(':');
}

// integer in seconds

// expecting me to return the time in 00:00:00 format as a string

//  0, '00:00:00'

// I could have a type error handling the input or with the final string. I could handle the math wrong.

// if less than 60 just return that number in the seconds spot
// if greater than 60 but less than 3600 do seconds mod 60 add the remainder as seconds and then
// devide seconds by 60 and put that number in minutes
// if above 3600 do the same for hours up until less than 360000

// This is a little tricky, if i dont overcomplicate it I should be fine!
