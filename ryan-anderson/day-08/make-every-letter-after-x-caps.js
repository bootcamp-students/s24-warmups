"use strict"
var makeEveryLetterAfterXCaps = function (str, letter) {
  let newStr = [str[0]]; // array for building string with caps
  let newNewStr = ""; // used to turn array back into string at the end
  for (let i = 1; i < str.length; i++) { // check if each entry in string is input letter
    newStr[i] = str[i];
    if (newStr[i - 1] === letter) {
      newStr[i] = str[i].toUpperCase() // capitalizes letters after input letter
    }
  }
  for (let j = 0; j < newStr.length; j++) { //turns newStr array into newNewStr string
    newNewStr += newStr[j];
  }
  return newNewStr;
}
/*
  Ember's Feedback:
  - Great job! This was a hard one so great job finding a solution.
  - Awesome that you used "use strict"
  - lets refine some of these variable names. I am going to re-write your function below with some notes.
*/
var makeEveryLetterAfterXCaps = function (str, letter) {
  // strings are immutable, so I need to build up a return string
  // I start with the first character of the input string, because my loop begins on the 2nd character
  let returnString = str[0];

  for (let i = 1; i < str.length; i++) {
    // check if the last entry in return string is the input letter
    // checking for the last entry instead of the next entry -
    //  because capitalizing a character could make it become the input letter
    if (returnString[i - 1] === letter) {
      // capitalizes letters after the input letter
      returnString += str[i].toUpperCase()
    } else {
      returnString += str[i]
    }
  }

  return returnString;
}
