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
