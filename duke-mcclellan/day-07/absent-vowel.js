// return a vowel (index)
// Loop to cycle through index values of the array

function absentVowel(inputString) {
  let vowels = "aeiou";

  for (let i in vowels) {
    if (inputString.indexOf(vowels[i]) === -1) {
      return Number(i);
    }
  }
}

/*
  Ember's Feedback:
  - Really great job!!!
  - I believe I explained the -1 and Number(i) in class, lmk if you still have questions
*/
// Alternate solution
function absentVowel(x) {
  return ["a", "e", "i", "o", "u"].findIndex(vowel => !x.includes(vowel));
}
