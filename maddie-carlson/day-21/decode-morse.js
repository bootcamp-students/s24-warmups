decodeMorse = function (morseCode) {
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

    message += " " // add a space back to separate words
  }

  //delete trailing spaces
  message = message.slice(0, message.length - 1)

  //return message
  return message
}

/*
  Ember's Feedback:
  - Great job!
  - JS naming convention is to use camel case instead of snake case
  - you could replace the slice() on 33 with a .trim() and it would do the same thing-
    while being a little more semantic
*/
// Alternative Solutions
// RegEx here matches any number of literal . characters and literal - characters, followed by 0 to 2 spaces
// That whole match, spaces and all, are replaced by the output from the function I give .replaceAll
// The function given to replace all takes the capture group, denoted by parenthesis, (i.e. just the dots and dashes)
// and plugs that into the MORSE_CODE object. It then replaces the whole match with that return value.
decodeMorse = function (morseCode) {
  return morseCode.trim().replaceAll(/([\.\-]+)\s{0,2}/g, (_, p1) => {
    return MORSE_CODE[p1]
  });
}
decodeMorse = function (morseCode) {
  return morseCode
    // splits words apart
    .split('   ')
    // turn the words into morse code
    .map(word => word
      // splits letters in word apart
      .split(' ')
      // converts the letters into morse code
      .map(character => MORSE_CODE[character])
      // puts letter together
      .join('')
    )
    // puts words back together into a string
    .join(' ')
    // removes whitespace at beginning and end of the string
    .trim();
}
