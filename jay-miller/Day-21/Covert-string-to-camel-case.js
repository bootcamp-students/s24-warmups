function toCamelCase(str) {
  str = str.split("")
  return str.map(function (el, i) {
    if (el === "_" || el === "-") {
      el = str[i + 1].toUpperCase();
      str.splice(i + 1, 1);
    }
    return el;
  })
    .join("");
}
/*
  Ember's Feedback:
  - These are not good comments, you need to explain the logic or you need to explain
    what is happening in plain English.
  - file name does not conform to the class standard
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
