/* Check if each vowel is in the string.
  Whichever one is not, return its index. */

  const vowels = ["A", "E", "I", "O", "U"]

  function absentVowel(x){
    x = x.toUpperCase();
    for (vowel of vowels) {
      if (!x.includes(vowel)) {
        return vowels.indexOf(vowel);
      }
    }
  }