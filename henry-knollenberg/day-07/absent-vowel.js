/* Check if each vowel is in the string.
  Whichever one is not, return its index. */

const vowels = ["A", "E", "I", "O", "U"]

function absentVowel(x) {
  x = x.toUpperCase();
  for (let vowel of vowels) {
    if (!x.includes(vowel)) {
      return vowels.indexOf(vowel);
    }
  }
}

/*
  Ember's Feedback:
  - Good job!
  - Don't forget let, we will start using "use strict;" which will throw an error to help you remember
*/
// Alternate solution
function absentVowel(x) {
  return ["a", "e", "i", "o", "u"].findIndex(vowel => !x.includes(vowel));
}
