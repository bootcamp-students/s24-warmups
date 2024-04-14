function absentVowel(x) {
  const vowelArray = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < vowelArray.length; i++) {
    if (!x.includes(vowelArray[i])) {
      return i;
    }
  }
}
/*
i have to receive a string, and find what vowel is missing
i can make an array of vowels and compare the string against the array
output needs to be a number representing a vowel
i can use a for loop to move through the array one by one
if V(vowel) of x(string !== a)
console.log(vowelArray[0])
*/

/*
  Ember's Feedback:
  - Good job!
  - Really superb :D
*/
// Alternate solution
function absentVowel(x) {
  return ["a", "e", "i", "o", "u"].findIndex(vowel => !x.includes(vowel));
}
