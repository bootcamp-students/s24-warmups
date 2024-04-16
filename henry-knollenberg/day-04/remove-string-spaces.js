/*
  Find " " and replace with ""
*/

function noSpace(x) {
  return x.replace(/ /g, "");
}

/* Ember's Feedback:
  Good job and good use of regular expressions.
  If you want to know more about regular expressions and about strings, let me know.
  Know that strings are immutable in JS, so this returns a new string.
*/

// Alternative Solution
function noSpace(inputString) {
  // We must build up a new string, because strings are immutable
  let returnString = ''
  // strings can be accessed like arrays, so the first character is at position 0
  // strings also have a length property, just like arrays
  for(let i = 0; i < inputString.length; i++) {
    // Get the character out of the string
    let currentCharacter = inputString[i]
    // is the current character NOT an empty space?
    if (currentCharacter !== ' ') {
      // add the non-space character to the return string (addition for strings is concatenation)
      returnString += currentCharacter
    }
  }

  // we looped over every character and kept everything that isn't a space, so we can return!
  return returnString;
}
