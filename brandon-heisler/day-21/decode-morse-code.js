decodeMorse = function (morseCode) {
  "use strict"
  let trimCode = morseCode.trim()
  let morseWordsArray = trimCode.split("  ")
  let returnArray = []

  for (let i = 0; i < morseWordsArray.length; i++) {
    let morseWord = morseWordsArray[i]
    let morseLetterArray = morseWord.split(" ")
    let newArray = morseLetterArray.map((letter) => MORSE_CODE[letter])
    returnArray.push(newArray.join(""))
  }

  return returnArray.join(' ')
}
/*
were given a string in morse code and need to translate it with a provided
library
first i want to take the extra spaces off of the ends of the string
next ill create an array and split the string into morse words. and add an
empty array to put the answer in next i need to loop over the words and
change each letter into morse, one letter at a time, plug those back into
an array after joining them together back into words. then join and return it.
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
