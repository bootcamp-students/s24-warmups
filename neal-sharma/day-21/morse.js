/*precept
parameters- take more code and turn it into string of words
return- string of words
example- (decodeMorse('   .... . -.--   '), 'HEY');
concerns- was really stuck until i realized i could split by 3 spaces. Needed help with this
one but got there.
see comments
*/

decodeMorse = function (morseCode) {
  // Split Morse code string into individual characters
  const morseCodeWords = morseCode.trim().split('   '); // three spaces indicates
  //spaces between words

  // Map each Morse code word to to english equivalent
  const decodedWords = morseCodeWords.map(word => {
    const chars = word.split(' '); // split word into individual characters
    return chars.map(char => MORSE_CODE[char]).join('');// map characters then join to form
    // the word.
  });

  // Join the words to form the decoded string
  const decodedMessage = decodedWords.join(' ');

  return decodedMessage;
}
/*
  Ember's Feedback:
  - Great job! :D
  - Very readable code; really, great work
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
