function absentVowel(inputString) {

  let vowels = "aeiou";

  for (let i in vowels) {

    // loop through the vowels
    // attempt to find the index of the vowel in the input string, returning -1 if it is not found
    // Check which vowel was not found ("index" of -1)
    // return the number value associated with that vowel.
    if (inputString.indexOf(vowels[i]) === -1) {

      // Number will attempt to turn the argument into a number value, NaN if it fails
      // This is necessary because i is a string (a quirk of for in loops), but the return value from
      // the function must be a number data type
      return Number(i);
    }
  }
}

// create var for vowels
// create for loop if the vowel = -1 return number(i)

/*
  Ember's Feedback:
  - Good job!
  - rename this file to follow the class convention
  - use triple equals whenever possible
*/
// Alternate solution
function absentVowel(x) {
  return ["a", "e", "i", "o", "u"].findIndex(vowel => !x.includes(vowel));
}
