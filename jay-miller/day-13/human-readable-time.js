function humanReadable (seconds) {//check seconds to max
  if (seconds < 0 || seconds > 360000){
    return null;
  }
 //return in human-readable format
  let hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  if (hours < 10){
    hours = '0' + hours;
  }
 //Declare HH, MM, SS 0-59
    var minutes = Math.floor( seconds / 60 );
  seconds -= minutes * 60;
  if ( minutes < 10 ) {
    minutes = '0' + minutes;
  }

  if ( seconds < 10 ) {
    seconds = '0' + seconds;
  }

  return hours + ':' + minutes + ':' + seconds;
 //Use Math.floor to check others

}
