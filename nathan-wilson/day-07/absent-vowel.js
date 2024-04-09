function absentVowel(x) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let lowerCaseString = x.toLowerCase();

  for (let i = 0; i < vowels.length; i++) {
    if (lowerCaseString.includes(vowels[i]) === false) {
      return i;
    }
  }
}

// The parameter is a string with only 1 vowel missing

// They are expecting a number representing the index of the missing vowel

// "John Doe hs seven red pples under his bsket"), 0

// I could get the index wrong, I could mess up the type of parameter or return value

// Have an array of the vowels, loop through that array and for each one see if the text contains that vowel, if not return that index

// I can do this, I just need to make sure I use the right methods
