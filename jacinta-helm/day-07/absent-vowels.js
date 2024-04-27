function absentVowel(x) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (const vowel of vowels) {
    if (!x.includes(vowel)) {
      return vowels.indexOf(vowel);
    }
  }
  return;
}

// p figure out which vowel is missing
// using for of() and indexOf()
// a=0, e=1, i=2, o=3, u=4 create an array.

/*
  Ember's Feedback:
  - Great job! :D
*/
// Alternate solution
function absentVowel(x) {
  return ["a", "e", "i", "o", "u"].findIndex(vowel => !x.includes(vowel));
}
