decodeMorse = function (morseCode) {
  let splitCode = morseCode.trim().split('   ');
  let finalArray = [];

  for (let word of splitCode) {
    let letters = word.split(' ');
    let wordArray = [];
    for (let letter of letters) {
      wordArray.push(MORSE_CODE[letter]);
    }
    finalArray.push(wordArray.join(''));
  }
  return finalArray.join(' ');
};

// takes a string of . and - representing morse code

// returns the letters/words in english all uppercase

// ('.... . -.--   .--- ..- -.. .'), 'HEY JUDE'

// I could use the MORSE_CODE library incorrectly, i could have a type error.

// trim the morseCode, split at the triple spaces, pass each of the strings in the new array into MORSE_CODE
// join that array and return it

/*
  Ember's Feedback:
  - Great job!!!
*/
// Alternative Solution
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
