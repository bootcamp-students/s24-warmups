function toCamelCase(str) {
    let words = str.split('');

    for (let i = 0; i < words.length; i++) {
      if (words[i] === '_' || words[i] === '-') {
        // Remove underscore or dash and capitalize the next letter
        words.splice(i, 1);
        if (i < words.length) {
          words[i] = words[i].toUpperCase();
        }
      }
    }

    // Join the words back together and return
    return words.join('');
  }

  //P create a function that converts dashes/underscores to camel case.
  //R my function should return a string with no dashes or underscores.
  //E "the_stealth_warrior"), "theStealthWarrior"
  //C my string doesn't have any dashes or underscores.
  //Explain. I need to get rid of the dashes by replacing the underscores and dashes with a space.
  //If the word in the index is equal to a dash or underscore, then i will remove it with the splice method .
  //Then capitalize the word in that array as a capital letter.

  /*
    Ember's Feedback:
    - Really wonderful job!!
    - Great use of splice! :D
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
