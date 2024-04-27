function absentVowel(x) {
  // check if each letter is found in string
  // return corresponding index
  if (x.includes("a") === false && x.includes("A") === false) {
    return 0;
  } else if (x.includes("e") === false && x.includes("E") === false) {
    return 1;
  } else if (x.includes("i") === false && x.includes("I") === false) {
    return 2;
  } else if (x.includes("o") === false && x.includes("O") === false) {
    return 3;
  } else if (x.includes("u") === false && x.includes("U") === false) {
    return 4;
  }
}
/*
  Ember's Feedback:
  - Good job!
  - use triple equals whenever possible
*/
// Alternate solution
function absentVowel(x) {
  return ["a", "e", "i", "o", "u"].findIndex(vowel => !x.includes(vowel));
}
