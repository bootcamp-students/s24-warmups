/*
split string by "-" and "_"
iterate through array
    for each index (except first), charAT(0) - capitalize
join the new, return
*/


function toCamelCase(str) {
  let arr = str.split(/(?:-|_)+/)
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let newStr = arr.join("");
  return newStr;
}
/*
  Ember's Feedback:
  - oh ok so the ?: means a non capturing group. Not actually necessary because you could get
    away with just using this /-|_+/
  - Excellent job!! Really awesome job :D
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
