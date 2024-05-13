function pigIt(str) {
  // Split the string into an array
  let words = str.split(' ');

  // loop through each word
  for (i = 0; i < words.length; i++) {
    let word = words[i];
    // Checking if the word contains only alphabetic characters
    if (/^[A-Za-z]+$/.test(word)) {
      // Move the first letter to the end and add "ay"
      let firstLetter = word[0];
      let restOfWord = word.slice(1);
      words[i] = restOfWord + firstLetter + 'ay';
    }
    // If the word ends with punctuation, keep it at the end
    if (/[\W]$/.test(word)) {
      let punctuation = word[word.length - 1];
      words[i] = words[i].slice(0, -2) + punctuation;
    }
  }

  // Join the words back into a string
  let result = words.join(' ');
  
  return result;
}

