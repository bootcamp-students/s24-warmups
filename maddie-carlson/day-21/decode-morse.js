decodeMorse = function(morseCode){
  //function takes a string of dots and dashes
  //must return the translated var

  //to solve, first split into an array, by the word (three spaces)
  let word_array = morseCode.split("   ")
  //set an empty message to be filled over time
  let message = ""

  //loop over the array to assemble our words
  for (let i = 0; i < word_array.length; i++) {
    
    if (!word_array[i]) { //ignore falsy vars
      continue
    }

    //make an array of letters from each individual word, splitting by spaces
    let letter_array = word_array[i].split(" ")

    //loop over THAT array
    for (let j = 0; j < letter_array.length; j++) {
      if (!letter_array[j]) { //ignore falsy again
        continue
      }
      //assemble our message
      message += MORSE_CODE[letter_array[j]]
    }
    
    message += " " // add a space back to seperate words
  }
  
  //delete trailing spaces
  message = message.slice(0, message.length - 1)

  //return message
  return message
}
