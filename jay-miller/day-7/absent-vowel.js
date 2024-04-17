const absentVowel = (string) => {
  const vowelArray = ['a', 'e', 'i', 'o', 'u'];
  let vowelObj = {};

  for (let i = 0; i < string.length; i++) {
    vowelObj[string[i]] = true;
  }

  for (let j = 0; j < vowelArray.length; j++) {
    if (vowelObj[vowelArray[j]] === undefined) {
      return j;
    }
  }
}
/*
  Ember's Feedback:
  - Very interesting approach!
  - Good job getting to a solution
  - Great foray into objects :D
  - Add some pseudo code, it is what will make this click and what will get your hired!
*/
// Alternate solution
function absentVowel(x) {
  return ["a", "e", "i", "o", "u"].findIndex(vowel => !x.includes(vowel));
}
