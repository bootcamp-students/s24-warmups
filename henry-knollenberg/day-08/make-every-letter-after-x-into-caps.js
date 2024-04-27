/* Find each instance of the letter. After each instance grab
  the index. Take index plus one. Capitalize the letter in that
  index. Loop for the length of the string.

  Parameters: string, letter
  Return: copy of the string with the capitalized letters.

  If nextCap is true, then capitalize current letter.
  Add current letter.
  Need to test if current letter is the letter. If so, set nextCap to true.

  */

var makeEveryLetterAfterXCaps = function (str, letter) {
  let strArray = str.split("");
  let nextCap = false;
  let capStr = "";

  function checkSame(char, letter) {
    if (char === letter) {
      nextCap = true;
    } else {
      nextCap = false;
    }
  }

  for (const char of strArray) {
    if (nextCap === true) {
      let curLetter = char.toUpperCase();
      capStr += curLetter;
      checkSame(curLetter, letter);
    } else {
      checkSame(char, letter);
      capStr += char;
    }
  }
  return capStr;
}

/*
  Ember's Feedback:
  - Great job!
  - Awesome pseudo code
  - Really excellent work with the little helper function
*/
// Alternative solution
var makeEveryLetterAfterXCaps = function (str, letter) {
  let modifiedString = "";
  let capitalizeNext = false;
  for (let i = 0; i < str.length; i++) {
    let sub = str.at(i);
    if (capitalizeNext) {
      sub = sub.toUpperCase()
    }
    capitalizeNext = sub === letter
    modifiedString = modifiedString + sub
  }
  return modifiedString;
}
