function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
/*
  Ember's Feedback:
  - Nice job!!
  - Regex here gets either a - or a _ and the thing after it, replacing it with
    what you return from the function you give to .replace.
    The function you gave to .replace ignores the whole match, which is the 1st parameter.
    Instead you get the 1st capture group and uppercase it.
    The capture group being the parentheses, which is the thing directly after the - or _
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
// function toCamelCase(str) {
//   let answer;
//   if (str.includes("-")) {
//     answer = str
//       .split("-")
//       .map(function (part, index) {
//         if (index === 0) {
//           return part; // First word remains as is
//         }
//         return part.charAt(0).toUpperCase() + part.slice(1);
//       })
//       .join("");
//   } else if (str.includes("_")) {
//     answer = str
//       .split("_")
//       .map(function (part, index) {
//         if (index === 0) {
//           return part; // First word remains as is
//         }
//         return part.charAt(0).toUpperCase() + part.slice(1);
//       })
//       .join("");
//   } else {
//     answer = str; // If neither "-" nor "_" is found, return the original string
//   }
//   console.log(answer);
// }

// Index at to ignore first word[1]

/*
It looks like we have to find the - and then capitalize the word
right after it.

split at the - or the _
get the next Character

*/
