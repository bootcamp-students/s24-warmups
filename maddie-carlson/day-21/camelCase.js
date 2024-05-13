function toCamelCase(str) {
  //function takes a string and needs to return a string converted to camelCase
  //needs to delete any dashes or underscores

  //to solve, create an empty string to start and split the provided string into an array
  let string = ""
  let array = str.split("")

  //finally, make a sentinel to determine if a word needs to be capitalized
  let caps = false

  //loop over the array string
  for (let i = 0; i < array.length; i++) {
    //check for underscores and dashes
    //if found, ignore them and note that the next word needs to be capitalized
    let letter = array[i]

    switch (letter) {
      case "-":
        caps = true
        continue;
      case "_":
        caps = true
        continue;
      default:
        if (caps) { //capitalize this letter
          letter = letter.toUpperCase()
          caps = false
        }
        break;
    }

    //add the result to our string
    string = string + letter
  }

  //return resulting string
  return string
}
/*
  Ember's Feedback:
  - Great job!
  - small point just so you are aware, you can perform the same code for multiple
    cases if you let it fall through
*/
// small refactor
for (; ;) {
  switch (letter) {
    case "-":
    case "_":
      caps = true
      continue;
    default:
      if (caps) { //capitalize this letter
        letter = letter.toUpperCase()
        caps = false
      }
      break;
  }
}
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
/*  Regex here gets either a - or a _ and the thing after it, replacing it with
    what you return from the function you give to .replace.
    The function you gave to .replace ignores the whole match, which is the 1st parameter.
    Instead you get the 1st capture group and uppercase it.
    The capture group being the parentheses, which is the thing directly after the - or _
*/
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
