/*
Instructions:
Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

Example:
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
Params: given string
Return: string
Solution: I'm going to split all of the individual components up, and then map it using the library, and then join the characters back
together

Given Code:
use this library: MORSE_CODE['.--']

decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
}
*/

decodeMorse = function (morseCode) {
  // first split the string, then map it
  return morseCode.split('   ').map(word =>
    //then join everything back after passing through the library
    word.split(' ').map(char => MORSE_CODE[char]).join('')
  ).join(' ');
};

/*
  Ember's Feedback:
  - rename this file to be decode-remorse.js please instead of decode.morse
  - Excellent job!! Best solution, really you did so well :D :D :D
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
    // splits words apart (3 spaces)
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

