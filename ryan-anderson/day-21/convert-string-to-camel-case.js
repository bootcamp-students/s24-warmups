function toCamelCase(str) {
  if (str === '') {
    return ""
  }
  let newStr = (str.replaceAll(/[^a-zA-Z0-9]/g, ' ')).split(' ')

  for (let i = 1; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
  }
  return newStr.join('')
}

// if input is empty string, return empty string back
// replace non-letter characters with spaces
// keep first letter in same case
// if a letter comes after a space, capitalize it

/*
  Ember's Feedback:
  - Great job! That is some really useful regex!
  - Really awesome work :D
*/
// Alternative Solutions
/* Regex here gets either a - or a _ and the thing after it, replacing it with
    what you return from the function you give to .replace.
    The function you gave to .replace ignores the whole match, which is the 1st parameter.
    Instead you get the 1st capture group and uppercase it.
    The capture group being the parentheses, which is the thing directly after the - or _
*/
function toCamelCase(str) {
  return str.replaceAll(/[-_](.)/g, (match, p1) => p1.toUpperCase());
}
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
