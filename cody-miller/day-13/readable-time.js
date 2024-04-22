function humanReadable (seconds) {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds % 3600) / 60)
  let timeSeconds = Math.floor(seconds % 60) 
  
  let formattedHours = String(hours).padStart(2, '0')
  let formattedMinutes = String(minutes).padStart(2, '0')
  let formattedSeconds = String(timeSeconds).padStart(2, '0')
  
  let formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  return formattedTime;
}
//Unix time