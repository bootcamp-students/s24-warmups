"use strict"
var makeEveryLetterAfterXCaps = function (str, letter) {
  let newStr = [str[0]]; // array for building string with caps
  let newNewStr = ""; // used to turn array back into string at the end
  for (let i = 1; i < str.length; i++) { // check if each entry in string is input letter
    newStr[i] = str[i]; 
    if (newStr[i-1] === letter) {
      newStr[i] = str[i].toUpperCase() // capitalizes letters after input letter
    }
}
  for (let j = 0; j < newStr.length; j++) { //turns newStr array into newNewStr string
    newNewStr += newStr[j];
  }
  return newNewStr;
}