// do i turn the string into an array
// find letter after 'letter' so string
// find the letter in the string index
// isolate letter after "letter"
// run toUpperCase
// isolate letter in string

var makeEveryLetterAfterXCaps = function (str, letter) {
  let arr = str.split("")

  for (let char in arr) {
    if (arr[char] === letter && Number(char) < arr.length - 1) {
      arr[Number(char) + 1] = arr[Number(char) + 1].toUpperCase()
    }
  }
  return arr.join("")
}


/*
  Ember's Feedback:
  - Good job!
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
