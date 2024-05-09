decodeMorse = function (morseCode) {
  let output = ('')
  let newStr = morseCode.trim(' ').split(' ').filter((char, i) => char[i + 1] !== ' ');
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== '') {
      output += MORSE_CODE[newStr[i]]
    } else if (newStr[i] === '' && newStr[i - 1] !== '') {
      output += ' '
    }
  }
  return output
}

// map over string, replacing morse code with equivalent letter/space

/*
  Ember's Feedback:
  - Good job getting to a solution! This is pretty good, but it could be better.
    It reads like you were kind of stumbling through what to do with the spaces.
*/
// Alternative Solutions
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
