function toCamelCase(str) {
  let splitString = str.replaceAll('-', '_').split('_');
  let finalStringArray = [];
  for (let string in splitString) {
    let splitMiniString = splitString[string].split('');
    for (let letter in splitMiniString) {
      if (
        letter === '0' &&
        string === '0' &&
        splitMiniString[letter] === splitMiniString[letter].toLowerCase()
      ) {
      } else if (letter === '0') {
        splitMiniString[letter] = splitMiniString[letter].toUpperCase();
      }
    }
    finalStringArray.push(splitMiniString.join(''));
  }
  return finalStringArray.join('');

  // Split the string by either - or _, then split then loop through the new
  // array of strings, split each of those and loop through the characters, capitalizing
  // the first character of each word, except if the first word is lowercase
  // leave it lower case
}

// a string with varying upper/lowercase characters seperated by either
// a - or a _

// Expects the same string returned in Pascal case

// ("the_stealth_warrior"), "theStealthWarrior"

// I could forget to captizalize the first letter if the original was,
// I could format the string incorrectly

// Split the string by either - or _, then split then loop through the new
// array of strings, split each of those and loop through the characters, capitalizing
// the first character of each word, except if the first word is lowercase
// leave it lower case

// I can do this!
