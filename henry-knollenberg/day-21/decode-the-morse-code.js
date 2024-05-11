/* trim by " ",
replace multiple spaces with just one
split string by " ",
iterate through array
    decode each letter into new array
join array
return */


decodeMorse = function (morseCode) {
  let trimStr = morseCode.trim(" ");
  let arr = trimStr.split(" ");
  let decodedArr = arr.map((el) => {
    if (el !== "") {
      return MORSE_CODE[`${el}`];
    } else {
      return " ";
    }
  })
  let decodedStr = decodedArr.join("");
  let formatStr = decodedStr.replaceAll("  ", " ");
  return formatStr;
}
/*
  Ember's Feedback:
  - Great job! good use of map :D
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
