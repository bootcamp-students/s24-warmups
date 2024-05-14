/*
Instructions: Complete the method/function so that it converts dash/underscore delimited words
into camel casing. The first word within the output should be capitalized only if the original
word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
The next words should be always capitalized.
Examples: "the-stealth-warrior" gets converted to "theStealthWarrior"
Params: given string
Return: joined string
Solution: guard clause for blanks, then split the string based on dashes and return uppercase joined

Given Code:
function toCamelCase(str){

}
*/
function toCamelCase(str) {
  if (str === '') {
    return ''
  }
  let newString = str.split(/(?:-|_)+/)
  // up to this point the string removes dashes and lower dash
  newString.map((words) => {
    words.chartAt(0).toUpperCase() + words.slice(1);
  })
  newString.join("");
  return newString
}
/*
  Ember's Feedback:
  - the (?:) means a non capturing group. Not actually necessary because you could get
    away with just using this /-|_+/
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

/*
They're using RegExp: which is used for matching text with a pattern
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Henry:
let arr = str.split(/(?:-|_) +/)
for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
let newStr = arr.join("";
return newStr)
}

Ember:
function toCamelCase(str){
return str.replaceAll(/[-_](.)/g, (match, p1) => p1.toUpperCase());
}
*/

// let noDash = newString.map((words) => {
//     if (words !=== "-" || words !=== "_") {
//         return words.split("").join("")
//     } else if (words === "-" || words === "_") {
//         //remove
//     }


