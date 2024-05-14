//parameters-
//should return a string using camel case
//"the-stealth-warrior" gets converted to "theStealthWarrior"
//capitalizing every word instead of camel case due to wrong method
//I want to be able to take every string regardless of their format
//and split them map over each word/index and join them back
//together and camel case every word after the first one.


function toCamelCase(str) {
  return str
    .split(/[-_]/) //removing dashes and underscore
    .map((word, index) => { //map over each word and index
      if (index === 0) {
        return word;  //if the index is 0 word is to be left alone
      }
      return (
        word.charAt(0).toUpperCase() + word.slice(1) //also want to return a word character at index 0 to be uppercased and to return the extracted part of the string
      );
    })
    .join('') //finally join the string back together.
}
/*
  Ember's Feedback:
  - Great job!
  - Good use of regex for the pattern to split on :D
*/
// Alternative Solution
function toCamelCase(str) {
  let camelCased = ''
  let uppercaseNext = false
  for (const character of str) {
    if (character === '-' || character === '_') {
      uppercaseNext = true
    } else {
      if (uppercaseNext) {
        camelCased += character.toUpperCase()
        uppercaseNext = false
      } else {
        camelCased += character
      }
    }
  }
  return camelCased
}
/* Regex here gets either a - or a _ and the thing after it, replacing it with
  what you return from the function you give to .replace.
  The function you gave to .replace ignores the whole match, which is the 1st parameter.
  Instead you get the 1st capture group and uppercase it.
  The capture group being the parentheses, which is the thing directly after the - or _
*/
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
