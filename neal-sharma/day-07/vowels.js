/* precept
parameters- find the missing vowel from a given string.
return- return the associated number of the missing vowel
example- "John Doe hs seven red pples under his bsket" =>  0  ; missing: "a"
concerns- no idea how to figure this out in code but im sure ill get there. Maybe array?
explain- see below
positive self talk- ive figured them all out so far im sure ill figure this one out too.
translate- find the index of the vowels and subtract 1
*/

function absentVowel(x) {
  // store vowels in variable
  let vowels = 'aeiou';
  // loop through the vowels
  // find the index of the vowels and subtract 1. ??? no
  // attempt to find the index of the vowel in the input string, returning -1 if it is not found
  // Check which vowel was not found ("index" of -1)
  // return that vowel.
  for (let i in vowels) {
    if (x.indexOf(vowels[i]) === -1) {
      // Number will attempt to turn the argument into a number value, NaN if it fails
      // This is necessary because i is a string (a quirk of for in loops), but the return value from
      // the function must be a number data type
      return Number(i);
    }
  }
}
/*
  Ember's Feedback:
  - Good job!
  - The code comments went a little off the rails, lets talk over that if you have questions. I made alterations.
  - use triple equals whenever possible
*/
// Alternate solution
function absentVowel(x) {
  return ["a", "e", "i", "o", "u"].findIndex(vowel => !x.includes(vowel));
}
