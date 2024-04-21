function humanReadable (seconds) {
  console.log('seconds', seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

//P create a function that takes an integer as seconfs and returns a human readable time 
// in format (HH:MM:SS)
//R my funtion should return 2 digits for the hour, the minutes and the seconds.
//Example ( 60, '00:01:00'), (3599, '00:59:59')
// concerns converting my math correctly 
//Explain. Create a variable for each Hours, minutes, and seconds. use padstart to give the two digits 
// to find seconds, s % 3600, to find mintues, m ((seconds% 3600) /60), to find the hours use seconds / 3600.
// use Math.floor to round down to the nearest whole number.
