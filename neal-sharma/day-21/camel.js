/*Precept
Parameters- Take a string of dashed words and cameCase them. Only cap if already capped in
original string.
Return- Return a string that is camelCased and capitalized if required.
Example- "the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
Concerns- Capitalizing only strings that already have a capital. .replace or .replaceAll?
Explain- start by replacing all - with _ then split the string by _. if the string is empty
return an empty string. loop over array, starting with the second letter of the array so
the first letter stays the same. we then upper case the first letter of the each word after a _.
then slice the rest of the word onto it. we then return the the array and join it into one string.

Positive self talk - the best :)
Translate-
*/

function toCamelCase(str) {
  let split = str.replaceAll('-', '_').split('_');
  if (split.length === 1) {
    return split[0];
  }

  for (let i = 1; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].slice(1);
  }
  // spit[i][0] = first letter + split[i].slice(1) = rest of word. w/ out slice we only
  // return the first letters capitalized.

  return split.join('');
}

/*
  Ember's Feedback:
  - Great job!!
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
