var makeEveryLetterAfterXCaps = function (str, letter) {
  let strArray = str.split('');
  for (let i = 0; i < strArray.length - 1; i++) {
    if (strArray[i] === letter) {
      strArray[i + 1] = strArray[i + 1].toUpperCase();
    }
  }
  return strArray.join('');
};

// first parameter is a string and the second parameter is the letter to capitalize the next letter after it

// It is expecting me to return a string with the letter after the letter parameter capitalized in every instance

// 'bac', 'a'), 'baC'

// I could capitalize the wrong letter in the array. I could use the wrong methods by confusing the types

// Take the string turn it into an array. Loop through to find each instance of the letter and capitalize the next indexes letter.
// then join the array into a string and return it.

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
